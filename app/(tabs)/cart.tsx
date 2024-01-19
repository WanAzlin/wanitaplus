
import React from 'react';
import { Link, Tabs } from 'expo-router';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View,TextInput, Pressable, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();
const tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="E-Market" component={Market} />
      <Tab.Screen name="Services" component={Services} />
    </Tab.Navigator>
  )
};

const Market = () => {
  
    return <ScrollView >
    <View style={styles.container}>
      <View style ={{flexDirection: "row"}}>
          <TextInput  placeholder='Search Item'  style={styles.TextInput}/>
      <Entypo name="shopping-cart" style={styles.cart} size={30} color="black" />
      </View>
      <View style ={{flexDirection: "row"}}>
          <View style={styles.box3}>
          <AntDesign name="filetext1" size={30} color="black"  style={styles.icon}/>
               <Text style={styles.title2} >Orders</Text>
          </View>
          <View style={styles.box3}>
          <MaterialCommunityIcons name="ticket-confirmation-outline" size={30} color="black"style={styles.icon1} />
               <Text style={styles.title2} >Coupons</Text>
          </View>
          <View style={styles.box3}>
          <Ionicons name="chatbubble-ellipses-outline" size={29} color="black" style={styles.icon1} />
               <Text style={styles.title2} >Messages</Text>

          </View>
          <View style={styles.box3}>
          <Entypo name="location-pin" size={30} color="black" style={styles.icon1}  />
               <Text style={styles.title2} >Address</Text>
               
          </View>
          <View style={styles.box3}>
          <FontAwesome5 name="money-bill-wave" size={30} color="black" style={styles.icon1} />
               <Text style={styles.title2} >Bonus </Text>
          </View>
          </View>
          <Text style={styles.title4}>Shops Today</Text>
          <View style ={{flexDirection: "row"}}>
          <View style={styles.box3}>
              
              <Image style={styles.fimg}
               source={require("../../assets/images/fast-food.png")} />
               <Text style={styles.title1} >Foods</Text>
          </View>
          <View style={styles.box3}>
              
              <Image style={styles.fimg}
               source={require("../../assets/images/medicine.png")} />
               <Text style={styles.title1} >Medicine</Text>
          </View>
          <View style={styles.box3}>
              
              <Image style={styles.fimg}
               source={require("../../assets/images/cosmetics.png")} />
               <Text style={styles.title1} >Cosmetics</Text>
          </View>
          <View style={styles.box3}>
              
              <Image style={styles.fimg}
               source={require("../../assets/images/grocery.png")} />
               <Text style={styles.title1} >Grocery</Text>
          </View>
          
          </View>
          <Text style={styles.title4}>E-Mart</Text>
          <View style ={{flexDirection: "row"}}>
          <View style={styles.box3}>
              
              <Image style={styles.fimg}
               source={require("../../assets/images/telur.jpg")} />
               <Text style={styles.title2} > RM7.90</Text>
               <Text style={styles.title1} > Omega 3</Text>
          </View>
          <View style={styles.box3}>
              
              <Image style={styles.fimg}
               source={require("../../assets/images/bawang.jpg")} />
               <Text style={styles.title2} > RM4.30</Text>
               <Text style={styles.title1} > Bawang</Text>
          </View>
          <View style={styles.box3}>
              
              <Image style={styles.fimg}
               source={require("../../assets/images/susu.jpg")} />
               <Text style={styles.title2} > RM9.90</Text>
               <Text style={styles.title1} > Susu</Text>
          </View>
          <View style={styles.box3}>
              
              <Image style={styles.fimg}
               source={require("../../assets/images/lemon.jpg")} />
               <Text style={styles.title2} > RM3.90</Text>
               <Text style={styles.title1} > Lemon</Text>
          </View>
          
          </View>
          <Text style={styles.title4}>Promotion</Text>
          
          <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.box3}>
            <Image style={styles.fimg1}
               source={require("../../assets/images/promo.jpg")} />
               
          </View>
          <View style={styles.box3}>
          <Image style={styles.fimg1}
               source={require("../../assets/images/promo.jpg")} />
              
          </View>
          <View style={styles.box3}>
          <Image style={styles.fimg1}
               source={require("../../assets/images/promo.jpg")} />
               
          </View>
        </ScrollView>
        
    </View>
    </ScrollView>
}
const Services = () => {
  
    return <ScrollView >
    <View style={styles.container}>
    <Text style={styles.title4}>Services</Text> 
    <Image style={styles.banner}
               source={require("../../assets/images/b2.png")} />
      
      <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.box1T2}>
          <View style ={{flexDirection: "row"}}>
          
             <Text style={styles.title10T2} >All</Text>
          </View>
          </View>
          <View style={styles.box2T}>
          <View style ={{flexDirection: "row"}}>
          <MaterialIcons name="cleaning-services" size={30} color="#EF6E7A" style={styles.iconT}  />
             <Text style={styles.title10T} >Cleaning</Text>
          </View>
          </View>
          <View style={styles.box2T}>
          <View style ={{flexDirection: "row"}}>
            
             <AntDesign name="car" size={30} color="#EF6E7A"  style={styles.iconT} />
             <Text style={styles.title11T2} >WDriver</Text>
          </View> 
          </View>
        
          <View style={styles.box2T}>
          <View style ={{flexDirection: "row"}}>
          <FontAwesome5 name="cat" size={30} color="#EF6E7A" style={styles.iconT} />
            <Text style={styles.title11T21} >Pet Sitter</Text>
         </View> 
             
          </View>
          <View style={styles.box2T}>
          <View style ={{flexDirection: "row"}}>
          <MaterialIcons name="dry-cleaning" size={30} color="#EF6E7A" style={styles.iconT} />
          <Text style={styles.title11T21} >Laundry</Text>
         </View> 
             
          </View> 
        </ScrollView>
        <Text style={styles.title4}>Available Services</Text> 
        <View style ={{flexDirection: "row"}}>
        <View style={styles.boxC}>
        <MaterialIcons name="cleaning-services" size={30} color="white" style={styles.iconS} />
        </View>
        <Text style={styles.title5}>Cleaning</Text> 
        <Text style={styles.title7}>60/hr</Text> 
        </View>
        <View style ={{flexDirection: "row"}}>
        
        <Text style={styles.title6}>Tomorrow</Text> 
        </View>
        <View style ={{flexDirection: "row"}}>
        <View style={styles.boxD}>
        <AntDesign name="car" size={30} color="white"  style={styles.iconS} />
        </View>
        <Text style={styles.title5}>Driver</Text> 
        <Text style={styles.title71}>60/hr</Text> 
        </View>
        <View style ={{flexDirection: "row"}}>
        
        <Text style={styles.title6}>Tomorrow</Text> 
        </View>
        <View style ={{flexDirection: "row"}}>
        <View style={styles.boxC}>
        <FontAwesome5 name="cat" size={30} color="white" style={styles.iconS} />
        </View>
        <Text style={styles.title5}>Cat-Sitter</Text> 
        <Text style={styles.title7}>60/hr</Text> 
        </View>
        <View style ={{flexDirection: "row"}}>
        
        <Text style={styles.title6}>Tomorrow</Text> 
        </View>
        <View style ={{flexDirection: "row"}}>
        <View style={styles.boxC}>
        <MaterialIcons name="dry-cleaning" size={30} color="white" style={styles.iconS} />
        </View>
        <Text style={styles.title5}>Laundry</Text> 
        <Text style={styles.title7T}>60/hr</Text> 
        </View>
        <View style ={{flexDirection: "row"}}>
        
        <Text style={styles.title6}>Tomorrow</Text> 
        </View>
        
    </View>
    </ScrollView>

}
export default tabs

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  boxC:{
    backgroundColor: "#EF6E7A",
    width: 50,
    height: 50,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 100,
  },
  boxD:{
    backgroundColor: "#EF6E7A",
    width: 50,
    height: 50,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 100,
  },
  iconT:{
    marginLeft: 10,
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
    paddingLeft: 340,
    color: 'grey',
    paddingBottom: 12,
    
  },
  plus:{
    paddingTop: 8,
    paddingLeft: 10,
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
  width: 80,
  height: 80,
  marginLeft: 6,
  marginTop: 14,

},
fimg1:{
  width: 120,
  height: 140,
  marginLeft: 6,
  marginTop: 5,

},
title1: {
  fontSize: 15,
  color: "#EF6E7A",
  textAlign:'center',
  paddingTop: 8,

},
title2: {
  fontSize: 15,
  fontWeight:'bold',
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
  marginTop: 20,
},
title5: {
  fontSize: 20,
  fontWeight: 'bold',
  marginLeft: 15,
  marginTop: 20,
},
title6: {
  fontSize: 15,
  color: 'grey',
  marginLeft: 75,
  marginTop: 2,
},
title7: {
  fontSize: 15,
  color: 'grey',
  marginLeft: 180,
  marginTop: 23,
},
title71: {
  fontSize: 15,
  color: 'grey',
  marginLeft: 214,
  marginTop: 23,
},
title7T: {
  fontSize: 15,
  color: 'grey',
  marginLeft: 195,
  marginTop: 23,
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
  backgroundColor: "#EF6E7A",
  shadowRadius: 2,
  elevation: 5,
  borderRadius: 20,
  height: 240,
  width: 190,
  marginBottom: 270,
},
boxGroup:{
  backgroundColor: "#EF6E7A",
  borderRadius: 20,
  width: 400,
  height: 180,
  marginLeft: 10,
  marginTop: 10,
},
box1T:{
  borderWidth: 2,
  borderColor:"#EF6E7A",
  width: 130,
  height: 40,
  borderRadius: 20,
  marginLeft: 10,
  marginTop: 10,
  backgroundColor: "#EF6E7A",
},
box1T2:{
  borderWidth: 2,
  borderColor:"#EF6E7A",
  width: 80,
  height: 40,
  borderRadius: 20,
  marginLeft: 10,
  marginTop: 10,
  backgroundColor: "#EF6E7A",
},
box2T:{
  borderWidth: 2,
  borderColor:"#EF6E7A",
  width: 140,
  height: 40,
  borderRadius: 20,
  marginLeft: 10,
  marginTop: 10,
  
},
title10T: {
  fontSize: 20,
  color:"#EF6E7A",
  marginLeft: 10,
  paddingTop: 5,
},
title10T2: {
  fontSize: 20,
  color:"white",
  marginLeft: 23,
  paddingTop: 5,
},
title11T: {
  fontSize: 20,
  color:"#EF6E7A",
  marginLeft: 20,
  paddingTop: 5,
},
title11T21: {
  fontSize: 20,
  color:"#EF6E7A",
  marginLeft: 8,
  paddingTop: 5,
},
title11T2: {
  fontSize: 20,
  color:"#EF6E7A",
  marginLeft: 12,
  paddingTop: 5,
},
banner:{
  width: 400,
  height: 180,
  alignSelf: 'center',
  borderRadius: 10,
  marginTop: 10,
  marginBottom: 10,
},
iconS:{
  marginLeft: 10,
  marginTop: 10,
}
});