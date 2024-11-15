import { View, Text, SafeAreaView, TextInput } from "react-native"
import Header from "../../components/header/header"
import { Button } from 'react-native-elements';
import Icon from "../../atoms/icons/icon";
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import Connect from '../../assets/icons/connect.svg';
import RangeSlider from "../../atoms/rangeSlider/rangeSlider";
import { Dropdown } from "react-native-element-dropdown";
import gstyles from '../../assets/styles/global';
import { useState } from "react";
import DatePicker from "../../atoms/datepicker/datepicker";

export default function ConnectScreen({ navigation }){
    const time = [{
        "label":"30 mins",
        "value":"30 mins"
      },
      {
        "label":"1 hour",
        "value":"1 hour"
      },
      {
        "label":"1 hour 30 mins",
        "value":"1 hour 30 mins"
      },
      {
        "label":"2 hours",
        "value":"2 hours"
      }
    ]
  
    const [selectedDate, setSelectedDate] = useState("")

    const date = [{
        "label":"Today",
        "value":"Today"
      }
    ]
  
    const [selectedTime, setSelectedTime] = useState("")

    
    return (
        <SafeAreaView className="bg-white">
            <Header
            navigation={navigation}
            iconColor="#AD00DF"
            titleTextColor="black"
            subtitleTextColor="black"
            notifyIconColor="black"
            className="absolute top-0 w-full"

            />
            <View className="flex flex-col gap-y-4 h-screen px-5 py-5">
            <View>
                <Text className="text-[#AD00DF] font-ubuntuBold py-2 text-xl">Ready to connect?</Text>
                <Text className="text-[#828282] font-ubuntu text-md">This is just a starting point -  be open to new plans when you connect with others!</Text>
            </View>
            <Text className="font-bold text-[16px] font-ubuntuBold">
            Title<Text className='text-[#E82525]'>*</Text>
            </Text>
            <TextInput
            placeholder="Title"
            className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
            />
            <Text className="font-bold text-[16px] font-ubuntuBold">Date<Text className='text-[#E82525]'>*</Text></Text>
            <Dropdown
            placeholder="Select Date"
            value={selectedDate}
            style={[gstyles.dropdown]}
            placeholderStyle={[gstyles.placeholder]}
            data={date}
            onChange={(item) => {
                setSelectedDate(item.value);
            }}
            labelField="label"
            valueField="value"
            fontFamily="Ubuntu_400Regular"
            itemTextStyle={gstyles.itemStyle}
            selectedTextStyle={gstyles.itemStyle}
            iconColor="#AD00DF"
            />
            <Text className="text-[#828282] font-ubuntu">Today’s plans only! Visit the Explore page for future plans.</Text>
            <Text className="font-bold text-[16px] font-ubuntuBold">Time<Text className='text-[#E82525]'>*</Text></Text>
            <Dropdown
            placeholder="Select Time"
            value={selectedTime}
            style={[gstyles.dropdown]}
            placeholderStyle={[gstyles.placeholder]}
            data={time}
            onChange={(item) => {
                setSelectedTime(item.value);
            }}
            labelField="label"
            valueField="value"
            fontFamily="Ubuntu_400Regular"
            itemTextStyle={gstyles.itemStyle}
            selectedTextStyle={gstyles.itemStyle}
            iconColor="#AD00DF"
            />

            <Text className="font-bold text-[16px] font-ubuntuBold">Select Venue</Text>
            <TextInput
            placeholder="Select a venue"
            className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
            />
            <Text className="font-bold text-[16px] font-ubuntuBold">Distance</Text>
            <RangeSlider min={0} max={5} step={1} values={[0]}/>
            <Button
            onPress={()=>{
                navigation.navigate("People")
            }}
            title=" Connect now"
            buttonStyle={{
                backgroundColor: '#EFBE10',
                alignSelf: 'center',
                paddingVertical: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#EFBE10',
            }}
            titleStyle={{
                color: 'black',
                fontFamily: 'Ubuntu_500Medium',
            }}
            icon={
                <Icon>
                <Connect color="black" />
                </Icon>
            }
            />
            </View>
            
            
        </SafeAreaView>
    )
}