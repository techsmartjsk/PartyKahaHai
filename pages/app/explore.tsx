import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import PartyCard from "../../components/party/partyCard";
import Header from "../../components/header/header";

export default function Explore() {
    return (
        <SafeAreaView className="bg-white h-full">
            <Header iconColor='#EFBE10' titleTextColor='white' subtitleTextColor='white' notifyIconColor='white' />
            <ScrollView>
                <View className="m-5">
                    {[...Array(5)].map((_, index) => (
                        <PartyCard key={index} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
