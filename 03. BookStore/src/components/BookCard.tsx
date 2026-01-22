import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

const BookCard = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.coverImage}
                source={{ uri: 'https://m.media-amazon.com/images/I/81q77Q39nEL.jpg' }} />

            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Harry Potter</Text>
                <Text style={styles.author}>J.K. Rowling</Text>
                <Text style={styles.price}>$19.99</Text>
            </View>

            <View style={styles.editDeleteContainer}>
                <TouchableOpacity style={styles.circleButton}>
                    <AntDesign name="edit" size={24} color="blue" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.circleButton}>
                    <AntDesign name="delete" size={24} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BookCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .1,
        shadowRadius: 4,
        elevation: 3,
        margin: 10
    },
    coverImage: {
        height: 120,
        width: "25%",
        borderRadius: 8,
        resizeMode: "stretch",
    },
    detailsContainer: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 10
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000"
    },
    author: {
        fontSize: 14,
        color: "#888",
        marginVertical: 3
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#25a"
    },
    editDeleteContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    circleButton: {
        height: 35,
        width: 35,
        borderRadius: 15,
        backgroundColor: "#eee",
        justifyContent: "center",
        alignItems: "center",

    },
});