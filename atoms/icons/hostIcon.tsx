import { View } from "react-native"
import Host from '../../assets/icons/host.svg'

export default function HostIcon({color}){
    return(
        <View>
            <Host width={50} color={color}/>
        </View>
    )
}