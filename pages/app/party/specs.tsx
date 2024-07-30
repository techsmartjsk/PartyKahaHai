
import { View, Text, TextInput, ScrollView} from "react-native";
import { Button } from 'react-native-elements';
import ArrowRightIcon from '../../../assets/icons/arrow-right.svg';
import { RadioButton } from "react-native-paper";
import Icon from "../../../atoms/icons/icon";
import ArrowLeftIcon from "../../../assets/icons/arrow-left.svg";

export default function Specs({ navigation, setActiveWindow }) {
    const handlePress = () => {
        setActiveWindow(2)
    }

    const handlePressBack = () => {
        setActiveWindow(0)
    }

    return (
        <ScrollView className="h-full bg-white rounded-t-2xl">
            <View className='px-5 flex flex-col gap-y-4 py-5'>
                <View className="flex flex-row justify-center mb-5">
                    <View className="flex flex-col gap-y-2 w-1/3">
                        <View className="w-[90%] h-[3px] bg-[#828282] rounded-lg">

                        </View>
                        <View className="flex flex-row items-center gap-x-1 justify-left">
                            <RadioButton
                            color="#828282"
                            value="Personal Info"
                            status="checked"
                            />
                            <Text className="font-bold text-md text-[#828282] font-ubuntuBold">Party Info</Text>
                        </View>
                    </View>
                    <View className="flex flex-col gap-y-2 w-1/3">
                        <View className="w-[90%] h-[3px] bg-[#AD00DF] rounded-lg">

                        </View>
                        <View className="flex flex-row gap-x-1 items-center">
                            <RadioButton.Android
                            uncheckedColor="#C1C9D2"
                            value="Prof Info"
                            status="checked"
                            color="#AD00DF"
                            />
                            <Text className="font-bold text-md text-[#AD00DF] font-ubuntuBold">Specifications</Text>
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
                <Text className="font-bold text-[16px] font-ubuntuBold">Specify Age Group</Text>
                <TextInput
                    placeholder="Enter name of the party"
                    className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
                />
                <Text className="font-bold text-[16px] font-ubuntuBold">Specify Gender</Text>
                <TextInput
                    placeholder="Enter party date"
                    className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
                />
                <Text className="font-bold text-[16px] font-ubuntuBold">Specify Community</Text>
                <TextInput
                    placeholder="Enter party time"
                    className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
                />
                <Text className="font-bold text-[16px] font-ubuntuBold">Specify Locality</Text>
                <TextInput
                    placeholder="Select number of people can attend the party"
                    className="border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu"
                />
                <Text className="text-[#828282] text-center">All specifications are optional</Text>
                <View className="flex flex-row space-x-4 items-center justify-center">
                    <Button 
                        title=" Back" 
                        className="border-[#AD00DF] border-[1px] rounded-lg text-center"
                        onPress={handlePressBack} 
                        buttonStyle={{ backgroundColor: 'white', width:150, alignSelf: 'center', paddingVertical: 14, borderRadius: 10 }} 
                        titleStyle={{ color: '#AD00DF', fontWeight: 'semibold', fontFamily: 'Ubuntu500_Medium' }} 
                        icon={
                            <Icon>
                                <ArrowLeftIcon color='#AD00DF' />
                            </Icon>
                        }
                    />
                    <Button 
                            title=" Save & Preview" 
                            onPress={handlePress} 
                            buttonStyle={{ backgroundColor: '#EFBE10', alignSelf: 'center', paddingVertical: 14, borderRadius: 10, borderWidth: 1, borderColor: '#EFBE10' }} 
                            titleStyle={{ color: 'white', fontWeight: 'semibold', fontFamily: 'Ubuntu500_Medium' }} 
                            icon={
                                <Icon>
                                    <ArrowRightIcon color='white' />
                                </Icon>
                            }
                        />
                </View>
            </View>
        </ScrollView>
    )
}
