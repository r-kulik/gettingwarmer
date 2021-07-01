import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, TextInput} from 'react-native';
import * as Font from 'expo-font'
import {AppLoading} from 'expo';





class ServerInteract
{
  printWarning()
  {
    console.log("БЛЯТЬ")
  }
}

export default class App extends React.Component {

  state = {fontsLoaded : false}
  async componentDidMount()
  {
    await Font.loadAsync({'lato-bi': require('./assets/fonts/Lato-BoldItalic.ttf'),
                          'lato-b': require('./assets/fonts/Lato-Black.ttf')})
  }
  render()
  {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Getting{'\n'}         Warmer</Text>

        <TextInput style = {styles.input}></TextInput>
        <TextInput style = {styles.input}></TextInput>

        <TouchableOpacity style={styles.regbutton}>
          <Text style={styles.buttontext}>Sign in</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30B5FD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header:{
    fontFamily: "lato-b",
    fontSize: 35,
    color: "#fff",
    marginBottom:50
  },

  regbutton:
  {
    backgroundColor:'#fff',
    // underlayColor:"000",
    marginTop:100,
    width:250,
    height:100,
    color: "#30B5FD",
    borderRadius:40,
    alignItems: 'center',
    justifyContent: 'center'  
  },

  buttontext:
  {
    color:"#30B5FD",
    fontFamily:"lato-b"
  
  },
  input:
  {
    width:250, height:50,
    backgroundColor:"#fff",
    marginBottom:10,
    borderRadius:40,
    alignItems:'center',
    justifyContent:'center',
    fontFamily:"lato-b",
    fontSize:20,
    color: "#00030F",
    paddingLeft:10
  }
});
