import { View } from "react-native"
import Explore from '../../assets/icons/explore.svg'

export default function ExploreIcon({ color }){
    return(
        <View>
            <Explore width={50} color={color}/>
        </View>
    )
}