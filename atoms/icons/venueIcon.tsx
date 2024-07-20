import { View } from "react-native"
import Venue from '../../assets/icons/venues.svg'

export default function VenueIcon({ color }){
    return(
        <View>
            <Venue width={50} color={color}/>
        </View>
    )
}