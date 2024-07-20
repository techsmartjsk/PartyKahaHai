import { View } from "react-native"
import Request from '../../assets/icons/requests.svg'

export default function RequestIcon({color}){
    return(
        <View>
            <Request width={50} color={color}/>
        </View>
    )
}