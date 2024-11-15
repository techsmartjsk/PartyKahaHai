import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import Header from '../../../../components/header/header';
import Globe from '../../../../assets/icons/globe.svg';
import Icon from '../../../../atoms/icons/icon';
import ArrowLeftIcon from '../../../../assets/icons/arrow-left.svg';
import EditIcon from '../../../../assets/icons/edit-icon.svg';
import LockIcon from '../../../../assets/icons/lock.svg';

export default function PersonalInfo({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex flex-row px-5 py-5 bg-white">
          <Icon>
            <ArrowLeftIcon
              onPress={() => {
                navigation.goBack();
              }}
              color="#000000"
            />
          </Icon>
          <Text className="ml-5 text-[18px] font-ubuntuBold">
            Personal Info
          </Text>
        </View>
        <View className="mx-5 px-5 rounded-md py-5 bg-white mt-10">
          <View className="bg-white w-full rounded-md flex flex-row items-center justify-between">
            <View className="flex flex-row gap-x-2 items-center">
              <Globe />
              <Text className="text-[16px] font-ubuntu">Public Info</Text>
            </View>
            <View>
              <EditIcon color="#AD00DF" />
            </View>
          </View>
          <View className="flex flex-col gap-y-1 mt-5">
            <Text className="text-[14px] font-ubuntu text-gray-500">
              Designation
            </Text>
            <Text className="text-[16px] font-ubuntu">
              Digital Marketing Professional
            </Text>
          </View>
          <View className="flex flex-col gap-y-1 mt-5">
            <Text className="text-[14px] font-ubuntu text-gray-500">
              Company
            </Text>
            <Text className="text-[16px] font-ubuntu">
              XYZ Solutions Pvt Ltd
            </Text>
          </View>
          <View className="flex flex-col gap-y-1 mt-5">
            <Text className="text-[14px] font-ubuntu text-gray-500">
              Inudstry
            </Text>
            <Text className="text-[16px] font-ubuntu">
              Information Technology
            </Text>
          </View>
          <View className="flex flex-col gap-y-1 mt-5">
            <Text className="text-[14px] font-ubuntu text-gray-500">
              Date of Birth
            </Text>
            <Text className="text-[16px] font-ubuntu">02 Feb, 1995</Text>
          </View>
          <View className="flex flex-col gap-y-1 mt-5">
            <Text className="text-[14px] font-ubuntu text-gray-500">
              Native Language
            </Text>
            <Text className="text-[16px] font-ubuntu">Hindi</Text>
          </View>
          <View className="flex flex-col gap-y-1 mt-5">
            <Text className="text-[14px] font-ubuntu text-gray-500">State</Text>
            <Text className="text-[16px] font-ubuntu">Manipur</Text>
          </View>
        </View>
        <View className="mx-5 px-5 rounded-md py-5 bg-white mt-10">
          <View className="bg-white w-full rounded-md flex flex-row items-center justify-between">
            <View className="flex flex-row gap-x-2 items-center">
              <LockIcon />
              <Text className="text-[16px] font-ubuntu">Private Info</Text>
            </View>
            <View>
              <EditIcon color="#AD00DF" />
            </View>
          </View>
          <View className="flex flex-col gap-y-1 mt-5">
            <Text className="text-[14px] font-ubuntu text-gray-500">Email</Text>
            <View className="flex flex-row justify-between">
              <Text className="text-[16px] font-ubuntu">
                saumya.chakrabo...
              </Text>
              <Text className="text-[18px] text-[#AD00DF] underline font-ubuntu">
                Change Email
              </Text>
            </View>
          </View>
          <View className="flex flex-col gap-y-1 mt-5">
            <Text className="text-[14px] font-ubuntu text-gray-500">
              Password
            </Text>
            <View className="flex flex-row justify-between">
              <Text className="text-[16px] font-ubuntu">xxxxxxxxxxxxx</Text>
              <Text className="text-[18px] text-[#AD00DF] underline font-ubuntu">
                Change Password
              </Text>
            </View>
          </View>
          <View className="flex flex-col gap-y-1 mt-5">
            <Text className="text-[14px] font-ubuntu text-gray-500">
              Contact Number
            </Text>
            <View className="flex flex-row justify-between">
              <Text className="text-[16px] font-ubuntu">9625645572</Text>
              <Text className="text-[18px] text-[#AD00DF] underline font-ubuntu">
                Change Number
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
