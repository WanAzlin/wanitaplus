import { StyleSheet, Text, View,  Image,Pressable } from 'react-native'
import React from 'react';
import { Link,  } from 'expo-router';

const sos = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title7}>What Happened?</Text>
        <View style ={{flexDirection: "row"}}>
            <View style={styles.boxBG}>
                <Image style={styles.fimg}
                 source={require("../assets/images/bump.png")} /> 
                 <Text style={styles.title11}>Accident</Text> 
            </View>
            <View style={styles.boxBG}>
            <Image style={styles.fimg}
                 source={require("../assets/images/healthcare.png")} /> 
                 <Text style={styles.title11}>Healthcare</Text> 
            </View>
            <View style={styles.boxBG2}>
            <Image style={styles.fimg}
                 source={require("../assets/images/step-back.png")} />
                 <Text style={styles.title11}>Assaults</Text>  
            </View> 
        </View>
        <View style={styles.box}>
        <Text style={styles.title1}>Cik Azlin,</Text> 
        <Text style={styles.title2}>You are about to call emergency</Text> 
        <Text style={styles.title}>The call will start automatically in:</Text>
        <Text style={styles.title4}>05</Text> 
        <Text style={styles.title}>Your location coordinates:</Text>
        <Text style={styles.title5}> Jalan Sultan Hishamuddin 50050 Kuala Lumpur Federal Territory of Kuala Lumpur</Text> 
        <View style={styles.box1}>
            <Text style={styles.title6}>Cancel</Text> 
        </View>
        
        </View>
       
    </View>
  )
}

export default sos

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#F60954",
  },
  boxBG:{
    marginLeft: 15,
    backgroundColor: "#FFFFFF",
    width: 120,
    height: 120,
    borderRadius: 30,
    marginTop: 20,
  },
  boxBG2:{
    marginLeft: 15,
    backgroundColor: "#FFFFFF",
    width: 120,
    height: 120,
    borderRadius: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf:'center',
    paddingTop: 10,
    color:"#B7B7B7",
   
  },
  title1: {
    fontSize: 12,
    color:"#757373",
    textAlign:'center',
    paddingTop: 30,
  },
  title2: {
    fontSize: 12,
    color:"#757373",
    marginLeft: 23,
    paddingTop: 2,
    textAlign:'center',
  },
  title3: {
    fontSize: 19,
    color:"#FF0000",
    marginLeft: 20,
    paddingTop: 29,
  },
  title4: {
    fontSize: 72,
    color:"#F60954",
    textAlign:'center',
    paddingTop: 20,
  },
  title5: {
    fontSize: 12,
    color:"#757373",
    marginLeft: 23,
    paddingTop: 10,
    textAlign:'center',
  },
  title6: {
    fontSize:20,
    color:"#FFFFFF",
    textAlign:'center',
    paddingTop: 5,
  },
  title7: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf:'center',
    paddingTop: 50,
    color:"#FFFFFF",
  },
  title8: {
    fontSize: 20,
    color:"#FFFFFF",
   paddingLeft: 50,
   paddingTop: 10,
    
  },
  title11: {
    fontSize: 15,
    color:"#F60954",
    
    paddingBottom: 20,
    marginLeft: 30,
  },
  fimg:{
    width: 80,
    height: 80,
    marginLeft: 20,
    marginTop:15,
   
  },
  box: {
    marginLeft:20,
    marginRight: 3,
    borderColor:'#000000',
    backgroundColor: "#E8E8E8",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1.6,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 15,
    height: 400,
    width: 380,
    marginTop: 50,
  },
  box1:{
    borderWidth: 2,
    borderColor:"#F60954",
    width: 200,
    height: 40,
    borderRadius: 20,
    alignSelf:'center',
    marginTop: 40,
    backgroundColor: "#F60954",
  },
})