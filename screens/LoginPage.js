import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";

const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginPage}>
      <View style={[styles.time, styles.timePosition]}>
        <Text style={[styles.text, styles.textTypo]}>12:00</Text>
      </View>
      <View style={[styles.percentage, styles.timePosition]}>
        <Text style={[styles.text1, styles.textTypo]}>100 %</Text>
      </View>
      <Image
        style={[styles.batteryIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/battery1.png")}
      />
      <Image
        style={[styles.wifiIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/wifi.png")}
      />
      <View style={[styles.userLogin, styles.userLayout]}>
        <Image
          style={styles.userLoginChild}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.userLoginItem, styles.userLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <Text style={[styles.login, styles.textTypo]}>LOGIN</Text>
      </View>
      <Image
        style={[styles.fullNameIcon, styles.login1Position]}
        contentFit="cover"
        source={require("../assets/full-name.png")}
      />
      <View style={[styles.password, styles.login1Position]}>
        <View style={styles.password1}>
          <View style={[styles.passwordChild, styles.childPosition]} />
          <Text style={[styles.password2, styles.passwordTypo]}>{`Password
`}</Text>
        </View>
        <View style={styles.passwordWrapper}>
          <Text style={[styles.password3, styles.passwordTypo]}>Password</Text>
        </View>
      </View>
      <Image
        style={styles.arrowIcon}
        contentFit="cover"
        source={require("../assets/arrow.png")}
      />
      <Pressable
        style={[styles.login1, styles.login1Position]}
        onPress={() => navigation.navigate("WelcomePage")}
      >
        <View style={[styles.loginChild, styles.childPosition]} />
        <Text style={[styles.login2, styles.passwordTypo]}>LOGIN</Text>
      </Pressable>
      <Image
        style={[styles.normalDownBarIcon, styles.normalIconLayout]}
        contentFit="cover"
        source={require("../assets/normal-down-bar.png")}
      />
      <Image
        style={[styles.normalDownBarIcon1, styles.normalIconLayout]}
        contentFit="cover"
        source={require("../assets/normal-down-bar.png")}
      />
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
    width: 90,
    position: "absolute",
  },
  login1Position: {
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
  normalIconLayout: {
    height: 50,
    width: 430,
    position: "absolute",
  },
  text: {
    width: "147.96%",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    left: "0%",
    top: "0%",
  },
  time: {
    left: 10,
    width: 108,
    height: 45,
  },
  text1: {
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    left: "0%",
    top: "0%",
  },
  percentage: {
    left: 371,
    width: 27,
    height: 12,
  },
  batteryIcon: {
    left: 337,
    width: 25,
    height: 15,
  },
  wifiIcon: {
    left: 308,
    width: 20,
    height: 13,
  },
  userLoginChild: {
    top: 0,
    width: 40,
    height: 40,
    left: 25,
    position: "absolute",
  },
  userLoginItem: {
    top: 45,
    height: 100,
    left: 0,
  },
  login: {
    top: 95,
    left: 16,
    color: Color.colorIndianred,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  userLogin: {
    top: 165,
    left: 162,
    height: 145,
  },
  fullNameIcon: {
    top: 368,
    height: 74,
  },
  passwordChild: {
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    height: "100%",
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
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  password3: {
    fontFamily: FontFamily.josefinSansRegular,
    color: Color.colorBlack,
  },
  passwordWrapper: {
    height: "44.44%",
    width: "22.63%",
    right: "72.89%",
    bottom: "55.56%",
    left: "4.47%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
    top: "0%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  password: {
    top: 483,
    height: 72,
  },
  arrowIcon: {
    top: 46,
    left: 17,
    width: 26,
    height: 22,
    position: "absolute",
  },
  loginChild: {
    backgroundColor: Color.sriEshwar,
  },
  login2: {
    top: "28.07%",
    left: "40.53%",
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    textAlign: "right",
    position: "absolute",
  },
  login1: {
    top: 621,
    height: 57,
  },
  normalDownBarIcon: {
    top: 989,
    left: -643,
  },
  normalDownBarIcon1: {
    top: 882,
    left: 0,
  },
  loginPage: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default LoginPage;
