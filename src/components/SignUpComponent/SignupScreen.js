import {
    Image,
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
        <ScrollView>
      <View>
        <View style={styles.Applogo}>
          <Image style={{width:200,height:100}}
          source={IMAGES.logo2} />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
          />
          <TextInput
            style={styles.input}
            placeholder="Email or Phone Number"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
          />
        </View>
        <View>
        </View>
            <TouchableOpacity style={styles.LogInBtn}>
                <Text style={styles.loginText}>Become Veloza</Text>
            </TouchableOpacity>
            <View style={{alignSelf:'center',marginTop:3}}>
                <TouchableOpacity>
                <Text>
                    Already have an account-Log in
                </Text>
                </TouchableOpacity>
            </View>
       </View>
       <View style={styles.tagline}>
        <Image style={{width:200,height:100}}
          source={IMAGES.tagline} />
          </View>
       </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    Applogo: {
      alignItems: 'center',
      marginTop: 210,
      alignItems:'center'
      // marginBottom:10,
    },
    input: {
    //   borderWidth:0.2,
      backgroundColor: '#FAFAFA',
      height: 47,
      marginHorizontal: 14,
      marginVertical: 7,
      borderRadius: 30,
      paddingLeft: 10,
    },

    LogInBtn:{
        height:50,
        width:410,
        backgroundColor:'#000000',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        alignSelf:'center',
        marginVertical:19,
    },
    loginText:{
        color:'#ffffff'
    },
    tagline:{
      alignItems:'center',
      marginTop:210,
    },

  });
  