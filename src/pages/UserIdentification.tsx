import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function UserIdentification(){
    return(
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.emoji}>
                    😁
                </Text>
                <Text style={styles.title}>
                    Como podemos {'\n'}
                    chamar você?
                </Text>
                <TextInput style={styles.input}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    emoji: {
        fontSize: 44
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 28,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20,
    }
})