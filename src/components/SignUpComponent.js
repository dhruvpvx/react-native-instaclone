import { StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { SCREEN_WIDTH } from '../screens/Dimentions';


const SignUpComponent = () => {

  return (
    <View>
      <TextInput
        placeholder='Email address'
        style={styles.textInput}
      />
      <TextInput
        placeholder='Enter Password'
        style={styles.textInput}
        secureTextEntry={true}
      />
      <TextInput
        placeholder='Re-Enter Password'
        style={styles.textInput}
        secureTextEntry={true}
      />
      <TouchableOpacity>
        <View style={styles.loginBtn}>
          <Text style={styles.loginText}>
              Sign Up
            </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.lineView}>
        <View style={styles.orLine}></View>
        <View style={styles.orLine}></View>
      </View>
    </View>
  );
};

export default SignUpComponent


const styles = StyleSheet.create({
  textInput: {
    borderWidth: 0.8,
    marginTop: 10,
    marginHorizontal: 0.0403935202845821 * SCREEN_WIDTH,
    paddingVertical: 10,
    paddingLeft: 15,
    borderRadius: 3,
    fontSize: 15,
    borderColor: '#DCDCDC',
    backgroundColor: '#ffffff'
  },
  loginBtn: {
    marginHorizontal: 0.0403935202845821 * SCREEN_WIDTH,
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
    width: '45%',
  },
  lineView: {
    flexDirection: 'row',
  },
  fbLogo: {
    height: 25,
    width: 25,
    marginRight: 5,
  },
  errorView: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  },
  errorText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  }
});
