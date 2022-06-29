import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// import attendance from ''

const HomeScreen = ({ navigation }) => {
  return (

    <View style={{ height: '100%' }}  >
      <View >
        <TouchableOpacity activeOpacity={0.5} style={{ elevation: 10, shadowColor: '#52006A', backgroundColor: 'white', padding: 2, paddingBottom: 6, margin: 3, width: 320, alignSelf: 'center', marginTop: 25, borderRadius: 25 }}>
          <Image style={{ width: 240, height: 200, display: 'flex', alignSelf: 'center' }} source={require("../images/attendance.jpg")} />
          <Text style={{ fontWeight: '800', fontSize: 25, display: 'flex', textAlign: 'center', marginBottom: 10 }}>
            Mark Your Attendance
          </Text>
          <FontAwesome5 name="user-check" size={40} color="#5379f6" style={{ alignSelf: 'center' }} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} style={{ elevation: 10, shadowColor: '#52006A', backgroundColor: 'white', padding: 2, paddingBottom: 6, margin: 3, width: 320, alignSelf: 'center', marginTop: 25, borderRadius: 25 }}>
          <Image style={{ width: 240, height: 200, display: 'flex', alignSelf: 'center' }} source={require("../images/register.jpg")} />
          <Text style={{ fontWeight: '800', fontSize: 25, display: 'flex', textAlign: 'center', marginBottom: 10 }}>
            New Registration
          </Text>
          <FontAwesome5 name="user-plus" size={40} color="#5379f6" style={{ alignSelf: 'center' }} />
        </TouchableOpacity>
        <View style = {{display:'flex', flexDirection:'row', height:50, alignSelf:'center', marginTop:25, width:320, justifyContent:'space-between'}}>
          <TouchableOpacity activeOpacity={0.5} style = {{elevation:10, shadowColor:"#52006A", backgroundColor:'#5379f6', padding:2, paddingBottom:6, margin:3, width:140, borderRadius:25}}>
            <Text style = {{textAlign:'center', textAlignVertical:'center', height:'100%', fontWeight:"700", fontSize:18}}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style = {{elevation:10, shadowColor:"#52006A", backgroundColor:'#5379f6', padding:2, paddingBottom:6, margin:3, width:160, borderRadius:25}}>
            <Text style = {{textAlign:'center', textAlignVertical:'center', height:'100%', fontWeight:"700", fontSize:18}}>Contact Admin</Text>
          </TouchableOpacity>
        </View>

      </View>
      {/* <View style={{ marginBottom: 20 }} >
        <TouchableOpacity style={styles.homescreen__contactbutton} activeOpacity={0.4}>
          <Text style={styles.homescreen__text}>
            Contact Admin
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.homescreen__contactbutton} activeOpacity={0.4}>
          <Text style={styles.homescreen__text}>
            About us
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>


  )
}
export default HomeScreen

const styles = StyleSheet.create({

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