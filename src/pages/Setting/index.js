import React from 'react';
import { StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

export default function Setting(props) {
    return (
        <Container>
        <Header style={{ flexDirection: 'row', backgroundColor: '#04b6b8' }}>
            <StatusBar backgroundColor='#1295a3' barStyle='light-content' />
            <Left>
                <IconAntDesign onPress={() => props.navigation.openDrawer()} name="bars" size={30} color="#ffffff" />
            </Left>
            <Body>
                <Title> Neki IT </Title>
            </Body>
            <Right>
            <Title> Configurações </Title>
            </Right>
        </Header>

        <View style={styles.container}>
            <Text style={styles.text}>Bem Vindo a Tela de Configurações!</Text>
        </View>
        </Container>

        
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