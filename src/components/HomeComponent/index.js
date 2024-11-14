import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import React from 'react';
import Header from "../HeaderComponent/index";

export default function Index({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Top half with ImageBackground */}
            <ImageBackground
                source={{ uri: "https://5.imimg.com/data5/SELLER/Default/2023/10/353027032/OS/TU/JH/89328219/1408-wht-10-500x500.jpg" }}
                style={styles.imageBackground}
                resizeMode="cover"
            >
                <Header />
            </ImageBackground>

            {/* Bottom half with ScrollView */}
            <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
                <TouchableOpacity onPress={() => { navigation.navigate("MenCategory") }}>
                    <View style={styles.categoryCard}>
                        <Text style={styles.categoryText}>MEN</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("WomenCategory")}>
                    <View style={styles.categoryCard}>
                        <Text style={styles.categoryText}>WOMEN</Text>
                    </View>
                </TouchableOpacity>
                {/* Add more items here as needed */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1.7, // Covers top part of the screen
        justifyContent: "flex-start",
    },
    scrollView: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: -40, // Overlaps the ScrollView slightly over the ImageBackground
        paddingTop: 30,
    },
    scrollViewContent: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 20,
        justifyContent: "center",
    },
    categoryCard: {
        backgroundColor: "gray",
        height: 250,
        width: 170,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    categoryText: {
        textAlign: "center",
        fontSize: 34,
        color: "white",
    },
});
