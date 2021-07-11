import React from 'react';
import styles from '../../styles'
import {
  View,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomeCards from '../../components/HomeCards'

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