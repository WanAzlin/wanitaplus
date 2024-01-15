import { StyleSheet, Text, View,  Image,Pressable } from 'react-native'
import React from 'react';
import { Link,  } from 'expo-router';

const sos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What Happened?</Text>
      <Text style={styles.title2}>Press button to call emergency</Text> 
      <Link href="/sos2" asChild>
        <Pressable>
             {({ pressed }) => (
              <Image style={styles.fimg}
              source={require("../../assets/images/emer.png")} /> 
        )}
        </Pressable>
      </Link>
      
      <Text style={styles.title3}>After pressing SOS Button, we will contact the nearest WAJA SQUAD to your location</Text> 
    </View>
  )
}

export default sos

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    paddingTop: 35,
  },
  title2: {
    fontSize: 12,
    color:"#757373",
    marginLeft: 23,
    paddingTop: 2,
  },
  title3: {
    fontSize: 19,
    color:"#FF0000",
    textAlign:'center',
    paddingTop: 29,
  },
  fimg:{
    width: 190,
    height: 180,
    marginLeft: 100,
    marginTop:55,
   
  },
})