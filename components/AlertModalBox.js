import React from 'react'
import { Modal, StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default function AlertModalBox({type, isModalVisible, message, closeModalhandler}) {
    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => {}}
        >
            <View style={styles.centeredView}>
                <View style={type === "error" ? [styles.modalView, styles.errorBg] :  [styles.modalView, styles.successBg]}>
                    <Text style={styles.text}>{message}</Text>
                    <TouchableOpacity
                        activeOpacity={0.8} 
                        style={styles.buttonClose}
                        onPress={closeModalhandler}
                    >
                        <Text style={{fontSize: 20, fontWeight: '700', fontFamily: 'Poppins', color: '#fff'}}>Dismiss</Text>
                    </TouchableOpacity> 
                </View>
            </View>    
        </Modal>
    )
}

const styles = StyleSheet.create({
    buttonClose: {
        backgroundColor: "rgba(238, 238, 238, 0.459)",
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 30,
        fontWeight: "900",
        elevation: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 7,
        width: "100%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
    },
    text: {
        fontSize: 16, 
        color: '#fff', 
        fontFamily: 'Poppins', 
        paddingVertical: 5, 
        textAlign: "left"
    },
    centeredView: {
        flex: 1,
        top: 0,
        width: '100%'
    },
    greetingInfo: {
        color: "#000000",
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    modalView: {
        paddingVertical: 30,
        paddingHorizontal: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    errorBg: {
        backgroundColor: "#dc143c",
    },
    successBg: {
        backgroundColor: "#06a749",
    }
})
