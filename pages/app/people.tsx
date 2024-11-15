import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Header from '../../components/header/header';
import Swiper from 'react-native-deck-swiper';
import PeopleCard from './card/peopleCard';
import photo from "../../assets/images/photo.png"
import { useState } from 'react';
import PartyIcon from '../../assets/icons/partyicon.svg';
import FloatingButton from '../../atoms/button/floatingButton';

const width = Dimensions.get('window').width;

export default function People({ navigation }) {
  const [swipedAll, setSwipedAll] = useState(false);

  const data = [
    { id: 1, image: photo, name: 'Alex', age: 25, intro: 'Adventure seeker and coffee enthusiast.' },
    { id: 2, image: photo, name: 'Bailey', age: 29, intro: 'Nature lover and aspiring photographer.' },
    { id: 3, image: photo, name: 'Cameron', age: 22, intro: 'Animal whisperer and movie buff.' },
    { id: 4, image: photo, name: 'Dana', age: 28, intro: 'Architect by day, foodie by night.' },
    { id: 5, image: photo, name: 'Elliot', age: 31, intro: 'Tech geek and lifelong learner.' },
    { id: 6, image: photo, name: 'Fiona', age: 26, intro: 'Passionate about art and theater.' },
    { id: 7, image: photo, name: 'George', age: 34, intro: 'Hiker, explorer, and coffee connoisseur.' },
    { id: 8, image: photo, name: 'Holly', age: 27, intro: 'Dog lover and weekend baker.' },
    { id: 9, image: photo, name: 'Isaac', age: 30, intro: 'Architect with a love for history.' },
    { id: 10, image: photo, name: 'Jess', age: 24, intro: 'Tech enthusiast and startup dreamer.' },
    { id: 11, image: photo, name: 'Kara', age: 32, intro: 'Foodie and fitness lover.' },
    { id: 12, image: photo, name: 'Leo', age: 28, intro: 'Outdoors fanatic and bookworm.' },
    { id: 13, image: photo, name: 'Mila', age: 23, intro: 'Avid traveler and pet lover.' },
    { id: 14, image: photo, name: 'Nate', age: 29, intro: 'Explorer of cities and cuisines.' },
    { id: 15, image: photo, name: 'Olivia', age: 26, intro: 'Dreamer, coder, and part-time gamer.' },
    { id: 16, image: photo, name: 'Parker', age: 27, intro: 'Photographer and nature enthusiast.' },
    { id: 17, image: photo, name: 'Quinn', age: 30, intro: 'Mountains or beaches? Both, please!' },
    { id: 18, image: photo, name: 'Riley', age: 25, intro: 'Animal lover and part-time artist.' },
    { id: 19, image: photo, name: 'Sam', age: 31, intro: 'Architect with a taste for adventure.' },
    { id: 20, image: photo, name: 'Taylor', age: 24, intro: 'Gadget geek and tech explorer.' },
  ];

  const handleSwipedAll = () => {
    setSwipedAll(true);
  };

  return (
    <SafeAreaView className="bg-white h-full relative">
      <Header
        navigation={navigation}
        iconColor="#AD00DF"
        titleTextColor="black"
        subtitleTextColor="black"
        notifyIconColor="black"
        className=""
      />
      <View className='mt-0'>
        <Swiper
              cards={data}
              renderCard={(card) => (
                <PeopleCard card={card}/>
              )}
              onSwiped={(cardIndex) => console.log('Card swiped! Index:', cardIndex)}
              onSwipedLeft={() => console.log('Swiped Left')}
              onSwipedAll={handleSwipedAll}
              onSwipedRight={() => console.log('Swiped Right')}
              cardIndex={0}
              stackSize={10}
              verticalSwipe={false}
              disableBottomSwipe={true}
              disableTopSwipe={true}
              backgroundColor='transparent'
              stackSeparation={30}
              stackScale={10}
            />
      </View>

      {swipedAll && (
        <View className='flex h-[90%] justify-center items-center'>
          <Text className='text-[#828282] font-ubuntuBold text-2xl'>That's all!</Text>
        </View>
      )}
    </SafeAreaView>
  );
}