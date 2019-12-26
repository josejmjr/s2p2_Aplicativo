import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome Tela About!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginLeft: 20,
    },
});