import { View,Text, SafeAreaView, TextInput } from "react-native"
import Header from "../../components/header/header"
import Icon from "../../atoms/icons/icon"
import SearchIcon from "../../assets/icons/search.svg";
import FilterIcon from "../../assets/icons/filterIcon.svg";

export default function Venues({ navigation }){
    return(
        <SafeAreaView className="bg-white h-full">
            <Header navigation={navigation} iconColor='#AD00DF' titleTextColor='black' subtitleTextColor='black' notifyIconColor='black' className=''/>
            <Text className="text-[20px] mt-5 font-bold mx-5 mb-5 font-ubuntuBold">Venues</Text>
            <View className="flex flex-row">
                <View className="border-[#E6DFDF] border-[1px] w-[65%] rounded-lg items-center flex flex-row px-5 mx-5">
                    <Icon>
                        <SearchIcon width={30} height={30} color='#828282'/>
                    </Icon>
                    <TextInput 
                    placeholder="Search..."
                    placeholderTextColor="#828282"
                    textAlign="center"
                    className="bg-white h-full text-white text-[16px] items-center font-ubuntu"
                    />
                </View>
                <View className="bg-[#AD00DF] rounded-lg items-center px-5 py-4 justify-center">
                    <Icon>
                        <FilterIcon width={30} height={40} color="white"/>
                    </Icon>
                </View>
            </View>
        </SafeAreaView>
    )
}