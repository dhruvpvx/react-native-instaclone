import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { SCREEN_WIDTH } from '../../screens/Dimentions';

const UserDetails = ({username}) => {
  return (
    <View>
      <View style={styles.userDetails}>
        <View style={styles.userDp}>

        </View>
        <View style={styles.countDetails}>
          <TouchableWithoutFeedback>
            <View style={styles.count}>
              <Text style={styles.countText}>5</Text>
              <Text style={styles.countText}>Posts</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.count}>
              <Text style={styles.countText}>206</Text>
              <Text style={styles.countText}>Followers</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.count}>
              <Text style={styles.countText}>244</Text>
              <Text style={styles.countText}>Following</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <Text style={{ fontWeight: 'bold' }}>{username}</Text>
      <Text>User Bio</Text>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  userDetails: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingRight: 15
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
    alignItems: 'center',
    fontSize: 20
  },
  countText: {
    fontSize: 18,
    fontWeight: '500'
  }
});
