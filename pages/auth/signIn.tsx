import { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import UID from '../../components/auth/uid';
import EmailID from '../../components/auth/emailID';
import Logo from '../../assets/icons/logo.svg';
import LoginBanner from '../../assets/images/login-banner.png';
import { LinearGradient } from 'expo-linear-gradient';

export default function SignIn({ navigation }) {
  const [checked, setChecked] = useState('phone');

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <LinearGradient
      colors={['#AE01DF', '#FCD332']}
      start={{ x: 1, y: -1 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
      className="relative flex-1"
    >
      <Image
        source={LoginBanner}
        className="mt-2 h-[260px] absolute w-full z-[10]"
        resizeMode="cover"
      />
      <View className="rounded-t-2xl shadow-lg flex-1 pt-4 bg-white mt-[220px]">
        <View className="flex justify-between flex-row w-full px-5 pt-5">
          <Text className="text-[32px] font-bold text-left font-ubuntuBold">
            Sign in
          </Text>
          <Logo />
        </View>
        <View className="mx-5 rounded-lg mt-10 flex flex-row border-gray-500">
          <View
            className={`w-1/2 flex flex-row items-center py-2 space-x-2 px-2 bg-opacity-50 rounded-l-xl border-[1px] ${checked === 'phone' ? 'border-[#AD00DF] bg-[#F9EFFE]' : 'border-gray-500'}`}
          >
            <RadioButton.Android
              color="#AD00DF"
              value="phone"
              status={checked === 'phone' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('phone')}
            />
            <Text
              onPress={() => setChecked('phone')}
              className="font-bold text-md font-ubuntu"
            >
              With Mobile Number
            </Text>
          </View>
          <View
            className={`w-1/2 flex flex-row items-center py-2 px-2 space-x-2 bg-opacity-50 rounded-r-xl border-[1px] ${checked === 'email' ? 'border-[#AD00DF] bg-[#F9EFFE]' : 'border-gray-500'}`}
          >
            <RadioButton.Android
              color="#AD00DF"
              value="email"
              status={checked === 'email' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('email')}
            />
            <Text
              onPress={() => setChecked('email')}
              className="font-bold text-md font-ubuntu"
            >
              With Email ID
            </Text>
          </View>
        </View>
        <View>
          {checked === 'phone' ? (
            <UID navigation={navigation} />
          ) : (
            <EmailID navigation={navigation} />
          )}
        </View>
        {/* <View className="absolute bottom-20 w-full mx-auto">
          <View className="flex flex-row gap-x-2 justify-center items-center mt-12 ">
            <Text className="text-[14px] text-center font-ubuntu">
              Don’t have an account with us?
            </Text>
            <Text
              onPress={handleSignUp}
              className="text-[16px] text-center text-[#AD00DF] underline font-bold font-ubuntu"
            >
              Sign Up
            </Text>
          </View>
        </View> */}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'linear-gradient(90deg, #FCD332 0%, #AE01DF 100%)',
  },
});
