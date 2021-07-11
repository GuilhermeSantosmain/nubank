import React, { useState } from 'react';
import styles from '../../styles'
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const HomeCards = (props) => {

    
    return (
        <View>
            <View style={[{ marginTop: 105 }, styles.card]}>
                <View style={styles.cardContent}>
                    <View style={styles.cardHeader}>

                        <View style={styles.row}>
                            <View style={[styles.cardIcon,
                            { transform: [{ rotate: "270deg" }] }
                            ]}>
                                <Icon color="#868686" size={28} name="credit-card-outline" />
                            </View>
                            <View style={styles.cardTitle}>
                                <Text style={{ color: "#868686" }}>Cartão de Crédito</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.cardDescription}>
                        Fatura atual
                    </Text>
                    {
                        props.handler ? (
                            <Text style={styles.cardTextBoldBlue}>
                                R$ 145,78
                            </Text>
                        ) : null
                    }
                    <View style={styles.row}>
                        <Text>
                            Limite disponível
                        </Text>
                        {
                            props.handler ? (

                                <Text style={styles.cardTextBoldGreen}>
                                    R$ 800,00
                                </Text>
                            ) : null
                        }
                    </View>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <View style={styles.cardHeader}>
                        <View style={styles.row}>

                            <View>
                                <Icon color="#868686" size={28} name="currency-usd" />
                            </View>
                            <View style={styles.cardTitle}>
                                <Text style={{ color: "#868686" }}>Conta</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.cardDescription}>
                        Saldo disponível
                    </Text>
                    {
                        props.handler ? (
                            <Text style={[styles.cardTextStrong, { fontSize: 25 }]}>
                                R$ 185.420,93
                            </Text>

                        ) : null
                    }
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <View style={styles.cardHeader}>
                        <View style={styles.row}>

                            <View>
                                <Icon color="#868686" size={28} name="hand-heart" />
                            </View>
                            <View style={styles.cardTitle}>
                                <Text style={{ color: "#868686" }}>Empréstimo</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{ marginTop: 17, marginBottom: 3, fontFamily: "Roboto-Regular", fontSize: 15 }}>Valor disponivel de até</Text>
                    {
                        props.handler ? (
                            <Text style={styles.cardTextStrong}>R$ 12.500.00</Text>
                        ) : null
                    }
                    
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <View style={styles.cardHeader}>
                        <View style={styles.row}>

                            <View>
                                <Icon color="#830ad1" size={28} name="umbrella-outline" />
                            </View>
                            <View style={styles.cardTitle}>
                                <Text style={{ color: "#830ad1", fontSize: 22 }}>Seguro de Vida</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.cardTextRegular}>Conheça a Nubank Vida: um seguro simples e que cabe no bolso.</Text>
                    <TouchableOpacity  style={styles.cardButton}  ><Text style={styles.cardButtonText}> CONHECER</Text></TouchableOpacity>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <View style={styles.cardHeader}>
                        <View style={styles.row}>

                            <View>
                                <Icon color="#868686" size={28} name="whatsapp" />
                            </View>
                            <View style={styles.cardTitle}>
                                <Text style={{ color: "#868686" }}>Pagamentos no WhatsApp</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={[styles.cardTextStrong, { marginBottom: 15 }]}>Envie e receba dinheiro sem sair da conversa</Text>
                    <Text style={styles.cardTextRegular}>Os pagamentos no WhatsApp são seguros, rápidos e sem tarifas. Tão fácil quanto mandar uma foto de "bom dia" no grupo da família.</Text>
                    <TouchableOpacity style={styles.cardButton} ><Text style={styles.cardButtonText} >Quero conhecer</Text></TouchableOpacity>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <View style={styles.cardHeader}>
                        <View style={styles.row}>

                            <View>
                                <Icon color="#868686" size={28} name="credit-card-wireless-outline" />
                            </View>
                            <View style={styles.cardTitle}>
                                <Text style={{ color: "#868686" }}>Google Pay</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.cardTextRegular}>Use o Google Pay com seus cartões Nubank</Text>
                    <TouchableOpacity style={styles.cardButton} ><Text style={styles.cardButtonText} > REGISTRAR MEU CARTÃO</Text></TouchableOpacity>
                </View>
            </View>

            <View style={[styles.card, { marginBottom: 135 }]}>
                <View style={styles.cardContent}>
                    <View style={styles.cardHeader}>
                        <View style={styles.row}>

                            <View>
                                <Icon color="#868686" size={28} name="home-city-outline" />
                            </View>
                            <View style={styles.cardTitle}>
                                <Text style={{ color: "#830ad1", fontSize: 22 }}>Conta PJ</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.cardTextRegular}>A gente te ajuda a gerenciar suas finanças de um jeito fácil para fazer seu negócio acontecer.</Text>
                    <TouchableOpacity style={styles.cardButton} ><Text style={styles.cardButtonText} > PEDIR CONTA PJ</Text></TouchableOpacity>
                </View>
            </View>
        </View>

    )
}
export default HomeCards;