import { StyleSheet, View, SafeAreaView, ScrollView, FlatList, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Header from "../HeaderComponent/index";
import ImageSlider from '../Shared/ProductComponent/ImageSlider';
import Carousel from 'react-native-reanimated-carousel';

export default function Index({ navigation }) {
    const menImages = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgnAIOkdlCUX96DB3vNyVPc53D1HLw-tjMA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2K1mgOB94P-gcFWaKhUceqqIWw2RJyQDqQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGrSvlJOUNG0XigPHGDR2PmYTUUqMrQN-Wlw&s"];

    const womenImages = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMsrQB6mB-GIIPzPG7OLX7_rBNFkR_hHzrg&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGf6PeLAoq1sRzpQ---0ptYE4N31p1P8tGfQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQoJl9r5KaZpIYw3cEB2YdeWnNKvZxXviNQ&s"];

    const images = [
        "https://static.vecteezy.com/system/resources/previews/014/414/661/non_2x/nike-swoosh-logo-on-transparent-background-free-vector.jpg",
        "https://i.pinimg.com/originals/02/17/84/021784071cf7eda82df43ae40c84df58.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCjnZQWP06eRzlHXuS2ksxe3U1r_g7Y7U82g&s",
        "https://static.vecteezy.com/system/resources/previews/014/414/661/non_2x/nike-swoosh-logo-on-transparent-background-free-vector.jpg",
        "https://i.pinimg.com/originals/02/17/84/021784071cf7eda82df43ae40c84df58.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCjnZQWP06eRzlHXuS2ksxe3U1r_g7Y7U82g&s",
        "https://static.vecteezy.com/system/resources/previews/014/414/661/non_2x/nike-swoosh-logo-on-transparent-background-free-vector.jpg",
        "https://i.pinimg.com/originals/02/17/84/021784071cf7eda82df43ae40c84df58.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCjnZQWP06eRzlHXuS2ksxe3U1r_g7Y7U82g&s"
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("BrandSection")}>
            <View style={styles.logoContainer}>
                <Image source={{ uri: item }}
                    style={styles.logoImage}
                    resizeMode='cover' />
            </View>
        </TouchableOpacity>
    );

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
                    <FlatList
                        data={images}
                        renderItem={renderItem}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={styles.imageList}
                    />
                    <View style={styles.scrollViewContent}>
                        {/* Men ImageSlider with TouchableOpacity */}
                        <View style={styles.sliderContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate("MenCategory")}>
                                <Carousel
                                loop
                                width={200}
                                height={300}
                                autoPlay={true}
                                data={menImages}
                                scrollAnimationDuration={1000}
                                // onSnapToItem={(index) => console.log('current index:', index)}
                                renderItem={({ index }) => (
                                    <View
                                        style={{
                                            flex: 1,
                                            // borderWidth: 1,
                                        }}
                                    >
                                        <ImageBackground
                                            source={{ uri: menImages[index] }}
                                            style={{ flex: 1 }}
                                            resizeMode="contain"
                                        />
                                    </View>
                                )}
                            />
                            </TouchableOpacity>

           
                            {/* <ImageSlider images={menImages} /> */}
                        </View>
                        {/* Women ImageSlider with TouchableOpacity */}
                        <View style={styles.sliderContainer}>
                            
                            <TouchableOpacity onPress={() => navigation.navigate("WomenCategory")}>
                            <Carousel
                                loop
                                width={200}
                                height={300}
                                autoPlay={true}
                                data={womenImages}
                                scrollAnimationDuration={1000}
                                // onSnapToItem={(index) => console.log('current index:', index)}
                                renderItem={({ index }) => (
                                    <View
                                        style={{
                                            flex: 1,
                                            // borderWidth: 1,
                                        }}
                                    >
                                        <ImageBackground
                                            source={{ uri: womenImages[index] }}
                                            style={{ flex: 1 }}
                                            resizeMode="contain"
                                        />
                                    </View>
                                )}
                            />
                            </TouchableOpacity>
                      
                        </View>
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
        marginTop: -40,
        paddingTop: 30,
        gap: 20,
    },
    imageList: {
        marginHorizontal: 20,
    },
    scrollViewContent: {
        flexDirection: "row", // Display items in a row
        justifyContent: "space-between", // Add space between sliders
        alignItems: "center", // Align items vertically
        paddingHorizontal: 10,
        paddingBottom: 20,
        gap: 10,
    },
    sliderContainer: {
        flex: 1, // Take up equal space for both sliders
        marginHorizontal: 5,
    },
    logoContainer: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        height: 80,
        width: 80,
        marginRight: 10,
    },
    logoImage: {
        height: 70,
        width: 70,
        borderRadius: 100,
    },
    categoryText: {
        textAlign: "center",
        fontSize: 24,
        color: "black",
        marginBottom: 10,
        fontWeight: 'bold',
    },
});