/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import Header from "./src/components/HeaderComponent"
import RootStack from './src/routes/RootStack'
import BottomTab from "./src/components/BottomTabNavigation"
import { enableScreens } from 'react-native-screens';
enableScreens();
import { NavigationContainer } from '@react-navigation/native'


function App(): React.JSX.Element {


  return (
    <NavigationContainer>
      {/* <Text>fdasfcsdaff</Text> */}
      {/* <Header /> */}
      {/* <BottomTab /> */}
      <RootStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
