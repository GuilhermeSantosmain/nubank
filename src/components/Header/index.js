import React from 'react';
import styles from '../../styles';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Header = (props) => {


    return (
        <View style={styles.header}>
            <View style={styles.rowSpaceAround}>
                <View style={styles.ola}>
                    <Text style={styles.nomeHome}>Olá, Guilherme</Text>

                </View>
                <View style={styles.headerButtons}>
                    {props.handler}

                    <TouchableOpacity style={styles.headerBubbleButton}>
                        <Icon color="#fff" size={25} name="cog-outline" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Header;