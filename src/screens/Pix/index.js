import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from '../../styles';
import PixHeader from '../../components/PixHeader';
import PixBubbleButton from '../../components/PixBubbleButton';
import PixLineButton from '../../components/PixLineButton';
const Pix = ({ navigation }) => {

    return (
        <View style={styles.pixBorderRadius}>
            <ScrollView style={styles.pix}>

                <PixHeader nav={navigation} />
                <PixBubbleButton />
                <PixLineButton />

            </ScrollView>
        </View>


    )
}

export default Pix;