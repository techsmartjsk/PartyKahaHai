import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Icon from '../../../../atoms/icons/icon';
import ArrowLeftIcon from '../../../../assets/icons/arrow-left.svg';
import EditIcon from '../../../../assets/icons/edit-icon.svg';
import GpsIcon from '../../../../assets/icons/gps.svg';
import { Button } from 'react-native-elements';
import AddIcon from '../../../../assets/icons/add.svg';

export default function Address({ navigation }) {
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
          <Text className="ml-5 text-[18px] font-ubuntuBold">Addresses</Text>
        </View>
        <View className="flex flex-col gap-y-5 mt-5">
          <View className="mx-5 px-5 rounded-md py-5 bg-white">
            <View className="bg-white w-full rounded-md flex flex-row items-center justify-between">
              <View className="flex flex-row items-center w-full">
                <View className="flex flex-row gap-x-2">
                  <GpsIcon color="#828282" />
                  <Text className="text-[#828282] font-ubuntu text-[18px]">
                    Address 1
                  </Text>
                </View>
                <View className="ml-auto">
                  <EditIcon color="#AD00DF" />
                </View>
              </View>
            </View>
            <Text className="text-[#828282] mt-5 w-[60%]">
              517D, Gali Number 6A, Govindpuri, New Delhi, Delhi - 110019
            </Text>
          </View>
          <View className="mx-5 px-5 rounded-md py-5 bg-white">
            <View className="bg-white w-full rounded-md flex flex-row items-center justify-between">
              <View className="flex flex-row items-center w-full">
                <View className="flex flex-row gap-x-2">
                  <GpsIcon color="#828282" />
                  <Text className="text-[#828282] font-ubuntu text-[18px]">
                    Address 1
                  </Text>
                </View>
                <View className="ml-auto">
                  <EditIcon color="#AD00DF" />
                </View>
              </View>
            </View>
            <Text className="text-[#828282] mt-5 w-[60%]">
              Magellen Building, Room No 802, Rajpura Subdistrict, Patiala
              District, Punjab - 144700
            </Text>
          </View>
          <Button
            title="Add New Address"
            buttonStyle={{
              backgroundColor: 'white',
              width: '90%',
              borderColor: '#AD00DF',
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              paddingVertical: 10,
              margin: 'auto',
            }}
            titleStyle={{
              color: '#AD00DF',
              fontSize: 18,
              fontFamily: 'Ubuntu_700Bold',
            }}
            icon={<AddIcon color="#AD00DF" />}
          ></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
