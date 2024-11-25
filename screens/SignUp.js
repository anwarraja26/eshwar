import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import DeviceInfo from 'react-native-device-info'; // Import react-native-device-info
import { FontFamily, Border, FontSize, Padding, Color } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();
  const [currentTime, setCurrentTime] = useState("");
  const [batteryLevel, setBatteryLevel] = useState(0);

  useEffect(() => {
    // Fetch current time
    const fetchCurrentTime = () => {
      const time = new Date().toLocaleTimeString();
      setCurrentTime(time);
    };

    // Fetch battery level
    const fetchBatteryLevel = async () => {
      const level = await DeviceInfo.getBatteryLevel();
      setBatteryLevel(level * 100); // Convert decimal to percentage
    };

    // Update time every second
    const interval = setInterval(() => {
      fetchCurrentTime();
    }, 1000);

    // Fetch initial battery level
    fetchBatteryLevel();

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.signUp}>
      <View style={[styles.time, styles.timePosition]}>
        <Text style={[styles.text, styles.textTypo]}>{currentTime}</Text>
      </View>
      <View style={[styles.time, styles.timePosition]}>
        <Text style={[styles.text, styles.textTypo]}>{currentTime}</Text>
      </View>
      <Image
        style={[styles.batteryIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/battery1.png")}
      />
      <View style={[styles.percentage, styles.timePosition]}>
        <Text style={[styles.text2, styles.textTypo]}>{batteryLevel}%</Text>
      </View>
      {/* Rest of your JSX */}
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    top: 12,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  iconPosition: {
    top: 16,
    position: "absolute",
  },
  userLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  password1Position: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  signUp2Position: {
    width: 380,
    left: 25,
    position: "absolute",
  },
  passwordLayout: {
    height: 72,
    width: 380,
    left: 25,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_xl,
    height: "100%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  passwordTypo: {
    textAlign: "right",
    fontSize: FontSize.size_xl,
  },
  loginFlexBox: {
    padding: Padding.p_3xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  password3Typo: {
    fontFamily: FontFamily.josefinSansRegular,
    color: Color.colorBlack,
  },
  logInTypo: {
    textAlign: "center",
    fontSize: FontSize.size_xl,
  },
  text: {
    width: "147.96%",
    color: Color.colorBlack,
    textAlign: "left",
    left: "0%",
    top: "0%",
    fontSize: FontSize.size_xl,
  },
  time: {
    left: 10,
    width: 108,
    height: 45,
  },
  text2: {
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    textAlign: "left",
    left: "0%",
    top: "0%",
  },
  percentage: {
    left: 345, // Adjusted left position
    top: 50, // Adjusted top position
    width: 100, // Adjusted width
    height: 12, // Adjusted height
  },
  batteryIcon: {
    left: 310, // Adjusted left position
    width: 25,
    height: 15,
  },
  wifiIcon: {
    left: 280, // Adjusted left position
    width: 20,
    height: 13,
  },
  userSignupChild: {
    height: "27.4%",
    width: "44.44%",
    right: "27.78%",
    bottom: "72.6%",
    left: "27.78%",
    top: "0%",
    position: "absolute",
  },
  userSignupItem: {
    height: "68.49%",
    top: "31.51%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  signUp1: {
    top: "70.55%",
    left: "7.78%",
    color: Color.colorIndianred,
    fontSize: FontSize.size_xl,
  },
  userSignup: {
    top: 143,
    left: 170,
    width: 100,
    height: 146,
    position: "absolute",
  },
  fullNameIcon: {
    top: 322,
    height: 74,
  },
  emailIcon: {
    top: 414,
  },
  passwordChild: {
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
  },
  password2: {
    height: "40.35%",
    width: "23.68%",
    top: "29.82%",
    left: "5.26%",
    color: Color.colorGray_100,
    fontFamily: FontFamily.itimRegular,
    textAlign: "right",
    position: "absolute",
  },
  password1: {
    height: "79.17%",
    top: "20.83%",
  },
  password3: {
    textAlign: "right",
    fontSize: FontSize.size_xl,
  },
  passwordWrapper: {
    height: "44.44%",
    width: "22.63%",
    right: "72.89%",
    bottom: "55.56%",
    left: "4.47%",
    top: "0%",
    backgroundColor: Color.colorWhite,
  },
  password: {
    top: 506,
  },
  signUpChild: {
    backgroundColor: Color.sriEshwar,
  },
  signUp3: {
    height: "52.63%",
    width: "24.21%",
    top: "24.56%",
    left: "35.79%",
    color: Color.colorWhite,
    display: "flex",
    letterSpacing: 1.6,
    textAlign: "center",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.itimRegular,
  },
  signUp2: {
    top: 667,
    height: 57,
  },
  alreadyHaveAn: {
    letterSpacing: 1.6,
    textAlign: "center",
    position: "absolute",
    fontFamily: FontFamily.josefinSansRegular,
    color: Color.colorBlack,
    left: "0%",
    top: "0%",
  },
  question: {
    top: 757,
    left: 33,
    width: 279,
    height: 20,
    position: "absolute",
  },
  logIn: {
    fontWeight: "700",
    fontFamily: FontFamily.josefinSansBold,
    color: Color.sriEshwar,
  },
  login: {
    top: 747,
    left: 312,
  },
  normalDownBarIcon: {
    top: 882,
    left: 0,
    width: 430,
    height: 50,
    position: "absolute",
  },
  signUp: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default SignUp;