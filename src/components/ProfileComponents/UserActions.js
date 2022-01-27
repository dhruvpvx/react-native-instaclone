import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SCREEN_WIDTH } from '../../screens/Dimentions';

const UserActions = ({ self }) => {
  const [isFollowed, setIsFollowed] = useState(true);
  return (
      <View >
        {self
          ? <View style={{...styles.actions, justifyContent: 'center'}}>
            <TouchableOpacity style={styles.btn}>
              <Text>Edit Profile</Text>
            </TouchableOpacity>
          </View>
          : (
            <View style={styles.actions}>
              <TouchableOpacity
                style={{
                  ...styles.btn,
                  backgroundColor:
                    isFollowed
                      ? 'white'
                      : 'blue'
                }}
                onPress={() => setIsFollowed(!isFollowed)}>
                <View>
                  {isFollowed
                    ? <Text style={{ color: 'black' }}>Following</Text>
                    : <Text style={{ color: '#ffffff' }}>Follow</Text>
                  }
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <View >
                  <Text>Message</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
      </View>
  );
}
export default UserActions;

const styles = StyleSheet.create({
  actions: {
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  btn: {
    borderWidth: 0.5,
    width: '48%',
    alignItems: 'center',
    paddingVertical: 10,
  }
})
