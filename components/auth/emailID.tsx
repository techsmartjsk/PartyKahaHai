import { Text, ScrollView, TextInput } from 'react-native';
import Icon from '../../atoms/icons/icon';
import { Button } from 'react-native-elements';
import Login from '../../assets/icons/login.svg';
import { useState } from 'react';
// import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function EmailID({ navigation }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const api = process.env.API_URL;

  // const sendCode = useMutation(
  //   {
  //       mutationFn: async (email: string) => {
  //           const response = await axios.post(`${api}/auth/send-code`, {
  //               'sub': email,
  //               'type':'email'
  //           })
    
  //           return response.data;
  //       },
  //       onSuccess: (data) => {
  //         navigation.navigate('Otp', {
  //           sub: email,
  //           pinId: data.pinId
  //         });
  //       },
  //       onError: (error) => {
  //         setError(error.message || "Error sending verification code!");
  //       },
  //     }
  // )

  const handlePress = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      navigation.navigate('Otp', {
        sub: email,
        pinId: "ID"
      });
      // sendCode.mutate(email)
    } else {
      setError('Please enter a valid email address.');
    }
  };

  const handleChange = (text: string) => {
    setEmail(text);
    setError(''); // Clear error on text change
  };

  return (
    <ScrollView className="flex flex-col gap-y-4 mx-5 mt-5">
      <Text className="font-bold text-[16px] font-ubuntuBold">Enter Email</Text>
      <TextInput
        placeholder="Enter your email id"
        className="border-[1px] p-4 border-[#E6DFDF] rounded-md"
        value={email}
        onChangeText={handleChange}
        keyboardType="email-address"
        autoCapitalize="none"
      />
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
    </ScrollView>
  );
}
