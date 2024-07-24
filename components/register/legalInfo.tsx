
import { View, Text, Dimensions, ScrollView, Image, TextInput } from "react-native";
import BgBanner from '../../assets/images/bg-cover.png';
import { Button } from 'react-native-elements';
import Icon from '../../atoms/icons/icon';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import ArrowLeftIcon from '../../assets/icons/arrow-left.svg';
import { RadioButton } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import AadharImage from "../../assets/images/aadhar.png";

export default function LegalInfo({ navigation }) {
    const handlePress = () => {
        navigation.navigate('Home');
    }

    const handlePressBack = () => {
        navigation.navigate('ProfInfo');
    }

    const handleSignIn = () => {
        navigation.navigate('SignIn')
    }

    const { width, height } = Dimensions.get("window");

    return (
        <LinearGradient 
        colors={['#AE01DF', '#FCD332']}
        start={{ x: 1, y: -1 }}
        end={{ x: 3, y: 1 }}
        >
        <Image source={BgBanner} className="h-[100px]" resizeMode="cover"/>
            <ScrollView className="h-full rounded-t-2xl bg-white">
            <View className="bg-[#730194] pb-5 mx-20 rounded-b-3xl flex py-5 items-center justify-center">
                        <Text className="text-center text-white font-bold font-ubuntu">Complete signup process</Text>
                    </View>
                    <View className='px-5 flex flex-col gap-y-4 py-5'>
                        <View className="flex flex-row justify-center gap-x-4">
                            <View className="flex flex-col gap-y-2">
                                <View className="w-[100px] h-[3px] bg-[#828282] rounded-lg">

                                </View>
                                <View className="flex flex-row items-center gap-x-1 justify-left">
                                    <RadioButton.IOS
                                    color="#828282"
                                    value="Personal Info"
                                    status="checked"
                                    background="#828282"
                                    style={{ padding: 0, margin:0, flex:0 }}
                                    />
                                    <Text className="font-bold text-[#828282] text-md font-ubuntuBold">Personal Info</Text>
                                </View>
                            </View>
                            <View className="flex flex-col gap-y-2">
                                <View className="w-[100px] h-[3px] bg-[#828282] rounded-lg">

                                </View>
                                <View className="flex flex-row gap-x-1 items-center">
                                    <RadioButton.IOS
                                    color="#828282"
                                    value="Prof Info"
                                    status="checked"
                                    />
                                    <Text className="font-bold text-md text-[#828282]">Prof Info</Text>
                                </View>
                            </View>
                            <View className="flex flex-col gap-y-2">
                                <View className="w-[100px] h-[3px] bg-[#AD00DF] rounded-lg">

                                </View>
                                <View className="flex flex-row gap-x-1 items-center">
                                    <RadioButton.Android
                                    uncheckedColor="#AD00DF"
                                    value="Legal Info"
                                    status="checked"
                                    />
                                    <Text className="font-bold text-md text-[#697386] font-ubuntu">Legal Info</Text>
                                </View>
                            </View>
                        </View>
                        <View className={`w-[${width}] rounded-lg h-[400px]`}>
                            <Image source={AadharImage} 
                            className="rounded-lg"
                            style= {{flex:1 , width: undefined, height: undefined}} 
                            resizeMode="cover"></Image>
                        </View>
                        <Text className="text-[16px] font-bold font-ubuntu">UID</Text>
                        <TextInput
                            placeholder="Enter your 12 digit aadhar number"
                            className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
                        />
                        <Text onPress={handlePress} className="text-[16px] text-center text-[#AD00DF] underline font-bold font-ubuntu">Skip for now</Text>
                        <View className="flex flex-row space-x-4 items-center justify-center">
                            <Button 
                                    title=" Back" 
                                    className="border-[#AD00DF] border-[1px] rounded-lg text-center"
                                    onPress={handlePressBack} 
                                    buttonStyle={{ backgroundColor: 'white', width:150, alignSelf: 'center', paddingVertical: 14, borderRadius: 10 }} 
                                    titleStyle={{ color: '#AD00DF', fontWeight: 'semibold', fontFamily: 'Ubuntu500_Medium' }} 
                                    icon={
                                        <Icon>
                                            <ArrowLeftIcon color='#AD00DF' />
                                        </Icon>
                                    }
                                />
                            <Button 
                                    title=" Verify Account" 
                                    className=""
                                    onPress={handlePress} 
                                    buttonStyle={{ backgroundColor: '#EFBE10',width: 180, alignSelf: 'center', paddingVertical: 14, borderRadius: 10, borderWidth: 1, borderColor: '#EFBE10' }} 
                                    titleStyle={{ color: 'white', fontWeight: 'semibold', fontFamily: 'Ubuntu500_Medium' }} 
                                    icon={
                                        <Icon>
                                            <ArrowRightIcon color='white' />
                                        </Icon>
                                    }
                                />
                        </View>
                    </View>
            </ScrollView>
    </LinearGradient>
    )
}
