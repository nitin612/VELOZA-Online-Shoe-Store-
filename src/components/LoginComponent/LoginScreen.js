import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IMAGES } from '../../utils/Images';

export default function Login() {
  return (
    <ImageBackground
      source={IMAGES.backGround}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.Applogo}>
            <Image
              style={{ width: 200, height: 80 }}
              source={IMAGES.logo3}
            />
          </View>
          <View style={styles.inputBack}>
            <TextInput
              style={styles.input}
              placeholder="Phone number or email"
            />
          </View>
          <View style={styles.inputBack}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.forget}>
              <Text style={{ color: '#fff', fontWeight: '500' }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.LogInBtn}>
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>
          <View style={{ alignSelf: 'center', marginTop: 3 }}>
            <TouchableOpacity>
              <Text style={{ color: '#fff' }}>
                Don't have an account? Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tagline}>
          <Image
            style={{ width: 200, height: 100 }}
            source={IMAGES.tagline2}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ensures the background image covers the entire screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  Applogo: {
    alignItems: 'center',
    marginTop: 270,
    marginBottom: 10,
  },
  inputBack: {
    height:48,
    marginHorizontal: 14,
    marginVertical: 7,
    borderRadius: 30,
    paddingLeft: 10,
    opacity: 0.5,
    backgroundColor:'#fff',
    justifyContent:'center',
  },
  input: { 
    paddingLeft: 10,
    opacity:1,
    color:'#000000',
    fontSize:16,
    fontWeight:'500'
  },
  forget: {
    alignItems: 'flex-end',
    marginHorizontal: 14,
    marginBottom: 6,
    marginTop: 4,
  },
  LogInBtn: {
    height: 50,
    width: 410,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    alignSelf: 'center',
    marginVertical: 8,
  },
  loginText: {
    color: '#ffffff',
  },
  tagline: {
    alignItems: 'center',
    marginTop: 275,
  },
});
