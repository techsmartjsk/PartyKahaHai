import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './signIn';
import SignUp from './signUp';
import LegalInfo from '../../components/register/legalInfo';
import BasicInfo from '../../components/register/basicInfo';
import PersonalInfo from '../../components/register/personalInfo';
import OTP from '../../components/auth/otp';
import OtpScreen from './otpScreen';

const AuthStack = createStackNavigator<AuthStackParamList>();

export default function Auth({ navigation }) {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="Otp" component={OtpScreen} />
      <AuthStack.Screen name="BasicInfo" component={BasicInfo} />
      <AuthStack.Screen name="PersonalInfo" component={PersonalInfo} />
      <AuthStack.Screen name="LegalInfo" component={LegalInfo} />
    </AuthStack.Navigator>
  );
}
