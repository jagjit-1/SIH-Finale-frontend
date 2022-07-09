import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect, useLayoutEffect } from 'react';

import CustomButton from '../Assets/CustomButton';
import UserIcon from '../Assets/UserIcon';

const LandingScreen = ({ navigation }) => {
    const [time, setTime] = useState();
    const [date, setDate] = useState(new Date().toDateString())
    const [timeRemaining, SetTimeRemaining] = useState()
    const [checkedIn, setCheckedIn] = useState(true)
    useEffect(() => {
        SetTimeRemaining(new Date().setHours(5, 0, 0))
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <UserIcon />
                )
            }
        })
    }, [])

    let user = 'jagjit';
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer} >
                <Text style={styles.text} >
                    Welcome {user}
                </Text>
                {!checkedIn &&
                    <Text style={[styles.text, { fontSize: 22, fontWeight: 'normal', paddingBottom: 20 }]}>
                        Let's get to work! :)
                    </Text>
                }
                <Text style={[styles.text, { fontSize: 27, paddingBottom: 5 }]}>
                    {date}

                </Text>
                <Text style={[styles.text, { fontSize: 27, paddingBottom: 50 }]}>
                    {time}
                </Text>
            </View>
            {checkedIn &&
                <View style={styles.timeContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                        <Text style={[styles.text, { fontSize: 22, textTransform: 'capitalize', paddingRight: 10 }]}>
                            check in time :-
                        </Text>
                        <Text style={[styles.text, { fontSize: 22, textTransform: 'capitalize', color: 'green' }]}>
                            16:16:16
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1 }}>
                        <Text style={[styles.text, { fontSize: 22, textTransform: 'capitalize', paddingRight: 10 }]}>
                            time remaining :-
                        </Text>
                        <Text style={[styles.text, { fontSize: 22, textTransform: 'capitalize', color: 'grey' }]}>
                            {timeRemaining}
                        </Text>
                    </View>
                </View>

            }

            {!checkedIn &&
                <View style={styles.buttonsContainer}>
                    <CustomButton title='Check-in' />
                </View>
            }
            {checkedIn &&
                <View style={styles.buttonsContainer}>
                    <CustomButton title='checkout' textStyle={{ fontSize: 22, fontWeight: '500' }} style={{ backgroundColor: 'red', height: 50 }} />
                </View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    buttonsContainer: {
        flex: 4,
    },
    text: {
        fontSize: 45,
        fontWeight: '600',
        color: 'rgb(83, 100, 246)',
        paddingBottom: 10
    },
    timeContainer: {
        alignItems: 'center',
        flex: 2,
        justifyContent: 'center'
    }
})

export default LandingScreen