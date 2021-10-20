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
      <View style={styles.View_1067_6036}>
        <View style={styles.View_I1067_6036_199_344}>
          <View style={styles.View_I1067_6036_199_344_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5979/5b08/877131cfaf519bff9199829a08dfeb63"
          }}
          style={styles.ImageBackground_I1067_6036_199_345}
        />
        <View style={styles.View_I1067_6036_199_346}>
          <View style={styles.View_I1067_6036_199_347}>
            <View style={styles.View_I1067_6036_199_349}>
              <Text style={styles.Text_I1067_6036_199_349}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I1067_6036_199_350}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I1067_6036_199_351}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I1067_6036_199_352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/171b/ad41/cca1fc9a4c61a69f2073888e1559d679"
          }}
          style={styles.ImageBackground_I1067_6036_199_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/85c9/7f4f5815b12675432f7bce135fb62d6e"
          }}
          style={styles.ImageBackground_I1067_6036_199_354}
        />
      </View>
      <View style={styles.View_1067_6396}>
        <View style={styles.View_1067_6358}>
          <View style={styles.View_I1067_6358_978_6574} />
          <View style={styles.View_I1067_6358_978_6575}>
            <Text style={styles.Text_I1067_6358_978_6575}>
              Book an appointment
            </Text>
          </View>
          <View style={styles.View_I1067_6358_978_6576}>
            <View style={styles.View_I1067_6358_978_6576_424_1} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2638/787c/18bde873448a4bea108f349b14c64062"
              }}
              style={styles.ImageBackground_I1067_6358_978_6576_424_89}
            />
            <View style={styles.View_I1067_6358_978_6576_424_48}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9011/dc9c/913447049b4d2678100b9ada4ac01db2"
                }}
                style={styles.ImageBackground_I1067_6358_978_6576_424_50}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a8/f8af/bba021ba5f8b94bb4bb50c9e1568f912"
                }}
                style={styles.ImageBackground_I1067_6358_978_6576_424_51}
              />
            </View>
            <View style={styles.View_I1067_6358_978_6576_424_53}>
              <Text style={styles.Text_I1067_6358_978_6576_424_53}>
                Prescription will be given if needed
              </Text>
            </View>
            <View style={styles.View_I1067_6358_978_6576_424_61}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9011/dc9c/913447049b4d2678100b9ada4ac01db2"
                }}
                style={styles.ImageBackground_I1067_6358_978_6576_424_62}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a8/f8af/bba021ba5f8b94bb4bb50c9e1568f912"
                }}
                style={styles.ImageBackground_I1067_6358_978_6576_424_63}
              />
            </View>
            <View style={styles.View_I1067_6358_978_6576_424_65}>
              <Text style={styles.Text_I1067_6358_978_6576_424_65}>
                Healthcare insurance approved
              </Text>
            </View>
            <View style={styles.View_I1067_6358_978_6576_424_3}>
              <Text style={styles.Text_I1067_6358_978_6576_424_3}>
                30 minutes consultation
              </Text>
            </View>
            <View style={styles.View_I1067_6358_978_6576_424_4}>
              <Text style={styles.Text_I1067_6358_978_6576_424_4}>
                Through this 30 minutes consultation, Dr Gabriel will help you
                with general, seasonal and chronic health issues. He will be
                working with you in determining the root of the issue and will
                advice you on how to move ahead.
              </Text>
            </View>
            <View style={styles.View_I1067_6358_978_6576_424_5}>
              <Text style={styles.Text_I1067_6358_978_6576_424_5}>$30</Text>
            </View>
            <View style={styles.View_I1067_6358_978_6576_424_54}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b5/dc4d/c99ef6a4cb95d13def97abc2c8311bdd"
                }}
                style={styles.ImageBackground_I1067_6358_978_6576_424_55}
              />
            </View>
            <View style={styles.View_I1067_6358_978_6576_424_56}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23d5/6c84/f4d54cc4d8ba069030d34a922808b83b"
                }}
                style={styles.ImageBackground_I1067_6358_978_6576_424_57}
              />
            </View>
            <View style={styles.View_I1067_6358_978_6576_424_58}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d67a/53bc/64e56e8bee052c7a4c752399c13cd25c"
                }}
                style={styles.ImageBackground_I1067_6358_978_6576_424_59}
              />
            </View>
          </View>
          <View style={styles.View_I1067_6358_978_6581}>
            <View style={styles.View_I1067_6358_978_6581_425_970} />
            <View style={styles.View_I1067_6358_978_6581_425_982}>
              <Text style={styles.Text_I1067_6358_978_6581_425_982}>
                5 minutes consultation
              </Text>
            </View>
            <View style={styles.View_I1067_6358_978_6581_425_983}>
              <Text style={styles.Text_I1067_6358_978_6581_425_983}>
                Through this 5 minutes consultation, Dr Gabriel will answer any
                health related questions.
              </Text>
            </View>
            <View style={styles.View_I1067_6358_978_6581_425_985}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b5/dc4d/c99ef6a4cb95d13def97abc2c8311bdd"
                }}
                style={styles.ImageBackground_I1067_6358_978_6581_425_986}
              />
            </View>
            <View style={styles.View_I1067_6358_978_6581_425_984}>
              <Text style={styles.Text_I1067_6358_978_6581_425_984}>Free</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
              }}
              style={styles.ImageBackground_I1067_6358_978_6581_426_1}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/645f/72113d275c2303233fc6bbece336b01b"
            }}
            style={styles.ImageBackground_I1067_6358_978_6734}
          />
        </View>
        <View style={styles.View_1067_6395}>
          <View style={styles.View_I1067_6395_984_6506} />
          <View style={styles.View_I1067_6395_984_6507}>
            <Text style={styles.Text_I1067_6395_984_6507}>Next</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("131%") },
  View_1067_6036: {
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
  View_I1067_6036_199_344: {
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
  View_I1067_6036_199_344_4_227: {
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
  ImageBackground_I1067_6036_199_345: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("3%")
  },
  View_I1067_6036_199_346: {
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
  View_I1067_6036_199_347: {
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
  View_I1067_6036_199_349: {
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
  Text_I1067_6036_199_349: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1067_6036_199_350: {
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
  ImageBackground_I1067_6036_199_351: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I1067_6036_199_352: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I1067_6036_199_353: {
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
  ImageBackground_I1067_6036_199_354: {
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
  View_1067_6396: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("101%"),
    minHeight: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1067_6358: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1067_6358_978_6574: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1067_6358_978_6575: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1067_6358_978_6575: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1067_6358_978_6576: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1067_6358_978_6576_424_1: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(249, 249, 249, 1)"
  },
  ImageBackground_I1067_6358_978_6576_424_89: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("18%")
  },
  View_I1067_6358_978_6576_424_48: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1067_6358_978_6576_424_50: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1067_6358_978_6576_424_51: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1067_6358_978_6576_424_53: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_I1067_6358_978_6576_424_53: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1067_6358_978_6576_424_61: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1067_6358_978_6576_424_62: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1067_6358_978_6576_424_63: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1067_6358_978_6576_424_65: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_I1067_6358_978_6576_424_65: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1067_6358_978_6576_424_3: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1067_6358_978_6576_424_3: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1067_6358_978_6576_424_4: {
    flexGrow: 1,
    width: wp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I1067_6358_978_6576_424_4: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1067_6358_978_6576_424_5: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I1067_6358_978_6576_424_5: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1067_6358_978_6576_424_54: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1067_6358_978_6576_424_55: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I1067_6358_978_6576_424_56: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1067_6358_978_6576_424_57: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I1067_6358_978_6576_424_58: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1067_6358_978_6576_424_59: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I1067_6358_978_6581: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("61%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1067_6358_978_6581_425_970: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1067_6358_978_6581_425_982: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1067_6358_978_6581_425_982: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1067_6358_978_6581_425_983: {
    flexGrow: 1,
    width: wp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I1067_6358_978_6581_425_983: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1067_6358_978_6581_425_985: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1067_6358_978_6581_425_986: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I1067_6358_978_6581_425_984: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1067_6358_978_6581_425_984: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1067_6358_978_6581_426_1: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("8%")
  },
  ImageBackground_I1067_6358_978_6734: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("7%")
  },
  View_1067_6395: {
    flexGrow: 1,
    width: wp("69%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("87%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1067_6395_984_6506: {
    flexGrow: 1,
    width: wp("69%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1067_6395_984_6507: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1067_6395_984_6507: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
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
