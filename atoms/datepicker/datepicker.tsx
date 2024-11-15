import React, { useState } from 'react';
import {
  View,
  Button,
  Text,
  Platform,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from '../icons/icon';
import CalendarIcon from '../../assets/icons/calendar.svg';
import moment from 'moment';

const DatePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const formatDate = (date) => {
    return date ? moment(date).format('DD/MM/YYYY') : '';
  };

  return (
    <View className="pt-5">
      <TouchableOpacity onPress={showDatePicker}>
        <View className="bg-white w-full rounded-lg items-center flex flex-row px-2 border-[1px] border-[#E6DFDF] space-x-2">
          <Icon>
            <CalendarIcon width={24} height={24} color="#AD00DF" />
          </Icon>
          <TextInput
            value={formatDate(selectedDate)}
            placeholder="Date of Birth"
            textAlign="center"
            editable={false}
            className="bg-white font-ubuntuBold py-4 h-full text-[14px] items-center font-ubuntu"
          />
        </View>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DatePicker;
