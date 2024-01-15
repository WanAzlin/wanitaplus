import { StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, View, } from '../../components/Themed';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
export default function TabOneScreen() {
  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <View style ={{flexDirection: "row"}}>
      <Image style={styles.iC2}
               source={require("../../assets/images/alin.jpg")} /> 
        <Text style={styles.title}>Welcome, Wan Azlin</Text>
      
      </View>
      
      <Image style={styles.banner}
               source={require("../../assets/images/banner.jpg")} />
      <View style ={{flexDirection: "row"}}>
        <Text style={styles.title4}>Popular Channel</Text>
        <Text style={styles.title3}>View All</Text> 
        </View>
        <ScrollView
          horizontal={true}
          style={styles.group}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.boxGroup}>
            <View style={styles.live}>
          <View style ={{flexDirection: "row", borderRadius: 20}}>
              <Entypo name="dot-single" size={34} color="red" style={styles.dot}/>
              <Text style={styles.title5}>Live</Text> 
          </View>
          <Text style={styles.title6}>Topic</Text> 
       
          </View>
          <Text style={styles.title7}>Che Nom Masak Apa Hari Ini?</Text> 
          <Text style={styles.title8}>By Che Nom</Text> 
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
          </View>
          <View style={styles.boxGroup}>
          <View style={styles.live}>
          <View style ={{flexDirection: "row", borderRadius: 20}}>
              <Entypo name="dot-single" size={34} color="red" style={styles.dot}/>
              <Text style={styles.title5}>Live</Text> 
          </View>
          <Text style={styles.title6}>Topic</Text> 
       
          </View>
          <Text style={styles.title7}>Jom Belajar Makeup</Text> 
          <Text style={styles.title8}>By Zaireen</Text> 
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
        </View>
     </ScrollView>
     <View style ={{flexDirection: "row"}}>
        <Text style={styles.title4}>Trending Categories</Text>
        <Text style={styles.title9}>View All</Text> 
        </View>
     <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.box1}>
             <Text style={styles.title10} >Recipe</Text>
          </View>
          <View style={styles.box2}>
             <Text style={styles.title11} >Sports</Text>
          </View>
        
          <View style={styles.box2}>
             <Text style={styles.title11} >Fashion</Text>
          </View>
          <View style={styles.box2}>
             <Text style={styles.title11} >Health</Text>
          </View> 
        </ScrollView>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.box3}>
            <Image style={styles.fimg}
               source={require("../../assets/images/fimg1.jpg")} />
               <Text style={styles.title12} >Chicken Roast</Text>
          </View>
          <View style={styles.box3}>
          <Image style={styles.fimg}
               source={require("../../assets/images/fimg2.jpg")} />
               <Text style={styles.title12} >Salad Popiah</Text>
          </View>
          <View style={styles.box3}>
          <Image style={styles.fimg}
               source={require("../../assets/images/fimg3.jpg")} />
               <Text style={styles.title12} >Chicken Rice</Text>
          </View>
        </ScrollView>
        <Text style={styles.title4}>Be More Than Superwomen</Text>
        <Image style={styles.banner1}
               source={require("../../assets/images/women.png")} />
        <Text style={styles.title4}>Our Certified Buddies</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.box3}>
            <Image style={styles.pimg}
               source={require("../../assets/images/av10.png")} />
               <Text style={styles.title12} >Dr Raziah</Text>
               <Text style={styles.title13} >Befrienders</Text>
          </View>
          <View style={styles.box3}>
          <Image style={styles.pimg}
               source={require("../../assets/images/av11.png")} />
               <Text style={styles.title12} >Dr Shakila</Text>
               <Text style={styles.title13} >Befrienders</Text>
          </View>
          <View style={styles.box3}>
          <Image style={styles.pimg}
               source={require("../../assets/images/av13.png")} />
               <Text style={styles.title12} >Dr Mariam</Text>
               <Text style={styles.title13} >Befrienders</Text>
          </View>
          <View style={styles.box3}>
          <Image style={styles.pimg}
               source={require("../../assets/images/av15.png")} />
               <Text style={styles.title12} >Dr Sarah</Text>
               <Text style={styles.title13} >Befrienders</Text>
          </View>
        </ScrollView>
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
    paddingTop: 35,
  },
  title2: {
    fontSize: 15,
    color:"#757373",
    marginLeft: 100,
    paddingBottom: 10,
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
  title4: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    paddingTop: 10,
  },
  title6: {
    fontSize: 14,
    color:"#DBDBDB",
    marginLeft: 5,
    paddingTop: 10,
  },
  title7: {
    fontSize: 17,
    color:"#FFFFFF",
    marginLeft: 15,
    paddingTop: 30,
  },
  title8: {
    fontSize: 14,
    color:"#DBDBDB",
    marginLeft: 15,
    paddingTop: 20,
  },
  title9: {
    fontSize: 15,
    color:"#EF6E7A",
    marginLeft: 100,
    paddingTop: 20,
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
    width: 400,
    height: 190,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  group:{
    marginTop: 10,
  },
  boxGroup:{
    backgroundColor: "#EF6E7A",
    borderRadius: 20,
    height: 200,
    width: 250,
    marginLeft: 10,
  },
  live:{
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    width: 80,
    height: 35,
    marginTop: 10,
    marginLeft: 10,
  },
  dot:{

  },
  av1: {
    width: 30,
    height: 30,
    marginLeft: 15,
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
  box1:{
    borderWidth: 2,
    borderColor:"#EF6E7A",
    width: 100,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: "#EF6E7A",
  },
  box2:{
    borderWidth: 2,
    borderColor:"#EF6E7A",
    width: 100,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 10,
    
  },
  fimg:{
    width: 140,
    height: 130,
    marginLeft: 10,
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
    fontWeight: 'bold'
  },
  title13: {
    fontSize: 13,
    
    textAlign:'center',
    paddingTop: 5,
    
  },
  pimg:{
    width: 100,
    height: 100,
    marginLeft: 10,
    marginTop:15,
    borderRadius: 50,
  },
});
