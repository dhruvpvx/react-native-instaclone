import { StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { SCREEN_WIDTH } from '../screens/Dimentions';

const SignUpComponent = () => {
  const [email, setEmail] = useState('')
  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput
        placeholder='Email'
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.textInput}
      />
    </View>
  );
};

export default SignUpComponent;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 0.8,
    marginTop: 10,
    flex: 1,
    marginHorizontal: SCREEN_WIDTH - 400,
    paddingVertical: 10,
    paddingLeft: 15,
    borderRadius: 3,
    fontSize: 15,
    borderColor: '#DCDCDC',
    backgroundColor: '#ffffff'
  },
});
