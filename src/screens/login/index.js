import React, { useState } from 'react'
import { View, KeyboardAvoidingView, Text, TouchableOpacity, TextInput } from 'react-native';
import Lottie from 'lottie-react-native';

import styles from './styles'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={{ width: '100%', height: 400 }}>
                <Lottie
                    source={require('../../assets/jump.json')}
                    autoPlay
                    loop
                />
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Digite os seus dados</Text>
                <TextInput
                    style={styles.input}
                    testID="email"
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    testID="password"
                    secureTextEntry={true}
                    placeholder="Senha"
                    value={password}
                    onChangeText={text => setPassword(text)}

                />

                <TouchableOpacity testID="buttonLogin" style={styles.button} onPress={() => navigation.navigate('Success')}>
                    <Text style={styles.text}>Entrar</Text>
                </TouchableOpacity>
            </View>


        </KeyboardAvoidingView>
    )
};