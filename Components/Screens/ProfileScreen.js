import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import CustomButton from '../Assets/CustomButton'
import UserIcon from '../Assets/UserIcon'

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.superContainer}>

      <View style={styles.photoContainer}>
        <View style={styles.photoIconContainer}>
          <Pressable
            style={styles.photoIconFlexContainer}
            android_ripple={{ color: 'white', borderless: true }}
          >
            <UserIcon style={styles.userIcon} />
          </Pressable>
        </View>
      </View>
      <View style={styles.detailsContainer} >
        <Text style={styles.detailsText} >Name - username</Text>
        <Text style={[styles.detailsText, { textTransform: 'uppercase' }]}>DOB - 12/12/12</Text>
        <Text style={styles.detailsText}>Employee ID - 6465</Text>
        <Text style={styles.detailsText}>Address - N/A</Text>
      </View>
      <View style={styles.buttonContainer} >
        <CustomButton title='Back' />
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  superContainer: {
    flex: 1
  },
  photoContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  photoIconContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(83, 100, 246)',
    borderRadius: 330,
    width: 330,
    height: 330,
  },
  photoIconFlexContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  detailsText: {
    fontSize: 28,
    color: 'rgb(83, 124, 246)',
    fontWeight: '600',
    textTransform: 'capitalize'

  },
  userIcon: {
    color: 'white',
    fontSize: 175,
    paddingLeft: 20
  }
})