import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

import { connect } from 'react-redux';
import { createNewPost, postUploaded } from '../../redux/actions'
import { SCREEN_WIDTH } from './Dimentions'
import { useNavigation } from '@react-navigation/native';

const FinishPostingScreen = ({
  createNewPost,
  route,
  isUploading,
  isUploaded,
  error,
  postUploaded
}) => {
  const [caption, setCaption] = useState('');
  const image = route.params.image
  const { goBack, navigate } = useNavigation()
  useEffect(() => {
    if (isUploaded) {
      setTimeout(() => {
        navigate('home')
        goBack()
        postUploaded()
      }, 1500);
    }
  }, [isUploaded])
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: 'white',
    }}>
      <View style={styles.header}>
        <View style={{
          flexDirection: 'row',
          width: '32%',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <TouchableOpacity onPress={() => goBack()}>
            <AntDesign
              name='arrowleft'
              size={30}
              color='black'
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 25 }}>New Post</Text>
        </View>
        <TouchableOpacity onPress={() => createNewPost(image, caption)}>
          <AntDesign
            name="check"
            size={30}
            color="blue" />
        </TouchableOpacity>
      </View>
      <View style={{
        width: SCREEN_WIDTH,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
      }}>
        <View style={styles.userDP}>
        </View>
        <TextInput
          value={caption}
          onChangeText={text => setCaption(text)}
          style={styles.textInput}
          placeholder='Write a caption...'
        />
        <TouchableOpacity onPress={() => goBack()} style={styles.image}>
          <View >
            <Image
              style={{ width: '100%', height: '100%' }}
              source={{ uri: image }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {error == ''
          ? isUploading
            ? <ActivityIndicator size={65} color='blue' />
            : <>
              {isUploaded
                ? <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <AntDesign
                    name="checkcircleo"
                    size={65}
                    color="green"
                  />
                  <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 15 }}>
                    Post Has Been Uploaded
                  </Text>
                </View>
                : null}
            </>
          : <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <AntDesign
              name="exclamationcircleo"
              size={65}
              color="red"
            />
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 15 }}>
              Post Uploading Failed
            </Text>
            <Text>{error}</Text>
          </View>
        }
      </View>
    </SafeAreaView >
  );
};

const mapStateToProps = ({ PostUpload }) => {
  const { isUploading, isUploaded, error } = PostUpload
  return { isUploading, isUploaded, error }
}

export default connect(mapStateToProps, { 
  createNewPost,
  postUploaded
 })(FinishPostingScreen)

const styles = StyleSheet.create({
  header: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  userDP: {
    width: '10%',
    aspectRatio: 1,
    borderRadius: 50,
    backgroundColor: 'pink'
  },
  image: {
    width: '10%',
    aspectRatio: 1,
  },
  textInput: {
    width: '80%',
    paddingLeft: 20
  }
});
