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
const PixLineButton = () => {
    return (
        <View>
            <TouchableOpacity style={[styles.pixLineButtons, {borderTopColor: "#ccc", borderTopWidth: 1}]}>
                <View style={styles.row}>
                    <Icon color="#868686" size={25} name="diamond-stone" />
                    <Text style={styles.pixLineButtonsText}>Minhas chaves</Text>
                </View>
                <Icon color="#868686" size={25} name="chevron-right" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.pixLineButtons}>
                <View style={styles.row}>
                    <Icon color="#868686" size={25} name="tune" />
                    <Text style={styles.pixLineButtonsText}>Meu limite Pix</Text>
                </View>                
                <Icon color="#868686" size={25} name="chevron-right" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.pixLineButtons}>
                <View style={styles.row}>
                    <Icon color="#868686" size={25} name="help-circle-outline" />
                    <Text style={styles.pixLineButtonsText}>Me ajuda</Text>
                </View>
                <Icon color="#868686" size={25} name="chevron-right" />
            </TouchableOpacity>
        </View>
    )
}
export default PixLineButton