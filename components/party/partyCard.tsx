import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import MenuIcon from "../../assets/icons/menuIcon.svg";
import HeartIcon from "../../assets/icons/heartIcon.svg";

const PartyCard = () => {
  return (
    <View style={styles.card}>
      <Image source={require('../../assets/images/partyImage.png')} style={styles.image} />
      <View className='absolute top-5 w-full flex flex-row justify-end space-x-2 right-5'>
            <HeartIcon/>
            <MenuIcon/>
        </View>
      <View className='px-4 py-6'>
        <Text style={styles.title} className='font-ubuntuBold'>Party Title</Text>
        <Text style={styles.description} className='font-ubuntu'>This is a description of the party. Join us for a night of fun and excitement!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius:20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default PartyCard;
