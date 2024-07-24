import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./signIn";
import SignUp from "./signUp";
import PersonalInfo from "../../components/register/personalInfo";
import ProfInfo from "../../components/register/profInfo";
import LegalInfo from "../../components/register/legalInfo";

const AuthStack = createStackNavigator<AuthStackParamList>();

export default function Auth({ navigation }){
    return(
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name="SignIn" component={SignIn} />
            <AuthStack.Screen name="SignUp" component={SignUp} />
            <AuthStack.Screen name="PersonalInfo" component={PersonalInfo} />
            <AuthStack.Screen name="ProfInfo" component={ProfInfo} />
            <AuthStack.Screen name="LegalInfo" component={LegalInfo} />
        </AuthStack.Navigator>
    )
}