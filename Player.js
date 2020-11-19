import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Image, ToastAndroid, ImageBackground} from 'react-native';

import PlayerScreen from 'react-native-sound-playerview'

function Index(props) {  


  const { navigation } = props

//   const Player = React.cloneElement( PlayerScreen )

  const Repro = ()=>{
      return <PlayerScreen filepath = {props.route.params.audio} ></PlayerScreen>
  }


  return (
     <View style={{
         flex: 1,
         width : "100%",
         backgroundColor : "red"
     }}>
          <Text> laksjklasjl</Text>
          <Repro />
         
     </View>
  );

}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#fff",
    borderColor: "#5C101A",
    borderWidth: 1,
    borderRadius:15,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"#777"
  },
  forgot:{
    color:"#777",
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#5C101A",
    borderRadius:15,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
    marginBottom:40
  },
  loginText:{
    color:"white"
  },

  register:{
    fontSize:15,
    marginTop: -0,
    color:"#5C101A"
  },

  icon: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    marginBottom:40
  }


});