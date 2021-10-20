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
      <View style={styles.View_631_1}>
        <View style={styles.View_I631_1_199_344}>
          <View style={styles.View_I631_1_199_344_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5979/5b08/877131cfaf519bff9199829a08dfeb63"
          }}
          style={styles.ImageBackground_I631_1_199_345}
        />
        <View style={styles.View_I631_1_199_346}>
          <View style={styles.View_I631_1_199_347}>
            <View style={styles.View_I631_1_199_349}>
              <Text style={styles.Text_I631_1_199_349}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I631_1_199_350}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I631_1_199_351}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I631_1_199_352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/171b/ad41/cca1fc9a4c61a69f2073888e1559d679"
          }}
          style={styles.ImageBackground_I631_1_199_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/85c9/7f4f5815b12675432f7bce135fb62d6e"
          }}
          style={styles.ImageBackground_I631_1_199_354}
        />
      </View>
      <View style={styles.View_631_2}>
        <View style={styles.View_I631_2_199_444}>
          <View style={styles.View_I631_2_199_445}>
            <View style={styles.View_I631_2_199_445_4_227} />
          </View>
        </View>
        <View style={styles.View_I631_2_199_446}>
          <View style={styles.View_I631_2_199_447}>
            <Text style={styles.Text_I631_2_199_447}>My Health</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbcc/2f1e/81abeac8cf8ec8378572a9b6dfbf3974"
            }}
            style={styles.ImageBackground_I631_2_199_448}
          />
        </View>
        <View style={styles.View_I631_2_199_450}>
          <View style={styles.View_I631_2_199_451}>
            <Text style={styles.Text_I631_2_199_451}>Specislist Area</Text>
          </View>
          <View style={styles.View_I631_2_199_452}>
            <View style={styles.View_I631_2_199_453}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/984b/92fa/664da26c3fb9b69746b556885206648d"
                }}
                style={styles.ImageBackground_I631_2_199_454}
              />
            </View>
            <View style={styles.View_I631_2_199_456}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34b/3fad/fc809c0af8ff375c0c1d3e6770c999b4"
                }}
                style={styles.ImageBackground_I631_2_199_457}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I631_2_199_459}>
          <View style={styles.View_I631_2_199_460}>
            <Text style={styles.Text_I631_2_199_460}>Friends Area</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff31/53eb/73d3d7306c8dbccc98301d70467a39f7"
            }}
            style={styles.ImageBackground_I631_2_199_461}
          />
        </View>
        <View style={styles.View_I631_2_199_463}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6a6/d86f/210c1d275b8c8f0067359d58037f63b0"
            }}
            style={styles.ImageBackground_I631_2_199_464}
          />
          <View style={styles.View_I631_2_199_465}>
            <View style={styles.View_I631_2_199_466}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3155/9060/f25304a55c8d3ee3cadb0523048eb23b"
                }}
                style={styles.ImageBackground_I631_2_199_467}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I631_2_199_469}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5933/03b8/c08f024b145b53dd98ea067662c58dab"
            }}
            style={styles.ImageBackground_I631_2_199_470}
          />
          <View style={styles.View_I631_2_199_471}>
            <View style={styles.View_I631_2_199_472}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a6/6501/690ec443ee5966d5124104068518bdb1"
                }}
                style={styles.ImageBackground_I631_2_199_473}
              />
            </View>
            <View style={styles.View_I631_2_199_478}>
              <Text style={styles.Text_I631_2_199_478}>Dashboard</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_636_3}>
        <View style={styles.View_631_4}>
          <View style={styles.View_I631_4_4_227} />
        </View>
        <View style={styles.View_631_125}>
          <Text style={styles.Text_631_125}>
            Accept Dr Josh Muronne’s Consultation via Video Call?
          </Text>
        </View>
        <View style={styles.View_636_1}>
          <View style={styles.View_I636_1_631_183} />
          <View style={styles.View_I636_1_631_184}>
            <Text style={styles.Text_I636_1_631_184}>Accept</Text>
          </View>
        </View>
        <View style={styles.View_636_2}>
          <View style={styles.View_I636_2_632_0} />
          <View style={styles.View_I636_2_632_1}>
            <Text style={styles.Text_I636_2_632_1}>Reject</Text>
          </View>
        </View>
        <View style={styles.View_635_4509}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f7f/22c6/aa78ce260293599358a0eec797a50a39"
            }}
            style={styles.ImageBackground_635_4510}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("114%") },
  View_631_1: {
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
  View_I631_1_199_344: {
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
  View_I631_1_199_344_4_227: {
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
  ImageBackground_I631_1_199_345: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("3%")
  },
  View_I631_1_199_346: {
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
  View_I631_1_199_347: {
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
  View_I631_1_199_349: {
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
  Text_I631_1_199_349: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I631_1_199_350: {
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
  ImageBackground_I631_1_199_351: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I631_1_199_352: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I631_1_199_353: {
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
  ImageBackground_I631_1_199_354: {
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
  View_631_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("94%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I631_2_199_444: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_I631_2_199_445: {
    width: wp("100%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I631_2_199_445_4_227: {
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
  View_I631_2_199_446: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("12%")
  },
  View_I631_2_199_447: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I631_2_199_447: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I631_2_199_448: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I631_2_199_450: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("12%")
  },
  View_I631_2_199_451: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I631_2_199_451: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I631_2_199_452: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I631_2_199_453: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I631_2_199_454: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I631_2_199_456: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I631_2_199_457: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I631_2_199_459: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("12%")
  },
  View_I631_2_199_460: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I631_2_199_460: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I631_2_199_461: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I631_2_199_463: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%")
  },
  ImageBackground_I631_2_199_464: {
    width: wp("7%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I631_2_199_465: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I631_2_199_466: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I631_2_199_467: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I631_2_199_469: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%")
  },
  ImageBackground_I631_2_199_470: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I631_2_199_471: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I631_2_199_472: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I631_2_199_473: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I631_2_199_478: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I631_2_199_478: {
    color: "rgba(28, 200, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_636_3: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_631_4: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I631_4_4_227: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_631_125: {
    flexGrow: 1,
    width: wp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("27%"),
    justifyContent: "center"
  },
  Text_631_125: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_636_1: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I636_1_631_183: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I636_1_631_184: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I636_1_631_184: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_636_2: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I636_2_632_0: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    borderColor: "rgba(234, 67, 53, 1)",
    borderWidth: 1
  },
  View_I636_2_632_1: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I636_2_632_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_635_4509: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_635_4510: {
    width: wp("6%"),
    height: hp("10%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
