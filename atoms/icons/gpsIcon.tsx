import { View } from "react-native"
import Gps from '../../assets/icons/gps.svg'

export default function GPSIcon({ color }){
    return(
        <View className="w-[30px]">
            <Gps color={color}/>
        </View>
    )
}