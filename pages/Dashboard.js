import * as React from 'react';
import { Ionicons, Feather, Entypo } from '@expo/vector-icons';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar  } from 'react-native';
import { Context } from '../config/Context';
import { ScrollView } from 'react-native';
import { LOG_OUT_SUCCESS } from '../config/Reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Dashboard({ navigation }) {
    let { state, dispatch } = React.useContext(Context);
    const [greetMessage, setGreetingMessage] = React.useState("");
    const [time] = React.useState(new Date().getHours());
    const user = state.currentUser;

    const handleLogOut = async () => {
        await AsyncStorage.removeItem("@user_data");
        dispatch({ type: LOG_OUT_SUCCESS, payload: null});
    };

    React.useLayoutEffect(() => {
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

    React.useEffect(() => {
        if (time < 12) {
            setGreetingMessage("Good morning ☁️. Have a nice day");
        }
        
        if (time > 12 && time < 17) {
            setGreetingMessage("Good afternoon ☀️. How has been your day?");
        }
        
        if (time > 17 && time < 22) {
            setGreetingMessage("Good Evening 🌤️. How was your day?");
        } 

        if(time > 22){
            setGreetingMessage("Good Night. Have a wonderful Dream 🌙");
        }

    }, [time]);
    
    return (
        <React.Fragment>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ 
                        flex: 1,
                        paddingHorizontal: 14,
                        paddingVertical: 20,
                        backgroundColor: "#dc143c", 
                        borderColor: "#000",
                        marginTop: 20, 
                        marginBottom: 35, 
                        borderRadius: 10
                    }}>
                        <Text style={{ 
                            color: "#fff",
                            fontFamily: "Poppins", 
                            fontSize: 20
                        }}>Hello,</Text>
                        <Text style={styles.username}>
                            {user.firstname}
                        </Text>
                        <Text style={styles.greetingText}>{greetMessage}</Text>
                    </View>
                    <View style={{
                        flex: 2,
                    }}>
                        <View>
                            <Text style={{ color: "#000", fontFamily: "PoppinsBold", fontSize: 19 }}>
                                Carbonhydrate and Protein are eesential nutrient.
                            </Text>
                            <Text style={{
                                color: "#403f3f",
                                fontFamily: "Poppins",
                                lineHeight: 21,
                                fontSize: 15,
                                paddingTop: 10,
                                paddingBottom: 10
                            }}>
                                The body requires an adequate amount of carbohydrates and protein 
                                that are crucial for both body development and preventing disease. 
                                If the body does not get the adequate amount of carbohydrates and 
                                protein needed, it can result in health issues that can cause the 
                                sudden death of the individual.

                                There are many symptoms of carbohydrate and protein deficiency that 
                                an individual will have been seen before the issues leading to 
                                serious diseases such as diabetes, heart problem, and many more. 
                                Failure to know the cause of those symptoms on time leads to the 
                                sudden death of the individual. The current situation of things 
                                in the country where only the medium class and higher class set of 
                                people have access to a good medical checkup makes it difficult for 
                                the lower class to know their health status at a point in time. Many 
                                life will have been safe if there’s a free proper medical checkup for 
                                every individual in the country.
                            </Text>
                            <Text style={{ color: "#000", fontFamily: "PoppinsBold", fontSize: 19 }}>
                                The aim of the system
                            </Text>
                            <Text style={{
                                color: "#403f3f",
                                fontFamily: "Poppins",
                                lineHeight: 21,
                                fontSize: 15,
                                paddingTop: 10,
                                paddingBottom: 15
                            }}>
                                The main aim of this project is to develop a system the can diagnosis 
                                carbohydrates and protein deficiency based on the symptoms the individual 
                                is seen, whether it is a symptom of carbohydrate or protein deficiency. 
                                It will solve the problem discussed above, makes it easier for every individual 
                                whether of the lower, medium, or higher class background to know their health 
                                status without consulting the doctor. The system will provide the user with 
                                adequate information based on each symptom the user inputs into the system. 
                                It will help to reduce the cost spend on medical bills in the hospital.
                            </Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.button}
                            onPress={() => navigation.navigate("SearchPage")}>
                            <Text style={styles.buttonText}>
                                Start Checkup
                            </Text>
                            <Feather name="arrow-right" style={{paddingHorizontal:10}} size={20} color="#fff" />
                        </TouchableOpacity>
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
    username: { 
        color: "#fff", 
        fontFamily: "PoppinsBold", 
        fontSize: 24, 
        textTransform: "capitalize" 
    },
    greetingText: {
        fontSize: 15,
        fontFamily: "Poppins",
        letterSpacing: 1,
        fontWeight: "800",
        color: "#fff"
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
    }
});
