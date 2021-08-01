import * as React from 'react';
import { StyleSheet, ActivityIndicator, View, Text} from 'react-native';

export function SyncLoading() {
    const [spinnerText, setSpinnerText] = React.useState("Getting the data....");

    React.useEffect(() => {
        setTimeout(() => setSpinnerText('Anaylizing the data...'), 5000);
    }, []);


    return (
        <View style={[styles.container]}>
            <ActivityIndicator size={90} color="#fc031c" />
            <Text style={styles.spinnerText}>{spinnerText}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: '#ffffff',
        fontFamily: "Poppins",
        paddingBottom: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    spinnerText: {
        fontSize: 17,
        fontFamily: "Poppins",
        marginVertical: 30
    },
})