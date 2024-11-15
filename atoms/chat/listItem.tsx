import { Image, View, Text, TouchableOpacity } from "react-native"
import photoImg from "../../assets/images/photo.png"

export default function ListItem({
    navigation, name, photo, designation
}){
    return(
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate("ChatScreen", {
                "title": name
            })
        }}
        className="flex gap-x-4 flex-row  py-5 border-b-[1px] border-[#E1E1E1]">
            <Image
            source={photoImg}
            className="w-[50px] h-[50px] bg-black rounded-full"
            />
            <View className="flex flex-col gap-y-2">
                <Text className="font-ubuntuBold text-[16px]">{name}</Text>
                <Text className="font-ubuntu">{designation}</Text>
            </View>
        </TouchableOpacity>
    )
}