import { Alert, Platform, View } from 'react-native';
import React, { useEffect } from 'react';
import {
  launchImageLibraryAsync,
  requestMediaLibraryPermissionsAsync
} from 'expo-image-picker'
import { useIsFocused, useNavigation } from '@react-navigation/native';

const AddPostScreen = () => {
  const { navigate } = useNavigation()
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      getPermission()
      pickImage()
    }
  }, [isFocused])

  const pickImage = async () => {
    let result = await launchImageLibraryAsync();

    if (!result.cancelled) {
      navigate('finishPost', { image: result.uri })
    } else if (result.cancelled) {
      navigate('home')
    }
  }

  const getPermission = async () => {
    if (Platform.OS !== 'web') {
      const { status } =
        await requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }
  return <View />
};


export default AddPostScreen
