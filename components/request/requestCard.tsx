import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import CrossIcon from '../../atoms/icons/crossIcon';
import CheckIcon from '../../atoms/icons/checkIcon';

const RequestCard = () => {
  return (
    <View className='bg-gray-200 mx-5 py-4 mb-5 rounded-2xl px-5'>
      <View className='flex flex-row gap-5 items-center'>
        <Image source={require('../../assets/images/profileImage.png')} style={styles.profileImage} />
        <View>
            <Text className='font-bold text-md'>Rahul Jain</Text>
            <Text>Software Engineer</Text>
        </View>
      </View>
      <View className='flex flex-row gap-2 mt-2'>
        <Button title=" Accept" buttonStyle={styles.acceptButton} titleStyle={styles.acceptButtonText} iconPosition='left' icon={<CheckIcon color='white'/>}></Button>
        <Button title=" Decline" titleStyle={styles.rejectButtonText} iconPosition='left' icon={<CrossIcon color='#AD00DF' />}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius:20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 15,
  },
  acceptButton:{
    backgroundColor:'#EFBE10',
    borderRadius: 12
  },
  acceptButtonText:{
    fontSize: 14,
    fontWeight: 'bold'
  },
  rejectButtonText:{
    fontSize: 14,
    fontWeight: 'bold',
    color: '#AD00DF'
  }
});

export default RequestCard;
