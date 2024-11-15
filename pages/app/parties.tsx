import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/header/header';
import PartyCard from '../../components/party/partyCard';
import Icon from '../../atoms/icons/icon';
import SearchIcon from '../../assets/icons/search.svg';
import PartyIcon from '../../assets/icons/partyicon.svg';
import FilterIcon from '../../assets/icons/filterIcon.svg';
import { useState } from 'react';
import ArrowLeftIcon from '../../assets/icons/arrow-left.svg';
import FloatingButton from '../../atoms/button/floatingButton';

const parties = [
  {
    image: require('../../assets/images/partyImage.png'),
    title: 'Beach Bash',
    location: 'Chilies, DLF Cyberhub',
  },
  {
    image: require('../../assets/images/partyImage.png'),
    title: 'Mountain Music Fest',
    location: 'Chilies, DLF Cyberhub',
  },
  {
    image: require('../../assets/images/partyImage.png'),
    title: 'City Lights Soiree',
    location: 'Chilies, DLF Cyberhub',
  },
  {
    image: require('../../assets/images/partyImage.png'),
    title: 'Rooftop Party',
    location: 'Chilies, DLF Cyberhub',
  },
  {
    image: require('../../assets/images/partyImage.png'),
    title: 'Poolside Fun',
    location: 'Chilies, DLF Cyberhub',
  },
];

const tabs = [
  { key: "parties", label: "Parties" },
  { key: "hosted", label: "Hosted" },
  { key: "requested", label: "Requested" },
  { key: "attending", label: "Attending" },
];

export default function Parties({ navigation }) {
  const [isActive, setIsActive] = useState("parties");

  return (
    <SafeAreaView className="bg-white h-full relative">
      <Header
        navigation={navigation}
        iconColor="#AD00DF"
        titleTextColor="black"
        subtitleTextColor="black"
        notifyIconColor="black"
        className=""
      />
      <ScrollView>
        <View className='flex flex-row gap-x-4 my-4 mx-4'>
          <Icon>
            <ArrowLeftIcon
              onPress={() => {
                navigation.goBack();
              }}
              color="#000000"
            />
          </Icon>
          <Text className="font-ubuntuBold text-[18px]">Near you</Text>
        </View>
        <View className="pb-5">
          <View className="flex flex-row px-5">
            {tabs.map(({ key, label }) => (
              <TouchableOpacity
                key={key}
                onPress={() => setIsActive(key)}
                className={`flex flex-1 items-center pb-2 ${
                  isActive === key ? "border-b-[#AD00DF] border-b-[2px] font-ubuntuBold" : "font-ubuntu"
                }`}
              >
                <Text className={`p-2 text-[16px] ${isActive === key ? 'font-ubuntuBold' : 'font-ubuntu'}`}>{label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View className="flex flex-row px-5">
          <View className="flex flex-row items-center w-[80%] border-[#E6DFDF] border-[1px] rounded-lg space-x-2 px-5">
            <Icon>
              <SearchIcon width={30} height={30} color="#828282" />
            </Icon>
            <TextInput
              placeholder="Search..."
              placeholderTextColor="#828282"
              textAlign="center"
              className="bg-white text-black text-[16px] font-ubuntu"
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Filters')}
            className="bg-[#AD00DF] rounded-2xl items-center px-4 py-4 justify-center ml-3"
          >
            <Icon>
              <FilterIcon width={28} height={28} color="white" />
            </Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.partyCardContainer}>
          {parties.map((party, index) => (
            <PartyCard
              key={index}
              image={party.image}
              title={party.title}
              location={party.location}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
      <FloatingButton
            IconElement={PartyIcon}
            title="Buzz in"
            iconColor="white"
            titleColor=""
            navigation={navigation}
            bgColor="#EFBE10"
            />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  partyCardContainer: {
    margin: 20,
  },
});
