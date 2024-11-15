import { Text, View, TextInput } from 'react-native';
import Icon from '../../atoms/icons/icon';
import { Button } from 'react-native-elements';
import Login from '../../assets/icons/login.svg';
import { useState } from 'react';
import axios from 'axios';
// import { useMutation } from '@tanstack/react-query';

export default function UID({ navigation }) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');
  // const api = process.env.API_URL;

  // const sendCode = useMutation(
  //   {
  //       mutationFn: async (mobileNumber: string) => {
  //           const response = await axios.post(`${api}/auth/send-code`, {
  //               'sub': mobileNumber,
  //               'type':'phone'
  //           })
    
  //           return response.data;
  //       },
  //       onSuccess: (data) => {
  //         navigation.navigate('Otp', {
  //           sub: mobileNumber,
  //           pinId: data.pinId
  //         });
  //       },
  //       onError: (error) => {
  //         setError(error.message || "Error sending verification code!");
  //       },
  //     }
  // )

  const handlePress = () => {
    if (mobileNumber.length === 10) {
      navigation.navigate('Otp', {
        sub: mobileNumber,
        pinId: "ID"
      });
      // sendCode.mutate(mobileNumber)
    } else {
      setError('Please enter a valid 10-digit mobile number.');
    }
  };

  const handleChange = (text: string) => {
    if (/^\d{0,10}$/.test(text)) {
      setMobileNumber(text);
      setError('');
    }
  };

  return (
    <View className="flex flex-col gap-y-4 mx-5 mt-5">
      <Text className="font-bold text-[18px] font-ubuntu">
        Enter mobile number
      </Text>
      <View className="flex flex-row items-center border-[1px] p-4 border-[#E6DFDF] rounded-md font-ubuntu">
        <Text className="text-gray-500 mr-2">+91</Text>
        <TextInput
          placeholder="Enter your mobile number"
          className="flex-1"
          keyboardType="numeric"
          value={mobileNumber}
          onChangeText={handleChange}
          maxLength={10}
        />
      </View>
      {error ? <Text className="text-red-500 mt-2">{error}</Text> : null}
      <Button
        title="Sign In"
        onPress={handlePress}
        buttonStyle={{
          backgroundColor: '#EFBE10',
          width: '100%',
          alignSelf: 'center',
          paddingVertical: 14,
          borderRadius: 10,
        }}
        titleStyle={{
          color: 'black',
          fontWeight: 'semibold',
          fontFamily: 'Ubuntu_400Regular',
        }}
        icon={
          <Icon>
            <Login color="black" />
          </Icon>
        }
      />
      <Text className="text-[12px] mt-5 text-[#BDBDBD] text-center font-ubuntu">
        OTP will be sent to mobile number for verification
      </Text>
    </View>
  );
}
