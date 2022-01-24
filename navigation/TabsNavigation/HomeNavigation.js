import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../src/screens/TabScreens/HomeScreen'
import ProfileScreen from '../../src/screens/TabScreens/ProfileScreen';


const Profile = ({route}) => {
  return <ProfileScreen self = {false} username={route.params.username}/>
}

const HomeNavigation = () => {
  const { Navigator, Screen } = createNativeStackNavigator()
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name='homeMain' component={HomeScreen} />
      <Screen name='homeProfile' component={Profile}/>
    </Navigator>
  );
};

export default HomeNavigation;
