import React from 'react'
import { View, StyleSheet, Text } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import SearchIcon from "react-native-vector-icons/FontAwesome"
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
const index = () => {
    return (
        <>
            <View style={styles.Container}>
                <Icon name="menu" size={32} color={"#ffffff"} />
                <Text style={{ color: '#ffffff', fontSize: 35, fontWeight: '500',marginLeft:36}}> VELOZA</Text>
                <View style={styles.sectionContainer}>
                    <SearchIcon name="search" size={28} color={"#ffffff"} />
                    <FontAwesome6 name="heart" size={28} color={"#ffffff"} />
                </View>
            </View>
            <View style={{alignItems: 'center', marginTop: -12
            }}>
                <Text style={{ color: '#ffffff', fontSize: 10 ,marginLeft:23}}>
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
        justifyContent: "space-between",
        // backgroundColor:'red'
    },
    sectionContainer: {
        flexDirection: "row",
        gap:2
    }

});

export default index;