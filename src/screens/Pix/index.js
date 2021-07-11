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
import styles from '../../styles';
import PixHeader from '../../components/PixHeader';
import PixBubbleButton from '../../components/PixBubbleButton';
import PixLineButton from '../../components/PixLineButton';
const Pix = ({navigation}) => {

    return (
        <ScrollView style={styles.pix}>

            <PixHeader nav={navigation} />
            <PixBubbleButton />
            <PixLineButton />
            
        </ScrollView>

    )
}

export default Pix;