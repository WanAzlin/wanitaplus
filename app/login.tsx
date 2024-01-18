import { StyleSheet, Text, View,  Pressable, TextInput, Dimensions, Image } from 'react-native'
import React from 'react'
import { Link,  } from 'expo-router';
export default function login() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Welcome </Text>
      
      <TextInput  placeholder='Enter Name' style={styles.TextInput}/>
      <TextInput  placeholder='Password' style={styles.TextInput}/>
      <Link href="/sos" asChild>
        <Pressable>
             {({ pressed }) => (
              <View  style={styles.button}>
              <Text style={styles.title2}>Login</Text>
        </View> 
        )}
        </Pressable>
      </Link>
    </View>
  )
}
const width = Dimensions.get('window').width - 50;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
        justifyContent: 'center',
      },
     
      title: {
        fontSize: 30,
        fontWeight: 'bold',
       
        textAlign:'center',

       },
       title1: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 2,
        color: "#EF6E7A",
        left: 15,
       },
       TextInput: {
        borderWidth: 2,
        borderColor: "#EF6E7A",
        width,
        height: 50,
        borderRadius: 5,
        paddingLeft: 15,
        fontSize: 25,
        marginTop: 25,
        marginLeft: 20,
    },
    button: {
        borderColor:'#000000',
        backgroundColor: "#EF6E7A",
        borderRadius: 40,
        elevation: 5,
        width: 370,
        height: 50,
        marginTop: 20,
        alignItems: 'center',
        left: 10,
    },
    title2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#FFFFFF",
        
        marginTop: 13,
        alignItems: 'center',
       },
})