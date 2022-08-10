import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import Lottie from 'lottie-react-native';

import styles from './styles'

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column' }}>
            <View style={{ width: '100%', height: 400 }}>
                <Lottie
                    source={require('../../assets/wave.json')}
                    autoPlay
                    loop
                />
            </View>

            <TouchableOpacity testID="buttonPlay" style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.text}>Play</Text>
            </TouchableOpacity>
        </View>
    )
}