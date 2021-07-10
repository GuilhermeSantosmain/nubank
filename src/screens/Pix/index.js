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
const Pix = () => {

    return (
        <ScrollView style={styles.pix}>

            <PixHeader />
            <PixBubbleButton />
            <PixLineButton />
            
        </ScrollView>

    )
}

export default Pix;