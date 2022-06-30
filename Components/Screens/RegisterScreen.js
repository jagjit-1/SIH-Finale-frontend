import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, TouchableNativeFeedback, Dimensions } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Image, Input } from "@rneui/themed";
import { Button } from "@rneui/base";
import { useHeaderHeight } from '@react-navigation/elements';


const RegisterScreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Register Yourself",
      headerStyle: { backgroundColor: '#5379f6' },
      headerTitleStyle: { color: "white" },
      headerTintColor: "white",
      headerTitleAlign: 'center',
    })
  }, [navigation])
  const headerHeight = useHeaderHeight();

  const { width, height } = Dimensions.get('window');
  return (
      <KeyboardAvoidingView style={{ padding: 20, width: '100%', height: height - headerHeight, display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1}} >
        <ScrollView style={{ display: 'flex', flexDirection: "column" }} showsVerticalScrollIndicator={false}>
          <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', elevation: 10, shadowColor: '#52006A', backgroundColor: 'white', marginBottom: 20, padding: 12, borderRadius: 20 }}>
            <Image
              style={{ width: width - 100, height: 200 }}
              source={require('../images/signup.webp')}

            />
          </View>
          <View>
            <Input
              placeholder='Full Name'
              label="Enter your Name"
              labelStyle={{
                color: 'black',
                marginBottom: 5
              }}

              // <Entypo name="mail" size={24} color="black" />
              leftIcon={{ type: 'font-awesome', name: 'user', color: 'gray', marginRight: 3 }}
            />
          </View>
          <View>
            <Input
              placeholder='email@address.com'
              label="Enter your mail (optional)"
              labelStyle={{ color: 'black', marginBottom: 5 }}
              leftIcon={{ type: 'Entypo', name: 'mail', color: 'gray', marginRight: 3 }}
              keyboardType="email-address"
            />
          </View>
          <View>
            <Input
              placeholder='10 digit phone number'
              label="Enter your phone number"
              labelStyle={{ color: 'black', marginBottom: 5 }}
              leftIcon={{ type: 'Entypo', name: 'phone', color: 'gray', marginRight: 3 }}
              keyboardType="phone-pad"
            />
          </View>
          <View>
            <Input
              placeholder='DD/MM/YYYY'
              label="Enter your Date of birth (DOB)"
              labelStyle={{ color: 'black', marginBottom: 5 }}
              leftIcon={{ type: 'font-awesome', name: 'calendar', color: 'gray', marginRight: 6 }}
              keyboardType="number-pad"
            />
          </View>


          <View style={{ marginBottom: 15 }}>
            <Button raised color="#5379f6" type="outline" title="Upload your image" TouchableComponent={TouchableNativeFeedback} onPress={() => console.log("Upload Submit button clicked")} />
          </View>
          <View>
            <Button raised color="#5379f6" type="solid" title="Continue" TouchableComponent={TouchableNativeFeedback} onPress={() => console.log("Register Submit button clicked")} />
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    

  )
}

export default RegisterScreen

const styles = StyleSheet.create({})