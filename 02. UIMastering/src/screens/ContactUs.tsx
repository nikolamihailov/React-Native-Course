import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import SocialSection from "../components/SocialSection";


function ContactUs() {
    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.heading}>Contact Us</Text>
            <SocialSection />
        </View>
    )
}

export default ContactUs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    heading: {
        fontSize: 30,
        fontWeight: '600',
        lineHeight: 36,
        color: "#000000",
        marginBottom: 36,
    },
})