import { Image, SafeAreaView, Switch, Text, View } from "react-native";
import Header from "../../components/header/header";
import { useState } from "react";
import Shield from "../../assets/icons/profile/shield.svg";
import Edit from "../../assets/icons/edit-icon.svg";
import ProfileIcon from "../../assets/icons/profile/profile.svg";
import MapIcon from "../../assets/icons/profile/map.svg";
import Icon from "../../atoms/icons/icon";
import Logout from "../../assets/icons/profile/logout.svg";
import Lock from "../../assets/icons/profile/lock.svg";
import Heart from "../../assets/icons/profile/heart.svg";
import Help from "../../assets/icons/profile/help.svg";
import NavArrowRight from "../../assets/icons/nav-arrow-right.svg";

export default function Profile({ navigation }){
    const [switchChecked, setSwitchChecked] = useState<boolean>(false);

    const handleSwitchChange = (checked: boolean) => {
        setSwitchChecked(checked);
    };

    return(
        <SafeAreaView className="bg-white h-full">
            <Header navigation={navigation} iconColor='#AD00DF' titleTextColor='black' subtitleTextColor='black' notifyIconColor='black'/>
            <Text className="text-[20px] mt-5 font-bold mx-5 mb-5">Profile</Text>

            <View className="mx-5 rounded-md bg-[#AD00DF] px-4 py-4">
                <View className="flex items-center flex-row gap-2">
                    <Image source={require('../../assets/images/profileImage.png')} className="w-[60px] h-[60px]"/>
                    <View className="flex flex-col flex-1">
                        <Text className="text-white text-lg">Saumya Chaudhary</Text>
                        <Text className="text-white text-md">@Saumya</Text>
                    </View>
                    <View className="flex justify-end">
                        <Icon>
                            <Edit color='white'/>
                        </Icon>
                    </View>
                </View>
            </View>

            <View className="flex flex-col px-2 py-4 shadow-lg mt-4 bg-white mx-5 rounded-lg space-y-6">
                <View className="flex flex-row items-center gap-x-4">
                    <View>
                        <View className="w-[40px] h-[40px] bg-[#F3F2FB] rounded-full flex items-center justify-center p-1">
                            <Icon>
                                <ProfileIcon/>
                            </Icon>
                        </View>
                    </View>
                    <View className="flex flex-col gap-1 flex-1">
                        <Text className="text-[14px] font-bold">Personal Info</Text>
                        <Text className="text-[12px] text-[#828282]">View & make changes to your account</Text>
                    </View>
                    <View className="flex justify-end">
                        <Icon>
                            <NavArrowRight color="#AD00DF"/>
                        </Icon>
                    </View>
                </View>

                <View className="flex flex-row items-center gap-x-4">
                    <View>
                        <View className="w-[40px] h-[40px] bg-[#F3F2FB] rounded-full flex items-center justify-center p-1">
                            <Icon>
                                <MapIcon color="#AD00DF"/>
                            </Icon>
                        </View>
                    </View>
                    <View className="flex flex-col gap-1 flex-1">
                        <Text className="text-[14px] font-bold">Addresses</Text>
                        <Text className="text-[12px] text-[#828282]">Share, edit & add new address</Text>
                    </View>
                    <View className="flex justify-end">
                        <Icon>
                            <NavArrowRight color="#AD00DF"/>
                        </Icon>
                    </View>
                </View>

                <View className="flex flex-row items-center gap-x-4">
                    <View>
                        <View className="w-[40px] h-[40px] bg-[#F3F2FB] rounded-full flex items-center justify-center p-1">
                            <Icon>
                                <Shield color="#AD00DF"/>
                            </Icon>
                        </View>
                    </View>
                    <View className="flex flex-col gap-1 flex-1">
                        <Text className="text-[14px] font-bold">Face ID / Touch ID</Text>
                        <Text className="text-[12px] text-[#828282]">Manage your device security</Text>
                    </View>
                    <View className="flex justify-end">
                        <Switch
                            onValueChange={handleSwitchChange}
                            value={switchChecked}
                            trackColor={{ false: "#000000", true: "#AD00DF" }}
                            thumbColor={switchChecked ? "#FFFFFF" : "#000000"}
                        />
                    </View>
                </View>

                <View className="flex flex-row items-center gap-x-4">
                    <View>
                        <View className="w-[40px] h-[40px] bg-[#F3F2FB] rounded-full flex items-center justify-center p-1">
                            <Icon>
                                <Lock color="#AD00DF"/>
                            </Icon>
                        </View>
                    </View>
                    <View className="flex flex-col gap-1 flex-1">
                        <Text className="text-[14px] font-bold">Account Verification</Text>
                        <Text className="text-[12px] text-[#828282]">Account authenticity verification</Text>
                    </View>
                    <View className="flex justify-end">
                        <Icon>
                            <NavArrowRight color="#AD00DF"/>
                        </Icon>
                    </View>
                </View>

                <View className="flex flex-row items-center gap-x-4">
                    <View>
                        <View className="w-[40px] h-[40px] bg-[#F3F2FB] rounded-full flex items-center justify-center p-1">
                            <Icon>
                                <Logout color="#AD00DF" />
                            </Icon>
                        </View>
                    </View>
                    <View className="flex flex-col gap-1 flex-1">
                        <Text className="text-[14px] font-bold">Logout</Text>
                        <Text className="text-[12px] text-[#828282]">Logout from your account</Text>
                    </View>
                    <View className="flex justify-end">
                        <Icon>
                            <NavArrowRight color="#AD00DF"/>
                        </Icon>
                    </View>
                </View>
            </View>

            <View className="flex flex-col px-2 py-4 shadow-lg mt-4 bg-white mx-5 rounded-lg space-y-6">
                <View className="flex flex-row items-center gap-x-4">
                    <View>
                        <View className="w-[40px] h-[40px] bg-[#F3F2FB] rounded-full flex items-center justify-center p-1">
                            <Icon>
                                <Help color="#AD00DF"/>
                            </Icon>
                        </View>
                    </View>
                    <View className="flex flex-col gap-1 flex-1">
                        <Text className="text-[16px]">Help & Support</Text>
                    </View>
                    <View className="flex justify-end">
                        <Icon>
                            <NavArrowRight color="#AD00DF"/>
                        </Icon>
                    </View>
                </View>

                <View className="flex flex-row items-center gap-x-4">
                    <View>
                        <View className="w-[40px] h-[40px] bg-[#F3F2FB] rounded-full flex items-center justify-center p-1">
                            <Icon>
                                <Heart color="#AD00DF"/>
                            </Icon>
                        </View>
                    </View>
                    <View className="flex flex-col gap-1 flex-1">
                        <Text className="text-[16px]">About App</Text>
                    </View>
                    <View className="flex justify-end">
                        <Icon><NavArrowRight color="#AD00DF"/></Icon>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}