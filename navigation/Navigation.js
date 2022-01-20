import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../src/screens/SplashScreen';
import WelcomeScreen from '../src/screens/WelcomeScreen';

const Navigation = () => {
  const [splash, setStplash] = useState(true)
  const Stack = createNativeStackNavigator()

  useEffect(() => {
    setTimeout(() => {
      setStplash(false)
    }, 1500);
  }, [])
  return (
    <Stack.Navigator>
      {splash
        ? <Stack.Screen
            name="splash"
            component={SplashScreen}
            options={{
            headerShown: false,
          }}
        />
        : <Stack.Group>
            <Stack.Screen
              name="welcome"
              component={WelcomeScreen}
              options={{
              headerShown: false,
            }}
            />
        </Stack.Group>
      }
    </Stack.Navigator>
  )
};

export default Navigation;
