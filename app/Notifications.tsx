import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react';
import { Link, Tabs } from 'expo-router';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
const tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Upcoming" component={Upcoming} />
    </Tab.Navigator>
  )
};

const History = () => {
  
    return <View style={{flex: 1, backgroundColor: "#FFFFFF",  }} >
      <View style ={{flexDirection: "row"}}>
      <Image style={styles.iC2}
               source={require("../assets/images/av10.png")} /> 
        <Link href="/chat" asChild>
            <Pressable>
                {({ pressed }) => (
                 <Text style={styles.title13} >Dr Raziah initiated a conversation with you</Text>
            )}
            </Pressable>
            </Link>
     
      
      </View>
      <Text style={styles.title14} >1 hour ago</Text>
      
    </View>

}
const Upcoming = () => {
  
    return <View style={{flex: 1, backgroundColor: "#FFFFFF",  }} >
      
      <Text>Signup</Text>
         
    </View>

}
export default tabs

const styles = StyleSheet.create({

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
    paddingLeft: 340,
    color: 'grey',
    paddingBottom: 12,
    
  },
  plus:{
    paddingTop: 8,
    paddingLeft: 10,
  }
});