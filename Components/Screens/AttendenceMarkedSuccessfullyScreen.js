import { React, useLayoutEffect } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const LogoScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [navigation])
  return (
    <View style={styles.viewStyle}>
      <Image
        style={styles.imageStyle}
        source={require("../../assets/Logo.jpeg")}
      />
      <Text style={styles.textStyle}>Attendence marked successfully</Text>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>EXIT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 300,
    width: 300,
  },
  viewStyle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "rgb(66, 133, 244)",
    marginTop: 150,
  },
  buttonTextStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default LogoScreen;
