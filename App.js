import 'react-native-gesture-handler';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SafeAreaAndroid } from './Components/AndroidSafeView';
import HomeScreen from './Components/Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from './Components/Screens/AboutScreen';
import ProfileScreen from './Components/Screens/ProfileScreen';
import RegisterScreen from './Components/Screens/RegisterScreen';
import PhotoCaptureScreen from './Components/Screens/PhotoCaptureScreen';
import MapScreen from './Components/Screens/MapScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './Components/CustomDrawer';
import { Octicons } from '@expo/vector-icons';


export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home' screenOptions={{ drawerType: 'back', drawerLabelStyle: { marginLeft: -17 }, drawerStyle: { width: 320, borderWidth: 3, borderColor: '#3761f0' } }} drawerContent={props => <CustomDrawer {...props} />}>
          <Drawer.Screen name="Home" component={HomeScreen} options={{ drawerIcon: () => (<Octicons name="dot-fill" size={20} color="#5379f6" />) }} />
          <Drawer.Screen name="About" component={AboutScreen} options={{ drawerIcon: () => (<Octicons name="dot-fill" size={20} color="#5379f6" />) }} />
          <Drawer.Screen name="Profile" component={ProfileScreen} options={{ drawerIcon: () => (<Octicons name="dot-fill" size={20} color="#5379f6" />) }} />
          <Drawer.Screen name="register" component={RegisterScreen} options={{ drawerIcon: () => (<Octicons name="dot-fill" size={20} color="#5379f6" />) }} />
          <Drawer.Screen name="photocapture" component={PhotoCaptureScreen} options={{ drawerIcon: () => (<Octicons name="dot-fill" size={20} color="#5379f6" />) }} />
          <Drawer.Screen name='mapscreen' component={MapScreen} options={{ drawerIcon: () => (<Octicons name="dot-fill" size={20} color="#5379f6" />) }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
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
