import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import BgBanner from '../../assets/images/bg-cover.png';
import { Button } from 'react-native-elements';
import Icon from '../../atoms/icons/icon';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import { RadioButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';
import gstyles from '../../assets/styles/global';

export default function BasicInfo({ navigation }) {
  const handlePress = () => {
    navigation.navigate('PersonalInfo');
  };

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  const gender = [
    {
      label: 'Male',
      value: 'Male',
    },
    {
      label: 'Female',
      value: 'Female',
    },
    {
      label: 'Non-binary',
      value: 'Non-binary',
    },
    {
      label: 'Prefer not to say',
      value: 'Prefer not to say',
    },
  ];

  const industry = [
    { label: 'Technology', value: 'Technology' },
    { label: 'Finance', value: 'Finance' },
    { label: 'Healthcare', value: 'Healthcare' },
    { label: 'Education', value: 'Education' },
    { label: 'Retail', value: 'Retail' },
    { label: 'Manufacturing', value: 'Manufacturing' },
    { label: 'Hospitality', value: 'Hospitality' },
    { label: 'Tourism', value: 'Tourism' },
    { label: 'Real Estate', value: 'Real Estate' },
    { label: 'Legal', value: 'Legal' },
  ];

  const statesOfIndia = [
    { label: 'Andhra Pradesh', value: 'Andhra Pradesh' },
    { label: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
    { label: 'Assam', value: 'Assam' },
    { label: 'Bihar', value: 'Bihar' },
    { label: 'Chhattisgarh', value: 'Chhattisgarh' },
    { label: 'Goa', value: 'Goa' },
    { label: 'Gujarat', value: 'Gujarat' },
    { label: 'Haryana', value: 'Haryana' },
    { label: 'Himachal Pradesh', value: 'Himachal Pradesh' },
    { label: 'Jharkhand', value: 'Jharkhand' },
    { label: 'Karnataka', value: 'Karnataka' },
    { label: 'Kerala', value: 'Kerala' },
    { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },
    { label: 'Maharashtra', value: 'Maharashtra' },
    { label: 'Manipur', value: 'Manipur' },
    { label: 'Meghalaya', value: 'Meghalaya' },
    { label: 'Mizoram', value: 'Mizoram' },
    { label: 'Nagaland', value: 'Nagaland' },
    { label: 'Odisha', value: 'Odisha' },
    { label: 'Punjab', value: 'Punjab' },
    { label: 'Rajasthan', value: 'Rajasthan' },
    { label: 'Sikkim', value: 'Sikkim' },
    { label: 'Tamil Nadu', value: 'Tamil Nadu' },
    { label: 'Telangana', value: 'Telangana' },
    { label: 'Tripura', value: 'Tripura' },
    { label: 'Uttar Pradesh', value: 'Uttar Pradesh' },
    { label: 'Uttarakhand', value: 'Uttarakhand' },
    { label: 'West Bengal', value: 'West Bengal' },
    {
      label: 'Andaman and Nicobar Islands',
      value: 'Andaman and Nicobar Islands',
    },
    { label: 'Chandigarh', value: 'Chandigarh' },
    {
      label: 'Dadra and Nagar Haveli and Daman and Diu',
      value: 'Dadra and Nagar Haveli and Daman and Diu',
    },
    { label: 'Delhi', value: 'Delhi' },
    { label: 'Lakshadweep', value: 'Lakshadweep' },
    { label: 'Puducherry', value: 'Puducherry' },
  ];

  const citiesInDelhi = [
    { label: 'South Delhi', value: 'South Delhi' },
    { label: 'West Delhi', value: 'South Delhi' },
    { label: 'North Delhi', value: 'South Delhi' },
    { label: 'East Delhi', value: 'South Delhi' },
    { label: 'New Delhi', value: 'New Delhi' },
  ];

  const [selectedGender, setSelectedGender] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');

  return (
    <LinearGradient
      colors={['#AE01DF', '#FCD332']}
      start={{ x: 1, y: -1 }}
      end={{ x: 3, y: 1 }}
    >
      <Image source={BgBanner} className="h-[100px]" resizeMode="cover" />
      <View className="bg-white rounded-t-2xl">
        <View className="bg-[#730194] pb-5 mx-20 rounded-b-3xl flex py-5 items-center justify-center">
          <Text className="text-center text-white font-bold font-ubuntuBold">
            Complete signup process
          </Text>
        </View>
        <View className="px-5 flex flex-col gap-y-4 py-5">
          <View className="flex flex-row gap-x-4 justify-center">
            <View className="flex flex-col gap-y-2">
              <View className="w-[100px] h-[3px] bg-[#AD00DF] rounded-lg"></View>
              <View className="flex flex-row items-center gap-x-1 justify-left">
                <RadioButton.Android
                  color="#AD00DF"
                  value="Basic Info"
                  status="checked"
                  style={{ padding: 0, margin: 0, flex: 0 }}
                />
                <Text className="font-bold text-md font-ubuntuBold">
                  Basic Info
                </Text>
              </View>
            </View>
            <View className="flex flex-col gap-y-2">
              <View className="w-[100px] h-[3px] bg-[#C1C9D2] rounded-lg"></View>
              <View className="flex flex-row gap-x-1 items-center">
                <RadioButton.Android
                  uncheckedColor="#C1C9D2"
                  value="Personal Info"
                  status="unchecked"
                />
                <Text className="font-bold text-md text-[#697386] font-ubuntuBold">
                  Personal Info
                </Text>
              </View>
            </View>
            <View className="flex flex-col gap-y-2">
              <View className="w-[100px] h-[3px] bg-[#C1C9D2] rounded-lg"></View>
              <View className="flex flex-row gap-x-1 items-center">
                <RadioButton.Android
                  uncheckedColor="#C1C9D2"
                  value="About you"
                  status="unchecked"
                />
                <Text className="font-bold text-md text-[#697386] font-ubuntuBold">
                  About you
                </Text>
              </View>
            </View>
          </View>
          <ScrollView className="flex flex-col gap-y-4">
            <View className="mb-[600px] flex flex-col gap-y-4">
              <Text className="font-bold text-[16px] font-ubuntuBold">
                Full Name
              </Text>
              <TextInput
                placeholder="Enter your full name"
                className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
              />
              <Text className="font-bold text-[16px] font-ubuntuBold">
                Contact Information
              </Text>
              <Text className="font-bold text-[16px] font-ubuntuBold">
                Email Address
              </Text>
              <TextInput
                placeholder="Enter your email address"
                className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
              />
              <Text className="font-bold text-[16px] font-ubuntuBold">
                Phone Number
              </Text>
              <Text className="text-[12px] font-ubuntu text-gray-500">
                For verification and contact purposes.
              </Text>
              <TextInput
                placeholder="Enter your phone number"
                className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
              />
              {/* <Text className="font-bold text-[16px] font-ubuntuBold">Date of Birth</Text>
                        <TextInput
                            placeholder="Choose date of birth"
                            className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
                        /> */}
              <Text className="font-bold text-[16px] font-ubuntuBold">
                Gender
              </Text>
              <Dropdown
                placeholder="Select Gender"
                value={selectedGender}
                style={[gstyles.dropdown]}
                placeholderStyle={[gstyles.placeholder]}
                data={gender}
                onChange={(item) => {
                  setSelectedGender(item.value);
                }}
                labelField="label"
                valueField="value"
                fontFamily="Ubuntu_400Regular"
                itemTextStyle={gstyles.itemStyle}
                selectedTextStyle={gstyles.itemStyle}
              />
              <Text className="font-bold text-[16px] font-ubuntuBold">
                Choose State
              </Text>
              <Dropdown
                search
                placeholder="Choose State"
                value={selectedState}
                style={[gstyles.dropdown]}
                placeholderStyle={[gstyles.placeholder]}
                data={statesOfIndia}
                onChange={(item) => {
                  setSelectedState(item.value);
                }}
                labelField="label"
                valueField="value"
                fontFamily="Ubuntu_400Regular"
                itemTextStyle={gstyles.itemStyle}
                selectedTextStyle={gstyles.itemStyle}
              />
              <Text className="font-bold text-[16px] font-ubuntuBold">
                Choose City
              </Text>
              <Dropdown
                search
                placeholder="Choose City"
                value={selectedCity}
                style={[gstyles.dropdown]}
                placeholderStyle={[gstyles.placeholder]}
                data={citiesInDelhi}
                onChange={(item) => {
                  setSelectedCity(item.value);
                }}
                labelField="label"
                valueField="value"
                fontFamily="Ubuntu_400Regular"
                itemTextStyle={gstyles.itemStyle}
                selectedTextStyle={gstyles.itemStyle}
              />
              <Text className="font-bold text-[16px] font-ubuntuBold">
                Choose Industry
              </Text>
              <Dropdown
                search
                placeholder="Choose Industry"
                value={selectedIndustry}
                style={[gstyles.dropdown]}
                placeholderStyle={[gstyles.placeholder]}
                data={industry}
                onChange={(item) => {
                  setSelectedIndustry(item.value);
                }}
                labelField="label"
                valueField="value"
                fontFamily="Ubuntu_400Regular"
                itemTextStyle={gstyles.itemStyle}
                selectedTextStyle={gstyles.itemStyle}
              />
              <Text className="font-bold text-[16px] font-ubuntuBold">
                Company
              </Text>
              <TextInput
                placeholder="Enter company"
                className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
              />
              <Text className="font-bold text-[16px] font-ubuntuBold">
                Designation
              </Text>
              <TextInput
                placeholder="Enter designation"
                className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
              />
              <Button
                title=" Save & Next"
                onPress={handlePress}
                buttonStyle={{
                  backgroundColor: '#EFBE10',
                  width: '100%',
                  alignSelf: 'center',
                  paddingVertical: 14,
                  borderRadius: 10,
                }}
                titleStyle={{
                  color: 'white',
                  fontWeight: 'semibold',
                  fontFamily: 'Ubuntu_400Regular',
                }}
                icon={
                  <Icon>
                    <ArrowRightIcon color="white" />
                  </Icon>
                }
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
}
