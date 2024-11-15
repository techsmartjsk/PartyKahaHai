import { SafeAreaView, Text, TouchableOpacity, View, TextInput } from "react-native";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg"
import { useState } from "react";
import Icon from "../../atoms/icons/icon";
import SearchIcon from "../../assets/icons/search.svg"
import ListItem from "../../atoms/chat/listItem";

export default function ChatList({ navigation }){
    const [isActive, setIsActive] = useState("direct");

    const tabs = [
        { key: "direct", label: "Direct Message" },
        { key: "group", label: "Group Chat" }
    ];

    const direct = [
        {
            "name": "Alice Johnson",
            "designation": "Product Manager",
            "photo": ""
        },
        {
            "name": "Bob Smith",
            "designation": "Software Engineer",
            "photo": ""
        },
        {
            "name": "Carol Martinez",
            "designation": "UX Designer",
            "photo": ""
        },
        {
            "name": "David Lee",
            "designation": "Marketing Specialist",
            "photo": ""
        }
    ];

    const groupChat = [
        {
            "name": "Visitor Booze party",
            "photo": "",
            "lastMessage": "Let’s finalize the product roadmap by tomorrow."
        },
        {
            "name": "Beach bash",
            "photo": "",
            "lastMessage": "I’ve pushed the latest code to the repository."
        },
        {
            "name": "Chillax",
            "photo": "",
            "lastMessage": "The new design mockups are ready for review."
        }
    ];
    
    
    return(
        <SafeAreaView>
            <View className="flex flex-row gap-x-6 bg-white px-5 py-5">
                <TouchableOpacity
                onPress={()=>{
                    navigation.goBack()
                }}
                >
                    <ArrowLeftIcon color="black"/>
                </TouchableOpacity>
                <Text className="font-ubuntuBold text-[20px]">Chat</Text>
            </View>

            <View>
                <View className="flex bg-white flex-row">
                    {tabs.map(({ key, label }) => (
                    <TouchableOpacity
                        key={key}
                        onPress={() => setIsActive(key)}
                        className={`flex flex-1 items-center pb-2 ${
                        isActive === key ? "border-b-[#AD00DF] border-b-[2px] font-ubuntuBold" : "font-ubuntu"
                        }`}
                    >
                        <Text className={`p-2 text-[16px] ${isActive === key ? 'font-ubuntuBold text-[#AD00DF]' : 'font-ubuntu'}`}>{label}</Text>
                    </TouchableOpacity>
                    ))}
                </View>
                <View className="space-x-2 border-[#E6DFDF] bg-white p-2 my-5 border-[1px] rounded-lg items-center flex flex-row px-5 mx-5">
                <Icon>
                    <SearchIcon width={30} height={30} color="#AD00DF" />
                </Icon>
                <TextInput
                    placeholder="Search..."
                    placeholderTextColor="#828282"
                    textAlign="center"
                    className="bg-white h-full z-5 text-[16px] items-center font-ubuntu"
                />
                </View>
            </View>

            {
                isActive === "direct" ? <View className="flex flex-col px-10">
                {
                    direct.map((item)=>{
                        return <ListItem
                        navigation={navigation}
                        name={item.name}
                        designation={item.designation}
                        photo={item.photo}
                        />
                    })
                }
            </View>:<View className="flex flex-col px-10">
                {
                    groupChat.map((item)=>{
                        return <ListItem
                        navigation={navigation}
                        name={item.name}
                        designation={item.lastMessage}
                        photo=""
                        />
                    })
                }
            </View>
            }
        </SafeAreaView>
    )
}