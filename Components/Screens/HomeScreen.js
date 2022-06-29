import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// import attendance from ''

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ height: '100%', display:'flex', flexDirection:'column', overflow:'scroll' }}  >
      <View style = {{flex:0.8}}>
        <TouchableOpacity activeOpacity={0.5} style={styles.homscreen__buttons}>
          <Image style={styles.homescreen__image} source={require("../images/attendance.jpg")} />
          <Text style={styles.homescreen__text}>
            Mark Your Attendance
          </Text>
          <FontAwesome5 name="user-check" size={40} color="#5379f6" style={{ alignSelf: 'center' }} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} style={styles.homscreen__buttons}>
          <Image style={styles.homescreen__image} source={require("../images/register.jpg")} />
          <Text style={styles.homescreen__text}>
            New Registration
          </Text>
          <FontAwesome5 name="user-plus" size={40} color="#5379f6" style={{ alignSelf: 'center' }} />
        </TouchableOpacity>
      </View>
      <View style={styles.homescreen__bottombtn}>
        <TouchableOpacity activeOpacity={0.5} style={styles.bottom_btns}>
          <Text style={{ textAlign: 'center', textAlignVertical: 'center', height: '100%', fontWeight: "700", fontSize: 18 }}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={styles.bottom_btns}>
          <Text style={{ textAlign: 'center', textAlignVertical: 'center', height: '100%', fontWeight: "700", fontSize: 18 }}>Contact Admin</Text>
        </TouchableOpacity>
      </View>


    </View>


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
    width: 320,
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 25
  },
  homescreen__image: {
    width: 240,
    height: 200,
    display: 'flex',
    alignSelf: 'center'
  },
  homescreen__text: {
    fontWeight: '800',
    fontSize: 25,
    display: 'flex',
    textAlign: 'center',
    marginBottom: 10
  },
  homescreen__bottombtn: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    alignSelf: 'center',
    marginTop: 100,
    width: 320,
    justifyContent: 'space-between',
    flex:0.1
  },
  bottom_btns: {
    elevation: 10,
    shadowColor: "#52006A",
    backgroundColor: '#5379f6',
    padding: 20,
    paddingBottom: 25,
    margin: 3,
    borderRadius: 25,
    width: 'auto'
  }
})


  // <LinearGradient
  // colors={['rgba(255,38,32,1)', 'rgba(255,222,119,1)', 'rgba(173,239,165,1)', 'rgba(65,133,64,1)']}
  // end={{ x: 1.9, y: 0.6 }}
  // >
  // </LinearGradient>


  // < View >
  // <TouchableOpacity style={styles.homescreen__button} activeOpacity={0.4} onPress={() => navigation.navigate("register")} >
  //   {/* <Image style={styles.homescreen__image} source={require("../images/register_now.jpg")} /> */}
  //   <Text style={styles.homescreen__text}>
  //     New Registration
  //   </Text>
  //   <Ionicons name="md-person-add" size={40} color="green" style={{ alignSelf: 'center' }} />
  // </TouchableOpacity>
  //         </ >