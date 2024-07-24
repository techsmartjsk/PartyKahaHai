import React from 'react';
import { View, Image, Dimensions, StyleSheet } from "react-native";
import { Button } from 'react-native-elements';
import Icon from '../../atoms/icons/icon';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import { styled } from 'nativewind';

const IndulgeImage = require('../../assets/images/indulge.png');

const StyledView = styled(View);
const StyledImage = styled(Image);

export default function Indulge({ navigation }){
    const handlePress = () => {
        navigation.navigate('Enjoy');
    }

    const { width, height } = Dimensions.get("window");

    return(
        <StyledView className="flex-1 bg-white">
            <StyledView style={{ width: width, height: height * 0.8 }}>
                <StyledImage
                    source={IndulgeImage}
                    style= {{flex:1 , width: undefined, height: undefined}} 
                    resizeMode="cover"
                />
            </StyledView>
            <StyledView className="flex flex-row items-center justify-center my-5 gap-x-2">
                <StyledView className="w-[4px] bg-gray-500 h-[4px] rounded-full"></StyledView>
                <StyledView className="w-[44px] bg-[#333333] h-[4px] rounded-lg"></StyledView>
                <StyledView className="w-[4px] bg-gray-500 h-[4px] rounded-full"></StyledView>
            </StyledView>
            <StyledView className="mt-5 w-full flex items-center">
                <Button 
                    title=" Next" 
                    onPress={handlePress} 
                    buttonStyle={styles.buttonStyle} 
                    titleStyle={styles.titleStyle} 
                    icon={
                        <Icon>
                            <ArrowRight color='white' />
                        </Icon>
                    }
                />
            </StyledView>
        </StyledView>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#EFBE10',
        width: 150,
        paddingVertical: 14,
        borderRadius: 10,
    },
    titleStyle: {
        color: 'white',
        fontWeight: '600',
        fontFamily: 'Ubuntu_400Regular'
    },
});
