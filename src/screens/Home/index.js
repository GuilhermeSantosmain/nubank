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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Home = ({navigation}) => {
  return (
    <View style={styles.fundo}>
      <Header  />
      <ScrollView>
        <HomeCards/>

      </ScrollView>

      <Footer nav={navigation}  />
    </View>
  )
}

export default Home;