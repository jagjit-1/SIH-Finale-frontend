import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import NotIdentified from './NotIdentified'
import Identified from './Identified'

const IsVerified = (props) => {
    const [loading, setLoading] = useState(false)
    const [toVerify, setToVerify] = useState(false)
    const [identified, setIdentified] = useState(false)
    useEffect(() => {
        if (props.photo) {
            setLoading(false)
            setToVerify(true)
            setIdentified(true)
            // api calls to verify the image
        }
    }, [props.photo])

    if (toVerify && loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size='large' color='#5379f6' />
                <View>
                    <Text style={styles.loaderText}>
                        Verifying Details
                    </Text>
                </View>
            </View>
        )
    }
    if (toVerify && !loading && identified) {
        return (
            <Identified navigation={props.navigate} />
        )
    }
    if (toVerify && !loading && !identified) {
        return (
            <NotIdentified navigation={props.navigate} />
        )
    }
    return (
        <View>
            <Text>click a photo first</Text>
        </View>
    )
}

export default IsVerified

const styles = StyleSheet.create({
    loaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loaderText: {
        fontSize: 20,
        paddingLeft: 10
    }
})