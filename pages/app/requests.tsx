import { View,Text, SafeAreaView, ScrollView } from "react-native"
import Header from "../../components/header/header"
import RequestCard from "../../components/request/requestCard"

export default function Requests(){
    return(
        <SafeAreaView className="bg-white h-full">
            <Header iconColor='#AD00DF' titleTextColor='black' subtitleTextColor='black' notifyIconColor='black'/>
            <Text className="text-[20px] mt-5 font-bold mx-5 mb-5">Requests</Text>
            <ScrollView>
                <View>
                    {[...Array(5)].map((_, index) => (
                        <RequestCard key={index} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}