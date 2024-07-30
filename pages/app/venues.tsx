import { View,Text, SafeAreaView, TextInput, ScrollView } from "react-native"
import Header from "../../components/header/header"
import Icon from "../../atoms/icons/icon"
import SearchIcon from "../../assets/icons/search.svg";
import FilterIcon from "../../assets/icons/filterIcon.svg";
import VenueCard from "../../components/venue/venueCard";
import Sparkle from "../../assets/icons/sparkle.svg";

export default function Venues({ navigation }){
    return(
        <SafeAreaView className="bg-white h-full">
            <Header navigation={navigation} iconColor='#AD00DF' titleTextColor='black' subtitleTextColor='black' notifyIconColor='black' className=''/>
            <Text className="text-[20px] mt-5 font-bold mx-5 mb-5 font-ubuntuBold">Venues</Text>
            <ScrollView>
                <View className="w-full pt-5">
                    <View className="absolute flex flex-row justify-end w-full top-0 right-5 ml-auto">
                        <Sparkle/>
                    </View>
                    <View className="flex flex-row z-5">
                        <View className="space-x-2 border-[#E6DFDF] border-[1px] w-[70%] rounded-lg items-center flex flex-row px-5 mx-5">
                            <Icon>
                                <SearchIcon width={30} height={30} color='#828282'/>
                            </Icon>
                            <TextInput 
                            placeholder="Search..."
                            placeholderTextColor="#828282"
                            textAlign="center"
                            className="bg-white h-full z-5 text-white text-[16px] items-center font-ubuntu"
                            />
                        </View>
                        <View className="bg-[#AD00DF] rounded-2xl items-center px-4 py-4 justify-center">
                            <Icon>
                                <FilterIcon width={28} height={28} color="white" />
                            </Icon>
                        </View>
                    </View>
                </View>
                <View className="m-5">
                    {[...Array(5)].map((_, index) => (
                        <VenueCard key={index} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}