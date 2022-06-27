import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaAndroid } from './Components/AndroidSafeView';
import HomeScreen from './Components/Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import AboutScreen from './Components/Screens/AboutScreen';
import ProfileScreen from './Components/Screens/ProfileScreen';
import { AntDesign } from '@expo/vector-icons';
import RegisterScreen from './Components/Screens/RegisterScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
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
