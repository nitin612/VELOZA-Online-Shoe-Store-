import React from 'react'
import { View, StyleSheet, Text } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import SearchIcon from "react-native-vector-icons/FontAwesome"
import FontAwesome from "react-native-vector-icons/FontAwesome";
const index = () => {
    return (
        <>
            <View style={styles.Container}>
                <Icon name="menu" size={32} color={"gray"} />
                <Text style={{ color: 'gray', fontSize: 35, fontWeight: '500' }}> VELOZA</Text>
                <View style={styles.sectionContainer}>
                    <SearchIcon name="search" size={28} color={"gray"} />
                </View>
            </View>
            <View style={{
                alignItems: 'center', marginTop: -12, marginLeft: 15
            }}>
                <Text style={{ color: 'gray', fontSize: 10 }}>
                    Elevate Every Step
                </Text>
            </View>
        </>
    )
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