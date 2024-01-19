import { StyleSheet, Text, View,Image, TextInput,Dimensions } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const channel2 = () => {
  return (
    <View  style={styles.container}>
      <View style={styles.box}>
      <Text style={styles.tlive2} >Your conversation starts now</Text>
      <Text style={styles.tlive1} >Please sign up to enjoy more features</Text>
      
      <View style={styles.box1}>
      <Text style={styles.text1} >Hello There!</Text>
      </View>
      <View style={styles.box2}>
      <Text style={styles.text1} >You can talk to me if there’s anything that worries you right now. I’ll try to help you with quick tip within 5-10 minutes</Text>
      </View>
      <View style={styles.box2}>
      <Text style={styles.text1} >What’s bothering you?
                  If you feel like your life is in danger and you need urgent help. Please press the SOS button right away</Text>
      </View>
      <Image style={styles.av1}
               source={require("../assets/images/av10.png")} />
      <View style={styles.box3}>
      <Text style={styles.text4} >I'm Azlin and today I'm feel anxious. Is there anything I can do so that I can feel better?</Text>
      </View>
      <Text style={styles.text5} >Sent 10:20 P.M.</Text>
      <View style ={{flexDirection: "row"}}>
      <AntDesign name="camera" size={24} color="black" style={styles.emoimg}  />
      <SimpleLineIcons name="picture" size={24} color="black" style={styles.emoimg}  />
      <MaterialIcons name="keyboard-voice" size={24} color="black"  style={styles.emoimg}/>
          <TextInput  placeholder='Message'  style={styles.TextInput}/>
          <Fontisto name="smiley" size={24} color="black" style={styles.emoimg} />
          <AntDesign name="like1" size={24} color="black" style={styles.emoimg}/>
        </View>
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
    textAlign:'center',
   
    
    color:"#FCFCFC"
  },
  tlive2:{
    fontSize: 15,
    textAlign:'center',
    paddingTop:10,
    
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
    fontSize:20,
    marginLeft: 20,
    paddingTop:10,
    color:"#FFFFFF",
   },
   text5:{
    fontSize:12,
    marginLeft: 300,
    paddingTop:10,
    color: "grey",
   },
  box1: {
    
    marginLeft:20,
    borderColor:'#000000',
    backgroundColor: "#FFFFFF",
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 15,
    width: 150,
    height: 50,
    marginTop: 30,
  },
  box2: {
    marginLeft:20,
    borderColor:'#000000',
    backgroundColor: "#FFFFFF",
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 15,
    width: 300,
    height: 150,
    marginTop: 10,
  },
  box3: {
    marginLeft:100,
    borderColor:'#000000',
    backgroundColor: "#EF6E7A",
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 15,
    width: 300,
    height: 100,
    marginTop: 10,
  },
  fimg:{
    width: 380,
    height: 250,
    marginLeft: 10,
    marginTop:15,
    borderRadius:  5,
  },
  emoimg:{
    width: 25,
    height: 25,
    marginTop: 80,
    marginLeft: 12
  },
  av1: {
    width: 30,
    height: 30,
    marginLeft: 15,
    marginTop:10,
    borderRadius: 50,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#CCCACA",
    width:200,
    height: 30,
    borderRadius: 20,
    paddingLeft: 15,
    fontSize: 18,
    marginTop: 73,
    marginLeft: 5,
    
},
  
})