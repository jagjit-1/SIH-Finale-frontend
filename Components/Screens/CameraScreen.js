import { View, Text, SafeAreaView, Pressable, StyleSheet } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import FaceDetection from '../FaceDetection';

const CameraScreen = ({ navigation }) => {
    let cameraRef = useRef(null);
    const [hasPermission, setHasPermission] = useState(null);

    const [type, setType] = useState(CameraType.front);
    useEffect(() => {
        const getPermission = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status)
        }
        getPermission();
    }, [])
    const takePhoto = async () => {
        const res = await cameraRef.current.takePictureAsync({ quality: 0.5 })
        navigation.navigate('photocapture', { uri: res.uri })

    }
    return (
        <View style={styles.cameraContainer}>
            <Camera
                ref={cameraRef}
                onCameraReady={() => console.log("F")}
                type={type}
                style={styles.camera}
            >
                <View style={styles.cameraButtonContainer}>
                    <Pressable
                        style={styles.cameraButton}
                        onPress={takePhoto}
                    />
                </View>

            </Camera>
        </View >
    )
}

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1
    },
    camera: {
        flex: 1
    },
    cameraButton: {
        position: 'absolute',
        bottom: 70,
        width: 80,
        height: 80,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 100,
    },
    cameraButtonContainer: {
        flex: 1
    }
})

export default CameraScreen