import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./signIn";
import SignUp from "./signUp";
import Profile from "../app/profile";

const AuthStack = createStackNavigator<AuthStackParamList>();

export default function Auth(){
    return(
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name="SignIn" component={SignIn} />
            <AuthStack.Screen name="SignUp" component={SignUp} />
        </AuthStack.Navigator>
    )
}