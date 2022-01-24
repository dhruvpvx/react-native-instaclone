import {
  Foundation,
  Ionicons,
  AntDesign,
  FontAwesome
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ReelsScreen from "../../src/screens/TabScreens/ReelsScreen";
import ActivityNavigation from "./ActivityNavigation";
import HomeNavigation from "./HomeNavigation";
import ProfileNavigation from "./ProfileNavigation";
import SearchNavigation from "./SearchNavigation";

const { Screen, Navigator } = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Navigator>
      <Screen
        name='home'
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Foundation
                name="home"
                size={35}
                color={tabInfo.focused ? "black" : "#8e8e93"}
              />
            )
          }
        }}
      />
      <Screen
        name='search'
        component={SearchNavigation}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name={tabInfo.focused ? 'search' : 'search-outline'}
                size={35}
                color="black"
              />
            )
          }
        }}
      />
      <Screen
        name='reels'
        component={ReelsScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <AntDesign
                name={tabInfo.focused ? 'plussquare' : 'plussquareo'}
                size={35}
                color="black"
              />
            )
          }
        }}
      />
      <Screen
        name='activity'
        component={ActivityNavigation}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <AntDesign
                name={tabInfo.focused ? 'heart' : 'hearto'}
                size={35}
                color="black"
              />
            )
          }
        }}
      />
      <Screen
        name='profile'
        component={ProfileNavigation}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <FontAwesome
                name={tabInfo.focused ? 'user' : 'user-o'}
                size={35}
                color="black"
              />
            )
          }
        }}
      />
    </Navigator>
  )
};

export default TabNavigation;
