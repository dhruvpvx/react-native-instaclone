import { Button, StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { SCREEN_WIDTH } from './Dimentions';
import { addUsername } from '../../redux/actions';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const EditProfileScreen = ({ addUsername }) => {
  const [text, setText] = useState('')
  const { pop } = useNavigation()

  return (
    <View style={{
      backgroundColor: 'white',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <TextInput
        placeholder="Usermname"
        value={text}
        onChangeText={text => setText(text)}
        style={styles.textInput}
      />
      <Button
        title="Save"
        onPress={() => addUsername(text, pop)}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default connect(null, { addUsername })(EditProfileScreen)

const styles = StyleSheet.create({
  textInput: {
    width: SCREEN_WIDTH * 0.5049190035572759,
    paddingVertical: 10,
    borderRadius: 15,
    borderWidth: 1,
    paddingLeft: 30,
    marginBottom: 30
  }
});
