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
const PixBubbleButton = () => {

    return (
        <View style={styles.rowSpaceEvenly}>

            <TouchableOpacity style={styles.pixBubbleButtons}>
                <Icon style={styles.pixBubbleIcon} color="#232428" size={25} name="cash-multiple" />
                <Text style={styles.pixBubbleText}>Pagar</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.pixBubbleButtons}>
                <Icon style={styles.pixBubbleIcon} color="#232428" size={25} name="arrow-up-thick" />
                <Text style={styles.pixBubbleText}>Transferir</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.pixBubbleButtons}>
                <Icon style={styles.pixBubbleIcon} color="#232428" size={25} name="currency-usd" />
                <Text style={styles.pixBubbleText}>Cobrar</Text>
            </TouchableOpacity>

        </View>
    )
}

export default PixBubbleButton;