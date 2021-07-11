import React from 'react';
import styles from '../../styles'
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Footer = (props) => {
  
  return (


    <View style={styles.footer}>
      <ScrollView horizontal={true}>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.footerButtons, { marginLeft: 16 }]} onPress={() => props.nav.navigate('Pix')} >
            <Icon style={[styles.footerButtonsContent, styles.footerButtonIcon]} color="#fff" name="diamond-stone" size={20} />
            <Text style={styles.footerButtonsContent}>Pix</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButtons}>
            <Icon style={[styles.footerButtonsContent, styles.footerButtonIcon]} color="#fff" name="barcode" size={20} />
            <Text style={styles.footerButtonsContent}>Pagar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButtons}>
            <Icon style={[styles.footerButtonsContent, styles.footerButtonIcon]} color="#fff" name="account-plus-outline" size={20} />
            <Text style={styles.footerButtonsContent}>Indicar Amigos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButtons}>
            <Icon style={[styles.footerButtonsContent, styles.footerButtonIcon]} color="#fff" name="cash-multiple" size={20} />
            <Text style={styles.footerButtonsContent}>Transferir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButtons}>
            <Icon style={[styles.footerButtonsContent, styles.footerButtonIcon]} color="#fff" name="cash-multiple" size={20} />
            <Text style={styles.footerButtonsContent}>Depositar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButtons}>
            <Icon style={[styles.footerButtonsContent, styles.footerButtonIcon]} color="#fff" name="hand-heart" size={20} />
            <Text style={styles.footerButtonsContent}>Empréstimo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButtons}>
            <Icon style={[styles.footerButtonsContent, styles.footerButtonIcon]} color="#fff" name="credit-card-settings-outline" size={20} />
            <Text style={styles.footerButtonsContent}>Cartão virtual</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButtons}>
            <Icon style={[styles.footerButtonsContent, styles.footerButtonIcon]} color="#fff" name="cellphone" size={20} />
            <Text style={styles.footerButtonsContent}>Recarga de celular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButtons}>
            <Icon style={[styles.footerButtonsContent, styles.footerButtonIcon]} color="#fff" name="tune" size={20} />
            <Text style={styles.footerButtonsContent}>Ajustar limite</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButtons}>
            <Icon style={[styles.footerButtonsContent, styles.footerButtonIcon]} color="#fff" name="lock-outline" size={20} />
            <Text style={styles.footerButtonsContent}>Bloquear cartão</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButtons}>
            <Icon style={[styles.footerButtonsContent, styles.footerButtonIcon]} color="#fff" name="cash-100" size={20} />
            <Text style={styles.footerButtonsContent}>Cobrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButtons}>
            <Icon style={[styles.footerButtonsContent, styles.footerButtonIcon]} color="#fff" name="hand-heart" size={20} />
            <Text style={styles.footerButtonsContent}>Doação</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.footerButtons, {marginRight: 18}]}>
            <Icon style={[styles.footerButtonsContent, styles.footerButtonIcon]} color="#fff" name="help-circle-outline" size={20} />
            <Text style={styles.footerButtonsContent}>Me ajuda</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  )
}

export default Footer;