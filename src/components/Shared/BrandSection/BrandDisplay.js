import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

const BrandDisplay = ({navigation}) => {
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
      image: 'https://via.placeholder.com/100', // Placeholder image URL
    },
    {
      id: '2',
      title: 'Adidas Ultraboost',
      desc: 'Perfect for long runs',
      price: '$150',
      colors: ['Black', 'White'],
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '3',
      title: 'Puma Sneakers',
      desc: 'Stylish casual wear',
      price: '$100',
      colors: ['Green', 'Yellow'],
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '4',
      title: 'Reebok Classic',
      desc: 'Vintage design',
      price: '$90',
      colors: ['Brown', 'Gray'],
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '5',
      title: 'ASICS Gel-Kayano',
      desc: 'Best for stability',
      price: '$140',
      colors: ['Blue', 'Orange'],
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '6',
      title: 'New Balance 574',
      desc: 'Everyday comfort',
      price: '$110',
      colors: ['Gray', 'Navy'],
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '7',
      title: 'Under Armour HOVR',
      desc: 'High performance',
      price: '$130',
      colors: ['Black', 'Red'],
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '8',
      title: 'Vans Old Skool',
      desc: 'Iconic skate shoes',
      price: '$70',
      colors: ['Black', 'White'],
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '9',
      title: 'Converse Chuck Taylor',
      desc: 'Timeless classic',
      price: '$60',
      colors: ['White', 'Black'],
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '10',
      title: 'Hoka One One',
      desc: 'Ultra-cushioned',
      price: '$160',
      colors: ['Pink', 'Blue'],
      image: 'https://via.placeholder.com/100',
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
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
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.pop()}>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        {searchVisible ? (
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
          />
        ) : (
          <Text style={styles.heading}>BrandDisplay</Text>
        )}
        <TouchableOpacity onPress={() => setSearchVisible(!searchVisible)}>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Items Grid */}
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display 2 items in a row
        contentContainerStyle={styles.itemsContainer}
      />
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
    paddingVertical:8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  backButton: {
    fontSize: 28,
    color: '#333',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginHorizontal: 8,
  },
  searchIcon: {
    fontSize: 24,
    color: '#333',
  },
  itemsContainer: {
    paddingBottom: 10,
  },
  item: {
    flex: 1,
    margin: 10,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  itemImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
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
