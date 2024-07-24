import { Text, ScrollView, TextInput } from "react-native"
import Icon from "../../atoms/icons/icon"
import { Button } from "react-native-elements"
import Login from '../../assets/icons/login.svg';

export default function EmailID({ navigation }){
    const handlePress = () => {
        navigation.navigate('Home')
    }
    return(
        <ScrollView className="flex flex-col gap-y-4 mx-5 mt-5">
            <Text className="font-bold text-[16px] font-ubuntuBold">Enter Email</Text>
            <TextInput
                placeholder="Enter your email id"
                className="border-[1px] p-4 border-[#E6DFDF] rounded-md"
            />
            <Text className="font-bold text-[16px] font-ubuntuBold">Enter Password</Text>
            <TextInput
                placeholder="Enter password"
                className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
            />
            <Button 
                    title=" SignIn" 
                    onPress={handlePress} 
                    buttonStyle={{ backgroundColor: '#EFBE10',  width: '100%', alignSelf: 'center', paddingVertical: 14, borderRadius: 10 }} 
                    titleStyle={{ color: 'white', fontWeight: 'semibold', fontFamily: 'Ubuntu500_Medium' }} 
                    icon={
                        <Icon>
                            <Login color='white' />
                        </Icon>
                    }
                />
        </ScrollView>
    )
}