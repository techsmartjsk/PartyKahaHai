import { Text, View, TextInput } from "react-native"
import Icon from "../../atoms/icons/icon"
import { Button } from "react-native-elements"
import Login from '../../assets/icons/login.svg';

export default function UID({ navigation }){
    const handlePress = () => {
        navigation.navigate('Home')
    }
    return(
        <View className="flex flex-col gap-y-4 mx-5 mt-5">
            <Text className="font-bold text-[18px]">Enter mobile number</Text>
            <TextInput
            placeholder="Enter your UID registered mobile number"
            className="border-[1px] p-4 border-[#E6DFDF] rounded-md"
            />
            <Button 
                    title=" SignIn" 
                    onPress={handlePress} 
                    buttonStyle={{ backgroundColor: '#EFBE10',  width: '100%', alignSelf: 'center', paddingVertical: 14, borderRadius: 10 }} 
                    titleStyle={{ color: 'white', fontWeight: 'semibold' }} 
                    icon={
                        <Icon>
                            <Login color='white' />
                        </Icon>
                    }
                />
            <Text className="text-[12px] mt-5 text-[#BDBDBD] text-center">OTP will be sent to mobile number for verification</Text>
        </View>
    )
}