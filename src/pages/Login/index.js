import React, { Component } from 'react'
import { Alert, Text, StyleSheet, StatusBar, Left, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'


export default class App extends Component {

  render() {
    //console.log({navigation: this.props.navigation})
    return (

     <ScrollView contentContainerStyle={styles.contentContainer}>
      <LinearGradient colors={['#04b6b8', '#1b536a']} style={styles.mainContainer}>
      <StatusBar backgroundColor='#1295a3' barStyle='light-content' />
      
        <View style={styles.mainContainer}>
          
          <Image
            source={require('./../../assets/Logo-Neki.png')}
            style={styles.logo}
          />


          {/* <EvilIcons name="user" size={30} color="#ffffff" style={styles.icone}  /> */}
          <TextInput
            style={styles.input}
            placeholder="Digite seu usuário"
            placeholderTextColor="#04b6b8"
          />

        {/* <Fontisto name="key" size={20} color="#ffffff" style={styles.icone}  /> */}
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Digite sua senha"
            placeholderTextColor="#04b6b8"
          />

          <TouchableOpacity
            style={styles.botao}
            onPress={() => { this.props.navigation.navigate('Home') }}
          >
            <Text style={styles.botaoText}>Login</Text>
          </TouchableOpacity>
         
        </View>
        
      </LinearGradient>
     </ScrollView>
    
    )
  }
}

const styles = StyleSheet.create({

  contentContainer:{
    flex: 1,
  },

  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  logo: {
    width: 170,
    height: 175,
    marginBottom: 50,
    //marginTop: 40,
    opacity: .6
  },

  icone:{
    width: 350,
    height: 30,
  },

  input: {
    marginTop: 5,
    width: 300,
    backgroundColor: 'transparent',
    borderBottomColor: '#ffffff',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderWidth: 1,
    fontSize: 14,
    fontWeight: '300',
    padding: 10,
    color: '#fff',
    marginBottom: 10,
  },
  botao: {
    width: 250,
    height: 42,
    borderColor: '#00ff8c',
    borderWidth: 1,
    padding: 20,
    marginTop: 40,
    marginBottom: 20,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  }
})