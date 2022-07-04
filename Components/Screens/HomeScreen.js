import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, Dimensions, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useHeaderHeight } from '@react-navigation/elements';
import { Button } from '@rneui/base';

const { width, height } = Dimensions.get('window');
const image__height = (height*(0.35));
// const image__width = width/20; 
const size = (0.1*width);
const fontsize = width/20;  
const HomeScreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Attendance Tracker',
      headerStyle: { backgroundColor: '#5379f6' },
      headerTitleStyle: { color: "white" },
      headerTintColor: "white",
      headerTitleAlign: 'center',

    })
  }, [navigation])
  const headerHeight = useHeaderHeight();

  console.log(height, width);
  return (
    <ScrollView style={{ height: height - headerHeight, display: 'flex', flexDirection: 'column', overflow: 'scroll' }} showsVerticalScrollIndicator={false}>

      <View >
        <TouchableOpacity activeOpacity={0.5} style={styles.homscreen__buttons}>
          <Image style={styles.homescreen__image} source={require("../images/attendance.jpg")} />
          <Text style={styles.homescreen__text}>
            Mark Your Attendance
          </Text>
          <FontAwesome5 name="user-check" size={size} color="#5379f6" style={{ alignSelf: 'center' }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("register")} activeOpacity={0.5} style={styles.homscreen__buttons}>
          <Image style={styles.homescreen__image} source={require("../images/register.jpg")} />
          <Text style={styles.homescreen__text}>
            New Registration
          </Text>
          <FontAwesome5 name="user-plus" size={size} color="#5379f6" style={{ alignSelf: 'center' }} />
        </TouchableOpacity>
      </View>
      <View style={styles.homescreen__bottombtn}>
        <Button color="#5379f6" title="About us"  type="outline" onPress={()=>console.log("About us pressed")} raised containerStyle = {{width:140}}/>
        <Button color="#5379f6" title="Contact Admin" onPress={()=>console.log("Contact admin pressed")} raised containerStyle={{width:160}} />
      </View>
    </ScrollView>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
  homscreen__buttons: {
    elevation: 10,
    shadowColor: '#52006A',
    backgroundColor: 'white',
    padding: 2,
    paddingBottom: 6,
    margin: 3,
    width: width-100,
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 25,
  },
  homescreen__image: {
    width: 240,
    height: 200,
    display: 'flex',
    alignSelf: 'center'
  },
  homescreen__text: {
    fontWeight: '800',
    fontSize: fontsize,
    display: 'flex',
    textAlign: 'center',
    marginBottom: 10
  },
  homescreen__bottombtn: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 30,
    width: width,
    justifyContent: 'space-evenly',
    marginBottom:15
  },
  // bottom_btns: {
  //   elevation: 10,
  //   shadowColor: "#52006A",
  //   backgroundColor: '#5379f6',
  //   padding: 20,
  //   // paddingBottom: 25,
  //   margin: 3,
  //   borderRadius: 25,
  //   width: 'auto'
  // }
})

{/* <TouchableOpacity activeOpacity={0.5} style={styles.bottom_btns}>
          <Text style={{ textAlign: 'center', textAlignVertical: 'center', height: '100%', fontWeight: "700", fontSize: 18, }}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={styles.bottom_btns}>
          <Text style={{ textAlign: 'center', textAlignVertical: 'center', height: '100%', fontWeight: "700", fontSize: 18 }}>Contact Admin</Text>
        </TouchableOpacity> */}