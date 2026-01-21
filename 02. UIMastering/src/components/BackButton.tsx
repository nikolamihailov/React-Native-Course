import { StyleSheet, TouchableOpacity } from "react-native";
import { s } from "react-native-size-matters";
import Entypo from '@expo/vector-icons/Entypo';

function BackButton() {
    return (
        <TouchableOpacity style={styles.button}>
           <Entypo name="chevron-small-left" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default BackButton;

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: s(32),
        height: s(32),
        borderRadius: s(16),
        backgroundColor: "#ECF0F4"
    }
});

