import { Image, SafeAreaView, Text, View } from "react-native";
import Header from "../../components/header/header";
import EditIcon from "../../atoms/icons/editIcon";

export default function Profile({ navigation }){
    return(
        <SafeAreaView className="bg-white h-full">
            <Header navigation={navigation} iconColor='#AD00DF' titleTextColor='black' subtitleTextColor='black' notifyIconColor='black'/>
            <Text className="text-[20px] mt-5 font-bold mx-5 mb-5">Profile</Text>

            <View className="mx-5 rounded-md bg-[#AD00DF] px-4 py-4">
                <View className="flex items-center flex-row gap-2">
                    <Image source={require('../../assets/images/profileImage.png')} className="w-[60px] h-[60px]"/>
                    <View className="flex flex-col">
                        <Text className="text-white text-lg">Saumya Chaudhary</Text>
                        <Text className="text-white text-md">@Saumya</Text>
                    </View>
                    <View className="pl-12">
                        <EditIcon color='white'/>
                    </View>
                </View>
            </View>

            <View className="flex flex-col gap-2 shadow-lg">
                <View>
                    
                </View>
            </View>
        </SafeAreaView>
    )
}