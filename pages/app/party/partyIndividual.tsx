import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import Header from '../../../components/header/header';
import MenuIcon from '../../../assets/icons/menuIcon.svg';
import HeartIcon from '../../../assets/icons/heartIcon.svg';
import ArrowLeftIcon from '../../../assets/icons/arrow-left.svg';
import CalendarGrey from '../../../assets/icons/calendarGrey.svg';
import LocationIcon from '../../../assets/icons/locationIcon.svg';
import People from '../../../assets/icons/userIcon.svg';
import Icon from '../../../atoms/icons/icon';
import Compass from '../../../assets/icons/compass.svg';
import GroupParty from '../../../assets/icons/groupParty.svg';

export default function PartyIndividual({ navigation }) {
  return (
    <SafeAreaView className="bg-white">
      <Header
        navigation={navigation}
        iconColor="#AD00DF"
        titleTextColor="black"
        subtitleTextColor="black"
        notifyIconColor="black"
        className=""
      />
      <ScrollView className="px-5 py-5">
        <View className="flex flex-row gap-x-10 mb-5 items-center">
          <ArrowLeftIcon
            onPress={() => {
              navigation.goBack();
            }}
            color="black"
          />
          <Text className="text-xl font-bold font-ubuntu">
            Visitor Booze Night
          </Text>
        </View>
        <View>
          <Image
            source={require('../../../assets/images/partyImageComplete.png')}
            style={styles.image}
          />
          <View className="absolute top-5 w-full flex flex-row justify-end space-x-2 right-5">
            <HeartIcon />
            <MenuIcon />
          </View>
        </View>
        <View className="flex gap-y-5 mt-1">
          <View className="flex flex-row gap-x-4 items-center">
            <View className="bg-[#f8f4f4] p-2 rounded-md">
              <CalendarGrey width={18} height={18} />
            </View>
            <Text className="font-ubuntuBold text-[18px]">Today</Text>
          </View>
          <View className="flex flex-row gap-x-4 items-center">
            <View className="bg-[#f8f4f4] p-2 rounded-md">
              <LocationIcon width={18} height={18} />
            </View>
            <Text className="font-ubuntuBold text-[18px]">
              8 People already joined
            </Text>
          </View>
          <View className="flex flex-row gap-x-4 items-center">
            <View className="bg-[#f8f4f4] p-2 rounded-md">
              <People width={18} height={18} />
            </View>
            <View className="flex flex-row items-center">
              <Text className="font-ubuntuBold text-[18px]">
                7 Barrel Brew Pub
              </Text>
              <View className="flex flex-row gap-x-1 items-center ml-[20%]">
                <Icon>
                  <Compass width={24} height={24} />
                </Icon>
                <Text className="text-[#AD00DF] font-ubuntuBold text-[18px]">
                  Direction
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="my-5 w-full">
          <Text className="font-ubuntuBold text-[20px]">Specifications</Text>
          <View className="bg-[#F6F6F6] flex flex-wrap gap-4 mt-5 rounded-md w-full flex-row px-2 pt-2 pb-5 mx-auto">
            <View className="flex flex-col gap-y-2">
              <Text className="text-[16px] font-ubuntu">Community</Text>
              <View className="bg-black rounded-full p-2">
                <Text className="text-white text-[16px] font-ubuntu text-center">
                  Any Community
                </Text>
              </View>
            </View>
            <View className="flex flex-col gap-y-2">
              <Text className="text-[16px] font-ubuntu">Gender</Text>
              <View className="bg-black rounded-full p-2">
                <Text className="text-white text-[16px] font-ubuntu text-center">
                  Unisex
                </Text>
              </View>
            </View>
            <View className="flex flex-col gap-y-2">
              <Text className="text-[16px] font-ubuntu">Age Group</Text>
              <View className="bg-black rounded-full p-2">
                <Text className="text-white text-[16px] font-ubuntu text-center">
                  20 to 30
                </Text>
              </View>
            </View>
            <View className="flex flex-col gap-y-2">
              <Text className="text-[16px] font-ubuntu">Designation</Text>
              <View className="bg-black rounded-full p-2">
                <Text className="text-white text-[16px] font-ubuntu text-center">
                  Digital Marketing Professional
                </Text>
              </View>
            </View>
            <View className="flex flex-col gap-y-2">
              <Text className="text-[16px] font-ubuntu">Party Type</Text>
              <View className="bg-black rounded-full p-2">
                <Text className="text-white text-[16px] font-ubuntu text-center">
                  Public
                </Text>
              </View>
            </View>
            <View className="flex flex-col gap-y-2">
              <Text className="text-[16px] font-ubuntu">Company</Text>
              <View className="bg-black rounded-full p-2">
                <Text className="text-white text-[16px] font-ubuntu text-center">
                  Any
                </Text>
              </View>
            </View>
            <View className="flex flex-col gap-y-2">
              <Text className="text-[16px] font-ubuntu">Locality</Text>
              <View className="bg-black rounded-full p-2">
                <Text className="text-white text-[16px] font-ubuntu text-center">
                  Any
                </Text>
              </View>
            </View>
            <View className="flex flex-col gap-y-2">
              <Text className="text-[16px] font-ubuntu">Date of Birth</Text>
              <View className="bg-black rounded-full p-2">
                <Text className="text-white text-[16px] font-ubuntu text-center">
                  Any
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="mt-5 flex flex-col items-center">
          <Icon>
            <GroupParty />
          </Icon>
          <Text className="text-[#828282] font-ubuntu text-[16px] mt-5 text-center">
            You can see the people here and chat with them after your joining
            request is accepted.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    borderRadius: 20,
    height: 200,
    objectFit: 'contain',
  },
});
