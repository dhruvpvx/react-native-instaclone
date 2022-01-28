import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  launchImageLibraryAsync,
  requestMediaLibraryPermissionsAsync
} from 'expo-image-picker'
import { ref } from 'firebase/database';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddPostScreen = () => {
  const [image, setImage] = useState(null)
  const [isLoading, setisLoading] = useState(false);
  const [isUploaded, setisUploaded] = useState(false);
  const [imageHeight, setimageHeight] = useState(0);
  const [imageWidth, setimageWidth] = useState(0);
  const [imagePath, setimagePath] = useState({ uri: '../../../assets/favicon.png' });

  useEffect(async () => {
    getPermission()
  }, [])

  const pickImage = async () => {
    let result = await launchImageLibraryAsync();

    console.log(result)
    if (!result.cancelled) {
      setImage(result.uri)
      setisUploaded(true)
      setimagePath({ uri: result.uri })
      setimageWidth(result.width)
      setimageHeight(result.height)
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
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {image == null
        ? <Text style={{ fontSize: 20, marginBottom: 20 }}>
          No Image Selected Please Upload
        </Text>
        : <View style={{ height: imageHeight, width: 350, imageWidth: 20, borderWidth: 1 }}>
          <Image
            style={{ height: '100%', width: '100%' }}
            source={imagePath}
          />
        </View>
      }
      {isUploaded
        ? <Button title="Upload Image" onPress={pickImage} />
        : <Button title="Select Image" onPress={pickImage} />
      }
    </SafeAreaView>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({});
