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
import ArrowLeftIcon from '../../assets/icons/arrow-left.svg';
import Checkbox from '../../atoms/checkbox/checkbox';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';
import gstyles from '../../assets/styles/global';

export default function PersonalInfo({ navigation }) {
  const [stage, setStage] = useState(0);

  const intentions = [
    'Socializing',
    'Professional Networking',
    'Making New Friends',
    'Finding Activity Partners',
    'Hosting Events',
    'Attending Events',
    'Exploring Local Spots',
    'Building a Community',
  ];

  const hobbies = [
    'Fitness & Health',
    'Sports',
    'Music',
    'Arts & Crafts',
    'Reading & Writing',
    'Technology & Gadgets',
    'Movies & TV Shows',
    'Gaming',
    'Cooking & Baking',
    'Volunteer Work',
    'Fashion & Beauty',
    'Photography',
  ];

  const location_status = [
    'Moved to town',
    'Native of this town',
    'Frequent Visitor',
    'New Resident',
  ];

  const schoices = [
    {
      value: 'Yes',
      label: 'Yes',
    },
    {
      value: 'No',
      label: 'No',
    },
    {
      value: 'Occasionally',
      label: 'Occasionally',
    },
  ];

  const dchoices = [
    {
      value: 'Yes',
      label: 'Yes',
    },
    {
      value: 'No',
      label: 'No',
    },
    {
      value: 'Socially',
      label: 'Socially',
    },
  ];

  const [schoice, setSChoice] = useState('');
  const [dchoice, setDChoice] = useState('');

  const handlePress = () => {
    if (stage < 2) {
      setStage(stage + 1);
    } else {
      navigation.navigate('LegalInfo');
    }
  };

  const handlePressBack = () => {
    if (stage <= 2 && stage > 0) {
      setStage(stage - 1);
    } else {
      navigation.navigate('BasicInfo');
    }
  };

  const handlePersonalInfoCard = () => {
    switch (stage) {
      case 0:
        return (
          <View className="flex flex-col gap-y-4">
            <Text className="text-[18px] font-ubuntuBold">
              What brings you here?
            </Text>
            <View className="flex flex-row flex-wrap gap-y-4 justify-center">
              {intentions.map((intention) => {
                return (
                  <View className="w-full">
                    <Checkbox label={intention} />
                  </View>
                );
              })}
            </View>
          </View>
        );

      case 1:
        return (
          <View className="flex flex-col gap-y-4">
            <Text className="text-[18px] font-ubuntuBold">
              Tell us what you like!
            </Text>
            <View className="flex flex-row flex-wrap gap-y-4 justify-center">
              {hobbies.map((hobby) => {
                return (
                  <View className="w-full">
                    <Checkbox label={hobby} />
                  </View>
                );
              })}
            </View>
          </View>
        );

      case 2:
        return (
          <View>
            <View className="flex flex-col gap-y-4">
              <Text className="text-[18px] font-ubuntuBold">
                Are You New, Native, or Just Visiting?
              </Text>
              <View className="flex flex-row flex-wrap gap-y-4 justify-center">
                {location_status.map((status) => {
                  return (
                    <View className="w-full">
                      <Checkbox label={status} />
                    </View>
                  );
                })}
              </View>
            </View>
            <View className="flex flex-col gap-y-4 mt-2">
              <Text className="text-[16px] font-ubuntuBold">
                Lifestyle Preferences
              </Text>
              <Text className="text-[14px] font-ubuntuBold">Smoking</Text>
              <Dropdown
                placeholder="Select"
                style={[gstyles.dropdown]}
                placeholderStyle={[gstyles.placeholder]}
                labelField="label"
                valueField="value"
                onChange={(item) => {
                  setSChoice(item.value);
                }}
                data={schoices}
                fontFamily="Ubuntu_400Regular"
                itemTextStyle={gstyles.itemStyle}
                selectedTextStyle={gstyles.itemStyle}
              />
              <Text className="text-[14px] font-ubuntuBold">Drinking</Text>
              <Dropdown
                placeholder="Select"
                style={[gstyles.dropdown]}
                placeholderStyle={[gstyles.placeholder]}
                labelField="label"
                valueField="value"
                onChange={(item) => {
                  setDChoice(item.value);
                }}
                data={dchoices}
                fontFamily="Ubuntu_400Regular"
                itemTextStyle={gstyles.itemStyle}
                selectedTextStyle={gstyles.itemStyle}
              />
            </View>
          </View>
        );
      default:
        return '';
    }
  };

  return (
    <LinearGradient
      colors={['#AE01DF', '#FCD332']}
      start={{ x: 1, y: -1 }}
      end={{ x: 3, y: 1 }}
      style={{ flex: 1 }}
    >
      <Image source={BgBanner} className="h-[100px]" resizeMode="cover" />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="rounded-t-2xl bg-white"
      >
        <View className="mb-[100px]">
          <View className="bg-[#730194] pb-5 mx-20 rounded-b-3xl flex py-5 items-center justify-center">
            <Text className="text-center text-white font-bold font-ubuntuBold">
              Complete signup process
            </Text>
          </View>
          <View className="px-5 flex flex-col gap-y-4 py-5">
            <View className="flex flex-row justify-center gap-x-4">
              <View className="flex flex-col gap-y-2">
                <View className="w-[100px] h-[3px] bg-[#828282] rounded-lg" />
                <View className="flex flex-row items-center gap-x-1 justify-left">
                  <RadioButton.IOS
                    color="#828282"
                    value="Basic Info"
                    status="checked"
                    background="#828282"
                  />
                  <Text className="font-bold text-[#828282] text-md font-ubuntuBold">
                    Basic Info
                  </Text>
                </View>
              </View>
              <View className="flex flex-col gap-y-2">
                <View className="w-[100px] h-[3px] bg-[#AD00DF] rounded-lg" />
                <View className="flex flex-row gap-x-1 items-center">
                  <RadioButton.Android
                    uncheckedColor="#C1C9D2"
                    value="Personal Info"
                    status="checked"
                  />
                  <Text className="font-bold text-md text-[#AD00DF] font-ubuntuBold">
                    Personal Info
                  </Text>
                </View>
              </View>
              <View className="flex flex-col gap-y-2">
                <View className="w-[100px] h-[3px] bg-[#C1C9D2] rounded-lg" />
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

            <View className="bg-[#f6f6f6] px-5 py-8 rounded-xl mx-2">
              <View className="relative flex flex-row justify-between mb-4">
                <View className="h-[1px] w-full bg-[#C1C9D2] top-1/2 absolute"></View>
                <View
                  className={`rounded-full w-[30px] h-[30px] flex items-center justify-center border-[1px] ${stage >= 0 ? 'bg-[#AD00DF] border-[#AD00DF] text-white' : 'bg-[#f6f6f6] border-[#C1C9D2] text-[#697386]'}`}
                >
                  <Text
                    className={`${stage >= 0 ? 'text-white' : 'text-[#697386]'}`}
                  >
                    1
                  </Text>
                </View>
                <View
                  className={`rounded-full w-[30px] h-[30px] flex items-center border-[1px] justify-center ${stage >= 1 ? 'bg-[#AD00DF] border-[#AD00DF] text-white' : 'bg-[#f6f6f6] border-[#C1C9D2] text-[#697386]'}`}
                >
                  <Text
                    className={`${stage >= 1 ? 'text-white' : 'text-[#697386]'}`}
                  >
                    2
                  </Text>
                </View>
                <View
                  className={`rounded-full border-[1px] w-[30px] h-[30px] flex items-center justify-center ${stage >= 2 ? 'bg-[#AD00DF] border-[#AD00DF] text-white' : 'bg-[#f6f6f6] border-[#C1C9D2] text-[#697386]'}`}
                >
                  <Text
                    className={`${stage >= 2 ? 'text-white' : 'text-[#697386]'}`}
                  >
                    3
                  </Text>
                </View>
              </View>
              {handlePersonalInfoCard()}
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Text
              onPress={handlePress}
              className="text-[16px] text-center text-[#AD00DF] underline font-bold font-ubuntu"
            >
              Skip for now
            </Text>
            <View className="flex flex-row space-x-4 items-center justify-center mt-4">
              <Button
                title=" Back"
                onPress={handlePressBack}
                buttonStyle={styles.backButton}
                titleStyle={styles.backButtonTitle}
                icon={
                  <Icon>
                    <ArrowLeftIcon color="#AD00DF" />
                  </Icon>
                }
              />
              <Button
                title=" Save & Next"
                onPress={handlePress}
                buttonStyle={styles.nextButton}
                titleStyle={styles.nextButtonTitle}
                icon={
                  <Icon>
                    <ArrowRightIcon color="white" />
                  </Icon>
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
  },
  backButton: {
    backgroundColor: 'white',
    width: 150,
    alignSelf: 'center',
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#AD00DF',
  },
  backButtonTitle: {
    color: '#AD00DF',
    fontWeight: 'semibold',
    fontFamily: 'Ubuntu400_Regular',
  },
  nextButton: {
    backgroundColor: '#EFBE10',
    width: 180,
    alignSelf: 'center',
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EFBE10',
  },
  nextButtonTitle: {
    color: 'white',
    fontWeight: 'semibold',
    fontFamily: 'Ubuntu_400Regular',
  },
});
