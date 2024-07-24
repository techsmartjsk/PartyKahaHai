import { View, Text, TextInput, ScrollView, Image, StyleSheet } from "react-native";
import BgBanner from '../../assets/images/bg-cover.png';
import { Button } from 'react-native-elements';
import Icon from '../../atoms/icons/icon';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import { RadioButton } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import ArrowLeftIcon from '../../assets/icons/arrow-left.svg';

export default function ProfInfo({ navigation }) {
    const handlePress = () => {
        navigation.navigate('LegalInfo');
    }

    const handleSignIn = () => {
        navigation.navigate('SignIn')
    }

    const handlePressBack = () => {
        navigation.navigate('PersonalInfo');
    }

    return (
        <LinearGradient
            colors={['#AE01DF', '#FCD332']}
            start={{ x: 1, y: -1 }}
            end={{ x: 3, y: 1 }}
            style={{ flex: 1 }}
        >
            <Image source={BgBanner} className="h-[100px]" resizeMode="cover"/>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="rounded-t-2xl bg-white">
                <View className="bg-[#730194] pb-5 mx-20 rounded-b-3xl flex py-5 items-center justify-center">
                    <Text className="text-center text-white font-bold font-ubuntuBold">Complete signup process</Text>
                </View>
                <View className='px-5 flex flex-col gap-y-4 py-5'>
                    <View className="flex flex-row justify-center gap-x-4">
                        <View className="flex flex-col gap-y-2">
                            <View className="w-[100px] h-[3px] bg-[#828282] rounded-lg" />
                            <View className="flex flex-row items-center gap-x-1 justify-left">
                                <RadioButton.IOS
                                    color="#828282"
                                    value="Personal Info"
                                    status="checked"
                                    background="#828282"
                                />
                                <Text className="font-bold text-[#828282] text-md font-ubuntuBold">Personal Info</Text>
                            </View>
                        </View>
                        <View className="flex flex-col gap-y-2">
                            <View className="w-[100px] h-[3px] bg-[#AD00DF] rounded-lg" />
                            <View className="flex flex-row gap-x-1 items-center">
                                <RadioButton.Android
                                    uncheckedColor="#C1C9D2"
                                    value="Prof Info"
                                    status="checked"
                                />
                                <Text className="font-bold text-md text-[#AD00DF] font-ubuntuBold">Prof. Info</Text>
                            </View>
                        </View>
                        <View className="flex flex-col gap-y-2">
                            <View className="w-[100px] h-[3px] bg-[#C1C9D2] rounded-lg" />
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
                    <Text className="font-bold text-[16px] font-ubuntuBold">Industry</Text>
                    <TextInput
                        placeholder="Select industry you are in"
                        className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
                    />
                    <Text className="font-bold text-[16px] font-ubuntuBold">Company</Text>
                    <TextInput
                        placeholder="Choose date of birth"
                        className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
                    />
                    <Text className="font-bold text-[16px] font-ubuntuBold">Designation</Text>
                    <TextInput
                        placeholder="Enter password"
                        className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
                    />
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <Text onPress={handlePress} className="text-[16px] text-center text-[#AD00DF] underline font-bold font-ubuntu">Skip for now</Text>
                <View className="flex flex-row space-x-4 items-center justify-center mt-4">
                    <Button
                        title=" Back"
                        onPress={handlePressBack}
                        buttonStyle={styles.backButton}
                        titleStyle={styles.backButtonTitle}
                        icon={
                            <Icon>
                                <ArrowLeftIcon color='#AD00DF' />
                            </Icon>
                        }
                    />
                    <Button
                        title=" Save & Next"
                        onPress={handlePress}
                        buttonStyle={styles.nextButton}
                        titleStyle={styles.nextButtonTitle}
                        icon={
                            <Icon>
                                <ArrowRightIcon color='white' />
                            </Icon>
                        }
                    />
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 100,
        width: '100%',
    },
    backButton: {
        backgroundColor: 'white',
        width: 150,
        alignSelf: 'center',
        paddingVertical: 14,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#AD00DF',
    },
    backButtonTitle: {
        color: '#AD00DF',
        fontWeight: 'semibold',
        fontFamily: 'Ubuntu400_Regular'
    },
    nextButton: {
        backgroundColor: '#EFBE10',
        width: 180,
        alignSelf: 'center',
        paddingVertical: 14,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#EFBE10'
    },
    nextButtonTitle: {
        color: 'white',
        fontWeight: 'semibold',
        fontFamily: 'Ubuntu500_Medium'
    },
});
