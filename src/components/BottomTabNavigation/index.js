import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../HomeComponent/index";
import HomeStack from "../../Stacks/HomeStack"
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Index = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName='HomeStack'
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "gray",
                    height: 50,
                    margin: 20,
                    borderRadius: 30,
                    // paddingBottom: 10, // Add padding to center the icons vertically
                },
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "white",
                tabBarShowLabel: false, // Hide the label for all tabs
                tabBarIconStyle: {
                    alignSelf: "center", // Center the icon
                },
            }}
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    unmountOnBlur: true,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="search" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="hand-holding-heart" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="me"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    unmountOnBlur: true,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="hand-holding-heart" color={color} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Index;
