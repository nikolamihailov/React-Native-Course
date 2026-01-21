import { Image, StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";

function UserAvatar() {
    return (
        <Image
            style={styles.avatar}
            source={{ uri: "https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/user-244.png" }}
        />
    )
}

export default UserAvatar;

const styles = StyleSheet.create({
    avatar: {
        width: s(32),
        height: vs(32),
        borderRadius: 50,
    }
});



