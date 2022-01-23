import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/HomeComponents/Header';
import Stories from '../../components/HomeComponents/Stories';
import Posts from '../../components/HomeComponents/Posts'
const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header/>
      <Posts/>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
