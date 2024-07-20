
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HostParty from './hostParty';
import Indulge from './indulge';
import Enjoy from './enjoy';
import { useEffect } from 'react';

const IntroStack = createStackNavigator<IntroStackParamList>()

export default function Intro() {
  useEffect(()=>{
    console.log("Intro Screen!");
  },[])
  return (
    <NavigationContainer>
      <IntroStack.Navigator initialRouteName="HostParty" screenOptions={{headerShown: false}}>
        <IntroStack.Screen name="HostParty" component={HostParty} />
        <IntroStack.Screen name="Indulge" component={Indulge} />
        <IntroStack.Screen name="Enjoy" component={Enjoy} />
      </IntroStack.Navigator>
    </NavigationContainer>
  );
}
