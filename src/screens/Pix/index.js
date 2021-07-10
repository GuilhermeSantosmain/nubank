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
const Pix = () => {

    return (
        <View>

            <PixHeader />
            <PixBubbleButton />


            <View>
                <View>
                    <Icon color="#868686" size={25} name="diamond-stone" />
                    <Text>Minhas chaves</Text>
                </View>
                <View>
                    <Icon color="#868686" size={25} name="tune" />
                    <Text>Meu limite Pix</Text>
                </View>
                <View>
                    <Icon color="#868686" size={25} name="help-circle-outline" />
                    <Text>Me ajuda</Text>
                </View>
            </View>
        </View>

    )
}

export default Pix;