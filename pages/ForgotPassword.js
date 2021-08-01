import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { useFonts } from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ForgotPassword({navigation}) {
    const [loading, setLoading] = React.useState(false);
    const [email, setEmail] = useState("");

    const handleRetrieveUserPassword = async () => {
        setLoading(true);

        if(email === ""){
            setLoading(false);
            return alert("Email is required");
        }
        
        const users = await AsyncStorage.getItem("@users");
        const all_users = JSON.parse(users);

        const matched_users = all_users.filter(user => user.email.toLocaleLowerCase() === email.toLocaleLowerCase());

        if(matched_users.length > 0){
            alert("Your password is " + matched_users[0].password);

            setLoading(false);
        }

        if(matched_users.length === 0 ){
            alert("The email doesn't matched any record. Try again");

            setLoading(false);
        }
    };

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: "#dc143c",
                borderBottomWidth: 0,
                elevation: 0,
                shadowOpacity: 0,
            },
            headerTitleStyle: {
                display: "none"
            },
            headerLeft: () => {
                return (
                    <View style={{padding: 22, marginTop: 10}}>
                        <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" size={28} color="white" />
                        </TouchableOpacity>
                    </View>
                )
            }
        })
    }, []);

    const [loaded] = useFonts({
        Poppins: require('../assets/fonts/Poppins-Medium.ttf'),
        PoppinsBold: require('../assets/fonts/Poppins-Black.ttf')
    });
    
    if (!loaded) {
        return null;
    }
    

    return (
        <React.Fragment>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#dc143c"
            /> 
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/white.png')} style={styles.image} />
                    <Text style={{color: "#fff", fontFamily: "PoppinsBold", fontSize: 18, marginTop: -30}}>Healthy Life</Text>
                </View>
                <View style={styles.formContainer}>
                    <View style={{paddingVertical: 30}}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput 
                            style={styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "youremail@gmail.com"
                            placeholderTextColor = "#000000"
                            autoCapitalize = "none"
                            returnKeyType = "next"
                            keyboardType='email-address'
                            textContentType="emailAddress"
                            onChangeText={(text)=>{
                                setEmail(text)
                            }}
                            blurOnSubmit={true}
                            value={email}
                        />
                        <TouchableOpacity 
                            disabled={loading}
                            activeOpacity={0.8}
                            onPress={handleRetrieveUserPassword}
                            style={loading ? styles.disabled : styles.button}>
                                {  loading ?
                                    <Text style={styles.buttonText}>Loading...</Text> : 
                                    <Text style={styles.buttonText}>Retrieve Password</Text>
                                }
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dc143c',
        fontFamily: "Poppins",
        paddingTop:  20
    },
    image: {
        width: 100,
        height: 120,
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
        fontSize: 13
    },
    label: {
        fontSize: 14,
        fontFamily: "PoppinsBold",
    },
    imageContainer: {
        flex: 1,
        color: "#000000",
        paddingBottom: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    formContainer: {
        flex: 1,
        backgroundColor: "#fff",
        color: '#fff',
        paddingHorizontal: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    buttonText: {
        textTransform: "uppercase",
        color: "white",
        textAlign: "center",
        fontFamily: "PoppinsBold",
        fontSize: 13,
    },
    button: {
        backgroundColor: "#dc143c",
        color: "#fff",
        paddingVertical: 18,
        marginVertical: 20,
        borderRadius: 50,
        width: "100%"
    },
    text: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    },
    link: {
      paddingLeft: 0,
      marginLeft: 5,
      color: "blue"
    },
    disabled: {
        opacity: .56,
        backgroundColor: "#dc143c",
        paddingVertical: 17,
        borderRadius: 50,
        width: "100%",
        marginTop: 15,
    }
});
