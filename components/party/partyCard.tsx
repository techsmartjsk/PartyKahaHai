import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Gps from '../../assets/icons/gpsIcon.svg';
import { Button } from 'react-native-elements';
import Icon from '../../atoms/icons/icon';
import Submit from '../../assets/icons/submit.svg';
import Calendar from '../../assets/icons/calendarIcon.svg'
import Person from '../../assets/icons/personIcon.svg'

const PartyCard = ({ title, location, image, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate('Party');
      }}
    >
      <Image source={image} style={styles.image} />
      
      {/* Overlay Button Container */}
      <View style={styles.buttonContainer}>
        <Button
          title=" Join"
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          icon={
            <Icon>
              <Calendar color="black" />
            </Icon>
          }
        />
      </View>

      <View style={styles.content}>
        <View style={styles.dateRow}>
          <Text style={styles.dateText}>
            Today, 26 October 2024
          </Text>
          <Text style={styles.timeText}>
            9:00 PM
          </Text>
        </View>
        <Text style={styles.title}>
          {title}
        </Text>
        <View style={styles.locationRow}>
          <Gps />
          <Text style={styles.locationText}>
            {location}
          </Text>
        </View>
        <View className="flex flex-row gap-x-2 justify-end text-right items-center">
          <Person/>
          <Text className='font-ubuntu'>7<Text className='text-[#828282]'>/10</Text></Text>
        </View>
        <View className='flex flex-row items-center gap-x-1'>
          <View className='w-[25px] h-[25px] rounded-full bg-black'>

          </View>
          <Text style={styles.hostText}>
            Hosted by <Text style={styles.hostName}>Jiya Garg</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  buttonContainer: {
    position: 'absolute',
    top: '40%', // Adjust based on your layout
    left: '80%',
    transform: [{ translateX: -50 }], // Center the button horizontally
    width: '25%', // Adjust width as needed
  },
  buttonStyle: {
    backgroundColor: '#EFBE10',
    paddingVertical: 10,
    borderRadius: 10,
  },
  titleStyle: {
    color: 'black',
    fontWeight: '600',
    fontFamily: 'Ubuntu_700Bold',
  },
  content: {
    padding: 16,
  },
  dateRow: {
    flexDirection: 'row',
    gap: 40,
    marginBottom: 8,
  },
  dateText: {
    fontSize: 12,
    fontFamily: 'Ubuntu_700Bold',
  },
  timeText: {
    fontSize: 12,
    color: '#AD00DF',
    fontFamily: 'Ubuntu_700Bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Ubuntu_700Bold',
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationText: {
    color: '#828282',
    marginLeft: 4,
  },
  hostText: {
    color: '#828282',
  },
  hostName: {
    color: '#000',
  },
});

export default PartyCard;
