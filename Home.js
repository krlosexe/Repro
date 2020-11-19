import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Image, ToastAndroid, ImageBackground} from 'react-native';


function Index(props) {  


  const { navigation } = props

  function goToScreen(screen, Sound)
  {   
    navigation.navigate(screen, {audio : Sound})
  }


  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={{marginBottom: 100}} onPress={()=>goToScreen('Player2', "https://caballeros.chseguros.com.co/img/oraciones/audio/Oraci%C3%B3n%20pidiendo%20a%20Nuestra%20Se%C3%B1ora%20la%20Virtud%20de%20la%20Pureza.mp3") }>
        <Text style={styles.register}>Auio 1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>goToScreen('Player2', "https://caballeros.chseguros.com.co/img/oraciones/audio/Letanias%20del%20Sagrado%20Coraz%C3%B3n%20de%20Jes%C3%BAs.mp3") }>
        <Text style={styles.register}>Auio 2</Text>
      </TouchableOpacity>



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