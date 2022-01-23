import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SCREEN_WIDTH } from '../../screens/Dimentions';

const UserDetails = () => {
  return (
    <View style={styles.userDetails}>
      <View>
        <View style={styles.userDp}>

        </View>
        <Text>Username</Text>
      </View>
      <View style={styles.countDetails}>
        <View style={styles.count}>
          <Text>5</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.count}>
          <Text>206</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.count}>
          <Text>244</Text>
          <Text>Following</Text>
        </View>
      </View>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  userDetails: {
    flexDirection: 'row',
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25
  },
  userDp: {
    height: 75,
    width: 75,
    borderRadius: 50,
    backgroundColor: 'black'
  },
  countDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '65%',
    justifyContent: 'space-between'
  },
  count: {
    alignItems: 'center'
  }
});
