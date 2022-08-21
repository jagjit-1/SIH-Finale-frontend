import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, TouchableNativeFeedback, Dimensions } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Image, Input } from "@rneui/themed";
import { Button } from "@rneui/base";
import { useHeaderHeight } from '@react-navigation/elements';

const RegisterScreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Login",
      headerStyle: { backgroundColor: '#673AB7' },
      headerTitleStyle: { color: "white" },
      headerTintColor: "white",
      headerTitleAlign: 'center',
    })
  }, [navigation])
  const headerHeight = useHeaderHeight();

  const { width, height } = Dimensions.get('window');
  return (
    <KeyboardAvoidingView style={{ padding: 20, width: '100%', height: height - headerHeight, display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }} >
      <View style={{ display: 'flex', flexDirection: "column", flex: 0.5, justifyContent: 'space-around' }} showsVerticalScrollIndicator={false}>

        <View >
          <Text style={{ fontSize: 40, color:'#673AB7' }}>Welcome back!</Text>
        </View>

        <View>
          <View>
            <Input
              placeholder='email@address.com'
              label="Enter your mail"
              labelStyle={{ color: 'black', marginBottom: 5 }}
              leftIcon={{ type: 'Entypo', name: 'mail', color: 'gray', marginRight: 3 }}
              keyboardType="email-address"
            />
          </View>
          <View>
            <Input
              placeholder='Password'
              label="Enter your Password"
              labelStyle={{ color: 'black', marginBottom: 5 }}
              leftIcon={{ type: 'Entypo', name: 'mail', color: 'gray', marginRight: 3 }}
              keyboardType="email-address"
            />
          </View>

          <View style={{ marginBottom: 15 }}>
            <Button raised color="#5379f6" type="outline" title="Continue" TouchableComponent={TouchableNativeFeedback} onPress={() => console.log("Upload Submit button clicked")} />
          </View>
        </View>


      </View>
    </KeyboardAvoidingView>


  )
}

export default RegisterScreen

const styles = StyleSheet.create({})