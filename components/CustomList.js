import React from 'react'
import { StyleSheet, Text, ScrollView, TouchableOpacity, View } from 'react-native'

export default function CustomList({ symptoms, onSelectSymptom}) {
    return (
        <ScrollView style={{paddingVertical: 20}}>
            {
                symptoms.map(symptom => (
                    <TouchableOpacity 
                        key={symptom.id} 
                        activeOpacity={0.8} 
                        style={style.button} 
                        onPress={() => onSelectSymptom(symptom)}>
                        <Text style={style.text}>{symptom.name}</Text>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonTitle: {
        textTransform: "uppercase",
        color: "white",
        fontFamily: "Poppins",
        fontSize: 20,
        fontWeight: "bold",
        color: "#dc143c"
    },
    button: {
        paddingVertical: 17,
        paddingHorizontal: 15,
        width: "100%",
        marginVertical: 10,
        borderRadius: 10,
        borderColor: "#6d6d6d",
        borderWidth: 1,
    },
    text: {
        marginLeft: 5,
        color: "#000000",
        fontFamily: "Poppins",
        fontSize: 17,
        fontWeight: "900"
    }
})
