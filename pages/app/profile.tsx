import {
  Image,
  SafeAreaView,
  Switch,
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import Header from '../../components/header/header';
import { useRef, useState } from 'react';
import Shield from '../../assets/icons/profile/shield.svg';
import Edit from '../../assets/icons/edit-icon.svg';
import Eye from '../../assets/icons/eye.svg';
import ProfileIcon from '../../assets/icons/profile/profile.svg';
import MapIcon from '../../assets/icons/profile/map.svg';
import Icon from '../../atoms/icons/icon';
import Logout from '../../assets/icons/profile/logout.svg';
import Lock from '../../assets/icons/profile/lock.svg';
import Heart from '../../assets/icons/profile/heart.svg';
import Help from '../../assets/icons/profile/help.svg';
import NavArrowRight from '../../assets/icons/nav-arrow-right.svg';
import BottomSheet from '@gorhom/bottom-sheet';
import ProfilePlaceholder from '../../assets/icons/profilePlaceholder.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-elements';
import Celebrate from '../../assets/icons/celebrate.svg';
import { LinearGradient } from 'expo-linear-gradient';
import ShieldIcon from '../../assets/icons/shield.svg';

export default function Profile({ navigation }) {
  const [switchChecked, setSwitchChecked] = useState<boolean>(false);
  const sheetRef = useRef<BottomSheet>(null);
  const [image, setImage] = useState(null);
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const handleSwitchChange = (checked: boolean) => {
    setSwitchChecked(checked);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <Header
          navigation={navigation}
          iconColor="#AD00DF"
          titleTextColor="black"
          subtitleTextColor="black"
          notifyIconColor="black"
          className=""
        />
        <Text className="text-[20px] mt-5 font-bold mx-5 mb-5 font-ubuntuBold">
          Profile
        </Text>
        <View>
          <LinearGradient
            colors={['#AD00DF', '#3E0050']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            className="mx-5 rounded-xl px-4 py-4"
          >
            <View className="flex items-start flex-row gap-2">
              <View>
                <Image
                  source={require('../../assets/images/profileImage.png')}
                  className="w-[60px] rounded-full h-[60px] border-white border-[2px]"
                />
                <View className="absolute left-[20px]  bottom-[-5%] bg-white w-[20px] flex items-center justify-center h-[20px] rounded-full">
                  <Icon>
                    <ShieldIcon />
                  </Icon>
                </View>
              </View>
              <View className="relative flex flex-col flex-1 gap-y-1 items-start">
                <Text className="text-white text-lg font-ubuntuBold">
                  Saumya Chaudhary
                </Text>
                <Text className="text-white text-[10px] font-ubuntu">
                  @saumya
                </Text>
                <Button
                  title=" View As"
                  onPress={() => {
                    navigation.navigate('About');
                  }}
                  buttonStyle={{
                    backgroundColor: '#EFBE10',
                    width: 100,
                    alignSelf: 'center',
                    paddingVertical: 8,
                    borderRadius: 10,
                    marginVertical: 10,
                    left: 0,
                  }}
                  titleStyle={{
                    color: 'black',
                    fontWeight: 'semibold',
                    fontFamily: 'Ubuntu_500Medium',
                    fontSize: 14,
                  }}
                  icon={
                    <Icon>
                      <Eye />
                    </Icon>
                  }
                />
              </View>
              <View className="flex justify-end">
                <Icon>
                  <Edit color="white" />
                </Icon>
              </View>
            </View>
          </LinearGradient>
          <View className="absolute top-[-50%] right-0">
            <Icon>
              <Celebrate />
            </Icon>
          </View>
        </View>

        <View className="flex flex-col px-2 py-4 shadow-lg mt-4 bg-white mx-5 rounded-lg space-y-6">
          <View className="flex flex-row items-center justify-between">
            <View className="mr-5">
              <View className="w-[40px] h-[40px] bg-[#F3F2FB] rounded-full flex items-center justify-center p-1">
                <Icon>
                  <ProfileIcon />
                </Icon>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PersonalInfo');
              }}
              className="flex flex-col gap-1"
            >
              <Text className="text-[14px] font-bold font-ubuntuBold">
                Basic Info
              </Text>
              <Text className="text-[12px] text-[#828282] font-ubuntu">
                View & make changes to your account
              </Text>
            </TouchableOpacity>
            <View className="ml-auto">
              <Icon>
                <NavArrowRight color="#AD00DF" />
              </Icon>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Address');
            }}
          >
            <View className="flex flex-row items-center gap-x-4">
              <View>
                <View className="w-[40px] h-[40px] bg-[#F3F2FB] rounded-full flex items-center justify-center p-1">
                  <Icon>
                    <MapIcon color="#AD00DF" />
                  </Icon>
                </View>
              </View>
              <View className="flex flex-col gap-1 flex-1">
                <Text className="text-[14px] font-bold font-ubuntuBold">
                  Addresses
                </Text>
                <Text className="text-[12px] text-[#828282] font-ubuntu">
                  Share, edit & add new address
                </Text>
              </View>

              <View className="flex justify-end">
                <Icon>
                  <NavArrowRight color="#AD00DF" />
                </Icon>
              </View>
            </View>
          </TouchableOpacity>

          <View className="flex flex-row items-center gap-x-4">
            <View>
              <View className="w-[40px] h-[40px] bg-[#F3F2FB] rounded-full flex items-center justify-center p-1">
                <Icon>
                  <Shield color="#AD00DF" />
                </Icon>
              </View>
            </View>
            <View className="flex flex-col gap-1 flex-1">
              <Text className="text-[14px] font-bold font-ubuntuBold">
                Face ID / Touch ID
              </Text>
              <Text className="text-[12px] text-[#828282] font-ubuntu">
                Manage your device security
              </Text>
            </View>
            <View className="flex justify-end">
              <Switch
                onValueChange={handleSwitchChange}
                value={switchChecked}
                trackColor={{ false: '#000000', true: '#AD00DF' }}
                thumbColor={switchChecked ? '#FFFFFF' : '#000000'}
              />
            </View>
          </View>

          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate('AccountVerification');
            }}
          >
            <View className="flex flex-row items-center gap-x-4">
              <View>
                <View className="w-[40px] h-[40px] bg-[#F3F2FB] rounded-full flex items-center justify-center p-1">
                  <Icon>
                    <Lock color="#AD00DF" />
                  </Icon>
                </View>
              </View>
              <View className="flex flex-col gap-1 flex-1">
                <Text className="text-[14px] font-bold font-ubuntuBold">
                  Account Verification
                </Text>
                <Text className="text-[12px] text-[#828282] font-ubuntu">
                  Account authenticity verification
                </Text>
              </View>
              <View className="flex justify-end">
                <Icon>
                  <NavArrowRight color="#AD00DF" />
                </Icon>
              </View>
            </View>
          </TouchableOpacity> */}

          <View className="flex flex-row items-center gap-x-4">
            <View>
              <View className="w-[40px] h-[40px] bg-[#F3F2FB] rounded-full flex items-center justify-center p-1">
                <Icon>
                  <Logout color="#AD00DF" />
                </Icon>
              </View>
            </View>
            <View className="flex flex-col gap-1 flex-1">
              <Text className="text-[14px] font-bold font-ubuntuBold">
                Logout
              </Text>
              <Text className="text-[12px] text-[#828282] font-ubuntu">
                Logout from your account
              </Text>
            </View>
            <View className="flex justify-end">
              <Icon>
                <NavArrowRight color="#AD00DF" />
              </Icon>
            </View>
          </View>
        </View>

        <View className="flex flex-col px-2 py-4 shadow-lg mt-4 bg-white mx-5 rounded-lg space-y-6">
          <View className="flex flex-row items-center gap-x-4">
            <View>
              <View className="w-[40px] h-[40px] bg-[#F3F2FB] rounded-full flex items-center justify-center p-1">
                <Icon>
                  <Help color="#AD00DF" />
                </Icon>
              </View>
            </View>
            <View className="flex flex-col gap-1 flex-1">
              <Text className="text-[16px] font-ubuntuBold">
                Help & Support
              </Text>
            </View>
            <View className="flex justify-end">
              <Icon>
                <NavArrowRight color="#AD00DF" />
              </Icon>
            </View>
          </View>

          <View className="flex flex-row items-center gap-x-4">
            <View>
              <View className="w-[40px] h-[40px] bg-[#F3F2FB] rounded-full flex items-center justify-center p-1">
                <Icon>
                  <Heart color="#AD00DF" />
                </Icon>
              </View>
            </View>
            <View className="flex flex-col gap-1 flex-1">
              <Text className="text-[16px] font-ubuntuBold">About App</Text>
            </View>
            <View className="flex justify-end">
              <Icon>
                <NavArrowRight color="#AD00DF" />
              </Icon>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomSheet ref={sheetRef} snapPoints={['85%']}>
        <View className="px-4 py-10 h-screen w-full">
          <View className="bg-[#F6F6F6] rounded-md px-4 py-5 flex flex-col gap-y-6 items-center">
            <Text className="text-[16px] font-ubuntuBold">
              Upload Profile Picture
            </Text>
            {image === null ? (
              <ProfilePlaceholder onPress={pickImage} />
            ) : (
              <Image
                source={{ uri: image }}
                className="w-[200px] h-[200px] rounded-full"
              />
            )}
            <Text className="text-[12px] text-[#828282]">
              *Upload face visible photo maximum 2 mb
            </Text>
          </View>
          <View className="mt-5">
            <Text className="text-[12px] text-gray-500 mb-2">
              We want to make sure you put your best foot forward. Follow our
              community guidelines
            </Text>
            <FlatList
              data={[
                {
                  key: 'Make sure your face is clearly visible without any obstructions like sunglasses or shadows. ',
                },
                {
                  key: 'Use recent pictures that accurately represent your current appearance. ',
                },
                { key: 'Prefer solo pictures to avoid confusion.' },
                { key: 'Smile and dress for the platform! ' },
                {
                  key: 'Ensure your photos follow community guidelines and contain no offensive content.',
                },
              ]}
              renderItem={({ item }) => (
                <Text className="py-2 list-disc text-[12px] text-gray-500">{`\u2023 ${item.key}`}</Text>
              )}
            />
          </View>
          <View className="absolute bottom-[30%] flex items-center justify-center w-screen">
            <TouchableOpacity onPress={() => sheetRef.current?.close()}>
              <Text className="text-[16px] text-center text-[#AD00DF] underline font-ubuntu">
                Skip for now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
}
