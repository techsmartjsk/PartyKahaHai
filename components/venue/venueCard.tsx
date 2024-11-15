import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Alcohol from '../../assets/icons/alcohol.svg';
import Offer from '../../assets/icons/offer.svg';
import MenuIcon from '../../assets/icons/menuIcon.svg';
import HeartIcon from '../../assets/icons/heartIcon.svg';

const VenueCard = () => {
  return (
    <View style={styles.card}>
      <View className="relative">
        <Image
          source={require('../../assets/images/venueImage.png')}
          style={styles.image}
        />
        <View className="absolute top-5 w-full flex flex-row justify-end space-x-2 right-5">
          <HeartIcon />
          <MenuIcon />
        </View>
        <View className="px-4 py-1 flex flex-row space-x-1 items-center bg-white left-10 absolute bottom-0 rounded-t-2xl">
          <Alcohol />
          <Text className="text-[#E71D72] font-ubuntu">Alcohol</Text>
        </View>
      </View>
      <View className="px-4 py-2">
        <View className="flex flex-row justify-between">
          <Text style={styles.title} className="font-ubuntuBold">
            The Boozy Griffin
          </Text>
          <View className="rounded-lg bg-[#13B837] px-2 py-2 h-[30px] flex">
            <Text className="text-white font-ubuntuBold">4.2/5</Text>
          </View>
        </View>
        <Text style={styles.description} className="font-ubuntu">
          Continental • Italian • North Indian
        </Text>
        <View className="flex flex-row justify-between w-full my-4">
          <Text className="text-[#828282]">30 - 35 min • 6 km</Text>
          <Text className="fontUbuntu">₹ 1500 for two</Text>
        </View>
        <View className="w-full border border-dotted border-[#828282] border-spacing-x-[10px]" />
        <View className="flex flex-row space-x-2 items-center">
          <Offer width={24} height={24} />
          <Text className="text-[#AD00DF] my-4">20% off on total bill</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: '#828282',
  },
});

export default VenueCard;
