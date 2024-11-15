import { Text, View, TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';
import gstyles from '../../assets/styles/global';
import { ScrollView } from 'react-native-gesture-handler';
import SearchIcon from '../../assets/icons/search.svg';
import Icon from '../../atoms/icons/icon';
import { Button } from 'react-native-elements';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import DatePicker from '../../atoms/datepicker/datepicker';

export default function FiltersComponent({ navigation }) {
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCommunity, setSelectedCommunity] = useState('');
  const [selectedNativeLanguage, setSelectedNativeLanguage] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedDesignation, setSelectedDesignation] = useState('');

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

  const handleDateChange = (event, selectedDate) => {
    setSelectedDate(selectedDate);
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
  const community = [
    {
      label: 'Community A',
      value: 'Community A',
    },
    {
      label: 'Community B',
      value: 'Community B',
    },
    {
      label: 'Community C',
      value: 'Community C',
    },
    {
      label: 'Community D',
      value: 'Community D',
    },
  ];
  const nativeLanguage = [
    {
      label: 'English',
      value: 'English',
    },
    {
      label: 'Hindi',
      value: 'Hindi',
    },
    {
      label: 'Punjabi',
      value: 'Punjabi',
    },
    {
      label: 'Gujarati',
      value: 'Gujarati',
    },
  ];

  const industry = [
    { label: 'Technology', value: 'Technology' },
    { label: 'Healthcare', value: 'Healthcare' },
    { label: 'Education', value: 'Education' },
    { label: 'Finance', value: 'Finance' },
  ];

  const designation = [
    { label: 'Manager', value: 'Manager' },
    { label: 'Engineer', value: 'Engineer' },
    { label: 'Designer', value: 'Designer' },
    { label: 'Director', value: 'Director' },
  ];

  return (
    <ScrollView className="px-5 pt-10 pb-22 flex flex-col gap-y-4">
      <View className="bg-white w-full rounded-lg items-center flex flex-row px-2 border-[1px] border-[#E6DFDF] space-x-2">
        <Icon>
          <SearchIcon width={30} height={30} color="#AD00DF" />
        </Icon>
        <TextInput
          placeholder="Search..."
          placeholderTextColor="black"
          textAlign="center"
          className="bg-white font-ubuntuBold py-4 h-full text-[16px] items-center font-ubuntu"
        />
      </View>
      <Text className="text-[16px] font-ubuntuBold">Date of Birth</Text>
      <DatePicker />
      <Text className="text-[16px] font-ubuntuBold">Gender</Text>
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
        iconColor="#AD00DF"
      />
      <Text className="font-bold text-[16px] font-ubuntuBold">
        Activities
      </Text>
      <Dropdown
        search
        placeholder="Activities"
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
        iconColor="#AD00DF"
      />
      <Text className="font-bold text-[16px] font-ubuntuBold">
        Choose Designation
      </Text>
      <Dropdown
        search
        placeholder="Choose Designation"
        value={selectedDesignation}
        style={[gstyles.dropdown]}
        placeholderStyle={[gstyles.placeholder]}
        data={designation}
        onChange={(item) => {
          setSelectedDesignation(item.value);
        }}
        labelField="label"
        valueField="value"
        fontFamily="Ubuntu_400Regular"
        itemTextStyle={gstyles.itemStyle}
        selectedTextStyle={gstyles.itemStyle}
        iconColor="#AD00DF"
      />
      <View className="">
        <Button
          title=" Apply Filters & Search"
          onPress={() => {
            navigation.goBack();
          }}
          buttonStyle={{
            backgroundColor: '#EFBE10',
            width: '100%',
            alignSelf: 'center',
            paddingVertical: 14,
            borderRadius: 10,
          }}
          titleStyle={{
            color: 'black',
            fontSize: 18,
            textAlign: 'center',
            fontFamily: 'Ubuntu_400Regular',
            fontWeight: '400',
          }}
          icon={
            <Icon>
              <ArrowRightIcon color="black" />
            </Icon>
          }
        ></Button>
      </View>
    </ScrollView>
  );
}
