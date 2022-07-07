import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const NotIdentified = (props) => {
    const instructions = [
        'Lighting is proper',
        'Face is in the Image',
        'Image is not blurry',
        'Multiple faces are not present'
    ]
    const renderItemComponent = (item) => {
        return (
            <Text style={styles.instructionsText}>{item.index + 1}. {item.item}</Text>
        )

    }
    const reTake = () => {
        props.navigate.goBack()
    }
    return (
        <View style={styles.superContainer} >

            <View style={styles.instructionsContainer}>

                <View style={styles.notIdentifiedButton}>
                    <Text style={styles.notIdentifiedButtonText}>Not Identified</Text>
                </View>
                <View style={styles.instructionsTextContainer}>
                    <Text style={styles.instructionsHeadingText}>Please be carefull that image meets the following criteria</Text>
                    <FlatList
                        renderItem={(item) => renderItemComponent(item)}
                        data={instructions}
                    />
                </View>

            </View>
            <View style={styles.buttonsContainer}>
                <Button onPress={reTake} title='Retake Photo' />
                <Button title='Contact Admin' />
            </View>


        </View>
    )
}

export default NotIdentified;

const styles = StyleSheet.create({
    superContainer: {
        flex: 1
    },
    instructionsContainer: {
        alignItems: 'center',
        flex: 4
    },
    instructionsText: {
        fontSize: 15,
        paddingTop: 10
    },
    instructionsHeadingText: {
        fontSize: 15
    },
    buttonsContainer: {
        flex: 3,
        justifyContent: 'space-evenly'
    },
    notIdentifiedButton: {
        height: 40,
        width: 250,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    notIdentifiedButtonText: {
        color: 'white',
        fontSize: 18,
    },
    instructionsTextContainer: {
        alignItems: 'center',
        paddingTop: 20
    }
})