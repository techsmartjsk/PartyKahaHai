import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FiltersComponent from '../../../components/filter/filterComp';
import ArrowLeftIcon from '../../../assets/icons/arrow-left.svg';

export default function Filters({ navigation }) {
  return (
    <SafeAreaView className="pb-10">
      <ScrollView>
        <View className="flex-row gap-x-4 px-5 items-center bg-white">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <ArrowLeftIcon color="#000000" />
          </TouchableOpacity>

          <Text className="text-[20px] font-ubuntuBold bg-white py-5 px-4">
            Filters
          </Text>
        </View>
        <FiltersComponent navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
