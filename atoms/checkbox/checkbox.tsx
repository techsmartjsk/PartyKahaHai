import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface CheckboxProps {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <View className="flex-row gap-x-2">
      <TouchableOpacity
        className="w-5 h-5 border-[1px]  border-[#AD00DF] rounded-sm justify-center items-center"
        onPress={() => setChecked(!checked)}
      >
        {checked && (
          <View className="w-5 h-5 border-gray-400 rounded-sm bg-[#AD00DF] justify-center items-center">
            <Text style={{ color: 'white', fontSize: 14 }}>✓</Text>
          </View>
        )}
      </TouchableOpacity>
      <Text className="font-ubuntu text-[16px]">{label}</Text>
    </View>
  );
};

export default Checkbox;
