import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import SCREEN_WIDTH from '../../screens/Dimentions'


const Header = () => {
  const [self, setSelf] = useState(false);
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerDetails}>
        {self
          ? null
          : <TouchableOpacity>
            <AntDesign
              name="arrowleft"
              size={35}
              color="black"
            />
          </TouchableOpacity>
        }
        <Text style={styles.headerText}>
          Username
        </Text>
      </View>
      {self
        ? <Octicons
          name="three-bars"
          size={35}
          color="black"
        />
        : <MaterialCommunityIcons
          name="dots-vertical"
          size={35}
          color="black"
        />}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 15,
    alignItems: 'center'
  },
  headerDetails: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20
  }
});
