import * as React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    ScrollView,
    StatusBar
} from 'react-native';
import { useFonts } from "expo-font";
import { Context } from '../config/Context';
import { AUTHENTICATION_SUCCESS } from '../config/Reducer';
// import users from "../config/Users";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

export default function Register({ navigation }) {
    const [firstname, setFirstname] = React.useState("");
    const [surname, setSurname] = React.useState('');
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { dispatch } = React.useContext(Context);
    const [loading, setLoading] = React.useState(false);

    const handleRegister = async () => {
        setLoading(true);

        const users = await AsyncStorage.getItem("@users");
        const all_users = JSON.parse(users);

        const matched_users = all_users.filter(user => user.email === email);
        const new_user = {
            id: all_users.length + 1,
            firstname,
            email,
            password,
        };

        if(matched_users.length > 0){
            alert("Email already used by another person");
            setLoading(false);

        }else {

            //Push to all users array
            all_users.push(new_user);

            //Update users data to local storage.
            await AsyncStorage.setItem("@users", JSON.stringify(all_users));

            //Add user crendential data to local storage.
            await AsyncStorage.setItem("@user_data", JSON.stringify(new_user));

            setLoading(false);

            //Change the auth state 
            dispatch({ type: AUTHENTICATION_SUCCESS, payload: new_user});
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
            <ScrollView>            
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../assets/white.png')} style={styles.image} />
                        <Text style={{color: "#fff", fontFamily: "PoppinsBold", fontSize: 18, marginTop: -30}}>Healthy Life</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <View>
                            <Text style={styles.label}>Firstname</Text>
                            <TextInput 
                                style={styles.input}
                                underlineColorAndroid = "transparent"
                                placeholder = "e.g Odunayo"
                                placeholderTextColor = "#8c8e8f"
                                autoCompleteType="name" 
                                autoCapitalize = "none"
                                returnKeyType = "next"
                                keyboardType='email-address'
                                textContentType="name"
                                onChangeText={(text)=>{
                                    setFirstname(text)
                                }}
                                blurOnSubmit={true}
                                value={firstname}
                            />
                            <Text style={styles.label}>Surname</Text>
                            <TextInput
                                autoCompleteType="name" 
                                style={styles.input}
                                underlineColorAndroid = "transparent"
                                placeholder = "e.g Fawumi"
                                placeholderTextColor = "#8c8e8f"
                                autoCapitalize = "none"
                                returnKeyType = "next"
                                keyboardType='email-address'
                                textContentType="name"
                                onChangeText={(text)=>{
                                    setSurname(text)
                                }}
                                blurOnSubmit={true}
                                value={surname}
                            />
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
                                style={styles.input}
                                value={password}
                                onChangeText={(text)=>{
                                    setPassword(text);
                                }}
                                autoCompleteType="password"
                                blurOnSubmit={true}
                                textContentType="password"
                                keyboardType="default"
                                placeholder = "*************"
                                placeholderTextColor = "#8c8e8f"
                                autoCapitalize = "none"
                                returnKeyType = "go" 
                                style={styles.input}
                                secureTextEntry={true}
                            />
                            <TouchableOpacity 
                                disabled={loading}
                                activeOpacity={0.8}
                                onPress={handleRegister}
                                style={loading ? styles.disabled : styles.button}>
                                    {  
                                        loading ? (
                                            <Text style={styles.buttonText}>Loading...</Text>
                                        ) : (
                                            <Text style={styles.buttonText}>Sign Up</Text>
                                        )
                                    }
                            </TouchableOpacity>
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
                </View>
            </ScrollView>  
        </React.Fragment>
       );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dc143c',
        fontFamily: "Poppins",
        height: "100%"
    },
    input: {
        borderRadius: 10,
        borderColor: "#d4d4d4",
        borderWidth: 2,
        paddingVertical: 13,
        paddingHorizontal: 14,
        marginTop: 1,
        marginBottom: 10,
        fontFamily: "Poppins",
        fontSize: 13
    },
    label: {
        fontSize: 13,
        fontFamily: "PoppinsBold",
    },
    imageContainer: {
        color: "#000000",
        paddingVertical: 90,
        justifyContent: "center",
        alignItems: "center"
    },
    formContainer: {
        backgroundColor: "#fff",
        color: '#fff',
        paddingHorizontal: 25,
        paddingVertical: 50,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    buttonText: {
        textTransform: "uppercase",
        color: "white",
        textAlign: "center",
        fontFamily: "PoppinsBold",
        fontSize: 13
    },
    button: {
        backgroundColor: "#dc143c",
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
        backgroundColor: "#dc143c",
        paddingVertical: 17,
        borderRadius: 50,
        width: "100%",
        marginTop: 15,
    }
});
