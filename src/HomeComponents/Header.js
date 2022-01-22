import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { SCREEN_WIDTH } from '../screens/Dimentions';
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.image}>
        <Image
          style={{ height: '100%', width: '100%' }}
          source={require('../assets/icons/Instagram_title.png')}
        />
      </View>
      <TouchableWithoutFeedback>
        <MaterialCommunityIcons
          name="message-processing-outline"
          size={30}
          color="black"
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  image: {
    width: 140,
    height: 45,
  }
});
