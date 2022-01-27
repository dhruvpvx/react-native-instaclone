import { Image, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SCREEN_WIDTH } from './Dimentions';
import LoginComponent from '../components/LoginComponent';
import SignUpComponent from '../components/SignUpComponent';
import { connect } from 'react-redux';


const WelcomeScreen = () => {
  const [login, setLogin] = useState(true)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={styles.language}>
        <Text>English (United States)</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Image
            style={{ height: '100%', width: '100%' }}
            source={require('../assets/icons/Instagram_title.png')}
          />
        </View>
        {login
          ? <LoginComponent />
          : <SignUpComponent />}
      </View>
      <TouchableWithoutFeedback onPress={() => setLogin(!login)}>
        {login
          ? <View style={styles.toggle}>
            <Text>Don't have an account? </Text>
            <Text style={{ color: 'blue' }}>Sign up.</Text>
          </View>
          : <View style={styles.toggle}>
            <Text>Already have an account? </Text>
            <Text style={{ color: 'blue' }}>Log in.</Text>
          </View>}
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default connect(null, {})(WelcomeScreen)

const styles = StyleSheet.create({
  language: {
    flexDirection: 'row',
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.6
  },
  titleView: {
    height: 65,
    width: 200,
    marginBottom: 10,
    backgroundColor:'white'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  toggle: {
    flexDirection: 'row',
    width: SCREEN_WIDTH,
    borderTopWidth: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    paddingVertical: 15,
  }
});
