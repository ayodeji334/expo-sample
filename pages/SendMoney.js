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

export default function SendMoney({ navigation }) {
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
                        <Text style={styles.title}>Send Money To People</Text>
                        <Text style={styles.description}>
                            Select at least a person and not more than 10 people from the list below. 
                        </Text>
                    </View>
                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Amount</Text>
                        <TextInput
                            autoCompleteType="name" 
                            style={styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "e.g #123,500"
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
                        <TouchableOpacity 
                            disabled={loading}
                            activeOpacity={0.8}
                            onPress={handleRegister}
                            style={loading ? styles.disabled : styles.button}>
                                {  
                                    loading ? (
                                        <Text style={styles.buttonText}>Loading...</Text>
                                    ) : (
                                        <Text style={styles.buttonText}>Send Money</Text>
                                    )
                                }
                        </TouchableOpacity>
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
    formContainer: {
        paddingHorizontal: 30,
        flex: 1,
        justifyContent: "space-between",
        height: "100%"
    },
    greetingInfo: {
        color: "#000000",
        marginTop: 30,
        paddingTop: 30,
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
