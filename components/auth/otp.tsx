import { Text, ScrollView, TextInput, View } from 'react-native';
import Icon from '../../atoms/icons/icon';
import { Button } from 'react-native-elements';
import Submit from '../../assets/icons/submit.svg';
import { useState, useRef } from 'react';
// import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function OTP({ navigation, sub, pinId }) {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [error, setError] = useState('');
  const inputs = useRef([]);
  // const { API_URL } = process.env;

  // const verifyCode = useMutation({
  //   mutationFn: async ({
  //     pin,
  //     pinId
  //   }: { pin: string; pinId: string }) => {
  //     const response = await axios.post(`${API_URL}/auth/verify-code`, {
  //       pin, pinId, sub
  //     });

  //     return response.data;
  //   },
  //   onSuccess: (data) => {
  //     localStorage.setItem("access-token", data.accessToken)
  //     navigation.navigate("Home");
  //   },
  //   onError: (error) => {
  //     navigation.navigate("Home");
  //     setError('Invalid code. Please try again.');
  //   }
  // });

  const handlePress = () => {
    const pin = otp.join('');
    if (pin.length === 6) {
      navigation.navigate("Home")
      // verifyCode.mutate({ pin, pinId });
    } else {
      setError('Please enter a valid 6-digit OTP.');
    }
  };

  const handleChangeNumber = () => {
    navigation.navigate('SignIn'); // Navigate to the Change Number screen
  };

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text) || text === '') {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      setError(''); // Clear error on input change

      if (text && index < inputs.current.length - 1) {
        inputs.current[index + 1].focus();
      } else if (!text && index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  return (
    <ScrollView className="flex flex-col gap-y-4 mx-5 mt-5">
      <Text className="font-bold text-[12px] font-ubuntu">
        Enter OTP sent to {sub}{' '}
        <Text onPress={handleChangeNumber} className="text-[#AD00DF] font-ubuntu underline">
          Change Number
        </Text>
      </Text>
      <View className="flex flex-row justify-between mt-3">
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputs.current[index] = el)}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            maxLength={1}
            keyboardType="numeric"
            style={{
              borderColor: error ? 'red' : '#E6DFDF',
              borderWidth: 1,
              borderRadius: 8,
              padding: 10,
              width: 40,
              textAlign: 'center',
              fontSize: 16,
              color: error ? 'red' : 'black',
            }}
          />
        ))}
      </View>
      {error ? (
        <Text className="text-red-500 mt-2 text-center">{error}</Text>
      ) : null}
      <Text className="text-blue-500 font-ubuntuBold text-[14px] text-[#AD00DF] text-center py-2 underline">
        Re-send OTP
      </Text>
      <Button
        title="Submit"
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
            <Submit color="black" />
          </Icon>
        }
      />
      <Text className="text-[12px] mt-5 text-[#BDBDBD] text-center font-ubuntu">
        OTP will be sent to your mobile number for verification
      </Text>
    </ScrollView>
  );
}
