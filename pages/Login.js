import React, {useLayoutEffect} from 'react';
import { 
    StyleSheet,  
    Text, 
    View, 
    TouchableOpacity, 
    StatusBar
} from 'react-native';
import { useFonts } from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import LoginForm from '../components/LoginForm';


export default function Login({navigation}) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: "#fff",
                borderBottomWidth: 0,
                elevation: 0,
                shadowOpacity: 0,
            },
            headerLeft: () => {
                return (
                    <View style={{padding: 20, marginTop: 8, marginBottom: 10}}>
                        <TouchableOpacity style={{
                            padding: 8, 
                            marginTop: 1, 
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

    const [loaded] = useFonts({
        Poppins: require('../assets/fonts/Poppins-Medium.ttf'),
        PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf')
    });
    
    if (!loaded) {
        return null;
    }

    return (
        <React.Fragment>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
            />
            <View style={styles.container}>
                <View style={styles.greetingInfo}>
                    <Text style={styles.title}>Welcome Back</Text>
                    <Text style={styles.description}>
                        Fill in your credentails to get back in
                    </Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm navigation={navigation} />

                    <Text style={{marginTop: 35, textAlign:"center", fontFamily: "Poppins" }}>
                        Don't have an account? {" "}
                        <Text 
                            style={styles.link} 
                            onPress={()=>{navigation.navigate('Register')}}> 
                            Sign Up
                        </Text>
                    </Text>
                </View>
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        fontFamily: "Poppins",
    },
    error: {
        color: "#d40611",
        padding: 10,
        textAlign: "center",
        fontWeight: "600",
        fontFamily: "Poppins",
        fontSize: 13
    },
    title: {
        fontSize: 27,
        fontFamily: "PoppinsBold",
        letterSpacing: 1,
        textAlign: "center",
        color: "#000",
        paddingVertical: 14
    },
    description: {
        fontSize: 15,
        fontFamily: "Poppins",
        letterSpacing: 1,
        paddingBottom: 40,
        textAlign: "center",
        maxWidth: "65%",
        fontWeight: "500",
        color: "#000",
    },
    greetingInfo: {
        color: "#000000",
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    formContainer: {
        paddingHorizontal: 30
    },
    text: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center"
    },
    link: {
      paddingHorizontal: 12,
      marginLeft: 14,
      color: "#dc143c"
    }
});
