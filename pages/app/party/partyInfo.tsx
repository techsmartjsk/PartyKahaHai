
import { View, Text, TextInput, ScrollView} from "react-native";
import { Button } from 'react-native-elements';
import ArrowRightIcon from '../../../assets/icons/arrow-right.svg';
import { RadioButton } from "react-native-paper";
import Icon from "../../../atoms/icons/icon";

export default function PartyInfo({ navigation, setActiveWindow }) {
    const handlePress = () => {
        setActiveWindow(1)
    }

    return (
        <ScrollView className="h-full bg-white rounded-t-2xl">
            <View className='px-5 flex flex-col gap-y-4 py-5'>
                <View className="flex flex-row justify-center mb-5">
                    <View className="flex flex-col gap-y-2 w-1/3">
                        <View className="w-[90%] h-[3px] bg-[#AD00DF] rounded-lg">

                        </View>
                        <View className="flex flex-row items-center gap-x-1 justify-left">
                            <RadioButton.Android
                            color="#AD00DF"
                            value="Personal Info"
                            status="checked"
                            style={{ padding: 0, margin:0, flex:0 }}
                            />
                            <Text className="font-bold text-md font-ubuntuBold">Party Info</Text>
                        </View>
                    </View>
                    <View className="flex flex-col gap-y-2 w-1/3">
                        <View className="w-[90%] h-[3px] bg-[#C1C9D2] rounded-lg">

                        </View>
                        <View className="flex flex-row gap-x-1 items-center">
                            <RadioButton.Android
                            uncheckedColor="#C1C9D2"
                            value="Prof Info"
                            status="unchecked"
                            />
                            <Text className="font-bold text-md text-[#697386] font-ubuntuBold">Specifications</Text>
                        </View>
                    </View>
                    <View className="flex flex-col gap-y-2 w-1/3">
                        <View className="w-[90%] h-[3px] bg-[#C1C9D2] rounded-lg">

                        </View>
                        <View className="flex flex-row gap-x-1 items-center">
                            <RadioButton.Android
                            uncheckedColor="#C1C9D2"
                            value="Legal Info"
                            status="unchecked"
                            />
                            <Text className="font-bold text-md text-[#697386] font-ubuntuBold">Venue & Other</Text>
                        </View>
                    </View>
                </View>
                <Text className="font-bold text-[16px] font-ubuntuBold">Name of the Party*</Text>
                <TextInput
                    placeholder="Enter name of the party"
                    className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
                />
                <Text className="font-bold text-[16px] font-ubuntuBold">Date*</Text>
                <TextInput
                    placeholder="Enter party date"
                    className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
                />
                <Text className="font-bold text-[16px] font-ubuntuBold">Time*</Text>
                <TextInput
                    placeholder="Enter party time"
                    className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
                />
                <Text className="font-bold text-[16px] font-ubuntuBold">How many people can attend?*</Text>
                <TextInput
                    placeholder="Select number of people can attend the party"
                    className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
                />
                <Text className="text-[#828282] text-center">Fields contain “*” are mandatory</Text>
                <Button 
                        title=" Save & Next" 
                        onPress={handlePress} 
                        buttonStyle={{ backgroundColor: '#EFBE10',  width: '100%', alignSelf: 'center', paddingVertical: 14, borderRadius: 10, borderWidth: 1, borderColor: '#EFBE10' }} 
                        titleStyle={{ color: 'white', fontWeight: 'semibold', fontFamily: 'Ubuntu500_Medium' }} 
                        icon={
                            <Icon>
                                <ArrowRightIcon color='white' />
                            </Icon>
                        }
                    />
            </View>
        </ScrollView>
    )
}
