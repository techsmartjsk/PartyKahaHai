import { View } from "react-native"
import Check from '../../assets/icons/check-icon.svg'

export default function CheckIcon({ color }){
    return(
        <View>
            <Check color={color}/>
        </View>
    )
}