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


export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  let text = "Watign";
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
 
            return <Ionicons name="ios-home" size={size} color={color} />;
          } else if (route.name === "About") {
            return <FontAwesome name="question-circle-o" size={size} color={color} />
          } else if (route.name === "Profile") {
            return <AntDesign name="profile" size={size} color={color} />
          }
        },
        tabBarActiveTintColor: '#FF9933',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
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
