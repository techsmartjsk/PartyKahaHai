import { createStackNavigator } from "@react-navigation/stack";
import ChatList from "../../components/chat/chatList";
import ChatScreen from "../../components/chat/chatScreen";

const ChatStack = createStackNavigator<ChatStackParamList>();

export default function Chat(){
    return (
        <ChatStack.Navigator
        initialRouteName="ChatList"
        screenOptions={{
            headerShown: false
        }}
        >
            <ChatStack.Screen name="ChatList" component={ChatList}/>
            <ChatStack.Screen name="ChatScreen" component={ChatScreen}/>
        </ChatStack.Navigator>
    )
}