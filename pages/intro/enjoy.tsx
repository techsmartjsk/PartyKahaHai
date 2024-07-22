import { View, Image, Text } from "react-native"
import { Button } from 'react-native-elements';
import Icon from '../../atoms/icons/icon';
import EnjoyImage from '../../assets/images/enjoy.svg';
import Login from '../../assets/icons/login.svg';

export default function Enjoy({ navigation }){
    const handlePress = () => {
        navigation.navigate('Auth')
    }

    return(
        <View>
            <View className="bg-[#AD00DF]">
                <EnjoyImage width='400' height="700"/>
                <View className='absolute top-[100px] flex items-center justify-center w-full'>
                    <Text className='text-white font-bold text-[24px]'>Enjoy</Text>
                    <Text className='text-white text-[16px] mt-4'>Enjoy your day at top class Venues</Text>
                </View>
            </View>
            <View className='flex flex-row items-center justify-center my-5 gap-x-2'>
                <View className='w-[4px] bg-gray-500 h-[4px] rounded-full'></View>
                <View className='w-[4px] bg-gray-500 h-[4px] rounded-full'></View>
                <View className='w-[44px] bg-[#333333] h-[4px] rounded-lg'></View>
            </View>
            <View className="mt-5 w-full">
                <Button 
                    title=" SignIn" 
                    onPress={handlePress} 
                    buttonStyle={{ backgroundColor: '#EFBE10',  width: 150, alignSelf: 'center', paddingVertical: 14, borderRadius: 10 }} 
                    titleStyle={{ color: 'white', fontWeight: 'semibold' }} 
                    icon={
                        <Icon>
                            <Login color='white' />
                        </Icon>
                    }
                />
            </View>
        </View>
    )
}