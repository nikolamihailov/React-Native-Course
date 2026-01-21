import { StyleSheet, Text, View } from "react-native";
import SocialCircle from "./SocialCircle";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SendButton from "./SendButton";
import { s } from "react-native-size-matters";

function SocialSection() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Social Media Platforms</Text>

            <View style={styles.socialsContainer}>
                <View style={styles.socialContainer}>
                    <View style={styles.platformInfo}>
                        <SocialCircle icon={<AntDesign name="whats-app" size={24} color="#178AD9" />} />
                        <Text style={styles.platformName}>What's App</Text>
                    </View>
                    <SendButton />
                </View>
                <View style={styles.socialContainer}>
                    <View style={styles.platformInfo}>
                        <SocialCircle icon={<AntDesign name="twitter" size={24} color="#178AD9" />} />
                        <Text style={styles.platformName}>Twitter</Text>
                    </View>
                    <SendButton />
                </View>
                <View style={styles.socialContainer}>
                    <View style={styles.platformInfo}>
                        <SocialCircle icon={<AntDesign name="instagram" size={24} color="#178AD9" />} />
                        <Text style={styles.platformName}>Instagram</Text>
                    </View>
                    <SendButton />
                </View>
                <View style={styles.socialContainer}>
                    <View style={styles.platformInfo}>
                        <SocialCircle icon={<FontAwesome name="snapchat-ghost" size={24} color="#178AD9" />} />
                        <Text style={styles.platformName}>Snapchat</Text>
                    </View>
                    <SendButton />
                </View>
                <View style={styles.socialContainer}>
                    <View style={styles.platformInfo}>
                        <SocialCircle icon={<AntDesign name="tik-tok" size={24} color="#178AD9" />} />
                        <Text style={styles.platformName}>TikTok</Text>
                    </View>
                    <SendButton />
                </View>
            </View>
        </View>
    )
}

export default SocialSection;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F5FA",
        paddingVertical: s(32),
        paddingHorizontal: s(24),
        borderRadius: s(14),
    },
    heading: {
        fontSize: s(16),
        fontWeight: '600',
        lineHeight: s(24),
        color: "#000000",
        marginBottom: s(16),
    },
    socialsContainer: {
        flexDirection: 'column',
        gap: s(24),                                     
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: s(1),
        borderColor: '#E4E6E8',
        paddingBottom: s(12),
    },
    platformInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: s(16),
    },
    platformName: {
        fontSize: s(12),
        fontWeight: '500',
        lineHeight: s(18),
        color: "#8083A3",
    }
});
