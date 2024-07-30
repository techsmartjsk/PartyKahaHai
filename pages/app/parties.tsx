import { View, Text, SafeAreaView, ScrollView, TextInput, Dimensions, Image } from "react-native";
import Header from "../../components/header/header";
import PartyCard from "../../components/party/partyCard";
import Icon from "../../atoms/icons/icon";
import SearchIcon from "../../assets/icons/search.svg";
import FilterIcon from "../../assets/icons/filterIcon.svg";
import MensParty from "../../assets/images/mensparty.svg";
import WomensParty from "../../assets/images/womensparty.svg";
import UnisexParty from "../../assets/images/unisexparty.svg";
import { useState } from "react";
import OfferImage from "../../assets/images/offerImage.png";
import Carousel from 'react-native-reanimated-carousel';

const width = Dimensions.get('window').width;

const imageData = [
    {
        id: 1,
        component: <Image source={OfferImage} style={{ width: width*0.9, height: '100%', borderRadius: 10}}/>
    },
    {
        id: 2,
        component: <Image source={OfferImage} style={{ width: width*0.9, height: '100%', borderRadius: 10}}/>
    }
];

export default function Parties({ navigation }) {
    const renderItem = ({ item }: { item: { component: React.ReactNode } }) => (
        <View className='w-full items-center p-5'>
          {item.component}
        </View>
    );

    return (
        <SafeAreaView className="bg-white h-full relative">
            <Header navigation={navigation} iconColor='#AD00DF' titleTextColor='black' subtitleTextColor='black' notifyIconColor='black' className='' />
            <ScrollView>
                <View className="pb-5">
                    <View className="flex flex-row space-x-2 px-5">
                        <View className="border-b-[#AD00DF] pb-2 border-b-[2px] flex items-center">
                            <Text className="p-2 font-bold text-[16px] font-ubuntuBold">
                                Parties
                            </Text>
                        </View>
                        <View className="rounded-lg flex items-center">
                            <Text className="p-2 text-[16px] font-ubuntu">
                                Hosted
                            </Text>
                        </View>
                        <View className="rounded-lg flex items-center">
                            <Text className="p-2 text-[16px] font-ubuntu">
                                Requested
                            </Text>
                        </View>
                        <View className="rounded-lg flex items-center">
                            <Text className="p-2 text-[16px] font-ubuntu">
                                Attending
                            </Text>
                        </View>
                    </View>
                </View>
                <View className="flex flex-row">
                    <View className="space-x-2 border-[#E6DFDF] border-[1px] w-[70%] rounded-lg items-center flex flex-row px-5 mx-5">
                        <Icon>
                            <SearchIcon width={30} height={30} color='#828282' />
                        </Icon>
                        <TextInput
                            placeholder="Search..."
                            placeholderTextColor="#828282"
                            textAlign="center"
                            className="bg-white h-full text-black text-[16px] items-center font-ubuntu"
                        />
                    </View>
                    <View className="bg-[#AD00DF] rounded-2xl items-center px-4 py-4 justify-center">
                        <Icon>
                            <FilterIcon width={28} height={28} color="white" />
                        </Icon>
                    </View>
                </View>
                <Text className="text-[20px] mt-5 font-bold mx-5 mb-5 font-ubuntuBold">Parties</Text>
                <View className="flex flex-row space-x-10 w-full items-center justify-center mb-10">
                    <View className="flex flex-col space-y-2">
                        <MensParty />
                        <Text className="font-ubuntu">Men's Party</Text>
                    </View>
                    <View className="flex flex-col space-y-2">
                        <WomensParty />
                        <Text className="font-ubuntu">Women's Party</Text>
                    </View>
                    <View className="flex flex-col space-y-2">
                        <UnisexParty />
                        <Text className="font-ubuntu">Unisex Party</Text>
                    </View>
                </View>
                <View className="mb-5 h-[250px]">
                    <Carousel
                        loop
                        pagingEnabled={true}
                        width={width}
                        autoPlay={true}
                        data={imageData}
                        scrollAnimationDuration={1000}
                        renderItem={renderItem}
                        snapEnabled={true}
                    />
                </View>
                <View>
                    <View className="flex flex-row space-x-4 px-5 pb-4">
                        <View className="rounded-lg bg-[#EFF1F5] flex items-center">
                            <Text className="p-2 font-bold font-ubuntuBold">
                                Recommended
                            </Text>
                        </View>
                        <View className="rounded-lg flex items-center">
                            <Text className="p-2 font-ubuntu">
                                Public Party
                            </Text>
                        </View>
                        <View className="rounded-lg flex items-center">
                            <Text className="p-2 font-ubuntu">
                                Private Party
                            </Text>
                        </View>
                    </View>
                    <View className="m-5">
                        {[...Array(5)].map((_, index) => (
                            <PartyCard key={index} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
