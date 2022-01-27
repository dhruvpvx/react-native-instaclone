import { Pressable, StyleSheet, Text, TextInput, Image, TouchableOpacity, View, ActivityIndicator, Alert } from 'react-native';
import React from 'react';
import { SCREEN_WIDTH } from '../screens/Dimentions';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, fbLogin } from '../../redux/actions';

const LoginComponent = ({
  email,
  password,
  emailChanged,
  passwordChanged,
  loginUser,
  error,
  loading,
  fbLogin
}) => {

  const getError = () => {
    if (error) {
      return (
        <View style={styles.errorView}>
          <Text style={styles.errorText}>
            Authentication Failed
          </Text>
        </View>
      )
    }
    return null
  }
  // async function logIn() {
  //   try {
  //     await Facebook.initializeAsync({
  //       appId: '243384021303127',
  //     });
  //     const { type, token } =
  //       await Facebook.logInWithReadPermissionsAsync({
  //         permissions: ['public_profile'],
  //       });
  //     if (type === 'success') {
  //       // Get the user's name using Facebook's Graph API
  //       const facebookCredential = auth.FacebookAuthProvider.credential(token)
  //       auth().signInWithCredential(facebookCredential)
  //       .then(() => Alert.alert('Logged in!'))
  //       .catch((error) => Alert.alert(error.message))
  //       ;
  //     } else {
  //       // type === 'cancel'
  //     }
  //   } catch ({ message }) {
  //     alert(`Facebook Login Error: ${message}`);
  //   }
  // }
  return (
    <View>
      <TextInput
        placeholder='Phone number, email address or username'
        value={email}
        onChangeText={(text) => emailChanged(text)}
        style={styles.textInput}
      />
      <TextInput
        placeholder='Password'
        value={password}
        onChangeText={(text) => passwordChanged(text)}
        style={styles.textInput}
        secureTextEntry={true}
      />
      {getError()}
      <TouchableOpacity onPress={() => loginUser(email, password)}>
        <View style={{
          ...styles.loginBtn,
          opacity: email == '' || password == '' ? 0.5 : 1
        }}>
          {loading
            ? <ActivityIndicator size={20} color="white" />
            : <Text style={styles.loginText}>
              Log In
            </Text>}
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
      <TouchableOpacity onPress={() => logIn()}>
        <View style={styles.loginBtn}>
          <View style={styles.fbLogo}>
            <Image
              style={{ height: '100%', width: '100%' }}
              source={require('../assets/icons/facebook.png')} />
          </View>
          <Text style={styles.loginText}>
            Log In With Facebook
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = ({ LoginDetails }) => {
  const { email, password, loading, error } = LoginDetails
  return { email, password, loading, error }
}


export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
  fbLogin
})(LoginComponent)

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
    borderWidth: 0.6,
    opacity: 0.3,
    width: '45%',
    height: 1
  },
  lineView: {
    marginHorizontal: 0.0403935202845821 * SCREEN_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
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
