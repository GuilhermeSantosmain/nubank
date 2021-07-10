import React, { useState } from 'react';
import styles from '../../styles'
import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomeCards from '../../components/HomeCards'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'

const Home = () => {
  return (
    <View style={styles.fundo}>
      <Header />
      <ScrollView>
        <HomeCards/>

      </ScrollView>

      <Footer />
    </View>
  )
}

export default Home;