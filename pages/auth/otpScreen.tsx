
import { View, Text, StyleSheet, Image } from 'react-native';
import LoginBanner from '../../assets/images/login-banner.png';
import { LinearGradient } from 'expo-linear-gradient';
import OTP from '../../components/auth/otp';

export default function OtpScreen({ navigation, route }) {
  const { sub, pinId } = route.params
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
        <View className="flex justify-between flex-row w-full px-5 pt-10 pb-5">
          <Text className="text-[32px] font-bold text-left font-ubuntuBold">
            OTP Verification
          </Text>
        </View>
        <Text className="font-ubuntu px-5 text-[#828282] text-[14px]">
            Please enter OTP sent to your UID registered mobile number to verify
            your account and sign in.
        </Text>
        <OTP navigation={navigation} sub={sub} pinId={pinId} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'linear-gradient(90deg, #FCD332 0%, #AE01DF 100%)',
  },
});
