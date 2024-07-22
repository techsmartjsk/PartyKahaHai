import { View, Image, Text } from "react-native"
import { Button } from 'react-native-elements';
import IndulgeImage from '../../assets/images/indulge.svg';
import Icon from '../../atoms/icons/icon';
import ArrowRight from '../../assets/icons/arrow-right.svg';

export default function Indulge({ navigation }){
    const handlePress = () => {
        navigation.navigate('Enjoy');
    }
    return(
        <View>
            <View className="bg-[#AD00DF]">
                <IndulgeImage width='400' height="700"/>
                <View className='absolute top-[100px] flex items-center justify-center w-full'>
                    <Text className='text-white font-bold text-[24px]'>Indulge</Text>
                    <Text className='text-white text-[16px] mt-4'>Connect with like minded people</Text>
                </View>
            </View>
            <View className='flex flex-row items-center justify-center my-5 gap-x-2'>
                <View className='w-[4px] bg-gray-500 h-[4px] rounded-full'></View>
                <View className='w-[44px] bg-[#333333] h-[4px] rounded-lg'></View>
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
    )
}