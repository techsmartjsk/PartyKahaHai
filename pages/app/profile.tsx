import { Image, Text, View } from "react-native";
import Header from "../../components/header/header";

export default function Profile(){
    return(
        <View>
            <Header iconColor='#AD00DF' titleTextColor='black' subtitleTextColor='black' notifyIconColor='black'/>
            <Text className="text-[20px] mt-5 font-bold mx-5 mb-5">Profile</Text>
            <View>
                <View className="bg-[#AD00DF] h-[90px]">
                    <Image source={require('../../assets/images/profileImage.png')} className="w-[50px] h-[50px]"/>
                    <View className="flex gap-2 flex-col">
                        <Text className="text-white text-lg">Saumya Chaudhary</Text>
                        <Text className="text-white text-md">@Saumya</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}