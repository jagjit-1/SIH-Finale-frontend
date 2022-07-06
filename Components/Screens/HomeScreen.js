import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, Dimensions, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useHeaderHeight } from '@react-navigation/elements';
import { Button } from '@rneui/base';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';

const HomeScreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Home',
      headerShadowVisible: false
    })
  }, [navigation])


  return (
    <View style={styles.homescreen__header} showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.header}>
          <Text style={styles.header__text} >
            OfficeSarthi
          </Text>
          <Text style={styles.header__descText}>
            Your smart attendance tracker
          </Text>
        </View>
        <View style = {[styles.homescreen__image,styles.image__view]}>
          <Image style={styles.homescreen__image} source={require("../images/attendance.jpg")} />
        </View>


        <View>
          <Text style={styles.display__text}>
            Mark Attendance
          </Text>
          <Text style={{ textAlign: 'center' }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, corrupti?
          </Text>
        </View>
        <View style={styles.homescreen__bottombtn}>
          <Button color="#5379f6" title="Login" type="outline" onPress={() => console.log("About us pressed")} raised containerStyle={{ width: 140 }} />
          <Button color="#5379f6" title="Mark Attendance" onPress={() => navigation.navigate("mapscreen")} raised containerStyle={{ width: 160 }} />
        </View>
      </View>

    </View>
  )
}
export default HomeScreen

const styles = ScaledSheet.create({

  homescreen__image: {
    width: '300@ms',
    height: '200@ms',
    display: 'flex',
    alignSelf: 'center',
    borderRadius:"15@ms"
  },
  homescreen__bottombtn: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '30@ms',
    width: '360@ms',
    justifyContent: 'space-evenly',
    marginBottom: '15@ms',
    marginTop: '75@ms'
  },
  homescreen__header: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'scroll',
    backgroundColor: 'white',
    padding: '10@ms',
    height: '100%',
    // justifyContent:'center'
    paddingTop: '70@ms'
  },
  header__text: {
    textAlign: 'center',
    fontSize: '35@ms',
    fontFamily: 'normal',
    marginBottom: '10@ms',
  },
  header__descText: {
    textAlign: 'center',
    fontSize: '15@ms',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '50@ms'
  },
  display__text: {
    textAlign: 'center',
    fontSize: '20@ms',
  },
  image__view:{
    elevation:'15@ms',
    margin:'15@ms',
    marginBottom:"25@ms",
  }

})