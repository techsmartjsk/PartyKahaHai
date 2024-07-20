import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Requests from './requests';
import Venues from './venues';
import PartyIcon from '../../atoms/icons/partyIcon';
import RequestIcon from '../../atoms/icons/requestIcon';
import VenueIcon from '../../atoms/icons/venueIcon';
import HostIcon from '../../atoms/icons/hostIcon';
import { Text } from 'react-native';
import CustomTabBar from '../../atoms/tabs/customTabBar';
import Explore from './explore';
import Host from './host';
import Parties from './parties';
import Profile from './profile';

const Tab = createBottomTabNavigator();

interface CustomTabBarLabelProps {
  label: string;
  color: string;
}

const CustomTabBarLabel = ({ label, color }: CustomTabBarLabelProps) => {
  return <Text style={{ color }}>{label}</Text>;
};

export default function RoutesHome({ navigation }: { navigation: any }) {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }: { color: string; size: number }) => {
          if (route.name === 'Parties') {
            return <PartyIcon color={color} />;
          } else if (route.name === 'Requests') {
            return <RequestIcon color={color} />;
          } else if (route.name === 'Venues') {
            return <VenueIcon color={color} />;
          } else if (route.name === 'Host') {
            return <HostIcon color={color} />;
          }
        },
        tabBarLabel: ({ color }: { color: string }) => {
          let label = '';

          if (route.name === 'Parties') {
            label = 'Parties';
          } else if (route.name === 'Requests') {
            label = 'Requests';
          } else if (route.name === 'Venues') {
            label = 'Venues';
          } else if (route.name === 'Host') {
            label = 'Host';
          }

          return <CustomTabBarLabel label={label} color={color} />;
        },
        tabBarActiveTintColor: '#EFBE10',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Parties" component={Parties} />
      <Tab.Screen name="Requests" component={Requests} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Venues" component={Venues} />
      <Tab.Screen name="Host" component={Host} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
