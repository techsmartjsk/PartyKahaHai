import { View, Image, Text } from "react-native"
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function SignUp(){
    const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

    return(
        <View>
            <View>
                <Image source={require('../../assets/images/host-a-party.png')} resizeMode="stretch"></Image>
            </View>
            <View>
               <Text>SignUp</Text>
            </View>
        </View>
    )
}