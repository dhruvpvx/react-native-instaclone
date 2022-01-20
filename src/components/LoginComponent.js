import { Pressable, StyleSheet, Text, TextInput,Image, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SCREEN_WIDTH } from '../screens/Dimentions';

const LoginComponent = () => {
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View>
      <TextInput
        placeholder='Phone number, email address or username'
        value={userId}
        onChangeText={(text) => setUserId(text)}
        style={styles.textInput}
      />
      <TextInput
        placeholder='Password'
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.textInput}
        secureTextEntry={true}
      />
      <TouchableOpacity>
        <View style={{
          ...styles.loginBtn,
          opacity: userId == '' || password == '' ? 0.5 : 1
        }}>
          <Text style={styles.loginText}>
            Log In
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.forgotBtn}>
        <Text>
          Forgot your login details? </Text>
        <Pressable>
          <Text style={{ color: 'blue' }}>
            Get help logging in.
          </Text>
        </Pressable>
      </View>
      <View style={styles.lineView}>
        <View style={styles.orLine}></View>
        <Text> OR </Text>
        <View style={styles.orLine}></View>
      </View>
      <TouchableOpacity>
        <View style={styles.loginBtn}>
          <View style={styles.fbLogo}>
            <Image 
            style={{height: '100%', width: '100%'}}
            source={require('../assets/icons/facebook.png')}/>
          </View>
          <Text style={styles.loginText}>
            Log In With Facebook
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 0.8,
    marginTop: 10,
    marginHorizontal: SCREEN_WIDTH - 400,
    paddingVertical: 10,
    paddingLeft: 15,
    borderRadius: 3,
    fontSize: 15,
    borderColor: '#DCDCDC',
    backgroundColor: '#ffffff'
  },
  loginBtn: {
    marginHorizontal: SCREEN_WIDTH - 400,
    flexDirection: 'row',
    backgroundColor: '#405DE6',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    borderRadius: 3,
    paddingVertical: 10
  },
  loginText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  forgotBtn: {
    flexDirection: 'row',
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  orLine: {
    borderWidth: 0.6,
    opacity: 0.3,
    width: '45%',
    height: 1
  },
  lineView: {
    marginHorizontal: SCREEN_WIDTH - 400,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  fbLogo: {
    height: 25,
    width: 25,
    marginRight: 5,
  }
});
