import { View, Image, Text } from "react-native"
import { Button } from 'react-native-elements';
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function HostParty(){
    const navigation = useNavigation<NavigationProp<IntroStackParamList>>();

    const handlePress = () => {
        navigation.navigate('Indulge');
    }
    return(
        <View className="flex w-full">
            <View>
                <Image source={require('../../assets/images/host-a-party.png')} resizeMode="stretch" className="w-full"></Image>
            </View>
            <View>
               <Button title="Next" onPress={handlePress} iconPosition="left">

               </Button>
            </View>
        </View>
    )
}