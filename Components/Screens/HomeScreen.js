import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, Dimensions, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Button } from '@rneui/base';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';


const { width, height } = Dimensions.get('window')
const HomeScreen = ({ navigation }) => {



  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Home',
      headerShadowVisible: false,
      headerShown: false,
      swipeEnabled: false
    })
  }, [navigation])


  return (
    <View style={styles.homescreen__header} showsVerticalScrollIndicator={false}>

      <View style={styles.header}>
        <Text style={styles.header__text} >
          OfficeSarthi
        </Text>
        <Text style={styles.header__descText}>
          Your smart attendance tracker
        </Text>
      </View>
      <View style={[styles.homescreen__image, styles.image__view]}>
        <Image style={styles.homescreen__image} source={require("../images/attendance.jpg")} />
      </View>


      <View>
        <Text style={styles.display__text}>
          Mark Attendance
        </Text>
        <Text style={{ textAlign: 'center', color: 'gray' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, corrupti?
        </Text>
      </View>
      <View style={styles.homescreen__bottombtn}>
        <Button color="#5379f6" title="Login" type="outline" onPress={() => navigation.navigate("register")} raised containerStyle={{ width: 140 }} />
        <Button color="#673AB7" title="Mark Attendance" onPress={() => navigation.navigate("mapscreen")} raised containerStyle={{ width: 160 }} />
      </View>

    </View>
  )
}
export default HomeScreen

const styles = ScaledSheet.create({

  homescreen__image: {
    width: width - 60,
    height: height / (3.5),
    display: 'flex',
    alignSelf: 'center',
    borderRadius: "15@ms"
  },
  homescreen__bottombtn: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    width: width,
    justifyContent: 'space-evenly',
  },
  homescreen__header: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'scroll',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',

    height: '100%',
  },
  header__text: {
    textAlign: 'center',
    fontSize: '35@ms',
    fontFamily: 'normal',
  },
  header__descText: {
    textAlign: 'center',
    fontSize: '15@ms',
    color: 'gray'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 0.2
  },
  display__text: {
    textAlign: 'center',
    fontSize: '20@ms',
  },
  image__view: {
    elevation: '15@ms',
  }

})