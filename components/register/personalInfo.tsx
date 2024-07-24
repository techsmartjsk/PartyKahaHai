
import { View, Text, TextInput, ScrollView, Image } from "react-native";
import BgBanner from '../../assets/images/bg-cover.png';
import { Button } from 'react-native-elements';
import Icon from '../../atoms/icons/icon';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import { RadioButton } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

export default function PersonalInfo({ navigation }) {
    const handlePress = () => {
        navigation.navigate('ProfInfo');
    }

    const handleSignIn = () => {
        navigation.navigate('SignIn')
    }

    return (
        <LinearGradient
        colors={['#AE01DF', '#FCD332']}
        start={{ x: 1, y: -1 }}
        end={{ x: 3, y: 1 }}
        >
            <Image source={BgBanner} className="h-[100px]" resizeMode="cover"/>
            <ScrollView className="h-full bg-white rounded-t-2xl">
            <View className="bg-[#730194] pb-5 mx-20 rounded-b-3xl flex py-5 items-center justify-center">
                <Text className="text-center text-white font-bold font-ubuntuBold">Complete signup process</Text>
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
                                <Text className="font-bold text-md font-ubuntuBold">Personal Info</Text>
                            </View>
                        </View>
                        <View className="flex flex-col gap-y-2">
                            <View className="w-[100px] h-[3px] bg-[#C1C9D2] rounded-lg">

                            </View>
                            <View className="flex flex-row gap-x-1 items-center">
                                <RadioButton.Android
                                uncheckedColor="#C1C9D2"
                                value="Prof Info"
                                status="unchecked"
                                />
                                <Text className="font-bold text-md text-[#697386] font-ubuntuBold">Prof Info</Text>
                            </View>
                        </View>
                        <View className="flex flex-col gap-y-2">
                            <View className="w-[100px] h-[3px] bg-[#C1C9D2] rounded-lg">

                            </View>
                            <View className="flex flex-row gap-x-1 items-center">
                                <RadioButton.Android
                                uncheckedColor="#C1C9D2"
                                value="Legal Info"
                                status="unchecked"
                                />
                                <Text className="font-bold text-md text-[#697386] font-ubuntuBold">Legal Info</Text>
                            </View>
                        </View>
                    </View>
                    <Text className="font-bold text-[16px] font-ubuntuBold">Full Name</Text>
                    <TextInput
                        placeholder="Enter your full name"
                        className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
                    />
                    <Text className="font-bold text-[16px] font-ubuntuBold">Date of Birth</Text>
                    <TextInput
                        placeholder="Choose date of birth"
                        className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
                    />
                    <Text className="font-bold text-[16px] font-ubuntuBold">Gender</Text>
                    <TextInput
                        placeholder="Enter password"
                        className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
                    />
                    <Text className="font-bold text-[16px] font-ubuntuBold">Choose State</Text>
                    <TextInput
                        placeholder="Choose State"
                        className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
                    />
                    <Text className="font-bold text-[16px] font-ubuntuBold">Choose City</Text>
                    <TextInput
                        placeholder="Choose City"
                        className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
                    />
                    <Button 
                            title=" Save & Next" 
                            onPress={handlePress} 
                            buttonStyle={{ backgroundColor: '#EFBE10',  width: '100%', alignSelf: 'center', paddingVertical: 14, borderRadius: 10 }} 
                            titleStyle={{ color: 'white', fontWeight: 'semibold', fontFamily: 'Ubuntu500_Medium' }} 
                            icon={
                                <Icon>
                                    <ArrowRightIcon color='white' />
                                </Icon>
                            }
                        />
                </View>
            </ScrollView>
        </LinearGradient>
    )
}
