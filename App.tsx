import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './pages/intro/routesIntro';
import Auth from './pages/auth/routesAuth';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RoutesHome from './pages/app/routesHome';
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
} from '@expo-google-fonts/ubuntu';

export default function App() {
  const RootStack = createStackNavigator<RootStackParamList>();
  const [onboarding, setOnboarding] = useState<boolean | null>(null);
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
  let [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
  });

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('onboarding');
      if (value === null) {
        await AsyncStorage.setItem('onboarding', 'true');
        setOnboarding(true);
      } else {
        setOnboarding(value === 'true');
      }
    } catch (error) {
      console.error('Error checking onboarding status:', error);
    }
  };

  const checkLoggedInUser = async () => {
    try {
      const user = await AsyncStorage.getItem('loggedInUser');
      setLoggedInUser(user);
    } catch (error) {
      console.error('Error checking logged-in user:', error);
    }
  };

  useEffect(() => {
    checkOnboarding();
    checkLoggedInUser();
    console.log(fontsLoaded);
  }, []);

  if (onboarding === null || !fontsLoaded) {
    return null;
  }


  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Intro" component={Intro} />
      <RootStack.Screen name="Home" component={RoutesHome} />
      <RootStack.Screen name="Auth" component={Auth} />
        {/* {onboarding ? (
          <RootStack.Screen name="Intro" component={Intro} />
        ) : loggedInUser ? (
          <RootStack.Screen name="Home" component={RoutesHome} />
        ) : (
          <RootStack.Screen name="Auth" component={Auth} />
        )} */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
