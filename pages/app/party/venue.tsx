import { View, Text, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import ArrowRightIcon from '../../../assets/icons/arrow-right.svg';
import { RadioButton } from 'react-native-paper';
import Icon from '../../../atoms/icons/icon';
import ArrowLeftIcon from '../../../assets/icons/arrow-left.svg';
import { Dropdown } from 'react-native-element-dropdown';
import gstyles from '../../../assets/styles/global';
import { useState } from 'react';

export default function Venue({ navigation, setActiveWindow }) {
  const handlePress = () => {
    navigation.navigate('Explore');
  };

  const handlePressBack = () => {
    setActiveWindow(1);
  };

  const [selectedCrowd, setSelectedCrowd] = useState(
    {
      "label":"",
      "value":""
    })

    const [selectedBillingPref, setSelectedBillingPref] = useState(
      {
        "label":"",
        "value":""
      })

  const crowd = [{
    "label":"Young Professionals",
    "value":"Young"
  },
  {
    "label":"Students",
    "value":"students"
  },
  {
    "label":"Veterans",
    "value":"veterans"
  }]

  const billingPref = [{
    "label":"Equal Split",
    "value":"Equal Split"
  }]

  return (
    <ScrollView className="h-full bg-white rounded-t-2xl">
      <View className="px-5 flex flex-col gap-y-4 py-5 relative">
        <View className="flex flex-row justify-center mb-5">
          <View className="flex flex-col gap-y-2 w-1/3">
            <View className="w-[90%] h-[3px] bg-[#828282] rounded-lg"></View>
            <View className="flex flex-row items-center gap-x-1 justify-left">
              <RadioButton
                color="#828282"
                value="Party Info"
                status="checked"
              />
              <Text className="font-bold text-md text-[#828282] font-ubuntuBold">
                Party Info
              </Text>
            </View>
          </View>
          <View className="flex flex-col gap-y-2 w-1/3">
            <View className="w-[90%] h-[3px] bg-[#828282] rounded-lg"></View>
            <View className="flex flex-row items-center gap-x-1 justify-left">
              <RadioButton color="#828282" value="Specs" status="checked" />
              <Text className="font-bold text-md text-[#828282] font-ubuntuBold">
                Specifications
              </Text>
            </View>
          </View>
          <View className="flex flex-col gap-y-2 w-1/3">
            <View className="w-[90%] h-[3px] bg-[#AD00DF] rounded-lg"></View>
            <View className="flex flex-row gap-x-1 items-center">
              <RadioButton.Android
                uncheckedColor="#AD00DF"
                value="Other"
                status="checked"
              />
              <Text className="font-bold text-md text-[#AD00DF] font-ubuntuBold">
                Other
              </Text>
            </View>
          </View>
        </View>
        <Text className="font-bold text-[16px] font-ubuntuBold">Crowd Profile</Text>
        <Dropdown
        placeholder="Select Crowd Profile"
        value={selectedCrowd}
        style={[gstyles.dropdown]}
        placeholderStyle={[gstyles.placeholder]}
        data={crowd}
        onChange={(item) => {
          setSelectedCrowd(item);
        }}
        labelField="label"
        valueField="value"
        fontFamily="Ubuntu_400Regular"
        itemTextStyle={gstyles.itemStyle}
        selectedTextStyle={gstyles.itemStyle}
        iconColor="#AD00DF"
      />
        <Text className="font-bold text-[16px] font-ubuntuBold">Billing Preferences</Text>
        <Dropdown
        placeholder="Select Billing Preferences"
        value={selectedBillingPref}
        style={[gstyles.dropdown]}
        placeholderStyle={[gstyles.placeholder]}
        data={billingPref}
        onChange={(item) => {
          setSelectedBillingPref(item);
        }}
        labelField="label"
        valueField="value"
        fontFamily="Ubuntu_400Regular"
        itemTextStyle={gstyles.itemStyle}
        selectedTextStyle={gstyles.itemStyle}
        iconColor="#AD00DF"
      />
      <Text className="font-bold text-[16px] font-ubuntuBold">Dress Code(if any)</Text>
        <TextInput 
        placeholder="Dress Code"
        className="border-[1px] p-4 border-[#E6DFDF] rounded-md"
        ></TextInput>
        <View className='flex flex-col gap-y-4'>
        <Text className="text-[#828282] text-center">
          You can choose venue later too
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
      </View>
    </ScrollView>
  );
}
