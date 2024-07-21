import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import HostPartyImage from '../../assets/images/host-a-party.svg';
import Icon from '../../atoms/icons/icon';
import ArrowRight from '../../assets/icons/arrow-right.svg';
export default function HostParty({ navigation }) {
    const handlePress = () => {
        navigation.navigate('Indulge');
    }

    return (
        <View className="w-full bg-white h-full">
            <View className="w-full">
                <HostPartyImage/>
                <View className='absolute top-[100px] flex items-center justify-center w-full'>
                    <Text className='text-white font-bold text-[24px]'>Host a party</Text>
                    <Text className='text-white text-[16px] mt-4'>Host your public or private party</Text>
                </View>
            </View>
            <View className='flex flex-row items-center justify-center my-5 gap-x-2'>
                <View className='w-[44px] bg-[#333333] h-[4px] rounded-lg'></View>
                <View className='w-[4px] bg-gray-500 h-[4px] rounded-full'></View>
                <View className='w-[4px] bg-gray-500 h-[4px] rounded-full'></View>
            </View>
            <View className="mt-5 w-full">
                <Button 
                    title=" Next" 
                    onPress={handlePress} 
                    buttonStyle={{ backgroundColor: '#EFBE10',  width: 150, alignSelf: 'center', paddingVertical: 14, borderRadius: 10 }} 
                    titleStyle={{ color: 'white', fontWeight: 'semibold' }} 
                    icon={
                        <Icon>
                            <ArrowRight color='white' />
                        </Icon>
                    }
                />
            </View>
        </View>
    );
}
