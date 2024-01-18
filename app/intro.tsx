import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Link,  } from 'expo-router';
export default function Intro() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The safe go-to-place for</Text>
       <Text style={styles.title1}>Women</Text>
      <Image style={styles.pic1}
        source={require("../assets/images/img1.png")} />
      
      
      <Link href="/login" asChild>
        <Pressable>
             {({ pressed }) => (
              <View  style={styles.button}>
              <Text style={styles.title2}>Get Started</Text>
        </View> 
        )}
        </Pressable>
      </Link>
     
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
      },
    title: {
       fontSize: 30,
       fontWeight: 'bold',
       paddingTop: 50,
       left: 15,
      },
    title1: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 2,
        color: "#EF6E7A",
        left: 15,

       },
    pic1:{
        left: 70,
    },
    para: {
        fontSize: 10,
       
        paddingTop: 20,
        color: "#A1A0A0",
        left: 15,

    },
    button: {
        borderColor:'#000000',
        backgroundColor: "#EF6E7A",
        borderRadius: 10,
        elevation: 5,
        width: 200,
        height: 50,
        marginTop: 20,
        left: 100,
    },
    title2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#FFFFFF",
        left: 45,
        marginTop: 13,
       },
});