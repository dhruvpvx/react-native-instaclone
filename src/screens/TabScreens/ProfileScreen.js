import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../../components/ProfileComponents/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserDetails from '../../components/ProfileComponents/UserDetails';

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <Header/>
      <UserDetails/>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
