import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Header = ({ self, username }) => {
  const { pop } = useNavigation()
  console.log(self, 'header');
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerDetails}>
        {self
          ? null
          : <TouchableOpacity onPress={() => pop()}>
            <AntDesign
              name="arrowleft"
              size={35}
              color="black"
            />
          </TouchableOpacity>
        }
        <Text style={styles.headerText}>
          {username}
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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    alignItems: 'center'
  },
  headerDetails: {
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});
