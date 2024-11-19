import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from "../../Stacks/HomeStack";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import UserProfile from '../UserProfileCompponent/UserProfile';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Cart from '../CartComponent/Cart';
import Explore from '../ExploreComponent/Explore';

const Index = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: '#999999',
                tabBarStyle: {
                    backgroundColor: '#343A40',
                    borderTopWidth: 0,
                    height: 65,
                    marginBottom: 18,
                    borderRadius: 50,
                    position: 'absolute',
                    marginHorizontal: 20,
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,
                    elevation: 12,
                },
                tabBarLabelStyle: { fontSize: 12 },
                tabBarIconStyle: { alignItems: 'center', justifyContent: 'center' },
                tabBarItemStyle: { margin: 12 },
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = 'home';
                            return (
                                <View style={[styles.iconContainer, focused && styles.activeIcon]}>
                                    <Ionicons name={iconName} size={size || 24} color={focused ? color : '#999999'} />
                                </View>
                            );
                        case 'explore':
                            iconName = 'explore';
                            return (
                                <View style={[styles.iconContainer, focused && styles.activeIcon]}>
                                    <MaterialIcons name={iconName} size={size || 24} color={focused ? color : '#999999'} />
                                </View>
                            );
                        case 'Cart':
                            iconName = 'bag-shopping';
                            return (
                                <View style={[styles.iconContainer, focused && styles.activeIcon]}>
                                    <FontAwesome6 name={iconName} size={size || 24} color={focused ? color : '#999999'} />
                                </View>
                            );
                        case 'Profile':
                            iconName = 'user';
                            return (
                                <View style={[styles.iconContainer, focused && styles.activeIcon]}>
                                    <FontAwesome name={iconName} size={size || 24} color={focused ? color : '#999999'} />
                                </View>
                            );
                        default:
                            return null;
                    }
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="explore"
                component={Explore}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={UserProfile}
                options={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
};

export default Index;

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    activeIcon: {
        backgroundColor: '#ffffff',
    },
});
