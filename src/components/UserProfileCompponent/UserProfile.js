import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IMAGES } from '../../utils/Images'

export default function UserProfile() {
    return (
        <ScrollView >
            <View style={{ marginTop: 58 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{width:150,height:50}}
                    source={IMAGES.logo2} />
                </View>
                <View style={{ borderBottomWidth: 0.2, marginTop: 6 }} />
                <Image
                    style={styles.ProfilePicture}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    }}
                />
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.UserName}>Jennefer Lopez</Text>
                </View>
                <View style={{ marginTop: 18 }}>

                    <TouchableOpacity><Text style={styles.Button}>Profile Details</Text></TouchableOpacity>
                    <View style={styles.lines} />
                    <TouchableOpacity><Text style={styles.Button}>My Orders</Text></TouchableOpacity>
                    <View style={styles.lines} />
                    <TouchableOpacity><Text style={styles.Button}>My Addreses</Text></TouchableOpacity>
                    <View style={styles.lines} />
                    <TouchableOpacity><Text style={styles.Button}>History</Text></TouchableOpacity>
                    <View style={styles.lines} />
                    <TouchableOpacity><Text style={styles.Button}>About Us</Text></TouchableOpacity>
                    <View style={styles.lines} />
                    <TouchableOpacity><Text style={styles.Button}>Terms and Conditions</Text></TouchableOpacity>
                    <View style={styles.lines} />
                    <TouchableOpacity><Text style={styles.Button}>Log Out</Text></TouchableOpacity>
                    <View style={styles.lines} />
                </View>
                <View style={styles.copyright}>
                    <Text>Copyright 2024 Velozza</Text>
                    <Text>All rights reserved</Text>
                </View>
                <View style={{ height: 95 }} />
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    ProfilePicture: {
        width: 220,
        height: 350,
        backgroundColor: 'white',
        borderRadius: 150,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    UserName: {
        fontSize: 40,
        fontWeight: '200',
    },
    lines: {
        borderBottomWidth: 0.5,
        marginHorizontal: 20,
        // borderBottomColor:'white'

    },
    Button: {
        fontSize: 25,
        marginHorizontal: 20,
        marginTop: 15,
        marginBottom: 5,
        fontWeight: '300',
        // color: 'white'
    },
    copyright: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },

})