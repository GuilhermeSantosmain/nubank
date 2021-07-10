import styles from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React, { useState } from 'react';
import {
    TouchableOpacity,
    Image,
    Text,
    View,
    ScrollView,
    Button
} from 'react-native';

const PixHeader = () => {

    return (
        <View style={styles.pixHeaderMargin}>
            <Icon color="#868686" size={25} name="close" />
            <Image  style={styles.pixHeaderImage} source={require('../../assets/img/pix-img.jpg')} />
            <Text style={styles.pixHeaderTitle}>Minha área Pix</Text>
            <Text style={styles.pixHeaderDescription}>Tudo o que você precisa para pagar, transferir ou cobrar.</Text>
        </View>
    )
}

export default PixHeader;