import * as React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,  
    TouchableOpacity, 
    ScrollView,
    StatusBar
} from 'react-native';
import { useFonts } from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import RegisterForm from '../components/RegisterForm';

export default function Register({ navigation }) {
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
            headerLeft: () => {
                return (
                    <View style={{padding: 20, marginTop: 8, marginBottom: 10}}>
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
                barStyle="dark-content"
                backgroundColor="#fff"
            />
            <ScrollView>            
                <View style={styles.container}>
                    <View style={styles.greetingInfo}>
                        <Text style={styles.title}>Create An Account</Text>
                        <Text style={styles.description}>
                            Fill in your detail below, complete other signup process to get started
                        </Text>
                    </View>
                    <View style={styles.formContainer}>
                        <RegisterForm />
                        <Text style={{
                            marginTop: 35,
                            textAlign:"center", 
                            fontFamily: "Poppins", 
                            fontSize: 14 
                        }}>
                            Already have an account? {" "}
                            <Text
                                style={styles.link} 
                                onPress={()=>{navigation.navigate('Login')}}
                            > 
                                Sign in
                            </Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>  
        </React.Fragment>
       );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: "Poppins",
        paddingTop: 10,
        paddingBottom: 130
    },
    label: {
        fontSize: 13,
        fontFamily: "PoppinsBold",
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
    formContainer: {
        paddingHorizontal: 30
    },
    greetingInfo: {
        color: "#000000",
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        textTransform: "uppercase",
        color: "white",
        textAlign: "center",
        fontFamily: "PoppinsBold",
        fontSize: 13
    },
    button: {
        backgroundColor: "#000",
        paddingVertical: 18,
        borderRadius: 50,
        width: "100%",
        marginTop: 15,
    },
    image: {
        width: 100,
        height: 120,
    },
    text: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center"
    },
    link: {
      paddingLeft: 0,
      marginLeft: 5,
      color: "#dc143c"
    },
    disabled: {
        opacity: .56,
        backgroundColor: "#000",
        paddingVertical: 17,
        borderRadius: 50,
        width: "100%",
        marginTop: 15,
    }
});
