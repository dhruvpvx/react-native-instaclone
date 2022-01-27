import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfileScreen from '../../src/screens/EditProfileScreen';
import ProfileScreen from '../../src/screens/TabScreens/ProfileScreen';

const ProfileNavigation = () => {
  const { Navigator, Screen } = createNativeStackNavigator()
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='profileMain' component={ProfileScreen} />
      <Screen name='editProfile' component={EditProfileScreen} />
    </Navigator>
  )
};

export default ProfileNavigation;
