import React from 'react'
import { 
    View, 
    Modal, 
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { Context } from '../config/Context';
import { Ionicons } from '@expo/vector-icons';
import Transactions from '../pages/Transactions';

export default function ModalBox({ isModalVisible, closeModal }) {
    const { state } = React.useContext(Context);
    const transcation = state.selectedSymptom;
    const [isLoading, setLoading] = React.useState(false);

    React.useEffect(() => {
       let subscribe = true;

        const getNoData =  async () => {
            setLoading(true);

            try {
                const data = await new Promise((resolve, reject) => {
                    setTimeout(() => {
                      resolve(true);
                    }, 7000);
                });

                if(data && subscribe){
                    setLoading(false);
                }

            } catch (e) {
                console.warn(e);
            }
        }

        getNoData()

        return () => subscribe = false;

    }, [isModalVisible]);
    
    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {}}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            activeOpacity={0.8} 
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => closeModal()}
                        >
                            <Ionicons name="close-sharp" size={25} color="black" />
                        </TouchableOpacity> 
                        <View style={styles.greetingInfo}>
                            <Text style={styles.title}>Transaction Detail</Text>
                        </View>
                        <View style={{paddingTop: 20}}> 
                            <View style={styles.group}> 
                                <Text style={styles.label}>Sent From</Text>
                                <Text style={styles.text}>{transcation.sender}</Text>
                            </View>
                            <View style={styles.group}> 
                                <Text style={styles.label}>Amount</Text>
                                <Text style={styles.text}>{transcation.amount}</Text>
                            </View>
                            <View style={styles.group}> 
                                <Text style={styles.label}>Sent on</Text>
                                <Text style={styles.text}>{transcation.created_at}</Text>
                            </View>
                        </View>
                    </View>
                </View>    
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: "Poppins",
        paddingHorizontal: 20
    },
    buttonClose: {
        backgroundColor: "#e7e7e7",
        borderRadius: 30,
        paddingVertical: 15,
        position: "absolute",
        right: 10,
        fontWeight: "900",
        elevation: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 27,
        marginRight: 28,
        width: 45,
        height:  45
    },
    detailContainer: {
        flex: 1,
        height: '100%',
        width: "100%",
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    text: {
        paddingBottom: 10,
        marginLeft: 5,
        color: "#000000",
        fontFamily: "Poppins",
        fontSize: 19,
    },
    centeredView: {
        flex: 1,
        marginTop: 22,
        backgroundColor: "#fff"
    },
    greetingInfo: {
        color: "#000000",
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 25,
        fontFamily: "PoppinsBold",
        letterSpacing: 1,
        textAlign: "center",
        color: "#000"
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        paddingTop: 30,
        paddingHorizontal: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
    label: {
        fontSize: 18,
        fontFamily: "PoppinsBold"
    },
    group: {
        marginVertical: 10
    }
})



