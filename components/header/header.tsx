import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from '../../atoms/icons/icon';
import Gps from "../../assets/icons/gps.svg";
import ArrowDown from "../../assets/icons/arrow-down.svg";
import Notify from "../../assets/icons/notify-icon.svg";

const Header = ({ iconColor, titleTextColor, subtitleTextColor, notifyIconColor, navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.location} className='flex flex-row gap-1'>
        <Icon>
          <Gps color={iconColor}/>
        </Icon>
        <View className='flex flex-col items-left justify-center'>
            <Text style={styles.locationText} className={`text-[${titleTextColor}]`}>New Delhi</Text>
            <Text className={`text-gray-500 w-[200px] text-[${subtitleTextColor}]`}>123, ABC Colony...</Text>
        </View>
        <Icon>
          <ArrowDown color={iconColor}/>
        </Icon>
      </TouchableOpacity>
      <View style={styles.icons}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon>
            <Notify color={iconColor}/>
          </Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../../assets/images/profileImage.png')} style={styles.profileImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 60,
    marginHorizontal: 20
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 15,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default Header;
