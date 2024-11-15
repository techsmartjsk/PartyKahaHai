import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import ArrowRightIcon from '../../../assets/icons/arrow-right.svg';
import { RadioButton } from 'react-native-paper';
import Icon from '../../../atoms/icons/icon';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from '../../../atoms/datepicker/datepicker';
import { Dropdown } from 'react-native-element-dropdown';
import gstyles from '../../../assets/styles/global';

export default function PartyInfo({ navigation, setActiveWindow }) {
  const handlePress = () => {
    setActiveWindow(1);
  };
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState("");
  
  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
      setFormattedDate(selectedDate.toLocaleDateString());
    }
  };

  const time = [{
      "label":"30 mins",
      "value":"30 mins"
    },
    {
      "label":"1 hour",
      "value":"1 hour"
    },
    {
      "label":"1 hour 30 mins",
      "value":"1 hour 30 mins"
    },
    {
      "label":"2 hours",
      "value":"2 hours"
    }
  ]

  const [selectedTime, setSelectedTime] = useState("")

  return (
    <ScrollView className="h-full bg-white rounded-t-2xl">
      <View className="px-5 flex flex-col gap-y-4 py-5">
        <View className="flex flex-row justify-center mb-5">
          <View className="flex flex-col gap-y-2 w-1/3">
            <View className="w-[90%] h-[3px] bg-[#AD00DF] rounded-lg"></View>
            <View className="flex flex-row items-center gap-x-1 justify-left">
              <RadioButton.Android
                color="#AD00DF"
                value="Basic Info"
                status="checked"
                style={{ padding: 0, margin: 0, flex: 0 }}
              />
              <Text className="font-bold text-md font-ubuntuBold">
                Party Info
              </Text>
            </View>
          </View>
          <View className="flex flex-col gap-y-2 w-1/3">
            <View className="w-[90%] h-[3px] bg-[#C1C9D2] rounded-lg"></View>
            <View className="flex flex-row gap-x-1 items-center">
              <RadioButton.Android
                uncheckedColor="#C1C9D2"
                value="Personal Info"
                status="unchecked"
              />
              <Text className="font-bold text-md text-[#697386] font-ubuntuBold">
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
          Title<Text className='text-[#E82525]'>*</Text>
        </Text>
        <TextInput
          placeholder="Title"
          className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
        />
        <Text className="font-bold text-[16px] font-ubuntuBold">Date<Text className='text-[#E82525]'>*</Text></Text>
        <DatePicker/>
        <Text className="font-bold text-[16px] font-ubuntuBold">Time<Text className='text-[#E82525]'>*</Text></Text>
        <Dropdown
          placeholder="Select Time"
          value={selectedTime}
          style={[gstyles.dropdown]}
          placeholderStyle={[gstyles.placeholder]}
          data={time}
          onChange={(item) => {
            setSelectedTime(item.value);
          }}
          labelField="label"
          valueField="value"
          fontFamily="Ubuntu_400Regular"
          itemTextStyle={gstyles.itemStyle}
          selectedTextStyle={gstyles.itemStyle}
          iconColor="#AD00DF"
        />
        <Text className="font-bold text-[16px] font-ubuntuBold">Select Venue</Text>
        <TextInput
          placeholder="Select a venue"
          className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
        />
        <Text className="text-[#828282] text-center">
          Fields contain “<Text className='text-[#E82525]'>*</Text>” are mandatory
        </Text>
        <Button
          title=" Save & Next"
          onPress={handlePress}
          buttonStyle={{
            backgroundColor: '#EFBE10',
            width: '100%',
            alignSelf: 'center',
            paddingVertical: 14,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#EFBE10',
          }}
          titleStyle={{
            color: 'black',
            fontFamily: 'Ubuntu_500Medium',
          }}
          icon={
            <Icon>
              <ArrowRightIcon color="black" />
            </Icon>
          }
        />
      </View>
    </ScrollView>
  );
}
