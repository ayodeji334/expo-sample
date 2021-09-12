import React from 'react'
import { StyleSheet, Text, ScrollView, TouchableOpacity, View } from 'react-native'

export default function TransactionList({ transactions, onSelectTransaction}) {
    return (
        <ScrollView style={{paddingVertical: 20}}>
            {
                transactions.map(transaction => (
                    <TouchableOpacity 
                        key={transaction.id} 
                        activeOpacity={0.4} 
                        style={style.button} 
                        onPress={() => onSelectTransaction(transaction)}
                    >
                        <View>
                            <Text style={style.text}>Sent from {transaction.sender}</Text>
                            <Text style={style.time}>{transaction.created_at}</Text>
                        </View>
                        <Text style={style.text}>{transaction.amount}</Text>
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
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    text: {
        marginLeft: 5,
        color: "#000000",
        fontFamily: "PoppinsBold",
        fontSize: 18,
        fontWeight: "900"
    },
    time: {
        marginLeft: 5,
        color: "#000",
        fontFamily: "Poppins",
        fontSize: 15,
        fontWeight: "900",
        opacity: .5
    }
})
