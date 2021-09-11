import * as React from 'react';
import { 
    StyleSheet, 
    // Alert, 
    Text, 
    View, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    StatusBar
} from 'react-native';
import { useFonts } from "expo-font";
import { AUTHENTICATION_SUCCESS } from '../config/Reducer';
import { Context } from '../config/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';


export default function Login({navigation}) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    let { dispatch } = React.useContext(Context);

    const handleLogin = async () => {
        setLoading(true);

        if(email === "" || password === ""){
            setLoading(false);
            return alert("Email and Password is required!")
        }

        const users = await AsyncStorage.getItem("@users");
        const all_users = JSON.parse(users);
        const matched_users = all_users.filter(user => user.email.toLocaleLowerCase() === email.toLocaleLowerCase());

        if(matched_users.length > 0) {
            if(matched_users[0].password === password){
                await AsyncStorage.setItem("@user_data", JSON.stringify(matched_users[0]));
            
                setTimeout(() => {
                    setLoading(false);
                    dispatch({ type: AUTHENTICATION_SUCCESS, payload: matched_users[0]});
                }, 4000)
                
            }else{
                alert("Invalid email or Password");
                setLoading(false);
            }
        }else{
            alert("Credential does not match any record");   
            setLoading(false);
        };

    };

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: "#fff",
                borderBottomWidth: 0,
                elevation: 0,
                shadowOpacity: 0,
            },
            headerLeft: () => {
                return (
                    <View style={{padding: 20, marginTop: 10, marginBottom: 10, display: "flex", justifyContent: "center", alignContent: "center"}}>
                        <TouchableOpacity style={{padding: 10, marginTop: 10, backgroundColor: "#000"}} activeOpacity={0.4} onPress={() => navigation.goBack()}>
                            <Ionicons name="md-chevron-back-sharp" size={28} color="#e7e7e7" />
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
            <View style={styles.container}>
                <View style={styles.greetingInfo}>
                    <Text style={styles.title}>Welcome Back</Text>
                    <Text style={styles.description}>
                        Fill in your credentails to get back in
                    </Text>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput    
                        autoCompleteType="email"
                        style={styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "youremail@gmail.com"
                        placeholderTextColor = "#8c8e8f"
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

                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                        autoCompleteType="password"
                        style={styles.input}
                        value={password}
                        onChangeText={(text)=>{
                            setPassword(text);
                        }}
                        blurOnSubmit={true}
                        textContentType="password"
                        keyboardType="default"
                        placeholder = "***********"
                        placeholderTextColor = "#8c8e8f"
                        autoCapitalize = "none"
                        returnKeyType = "go" 
                        style={styles.input}
                        secureTextEntry={true}
                    />

                    <Text 
                        style={{
                            paddingVertical: 5,
                            textAlign: "right",
                            color: "#dc143c",
                            fontWeight: "500",
                            fontFamily: "Poppins",
                            fontSize: 13 
                        }} 
                        onPress={() => { navigation.navigate('ForgetPassword') }}
                    >
                        Forget Password
                    </Text>

                    <TouchableOpacity
                        disabled={loading}
                        activeOpacity={0.8}
                        onPress={handleLogin}
                        style={loading ? styles.disabled : styles.button}>
                        {!loading ? <Text style={styles.buttonText}>Log in</Text> : <Text style={styles.buttonText}>Loading...</Text> }
                    </TouchableOpacity>

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
    image: {
        width: 200,
        height: 120,
    },
    input: {
        borderRadius: 14,
        borderColor: "#cbcaca",
        borderWidth: 2,
        paddingVertical: 14,
        paddingHorizontal: 18,
        marginTop: 1,
        marginBottom: 10,
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
    label: {
        fontSize: 13,
        fontFamily: "PoppinsBold"
    },
    greetingInfo: {
        color: "#000000",
        marginTop: 30,
        paddingTop: 30,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    formContainer: {
        paddingHorizontal: 30
    },
    buttonText: {
        textTransform: "uppercase",
        color: "white",
        textAlign: "center",
        fontFamily: "PoppinsBold",
        fontSize: 13,
    },
    button: {
        backgroundColor: "#000000",
        paddingVertical: 18,
        borderRadius: 50,
        width: "100%",
        marginTop: 25,
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
