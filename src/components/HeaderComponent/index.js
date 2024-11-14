import React from 'react'
import { View, StyleSheet, Text } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import SearchIcon from "react-native-vector-icons/FontAwesome"
const index = () => {
    return (
        <View style={styles.Container}>
            <Icon name="menu" size={32} color={"white"} />
            <Text style={{ fontSize: 24 }}>Application</Text>
            <View style={styles.sectionContainer}>
                <SearchIcon name="search" size={28} color={"white"} />
                <Icon name="bag-handle" size={32} color={"white"} />
            </View>
        </View>)
}
const styles = StyleSheet.create({
    Container: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between"
    },
    sectionContainer: {
        flexDirection: "row",
        gap: 10
    }

});

export default index;