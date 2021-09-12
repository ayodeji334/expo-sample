import React, {useContext, useState, useLayoutEffect} from 'react';
import { 
    TouchableOpacity,
    View,
    StyleSheet,
    Text, 
    StatusBar,
} from 'react-native';
import { SELECT_SYMPTOM } from '../config/Reducer';
import { Context } from '../config/Context';
import { Ionicons } from '@expo/vector-icons';
import ModalBox from '../components/ModalBox';
import TransactionList from '../components/TransactionList';

export default function Transactions({ navigation }) {
    const { dispatch } = useContext(Context);
    const [modalVisible, setModalVisible] = useState(false);

    const transactions = [
        {
            id: 1,
            sender: "John Smith",
            receiver: "Samuel Bill",
            created_at: "2021-09-12 09:34pm",
            amount: "#120,000"
        },
        {
            id: 2,
            sender: "Ayodeji Ayomide",
            receiver: "Samuel Bill",
            created_at: "2021-09-12 09:34pm",
            amount: "#120,000"
        },
        {
            id: 3,
            sender: "John Smith",
            receiver: "Samuel Bill",
            created_at: "2021-09-12 09:34pm",
            amount: "#120,000"
        },
        {
            id: 4,
            sender: "Ayodeji Ayomide",
            receiver: "Samuel Bill",
            created_at: "2021-09-12 09:34pm",
            amount: "#120,000"
        },
        {
            id: 5,
            sender: "John Smith",
            receiver: "Samuel Bill",
            created_at: "2021-09-12 09:34pm",
            amount: "#120,000"
        },
        {
            id: 6,
            sender: "Ayodeji Ayomide",
            receiver: "Samuel Bill",
            created_at: "2021-09-12 09:34pm",
            amount: "#120,000"
        }
    ];

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: "#fff",
                borderBottomWidth: 0,
                elevation: 0,
                shadowOpacity: 0,
            },
            headerTitleStyle: {
                display: "none"
            },
            headerLeft: () => {
                return (
                    <View style={{
                        padding: 20, 
                        marginTop: 8, 
                        marginBottom: 10, 
                        display: "flex", 
                        flexDirection: "row", 
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <TouchableOpacity style={{
                            padding: 8, 
                            marginTop: 8, 
                            backgroundColor: "#e7e7e7",
                            borderRadius: 9999
                        }} activeOpacity={0.4} onPress={() => navigation.goBack()}>
                            <Ionicons name="md-chevron-back-sharp" size={21} color="#000" />
                        </TouchableOpacity>
                    </View>
                )
            }
        })
    }, []);

    const handleCloseModal = () => setModalVisible(false);

    const handleModalVisible = (transaction) => { 
        setModalVisible(true);
        dispatch({ type: SELECT_SYMPTOM, payload: transaction });
    };

    return (
        <React.Fragment>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
            />
            <View style={styles.container}>
                <ModalBox isModalVisible={modalVisible} closeModal={handleCloseModal} />
                <View style={styles.greetingInfo}>
                    <Text style={styles.title}> My Transactions</Text>
                </View>
                <View style={styles.result}>
                    {
                        transactions.length === 0 ? (
                            <Text style={{
                                flex: 1, justifyContent: 'center',
                                alignItems: 'center',
                                fontFamily: 'Poppins', fontSize: 14
                            }}>
                                No transaction 
                            </Text>
                        ) : (
                            <TransactionList 
                                transactions={transactions} 
                                onSelectTransaction={handleModalVisible} 
                            />
                        )
                    }
                </View>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: "Poppins",
        paddingTop: 20,
        paddingHorizontal: 20
    },
    greetingInfo: {
        color: "#000000",
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        borderRadius: 10,
        borderColor: "#cbcaca",
        borderWidth: 2,
        paddingVertical: 15,
        paddingHorizontal: 18,
        marginTop: 5,
        marginBottom: 10,
        fontFamily: "Poppins",
        fontSize: 14
    },
    title: {
        fontSize: 27,
        fontFamily: "PoppinsBold",
        letterSpacing: 1,
        textAlign: "center",
        color: "#000"
    },
    text: {
        paddingBottom: 10,
        marginLeft: 5,
        color: "#000000",
        fontFamily: "PoppinsBold",
        fontSize: 19,
    },
    result: {
        paddingTop: 40,
        height: "100%",
        paddingBottom: 10
    },
    buttonClose: {
        backgroundColor: "#E7E7E7",
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        alignItems: "flex-end"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        }
      },
})
