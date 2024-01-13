import { StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, View, } from '../../components/Themed';
import { Entypo } from '@expo/vector-icons';
export default function TabOneScreen() {
  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <View style ={{flexDirection: "row"}}>
        <Text style={styles.title}>Welcome, Wan Azlin</Text>
        <Image style={styles.iC2}
               source={require("../../assets/images/alin.jpg")} /> 
      </View>
      <Text style={styles.title2}>Saturday, 13 Jan 2024</Text>
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
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
    paddingTop: 30,
  },
  title2: {
    fontSize: 15,
    color:"#757373",
    marginLeft: 20,
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
  iC2: {
    width: 60,
    height: 60,
    marginLeft: 90,
    marginTop:15,
    borderRadius: 50,
  },
  banner:{
    width: 400,
    height: 180,
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
    color:"#EF6E7A",
    width: 50,
    height: 30,
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 10,
  }
});
