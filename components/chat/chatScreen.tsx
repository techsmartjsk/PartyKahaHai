import { SafeAreaView, TouchableOpacity, View, Text, TextInput, ScrollView } from "react-native"
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg"
import AddIcon from "../../assets/icons/add-icon.svg"
import MicIcon from "../../assets/icons/mix.svg"
import SendIcon from "../../assets/icons/send.svg"
import moment from "moment"

export default function ChatScreen({ navigation, route }){
    const { title } = route.params
    
    const messages = [
        { id: 1, text: 'Hello!', sentByUser: true, timestamp: '2024-11-15T09:15:00' },
        { id: 2, text: 'Hi there!', sentByUser: false, timestamp: '2024-11-15T09:16:00' },
        { id: 3, text: 'How are you?', sentByUser: true, timestamp: '2024-11-15T09:17:00' },
        { id: 4, text: 'I am good, thanks!', sentByUser: false, timestamp: '2024-11-15T09:18:00' },
        { id: 5, text: 'Did you hear about the event in Mumbai this weekend?', sentByUser: true, timestamp: '2024-11-15T09:20:00' },
        { id: 6, text: 'No, I haven’t. What’s it about?', sentByUser: false, timestamp: '2024-11-15T09:21:00' },
        { id: 7, text: 'It’s a tech meetup for startups, and they’re offering free food to all attendees!', sentByUser: true, timestamp: '2024-11-15T09:22:00' },
        { id: 8, text: 'Really? Free food? That sounds amazing!', sentByUser: false, timestamp: '2024-11-15T09:23:00' },
        { id: 9, text: 'Yeah, and they’ll have a range of food trucks with all kinds of cuisines.', sentByUser: true, timestamp: '2024-11-15T09:24:00' },
        { id: 10, text: 'Where exactly is it happening?', sentByUser: false, timestamp: '2024-11-15T09:25:00' },
        { id: 11, text: 'It’s at Jio World Garden in BKC, Mumbai.', sentByUser: true, timestamp: '2024-11-15T09:26:00' },
        { id: 12, text: 'That’s convenient. What’s the entry fee?', sentByUser: false, timestamp: '2024-11-15T09:27:00' },
        { id: 13, text: 'The best part is it’s free to enter! They just want people to register in advance.', sentByUser: true, timestamp: '2024-11-15T09:28:00' },
        { id: 14, text: 'That sounds like a perfect weekend plan! Who all are going?', sentByUser: false, timestamp: '2024-11-15T09:29:00' },
        { id: 15, text: 'A bunch of our friends from the tech community. It’s a great networking opportunity.', sentByUser: true, timestamp: '2024-11-15T09:30:00' },
        { id: 16, text: 'Cool! I’m definitely in. Anything specific we should bring?', sentByUser: false, timestamp: '2024-11-15T09:31:00' },
        { id: 17, text: 'Just your enthusiasm! They’re taking care of everything else.', sentByUser: true, timestamp: '2024-11-15T09:32:00' },
        { id: 18, text: 'Nice! Can’t wait for some good food and interesting people.', sentByUser: false, timestamp: '2024-11-15T09:33:00' },
        { id: 19, text: 'Same here. Let’s meet around 4 PM, then?', sentByUser: true, timestamp: '2024-11-15T09:34:00' },
        { id: 20, text: '4 PM works. Thanks for letting me know!', sentByUser: false, timestamp: '2024-11-15T09:35:00' },
        { id: 21, text: 'Anytime! Looking forward to it.', sentByUser: true, timestamp: '2024-11-15T09:36:00' },
    ];
    

    return(
        <SafeAreaView className="relative h-screen">
            <View className="flex flex-row gap-x-6 bg-white px-5 py-5">
                <TouchableOpacity
                onPress={()=>{
                    navigation.goBack()
                }}
                >
                    <ArrowLeftIcon color="black"/>
                </TouchableOpacity>
                <Text className="font-ubuntuBold text-[20px]">{title}</Text>
            </View>

            <ScrollView className="mb-24" contentContainerStyle={{ padding: 10 }}>
                {messages.map((message) => (
                    <View
                        key={message.id}
                        className={`max-w-[70%] min-w-[30%] p-3 rounded-lg my-2 ${
                            message.sentByUser ? 'self-end bg-[#AD00DF]' : 'self-start bg-white'
                        }`}
                    >
                        <Text className={`text-base ${message.sentByUser ? "text-white":"text-gray-900"}`}>{message.text}</Text>
                        <Text className={`text-xs mt-1 self-end ${message.sentByUser ? "text-white":"text-gray-900"}`}>
                            {moment(message.timestamp).format('h:mm A')}
                        </Text>
                    </View>
                ))}
            </ScrollView>

            <View className="absolute bottom-8 flex justify-between flex-row items-center bg-white  w-full px-5 py-5">
                <AddIcon/>
                <View className="flex w-[80%] px-5 flex-row items-center justify-between bg-[#f8f4fc] border-[1px] border-[#E6E6E6] h-[50px] rounded-md">
                    <TextInput placeholder="Send a message" className="font-ubuntu"></TextInput>
                    <MicIcon/>
                </View>
                <SendIcon/>
            </View>
        </SafeAreaView>
    )
}