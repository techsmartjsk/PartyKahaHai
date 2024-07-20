import { SafeAreaView, Text } from "react-native"
import Header from "../../components/header/header"

export default function Host(){
    return(
        <SafeAreaView className="bg-white h-full">
            <Header iconColor='#AD00DF' titleTextColor='black' subtitleTextColor='black' notifyIconColor='black'/>
            <Text className="text-[20px] mt-5 font-bold mx-5 mb-5">Host</Text>
        </SafeAreaView>
    )
}