import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
const SplashScreen = () => {
  return (
      <SafeAreaView style={styles.splash}>
        <Image
          style={styles.logo}
          source={require('../assets/icons/instagram.png')}
        />
      </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  logo: {
    height: 65,
    width: 65
  }
});
