import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Suggestion = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.suggestion}>
      <Image
        style={[styles.normalDownBarIcon, styles.downIconLayout]}
        contentFit="cover"
        source={require("../assets/normal-down-bar.png")}
      />
      <Image
        style={[styles.downBarIcon, styles.downIconLayout]}
        contentFit="cover"
        source={require("../assets/down-bar4.png")}
      />
      <View style={styles.time}>
        <Text style={[styles.text, styles.textTypo]}>12:00</Text>
      </View>
      <Image
        style={[styles.wifiIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/wifi.png")}
      />
      <Image
        style={[styles.batteryIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/battery4.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>100 %</Text>
      <View style={styles.suggestionChild} />
      <Text style={[styles.hackathon, styles.hackathonTypo]}>{`Hackathon
`}</Text>
      <Text style={[styles.topics, styles.hackathonTypo]}>Topics</Text>
      <Text style={[styles.language, styles.hackathonTypo]}>Language</Text>
      <View style={[styles.suggestionItem, styles.suggestionLayout]} />
      <View style={[styles.suggestionInner, styles.suggestionLayout]} />
      <Text style={styles.dataScienceIs}>
        Data science is an interdisciplinary field that combines statistics,
        computer science, and domain.
      </Text>
      <View style={[styles.rectangleView, styles.suggestionLayout]} />
      <Text style={[styles.businessAnalysisIs, styles.pythonIsATypo]}>
        Business Analysis is a discipline focused on identifying business needs
        and determining solutions.
      </Text>
      <Image
        style={[styles.rectangleIcon, styles.suggestionChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-33.png")}
      />
      <Image
        style={[styles.suggestionChild1, styles.suggestionChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-34.png")}
      />
      <Image
        style={[styles.suggestionChild2, styles.suggestionChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-35.png")}
      />
      <Text style={[styles.pythonIsA, styles.pythonIsATypo]}>
        Python is a high-level, interpreted programming language known for its
        simplicity and readability
      </Text>
      <Image
        style={[styles.loveIcon, styles.loveIconLayout]}
        contentFit="cover"
        source={require("../assets/love.png")}
      />
      <Image
        style={[styles.loveIcon1, styles.loveIconLayout]}
        contentFit="cover"
        source={require("../assets/love.png")}
      />
      <Image
        style={[styles.loveIcon2, styles.loveIconLayout]}
        contentFit="cover"
        source={require("../assets/love.png")}
      />
      <Text style={[styles.workshop, styles.hackathonTypo]}>Workshop</Text>
      <View style={[styles.suggestionChild3, styles.suggestionChildLayout1]} />
      <View style={[styles.suggestionChild4, styles.suggestionChildLayout1]} />
      <Image
        style={[styles.suggestionChild5, styles.suggestionChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-38.png")}
      />
      <Image
        style={[styles.suggestionChild6, styles.suggestionChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-39.png")}
      />
      <Text style={[styles.theWorkshopStarts, styles.workshopTypo]}>
        The workshop starts with an introduction by the facilitator, who is
        often an experienced programmer or software developer.
      </Text>
      <Text style={[styles.aWorkshopIs, styles.workshopTypo]}>
        A workshop is an educational and interactive event designed to teach
        participants a particular skill or concept in a hands-on, practical
        manner.
      </Text>
      <Image
        style={[styles.loveIcon3, styles.loveIconPosition]}
        contentFit="cover"
        source={require("../assets/love.png")}
      />
      <Image
        style={[styles.loveIcon4, styles.loveIconPosition]}
        contentFit="cover"
        source={require("../assets/love.png")}
      />
      <Image
        style={styles.topicsLineIcon}
        contentFit="cover"
        source={require("../assets/topics-line.png")}
      />
      <View style={styles.suggestionChild7} />
      <Text style={[styles.aHackathonIs, styles.hackathonTypo]}>
        A hackathon is an event where programmers, developers, designers, and
        other tech enthusiasts come together to collaborate intensively on
        software projects. These events can last anywhere from a day to a week
        and are often aimed at creating functioning
      </Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Hackathon")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-41.png")}
        />
      </Pressable>
      <Image
        style={[styles.loveIcon5, styles.loveIconLayout]}
        contentFit="cover"
        source={require("../assets/love.png")}
      />
      <Pressable
        style={styles.community}
        onPress={() => navigation.navigate("CommunityPade")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
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
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    top: "2.04%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  hackathonTypo: {
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  suggestionLayout: {
    height: 175,
    width: 110,
    top: 123,
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  pythonIsATypo: {
    top: 240,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  suggestionChildLayout2: {
    height: 100,
    width: 90,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  loveIconLayout: {
    height: 12,
    width: 12,
    position: "absolute",
  },
  suggestionChildLayout1: {
    height: 177,
    top: 351,
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  suggestionChildLayout: {
    height: 97,
    top: 363,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  workshopTypo: {
    top: 470,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  loveIconPosition: {
    top: 513,
    height: 12,
    width: 12,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  normalDownBarIcon: {
    top: 882,
    left: 0,
    height: 50,
  },
  downBarIcon: {
    top: 832,
    left: -1,
  },
  text: {
    width: "147.96%",
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_xl,
  },
  time: {
    top: 13,
    width: 108,
    height: 45,
    left: 21,
    position: "absolute",
  },
  wifiIcon: {
    height: "1.41%",
    width: "4.65%",
    right: "21.63%",
    bottom: "96.56%",
    left: "73.72%",
  },
  batteryIcon: {
    height: "1.59%",
    width: "5.91%",
    right: "14.56%",
    bottom: "96.37%",
    left: "79.53%",
  },
  text1: {
    top: "1.39%",
    left: "86.74%",
    fontSize: FontSize.size_lg,
  },
  suggestionChild: {
    top: 81,
    backgroundColor: Color.colorGray_500,
    height: 752,
    width: 430,
    left: 0,
    position: "absolute",
  },
  hackathon: {
    top: 545,
    left: 24,
    fontSize: FontSize.size_lg,
  },
  topics: {
    top: 53,
    left: 26,
    fontSize: FontSize.size_xl,
  },
  language: {
    top: 88,
    left: 11,
    fontSize: FontSize.size_lg,
  },
  suggestionItem: {
    left: 19,
  },
  suggestionInner: {
    left: 157,
  },
  dataScienceIs: {
    top: 237,
    left: 170,
    width: 91,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  rectangleView: {
    left: 295,
  },
  businessAnalysisIs: {
    left: 302,
    width: 104,
  },
  rectangleIcon: {
    top: 130,
    left: 28,
  },
  suggestionChild1: {
    top: 131,
    left: 167,
  },
  suggestionChild2: {
    top: 133,
    left: 301,
  },
  pythonIsA: {
    width: 97,
    left: 26,
  },
  loveIcon: {
    left: 106,
    top: 282,
    height: 12,
    width: 12,
  },
  loveIcon1: {
    top: 283,
    left: 249,
  },
  loveIcon2: {
    left: 387,
    top: 282,
    height: 12,
    width: 12,
  },
  workshop: {
    top: 316,
    left: 23,
    fontSize: FontSize.size_lg,
  },
  suggestionChild3: {
    width: 184,
    left: 21,
  },
  suggestionChild4: {
    left: 225,
    width: 181,
  },
  suggestionChild5: {
    left: 33,
    width: 167,
  },
  suggestionChild6: {
    left: 233,
    width: 166,
  },
  theWorkshopStarts: {
    left: 30,
    width: 170,
  },
  aWorkshopIs: {
    left: 229,
    width: 173,
  },
  loveIcon3: {
    left: 188,
  },
  loveIcon4: {
    left: 385,
  },
  topicsLineIcon: {
    top: 50,
    height: 20,
    left: 19,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  suggestionChild7: {
    top: 574,
    left: 14,
    width: 401,
    height: 247,
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  aHackathonIs: {
    top: 753,
    left: 31,
    fontSize: 12,
    width: 375,
  },
  icon: {
    borderRadius: Border.br_8xs,
  },
  wrapper: {
    top: 588,
    width: 384,
    height: 145,
    left: 24,
    position: "absolute",
  },
  loveIcon5: {
    top: 799,
    left: 382,
  },
  icon1: {
    overflow: "hidden",
  },
  community: {
    left: 360,
    top: 845,
    width: 25,
    height: 25,
    position: "absolute",
  },
  suggestion: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Suggestion;
