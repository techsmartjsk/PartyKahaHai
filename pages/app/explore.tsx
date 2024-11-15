import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import PartyCard from '../../components/party/partyCard';
import Header from '../../components/header/header';
import ExploreBanner from '../../assets/images/explore-banner.svg';
import Icon from '../../atoms/icons/icon';
import FilterIcon from '../../assets/icons/filterIcon.svg';
import SearchIcon from '../../assets/icons/search.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Explore({ navigation }) {
  const parties = [
    {
      image: require('../../assets/images/partyImage.png'),
      title: 'Beach Bash',
      description: 'Join us for an evening of fun by the beach!',
    },
    {
      image: require('../../assets/images/partyImage.png'),
      title: 'Mountain Music Fest',
      description: 'Experience live music with a mountain view.',
    },
    {
      image: require('../../assets/images/partyImage.png'),
      title: 'City Lights Soiree',
      description: 'Dance the night away in the heart of the city.',
    },
    {
      image: require('../../assets/images/partyImage.png'),
      title: 'Rooftop Party',
      description: 'Enjoy stunning views and great company.',
    },
    {
      image: require('../../assets/images/partyImage.png'),
      title: 'Poolside Fun',
      description: 'Cool off with a pool party this weekend!',
    },
  ];

  const handleFilterNavigation = () => {
    navigation.navigate('Home', {
      screen: 'Filters',
    });
  };
  return (
    <SafeAreaView className="bg-white h-full relative">
      <View>
        <ExploreBanner style={styles.exploreBanner} width="100%" height={360} />
        <View className="absolute mt-[270px] px-5 w-full flex flex-row space-x-4">
          <View className="bg-[#4d0a68] h-[70px] w-[75%] rounded-lg items-center flex flex-row px-5 space-x-2">
            <Icon>
              <SearchIcon width={30} height={30} color="white" />
            </Icon>
            <TextInput
              placeholder="Search..."
              placeholderTextColor="white"
              textAlign="center"
              className="bg-[#4d0a68] h-full text-white text-[16px] items-center font-ubuntu"
            />
          </View>
          <TouchableOpacity onPress={handleFilterNavigation}>
            <View className="bg-white rounded-lg items-center px-5 py-4 justify-center">
              <Icon>
                <FilterIcon width={30} height={40} color="#AD00DF" />
              </Icon>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Header
        navigation={navigation}
        iconColor="#EFBE10"
        titleTextColor="white"
        subtitleTextColor="white"
        notifyIconColor="white"
        className="absolute top-0 w-full"
      />
      <View className="mt-[320px]">
        <View className="flex flex-row space-x-4 px-5 pb-5">
          <View className="rounded-lg bg-[#EFF1F5] flex items-center">
            <Text className="p-2 font-bold font-ubuntuBold">Recommended</Text>
          </View>
          <View className="rounded-lg flex items-center">
            <Text className="p-2 font-ubuntu">Public Party</Text>
          </View>
          <View className="rounded-lg flex items-center">
            <Text className="p-2 font-ubuntu">Private Party</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.partyCardContainer}>
            {parties.map((party, index) => (
              <PartyCard
                key={index}
                image={party.image}
                title={party.title}
                location={party.description}
                navigation={navigation}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  exploreBanner: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  partyCardContainer: {
    margin: 20,
  },
});
