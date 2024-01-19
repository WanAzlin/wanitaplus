import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react';
import { Link, Tabs } from 'expo-router';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chats</Text>
       <View style ={{flexDirection: "row"}}>
          <Image style={styles.iC2}
               source={require("../assets/images/av10.png")} /> 
          <Link href="/frame" asChild>
            <Pressable>
                {({ pressed }) => (
                 <Text style={styles.title13} >Dr Raziah initiated a conversation with you</Text>
            )}
            </Pressable>
            </Link>
            
        </View>
        <Text style={styles.title14} >1 hour ago</Text>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    paddingTop: 30,
  },
  iC2: {
    width: 60,
    height: 60,
    marginLeft: 15,
    marginTop:18,
    borderRadius: 50,
  },
  title13: {
    fontSize: 13,
    paddingLeft: 10,
    paddingTop: 35,
  },
  title14: {
    fontSize: 13,
    marginLeft: 300,
    color: 'grey',
    paddingBottom: 20,
    
  },
})