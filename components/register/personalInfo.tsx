
import { View, Text, TextInput, ScrollView } from "react-native";
import LoginBanner from '../../assets/images/login-banner.svg';
import { Button } from 'react-native-elements';
import Icon from '../../atoms/icons/icon';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import { RadioButton } from "react-native-paper";

export default function PersonalInfo({ navigation }) {
    const handlePress = () => {
        navigation.navigate('PersonalInfo');
    }

    const handleSignIn = () => {
        navigation.navigate('SignIn')
    }

    return (
        <View className='bg-[#AD00DF]'>
            <LoginBanner height={150} />
            <ScrollView className="h-full">
                <View className="rounded-t-2xl bg-white">
                    <View className="bg-[#730194] pb-5 mx-20 rounded-b-3xl flex py-5 items-center justify-center">
                        <Text className="text-center text-white font-bold">Complete signup process</Text>
                    </View>
                    <View className='px-5 flex flex-col gap-y-4 py-5'>
                        <View className="flex flex-row justify-center gap-x-4">
                            <View className="flex flex-col gap-y-2">
                                <View className="w-[100px] h-[3px] bg-[#AD00DF] rounded-lg">

                                </View>
                                <View className="flex flex-row items-center gap-x-1 justify-left">
                                    <RadioButton.Android
                                    color="#AD00DF"
                                    value="Personal Info"
                                    status="checked"
                                    style={{ padding: 0, margin:0, flex:0 }}
                                    />
                                    <Text className="font-bold text-md">Personal Info</Text>
                                </View>
                            </View>
                            <View className="flex flex-col gap-y-2">
                                <View className="w-[100px] h-[3px] bg-[#AD00DF] rounded-lg">

                                </View>
                                <View className="flex flex-row gap-x-1 items-center">
                                    <RadioButton.Android
                                    color="#AD00DF"
                                    value="Prof Info"
                                    status="checked"
                                    />
                                    <Text className="font-bold text-md">Prof Info</Text>
                                </View>
                            </View>
                            <View className="flex flex-col gap-y-2">
                                <View className="w-[100px] h-[3px] bg-[#AD00DF] rounded-lg">

                                </View>
                                <View className="flex flex-row gap-x-1 items-center">
                                    <RadioButton.Android
                                    color="#AD00DF"
                                    value="Legal Info"
                                    status="checked"
                                    />
                                    <Text className="font-bold text-md">Legal Info</Text>
                                </View>
                            </View>
                        </View>
                        <Text className="font-bold text-[16px]">Full Name</Text>
                        <TextInput
                            placeholder="Enter your full name"
                            className="border-[1px] p-4 border-[#E6DFDF] rounded-md"
                        />
                        <Text className="font-bold text-[16px]">Date of Birth</Text>
                        <TextInput
                            placeholder="Choose date of birth"
                            className="border-[1px] p-4 border-[#E6DFDF] rounded-md"
                        />
                        <Text className="font-bold text-[16px]">Gender</Text>
                        <TextInput
                            placeholder="Enter password"
                            className="border-[1px] p-4 border-[#E6DFDF] rounded-md"
                        />
                        <Text className="font-bold text-[16px]">Choose State</Text>
                        <TextInput
                            placeholder="Choose State"
                            className="border-[1px] p-4 border-[#E6DFDF] rounded-md"
                        />
                        <Text className="font-bold text-[16px]">Choose City</Text>
                        <TextInput
                            placeholder="Choose City"
                            className="border-[1px] p-4 border-[#E6DFDF] rounded-md"
                        />
                        <Button 
                                title=" Save & Next" 
                                onPress={handlePress} 
                                buttonStyle={{ backgroundColor: '#EFBE10',  width: '100%', alignSelf: 'center', paddingVertical: 14, borderRadius: 10 }} 
                                titleStyle={{ color: 'white', fontWeight: 'semibold' }} 
                                icon={
                                    <Icon>
                                        <ArrowRightIcon color='white' />
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
            </ScrollView>
        </View>
    )
}
