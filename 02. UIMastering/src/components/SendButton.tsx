import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { s } from "react-native-size-matters";
import Feather from '@expo/vector-icons/Feather';

function SendButton() {
    return (
        <TouchableOpacity style={styles.sendButton}>
           <Feather name="send" size={24} color="white" />
        </TouchableOpacity>
    )
}

export default SendButton;

const styles = StyleSheet.create({
    sendButton: {
        width: s(46),
        height: s(46),
        borderRadius: s(23),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1077af',
    }
})