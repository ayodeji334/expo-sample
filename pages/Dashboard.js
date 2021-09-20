import React, {useState, useLayoutEffect, useContext, useEffect } from 'react';
import { Ionicons, Feather, Entypo } from '@expo/vector-icons';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar  } from 'react-native';
import { Context } from '../config/Context';
import { ScrollView } from 'react-native';
import { LOG_OUT_SUCCESS } from '../config/Reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TransactionList from '../components/TransactionList';

export default function Dashboard({ navigation }) {
    let { state, dispatch } = useContext(Context);
    const [greetMessage, setGreetingMessage] = useState("How has been your day?");
    const [time] = useState(new Date().getHours());
    const [isShowBalance, setIsShowBalance] = useState(false)
    const user = state.currentUser;
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

    const handleLogOut = async () => {
        await AsyncStorage.removeItem("@user_data");
        dispatch({ type: LOG_OUT_SUCCESS, payload: null});
    };

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
            headerRight: () => {
                return (
                    <View style={{ paddingHorizontal: 30 }}>
                        <TouchableOpacity activeOpacity={0.4} onPress={handleLogOut}>
                            <Ionicons name="log-out-outline" size={28} color="black" />
                        </TouchableOpacity>
                    </View>
                )
            }
        })
    });

    useEffect(() => {
        if (time < 12) {
            setGreetingMessage("Good morning ☁️. Have a nice day");
        }
        
        if (time > 12 && time < 17) {
            setGreetingMessage("Good afternoon ☀️. How has been your day?");
        }
        
        if (time > 17 && time < 22) {
            setGreetingMessage("Good Evening 🌤️. How was your day?");
        } 

        if(time >= 22){
            setGreetingMessage("Good Night. Have a wonderful Dream 🌙");
        }

    }, [time]);
    
    return (
        <React.Fragment>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <ScrollView>
                <View style={styles.container}>
                    <View style={{paddingVertical: 20}}>
                        <View style={{  
                            marginBottom: 35, 
                        }}>
                            <Text style={{ 
                                color: "#000",
                                fontFamily: "PoppinsBold", 
                                fontSize: 22,
                                textTransform: "capitalize"
                            }}>Hello, {user.firstname}</Text>
                            <Text style={styles.greetingText}>{greetMessage}</Text>
                        </View>
                    </View> 
                    <View style={{ 
                        paddingHorizontal: 30,
                        paddingVertical: 30,
                        backgroundColor: "#000", 
                        borderColor: "#000", 
                        marginBottom: 25, 
                        marginTop: -20,
                        borderRadius: 20,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItem: "center"
                    }}>
                        <View>
                            <Text style={{ 
                                color: "#fff",
                                fontFamily: "Poppins", 
                                fontSize: 19
                            }}>
                                Your Balance
                            </Text>
                            {isShowBalance ? (
                                <Text style={styles.amount}>
                                    <Text style={{fontSize: 23}}>₦ </Text>
                                    456, 000
                                </Text>
                            ) : (
                                <Text style={styles.amount}>
                                   XXX,xxx
                                </Text>
                            )}
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end"}}>
                            <TouchableOpacity style={{
                                paddingVertical: 8, 
                                paddingHorizontal: 12,
                                marginTop: 8, 
                                backgroundColor: "#e7e7e7",
                                borderRadius: 9
                            }} activeOpacity={0.8} onPress={() => setIsShowBalance(!isShowBalance)}>
                                <Text style={{fontSize: 15, fontFamily: "Poppins"}}>
                                    {isShowBalance ? "Hide Balance" : "Show Balance"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <TouchableOpacity style={{
                            paddingVertical: 20, 
                            paddingHorizontal: 20,
                            marginTop: 8, 
                            backgroundColor: "#000",
                            width: "40%",
                            borderRadius: 99
                        }} activeOpacity={0.7} onPress={() => navigation.navigate("Send-Money")}>
                            <Text style={styles.buttonText}>Send Money</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            paddingVertical: 20, 
                            paddingHorizontal: 20,
                            marginTop: 8,
                            backgroundColor: "green",
                            width: "40%",
                            borderRadius: 99
                        }} activeOpacity={0.7} onPress={() => navigation.navigate("Fund-Wallet")}>
                            <Text style={styles.outlineText}>Request Money</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingVertical: 30, marginTop: 40 }}>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                            <Text style={styles.title}>
                                Recent Transactions
                            </Text>
                            <Text style={styles.link} onPress={() => navigation.navigate("My-Transactions")}>
                                See All
                            </Text></View>
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
                                        onSelectTransaction={(transaction) => console.log(transaction)} 
                                    />
                                )
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: "Poppins",
        paddingTop: 20,
        paddingBottom: 130,
        paddingHorizontal: 25,
    },
    navigationContainer: {
        backgroundColor: "#ecf0f1",
        borderBottomColor: '#fff'
    },
    title: {
        textTransform: "uppercase",
        color: "#000",
        textAlign: "left",
        fontFamily: "PoppinsBold",
        fontSize: 17
    },
    amount: { 
        color: "#fff", 
        fontFamily: "PoppinsBold",
        fontSize: 30, 
        textTransform: "uppercase" 
    },
    greetingText: {
        fontSize: 15,
        fontFamily: "Poppins",
        letterSpacing: 1,
        fontWeight: "800",
        color: "#000"
    },
    text: {
        paddingLeft: 0,
        marginLeft: 5,
        color: "#000000",
        fontFamily: "Poppins",
        fontSize: 18,
        fontWeight: "700"
    },
    buttonText: {
        textTransform: "uppercase",
        color: "#fff",
        textAlign: "center",
        fontFamily: "PoppinsBold",
        fontSize: 13,
    },
    outlineText: {
        textTransform: "uppercase",
        color: "#fff",
        textAlign: "center",
        fontFamily: "PoppinsBold",
        fontSize: 13,
    },
    button: {
        backgroundColor: "#dc143c",
        paddingVertical: 18,
        borderRadius: 50,
        width: "100%",
        marginTop: 45,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    link: {
        padding: 10,
        marginLeft: 14,
        color: "#dc143c",
        fontSize: 17,
        fontFamily: "Poppins",
        fontWeight: "bold"
    },
});
