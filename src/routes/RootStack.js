import React from 'react'
import { Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTab from "../components/BottomTabNavigation/index"
import HomeScreen from "../components/HomeComponent"
import WomenCategory from "../components/Womencategory/WomensScreen"
import MenCategory from "../components/Mencategory/MensScreen"
const RootStack = () => {
    const Stack = createNativeStackNavigator()
    return (

        <Stack.Navigator initialRouteName='BottomTab'>
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
            />
            <Stack.Screen
                name="MenCategory"
                component={MenCategory}
            />

            <Stack.Screen
                name="BottomTab"
                component={BottomTab}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}

export default RootStack