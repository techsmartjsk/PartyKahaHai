import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../components/header/header';
import RequestCard from '../../components/request/requestCard';
import BottomSheet from '@gorhom/bottom-sheet';
import { useRef, useState } from 'react';
import PictureRahul from '../../assets/images/pictureRahul.svg';
import { Button } from 'react-native-elements/dist/buttons/Button';
import Check from '../../assets/icons/check-icon.svg';
import Icon from '../../atoms/icons/icon';
import Cross from '../../assets/icons/cross-icon.svg';
import ArrowLeftIcon from '../../assets/icons/arrow-left.svg';
import PeopleCard from './card/peopleCard';
import photo from "../../assets/images/photo.png"
import FloatingButton from '../../atoms/button/floatingButton';
import PartyIcon from '../../assets/icons/partyicon.svg'

export default function Requests({ navigation }) {
  const sheetRef = useRef<BottomSheet>(null);
  const [selected, setSelected] = useState(null);

  const tabs = [
    { key: "direct", label: "Direct" },
    { key: "parties", label: "Parties" }
  ];

  const [isActive, setIsActive] = useState("parties");

  const handleCloseBottomSheet = () => {
    sheetRef.current?.close();
  };

  const cards = [
    { id: 1, image: photo, name: 'Alex', age: 25, designation: 'Software Engineer', intro: 'Passionate about building innovative software solutions.' },
    { id: 2, image: photo, name: 'Bailey', age: 29, designation: 'Social Media Manager', intro: 'Loves creating engaging content and connecting with audiences.' },
    { id: 3, image: photo, name: 'Cameron', age: 22, designation: 'Guitarist', intro: 'Musician at heart, always ready to perform and inspire.' },
    { id: 4, image: photo, name: 'Dana', age: 28, designation: 'Club Owner', intro: 'Committed to bringing the best nightlife experience to the city.' }
  ];

  return (
    <SafeAreaView className="bg-white h-full">
      <Header
        navigation={navigation}
        iconColor="#AD00DF"
        titleTextColor="black"
        subtitleTextColor="black"
        notifyIconColor="black"
        className=""
      />
      <View className='flex flex-row gap-x-4 my-4 mx-4'>
          <Icon>
            <ArrowLeftIcon
              onPress={() => {
                navigation.goBack();
              }}
              color="#000000"
            />
          </Icon>
          <Text className="font-ubuntuBold text-[18px]">Requests</Text>
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
        {
          isActive === "direct" ? <View className='flex h-[60%] justify-center items-center'>
            <View className='w-[90%] h-[400px] rounded-md shadow-md bg-[#f4f8f8] flex justify-center items-center px-10'>
              <Text className='text-[#828282] text-center font-ubuntu'>No new requests at the moment. Check back 
later or explore <Text className='underline' onPress={()=>{
  navigation.navigate("People")
}}>People</Text> to connect with others!</Text>
            </View>
          </View>:<ScrollView>
          <View className="bg-white shadow-lg rounded-md p-1 mx-4">
            <View className="py-4 px-5 flex flex-col space-y-4">
              <View className="flex flex-row space-x-2">
                <Text>Today</Text>
                <Text className="font-ubuntuBold text-[#AD00DF]">9:00 PM</Text>
              </View>
              <Text className="font-ubuntuBold text-[20px]">
                Visitors Boozy Night
              </Text>
            </View>
            {cards.map((card, index) => (
              <RequestCard name={card.name} designation={card.designation} photo={card.image} setSelected={setSelected} key={index} />
            ))}
          </View>
        </ScrollView>
        }
        {selected !== null && (
          <BottomSheet ref={sheetRef} snapPoints={['65%', '85%']}>
            <PeopleCard card={selected}/>
            <View style={{ padding: 20 }} className='bg-black'>
              <Button title="Close" onPress={handleCloseBottomSheet} className='text-black' />
              <Button title="Remove" onPress={() => {
                handleCloseBottomSheet();
              }} />
            </View>
          </BottomSheet>
        )}
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
  acceptButton: {
    backgroundColor: '#EFBE10',
    borderRadius: 12,
    width: 120,
  },
  acceptButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Ubuntu_400Regular',
  },
  rejectButton: {
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#AD00DF',
    borderRadius: 12,
    width: 120,
  },
});
