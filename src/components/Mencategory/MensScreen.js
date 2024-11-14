import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import ProductDetails from '../Shared/ProductComponent/Index'; // Ensure capitalization of the component

const Index = () => {
    const data = [
        { id: '1', imageUrl: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/26257134/2024/3/27/f8644fb7-816c-4036-b13c-c4edc73f362c1711539349242-Red-Tape-Women-Mesh-Walking-Shoes-4961711539348840-1.jpg' },
        { id: '2', imageUrl: 'https://example.com/shoe2.jpg' },
        { id: '3', imageUrl: 'https://example.com/shoe3.jpg' },
        { id: '4', imageUrl: 'https://example.com/shoe4.jpg' },
        { id: '5', imageUrl: 'https://example.com/shoe5.jpg' },
        // Add more items as needed
    ];

    const renderItem = ({ item }) => <ProductDetails imageUrl={item.imageUrl} />;

    return (
        <View style={{ justifyContent: "center", padding: 20 }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id} // Corrected keyExtractor
                numColumns={2} // Display two items in each row
                columnWrapperStyle={styles.row} // Styles the row
            />
        </View>
    );
};

export default Index;

const styles = StyleSheet.create({
   
});
