import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../HomeComponents/Header';
import Stories from '../../HomeComponents/Stories';
import Posts from '../../HomeComponents/Posts';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header/>
      <Stories/>
      <Posts/>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
