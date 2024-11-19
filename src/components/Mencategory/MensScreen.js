import { FlatList, StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import ProductDetails from '../Shared/ProductComponent/Index';
import Header from "../HeaderComponent";

const Index = () => {
    const data = [
        { id: '1', imageUrl: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/26257134/2024/3/27/f8644fb7-816c-4036-b13c-c4edc73f362c1711539349242-Red-Tape-Women-Mesh-Walking-Shoes-4961711539348840-1.jpg' },
        { id: '2', imageUrl: 'https://images.meesho.com/images/products/350617217/7dlka_512.jpg' },
        { id: '3', imageUrl: 'https://redtape.com/cdn/shop/files/RSL0418A_1.jpg?v=1726207779' },
        { id: '4', imageUrl: 'https://media.gq.com/photos/660d999c55c59876ea540df1/4:3/pass/expensive-sneakers.jpg' },
        { id: '5', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/10/351213810/KG/OH/GP/39807035/7-1800-black-white-shoes-waan-black-white-original-imagsz57knv7zdfg-500x500.jpg' },
    ];

    const renderItem = ({ item }) => <ProductDetails imageUrl={item.imageUrl} />;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header />
            <Text style={styles.mainTitle}>Men's Collection</Text>
            {['Casual Wear', 'Loafers', 'Sports Wear', 'Slippers'].map((category, index) => (
                <View key={index} style={styles.categoryContainer}>
                    <TouchableOpacity>
                        <Text style={styles.categoryTitle}>{category}</Text>
                    </TouchableOpacity>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.listContainer}
                    />
                </View>
            ))}
        </ScrollView>
    );
};

export default Index;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: '#f9f9f9',
    },
    mainTitle: {
        fontSize: 34,
        fontWeight: '800',
        color: '#333',
        marginBottom: 15,
        textAlign: 'center',
    },
    categoryContainer: {
        marginBottom: 20,
    },
    categoryTitle: {
        marginLeft: 5,
        fontSize: 28,
        fontWeight: '600',
        color: '#000',
        marginBottom: 10,
    },
    listContainer: {
        gap: 10,
        paddingLeft: 5,
    },
});
