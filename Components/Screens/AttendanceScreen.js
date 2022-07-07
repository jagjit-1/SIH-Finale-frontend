import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { ScaledSheet, } from 'react-native-size-matters';
import { Avatar, Image } from '@rneui/base';
import { Calendar } from 'react-native-calendars';
import { Octicons } from '@expo/vector-icons';

const AttendanceScreen = ({ navigation }) => {


  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Preview Attendance',
      headerShadowVisible: false,
      swipeEnabled: true,
      headerRight: () => (
        <View>
          <Avatar rounded source={{ uri: "https://wallpaperaccess.com/full/749931.jpg" }} containerStyle={{ marginRight: 20 }} />
        </View>
      )
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../images/customdrawer.jpeg")} style={styles.container__image}>
        <Text style={styles.container__text}>Your Attendance Record</Text>
      </ImageBackground>
      <Calendar
      style={styles.calendar}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'black',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: 'blue',
          indicatorColor: 'blue',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '500',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '500',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16
        }}
        enableSwipeMonths={true}
        markedDates={{
          '2022-07-06': { selected: true, marked: true, selectedColor: 'rgb(83, 189, 235)' },
          '2022-07-01': { selected: true, marked: true, selectedColor: '#FFC107' },
          '2022-07-07': { selected: true, marked: true, selectedColor: '#FF5722' },
        }}
      />
      <View style={styles.info}>
        <View style={styles.info}>
          <Octicons name="dot-fill" size={24} color="rgb(83, 189, 235)" style={{ marginRight: 5 }} />
          <Text>Present</Text>
        </View>

        <View style={styles.info}>
          <Octicons name="dot-fill" size={24} color="#FF5722" style={{ marginRight: 5 }} />
          <Text>Absent</Text>
        </View>

        <View style={styles.info}>
          <Octicons name="dot-fill" size={24} color="#FFC107" style={{ marginRight: 5 }} />
          <Text>Holiday</Text>
        </View>


      </View>
    </View>
  )
}

export default AttendanceScreen

const styles = ScaledSheet.create({
  container:{
    backgroundColor:'white',
    height:'100%'
  },
  container__image: {
    width: '100%',
    height: '180@ms',
  },
  container__text: {
    fontSize: '25@ms',
    textAlign: 'center',
    height: "160@ms",
    textAlignVertical: 'center',
    color: 'white',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    margin: '6@ms',
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
})