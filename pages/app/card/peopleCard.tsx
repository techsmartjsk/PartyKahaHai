import { useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

export default function PeopleCard({
    card
}){
    return(
        <View style={styles.card}>
                <Image
                source={card.image}
                className="w-full h-full rounded-t-[10px] brightness-50"
                />
                <View className="z-[10] absolute bottom-10 left-5">
                    <Text className="font-ubuntuBold text-white text-3xl">{card.name}</Text>
                    <Text className="font-ubuntuBold text-white text-xl">{card.age}</Text>
                    <Text className="font-ubuntuBold text-white text-xl">{card.intro}</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flex:0.8,
        elevation: 5,
        backgroundColor: '#f8f4f4',
        position: 'relative'
      },
})