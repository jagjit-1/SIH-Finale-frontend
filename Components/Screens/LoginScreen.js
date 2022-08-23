import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, TouchableNativeFeedback, Dimensions } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { Image, Input } from "@rneui/themed";
import { Button } from "@rneui/base";
import { useHeaderHeight } from '@react-navigation/elements';
import { AuthContext } from '../../AuthProvider';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from "../../Firebase/firebase"

const LoginScreen = ({ navigation }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Login",
      headerStyle: { backgroundColor: '#3700B3' },
      headerTitleStyle: { color: "white" },
      headerTintColor: "white",
      headerTitleAlign: 'center',
    })
  }, [navigation])
  const headerHeight = useHeaderHeight();

  const { width, height } = Dimensions.get('window');


  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");


  const HandleLogin = () => {

    setIsLoggedIn(!isLoggedIn);    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  return (
    <KeyboardAvoidingView style={{ padding: 20, width: '100%', height: height - headerHeight, display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }} >
      <View style={{ display: 'flex', flexDirection: "column", flex: 0.5, justifyContent: 'space-around' }} showsVerticalScrollIndicator={false}>
        <ScrollView>
          <View >
            <Text style={{ fontSize: 40, color: '#3700B3' }}>Welcome back!</Text>
          </View>

          <View>
            <View>
              <Input
                placeholder='email@address.com'
                label="Enter your mail"
                labelStyle={{ color: 'black', marginBottom: 5 }}
                leftIcon={{ type: 'Entypo', name: 'mail', color: 'gray', marginRight: 3 }}
                keyboardType="email-address"
                onChangeText={(text) => setemail(text)}
              />
            </View>
            <View>
              <Input
                placeholder='Password'
                label="Enter your Password"
                labelStyle={{ color: 'black', marginBottom: 5 }}
                leftIcon={{ type: 'Entypo', name: 'mail', color: 'gray', marginRight: 3 }}
                keyboardType="visible-password"
                secureTextEntry={true}
                onChangeText={(pass) => setpassword(pass)}
              />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Button raised color="#5379f6" type="outline" title="Continue" TouchableComponent={TouchableNativeFeedback} onPress={() => HandleLogin()} />
            </View>
          </View>
        </ScrollView>



      </View>
    </KeyboardAvoidingView>


  )
}

export default LoginScreen

const styles = StyleSheet.create({})