import { StyleSheet, View } from "react-native"
import { s } from "react-native-size-matters";
import { ReactNode } from "react";

type SocialCircleProps = {
    icon: ReactNode;
};

function SocialCircle({ icon }: SocialCircleProps) {
    return (
        <View style={styles.socialCircle}>
          {icon}
        </View>
    )
}

export default SocialCircle;

const styles = StyleSheet.create({
    socialCircle: {
        width: s(46),
        height: s(46),
        borderRadius: s(23),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: s(1),
        borderColor: '#E4E6E8',
        backgroundColor: '#F5F5FA',
        color: "#178AD9"
    }
})