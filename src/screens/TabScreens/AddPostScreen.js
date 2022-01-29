import { Alert, Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
  launchImageLibraryAsync,
  requestMediaLibraryPermissionsAsync
} from 'expo-image-picker'
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { createNewPost } from '../../../redux/actions';
import { SCREEN_WIDTH } from '../Dimentions'

const AddPostScreen = ({ createNewPost, isUploading }) => {
  const [image, setImage] = useState(null)
  const [caption, setCaption] = useState('');

  useEffect(async () => {
    getPermission()
    pickImage()
  }, [])

  const pickImage = async () => {
    let result = await launchImageLibraryAsync();

    if (!result.cancelled) {
      setImage(result.uri)
      setimagePath({ uri: result.uri })
    }
  }

  const getPermission = async () => {
    if (Platform.OS !== 'web') {
      const { status } =
        await requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

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
          <Text style={{ fontSize: 25 }}>New Post</Text>
        </View>
        <TouchableOpacity onPress={() => image == null
          ? Alert.alert('Please select an image')
          : createNewPost(image, caption)
        }>
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
          {/* <Image/> */}
        </View>
        <TextInput
          value={caption}
          onChangeText={text => setCaption(text)}
          style={styles.textInput}
          placeholder='Write a caption...'
        />
        <TouchableOpacity onPress={pickImage} style={styles.image}>
          <View >
            {image == null
              ? null
              : <Image
                style={{ width: '100%', height: '100%' }}
                source={{ uri: image }}
              />
            }
          </View>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView >
  );
};

const mapStateToProps = ({ PostUpload }) => {
  const { isUploading } = PostUpload
  return { isUploading }
}

export default connect(mapStateToProps, { createNewPost })(AddPostScreen);

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
