import { StyleSheet, View } from "react-native";
import BackButton from "./BackButton";
import UserAvatar from "./UserAvatar";

function Header() {
    return (
        <View style={styles.container}>
            <BackButton />
            <UserAvatar />
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
    }
})
