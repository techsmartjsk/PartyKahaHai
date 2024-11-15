import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import LinearGradient from 'expo-linear-gradient';

const RangeSlider = ({
    min, max, step, values
}) => {
  const [range, setRange] = useState([20, 80]);
  const [sliderWidth, setSliderWidth] = useState(Dimensions.get('window').width - 40);

  const handleValuesChange = (values) => {
    setRange(values);
  };

  return (
    <MultiSlider
        values={values}
        max={max}
        step={step}
        enableLabel={true}
        onValuesChange={handleValuesChange}
        sliderLength={sliderWidth}
        markerStyle={{ backgroundColor: '' }}
        customMarker={() => <View style={styles.customMarker} />}
        selectedStyle={{ backgroundColor: '#EFBE10', height: 5 }}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  sliderContainer: {
    width: 280,
    alignItems: 'center',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    height: 8,
    borderRadius: 4,
  },
  customMarker: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#AD00DF',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
});

export default RangeSlider;
