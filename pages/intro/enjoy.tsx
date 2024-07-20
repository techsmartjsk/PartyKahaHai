import { View, Image, Text } from "react-native"
import { Button } from 'react-native-elements';
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function Enjoy(){
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handlePress = () => {
        navigation.navigate('Auth');
    }

    return(
        <View>
            <View>
                <Image source={require('../../assets/images/host-a-party.png')} resizeMode="stretch"></Image>
            </View>
            <View>
               <Button title="Sign In" onPress={handlePress} iconPosition="left">

               </Button>
            </View>
        </View>
    )
}