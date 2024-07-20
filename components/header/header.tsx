import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import GPSIcon from '../../atoms/icons/gpsIcon';
import ArrowDownIcon from '../../atoms/icons/arrowDownIcon';
import NotifyIcon from '../../atoms/icons/notifyIcon';

const Header = ({ iconColor, titleTextColor, subtitleTextColor, notifyIconColor, navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.location} className='flex flex-row gap-1'>
        <GPSIcon color={iconColor}/>
        <View className='flex flex-col items-left justify-center'>
            <Text style={styles.locationText} className={`text-[${titleTextColor}]`}>New Delhi</Text>
            <Text className={`text-gray-500 w-[200px] text-[${subtitleTextColor}]`}>123, ABC Colony...</Text>
        </View>
        <ArrowDownIcon color={iconColor}/>
      </TouchableOpacity>
      <View style={styles.icons}>
        <TouchableOpacity style={styles.iconButton}>
          <NotifyIcon color={notifyIconColor}/>
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
