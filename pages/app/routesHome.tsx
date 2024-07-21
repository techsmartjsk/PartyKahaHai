import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Requests from './requests';
import Venues from './venues';
import { Text } from 'react-native';
import CustomTabBar from '../../atoms/tabs/customTabBar';
import Explore from './explore';
import Host from './host';
import Parties from './parties';
import Profile from './profile';
import HostIcon from '../../assets/icons/host.svg';
import PartyIcon from '../../assets/icons/parties.svg';
import RequestIcon from '../../assets/icons/requests.svg';
import VenueIcon from '../../assets/icons/venues.svg';
import Icon from '../../atoms/icons/icon';

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
            return <Icon>
              <PartyIcon color={color} />
            </Icon>;
          } else if (route.name === 'Requests') {
            return <Icon>
              <RequestIcon color={color} />
            </Icon>;
          } else if (route.name === 'Venues') {
            return <Icon>
              <VenueIcon color={color} />
            </Icon>;
          } else if (route.name === 'Host') {
            return <Icon>
              <HostIcon color={color} />
            </Icon>;
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
