import React from "react";
import {
    View,
    StyleSheet,
    Text,
}
from 'react-native';

import { Button } from '../components/Button';

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Confirmation(){
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>

                </Text>

                <Text style={styles.title}>
                    

                </Text>

                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas
                    plantinhas com muito cuidado.
                </Text>
            </View>

            <View style={styles.footer}>
                <Button />
            </View>
        </View>
    )
}

// PAREI A AULA EM 1:11:23

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between"
    },
    content: {


    },
    emoji: {
        fontSize: 32,
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15
    },
    subtitle: {
        fontFamily: fonts.text,
        textAlign: "center",
        fontSize: 17,
        paddingVertical: 20,
        color: colors.heading,
    },
    footer: {
        width: '100%',
        paddingHorizontal: 75
    }
})