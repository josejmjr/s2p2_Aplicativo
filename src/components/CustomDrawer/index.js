import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';

function CustomDrawer({ ...props }) {
    return (
        
        <View>
            <ScrollView>
            <ImageBackground
                source={require('../../assets/neki.jpg')}
                style={styles.container}>
                <View style={styles.overlay}>
                    <Image source={require('../../assets/retrato.png')}
                        style={styles.avatarStyle} />
                    <Text style={styles.textStyle} > José Junior </Text>
                    <Text style={styles.textStyle} > Desenvolvedor Júnior </Text>
                    <Text style={styles.textStyle}>00:00:00</Text>
                </View>
            </ImageBackground>
            <DrawerNavigatorItems {...props} />
            </ScrollView>
        </View>
        
    );
}

export default CustomDrawer;

const styles = StyleSheet.create({
    container: {

    },
    userArea: {
        marginLeft: 20,
        marginTop: 50,
        marginBottom: 20,
    },
    user: {
        width: 95,
        height: 95,
    },
    name: {
        marginTop: 5,
        marginLeft: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
    level: {
        fontSize: 15,
        marginLeft: 20,
        marginBottom: 20,
    },
    clock: {
        fontSize: 15,
        marginLeft: 20,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    overlay: {
        backgroundColor: 'rgba(30,77,82,0.9)',
        paddingTop: 30,
        paddingBottom: 10,
    },
    avatarStyle: {
        width: 100,
        height: 100,
        marginTop: 10,
        borderRadius: 50,
        alignSelf: 'center',
    },
    textStyle: {
        marginTop: 10,
        fontSize: 18,
        color: "#FFFFFF",
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    balanceContainer: {
        padding: 10,
    }
});