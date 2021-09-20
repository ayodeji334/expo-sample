import React, { useContext, useState } from 'react'
 import { StyleSheet, Text, TouchableOpacity } from 'react-native';
 import { Formik } from 'formik';
import PasswordInputField from './PasswordInputField';
import EmailInputField from './EmailInputField';
import { AUTHENTICATION_SUCCESS } from '../config/Reducer';
import { Context } from '../config/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AlertModalBox from './AlertModalBox';

export default function LoginForm({ navigation }) {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [message, setMessage] = useState("");
    const [alertType, setAlertType] = useState("");
    let { dispatch } = useContext(Context);

    const handleCloseModal = () => setModalVisibility(false);

    const handleSubmit = async (values, actions) => {
        const users = await AsyncStorage.getItem("@users");
        const all_users = JSON.parse(users);
        const matched_users = all_users.filter(user => user.email.toLocaleLowerCase() === values.email.toLocaleLowerCase());

        if(values.email === "" || values.password === ""){
            actions.setSubmitting(false);
            setMessage("Email and Password is required");
            setAlertType("error");
            setModalVisibility(true);
            return;
        }

        if(matched_users.length > 0) {
            if(matched_users[0].password === values.password){
                await AsyncStorage.setItem("@user_data", JSON.stringify(matched_users[0]));
            
                actions.setSubmitting(false);
                setModalVisibility(false);
                dispatch({ type: AUTHENTICATION_SUCCESS, payload: matched_users[0]});
                
            }else{
                setMessage("Invalid email or Password");
                setAlertType("error");
                setModalVisibility(true);
                actions.setSubmitting(false);
            }
        }else{
            setMessage("Credential does not match any record");   
            setModalVisibility(true);
            setAlertType("error");
            actions.setSubmitting(false);
        };
    }
    return (
        <React.Fragment>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values, actions) => handleSubmit(values, actions)}
            >
                {(props) => (
                    <>
                        <EmailInputField
                            currentValue={props.values.email}
                            fieldName="email"
                            handleBlur={props.handleBlur}
                            handleChange={props.handleChange}
                        /> 
                        <PasswordInputField
                            currentValue={props.values.password}
                            labelName="Password"
                            fieldName="password"
                            handleBlur={props.handleBlur}
                            handleChange={props.handleChange}
                        />
                        <Text 
                            style={styles.link} 
                            onPress={() => {navigation.navigate('ForgetPassword') }}
                        >
                            Forget Password
                        </Text>
                        <TouchableOpacity
                            disabled={props.isSubmitting}
                            activeOpacity={0.8}
                            onPress={props.handleSubmit}
                            style={props.isSubmitting ? styles.disabled : styles.button}>
                            {!props.isSubmitting ? <Text style={styles.buttonText}>Log in</Text> : <Text style={styles.buttonText}>Loading...</Text> }
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
            <AlertModalBox 
                type={alertType} 
                isModalVisible={modalVisibility} 
                message={message} 
                closeModalhandler={handleCloseModal} 
            />
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    link: {
        paddingVertical: 5,
        textAlign: "right",
        color: "#dc143c",
        fontWeight: "500",
        fontFamily: "Poppins",
        fontSize: 13 
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
    disabled: {
        opacity: .56,
        backgroundColor: "#000",
        paddingVertical: 17,
        borderRadius: 50,
        width: "100%",
        marginTop: 15,
    }
})
