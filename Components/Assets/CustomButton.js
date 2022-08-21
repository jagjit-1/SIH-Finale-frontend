import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const CustomButton = (props) => {
    return (
        <Pressable
            android_ripple
            onPress={props.onPress}
            style={() => [
                styles.buttonContainer,
                props.style
            ]}
        >
            <Text style={[styles.buttonContent, props.textStyle]}>{props.title}</Text>
        </Pressable>
    )
}



const styles = StyleSheet.create({
    buttonContainer: {
        height: 41,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        elevation: 4,
        width: 230,
        backgroundColor: '#6200EE',
        shadowColor: 'black',
        shadowOpacity: 0.175,
        borderRadius: 8,
        shadowOffset: { width: 1, height: 1 },
    },
    buttonContent: {
        color: 'white',
        fontSize: 20,
        textTransform: 'capitalize'
    }
})

export default CustomButton;