import { StyleSheet, View, Image, Text, SafeAreaView, Button, Alert, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import FaceDetection from '../FaceDetection';


const PhotoCaptureScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.front);
    const [photo, setPhoto] = useState(null);
    const [toDisplay, setToDisplay] = useState(false);
    let cameraRef = useRef();
    useEffect(() => {
        const getPermission = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status)
        }
        getPermission();
    }, [])
    if (hasPermission !== 'granted') {
        return <Text>nope</Text>
    }
    const takePicture = async () => {
        const pictureRef = await cameraRef.current.takePictureAsync({ quality: 0.5 });
        setPhoto(pictureRef)
        setToDisplay(true)
    }
    const reTakePicture = () => {
        setToDisplay(false);
        setPhoto(null);
    }

    if (toDisplay) {
        return (
            <SafeAreaView style={styles.cameraContainer}>
                <View style={{ flex: 3 }}>
                    <Image source={{ uri: photo.uri }} style={{ flex: 1, resizeMode: 'cover' }} />
                </View>
                <View style={{ flex: 1 }}>
                    <FaceDetection imageUri={photo.uri} />
                    <Button title='Retake' onPress={reTakePicture} />
                </View>
            </SafeAreaView>

        )
    }

    return (
        <SafeAreaView style={styles.cameraContainer}>
            <Camera
                ref={cameraRef}
                onCameraReady={() => console.log("F")}
                style={styles.camera} type={type}>
                <View style={styles.camerabuttoncontainer}>
                    <Pressable
                        style={styles.camerabutton}
                        onPress={takePicture}
                    />
                </View>
            </Camera>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    superContainer: {
        flex: 1,
    },
    cameraContainer: {
        flex: 1
    },
    camerabutton: {
        width: 80,
        height: 80,
        bottom: 80,
        position: 'absolute',
        borderRadius: 50,
        backgroundColor: 'white'
    },
    camerabuttoncontainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'transparent'
    }
})

export default PhotoCaptureScreen