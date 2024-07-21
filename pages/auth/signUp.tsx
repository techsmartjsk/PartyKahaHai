import { View, Image, Text } from "react-native"

export default function SignUp(){

    return(
        <View>
            <View>
                <Image source={require('../../assets/images/host-a-party.svg')} resizeMode="stretch"></Image>
            </View>
            <View>
               <Text>SignUp</Text>
            </View>
        </View>
    )
}