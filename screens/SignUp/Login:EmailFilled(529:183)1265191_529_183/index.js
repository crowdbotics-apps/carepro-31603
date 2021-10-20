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
      <View style={styles.View_510_1}>
        <View style={styles.View_505_1904} />
        <View style={styles.View_505_1906}>
          <View style={styles.View_I505_1906_480_1879}>
            <View style={styles.View_I505_1906_480_1881}>
              <Text style={styles.Text_I505_1906_480_1881}>Password</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_505_1907}>
          <Text style={styles.Text_505_1907}>Sign Up / Login</Text>
        </View>
        <View style={styles.View_505_1908}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1721/1bf6/e7d9c4293026a36fba0d298d13aaaab8"
            }}
            style={styles.ImageBackground_I505_1908_982_5565}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbc2/5f17/45e153c4da48f4bceca4a97eda8620a1"
            }}
            style={styles.ImageBackground_I505_1908_982_5566}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da7c/f7cc/75d9f03017f19219fad00962736618a7"
            }}
            style={styles.ImageBackground_I505_1908_982_5568}
          />
        </View>
        <View style={styles.View_505_1909}>
          <View style={styles.View_I505_1909_488_1850}>
            <Text style={styles.Text_I505_1909_488_1850}>Sign Up</Text>
          </View>
        </View>
        <View style={styles.View_505_1910}>
          <View style={styles.View_I505_1910_488_1852}>
            <Text style={styles.Text_I505_1910_488_1852}>Login</Text>
          </View>
        </View>
        <View style={styles.View_505_1911}>
          <View style={styles.View_I505_1911_495_1}>
            <Text style={styles.Text_I505_1911_495_1}>
              Login / Sign Up with Google
            </Text>
          </View>
        </View>
        <View style={styles.View_510_0}>
          <View style={styles.View_I510_0_505_1936}>
            <View style={styles.View_I510_0_505_1937}>
              <View style={styles.View_I510_0_505_1938}>
                <Text style={styles.Text_I510_0_505_1938}>Email Address</Text>
              </View>
              <View style={styles.View_I510_0_505_1939}>
                <Text style={styles.Text_I510_0_505_1939}>hi@carepro.io</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13f0/5087/b0b38b8fc98d6e2ee880d116d3431ad7"
              }}
              style={styles.ImageBackground_I510_0_505_1988}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_529_768}>
        <View style={styles.View_I529_768_228_1}>
          <View style={styles.View_I529_768_228_1_4_227} />
        </View>
        <View style={styles.View_I529_768_228_3}>
          <View style={styles.View_I529_768_228_4}>
            <View style={styles.View_I529_768_228_6}>
              <Text style={styles.Text_I529_768_228_6}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I529_768_228_7}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I529_768_228_8}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I529_768_228_9}
        />
        <View style={styles.View_I529_768_320_49}>
          <View style={styles.View_I529_768_137_21} />
          <View style={styles.View_I529_768_230_0}>
            <Text style={styles.Text_I529_768_230_0}>Log In/Sign Up</Text>
          </View>
        </View>
        <View style={styles.View_I529_768_248_0}>
          <Text style={styles.Text_I529_768_248_0}>For Patients</Text>
        </View>
        <View style={styles.View_I529_768_248_1}>
          <Text style={styles.Text_I529_768_248_1}>For Specialists</Text>
        </View>
        <View style={styles.View_I529_768_248_2}>
          <Text style={styles.Text_I529_768_248_2}>More</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("130%") },
  View_510_1: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_505_1904: {
    flexGrow: 1,
    width: wp("56%"),
    height: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_505_1906: {
    flexGrow: 1,
    width: wp("46%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("37%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I505_1906_480_1879: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I505_1906_480_1881: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I505_1906_480_1881: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_505_1907: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_505_1907: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_505_1908: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("39%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I505_1908_982_5565: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I505_1908_982_5566: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I505_1908_982_5568: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_505_1909: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I505_1909_488_1850: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I505_1909_488_1850: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_505_1910: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("52%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I505_1910_488_1852: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I505_1910_488_1852: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_505_1911: {
    flexGrow: 1,
    width: wp("46%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("65%"),
    backgroundColor: "rgba(234, 67, 53, 1)"
  },
  View_I505_1911_495_1: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I505_1911_495_1: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_510_0: {
    flexGrow: 1,
    width: wp("46%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I510_0_505_1936: {
    flexGrow: 1,
    width: wp("46%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I510_0_505_1937: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I510_0_505_1938: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I510_0_505_1938: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I510_0_505_1939: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I510_0_505_1939: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I510_0_505_1988: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_529_768: {
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
  View_I529_768_228_1: {
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
  View_I529_768_228_1_4_227: {
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
  View_I529_768_228_3: {
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
  View_I529_768_228_4: {
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
  View_I529_768_228_6: {
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
  Text_I529_768_228_6: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I529_768_228_7: {
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
  ImageBackground_I529_768_228_8: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I529_768_228_9: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I529_768_320_49: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("3%")
  },
  View_I529_768_137_21: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I529_768_230_0: {
    width: wp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_I529_768_230_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I529_768_248_0: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I529_768_248_0: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I529_768_248_1: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I529_768_248_1: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I529_768_248_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I529_768_248_2: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
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
