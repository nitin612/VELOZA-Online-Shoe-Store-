import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView, FlatList, Image, SafeAreaView } from 'react-native';
import React from 'react';
import Header from "../HeaderComponent/index";

export default function Index({ navigation }) {
    const images = [
        "https://static.vecteezy.com/system/resources/previews/014/414/661/non_2x/nike-swoosh-logo-on-transparent-background-free-vector.jpg",
        "https://i.pinimg.com/originals/02/17/84/021784071cf7eda82df43ae40c84df58.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCjnZQWP06eRzlHXuS2ksxe3U1r_g7Y7U82g&s",
        "https://static.vecteezy.com/system/resources/previews/014/414/661/non_2x/nike-swoosh-logo-on-transparent-background-free-vector.jpg",
        "https://i.pinimg.com/originals/02/17/84/021784071cf7eda82df43ae40c84df58.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCjnZQWP06eRzlHXuS2ksxe3U1r_g7Y7U82g&s",
        "https://static.vecteezy.com/system/resources/previews/014/414/661/non_2x/nike-swoosh-logo-on-transparent-background-free-vector.jpg",
        "https://i.pinimg.com/originals/02/17/84/021784071cf7eda82df43ae40c84df58.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCjnZQWP06eRzlHXuS2ksxe3U1r_g7Y7U82g&s",
        "https://www.shutterstock.com/shutterstock/photos/2277477743/display_1500/stock-vector-shoes-company-logo-design-inspirations-2277477743.jpg"];

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("BrandSection")}>
            <View style={{ borderRadius: 50, alignItems: "center", justifyContent: "center", borderWidth: 1, height: 80, width: 80, marginRight: 10 }} >
                <Image source={{ uri: item }}
                    style={{ height: 70, width: 70, borderRadius: 100 }}
                    resizeMode="cover" />
            </View>
        </TouchableOpacity>

    )
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView>
            <ImageBackground
                source={{ uri: "https://images.unsplash.com/photo-1509442233604-131901ff8d40?q=80&w=2432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
                style={styles.imageBackground}
                resizeMode="cover"
            >
                <Header />
            </ImageBackground>

            <View style={styles.scrollView}>
                <FlatList data={images}
                    renderItem={renderItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginHorizontal: 20 }}
                />
                <View style={styles.scrollViewContent}>
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
                </View>
            </View>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        height: 460,
    },
    scrollView: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -40, // Overlaps the ScrollView slightly over the ImageBackground
        paddingTop: 30,
        gap: 20
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
        width: 180,
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
