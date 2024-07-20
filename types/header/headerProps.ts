import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

export type HeaderProps = {
    navigation: NativeStackScreenProps<HomeStackParamList, 'Explore'>['navigation'];
};