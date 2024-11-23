import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import React from 'react';
import Header from "../HeaderComponent";
import ProductDetails from '../Shared/ProductComponent/Index';

const Index = () => {
    const data = [
        { id: '1', imageUrl: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/26257134/2024/3/27/f8644fb7-816c-4036-b13c-c4edc73f362c1711539349242-Red-Tape-Women-Mesh-Walking-Shoes-4961711539348840-1.jpg' },
        { id: '2', imageUrl: 'https://img.tatacliq.com/images/i13/437Wx649H/MP000000019435259_437Wx649H_202309270611461.jpeg' },
        { id: '3', imageUrl: 'https://redtape.com/cdn/shop/files/RSL0418A_1.jpg?v=1726207779' },
        { id: '4', imageUrl: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/25245810/2023/9/29/e453ed6c-c031-4906-b64e-051bcbe539681695968954330DressBerryWomenBeigeEmbellishedEthnicMuleswithBucklesFlats1.jpg" },
        { id: '5', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/10/351213810/KG/OH/GP/39807035/7-1800-black-white-shoes-waan-black-white-original-imagsz57knv7zdfg-500x500.jpg' },
    ];

    const renderItem = ({ item }) => <ProductDetails imageUrl={item.imageUrl} />;

    return (
        <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.mainTitle}>Women's Collection</Text>
            <View style={{ borderBottomWidth: 0.2,borderBottomColor: 'grey' }} />
            {['Flats', 'Heels', 'Sandals', 'Slipper'].map((category, index) => (
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
        </SafeAreaView>
    );
};

export default Index;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fafafa', // A softer background color for better contrast
    },
    mainTitle: {
        fontSize: 34,
        fontWeight: '700',
        color: '#222',
        textAlign: 'center',
        marginBottom: 8,
    },
    categoryContainer: {
        marginBottom: 25,
    },
    categoryTitle: {
        fontSize: 28,
        fontWeight: '600',
        color: '#000',
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    listContainer: {
        gap: 15, // Spacing between the list items
        paddingLeft: 10, // Adds padding at the start of the horizontal list
    },
});
