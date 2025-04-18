import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

export default function Cart() {
    const renderItem = () => (
        <View>
            <View style={styles.Cards}>
                <View style={{ flexDirection: "row" }}>
                    <Image
                        style={styles.ProductImage}
                        source={{
                            uri: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        }}
                    />
                    <View style={styles.ProductDetails}>
                        <Text style={{ fontWeight: "700", fontSize: 20 }}>
                            DR CRZ Shoe
                        </Text>
                        <Text style={{ fontSize: 15, paddingVertical: 16 }}>
                            Size : M
                        </Text>
                        <Text style={{ fontWeight: "700", fontSize: 20 }}>
                            Price:1500
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons
                            style={styles.removeIcon}
                            name="remove-shopping-cart"
                            size={25}
                        />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        borderBottomWidth: 0.3,
                        borderBottomColor: "grey",
                        marginHorizontal: 10,
                    }}
                />
                <View>
                    <View style={styles.IncDec}>
                        <TouchableOpacity style={styles.minplus}>
                            <Text style={{ fontSize: 16 }}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16, color: "#ffffff" }}>1</Text>
                        <TouchableOpacity style={styles.minplus}>
                            <Text style={{ fontSize: 16 }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginHorizontal: 10,
                }}
            >
                <Text style={{ fontSize: 35, fontWeight: "500" }}>Cart</Text>
                <FontAwesome6 name="heart" size={28} color={"#000000"} />
            </View>
            <View
                style={{
                    borderBottomWidth: 0.2,
                    marginTop: 5,
                    borderBottomColor: "grey",
                }}
            />
            <FlatList contentContainerStyle={{ paddingBottom: 100 }}
                style={{ marginBottom: 20 }}
                data={[1, 2, 3, 4]}
                renderItem={renderItem}>

            </FlatList>
            <View style={styles.TotalCostBar}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginHorizontal: 6,
                    }}
                >
                    <View>
                        <Text style={{ fontSize: 15, color: "grey", marginLeft: 10 }}>
                            Estimate Total
                        </Text>
                        <Text
                            style={{
                                fontSize: 20,
                                marginLeft: 10,
                                marginTop: 6,
                                fontWeight: "500",
                            }}
                        >
                            Rs:2000
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.PayButton}>
                        <Text style={{ color: "#ffffff", fontSize: 15 }}>Check Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Cards: {
        height: 210,
        width: 410,
        backgroundColor: "#ffffff",
        alignSelf: "center",
        borderRadius: 20,
        marginVertical: 10,
    },
    ProductImage: {
        width: 125,
        height: 125,
        borderRadius: 25,
        marginLeft: 10,
        marginTop: 10,
        marginRight: 20,
        marginBottom: 15,
    },
    ProductDetails: {
        marginTop: 18,
    },
    removeIcon: {
        marginTop: 20,
        marginLeft: 90,
    },
    IncDec: {
        height: 38,
        width: 380,
        backgroundColor: "#000",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        alignItems: "center",
        paddingHorizontal: 11,
        marginTop: 8,
        borderRadius: 15,
    },
    PayButton: {
        height: 45,
        width: 100,
        backgroundColor: "#000000",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        marginRight: 10,
    },
    minplus: {
        height: 27,
        width: 40,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    TotalCostBar: {
        position: "absolute",
        bottom: 100,
        width: 415,
        height: 75,
        backgroundColor: "#ffffff",
        borderRadius: 20,
        alignSelf: "center",
        justifyContent: "center",
    },
});
