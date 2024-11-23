import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from "react-native-vector-icons/Feather";

const BrandDisplay = ({ navigation }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  // Sample data for the items
  const items = [
    {
      id: '1',
      title: 'Nike Air Max',
      desc: 'Comfortable running shoes',
      price: '$120',
      colors: ['Red', 'Blue'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMsrQB6mB-GIIPzPG7OLX7_rBNFkR_hHzrg&s', // Placeholder image URL
    },
    {
      id: '2',
      title: 'Adidas Ultraboost',
      desc: 'Perfect for long runs',
      price: '$150',
      colors: ['Black', 'White'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJkMmZ9zkybOQ5qEw7w8lmKhmNyTF9ql0BA&s',
    },
    {
      id: '3',
      title: 'Puma Sneakers',
      desc: 'Stylish casual wear',
      price: '$100',
      colors: ['Green', 'Yellow'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQoJl9r5KaZpIYw3cEB2YdeWnNKvZxXviNQ&s',
    },
    {
      id: '4',
      title: 'Reebok Classic',
      desc: 'Vintage design',
      price: '$90',
      colors: ['Brown', 'Gray'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2K1mgOB94P-gcFWaKhUceqqIWw2RJyQDqQ&s',
    },
    {
      id: '5',
      title: 'ASICS Gel-Kayano',
      desc: 'Best for stability',
      price: '$140',
      colors: ['Blue', 'Orange'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaKg2N9MtSz4sXDF8sqeYh0PceaYbshWbx-A&s',
    },
    {
      id: '6',
      title: 'New Balance 574',
      desc: 'Everyday comfort',
      price: '$110',
      colors: ['Gray', 'Navy'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGrSvlJOUNG0XigPHGDR2PmYTUUqMrQN-Wlw&s',
    },
    {
      id: '7',
      title: 'Under Armour HOVR',
      desc: 'High performance',
      price: '$130',
      colors: ['Black', 'Red'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgnAIOkdlCUX96DB3vNyVPc53D1HLw-tjMA&s',
    },
    {
      id: '8',
      title: 'Vans Old Skool',
      desc: 'Iconic skate shoes',
      price: '$70',
      colors: ['Black', 'White'],
      image: 'data:image/jpeg;base64,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',
    },
    {
      id: '9',
      title: 'Converse Chuck Taylor',
      desc: 'Timeless classic',
      price: '$60',
      colors: ['White', 'Black'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgootnyQX-3Q6BIH1JUcWxgTSs06lgK81a7w&s',
    },
    {
      id: '10',
      title: 'Hoka One One',
      desc: 'Ultra-cushioned',
      price: '$160',
      colors: ['Pink', 'Blue'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGf6PeLAoq1sRzpQ---0ptYE4N31p1P8tGfQ&s',
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.itemImage}  resizeMode='cover'/>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDesc}>{item.desc}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <Text style={styles.itemColors}>
        Colors: {item.colors.join(', ')}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>

          <View style={styles.header}>
            {/* <TouchableOpacity onPress={() => navigation.pop()}>
              <Text style={styles.backButton}>{'<'}</Text>
            </TouchableOpacity> */}
            {searchVisible ? (
              <TextInput
                style={styles.searchBar}
                placeholder="Search..."
                value={searchText}
                onChangeText={setSearchText}
              />
            ) : (
              <Text style={styles.heading}>VELOZA</Text>
            )}
            <TouchableOpacity onPress={() => setSearchVisible(!searchVisible)}>
              <Feather name='search' size={28}></Feather>
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom:5,borderBottomWidth: 0.2, borderBottomColor: 'grey' }} />

  
          <FlatList
          style={{height:"88%"}}
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2} // Display 2 items in a row
            contentContainerStyle={styles.itemsContainer}
          />

      </SafeAreaView>
    </View>  
  );
};

export default BrandDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  header: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginHorizontal:6,

  },
  // backButton: {
  //   fontSize: 28,
  //   color: '#333',
  // },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    paddingHorizontal: 8,
    marginHorizontal: 8,
  },
  itemsContainer: {
    paddingBottom: 10,
  },
  item: {
    flex: 1,
    margin: 7,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  itemImage: {
    width: 160,
    height: 170,
    borderRadius: 15,
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  itemDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  itemColors: {
    fontSize: 12,
    color: '#888',
  },
});
