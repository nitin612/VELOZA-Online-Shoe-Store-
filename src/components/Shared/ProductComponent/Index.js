import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const Index = ({ imageUrl }) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>Stock Title</Text>
                <Text style={styles.colors}>Colors Available</Text>
                <Text style={styles.price}>Price: Rs 1000</Text>
            </View>
        </View>
    );
};

export default Index;

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: 'hidden', // Ensures the shadow is visible with rounded corners
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'cover', // Ensures the image fills the width proportionally
    },
    textContainer: {
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    colors: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    price: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
    },
});
