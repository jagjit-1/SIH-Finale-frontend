import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import * as Location from 'expo-location';


const MapScreen = () => {
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
                accuracy: Location.Accuracy.Highest
            });
            setLocation(location);
            console.log(location);
        }
        getlocation();
    }, [])
    return (
        <View>
            <Text>MapScreen</Text>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})