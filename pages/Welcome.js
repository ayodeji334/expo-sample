import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { 
    StyleSheet, 
    Text, 
    Image, 
    View, 
    TouchableOpacity, 
    StatusBar} from 'react-native';

export default function Welcome({navigation}) {

  return (
    <React.Fragment>
        <StatusBar 
            barStyle="dark-content"
            backgroundColor="#ffffff"
        />
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/white.png')} style={styles.image}/> 
                <View>
                    <Text style={styles.title}>Welcome to Giverr</Text>
                    <Text style={styles.description}>
                        Send money and share bills with your family, friends and loved ones
                    </Text>
                </View> 
            </View>
            <View style={styles.groupBtn}>
                <View style={{ paddingVertical: 20, width: "80%"}}>
                    <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => navigation.navigate("Register")}
                        style={[styles.button, styles.filledBtn ]}>
                        <Text style={styles.filledBtnText}>
                            Get Started
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => navigation.navigate("Login")}
                        style={[styles.button, styles.outlineBtn]}>
                        <Text
                            style={styles.outlineBtnText}>
                            Login
                        </Text>
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
        backgroundColor: '#fff',
        fontFamily: "Poppins"
    },
    imageContainer: {
        flex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#000000",
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20,
        paddingVertical: 20,
        position: 'relative'
    },
    groupBtn: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 45
    },
    image: {
        resizeMode: "cover",
        width: 300,
        height: 300,
        marginVertical: 55,
    },
    title: {
        fontSize: 27,
        fontFamily: "PoppinsBold",
        letterSpacing: 1,
        textAlign: "center",
        color: "#ffffff",
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
        color: "#fff",
    },
    filledBtnText: {
        textTransform: "uppercase",
        color: "#fff",
        textAlign: "center",
        fontSize: 14,
        fontFamily: "PoppinsBold",
    },
    outlineBtnText: {
        textTransform: "uppercase",
        color: "#000000",
        textAlign: "center",
        fontSize: 14,
        fontFamily: "PoppinsBold",
    },
    button: {
        paddingVertical: 18,
        borderRadius: 999,
        marginTop: 30,
    },
    outlineBtn: {
        backgroundColor: "#e7e7e7",
    },
    filledBtn: {
        backgroundColor: "#000000"
    }
});
