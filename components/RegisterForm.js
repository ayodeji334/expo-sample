import React, { useState, useContext } from 'react'
 import { StyleSheet, Text, TouchableOpacity } from 'react-native';
 import { Formik } from 'formik';
import TextInputField from './TextInputField';
import PasswordInputField from './PasswordInputField';
import EmailInputField from './EmailInputField';
import { Context } from '../config/Context';
import { AUTHENTICATION_SUCCESS } from '../config/Reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AlertModalBox from './AlertModalBox';

export default function RegisterForm() {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [message, setMessage] = useState("");
    const [alertType, setAlertType] = useState("");
    let { dispatch } = useContext(Context);

    const handleCloseModal = () => setModalVisibility(false);

    const handleRegister = async (values, actions) => {
        const users = await AsyncStorage.getItem("@users");
        const all_users = JSON.parse(users);

        const matched_users = all_users.filter(user => user.email === values.email);
        const new_user = {
            id: all_users.length + 1,
            ...values
        };

        if(matched_users.length > 0){
            setMessage("Email already used by another person");
            setModalVisibility(true);
            setAlertType("error");
            
            actions.setSubmitting(false);

            setTimeout(() => setModalVisibility(false), 2000);
        }else {

            //Push to all users array
            all_users.push(new_user);

            //Update users data to local storage.
            await AsyncStorage.setItem("@users", JSON.stringify(all_users));

            //Add user crendential data to local storage.
            await AsyncStorage.setItem("@user_data", JSON.stringify(new_user));

            setModalVisibility(true);
            setAlertType("success");
            setMessage("Account created successfully")
            actions.setSubmitting(false);

            //Change the auth state 
            setTimeout(() => {
                
                dispatch({ type: AUTHENTICATION_SUCCESS, payload: new_user});
            }, 3000);
        }

    };
    return (
        <React.Fragment>
            <Formik
                initialValues={{ email: '', password: '', firstname: '', surname: '' }}
                onSubmit={(values, actions) => handleRegister(values, actions)}
            >
                {(props) => (
                    <>
                        <TextInputField 
                            currentValue={props.values.firstname}
                            fieldName="firstname"
                            labelName="Firstname"
                            handleBlur={props.handleBlur}
                            handleChange={props.handleChange}
                        /> 
                        <TextInputField 
                            currentValue={props.values.surname}
                            fieldName="surname"
                            labelName="Surname"
                            handleBlur={props.handleBlur}
                            handleChange={props.handleChange}
                        /> 
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
                        <TouchableOpacity
                            disabled={props.isSubmitting}
                            activeOpacity={0.8}
                            onPress={props.handleSubmit}
                            style={props.isSubmitting ? styles.disabled : styles.button}>
                            {!props.isSubmitting ? <Text style={styles.buttonText}>sign Up</Text> : <Text style={styles.buttonText}>Loading...</Text> }
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
