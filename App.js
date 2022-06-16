import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaAndroid } from './Components/AndroidSafeView';
import { useState, useEffect } from 'react'
import * as Location from 'expo-location';

export default function App() {



  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);


  useEffect(() => {
    async function getlocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({
        accuracy:Location.Accuracy.Highest
      });
      setLocation(location);
      console.log(location); 
    }
    getlocation();
  }, [])
  let text = "Watign";
  // if (errorMsg) {
    // text = errorMsg;
  // } else if (location) {
    // text = location
  
  return (
    <View style={SafeAreaAndroid.SafeArea}>
      {/* <Text>{text}</Text> */}
      {/* <StatusBar style="auto" /> */}
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
