import React from 'react';
import { View, Text } from 'react-native';

import Lottie from 'lottie-react-native';


export default function Success() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: 700 }}>
            <Lottie
                source={require('../../assets/win.json')}
                autoPlay
                loop
            />
        </View>
    )
};