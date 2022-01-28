import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SCREEN_WIDTH } from '../../screens/Dimentions';
import { logOut } from '../../../redux/actions';
import { connect } from 'react-redux';

const Header = ({ logOut }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.image}>
        <TouchableWithoutFeedback onPress={() => logOut()}>
          <Image
            style={{ height: '100%', width: '100%' }}
            source={require('../../assets/icons/Instagram_title.png')}
          />
        </TouchableWithoutFeedback>
      </View>
      <TouchableWithoutFeedback>
        <MaterialCommunityIcons
          name="message-processing-outline"
          size={30}
          color="black"
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default connect(null, { logOut })(Header);

const styles = StyleSheet.create({
  headerContainer: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  image: {
    width: 140,
    height: 45,
  }
});
