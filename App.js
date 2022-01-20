import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation/Navigation';

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer >
    </SafeAreaProvider>
  )
}