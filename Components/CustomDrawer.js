import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';
import { Avatar, Image } from '@rneui/base';
// import customdrawer from ''

const CustomDrawer = (props) => {
    // console.log(props.navigation)
    return (
        <View style={{ flex: 1, }} >
            <ImageBackground source={require("./images/customdrawer.jpeg")} style={{ height: 250, width:'100%' }} >
                <View style={{ height: 250, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 15, borderBottomWidth: 2, borderBottomColor: '#3761f0' }}>
                    <FontAwesome name="arrow-circle-left" size={35} style={{ alignSelf: 'flex-end', margin: 15 }} color="white" onPress={() => props.navigation.closeDrawer()} />
                    <View style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-around' }}>
                        <Avatar source={{ uri: "https://wallpaperaccess.com/full/749931.jpg" }} size={80} rounded containerStyle={{ margin: 10, marginLeft: 0 }} />
                        <Text style={{ color: 'white', fontSize: 25 }}>Ansh Jain</Text>
                    </View>
                </View>
            </ImageBackground>

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>

    )
}

export default CustomDrawer

const styles = StyleSheet.create({})