import { StyleSheet, Text, View,  Image,Pressable } from 'react-native'
import React from 'react';
import { Link,  } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover New Channels</Text>
      <View style={styles.boxGroup}>
         <View style={styles.live}>
         <View style ={{flexDirection: "row", borderRadius: 20}}>
              <Entypo name="dot-single" size={34} color="red" style={styles.dot}/>
              <Text style={styles.title5}>Live</Text> 
              
          </View>
          <View style ={{flexDirection: "row", borderRadius: 20}}>

          <Text style={styles.title6}>Topic:</Text>
      
          </View>
        
         </View>
         <Text style={styles.title7}>Che Nom Masak Apa Hari Ini?</Text> 
         <Text style={styles.title8}>100 Members Subscribed</Text>
         <View style ={{flexDirection: "row", backgroundColor: "#EF6E7A", }}>
          <Image style={styles.av1}
               source={require("../../assets/images/av10.png")} />
          <Image style={styles.av2}
               source={require("../../assets/images/av11.png")} />
          <Image style={styles.av2}
               source={require("../../assets/images/av13.png")} />
          <Image style={styles.av2}
               source={require("../../assets/images/av15.png")} />
          </View>
          <View style={styles.live2}>
          <View style ={{flexDirection: "row", borderRadius: 20}}>
             <AntDesign name="plus" size={18} color="#EF6E7A" style={styles.plus}/>
             <Link href="/CheNomChannel" asChild>
            <Pressable>
                {({ pressed }) => (
                <Text style={styles.title0}>Join </Text>
            )}
            </Pressable>
            </Link>
               
          </View>
          </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    paddingTop: 35,
    color:"#EF6E7A"
  },
  title1: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20,
    paddingTop: 35,
    
  },
  title2: {
    fontSize: 12,
    color:"#757373",
    paddingLeft:170,
    marginBottom: 10,
  },
  title0: {
    fontSize: 20,
    color:"#EF6E7A",
    marginLeft: 2,
    paddingTop: 5,
  },
  title5: {
    fontSize: 20,
    color:"#757373",
    marginLeft: 1,
    paddingTop: 5,
  },
  title6: {
    fontSize: 20,
    color:"#DBDBDB",
    marginLeft: 5,
    paddingTop: 11,
  },
  title7: {
    fontSize: 17,
    color:"#FFFFFF",
    marginLeft: 75,
    paddingTop: 13,
  },
  title8: {
    fontSize: 17,
    color:"#FFFFFF",
    marginLeft: 15,
    paddingTop: 10,
  },
  av1: {
    width: 30,
    height: 30,
    marginLeft: 25,
    marginTop:10,
    borderRadius: 50,
  },
  av2: {
    width: 30,
    height: 30,
    marginLeft: 1,
    marginTop:10,
    borderRadius: 50,
  },
  fimg:{
    width: 140,
    height: 130,
    marginLeft: 10,
    marginTop:15,
    borderRadius:  5,
  },
  boxGroup:{
    backgroundColor: "#EF6E7A",
    borderRadius: 20,
    height: 200,
    width: 390,
    marginLeft: 10,
    marginTop: 20,
  },
  live:{
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    width: 80,
    height: 35,
    marginTop: 10,
    marginLeft: 10,
  },
  live2:{
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    width: 80,
    height: 35,
    marginTop: 10,
    marginLeft: 300,
  },
  dot:{

  },
  box1:{
    borderWidth: 2,
    borderColor:"#EF6E7A",
    width: 100,
    height: 40,
    borderRadius: 20,
    marginLeft: 230,
    marginTop: 3,
    backgroundColor: "#FFFFFF",
  },
  plus:{
    paddingTop: 8,
    paddingLeft: 10,
  }
});
