import { View, Image, Text } from "react-native"
import { Button } from 'react-native-elements';
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function Indulge(){
    const navigation = useNavigation<NavigationProp<IntroStackParamList>>();

    const handlePress = () => {
        navigation.navigate('Enjoy');
    }
    return(
        <View>
            <View>
                <Image source={require('../../assets/images/host-a-party.png')} resizeMode="stretch"></Image>
            </View>
            <View>
               <Button title="Next" onPress={handlePress} iconPosition="left">

               </Button>
            </View>
        </View>
    )
}