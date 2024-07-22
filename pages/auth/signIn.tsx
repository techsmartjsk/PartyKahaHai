import { useState } from 'react';
import { View, Text } from "react-native";
import LoginBanner from '../../assets/images/login-banner.svg';
import { RadioButton } from 'react-native-paper';
import UID from '../../components/auth/uid';
import EmailID from '../../components/auth/emailID';
import Logo from '../../assets/icons/logo.svg';

export default function SignIn({ navigation }) {
    const [checked, setChecked] = useState('first');

    const handleSignUp = () => {
        navigation.navigate('SignUp')
    }

    return (
        <View className='bg-[#AD00DF]'>
            <LoginBanner />
            <View className='rounded-t-2xl shadow-lg pt-5 bg-white'>
                    <View className='flex justify-between flex-row w-full px-5'>
                        <Text className="text-[32px] font-bold text-left">Sign in</Text>
                        <Logo/>
                    </View>
                    <Text className="text-[#828282] text-md my-5 mx-5">To your account to party with like-minded people.</Text>
                    <View className="mx-5 rounded-lg flex flex-row  border-gray-500 rounded-lg">
                        <View className={`flex flex-row items-center py-4 px-2 bg-opacity-50 rounded-l-xl border-[1px] ${checked === 'first' ? 'border-[#AD00DF] bg-[#F9EFFE]':'border-gray-500'}`}>
                            <RadioButton.Android
                                color="#AD00DF"
                                value="first"
                                status={ checked === 'first' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('first')}
                            />
                            <Text onPress={() => setChecked('first')} className='font-bold text-md'>With UID Verification</Text>
                        </View>
                        <View className={`flex flex-row items-center py-4 px-2 bg-opacity-50 rounded-r-xl border-[1px] ${checked === 'second' ? 'border-[#AD00DF] bg-[#F9EFFE]':'border-gray-500'}`}>
                            <RadioButton.Android
                                color="#AD00DF"
                                value="second"
                                status={ checked === 'second' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('second')}
                            />
                            <Text onPress={() => setChecked('second')} className='font-bold text-md'>With Email ID</Text>
                        </View>
                    </View>
                </View>

                <View className='bg-white'>
                    {
                        (checked === 'first') ? <UID navigation={navigation} />: <EmailID navigation={navigation} />
                    }
                </View>
                <View className='bg-white h-full'>
                    <View className='flex flex-row gap-x-2 justify-center items-center mt-12 '>
                        <Text className='text-[12px] text-center'>Don’t have an account with us?</Text>
                        <Text onPress={handleSignUp} className='text-[16px] text-center text-[#AD00DF] underline font-bold'>Sign Up</Text>
                    </View>
                </View>
        </View>
    )
}
