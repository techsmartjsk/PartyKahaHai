import { View, Image, Text } from "react-native"
import HostParty from '../../assets/images/host-a-party.svg';

export default function SignIn(){
    return(
        <View>
            <View>
                <HostParty/>
            </View>
            <View>
               <Text>SignIn</Text>
            </View>
        </View>
    )
}