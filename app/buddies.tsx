import { StyleSheet, Text, View, Image,Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Link, Tabs } from 'expo-router';
const buddies = () => {
  return (
    <ScrollView >
    <View style={styles.container}>
      <Text style={styles.titleP}>Token Balance</Text>
      <Text style={styles.titleH}>11</Text>
      <Text style={styles.titleP1}>Total Assets: RM 12.00</Text>
      <View style={styles.box}>
        <View style ={{flexDirection: "row"}}>
            <View style={styles.box1}>
            <AntDesign name="totop" size={30} color="white"  style={styles.download} />
            </View>
            <View style={styles.box1}>
            <AntDesign name="download" size={30} color="white"  style={styles.download}/>
            </View>
            <View style={styles.box1}>
            <MaterialIcons name="history" size={30} color="white"  style={styles.download} />
            </View>
             
        </View>
        <View style ={{flexDirection: "row"}}>
        <Text style={styles.title}>Top Up</Text>
        <Text style={styles.title1}>Withdraw</Text>
        <Text style={styles.title1}>History</Text>
        </View>
        <Text style={styles.title2}>Top Buddies</Text>
            <View style={styles.box2}>
            <View style ={{flexDirection: "row"}}>
                <Image style={styles.pimg}
                 source={require("../assets/images/av10.png")} />
                 <Text style={styles.titleP2}>Dr Fauziah</Text>
                 <AntDesign name="star" size={24} color="orange" style={styles.star}/>
                 <Text style={styles.titleP3}>4.9</Text>
                
            </View>
            <View style ={{flexDirection: "row"}}>
            <FontAwesome name="group" size={20} color="black" style={styles.group}/>
            <Text style={styles.titleP4}>Befrienders</Text>
            </View>
            
            <View style ={{flexDirection: "row"}}>
            <Ionicons name="time" size={20} color="black"  style={styles.time}/>
            <Text style={styles.titleP5}>10:30 A.M. - 11.30 A.M.</Text>
            </View>
            <View style ={{flexDirection: "row"}}>
            <FontAwesome5 name="coins" size={20} color="black" style={styles.time} />
            <Text style={styles.titleP5}>2 Token</Text>
            <Link href="/Fauziah" asChild>
            <Pressable>
                {({ pressed }) => (
                       <Entypo name="arrow-with-circle-right" size={30} color="#EF6E7A" style={styles.arrow}/>
            )}
            </Pressable>
            </Link>
            
            </View>
           </View>
           <View style={styles.box2}>
            <View style ={{flexDirection: "row"}}>
            <Image style={styles.pimg}
               source={require("../assets/images/av11.png")} />
                 <Text style={styles.titleP2}>Dr Syakilla</Text>
                 <AntDesign name="star" size={24} color="orange" style={styles.star}/>
                 <Text style={styles.titleP3}>5.0</Text>
                
            </View>
            <View style ={{flexDirection: "row"}}>
            <FontAwesome name="group" size={20} color="black" style={styles.group}/>
            <Text style={styles.titleP4}>Befrienders</Text>
            </View>
            
            <View style ={{flexDirection: "row"}}>
            <Ionicons name="time" size={20} color="black"  style={styles.time}/>
            <Text style={styles.titleP5}>11:30 A.M. - 12.30 A.M.</Text>
            </View>
            <View style ={{flexDirection: "row"}}>
            <FontAwesome5 name="coins" size={20} color="black" style={styles.time} />
            <Text style={styles.titleP5}>2 Token</Text>
            <Entypo name="arrow-with-circle-right" size={30} color="#EF6E7A" style={styles.arrow}/>
            </View>
           </View>
           <View style={styles.box2}>
            <View style ={{flexDirection: "row"}}>
            <Image style={styles.pimg}
               source={require("../assets/images/av13.png")} />
                 <Text style={styles.titleP2}>Dr Mariam</Text>
                 <AntDesign name="star" size={24} color="orange" style={styles.star}/>
                 <Text style={styles.titleP3}>4.6</Text>
                
            </View>
            <View style ={{flexDirection: "row"}}>
            <FontAwesome name="group" size={20} color="black" style={styles.group}/>
            <Text style={styles.titleP4}>Befrienders</Text>
            </View>
            
            <View style ={{flexDirection: "row"}}>
            <Ionicons name="time" size={20} color="black"  style={styles.time}/>
            <Text style={styles.titleP5}>12:30 A.M. - 1.30 P.M.</Text>
            </View>
            <View style ={{flexDirection: "row"}}>
            <FontAwesome5 name="coins" size={20} color="black" style={styles.time} />
            <Text style={styles.titleP5}>2 Token</Text>
            <Entypo name="arrow-with-circle-right" size={30} color="#EF6E7A" style={styles.arrow}/>
            </View>
           </View>
           
      </View>
      
    </View>
    </ScrollView>
  );
}

export default buddies

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    title: {
        paddingLeft: 55,
        paddingTop: 10,
        color: "#FFFFFF",
    },
    title1: {
        paddingLeft: 60,
        paddingTop: 10,
        color: "#FFFFFF",
    },
    titleP: {
        textAlign:'center',
        paddingTop: 50,
        color: "#A5A5A5",
    },
    titleH: {
        textAlign:'center',
        fontWeight:'bold',
        color: "#EF6E7A",
        fontSize: 50,
    },
    titleP1: {
        textAlign:'center',
        fontWeight:'bold',
    },
    titleP2: {
        paddingLeft: 10,
        paddingTop: 30,
        fontWeight:'bold',
        fontSize:15
    },
    titleP3: {
        paddingLeft:5,
        paddingTop: 25,
        fontWeight:'bold',
        fontSize:20,
    },
    titleP4: {
        paddingLeft: 10,
        paddingTop: 2,
       
        fontSize:15,
    },
    titleP5: {
        paddingLeft: 10,
        paddingTop: 12,
       
        fontSize:15,
    },
    box: {
        width: 380,
        height: 130,
        alignSelf: 'center',
        borderColor:'#000000',
        backgroundColor: "#EF6E7A",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 5,
        borderRadius: 20,
        marginTop: 15,
      },
      box1: {
        width: 60,
        height: 60,
        borderRadius: 10,
        borderColor:'#FFFFFF',
        borderWidth: 1,
        marginLeft: 50,
        marginTop: 20,
      },
      download: {
        marginLeft: 12,
        marginTop: 12,
      },
      star: {
        marginLeft: 150,
        marginTop: 25,
      },
      title2: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10,
        paddingTop: 35,
      },
      box2: {
        width: 370,
        height: 160,
        alignSelf: 'center',
        borderColor:'#EF6E7A',
        borderWidth:1,
        marginTop: 10,
        borderRadius: 5,
       
      },
      pimg:{
        width: 50,
        height: 50,
        marginLeft: 10,
        marginTop:15,
        borderRadius: 50,
      },
      time:{
        paddingLeft:70,
        paddingTop:10,
      },
      group:{
        paddingLeft:70,
      },
      arrow:{
        paddingLeft:170,
      }
})