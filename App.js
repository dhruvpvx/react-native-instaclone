import { initializeApp } from "firebase/app";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation/Navigation';
import { Provider } from "react-redux";
import store from "./redux/store";
import { useEffect } from "react";

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyA9RHdcIjsThTlIPgCizza3oGYFo9wjzTE",
    authDomain: "instaclone-e09ea.firebaseapp.com",
    projectId: "instaclone-e09ea",
    storageBucket: "instaclone-e09ea.appspot.com",
    messagingSenderId: "911504206190",
    appId: "1:911504206190:web:6597cee8e0dc886153397f",
    measurementId: "G-5JSV4R7LFC"
  };

  useEffect(() => {
    initializeApp(firebaseConfig);
  }, [])
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer >
      </SafeAreaProvider>
    </Provider>
  )
}