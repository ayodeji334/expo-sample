import React from 'react'
import { 
    View, 
    Modal, 
    StyleSheet,
    ScrollView
} from 'react-native';
import { Context } from '../config/Context';
import ResultDetail from './ResultDetail';
import { SyncLoading } from './SyncLoading';

export default function ModalBox({ isModalVisible, closeModal }) {
    const { state } = React.useContext(Context);
    const symptom = state.selectedSymptom;
    const [isLoading, setLoading] = React.useState(false);

    React.useEffect(() => {
       let subscribe = true;

        const getNoData =  async () => {
            setLoading(true);

            try {
                const data = await new Promise((resolve, reject) => {
                    setTimeout(() => {
                      resolve(true);
                    }, 7000);
                });

                if(data && subscribe){
                    setLoading(false);
                }

            } catch (e) {
                console.warn(e);
            }
        }

        getNoData()

        return () => subscribe = false;

    }, [isModalVisible]);
    
    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {}}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ScrollView>
                            <View style={styles.detailContainer}> 
                                {
                                    isLoading ? (
                                        <SyncLoading />
                                    ) : (
                                       <ResultDetail symptom={symptom} closeModal={closeModal} />
                                    )
                                }
                            </View>
                        </ScrollView>  
                    </View>
                </View>    
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: "Poppins",
        paddingHorizontal: 20
    },
    detailContainer: {
        flex: 1,
        height: '100%',
        width: "100%",
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    text: {
        paddingBottom: 10,
        marginLeft: 5,
        color: "#000000",
        fontFamily: "Poppins",
        fontSize: 17,
    },
    result: {
        paddingTop: 40,
        height: "100%",
        paddingBottom: 10
    },
    centeredView: {
        flex: 1,
        marginTop: 22,
        display: "flex",
        justifyContent: "center",
        height: "100%",
        backgroundColor: "#fff"
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        paddingTop: 30,
        paddingHorizontal: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
})



