import { SafeAreaView, Text } from "react-native"
import Header from "../../components/header/header"
import PartyInfo from "./party/partyInfo"
import { useEffect, useState } from "react"
import Specs from "./party/specs"
import Venue from "./party/venue"

export default function Host({ navigation }){
    const [activeWindow, setActiveWindow] = useState(0)
    
    const showWindow = (activeWindow) => {
        switch(activeWindow){
            case 0:
                return <PartyInfo navigation={navigation} setActiveWindow={setActiveWindow}/>
            case 1:
                return <Specs navigation={navigation} setActiveWindow={setActiveWindow}/>
            case 2:
                return <Venue navigation={navigation} setActiveWindow={setActiveWindow}/>
            default:
                return <PartyInfo navigation={navigation} setActiveWindow={setActiveWindow}/>
        }

    }

    useEffect(()=>{
        setActiveWindow(0)
    },[])
    return(
        <SafeAreaView className="bg-white h-full">
            <Header navigation={navigation} iconColor='#AD00DF' titleTextColor='black' subtitleTextColor='black' notifyIconColor='black' className=""/>
            <Text className="text-[20px] mt-5 font-bold mx-5 mb-5 font-ubuntuBold">Host a Party</Text>
            {showWindow(activeWindow)}
        </SafeAreaView>
    )
}