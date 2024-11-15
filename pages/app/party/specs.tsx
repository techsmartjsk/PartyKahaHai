import { View, Text, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import ArrowRightIcon from '../../../assets/icons/arrow-right.svg';
import { RadioButton } from 'react-native-paper';
import Icon from '../../../atoms/icons/icon';
import ArrowLeftIcon from '../../../assets/icons/arrow-left.svg';
import gstyles from '../../../assets/styles/global';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';
import RangeSlider from '../../../atoms/rangeSlider/rangeSlider';

export default function Specs({ navigation, setActiveWindow }) {
  const handlePress = () => {
    setActiveWindow(2);
  };

  const handlePressBack = () => {
    setActiveWindow(0);
  };

  const strength = Array.from({ length: 10 }, (_, i) => {
    return {
      'label': i+1,
      'value': i+1
    }
  }); 

  const [selectedStrength, setSelectedStrength] = useState({
    'label': 0,
    'value': 0
  });
  const [selectedEventType, setSelectedEventType] = useState({
    "label":"",
    "value":""
  });
  const [selectedActivity, setSelectedActivity] = useState({
    "label":"",
    "value":""
  });

  const eventTypes = [
    { label: 'Casual Dining', value: 'casual_dining' },
    { label: 'Dinner', value: 'dinner' },
    { label: 'Drinks', value: 'drinks' },
    { label: 'Live Music Jam', value: 'live_music_jam' },
    { label: 'Cocktail Hour', value: 'cocktail_hour' },
    { label: 'Brunch', value: 'brunch' },
    { label: 'Happy Hour', value: 'happy_hour' },
    { label: 'Networking Mixer', value: 'networking_mixer' },
    { label: 'Coffee Meetup', value: 'coffee_meetup' },
    { label: 'Fine Dining', value: 'fine_dining' }
  ];

  const activities = [
    { label: 'Dinner', value: 'dinner', state: 'planned' },
    { label: 'Casual Dining', value: 'casual_dining', state: 'planned' },
    { label: 'Dancing', value: 'dancing', state: 'planned' },
    { label: 'Drinks', value: 'drinks', state: 'planned' },
    { label: 'Brunch', value: 'brunch', state: 'planned' },
    { label: 'Outdoor Hangouts', value: 'outdoor_hangouts', state: 'planned' },
    { label: 'Movie Night', value: 'movie_night', state: 'planned' },
    { label: 'Live Music', value: 'live_music', state: 'planned' },
    { label: 'Game Night', value: 'game_night', state: 'planned' },
    { label: 'Workshops/Classes', value: 'workshops_classes', state: 'planned' },
    { label: 'Bar/Club', value: 'bar_club', state: 'planned' },
    { label: 'Sports', value: 'sports', state: 'planned' },
    { label: 'Coffee Meetup', value: 'coffee_meetup', state: 'planned' },
    { label: 'Other (Specify If any)', value: 'other', state: 'planned' }
  ];

  return (
    <ScrollView className="h-full bg-white rounded-t-2xl">
      <View className="px-5 flex flex-col gap-y-4 py-5">
        <View className="flex flex-row justify-center mb-5">
          <View className="flex flex-col gap-y-2 w-1/3">
            <View className="w-[90%] h-[3px] bg-[#828282] rounded-lg"></View>
            <View className="flex flex-row items-center gap-x-1 justify-left">
              <RadioButton
                color="#828282"
                value="Basic Info"
                status="checked"
              />
              <Text className="font-bold text-md text-[#828282] font-ubuntuBold">
                Party Info
              </Text>
            </View>
          </View>
          <View className="flex flex-col gap-y-2 w-1/3">
            <View className="w-[90%] h-[3px] bg-[#AD00DF] rounded-lg"></View>
            <View className="flex flex-row gap-x-1 items-center">
              <RadioButton.Android
                uncheckedColor="#C1C9D2"
                value="Personal Info"
                status="checked"
                color="#AD00DF"
              />
              <Text className="font-bold text-md text-[#AD00DF] font-ubuntuBold">
                Specifications
              </Text>
            </View>
          </View>
          <View className="flex flex-col gap-y-2 w-1/3">
            <View className="w-[90%] h-[3px] bg-[#C1C9D2] rounded-lg"></View>
            <View className="flex flex-row gap-x-1 items-center">
              <RadioButton.Android
                uncheckedColor="#C1C9D2"
                value="About you"
                status="unchecked"
              />
              <Text className="font-bold text-md text-[#697386] font-ubuntuBold">
                Other
              </Text>
            </View>
          </View>
        </View>
        <Text className="font-bold text-[16px] font-ubuntuBold">
          Specify Age Group
        </Text>
        <RangeSlider min={18} max={50} step={1} values={[18,50]}/>
        <Text className="font-bold text-[16px] font-ubuntuBold">
          Party Type
        </Text>
        <Dropdown
        placeholder="Select Gender"
        value={selectedEventType}
        style={[gstyles.dropdown]}
        placeholderStyle={[gstyles.placeholder]}
        data={eventTypes}
        onChange={(item) => {
          setSelectedEventType(item);
        }}
        labelField="label"
        valueField="value"
        fontFamily="Ubuntu_400Regular"
        itemTextStyle={gstyles.itemStyle}
        selectedTextStyle={gstyles.itemStyle}
        iconColor="#AD00DF"
      />
        <Text className="font-bold text-[16px] font-ubuntuBold">
          Activities
        </Text>
        <Dropdown
        placeholder="Select Activities"
        value={selectedActivity}
        style={[gstyles.dropdown]}
        placeholderStyle={[gstyles.placeholder]}
        data={activities}
        onChange={(item) => {
          setSelectedActivity(item);
        }}
        labelField="label"
        valueField="value"
        fontFamily="Ubuntu_400Regular"
        itemTextStyle={gstyles.itemStyle}
        selectedTextStyle={gstyles.itemStyle}
        iconColor="#AD00DF"
      />
        <Text className="font-bold text-[16px] font-ubuntuBold">
          How many people can attend?*
        </Text>
        <Dropdown
          placeholder="How many people can attend"
          value={selectedStrength}
          style={[gstyles.dropdown]}
          placeholderStyle={[gstyles.placeholder]}
          data={strength}
          onChange={(item) => {
            setSelectedStrength(item)
          }}
          labelField="label"
          valueField="value"
          fontFamily="Ubuntu_400Regular"
          itemTextStyle={gstyles.itemStyle}
          selectedTextStyle={gstyles.itemStyle}
        />
        <Text className="text-[#828282] text-center">
          All specifications are optional
        </Text>
        <View className="flex flex-row space-x-4 items-center justify-center">
          <Button
            title=" Back"
            className="border-[#AD00DF] border-[1px] rounded-lg text-center"
            onPress={handlePressBack}
            buttonStyle={{
              backgroundColor: 'white',
              width: 150,
              alignSelf: 'center',
              paddingVertical: 14,
              borderRadius: 10,
            }}
            titleStyle={{
              color: '#AD00DF',
              fontWeight: 'semibold',
              fontFamily: 'Ubuntu_400Regular',
            }}
            icon={
              <Icon>
                <ArrowLeftIcon color="#AD00DF" />
              </Icon>
            }
          />
          <Button
            title=" Save & Preview"
            onPress={handlePress}
            buttonStyle={{
              backgroundColor: '#EFBE10',
              alignSelf: 'center',
              paddingVertical: 14,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#EFBE10',
            }}
            titleStyle={{
              color: 'black',
              fontWeight: 'semibold',
              fontFamily: 'Ubuntu_400Regular',
            }}
            icon={
              <Icon>
                <ArrowRightIcon color="black" />
              </Icon>
            }
          />
        </View>
      </View>
    </ScrollView>
  );
}
