import { View, StyleSheet } from "react-native"
import FoodLogo from "../../assets/FoodLogos";
import EclipseImage from "../../assets/EclipseImage";

function InfoScreen() {
    return (
        <View style={styles.container}>
            <FoodLogo />
            <EclipseImage style={styles.eclImage} /> 
        </View>
    )
}

export default InfoScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    eclImage: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    }
});
