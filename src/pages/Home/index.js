import React from 'react';
import { StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

export default function Home(props) {
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
                    <IconAntDesign name="search1" size={30} color="#ffffff" />
                    <IconFontAwesome style={styles.icon} name="bell-o" size={30} color="#ffffff" />
                </Right>
            </Header>
            <Tabs>
                <Tab heading={<TabHeading style={styles.tabHeading} ><Text style={styles.listT}>Para Fazer</Text></TabHeading>}>
                    <View>
                        <ScrollView>
                            <Card style={styles.card}>
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>NativeBase</Text>
                                            <Text note>GeekyAnts</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Text style={styles.description} note>Tarefa para a construção de um app em React Native usando Native Base!</Text>
                                </CardItem>
                                <CardItem style={styles.info}>
                                    <Left>
                                        <Button transparent>
                                            <Icon active name="thumbs-up" />
                                            <Text>6 Horas</Text>
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Button transparent>
                                            <Icon active name="chatbubbles" />
                                            <Text>4 Horas</Text>
                                        </Button>
                                    </Body>
                                    <Right>
                                        <Thumbnail style={styles.user} source={require('../../assets/user.png')} />
                                    </Right>
                                </CardItem>
                            </Card>
                            <Card style={styles.card}>
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>NativeBase</Text>
                                            <Text note>GeekyAnts</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Text style={styles.description} note>Tarefa para a construção de um app em React Native usando Native Base!</Text>
                                </CardItem>
                                <CardItem style={styles.info}>
                                    <Left>
                                        <Button transparent>
                                            <Icon active name="thumbs-up" />
                                            <Text>6 Horas</Text>
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Button transparent>
                                            <Icon active name="chatbubbles" />
                                            <Text>4 Horas</Text>
                                        </Button>
                                    </Body>
                                    <Right>
                                        <Thumbnail style={styles.user} source={require('../../assets/user.png')} />
                                    </Right>
                                </CardItem>
                            </Card>
                            <Card style={styles.card}>
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>NativeBase</Text>
                                            <Text note>GeekyAnts</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Text style={styles.description} note>Tarefa para a construção de um app em React Native usando Native Base!</Text>
                                </CardItem>
                                <CardItem style={styles.info}>
                                    <Left>
                                        <Button transparent>
                                            <Icon active name="thumbs-up" />
                                            <Text>6 Horas</Text>
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Button transparent>
                                            <Icon active name="chatbubbles" />
                                            <Text>4 Horas</Text>
                                        </Button>
                                    </Body>
                                    <Right>
                                        <Thumbnail style={styles.user} source={require('../../assets/user.png')} />
                                    </Right>
                                </CardItem>
                            </Card>
                            <Card style={styles.card}>
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>NativeBase</Text>
                                            <Text note>GeekyAnts</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Text style={styles.description} note>Tarefa para a construção de um app em React Native usando Native Base!</Text>
                                </CardItem>
                                <CardItem style={styles.info}>
                                    <Left>
                                        <Button transparent>
                                            <Icon active name="thumbs-up" />
                                            <Text>6 Horas</Text>
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Button transparent>
                                            <Icon active name="chatbubbles" />
                                            <Text>4 Horas</Text>
                                        </Button>
                                    </Body>
                                    <Right>
                                        <Thumbnail style={styles.user} source={require('../../assets/user.png')} />
                                    </Right>
                                </CardItem>
                            </Card>
                        </ScrollView>
                        <Fab
                            direction="up"
                            position="bottomRight"
                            style={{ backgroundColor: '#25b7c4' }}
                        >
                            <Icon type="FontAwesome" name="plus" />
                        </Fab>
                    </View>
                </Tab>
                <Tab heading={<TabHeading style={styles.tabHeading} ><Text style={styles.listT}>Fazendo</Text></TabHeading>}>
                    <View>
                        <ScrollView>
                            <Card style={styles.doing}>
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>NativeBase</Text>
                                            <Text note>GeekyAnts</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Text style={styles.description} note>Tarefa para a construção de um app em React Native usando Native Base!</Text>
                                </CardItem>
                                <CardItem style={styles.info}>
                                    <Left>
                                        <Button transparent>
                                            <Icon active name="thumbs-up" />
                                            <Text>6 Horas</Text>
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Button transparent>
                                            <Icon active name="chatbubbles" />
                                            <Text>4 Horas</Text>
                                        </Button>
                                    </Body>
                                    <Right>
                                        <Thumbnail style={styles.user} source={require('../../assets/user.png')} />
                                    </Right>
                                </CardItem>
                            </Card>
                        </ScrollView>
                    </View>
                </Tab>
                <Tab heading={<TabHeading style={styles.tabHeading} ><Text style={styles.listT}>Prontas</Text></TabHeading>}>
                    <View>
                        <ScrollView>
                            <Card style={styles.deploy}>
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>NativeBase</Text>
                                            <Text note>GeekyAnts</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Text style={styles.description} note>Tarefa para a construção de um app em React Native usando Native Base!</Text>
                                </CardItem>
                                <CardItem style={styles.info}>
                                    <Left>
                                        <Button transparent>
                                            <Icon active name="thumbs-up" />
                                            <Text>6 Horas</Text>
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Button transparent>
                                            <Icon active name="chatbubbles" />
                                            <Text>4 Horas</Text>
                                        </Button>
                                    </Body>
                                    <Right>
                                        <Thumbnail style={styles.user} source={require('../../assets/user.png')} />
                                    </Right>
                                </CardItem>
                            </Card>
                            <Card style={styles.deploy}>
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>NativeBase</Text>
                                            <Text note>GeekyAnts</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Text style={styles.description} note>Tarefa para a construção de um app em React Native usando Native Base!</Text>
                                </CardItem>
                                <CardItem style={styles.info}>
                                    <Left>
                                        <Button transparent>
                                            <Icon active name="thumbs-up" />
                                            <Text>6 Horas</Text>
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Button transparent>
                                            <Icon active name="chatbubbles" />
                                            <Text>4 Horas</Text>
                                        </Button>
                                    </Body>
                                    <Right>
                                        <Thumbnail style={styles.user} source={require('../../assets/user.png')} />
                                    </Right>
                                </CardItem>
                            </Card>
                        </ScrollView>
                    </View>
                </Tab>
            </Tabs>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    card: {
        borderLeftWidth: 6,
        borderColor: '#0f5ad9',
    },
    doing: {
        borderLeftWidth: 6,
        borderColor: '#d9b70f',
    },
    deploy: {
        borderLeftWidth: 6,
        borderColor: '#28d90d',
    },
    tabHeading: {
        backgroundColor: '#3e979c',
        fontWeight: 'bold',
        color: '#ffffff'
    },
    listT: {
        fontWeight: 'bold',
    },
    user: {
        width: 25,
        height: 25,
    },
    icon: {
        marginLeft: 20,
    },
    info: {
        padding: 5,
    },
    description: {
        marginLeft: 25,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    },
}); 