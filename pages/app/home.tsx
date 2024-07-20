import { View,Text, SafeAreaView, ScrollView } from "react-native"
import Header from "../../components/header/header"
import PartyCard from "../../components/party/partyCard"

export default function Home(){
    return(
        <SafeAreaView className="bg-white h-full">
            <Header iconColor='#AD00DF' titleTextColor='black' subtitleTextColor='black' notifyIconColor='black'/>
            <ScrollView>
                <View className="m-5">
                    {[...Array(5)].map((_, index) => (
                        <PartyCard key={index} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}