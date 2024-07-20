import { View, Image, Text } from "react-native"
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function SignIn(){
    const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

    return(
        <View>
            <View>
                <Image source={require('../../assets/images/host-a-party.png')} resizeMode="stretch"></Image>
            </View>
            <View>
               <Text>SignIn</Text>
            </View>
        </View>
    )
}