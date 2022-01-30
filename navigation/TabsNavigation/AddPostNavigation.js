import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FinishPostingScreen from '../../src/screens/FinishPostingScreen';
import AddPostScreen from '../../src/screens/TabScreens/AddPostScreen';

const AddPostNavigation = () => {
  const { Navigator, Screen } = createNativeStackNavigator()
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='addPostMain' component={AddPostScreen} />
      <Screen name='finishPost' component={FinishPostingScreen} />
    </Navigator>
  )
};

export default AddPostNavigation;
