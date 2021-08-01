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
                                What is a Deficiency?
                            </Text>
                            <Text style={{
                                color: "#403f3f",
                                fontFamily: "Poppins",
                                lineHeight: 21,
                                fontSize: 15,
                                paddingTop: 10,
                                paddingBottom: 10
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                                consequat semper viverra nam libero justo laoreet sit. Mauris 
                                augue neque gravida in fermentum et sollicitudin ac. At in tellus 
                                integer feugiat scelerisque varius. Adipiscing commodo elit at 
                                imperdiet dui accumsan. Dui sapien eget mi proin sed libero enim 
                                sed faucibus. Hac habitasse platea dictumst quisque sagittis purus 
                                sit. Nullam ac tortor vitae purus faucibus. Blandit volutpat maecenas 
                                volutpat blandit aliquam. Fusce ut placerat orci nulla pellentesque.
                                Aliquam ut porttitor leo a diam sollicitudin tempor. Non odio euismod 
                                lacinia at quis risus sed vulputate odio. Nisl suscipit adipiscing 
                                bibendum est ultricies integer quis auctor. Lorem sed risus ultricies 
                            </Text>
                            <Text style={{ color: "#000", fontFamily: "PoppinsBold", fontSize: 19 }}>
                                What is a Symptoms?
                            </Text>
                            <Text style={{
                                color: "#403f3f",
                                fontFamily: "Poppins",
                                lineHeight: 21,
                                fontSize: 15,
                                paddingTop: 10,
                                paddingBottom: 15
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                                consequat semper viverra nam libero justo laoreet sit. Mauris 
                                augue neque gravida in fermentum et sollicitudin ac. At in tellus 
                                integer feugiat scelerisque varius. Adipiscing commodo elit at 
                                sed faucibus. Hac habitasse platea dictumst quisque sagittis purus  
                                {" "} 
                                Check your symptoms and find out what could be causing them. 
                                It's fast, free and anonymous.
                                The main purpose of the application is to provides 
                                you with a fast and accurate health assessment on the 
                                symptoms you been seen for a while, if it's as a result of 
                                inadequate of carbohydrates and protein nutrient in your body. And also 
                                explain how you can regain your 100% healthy life. Click on 
                                the "Start Checkup"  button below to start the check up
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
    drawer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        borderBottomColor: '#fff'
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
        fontSize: 16,
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
