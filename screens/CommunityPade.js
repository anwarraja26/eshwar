import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const CommunityPade = () => {
  return (
    <View style={styles.communityPade}>
      <Image
        style={[styles.downBarIcon, styles.downIconLayout]}
        contentFit="cover"
        source={require("../assets/down-bar7.png")}
      />
      <Image
        style={[styles.normalDownBarIcon, styles.downIconLayout]}
        contentFit="cover"
        source={require("../assets/normal-down-bar.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>12:00</Text>
      <Image
        style={[styles.wifiIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/wifi.png")}
      />
      <Image
        style={[styles.batteryIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/battery4.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>100 %</Text>
      <Text style={[styles.community, styles.communityTypo]}>Community</Text>
      <View style={[styles.communityPadeChild, styles.communityLayout]} />
      <View style={styles.search}>
        <View style={styles.searchChild} />
        <Text style={[styles.search1, styles.textTypo]}>Search</Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </View>
      <View style={[styles.communityPadeItem, styles.communityLayout]} />
      <Text
        style={[styles.whyDoWe, styles.whyDoWeTypo]}
      >{`Why do we use array instead of other data structure ?
`}</Text>
      <Text style={[styles.asIWas, styles.asIWasTypo]}>
        As I was programming, I haven't seen an instance where an array is
        better for storing information than another form thereof. I had indeed
        figured the added "features" in programming languages had improved upon
        this and by that replaced them. I see now that they aren't replaced but
        rather given new life, so to speak.
      </Text>
      <Image
        style={[styles.heartIcon, styles.heartIconLayout]}
        contentFit="cover"
        source={require("../assets/heart2.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <Text style={[styles.comments, styles.commentsTypo]}>
        <Text style={styles.text2}>10</Text>
        <Text style={styles.comments1}> comments</Text>
      </Text>
      <View style={[styles.communityPadeInner, styles.communityLayout]} />
      <Text style={[styles.howDoWe, styles.whyDoWeTypo]}>
        How do we control web page caching across all browser?
      </Text>
      <Text style={[styles.theSimplestIs, styles.asIWasTypo]}>
        The simplest is using: max-age=10 . This is not perfect because the page
        will be cached for 10 seconds. But it's the least "header spaghetti"
        solution out there. Also, this sometimes provides a big performance
        boost on dynamic websites who use reverse proxies. (Your slow php script
        will be called once every 10 seconds and will then be cached by the
        reverse proxy. once per 10 seconds is way better than once per visitor) 
      </Text>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <Image
        style={[styles.heartIcon1, styles.heartIconLayout]}
        contentFit="cover"
        source={require("../assets/heart3.png")}
      />
      <Text style={[styles.comments2, styles.commentsTypo]}>
        <Text style={styles.text2}>{`7 `}</Text>
        <Text style={styles.comments1}>comments</Text>
      </Text>
      <View style={[styles.rectangleView, styles.communityLayout]} />
      <Text style={[styles.whyWeLimited, styles.communityTypo]}>
        Why we limited memory in Embedded System ?
      </Text>
      <Text
        style={styles.whatDoesHigh}
      >{`What does "high level languages like Rust&go" have to do with the question? How do those languages help avoid the need to large memories, and what would you use instead given the memory? Very few embedded systems are implemented using Rust or Go Lang; you may see them referenced a great deal because they are new and people are figuring out how to apply them or earning money writing new books about them. The bulk of embedded development uses C or C++, and performance rather then memory usage is the primary reason.`}</Text>
      <Image
        style={[styles.heartIcon2, styles.heartIconLayout]}
        contentFit="cover"
        source={require("../assets/heart3.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <Text style={[styles.comments4, styles.commentsTypo]}>
        <Text style={styles.text2}>2</Text>
        <Text style={styles.comments1}> comments</Text>
      </Text>
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
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  communityTypo: {
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  communityLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  whyDoWeTypo: {
    fontFamily: FontFamily.josefinSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  asIWasTypo: {
    width: 373,
    color: Color.colorGray_400,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    position: "absolute",
  },
  heartIconLayout: {
    height: 25,
    width: 25,
    left: 280,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    height: 20,
    left: 314,
    width: 25,
    position: "absolute",
  },
  commentsTypo: {
    color: Color.siment,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    position: "absolute",
  },
  downBarIcon: {
    top: 832,
    left: -1,
  },
  normalDownBarIcon: {
    top: 882,
    left: 0,
  },
  text: {
    width: "37.16%",
    top: "1.07%",
    left: "4.42%",
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_xl,
  },
  wifiIcon: {
    height: "1.41%",
    width: "4.65%",
    right: "20.47%",
    bottom: "96.98%",
    left: "74.88%",
    top: "1.61%",
    maxWidth: "100%",
  },
  batteryIcon: {
    height: "1.59%",
    width: "5.91%",
    right: "13.4%",
    bottom: "96.8%",
    left: "80.7%",
    top: "1.61%",
    maxWidth: "100%",
  },
  text1: {
    top: "1.18%",
    left: "87.21%",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
  },
  community: {
    top: 53,
    left: 122,
    fontSize: 30,
  },
  communityPadeChild: {
    top: 83,
    backgroundColor: "rgba(0, 0, 0, 0.06)",
    width: 429,
    height: 749,
    left: 0,
  },
  searchChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_600,
    borderStyle: "solid",
    borderColor: Color.colorGray_700,
    borderWidth: 1,
    position: "absolute",
    width: "100%",
  },
  search1: {
    top: "29.82%",
    left: "6.75%",
    color: Color.colorGray_700,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_xl,
  },
  vectorIcon: {
    height: "26.32%",
    width: "3.75%",
    top: "36.84%",
    right: "3.75%",
    bottom: "36.84%",
    left: "92.5%",
  },
  search: {
    top: 102,
    left: 14,
    width: 400,
    height: 57,
    position: "absolute",
  },
  communityPadeItem: {
    top: 181,
    left: 22,
    width: 392,
    height: 183,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
  },
  whyDoWe: {
    top: 190,
    width: 378,
    height: 26,
    left: 27,
  },
  asIWas: {
    top: 222,
    left: 32,
    height: 110,
  },
  heartIcon: {
    top: 332,
  },
  vectorIcon1: {
    top: 335,
  },
  text2: {
    fontSize: FontSize.size_mini,
  },
  comments1: {
    fontSize: FontSize.size_3xs,
  },
  comments: {
    top: 342,
    left: 343,
  },
  communityPadeInner: {
    top: 386,
    width: 390,
    height: 206,
    left: 27,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
  },
  howDoWe: {
    top: 390,
    left: 31,
    width: 383,
    height: 34,
  },
  theSimplestIs: {
    top: 431,
    left: 33,
    height: 116,
  },
  vectorIcon2: {
    top: 561,
  },
  heartIcon1: {
    top: 558,
  },
  comments2: {
    top: 566,
    left: 349,
  },
  rectangleView: {
    top: 606,
    width: 387,
    height: 210,
    left: 27,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
  },
  whyWeLimited: {
    top: 610,
    left: 37,
    width: 369,
    height: 21,
    fontSize: FontSize.size_mini,
  },
  whatDoesHigh: {
    top: 635,
    left: 38,
    width: 368,
    height: 181,
    color: Color.colorGray_400,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    position: "absolute",
  },
  heartIcon2: {
    top: 786,
  },
  vectorIcon3: {
    top: 791,
  },
  comments4: {
    top: 794,
    left: 348,
  },
  communityPade: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default CommunityPade;
