import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../src/screens/TabScreens/ProfileScreen';

const ProfileNavigation = () => {
  const { Navigator, Screen } = createNativeStackNavigator()
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='profileMain' component={ProfileScreen} />
    </Navigator>
  )
};

export default ProfileNavigation;
