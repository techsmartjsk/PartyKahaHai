import { View } from "react-native"
import Cross from '../../assets/icons/cross-icon.svg'

export default function CrossIcon({ color }){
    return(
        <View>
            <Cross color={color}/>
        </View>
    )
}