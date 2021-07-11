import React, {useState} from 'react';
import styles from '../../styles'
import {TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomeCards from '../../components/HomeCards'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({navigation}) => {
  const [shouldShow, setShouldShow] = useState(true)
  return (
    <View style={styles.fundo}>
      <Header handler={<TouchableOpacity onPress={() => {setShouldShow(!shouldShow)}} style={styles.headerBubbleButton}>
                        <Icon color="#fff" size={25} name="eye-off-outline" />
                    </TouchableOpacity>} />
      <ScrollView>
        <HomeCards handler={shouldShow} />

      </ScrollView>

      <Footer nav={navigation}  />
    </View>
  )
}

export default Home;