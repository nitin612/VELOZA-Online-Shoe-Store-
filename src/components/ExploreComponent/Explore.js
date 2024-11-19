import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from "../HeaderComponent"

export default function Explore() {
  const images = [
    {
      id: 1,
      uri: 'https://via.placeholder.com/300',
      title: 'Beautiful Landscape',
    },
    {
      id: 2,
      uri: 'https://via.placeholder.com/300',
      title: 'City Skyline',
    },
    {
      id: 3,
      uri: 'https://via.placeholder.com/300',
      title: 'Mountain View',
    },
    {
      id: 4,
      uri: 'https://via.placeholder.com/300',
      title: 'Sunny Beach',
    },
  ];

  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {images.map((image) => (
          <View key={image.id} style={styles.imageWrapper}>
            <ImageBackground source={{ uri: image.uri }} style={styles.image}>
              <TouchableOpacity style={styles.heartIcon}>
                <Icon name="hearto" size={24} color="#fff" />
              </TouchableOpacity>
              {/* <LinearGradient
                colors={['transparent', 'rgba(0, 0, 0, 0.7)']}
                style={styles.gradient}
              >
                <Text style={styles.title}>{image.title}</Text>
              </LinearGradient> */}
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  scrollContainer: {
    paddingHorizontal: 16,
  },
  imageWrapper: {
    marginHorizontal: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: 350,
    height: "100%",
    // justifyContent: 'flex-end',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
    borderRadius: 20,
  },
  gradient: {
    height: 80,
    justifyContent: 'flex-end',
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
