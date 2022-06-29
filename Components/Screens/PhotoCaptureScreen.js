import { StyleSheet, View, Text, SafeAreaView, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';

const PhotoCaptureScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.front);
    useEffect(() => {
        const getPermission = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status)
        }
        getPermission();
    }, [])
    const onPress = () => {
        console.log("to be done")
    }
    return (
        <SafeAreaView style={styles.cameraContainer}>
            <Camera style={styles.camera} type={type} ref={(r) => camera = r}>
                <View>
                    <Button title='Press me' />
                </View>
            </Camera>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    camera: {
        flex: 1
    },
    cameraContainer: {
        flex: 1
    }
})

export default PhotoCaptureScreen