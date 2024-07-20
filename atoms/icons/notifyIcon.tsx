import { View } from "react-native";
import Notify from '../../assets/icons/notify-icon.svg'

export default function NotifyIcon({ color }){
    return(
        <View>
            <Notify color={color}/>
        </View>
    )
}