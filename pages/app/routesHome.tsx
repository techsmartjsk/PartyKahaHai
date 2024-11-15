import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Requests from './requests';
import { Text, View } from 'react-native';
import CustomTabBar from '../../atoms/tabs/customTabBar';
import Explore from './explore';
import Host from './host';
import Parties from './parties';
import Profile from './profile';
import HostIcon from '../../assets/icons/host.svg';
import PeopleIcon from '../../assets/icons/people.svg';
import PartyIcon from '../../assets/icons/party-icon.svg'
import RequestIcon from '../../assets/icons/requests.svg';
import ChatIcon from '../../assets/icons/chat.svg';
import Icon from '../../atoms/icons/icon';
import Filters from './filter/filter';
import LandingPage from './landingPage';
import PartyIndividual from './party/partyIndividual';
import PersonalInfo from './profile/view/personalInfo';
import Address from './profile/view/address';
import AccountVerification from './profile/edit/accountVerification';
import NewProfile from './newProfile';
import People from './people';
import ConnectScreen from './connectScreen';

const Tab = createBottomTabNavigator();

interface CustomTabBarLabelProps {
  label: string;
  color: string;
}

const CustomTabBarLabel = ({ label }: CustomTabBarLabelProps) => {
  return <Text>{label}</Text>;
};

export default function RoutesHome({ navigation }) {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size }: { color: string; size: number }) => {
          if (route.name === 'Home') {
            return (
              <Icon>
                <PartyIcon color="black" />
              </Icon>
            );
          } else if (route.name === 'Requests') {
            return (
              <Icon>
                <ChatIcon color="black" />
              </Icon>
            );
          } else if (route.name === 'Chats') {
            return (
              <Icon>
                <ChatIcon />
              </Icon>
            );
          } else if (route.name === 'Host') {
            return (
              <Icon>
                <HostIcon color="black" />
              </Icon>
            );
          }
        },
        tabBarLabel: ({ color }: { color: string }) => {
          let label = '';

          if (route.name === 'Home') {
            label = 'Home';
          } else if (route.name === 'Requests') {
            label = 'Requests';
          } else if (route.name === 'Chats') {
            label = 'Chats';
          } else if (route.name === 'Host') {
            label = 'Host';
          }

          return <CustomTabBarLabel label={label} color={color} />;
        },
        tabBarActiveTintColor: '#EFBE10',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={LandingPage} />
      <Tab.Screen name="Explore" component={Parties} />
      <Tab.Screen name="People" component={People} />
      <Tab.Screen name="Requests" component={Requests} />
      <Tab.Screen name="Party" component={PartyIndividual} />
      <Tab.Screen name="Host" component={Host} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Filters" component={Filters} />
      <Tab.Screen name="PersonalInfo" component={PersonalInfo} />
      <Tab.Screen name="AccountVerification" component={AccountVerification} />
      <Tab.Screen name="Address" component={Address} />
      <Tab.Screen name="About" component={NewProfile} />
      <Tab.Screen name="Connect" component={ConnectScreen} />
    </Tab.Navigator>
  );
}
