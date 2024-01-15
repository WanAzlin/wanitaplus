import { StyleSheet, Text, View,TextInput, ScrollView, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const cart = () => {
  return (
    <View style={styles.container}>
      <View style ={{flexDirection: "row"}}>
          <TextInput  placeholder='Search Item'  style={styles.TextInput}/>
      <Entypo name="shopping-cart" style={styles.cart} size={30} color="black" />
      </View>
      <View style ={{flexDirection: "row"}}>
          <View style={styles.box3}>
              <AntDesign name="filetext1" size={30} color="black"  style={styles.icon}/>
               <Text style={styles.title1} >Orders</Text>
          </View>
          <View style={styles.box3}>
          <MaterialCommunityIcons name="ticket-confirmation-outline" size={30} color="black"style={styles.icon1} />
               <Text style={styles.title1} >Coupons</Text>
          </View>
          <View style={styles.box3}>
          <Ionicons name="chatbubble-ellipses-outline" size={29} color="black" style={styles.icon1} />
               <Text style={styles.title1} >Messages</Text>

          </View>
          <View style={styles.box3}>
          <Entypo name="location-pin" size={30} color="black" style={styles.icon1}  />
               <Text style={styles.title1} >Address</Text>
               
          </View>
          <View style={styles.box3}>
          <FontAwesome5 name="money-bill-wave" size={30} color="black" style={styles.icon1} />
               <Text style={styles.title1} >Bonus </Text>
          </View>
          </View>
          <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.box1}>
             <Text style={styles.title10} >All</Text>
          </View>
          <View style={styles.box2}>
             <Text style={styles.title11} >Beauty</Text>
          </View>
        
          <View style={styles.box2}>
             <Text style={styles.title11} >Kitchen</Text>
          </View>
          <View style={styles.box2}>
             <Text style={styles.title11} >Health</Text>
          </View> 
        </ScrollView>
        <View style ={{flexDirection: "row"}}>
        <View style={styles.box5}>

        <Text style={styles.title11} >Health</Text>
        </View>
        <View style={styles.box5}>

        <Text style={styles.title11} >Health</Text>
        </View>
        </View>
    </View>
    
  )
}

export default cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    
  },
 
TextInput: {
  borderWidth: 1,
  borderColor: "#CCCACA",
  width:350,
  height: 40,
  borderRadius: 20,
  paddingLeft: 15,
  fontSize: 18,
  marginTop: 13,
  marginLeft: 5,
  
},
cart:{
marginLeft:10,
marginTop:20,
},
box3:{
paddingTop:20,
paddingLeft: 20,
},
fimg:{
width: 140,
height: 130,
marginLeft: 10,
marginBottom:300,
borderRadius:  5,
},
title1: {
fontSize: 15,

textAlign:'center',
paddingTop: 10,

},
icon:{
paddingLeft: 10,
},
icon1:{
paddingLeft: 12,
},
title4: {
fontSize: 25,
fontWeight: 'bold',
marginLeft: 15,
marginBottom: 100,
},
box1:{
borderWidth: 2,
borderColor:"#EF6E7A",
width: 75,
height: 40,
borderRadius: 20,
marginLeft: 10,
marginTop: 20,
backgroundColor: "#EF6E7A",
},
box2:{
borderWidth: 2,
borderColor:"#EF6E7A",
width: 100,
height: 40,
borderRadius: 20,
marginLeft: 10,
marginTop: 20,

},
box4:{
  borderWidth: 2,
  borderColor:"#EF6E7A",
  width: 130,
  height: 40,
  borderRadius: 20,
  marginLeft: 10,
  marginBottom: 500,
  
  },
title10: {
  fontSize: 20,
  color:"#FFFFFF",
  marginLeft: 20,
  paddingTop: 5,
},
title11: {
  fontSize: 20,
  color:"#EF6E7A",
  marginLeft: 20,
  paddingTop: 5,
},
box5: {
  marginLeft: 10,
  alignSelf:'center',
  borderColor:'#000000',
  backgroundColor: "#0F7AAE",
  shadowRadius: 2,
  elevation: 5,
  borderRadius: 20,
  height: 240,
  width: 190,
  marginTop: 30,
},
})