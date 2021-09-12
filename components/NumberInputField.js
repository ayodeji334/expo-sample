import React from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default function NumberInputField({ fieldName, handleBlur, labelName, handleChange, type, placeholder, currentValue }) {
    return (
        <View style={{paddingVertical: 10, marginVertical: 10}}>
            <Text style={styles.label}>{labelName}</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleChange(fieldName)}
                onBlur={handleBlur(fieldName)}
                value={currentValue}
                blurOnSubmit={true}
                textContentType={type}
                keyboardType="default"
                placeholder = {placeholder}
                placeholderTextColor = "#8c8e8f"
                autoCapitalize = "none"
                secureTextEntry={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 14,
        borderColor: "#cbcaca",
        borderWidth: 2,
        paddingVertical: 14,
        paddingHorizontal: 18,
        marginTop: 1,
        marginBottom: 10,
        fontFamily: "Poppins",
        fontSize: 13
    },
    label: {
        fontSize: 13,
        fontFamily: "PoppinsBold"
    },
})
