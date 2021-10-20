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
      <View style={styles.View_1070_6409}>
        <View style={styles.View_I1070_6409_199_344}>
          <View style={styles.View_I1070_6409_199_344_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5979/5b08/877131cfaf519bff9199829a08dfeb63"
          }}
          style={styles.ImageBackground_I1070_6409_199_345}
        />
        <View style={styles.View_I1070_6409_199_346}>
          <View style={styles.View_I1070_6409_199_347}>
            <View style={styles.View_I1070_6409_199_349}>
              <Text style={styles.Text_I1070_6409_199_349}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I1070_6409_199_350}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I1070_6409_199_351}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I1070_6409_199_352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/171b/ad41/cca1fc9a4c61a69f2073888e1559d679"
          }}
          style={styles.ImageBackground_I1070_6409_199_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/85c9/7f4f5815b12675432f7bce135fb62d6e"
          }}
          style={styles.ImageBackground_I1070_6409_199_354}
        />
      </View>
      <View style={styles.View_997_6512}>
        <View style={styles.View_I997_6512_457_0} />
        <View style={styles.View_I997_6512_457_1}>
          <Text style={styles.Text_I997_6512_457_1}>Confirm Booking</Text>
        </View>
        <View style={styles.View_I997_6512_457_165}>
          <Text style={styles.Text_I997_6512_457_165}>
            Confirm booking with Dr Gabriel Bruce via Video Call on Monday, 14
            June 2021 at 15:45?
          </Text>
        </View>
        <View style={styles.View_I997_6512_457_173}>
          <Text style={styles.Text_I997_6512_457_173}>
            I accept the Terms &amp; Conditions.
          </Text>
        </View>
        <View style={styles.View_I997_6512_457_174}>
          <View style={styles.View_I997_6512_457_174_457_170} />
          <View style={styles.View_I997_6512_457_174_457_171}>
            <Text style={styles.Text_I997_6512_457_174_457_171}>
              Confirm Booking
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("123%") },
  View_1070_6409: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1070_6409_199_344: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1070_6409_199_344_4_227: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1070_6409_199_345: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("3%")
  },
  View_I1070_6409_199_346: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("4%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1070_6409_199_347: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1070_6409_199_349: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1070_6409_199_349: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1070_6409_199_350: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1070_6409_199_351: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I1070_6409_199_352: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I1070_6409_199_353: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("4%"),
    resizeMode: "cover"
  },
  ImageBackground_I1070_6409_199_354: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("4%"),
    resizeMode: "cover"
  },
  View_997_6512: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I997_6512_457_0: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I997_6512_457_1: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I997_6512_457_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I997_6512_457_165: {
    flexGrow: 1,
    width: wp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_I997_6512_457_165: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I997_6512_457_173: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_I997_6512_457_173: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I997_6512_457_174: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I997_6512_457_174_457_170: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I997_6512_457_174_457_171: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I997_6512_457_174_457_171: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
