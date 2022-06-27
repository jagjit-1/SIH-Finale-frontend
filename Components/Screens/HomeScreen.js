import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const HomeScreen = () => {
  return (
    <LinearGradient
      colors={['rgba(255,173,3,1)', 'rgba(235,243,220,1)', 'rgba(146,182,41,1)', 'rgba(145,181,39,1)']}
      end={{x:0.5, y:1.4}} 
    >
      <View style={styles.homescreen} >
        <View>
          <TouchableOpacity style={styles.homescreen__button} activeOpacity={0.4}>
            <Image style={styles.homescreen__image} source={require("../images/mark_attendance.jpg")} />
            <Text style={styles.homescreen__text}>
              Mark Your Attendance
            </Text>
            <FontAwesome name="arrow-circle-right" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.homescreen__button} activeOpacity={0.4}>
            <Image style={styles.homescreen__image} source={require("../images/register_now.jpg")} />
            <Text style={styles.homescreen__text}>
              New Registration
            </Text>
            <FontAwesome name="arrow-circle-right" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>

  )
}
export default HomeScreen

const styles = StyleSheet.create({
  homescreen: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 100,
    height:'100%'
    
  },
  homescreen__button: {
    elevation: 10,
    shadowColor: "#52006A",
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
  },
  homescreen__image: {
    height: 150,
    width: 150,
    borderRadius: 15,
    marginBottom: 20
  },
  homescreen__text: {
    marginBottom: 10,
  }
})