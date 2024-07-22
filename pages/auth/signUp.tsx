
import { View, Text, TextInput} from "react-native";
import LoginBanner from '../../assets/images/login-banner.svg';
import { Button } from 'react-native-elements';
import Icon from '../../atoms/icons/icon';
import UserIcon from '../../assets/icons/user.svg';
import Logo from '../../assets/icons/logo.svg';

export default function SignUp({ navigation }) {
    const handlePress = () => {
        navigation.navigate('PersonalInfo');
    }

    const handleSignIn = () => {
        navigation.navigate('SignIn')
    }

    return (
        <View className='bg-[#AD00DF]'>
            <LoginBanner />
                <View className='rounded-t-2xl shadow-lg pt-5 bg-white'>
                    <View className='flex justify-between flex-row w-full px-5'>
                        <Text className="text-[32px] font-bold text-left">Sign up</Text>
                        <Logo/>
                    </View>
                    <Text className="text-[#828282] text-md my-5 mx-5">Create and account and start hanging around in parties near
                    you with like minded people.</Text>
                </View>

                <View className='bg-white px-5 flex flex-col gap-y-4'>
                    <Text className="font-bold text-[16px]">Enter Email</Text>
                    <TextInput
                        placeholder="Enter your email id"
                        className="border-[1px] p-4 border-[#E6DFDF] rounded-md"
                    />
                    <Text className="font-bold text-[16px]">Enter Password</Text>
                    <TextInput
                        placeholder="Enter password"
                        className="border-[1px] p-4 border-[#E6DFDF] rounded-md"
                    />
                    <Text className="font-bold text-[16px]">Re-Enter Password</Text>
                    <TextInput
                        placeholder="Enter password"
                        className="border-[1px] p-4 border-[#E6DFDF] rounded-md"
                    />
                    <Button 
                            title=" Sign up" 
                            onPress={handlePress} 
                            buttonStyle={{ backgroundColor: '#EFBE10',  width: '100%', alignSelf: 'center', paddingVertical: 14, borderRadius: 10 }} 
                            titleStyle={{ color: 'white', fontWeight: 'semibold' }} 
                            icon={
                                <Icon>
                                    <UserIcon color='white' />
                                </Icon>
                            }
                        />
                </View>
                <View className='bg-white h-full'>
                    <View className='flex flex-row gap-x-2 justify-center items-center mt-12 '>
                        <Text className='text-[12px] text-center'>Already have an account?</Text>
                        <Text onPress={handleSignIn} className='text-[16px] text-center text-[#AD00DF] underline font-bold'>Sign in</Text>
                    </View>
                </View>
        </View>
    )
}
