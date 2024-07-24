import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from '../../atoms/icons/icon';
import Gps from "../../assets/icons/gps.svg";
import ArrowDown from "../../assets/icons/arrow-down.svg";
import Notify from "../../assets/icons/notify-icon.svg";

const Header = ({ iconColor, titleTextColor, subtitleTextColor, notifyIconColor, navigation, className }) => {
  return (
    <View style={styles.header} className={className}>
      <TouchableOpacity style={styles.location} className='flex flex-row gap-1'>
        <Icon>
          <Gps color={iconColor}/>
        </Icon>
        <View className='flex flex-col items-left justify-center'>
            <Text style={styles.locationText} className={`font-ubuntuBold text-${titleTextColor}`}>New Delhi</Text>
            <Text className={`font-ubuntu w-[170px] text-${subtitleTextColor}`}>123, ABC Colony...</Text>
        </View>
        <Icon>
          <ArrowDown color={iconColor}/>
        </Icon>
      </TouchableOpacity>
      <View style={styles.icons} className='flex flex-row space-x-8'>
        <TouchableOpacity style={styles.iconButton}>
          <Icon>
            <Notify color={notifyIconColor} width={24} height={24}/>
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
    width: 32,
    height: 32,
    borderRadius: 15,
  },
});

export default Header;
