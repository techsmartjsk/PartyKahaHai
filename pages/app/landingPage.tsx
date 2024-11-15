import { SafeAreaView, TextInput, View, Text } from 'react-native';
import Header from '../../components/header/header';
import Icon from '../../atoms/icons/icon';
import SearchIcon from '../../assets/icons/search.svg';
import DiscoLight from '../../assets/icons/discoLight.svg';
import PartyIcon from '../../assets/icons/partyicon.svg';
import CakeIcon from '../../assets/icons/cake-icon.svg';
import Connect from '../../assets/icons/connect.svg';
import { Button } from 'react-native-elements';
import FloatingButton from '../../atoms/button/floatingButton';

export default function LandingPage({ navigation }) {
  return (
    <SafeAreaView className="bg-white h-full relative">
      <Header
        navigation={navigation}
        iconColor="#AD00DF"
        titleTextColor="black"
        subtitleTextColor="black"
        notifyIconColor="black"
        className="bg-white"
      />
      <View className="bg-[#f8f4f4] h-screen">
        <View className="bg-white border-[1px] border-[#E6DFDF] h-[50px] mx-5 my-5 rounded-lg items-center flex flex-row px-2 space-x-2">
          <Icon>
            <SearchIcon width={30} height={30} color="#AD00DF" />
          </Icon>
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#828282"
            textAlign="center"
            className="bg-white h-full text-white text-[16px] items-center font-ubuntu"
          />
        </View>
        <View>
          <View className="mx-5 flex flex-col w-[60%] gap-y-4">
            <Text className="font-ubuntuBold text-[#AD00DF] text-[24px]">
              Create connections, wherever you are.
            </Text>
            <Text className="font-ubuntu text-[#828282] text-[18px]">
              Bringing you the best experiences
            </Text>
            <Button
            onPress={()=>{
              navigation.navigate("Connect")
            }}
              title=" Connect now"
              buttonStyle={{
                backgroundColor: '#EFBE10',
                paddingVertical: 10,
                borderRadius: 10,
                width: '60%'
              }}
              titleStyle={{
                color: 'black',
                fontWeight: 'semibold',
                fontFamily: 'Ubuntu_700Bold',
                fontSize: 16
              }}
              icon={
                <Icon>
                  <Connect color="black" />
                </Icon>
              }
            />
          </View>
          <View className="absolute right-0 top-[-90%]">
            <Icon>
              <DiscoLight height={400} width={150} className="scale-125" />
            </Icon>
          </View>
        </View>
        <View className="flex flex-row justify-between mx-5 my-10">
          <View className="relative bg-white h-[200px] w-[45%] overflow-hidden rounded-2xl p-5">
            <Text className="font-ubuntuBold text-[18px]"
            style={{
              lineHeight: 22
            }}
            >
              Discover what's happening around you
            </Text>
            <Text className="font-ubuntuBold text-[#AD00DF] mt-2">Explore</Text>
            <View className="absolute right-[-5%] overflow-hidden bottom-[-20%] rotate-[260deg]">
              <Icon>
                <PartyIcon />
              </Icon>
            </View>
          </View>
          <View className="relative overflow-hidden bg-white h-[200px] w-[45%] p-5 rounded-2xl">
            <Text className="font-ubuntuBold text-[18px]"
            style={{
              lineHeight: 22
            }}
            >
              Organize a hangout, or a party!.
            </Text>
            <Text className="font-ubuntuBold text-[#AD00DF] mt-2">Host</Text>
            <View
              className="absolute right-[-20%] bottom-0 overflow-hidden"
              style={{
                transform: [{ rotateY: '180deg' }],
              }}
            >
              <Icon>
                <CakeIcon />
              </Icon>
            </View>
          </View>
        </View>
      </View>
      <FloatingButton
            IconElement={PartyIcon}
            title="Buzz in"
            iconColor="white"
            titleColor=""
            navigation={navigation}
            bgColor="#EFBE10"
            />
    </SafeAreaView>
  );
}
