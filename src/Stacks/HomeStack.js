import React from 'react'
import { Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WomenCategory from "../components/Womencategory/WomensScreen"
import HomeScreen from "../components/HomeComponent"
import MenCategory from "../components/Mencategory/MensScreen"
const RootStack = () => {
    const Stack = createNativeStackNavigator()
    return (

        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="WomenCategory"
                component={WomenCategory}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="MenCategory"
                component={MenCategory}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default RootStack