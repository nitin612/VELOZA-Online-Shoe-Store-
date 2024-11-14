import { StyleSheet, Text, View,Dimensions,Image } from 'react-native' 

const Index = ({ imageUrl }) => {
    return (
        <View style={{ flexDirection: "row", display: "flex", gap: 20}}>
            <View style={styles.itemContainer}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>

        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden', // Ensures images fit within rounded corners
        backgroundColor: 'red', // Optional background color
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2 - 20, // Maintains square images in two columns
        resizeMode: 'contain', // Makes sure the image covers the whole area
    },
})