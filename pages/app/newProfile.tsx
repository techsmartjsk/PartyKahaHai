import { SafeAreaView, View, Text, Image, ScrollView } from 'react-native';
import Icon from '../../atoms/icons/icon';
import ArrowLeftIcon from '../../assets/icons/arrow-left.svg';
import Photo from '../../assets/images/photo.png';
import Images from '../../assets/icons/images.svg';
import LocationIcon from '../../assets/icons/location.svg';

export default function NewProfile({ navigation }) {
  return (
    <SafeAreaView className="h-screen">
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
          Saumya Chaudhary
        </Text>
      </View>
      <ScrollView className="mb-32">
        <View className="relative mb-10">
          <Image
            source={Photo}
            className="mx-auto w-[90%] rounded-b-xl"
          ></Image>
          <View className="absolute bg-white flex flex-row gap-x-1 items-center rounded-md p-2 bottom-5 right-10">
            <Images />
            <Text className="font-ubuntu text-[14px]">View More</Text>
          </View>
        </View>
        <View className="bg-white mx-5 mb-10 px-4 py-2 flex flex-col gap-y-2 rounded-md">
          <Text className="font-ubuntuBold text-[16px]">
            Exceptional Traits
          </Text>
          <Text className="font-ubuntuBold text-[34px]">
            Must be something didn’t figure it out yet!
          </Text>
        </View>
        <View className="bg-white mx-5 px-4 pt-2 pb-5 flex flex-col gap-y-2 rounded-md">
          <Text className="font-ubuntuBold text-[16px]">About</Text>
          <View className="flex flex-col gap-y-6">
            <View className="flex flex-row gap-x-1 items-center">
              <Icon>
                <LocationIcon width={20} height={20} />
              </Icon>
              <Text className="font-ubuntu text-[16px]">
                16th Novemeber, 1995
              </Text>
            </View>
            <View className="flex flex-row gap-x-1 items-center">
              <Icon>
                <LocationIcon width={20} height={20} />
              </Icon>
              <Text className="font-ubuntu text-[16px]">He/Him</Text>
            </View>
            <View className="flex flex-row gap-x-1 items-center">
              <Icon>
                <LocationIcon width={20} height={20} />
              </Icon>
              <Text className="font-ubuntu text-[16px]">
                Digital Marketing Professional
              </Text>
            </View>
            <View className="flex flex-row gap-x-1 items-center">
              <Icon>
                <LocationIcon width={20} height={20} />
              </Icon>
              <Text className="font-ubuntu text-[16px]">Gurgaon, Haryana</Text>
            </View>
            <View className="flex flex-row gap-x-1 items-center">
              <Icon>
                <LocationIcon width={20} height={20} />
              </Icon>
              <Text className="font-ubuntu text-[16px]">Hindu</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
