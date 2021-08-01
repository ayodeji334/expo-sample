import * as React from 'react';
import { 
    StyleSheet,
    View, 
    Text, 
    TouchableOpacity,
    Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function ResultDetail({ symptom, closeModal }) {
    return (
        <View>
            <View style={{
                flex: 1, 
                display: "flex", 
                justifyContent: "center", 
                paddingVertical: 50
            }}>
                <Image source={require('../assets/check_doc.png')} style={styles.image}/>
                <Text style={styles.title}>Result</Text>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
            </View>

            <View style={{ paddingTop: 60}}>
                <Text style={styles.title}>Causes</Text>
                <Text style={styles.text}>
                    This symptom is as a result of lack of {symptom.type}. 
                    Which means you don't have the adequate amount 
                    of {symptom.type} need by your body.
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    consequat semper viverra nam libero justo laoreet sit. Mauris 
                    augue neque gravida in fermentum et sollicitudin ac. At in tellus 
                    integer feugiat scelerisque varius. Adipiscing commodo elit at 
                    imperdiet dui accumsan. Dui sapien eget mi proin sed libero enim 
                    sed faucibus. Hac habitasse platea dictumst quisque sagittis purus 
                    sit. Nullam ac tortor vitae purus faucibus. Blandit volutpat maecenas 
                    volutpat blandit aliquam. Fusce ut placerat orci nulla pellentesque.
                    Aliquam ut porttitor leo a diam sollicitudin tempor. Non odio euismod 
                    lacinia at quis risus sed vulputate odio. Nisl suscipit adipiscing 
                    bibendum est ultricies integer quis auctor. Lorem sed risus ultricies 
                </Text>
                <Text style={styles.text}>{symptom.details}</Text>
                <Text style={styles.title}>Solution</Text>
                <Text style={styles.text}>{symptom.solution}</Text>
            </View>

            <View style={{
                padding: 15, 
                display: "flex",
                justifyContent: "flex-end", 
                alignItems: "flex-end"
            }}>
                <TouchableOpacity
                    activeOpacity={0.8} 
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => closeModal()}
                >
                    <Ionicons name="arrow-back" size={24} color="white" />
                    <Text style={{color: "#fff", fontFamily: "PoppinsBold", paddingLeft: 10}}>
                        Go Back
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: "#000",
        fontFamily: "PoppinsBold",
        fontSize: 20,
        paddingVertical: 18,
        textAlign: "left",
    },
    text: {
        paddingBottom: 10,
        marginLeft: 5,
        color: "#000000",
        fontFamily: "Poppins"
    },
    image: {
        resizeMode: "cover",
        width: "100%",
        maxWidth: 400,
        height: "100%",
        paddingVertical: 50,
        marginVertical: 30
    },
    buttonClose: {
        backgroundColor: "#dc143c",
        borderRadius: 30,
        paddingVertical: 18,
        elevation: 2,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
    },
})
