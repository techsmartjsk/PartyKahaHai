import { View,Text, SafeAreaView } from "react-native"
import Header from "../../components/header/header"

export default function Venues({ navigation }){
    return(
        <SafeAreaView className="bg-white h-full">
            <Header navigation={navigation} iconColor='#AD00DF' titleTextColor='black' subtitleTextColor='black' notifyIconColor='black'/>
            <Text className="text-[20px] mt-5 font-bold mx-5 mb-5">Venues</Text>
        </SafeAreaView>
    )
}