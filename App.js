import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import PlayerScreen from 'react-native-sound-playerview'
import Home from './Home'
import Player2 from './Player'
const Drawer = createDrawerNavigator();


function App(){
  return (
    <NavigationContainer>
     
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component = { Home } />
        <Drawer.Screen name="player" component = { PlayerScreen } />
        <Drawer.Screen name="Player2" component = { Player2 } />
      </Drawer.Navigator>
      
    </NavigationContainer>
  )
}


console.disableYellowBox = true
export default App;

