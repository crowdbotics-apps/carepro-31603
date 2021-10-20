import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_346_1}>
        <Text style={styles.Text_346_1}>Test Results</Text>
      </View>
      <View style={styles.View_346_2}>
        <Text style={styles.Text_346_2}>
          Sample #0029 Date Collected 6/1/21 Date Entered 6/1/21 Date Reported
          6/2/21
        </Text>
      </View>
      <View style={styles.View_346_3}>
        <Text style={styles.Text_346_3}>Patient Name</Text>
      </View>
      <View style={styles.View_346_4}>
        <Text style={styles.Text_346_4}>Farhan Khan</Text>
      </View>
      <View style={styles.View_354_2}>
        <Text style={styles.Text_354_2}>Patient ID</Text>
      </View>
      <View style={styles.View_354_3}>
        <Text style={styles.Text_354_3}>0138014</Text>
      </View>
      <View style={styles.View_354_4}>
        <Text style={styles.Text_354_4}>Date of Birth</Text>
      </View>
      <View style={styles.View_354_5}>
        <Text style={styles.Text_354_5}>August 8, 1999</Text>
      </View>
      <View style={styles.View_354_10}>
        <Text style={styles.Text_354_10}>Fasting</Text>
      </View>
      <View style={styles.View_354_11}>
        <Text style={styles.Text_354_11}>N</Text>
      </View>
      <View style={styles.View_354_14}>
        <Text style={styles.Text_354_14}>Test Ordered</Text>
      </View>
      <View style={styles.View_354_15}>
        <Text style={styles.Text_354_15}>
          Blood Test (General), Testosterone, Thyroid Panel
        </Text>
      </View>
      <View style={styles.View_354_16}>
        <Text style={styles.Text_354_16}>General Comment</Text>
      </View>
      <View style={styles.View_354_17}>
        <Text style={styles.Text_354_17}>Critical</Text>
      </View>
      <View style={styles.View_354_12}>
        <Text style={styles.Text_354_12}>Complications</Text>
      </View>
      <View style={styles.View_354_13}>
        <Text style={styles.Text_354_13}>Y</Text>
      </View>
      <View style={styles.View_354_6}>
        <Text style={styles.Text_354_6}>Age</Text>
      </View>
      <View style={styles.View_354_7}>
        <Text style={styles.Text_354_7}>21</Text>
      </View>
      <View style={styles.View_354_8}>
        <Text style={styles.Text_354_8}>Gender</Text>
      </View>
      <View style={styles.View_354_9}>
        <Text style={styles.Text_354_9}>Male</Text>
      </View>
      <View style={styles.View_346_5}>
        <Text style={styles.Text_346_5}>Test</Text>
      </View>
      <View style={styles.View_346_10}>
        <Text style={styles.Text_346_10}>Testosterone, Total, LC/MS</Text>
      </View>
      <View style={styles.View_346_24}>
        <Text style={styles.Text_346_24}>Thyroid Panel with TSH</Text>
      </View>
      <View style={styles.View_354_0}>
        <Text style={styles.Text_354_0}>Page 2 of 2</Text>
      </View>
      <View style={styles.View_346_13}>
        <Text style={styles.Text_346_13}>NRBC</Text>
      </View>
      <View style={styles.View_346_25}>
        <Text style={styles.Text_346_25}>N</Text>
      </View>
      <View style={styles.View_354_21} />
      <View style={styles.View_346_14}>
        <Text style={styles.Text_346_14}>Testosterone</Text>
      </View>
      <View style={styles.View_348_2}>
        <Text style={styles.Text_348_2}>2384</Text>
      </View>
      <View style={styles.View_348_5}>
        <Text style={styles.Text_348_5}>H</Text>
      </View>
      <View style={styles.View_354_20} />
      <View style={styles.View_348_6}>
        <Text style={styles.Text_348_6}>N</Text>
      </View>
      <View style={styles.View_348_7}>
        <Text style={styles.Text_348_7}>H</Text>
      </View>
      <View style={styles.View_348_3}>
        <Text style={styles.Text_348_3}>348.0-1197.0</Text>
      </View>
      <View style={styles.View_348_9}>
        <Text style={styles.Text_348_9}>5.25-20.7</Text>
      </View>
      <View style={styles.View_349_0}>
        <Text style={styles.Text_349_0}>21.8</Text>
      </View>
      <View style={styles.View_348_4}>
        <Text style={styles.Text_348_4}>ng/dL</Text>
      </View>
      <View style={styles.View_350_0}>
        <Text style={styles.Text_350_0}>nmol/L</Text>
      </View>
      <View style={styles.View_350_1}>
        <Text style={styles.Text_350_1}>20-35</Text>
      </View>
      <View style={styles.View_354_19} />
      <View style={styles.View_350_2}>
        <Text style={styles.Text_350_2}>31</Text>
      </View>
      <View style={styles.View_348_8}>
        <Text style={styles.Text_348_8}>ng/dL</Text>
      </View>
      <View style={styles.View_350_3}>
        <Text style={styles.Text_350_3}>mU/L</Text>
      </View>
      <View style={styles.View_352_0}>
        <Text style={styles.Text_352_0}>0.5-4.1</Text>
      </View>
      <View style={styles.View_352_1}>
        <Text style={styles.Text_352_1}>4.4</Text>
      </View>
      <View style={styles.View_352_2}>
        <Text style={styles.Text_352_2}>H</Text>
      </View>
      <View style={styles.View_348_0}>
        <Text style={styles.Text_348_0}>SHBG</Text>
      </View>
      <View style={styles.View_348_1}>
        <Text style={styles.Text_348_1}>Free Testosterone</Text>
      </View>
      <View style={styles.View_346_15}>
        <Text style={styles.Text_346_15}>TSH</Text>
      </View>
      <View style={styles.View_346_6}>
        <Text style={styles.Text_346_6}>Unit</Text>
      </View>
      <View style={styles.View_346_7}>
        <Text style={styles.Text_346_7}>Ref. Interval</Text>
      </View>
      <View style={styles.View_346_8}>
        <Text style={styles.Text_346_8}>Results</Text>
      </View>
      <View style={styles.View_346_9}>
        <Text style={styles.Text_346_9}>Flags</Text>
      </View>
      <View style={styles.View_354_1}>
        <Text style={styles.Text_354_1}>
          For information purposes only. Kindly discuss your results with your
          healthcare provider.
        </Text>
      </View>
      <View style={styles.View_354_23} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ca0/0bbe/d8a5a8edcfb5f7d5cff9b64a68ea6a51"
        }}
        style={styles.ImageBackground_354_22}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("115%") },
  View_346_1: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_346_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_346_2: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_346_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_346_3: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_346_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_346_4: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_346_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_2: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_354_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_3: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_354_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_4: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_354_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_5: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_354_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_10: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_354_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_11: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_354_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_14: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("42%"),
    justifyContent: "flex-start"
  },
  Text_354_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_15: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("42%"),
    justifyContent: "flex-start"
  },
  Text_354_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_16: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_354_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_17: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_354_17: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_12: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_354_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_13: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_354_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_6: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_354_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_7: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_354_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_8: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_354_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_9: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_354_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_346_5: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("55%"),
    justifyContent: "flex-start"
  },
  Text_346_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_346_10: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_346_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_346_24: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_346_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_0: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("108%"),
    justifyContent: "flex-start"
  },
  Text_354_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_346_13: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("60%"),
    justifyContent: "flex-start"
  },
  Text_346_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_346_25: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_346_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_21: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("68%"),
    backgroundColor: "rgba(255, 255, 0, 1)"
  },
  View_346_14: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("69%"),
    justifyContent: "flex-start"
  },
  Text_346_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_348_2: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("69%"),
    justifyContent: "flex-start"
  },
  Text_348_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_348_5: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("69%"),
    justifyContent: "flex-start"
  },
  Text_348_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_20: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("75%"),
    backgroundColor: "rgba(255, 255, 0, 1)"
  },
  View_348_6: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("72%"),
    justifyContent: "flex-start"
  },
  Text_348_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_348_7: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_348_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_348_3: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("69%"),
    justifyContent: "flex-start"
  },
  Text_348_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_348_9: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_348_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_0: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_349_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_348_4: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("69%"),
    justifyContent: "flex-start"
  },
  Text_348_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_350_0: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("72%"),
    justifyContent: "flex-start"
  },
  Text_350_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_350_1: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("72%"),
    justifyContent: "flex-start"
  },
  Text_350_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_19: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("85%"),
    backgroundColor: "rgba(255, 255, 0, 1)"
  },
  View_350_2: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("72%"),
    justifyContent: "flex-start"
  },
  Text_350_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_348_8: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_348_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_350_3: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("86%"),
    justifyContent: "flex-start"
  },
  Text_350_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_352_0: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("86%"),
    justifyContent: "flex-start"
  },
  Text_352_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_352_1: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("86%"),
    justifyContent: "flex-start"
  },
  Text_352_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_352_2: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("86%"),
    justifyContent: "flex-start"
  },
  Text_352_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_348_0: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("72%"),
    justifyContent: "flex-start"
  },
  Text_348_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_348_1: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_348_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_346_15: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("86%"),
    justifyContent: "flex-start"
  },
  Text_346_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_346_6: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("55%"),
    justifyContent: "flex-start"
  },
  Text_346_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_346_7: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("55%"),
    justifyContent: "flex-start"
  },
  Text_346_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_346_8: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("55%"),
    justifyContent: "flex-start"
  },
  Text_346_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_346_9: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("55%"),
    justifyContent: "flex-start"
  },
  Text_346_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_1: {
    width: wp("74%"),
    minWidth: wp("74%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("105%"),
    justifyContent: "flex-start"
  },
  Text_354_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_23: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(8, 103, 127, 1)"
  },
  ImageBackground_354_22: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("4%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
