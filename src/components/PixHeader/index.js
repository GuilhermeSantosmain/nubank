import styles from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react';
import {
    TouchableOpacity,
    Image,
    Text,
    View,
} from 'react-native';

const PixHeader = (props) => {

    return (
        <View style={styles.pixHeaderMargin}>
            <TouchableOpacity onPress={() => props.nav.navigate('Home')}>
                <Icon color="#868686" size={25} name="close" />
            </TouchableOpacity>
            <Image style={styles.pixHeaderImage} source={require('../../assets/img/pix-img.jpg')} />
            <Text style={styles.pixHeaderTitle}>Minha área Pix</Text>
            <Text style={styles.pixHeaderDescription}>Tudo o que você precisa para pagar, transferir ou cobrar.</Text>
        </View>
    )
}

export default PixHeader;