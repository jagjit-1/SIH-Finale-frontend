import { View, Text } from 'react-native'
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './Components/Screens/ProfileScreen';

import RegisterScreen from './Components/Screens/RegisterScreen';
import AttendanceScreen from './Components/Screens/AttendanceScreen';
import ContactAdmin from './Components/Screens/ContactAdmin';
import CustomDrawer from './Components/CustomDrawer';
import { Octicons } from '@expo/vector-icons';
import AboutScreen from './Components/Screens/AboutScreen';


const LoggedIn = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator initialRouteName='Profile' screenOptions={{ drawerType: 'back', drawerLabelStyle: { marginLeft: -17 }, drawerStyle: { width: 320, borderWidth: 3, borderColor: '#673AB7' } }} drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen name="About" component={AboutScreen} />

            <Drawer.Screen name="Profile" component={ProfileScreen} options={{ drawerIcon: () => (<Octicons name="dot-fill" size={20} color="#673AB7" />) }} />
            <Drawer.Screen name="register" component={RegisterScreen} options={{ drawerIcon: () => (<Octicons name="dot-fill" size={20} color="#673AB7" />) }} />
            <Drawer.Screen name="prevAttendance" component={AttendanceScreen} options={{ drawerIcon: () => (<Octicons name="dot-fill" size={20} color="#673AB7" />) }} />
            <Drawer.Screen name="contactadmin" component={ContactAdmin} options={{ drawerIcon: () => (<Octicons name="dot-fill" size={20} color="#673AB7" />) }} />

        </Drawer.Navigator>
    )
}

export default LoggedIn;