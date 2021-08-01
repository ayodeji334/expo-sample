import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import Reducer, { AUTHENTICATION_ERROR, AUTHENTICATION_SUCCESS } from "./Reducer";


export const Context = React.createContext();

//Initial state
const initalState = {
    auth: false,
    selectedSymptom: {},
    currentUser: {},
    isLoadingAuthStatus: true
};

export default function ContextProvider ({children}){
    const [state, dispatch] = React.useReducer(Reducer, initalState);

    React.useEffect(() => {
        const getUserData = async () => {
            const users =  await AsyncStorage.getItem("@users");
                 
            // create users arr in localstorage if it doesn't exist
            if(!users){
                await AsyncStorage.setItem("@users", JSON.stringify([]));
            }

            //get user auth credentials
            const user = await AsyncStorage.getItem('@user_data');

            if(!user){
                dispatch({ type: AUTHENTICATION_ERROR, payload: user })
            }else{
                dispatch({ type: AUTHENTICATION_SUCCESS, payload: JSON.parse(user)});
            }
        }

        getUserData();

    }, []);

    return(
        <Context.Provider
            value={{
                state,
                dispatch
            }}>
        {children}
        </Context.Provider>
    )
}

