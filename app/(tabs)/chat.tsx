import { StyleSheet, Image, Pressable, ImageBackground, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, View, } from '../../components/Themed';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const image1 = {uri: 'https://hype.my/wp-content/uploads/2016/03/KLCC.jpg'};
const image2 = {uri: 'https://www.wtjournal.com/wp-content/uploads/2017/07/1206Malaysia_CW01_0390.jpg'};
const image3 = {uri: 'https://pix1.agoda.net/hotelimages/6128229/-1/b0721707b4668d422f079bd3cdd178c6.jpg'};
const image4 = {uri: 'https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/content_entry5b155bed5711a8176e9f9783/5c8eee491f64871832cdabc2/files/malaysia-malacca-melaka-travel-photo-20190317080255906-main-image.jpg'};
export default function TabOneScreen() {
  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
    <View style ={{flexDirection: "row"}}>
          <TextInput  placeholder='Search Anything..'  style={styles.TextInput}/>
     
      <FontAwesome name="arrow-circle-right"  style={styles.cart}  size={30} color="#EF6E7A" />
      </View>
       <Text style={styles.title}>Explore</Text>
       <Text style={styles.title1}>Destination worth visiting</Text>
        <ScrollView
          horizontal={true}
          
          showsHorizontalScrollIndicator={false}>
          <ImageBackground source={image1} resizeMode="cover" style={styles.image}>
              <Text style={styles.text}>Kuala Lumpur</Text>
         </ImageBackground>
         <ImageBackground source={image2} resizeMode="cover" style={styles.image}>
              <Text style={styles.text}>Terengganu</Text>
         </ImageBackground>
         <ImageBackground source={image3} resizeMode="cover" style={styles.image}>
              <Text style={styles.text}>Johor Bahru</Text>
         </ImageBackground>
         <ImageBackground source={image4} resizeMode="cover" style={styles.image}>
              <Text style={styles.text}>Melaka</Text>
         </ImageBackground>
        </ScrollView>
        <Text style={styles.title2}>Categories</Text>
        <Text style={styles.title1}>Relive your life with fun activities</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.box3}>
            <Image style={styles.fimg}
               source={require("../../assets/images/health.png")} />
               <Text style={styles.title12} >Fun Activities</Text>
          </View>
          <View style={styles.box3}>
          <Image style={styles.fimg}
               source={require("../../assets/images/massage.png")} />
               <Text style={styles.title12} > Massages</Text>
          </View>
          <View style={styles.box3}>
          <Image style={styles.fimg}
               source={require("../../assets/images/review.png")} />
               <Text style={styles.title12} >Hotels</Text>
          </View>
          <View style={styles.box3}>
          <Image style={styles.fimg}
               source={require("../../assets/images/transportation.png")} />
               <Text style={styles.title12} >Transportation</Text>
          </View>
        </ScrollView>
        <Text style={styles.title2}>Offer Deals</Text>
        <Text style={styles.title1}>Great Deals for you</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Image style={styles.banner1}
               source={require("../../assets/images/pi1.png")} />
       
           <Image style={styles.banner1}
               source={require("../../assets/images/pi2.png")} />
           <Image style={styles.banner1}
               source={require("../../assets/images/pic3.png")} />
           <Image style={styles.banner1}
               source={require("../../assets/images/pi4.png")} />
        </ScrollView>
        <Text style={styles.title2}>Mommies' First Choice</Text>
        <Text style={styles.title1}>Have a break, mommy!</Text>
        <Image style={styles.banner2}
               source={require("../../assets/images/spa.jpg")} />
        <Text style={styles.title13} >Thai Odyssey Massage Experience in Klang Valley</Text>
        <View style ={{flexDirection: "row"}}>
            <AntDesign name="star" size={20} color="orange" style={styles.dot}/>
            <Text style={styles.title14}>4.6</Text>
            <Text style={styles.title15}>(53)</Text>
            <Text style={styles.title15}>600+ booked</Text>
            
        </View>
        <View style ={{flexDirection: "row"}}>
        <View style={styles.box1}>
             <Text style={styles.title10} >Instant Confirmation</Text>
        </View>
        <Text style={styles.title16} >RM 72.10</Text>
    </View>
    <Image style={styles.banner2}
               source={require("../../assets/images/zumba.jpeg")} />
        <Text style={styles.title13} >Zumba Class with Ms Zaireen</Text>
        <View style ={{flexDirection: "row"}}>
            <AntDesign name="star" size={20} color="orange" style={styles.dot}/>
            <Text style={styles.title14}>5.0</Text>
            <Text style={styles.title15}>(13)</Text>
            <Text style={styles.title15}>200+ booked</Text>
            
        </View>
        <View style ={{flexDirection: "row"}}>
        <View style={styles.box1}>
             <Text style={styles.title10} >Instant Confirmation</Text>
        </View>
        <Text style={styles.title16} >RM 50.00</Text>
    </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  scrollView: {
    backgroundColor: "#FFFFFF"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    paddingTop: 20,
  },
  title1: {
    fontSize: 15,
    color:'grey',
    marginLeft: 20,
    marginTop:5,
  },
  title14: {
    fontSize: 20,
    color:'orange',
    marginLeft: 5,
    fontWeight: 'bold',
    marginTop:8,
  },
  image: {
    marginLeft: 20,
    width: 100,
    height: 100,
    marginTop: 10,
  },
  text: {
    color: 'white',
    fontSize: 10,
    lineHeight: 104,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    
  },
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    paddingTop: 25,
  },
  title3: {
    fontSize: 15,
    color:"#EF6E7A",
    marginLeft: 150,
    paddingTop: 20,
  },
  title5: {
    fontSize: 20,
    color:"#757373",
    marginLeft: 1,
    paddingTop: 5,
  },
  
  
  iC2: {
    width: 60,
    height: 60,
    marginLeft: 15,
    marginTop:18,
    borderRadius: 50,
  },
  banner:{
    width: 400,
    height: 180,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  banner1:{
    width: 150,
    height: 190,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  banner2:{
    width: 370,
    height: 150,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
  },
 
  dot:{
    marginLeft: 20,
    marginTop: 10,
  },

  
  fimg:{
    width: 80,
    height: 80,
    marginLeft: 20,
    marginTop:15,
    borderRadius:  5,
  },
  box3:{

  },
  title12: {
    fontSize: 15,
    color:"#EF6E7A",
   textAlign:'center',
    paddingTop: 5,
    fontWeight: 'bold',
    paddingLeft: 20
  },
  title13: {
    fontSize: 17.5,
    color:"#EF6E7A",
    paddingTop: 10,
    fontWeight: 'bold',
    paddingLeft: 20
    
  },
  title15: {
    fontSize: 13,
    color:"grey",
    paddingTop: 13,
    fontWeight: 'bold',
    paddingLeft: 5,
    
  },
  box1:{
    width: 195,
    height: 40,
    marginLeft: 20,
    marginTop: 15,
    backgroundColor: "#F5B7B1",
  },
  title10: {
    fontSize: 18,
    color:"#EF6E7A",
    marginLeft: 8,
    paddingTop: 10,
    fontWeight:'bold'
  },
  title16: {
    fontSize: 20,
    color:"#EF6E7A",
    paddingTop: 25,
    fontWeight: 'bold',
    paddingLeft: 100
    
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
});
