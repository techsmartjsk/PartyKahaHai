import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import PartyIcon from '../../assets/icons/parties.svg';
import RequestIcon from '../../assets/icons/requests.svg';
import VenueIcon from '../../assets/icons/venues.svg';
import HostIcon from '../../assets/icons/host.svg';
import ExploreIcon from '../../assets/icons/explore.svg';
import Icon from '../icons/icon';

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
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

          if (route.name === 'Parties') {
            IconComponent = PartyIcon;
          } else if (route.name === 'Requests') {
            IconComponent = RequestIcon;
          } else if (route.name === 'Venues') {
            IconComponent = VenueIcon;
          } else if (route.name === 'Host') {
            IconComponent = HostIcon;
          } else if (route.name === 'Explore') {
            IconComponent = ExploreIcon;
          } else if (route.name === 'Profile') {
            return 
          }

          return (
            <TouchableOpacity
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={[styles.tabButton, isFocused && styles.activeButtonWrapper]}
            >
              <View style={[styles.tabButtonContent, isFocused && styles.activeButtonContent]}>
                <Icon>
                  <IconComponent color={isFocused ? 'white' : 'black'} size={24} />
                </Icon>
                <Text style={{ color: isFocused ? 'white' : 'black', fontSize: 12 }}>{route.name}</Text>
              </View>
            </TouchableOpacity>
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
    paddingHorizontal: 10,
    position: 'relative',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButtonWrapper: {
    position: 'relative',
    bottom: 20,
    zIndex: 1,
    paddingTop: 20,
    paddingHorizontal: 2,
    backgroundColor:'#F2F2F2',
    borderRadius: 450,
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
