import { View,Text, SafeAreaView, ScrollView } from "react-native"
import Header from "../../components/header/header"
import RequestCard from "../../components/request/requestCard"

export default function Requests({ navigation }){
    return(
        <SafeAreaView className="bg-white h-full">
            <Header navigation={navigation} iconColor='#AD00DF' titleTextColor='black' subtitleTextColor='black' notifyIconColor='black' className=''/>
            <Text className="text-[20px] mt-5 font-bold mx-5 mb-5 font-ubuntuBold">Requests</Text>
            <ScrollView>
                <View className="bg-white shadow-lg rounded-md p-1 mx-4">
                    <View className="py-4 px-5 flex flex-col space-y-4">
                        <View className="flex flex-row space-x-2">
                            <Text>Today</Text>
                            <Text className="font-ubuntuBold text-[#AD00DF]">9:00 PM</Text>
                        </View>
                        <Text className="font-ubuntuBold text-[20px]">Visitors Boozy Night</Text>
                    </View>
                    {[...Array(5)].map((_, index) => (
                        <RequestCard key={index} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}