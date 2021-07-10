import React, { useState } from 'react';

import {
  TouchableOpacity,
  Image,
  Text,
  View,
  ScrollView,
  Button
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import Pix from './screens/Pix'

const App = () => {

  

  return (
    /*
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={}>

        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    */

<Pix/>


  )
}




export default App;
