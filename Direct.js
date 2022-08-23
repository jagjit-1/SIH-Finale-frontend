import { View, Text } from 'react-native'
import React from 'react';


import PhotoCaptureScreen from './Components/Screens/PhotoCaptureScreen';
import MapScreen from './Components/Screens/MapScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LogoScreen from './Components/Screens/AttendenceMarkedSuccessfullyScreen';

import CameraScreen from './Components/Screens/CameraScreen';

const Direct = () => {
    const AttendanceStack = createNativeStackNavigator();
    return (

        <AttendanceStack.Navigator initialRouteName='mapscreen'>
            <AttendanceStack.Screen name='mapscreen' component={MapScreen} />
            <AttendanceStack.Screen name="photocapture" component={PhotoCaptureScreen} />
            <AttendanceStack.Screen name="camera" component={CameraScreen} />
            <AttendanceStack.Screen name="AttendanceMarked" component={LogoScreen} />
        </AttendanceStack.Navigator>

    )
}

export default Direct