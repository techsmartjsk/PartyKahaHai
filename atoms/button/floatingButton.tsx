import { Button } from 'react-native-elements';
import Icon from '../icons/icon';
import { View } from 'react-native';

export default function FloatingButton({
  IconElement,
  title,
  bgColor,
  iconColor,
  titleColor,
  navigation,
}) {
  return (
    <View className="absolute bottom-[2%] right-[3%]">
      <Button
        title={title}
        onPress={() => {
          navigation.navigate('People');
        }}
        buttonStyle={{
          backgroundColor: '#EFBE10',
          width: 80,
          height: 80,
          alignSelf: 'center',
          paddingVertical: 14,
          borderRadius: 40,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          columnGap: 4,
        }}
        titleStyle={{ color: 'black', fontSize: 14, fontFamily: 'Ubuntu_500Medium' }}
        icon={
          <Icon>
            <IconElement color="white" width={30} height={30} />
          </Icon>
        }
      ></Button>
    </View>
  );
}
