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
            backgroundColor="#fff"
        />
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/doc.png')} style={styles.image}/>  
                <Text style={styles.title}>Maintain a healthy life</Text> 
                <Text style={styles.description}>
                    Explore the symptoms of carbonhydrate and protein 
                    deficiency.
                </Text>
            </View>
            <View style={styles.navBtnContainer}>
                <TouchableOpacity
                    activeOpacity={0.4}
                    onPress={() => navigation.navigate("Login")}
                    style={[styles.button, styles.filledBtn ]}>
                    <Text style={styles.filledBtnText}>
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.4}
                    onPress={() => navigation.navigate("Register")}
                    style={[styles.button, styles.outlineBtn]}>
                    <Text
                        style={styles.outlineBtnText}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 40,
        fontFamily: "Poppins"
    },
    imageContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    navBtnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    image: {
        maxWidth: 400,
        height: 240,
        paddingVertical: 50,
        marginVertical: 30,
        resizeMode: "cover"
    },
    title: {
        fontSize: 23,
        fontFamily: "PoppinsBold",
        letterSpacing: 1,
        textAlign: "center"
    },
    description: {
        fontSize: 16,
        fontFamily: "Poppins",
        letterSpacing: 1,
        paddingVertical: 14,
        textAlign: "center",
        paddingBottom: 10,
        fontWeight: "500",
        color: "#808080"
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
        color: "#dc143c",
        textAlign: "center",
        fontSize: 14,
        fontFamily: "PoppinsBold",
    },
    button: {
        paddingVertical: 19,
        borderRadius: 9999,
        width: "60%",
        marginTop: 30
    },
    outlineBtn: {
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "#dc143c"
    },
    filledBtn: {
        backgroundColor: "#dc143c"
    }
});
