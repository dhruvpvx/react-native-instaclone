import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../components/ProfileComponents/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserDetails from '../../components/ProfileComponents/UserDetails';
import UserActions from '../../components/ProfileComponents/UserActions';
import Posts from '../../components/ProfileComponents/Posts';
const ProfileScreen = ({ self, username  }) => {
  return (
    <SafeAreaView style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
      <View style={{ paddingHorizontal: 20 }}>
        <Header self={self} username={username} />
        <UserDetails username={username} />
        <UserActions self={self} username={username} />
      </View>
      <Posts />
    </SafeAreaView>
  );
};

ProfileScreen.defaultProps = {
  self: true, 
  username: 'username'
}

export default ProfileScreen;

const styles = StyleSheet.create({});
