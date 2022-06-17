import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaAndroid } from './Components/AndroidSafeView';

export default function App() {

  let text = "Watign"; 
  return (
    <View style={SafeAreaAndroid.SafeArea}>
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
