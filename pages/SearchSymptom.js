import * as React from 'react';
import { 
    TouchableOpacity,
    View,
    StyleSheet,
    Text, 
    TextInput,
    StatusBar,
} from 'react-native';
import symptoms from "../config/Symptoms"; 
import CustomList from "../components/CustomList";
import { SELECT_SYMPTOM } from '../config/Reducer';
import { Context } from '../config/Context';
import { Ionicons } from '@expo/vector-icons';
import ModalBox from '../components/ModalBox';

export default function SearchSymptom({ navigation }) {
    const { dispatch } = React.useContext(Context);
    const [searchQuery, setSearchQuery] = React.useState("");
    const [result, setResult] = React.useState([]);
    const [modalVisible, setModalVisible] = React.useState(false);

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
                    <View style={{ padding: 22, marginTop: 10}}>
                        <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" size={28} color="black" />
                        </TouchableOpacity>
                    </View>
                )
            }
        })
    }, []);

    const handleSearch = (text) => {
        setSearchQuery(text);

        if (text === "") {
            setResult([]);
        } else {

            const resultSymptoms = symptoms.filter(symptom => {
                return symptom.name.trim().toLowerCase().indexOf(text.toLowerCase()) !== -1;
            });

            setResult(resultSymptoms);
        }
    };

    const handleCloseModal = () => setModalVisible(false);

    const handleModalVisible = (symptom) => { 
        setSearchQuery("");
        setResult([]);
        setModalVisible(true);
        dispatch({ type: SELECT_SYMPTOM, payload: symptom });
    };

    return (
        <React.Fragment>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
            />
            <View style={styles.container}>
                <ModalBox isModalVisible={modalVisible} closeModal={handleCloseModal} />
                <View>
                    <Text style={styles.text}>What symptom do you noticed?</Text>
                    <TextInput 
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="e.g Nail Pain"
                        placeholderTextColor="#8c8e8f"
                        autoCapitalize="none"
                        returnKeyType="next"
                        keyboardType='default'
                        onChangeText={(text) => handleSearch(text)}
                        blurOnSubmit={false}
                        value={searchQuery}
                    />
                </View>
                <View style={styles.result}>
                    {
                        searchQuery !== "" && result.length === 0 ? <Text style={{
                            flex: 1, justifyContent: 'center',
                            alignItems: 'center',
                            fontFamily: 'Poppins', fontSize: 14
                        }}>
                            No Symptoms match.</Text>
                            : <CustomList symptoms={result} onSelectSymptom={handleModalVisible} />
                    }
                </View>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: "Poppins",
        paddingTop: 20,
        paddingHorizontal: 20
    },
    input: {
        borderRadius: 10,
        borderColor: "#cbcaca",
        borderWidth: 2,
        paddingVertical: 15,
        paddingHorizontal: 18,
        marginTop: 5,
        marginBottom: 10,
        fontFamily: "Poppins",
        fontSize: 14
    },
    text: {
        paddingBottom: 10,
        marginLeft: 5,
        color: "#000000",
        fontFamily: "PoppinsBold",
        fontSize: 19,
    },
    result: {
        paddingTop: 40,
        height: "100%",
        paddingBottom: 10
    },
    buttonClose: {
        backgroundColor: "#E7E7E7",
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        alignItems: "flex-end"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        }
      },
})
