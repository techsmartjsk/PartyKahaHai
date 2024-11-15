import { View, Image, Text, ScrollView } from 'react-native';
import BgImage from '../../assets/images/backgroundImage.png';
import ProfileImage from '../../assets/images/profileImage.png';
import LocationIcon from '../../assets/icons/location.svg';
import ShieldIcon from '../../assets/icons/shield.svg';
import FollowIcon from '../../assets/icons/followIcon.svg';
import Icon from '../../atoms/icons/icon';
import Message from '../../assets/icons/messageIcon.svg';
import { Button } from 'react-native-elements';
import { useState } from 'react';
import Image1 from '../../assets/images/image1.png';
import Image2 from '../../assets/images/image2.png';
import Image3 from '../../assets/images/image3.png';
import Eye from '../../assets/icons/eye.svg';

export default function About({ navigation }) {
  const [section, setSection] = useState(0);

  const handleProfileSection = () => {
    switch (section) {
      case 0:
        return (
          <View className="flex flex-row flex-wrap gap-2 items-center justify-center">
            <Image source={Image1} className="w-[30%] rounded-xl"></Image>
            <Image source={Image2} className="w-[30%] rounded-xl"></Image>
            <Image source={Image3} className="w-[30%] rounded-xl"></Image>
            <Image source={Image1} className="w-[30%] rounded-xl"></Image>
            <Image source={Image2} className="w-[30%] rounded-xl"></Image>
            <Image source={Image3} className="w-[30%] rounded-xl"></Image>
          </View>
        );

      case 1:
        return (
          <View className="flex flex-row flex-wrap gap-2">
            <Text>Description</Text>
          </View>
        );

      case 2:
        return (
          <View className="flex flex-row flex-wrap gap-2">
            <Text>Interests</Text>
          </View>
        );
      default:
        return '';
    }
  };
  return (
    <ScrollView>
      <View className="absolute z-10 top-[5%] mx-5">
        <View className="flex flex-row justify-between w-full items-center">
          <Text className="text-[16px] text-white font-ubuntuBold">
            View As
          </Text>
          <Button
            title=" Exit"
            onPress={() => {
              navigation.navigate('Profile');
            }}
            buttonStyle={{
              backgroundColor: '#EFBE10',
              width: 80,
              alignSelf: 'center',
              paddingVertical: 8,
              borderRadius: 10,
            }}
            titleStyle={{
              color: 'black',
              fontFamily: 'Ubuntu_500Medium',
              fontSize: 15,
            }}
            icon={
              <Icon>
                <Eye color="black" />
              </Icon>
            }
          />
        </View>
      </View>
      <View className="relative">
        <Image source={BgImage} className="w-full"></Image>
        <View className="absolute h-[120px] w-[120px] top-[65%] border-[2px] border-black left-[35%] flex items-center justify-center rounded-full bg-white">
          <Image source={ProfileImage} className="w-full h-full"></Image>
        </View>
      </View>
      <View className="mt-16 flex items-center">
        <Text className="font-ubuntuBold text-[18px]">Saumya Chaudhary</Text>
        <Text className="font-ubuntu text-[12px] mt-2">@saumya</Text>
        <Text className="font-ubuntu text-[16px] mt-2">
          Digital Marketing Manager
        </Text>
      </View>
      <View className="flex flex-row items-center justify-center mt-5 gap-x-4 items-center">
        <View className="w-[20%] flex flex-col gap-y-1 items-center">
          <Icon>
            <LocationIcon width={36} height={36} />
          </Icon>
          <Text>Gurgaon, Haryana</Text>
        </View>
        <View className="w-[20%] flex flex-col gap-y-1 items-center">
          <Icon>
            <ShieldIcon color="black" width={36} height={36} />
          </Icon>
          <Text>Profile Verified</Text>
        </View>
        <View className="w-[20%] flex flex-col gap-y-1 items-center">
          <Icon>
            <FollowIcon color="black" width={36} height={36} />
          </Icon>
          <Text>Gurgaon, Haryana</Text>
        </View>
      </View>
      <View className="mt-5 flex flex-row gap-x-4 items-center justify-center">
        <Button
          title=" Message"
          onPress={() => {
            console.log('Worked!');
          }}
          buttonStyle={{
            backgroundColor: '#EFBE10',
            width: 150,
            alignSelf: 'center',
            paddingVertical: 10,
            borderRadius: 10,
            marginVertical: 10,
            left: 0,
          }}
          titleStyle={{
            color: 'black',
            fontWeight: 'semibold',
            fontFamily: 'Ubuntu_500Medium',
            fontSize: 18,
          }}
          icon={
            <Icon>
              <Message width={30} height={30} />
            </Icon>
          }
        />
        <Button
          title=" Follow"
          onPress={() => {
            console.log('Worked!');
          }}
          buttonStyle={{
            backgroundColor: 'white',
            width: 150,
            alignSelf: 'center',
            paddingVertical: 10,
            borderRadius: 10,
            marginVertical: 10,
            left: 0,
            borderColor: '#AD00DF',
            borderWidth: 1,
          }}
          titleStyle={{
            color: '#AD00DF',
            fontWeight: 'semibold',
            fontFamily: 'Ubuntu_500Medium',
            fontSize: 18,
          }}
          icon={
            <Icon>
              <FollowIcon color="#AD00DF" width={30} height={30} />
            </Icon>
          }
        />
      </View>
      <View className="mx-10 mt-5 flex flex-row justify-between">
        <View className="w-[30%]">
          <Text
            onPress={() => {
              setSection(0);
            }}
            className={`text-[16px] font-ubuntuBold ${section === 0 ? 'text-[#AD00DF]' : ''}`}
          >
            Photos
          </Text>
        </View>
        <View className="w-[30%]">
          <Text
            onPress={() => {
              setSection(1);
            }}
            className={`text-[16px] font-ubuntuBold ${section === 1 ? 'text-[#AD00DF]' : ''}`}
          >
            Description
          </Text>
        </View>
        <View className="w-[30%]">
          <Text
            onPress={() => {
              setSection(2);
            }}
            className={`text-[16px] font-ubuntuBold ${section === 2 ? 'text-[#AD00DF]' : ''}`}
          >
            Interests
          </Text>
        </View>
      </View>
      <View className="relative py-3 mx-5">
        <View className="h-[1px] bg-[#E6DFDF] w-full"></View>
        <View className="absolute top-[10px] h-[4px] bg-[#AD00DF] mx-5 w-[50px]"></View>
      </View>

      <View className="mt-5">{handleProfileSection()}</View>
    </ScrollView>
  );
}
