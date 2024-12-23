import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MainPage1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainPage}>
      <Image
        style={[styles.normalDownBarIcon, styles.downIconLayout]}
        contentFit="cover"
        source={require("../assets/normal-down-bar2.png")}
      />
      <Image
        style={[styles.downBarIcon, styles.downIconLayout]}
        contentFit="cover"
        source={require("../assets/down-bar.png")}
      />
      <View style={styles.mainPageChild} />
      <Image
        style={[styles.batteryIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/battery2.png")}
      />
      <Image
        style={[styles.wifiIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/wifi1.png")}
      />
      <View style={styles.time}>
        <Text style={[styles.text, styles.textClr]}>12:00</Text>
      </View>
      <Text style={[styles.text1, styles.textClr]}>100 %</Text>
      <Pressable
        style={[styles.wrapper, styles.searchLayout]}
        onPress={() => navigation.navigate("Favourtie")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-18.png")}
        />
      </Pressable>
      <Pressable
        style={styles.sideBar}
        onPress={() => navigation.navigate("SideBar")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/side-bar.png")}
        />
      </Pressable>
      <View style={[styles.search, styles.searchLayout]}>
        <View style={[styles.searchChild, styles.iconLayout]} />
        <Text style={[styles.search1, styles.textTypo]}>Search</Text>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("SearchBar")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={styles.troley}
        onPress={() => navigation.navigate("TrolleyPage")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/troley.png")}
        />
      </Pressable>
      <View style={[styles.mainPageItem, styles.mainPageItemLayout]} />
      <Text style={[styles.javaHasBuiltIn, styles.mainPageItemLayout]}>
        Java has built-in support for multithreaded programming, allowing
        developers to create highly interactive and responsive applications.
      </Text>
      <Pressable
        style={[styles.heart, styles.heartLayout]}
        onPress={() => navigation.navigate("Favourtie")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/heart.png")}
        />
      </Pressable>
      <Image
        style={styles.mainPageInner}
        contentFit="cover"
        source={require("../assets/rectangle-21.png")}
      />
      <View style={[styles.rectangleView, styles.searchLayout]} />
      <Image
        style={[styles.heartIcon, styles.heartLayout]}
        contentFit="cover"
        source={require("../assets/heart.png")}
      />
      <Pressable
        style={styles.community}
        onPress={() => navigation.navigate("CommunityPade")}
      >
        <Image
          style={[styles.icon5, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/community.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  downIconLayout: {
    height: 50,
    width: 430,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  searchLayout: {
    width: 400,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  textTypo: {
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  mainPageItemLayout: {
    width: 398,
    position: "absolute",
  },
  heartLayout: {
    height: 22,
    width: 22,
    position: "absolute",
  },
  normalDownBarIcon: {
    top: 882,
  },
  downBarIcon: {
    top: 834,
  },
  mainPageChild: {
    top: 2,
    backgroundColor: Color.colorGray_500,
    height: 834,
    width: 430,
    left: 0,
    position: "absolute",
  },
  batteryIcon: {
    height: "1.59%",
    width: "5.92%",
    right: "16.17%",
    bottom: "97.12%",
    left: "77.91%",
    top: "1.29%",
    maxWidth: "100%",
    position: "absolute",
  },
  wifiIcon: {
    height: "1.41%",
    width: "4.66%",
    right: "23.26%",
    bottom: "97.31%",
    left: "72.09%",
    top: "1.29%",
    maxWidth: "100%",
    position: "absolute",
  },
  text: {
    width: "147.96%",
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
    fontSize: FontSize.size_xl,
    left: "0%",
    top: "0%",
  },
  time: {
    top: 12,
    width: 108,
    height: 45,
    left: 15,
    position: "absolute",
  },
  text1: {
    height: "2.36%",
    width: "11.17%",
    top: "0.86%",
    left: "84.89%",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_8xs,
  },
  wrapper: {
    top: 184,
    height: 224,
    left: 12,
    width: 400,
  },
  sideBar: {
    left: 30,
    top: 64,
    width: 15,
    height: 8,
    position: "absolute",
  },
  searchChild: {
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_600,
    borderStyle: "solid",
    borderColor: Color.colorGray_700,
    borderWidth: 1,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  search1: {
    top: "29.82%",
    left: "6.75%",
    color: Color.colorGray_700,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.itimRegular,
  },
  icon2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "92.5%",
    top: "36.84%",
    right: "3.75%",
    bottom: "36.84%",
    width: "3.75%",
    height: "26.32%",
    position: "absolute",
  },
  search: {
    top: 107,
    height: 57,
    left: 15,
  },
  troley: {
    left: "88.14%",
    top: "6.33%",
    right: "7.43%",
    bottom: "91.63%",
    width: "4.43%",
    height: "2.04%",
    position: "absolute",
  },
  mainPageItem: {
    top: 424,
    left: 10,
    height: 98,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
  },
  javaHasBuiltIn: {
    top: 438,
    left: 29,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
  },
  heart: {
    left: 364,
    top: 482,
  },
  mainPageInner: {
    top: 538,
    width: 393,
    height: 150,
    borderRadius: Border.br_8xs,
    left: 15,
    position: "absolute",
  },
  rectangleView: {
    top: 709,
    height: 104,
    borderRadius: Border.br_8xs,
    left: 12,
    width: 400,
    backgroundColor: Color.colorWhite,
  },
  heartIcon: {
    top: 784,
    left: 360,
  },
  icon5: {
    overflow: "hidden",
  },
  community: {
    left: 367,
    top: 847,
    width: 25,
    height: 25,
    position: "absolute",
  },
  mainPage: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default MainPage1;
