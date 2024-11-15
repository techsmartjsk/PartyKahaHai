import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import Icon from '../../../../atoms/icons/icon';
import ArrowLeftIcon from '../../../../assets/icons/arrow-left.svg';
import { Button } from 'react-native-elements';
import ArrowRightIcon from '../../../../assets/icons/arrow-right.svg';
import ArrowBackIcon from '../../../../assets/icons/arrow-left.svg';
import AadharImage from '../../../../assets/images/aadhar.png';

export default function AccountVerification({ navigation }) {
  const { width, height } = Dimensions.get('window');
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex flex-row px-5 py-5 bg-white">
          <Icon>
            <ArrowLeftIcon
              onPress={() => {
                navigation.goBack();
              }}
              color="#000000"
            />
          </Icon>
          <Text className="ml-5 text-[18px] font-ubuntuBold">
            Account Verification
          </Text>
        </View>
        <View className="flex flex-col gap-y-5 mt-5 px-5 py-5">
          <View className={`w-[${width}] rounded-lg h-[400px]`}>
            <Image
              source={AadharImage}
              className="rounded-lg"
              style={{ flex: 1, width: undefined, height: undefined }}
              resizeMode="cover"
            ></Image>
          </View>
          <View>
            <Text className="font-ubuntu text-[16px] mb-5">UID</Text>
            <TextInput
              placeholder="Enter your 12 digit aadhar number"
              className="border-[1px] bg-white p-4 border-[#E6DFDF] rounded-md"
            />
          </View>
          <Button
            onPress={() => {
              navigation.goBack();
            }}
            title=" Verify Account"
            buttonStyle={{
              backgroundColor: '#EFBE10',
              width: '100%',
              borderColor: '#EFBE10',
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 10,
              margin: 'auto',
            }}
            titleStyle={{
              color: '#000000',
              fontSize: 18,
              fontFamily: 'Ubuntu_400Regular',
            }}
            icon={<ArrowRightIcon color="#000000" />}
          ></Button>
          <Button
            onPress={() => {
              navigation.goBack();
            }}
            title=" Back"
            buttonStyle={{
              backgroundColor: 'white',
              width: '100%',
              borderColor: '#AD00DF',
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 10,
              margin: 'auto',
            }}
            titleStyle={{
              color: '#AD00DF',
              fontSize: 18,
              fontFamily: 'Ubuntu_700Bold',
            }}
            icon={<ArrowBackIcon color="#AD00DF" />}
          ></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
