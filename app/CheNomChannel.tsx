import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
const channel2 = () => {
  return (
    <View  style={styles.container}>
      <View style={styles.box}>
      <View style ={{flexDirection: "row"}}>
            <View style={styles.live1}> 
            
              <Text style={styles.tlive1} >Join</Text>
            </View>
            <View style={styles.live2}> 
            <Text style={styles.tlive2} >Report</Text>
            </View>
            <AntDesign name="close" size={20} color="white" style={styles.close} />
      </View>
      <View style={styles.box1}>
      <Image style={styles.fimg}
               source={require("../assets/images/fimg2.jpg")} />
      <Text style={styles.text1} >Popiah Diet Che Nom2</Text>
      <View style ={{flexDirection: "row"}}>
      <Text style={styles.text2} >watch here: https://resepichenom.com</Text>
      <Text style={styles.text3} >10:20 P.M.</Text>
      </View>
      </View>
      
      </View>
      <View style={styles.box2}>
         <View style ={{flexDirection: "row"}}>
           <Image style={styles.emoimg}
               source={require("../assets/images/em1.png")} />
          <Image style={styles.emoimg}
               source={require("../assets/images/em2.png")} />
           <Image style={styles.emoimg}
               source={require("../assets/images/em3.png")} />
          <Text style={styles.text5} >20</Text>
        </View>
      </View>
      <View style={styles.box3}>
      <Text style={styles.text4} >unmute</Text>
      </View>
    </View>
  )
}

export default channel2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3E2E2",
  },
  box:{
    backgroundColor: "#EF6E7A",
    height: 60,
    
  },
  box3:{
    backgroundColor: "#FFFFFF",
    height: 70,
    marginTop: 280,
  },
  live1:{
    
    borderRadius: 20,
    width: 80,
    height: 35,
    marginTop: 10,
    marginLeft: 120,
    backgroundColor: "#339340",
  },
  live2:{
    backgroundColor: "#F32D22",
    borderRadius: 20,
    width: 80,
    height: 35,
    marginTop: 10,
    marginLeft: 20
  },
  tlive1:{
    fontSize: 15,
    marginLeft: 25,
    paddingTop:8,
    fontWeight:'bold',
    color:"#FCFCFC"
  },
  tlive2:{
    fontSize: 15,
    marginLeft: 18,
    paddingTop:8,
    fontWeight:'bold',
    color:"#FCFCFC"
  },
  text1:{
   fontSize:20,
   marginLeft: 20,
   paddingTop:10,
  },
  text2:{
    fontSize:15,
    marginLeft: 20,
    paddingTop:30,
    color: "#0F7AAE",
   },
   text3:{
    fontSize:12,
    marginLeft: 40,
    paddingTop:40,
    color: "grey",
   },
   text4:{
    fontSize:15,
   textAlign:'center',
    paddingTop:10,
    color: "#0F7AAE",
   },
   text5:{
    fontSize:15,
    marginLeft: 10,
    paddingTop:6,
    color: "#0F7AAE",
   },
  box1: {
    
    alignSelf:'center',
    borderColor:'#000000',
    backgroundColor: "#FFFFFF",
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 15,
    height: 360,
    width: 400,
    marginTop: 30,
  },
  box2: {
    height: 30,
    width: 130,
    backgroundColor: "#FFFFFF",
    marginTop: 375,
    marginLeft: 10,
    borderRadius: 20,
  },
  fimg:{
    width: 380,
    height: 250,
    marginLeft: 10,
    marginTop:15,
    borderRadius:  5,
  },
  emoimg:{
    width: 20,
    height: 20,
    marginTop: 6,
    marginLeft: 10
  },
  close:{
    marginLeft: 80,
    marginTop: 5,
  },
})