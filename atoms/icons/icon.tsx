import React from 'react';
import { View } from 'react-native';

interface IconProps {
    children: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({ children }) => {
    return (
        <View>
            {children}
        </View>
    );
};

export default Icon;
