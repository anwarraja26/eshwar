import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import Constants from 'expo-constants';
import * as Battery from 'expo-battery';
import { useState, useEffect } from 'react';

const GetStarted = () => {
  const navigation = useNavigation();
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update battery level
    Battery.getBatteryLevelAsync().then(batteryLevel => {
      setBatteryLevel(batteryLevel * 100);
    });

    // Update battery level whenever it changes
    const batteryListener = Battery.addBatteryLevelListener(({ level }) => {
      setBatteryLevel(level * 100);
    });

    // Update current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear listeners and interval on unmount
    return () => {
      batteryListener.remove();
      clearInterval(intervalId);
    };
  }, []);

  return (
    <View style={styles.getStarted}>
      <View style={[styles.vectorParent, styles.vectorParentLayout]}>
        <Image
          style={[styles.instanceChild, styles.vectorParentLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.eshwariteHubIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/eshwarite-hub.png")}
        />
        <Text
          style={[styles.leadershipExcellence, styles.textTypo]}
        >{`Leadership & Excellence`}</Text>
      </View>
      <View style={[styles.time, styles.timePosition]}>
        <Text style={[styles.text, styles.textTypo]}>
          {currentTime.toLocaleTimeString()}
        </Text>
      </View>
      <View style={[styles.percentage, styles.timePosition]}>
        <Text style={[styles.text1, styles.text1Typo]}>
          {batteryLevel ? `${Math.round(batteryLevel)}%` : "Calculating..."}
        </Text>
      </View>
      <Image
        style={[styles.batteryIcon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/battery.png")}
      />
      <Image
        style={[styles.wifiIcon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/wifi.png")}
      />
      <Image
        style={styles.getStartedChild}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Pressable
        style={styles.getStarted1}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Image
          style={styles.getStartedItem}
          contentFit="cover"
          source={require("../assets/rectangle-2.png")}
        />
        <Text style={[styles.getStarted2, styles.text1Typo]}>GET STARTED</Text>
      </Pressable>
      <Image
        style={[styles.normalDownBarIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/normal-down-bar.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    top: 11,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
  },
  text1Typo: {
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  iconPosition1: {
    top: 15,
    position: "absolute",
  },
  vectorParentLayout: {
    height: 100,
    position: "absolute",
  },
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  text: {
    width: "147.96%",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  time: {
    left: 18,
    width: 108,
    height: 45,
  },
  text1: {
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    color: Color.colorBlack,
    left: "0%",
    top: "0%",
  },
  percentage: {
    left: 345,
    width: 50,
    height: 12,
    justifyContent: "center",
    alignItems: "center",
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
  getStartedChild: {
    top: 339,
    left: 60,
    width: 294,
    height: 307,
    position: "absolute",
  },
  getStartedItem: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_2xl,
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  getStarted2: {
    top: "37.31%",
    left: "27.97%",
    letterSpacing: 1.4,
    fontWeight: "600",
    fontFamily: FontFamily.josefinSansSemiBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  getStarted1: {
    top: 753,
    left: 20, // Adjust the value to position the button towards the left
    borderRadius: Border.br_xl,
    backgroundColor: Color.sriEshwar,
    width: 354,
    height: 67,
    position: "absolute",
  },
  instanceChild: {
    top: 0,
    left: 156,
    width: 97,
  },
  eshwariteHubIcon: {
    top: 5,
    width: 239,
    height: 45,
    left: "50%", // Center horizontally
    marginLeft: -1.5, // Half of the icon's width
    position: "absolute",
  },
  leadershipExcellence: {
    top: 50,
    left: "50%", // Center horizontally
    marginLeft: -5, // Half of the text's width
    fontSize: FontSize.size_3xs,
    color: Color.sriEshwar,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  vectorParent: {
    top: 151,
    left: 96,
    width: 253,
  },
  normalDownBarIcon: {
    top: 882,
    width: 430,
    height: 50,
    position: "absolute",
  },
  getStarted: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default GetStarted;
