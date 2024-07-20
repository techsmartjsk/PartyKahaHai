import { View } from "react-native"
import Party from '../../assets/icons/parties.svg'

export default function PartyIcon({ color }){
    return(
        <View>
            <Party width={50} color={color}/>
        </View>
    )
}