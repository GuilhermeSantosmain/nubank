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

    return(
        <View style={styles.row}>
                <View>
                    <View>
                        <Icon style={styles.pixBubbleIcon} color="#868686" size={25} name="cash-multiple" />
                        <Text>Pagar</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Icon style={styles.pixBubbleIcon} color="#868686" size={25} name="arrow-up-thick" />
                        <Text>Transferir</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Icon style={styles.pixBubbleIcon} color="#868686" size={25} name="currency-usd" />
                        <Text>Cobrar</Text>
                    </View>
                </View>
            </View>
    )
}

export default PixBubbleButton;