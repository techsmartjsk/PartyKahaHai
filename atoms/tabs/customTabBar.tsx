import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import PeopleIcon from '../../assets/icons/people.svg';
import PartyIcon from '../../assets/icons/partyicon.svg';
import ChatIcon from '../../assets/icons/chat.svg';
import HostIcon from '../../assets/icons/host.svg';
import ExploreIcon from '../../assets/icons/explore.svg';
import Icon from '../icons/icon';

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          let IconComponent;

          if (route.name === 'Home') {
            IconComponent = PartyIcon;
          } else if (route.name === 'People') {
            IconComponent = PeopleIcon;
          } else if (route.name === 'Requests') {
            IconComponent = ChatIcon;
          } else if (route.name === 'Host') {
            IconComponent = HostIcon;
          } else if (route.name === 'Explore') {
            IconComponent = ExploreIcon;
          } else if (route.name === 'Requests') {
            return;
          } else if (route.name === 'Profile') {
            return;
          } else if (route.name === 'Filters') {
            return;
          } else if (route.name === 'PersonalInfo') {
            return;
          } else if (route.name === 'AccountVerification') {
            return;
          } else if (route.name === 'Address') {
            return;
          } else if (route.name === 'About') {
            return;
          } else if (route.name === 'Party') {
            return;
          } else if (route.name === 'Connect') {
            return;
          }

          return (
            <View className='flex-1'>
              <TouchableOpacity
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={[
                styles.tabButton,
                isFocused && styles.activeButtonWrapper,
              ]}
            >
              <View
                style={[
                  styles.tabButtonContent,
                  isFocused && styles.activeButtonContent,
                ]}
              >
                <Icon>
                  <IconComponent fill="black" color="black" size={24} />
                </Icon>
                <Text
                  className="font-ubuntu text-xs"
                >
                  {route.name}
                </Text>
              </View>
            </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 20,
    backgroundColor: '#F2F2F2',
  },
  container: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  tabButton: {
    width:90,
    height:90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeButtonWrapper: {
    position: 'relative',
    bottom: 20,
    zIndex: 1,
    borderRadius:45,
    paddingVertical:10,
    backgroundColor:'#F2F2F2'
  },
  tabButtonContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButtonContent: {
    width: 70,
    height: 70,
    backgroundColor: '#EFBE10',
    borderRadius: 35,
  },
});

export default CustomTabBar;
