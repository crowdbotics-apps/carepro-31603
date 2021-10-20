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
      <View style={styles.View_1049_6769}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2feb/5f3e/ec8f38bad3c6b2f1677a6f492d64ac22"
          }}
          style={styles.ImageBackground_I1049_6769_1046_6825}
        />
      </View>
      <View style={styles.View_1049_6770}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79be/03c0/08bb2a878b8172a8f312b54429ab5148"
          }}
          style={styles.ImageBackground_I1049_6770_1046_6801}
        />
      </View>
      <View style={styles.View_1049_6771}>
        <Text style={styles.Text_1049_6771}>
          Your Loving Companion For Life.
        </Text>
      </View>
      <View style={styles.View_1049_6772}>
        <View style={styles.View_I1049_6772_1020_6730}>
          <View style={styles.View_I1049_6772_1020_6731}>
            <View style={styles.View_I1049_6772_1020_6733}>
              <Text style={styles.Text_I1049_6772_1020_6733}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I1049_6772_1020_6734}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I1049_6772_1020_6735}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I1049_6772_1020_6736}
        />
        <View style={styles.View_I1049_6772_1020_6737}>
          <View style={styles.View_I1049_6772_1020_6738} />
          <View style={styles.View_I1049_6772_1020_6739}>
            <Text style={styles.Text_I1049_6772_1020_6739}>Log In/Sign Up</Text>
          </View>
        </View>
        <View style={styles.View_I1049_6772_1020_6740}>
          <Text style={styles.Text_I1049_6772_1020_6740}>For Patients</Text>
        </View>
        <View style={styles.View_I1049_6772_1020_6741}>
          <Text style={styles.Text_I1049_6772_1020_6741}>For Specialists</Text>
        </View>
        <View style={styles.View_I1049_6772_1020_6742}>
          <Text style={styles.Text_I1049_6772_1020_6742}>More</Text>
        </View>
      </View>
      <View style={styles.View_1049_6773}>
        <Text style={styles.Text_1049_6773}>
          Quality health and wellness care from the comfort of your home.
        </Text>
      </View>
      <View style={styles.View_1049_6774}>
        <View style={styles.View_1049_6775} />
        <View style={styles.View_1049_6776}>
          <Text style={styles.Text_1049_6776}>Enter your symptom </Text>
        </View>
        <View style={styles.View_1049_6777}>
          <View style={styles.View_1049_6780} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63fc/3f7e/4137888b10fad5d98c391b8cbc78b0f2"
            }}
            style={styles.ImageBackground_1049_6781}
          />
          <View style={styles.View_1049_6782}>
            <Text style={styles.Text_1049_6782}>Search</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1049_6783}>
        <View style={styles.View_1049_6784}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d69d/e2a1/0a208567dfb7a2d601f4bbb855d400db"
            }}
            style={styles.ImageBackground_I1049_6784_1046_6809}
          />
        </View>
        <View style={styles.View_1049_6785}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed62/cf49/f1225d99b22bac292eea2c116471613d"
            }}
            style={styles.ImageBackground_I1049_6785_1046_6811}
          />
        </View>
      </View>
      <View style={styles.View_1049_6786}>
        <View style={styles.View_I1049_6786_1046_6817}>
          <View style={styles.View_I1049_6786_1046_6818}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d69d/e2a1/0a208567dfb7a2d601f4bbb855d400db"
              }}
              style={styles.ImageBackground_I1049_6786_1046_6818_1046_6809}
            />
          </View>
          <View style={styles.View_I1049_6786_1046_6819}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed62/cf49/f1225d99b22bac292eea2c116471613d"
              }}
              style={styles.ImageBackground_I1049_6786_1046_6819_1046_6811}
            />
          </View>
        </View>
        <View style={styles.View_I1049_6786_1046_6812}>
          <View style={styles.View_I1049_6786_1046_6813}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d69d/e2a1/0a208567dfb7a2d601f4bbb855d400db"
              }}
              style={styles.ImageBackground_I1049_6786_1046_6813_1046_6809}
            />
          </View>
          <View style={styles.View_I1049_6786_1046_6814}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed62/cf49/f1225d99b22bac292eea2c116471613d"
              }}
              style={styles.ImageBackground_I1049_6786_1046_6814_1046_6811}
            />
          </View>
        </View>
        <View style={styles.View_I1049_6786_1046_6827}>
          <View style={styles.View_I1049_6786_1046_6828}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d69d/e2a1/0a208567dfb7a2d601f4bbb855d400db"
              }}
              style={styles.ImageBackground_I1049_6786_1046_6828_1046_6809}
            />
          </View>
          <View style={styles.View_I1049_6786_1046_6829}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed62/cf49/f1225d99b22bac292eea2c116471613d"
              }}
              style={styles.ImageBackground_I1049_6786_1046_6829_1046_6811}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a427/2ca2/8669d30c3b4b4907f785247c46a08059"
          }}
          style={styles.ImageBackground_I1049_6786_1046_6797}
        />
      </View>
      <View style={styles.View_1049_6787}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2efb/d5b6/44174354b9b61af30cc837255854aeec"
          }}
          style={styles.ImageBackground_I1049_6787_1049_6750}
        />
        <View style={styles.View_I1049_6787_1049_6751}>
          <View style={styles.View_I1049_6787_1049_6751_759_4856}>
            <Text style={styles.Text_I1049_6787_1049_6751_759_4856}>
              Depression
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1049_6788}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2391/abfe/22218adcb8fe486e9304160cb947c2ce"
          }}
          style={styles.ImageBackground_I1049_6788_1049_6755}
        />
        <View style={styles.View_I1049_6788_1049_6756}>
          <View style={styles.View_I1049_6788_1049_6756_759_4856}>
            <Text style={styles.Text_I1049_6788_1049_6756_759_4856}>
              Headache
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1049_6789}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcb/eff8/6a7b00c93447b500453b1b5b9a5963ad"
          }}
          style={styles.ImageBackground_I1049_6789_1049_6760}
        />
        <View style={styles.View_I1049_6789_1049_6761}>
          <View style={styles.View_I1049_6789_1049_6761_759_4856}>
            <Text style={styles.Text_I1049_6789_1049_6761_759_4856}>
              Insomnia
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 250, 250, 1)" },
  View_2: { height: hp("123%") },
  View_1049_6769: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1049_6769_1046_6825: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1049_6770: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1049_6770_1046_6801: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1049_6771: {
    width: wp("28%"),
    minWidth: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_1049_6771: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 52,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -3.25,
    textTransform: "none"
  },
  View_1049_6772: {
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
  View_I1049_6772_1020_6730: {
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
  View_I1049_6772_1020_6731: {
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
  View_I1049_6772_1020_6733: {
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
  Text_I1049_6772_1020_6733: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1049_6772_1020_6734: {
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
  ImageBackground_I1049_6772_1020_6735: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I1049_6772_1020_6736: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I1049_6772_1020_6737: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("3%")
  },
  View_I1049_6772_1020_6738: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1049_6772_1020_6739: {
    width: wp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_I1049_6772_1020_6739: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1049_6772_1020_6740: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I1049_6772_1020_6740: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1049_6772_1020_6741: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I1049_6772_1020_6741: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1049_6772_1020_6742: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I1049_6772_1020_6742: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1049_6773: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_1049_6773: {
    color: "rgba(191, 193, 205, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1049_6774: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("82%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1049_6775: {
    width: wp("35%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1049_6776: {
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1049_6776: {
    color: "rgba(160, 164, 168, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1049_6777: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("1%")
  },
  View_1049_6780: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_1049_6781: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1049_6782: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_1049_6782: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1049_6783: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("20%")
  },
  View_1049_6784: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1049_6784_1046_6809: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1049_6785: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1049_6785_1046_6811: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1049_6786: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1049_6786_1046_6817: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("43%")
  },
  View_I1049_6786_1046_6818: {
    width: wp("15%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1049_6786_1046_6818_1046_6809: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1049_6786_1046_6819: {
    width: wp("15%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1049_6786_1046_6819_1046_6811: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1049_6786_1046_6812: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%"),
    top: hp("37%")
  },
  View_I1049_6786_1046_6813: {
    width: wp("15%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1049_6786_1046_6813_1046_6809: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1049_6786_1046_6814: {
    width: wp("15%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1049_6786_1046_6814_1046_6811: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1049_6786_1046_6827: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%"),
    top: hp("37%")
  },
  View_I1049_6786_1046_6828: {
    width: wp("15%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1049_6786_1046_6828_1046_6809: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1049_6786_1046_6829: {
    width: wp("15%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1049_6786_1046_6829_1046_6811: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I1049_6786_1046_6797: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1049_6787: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("93%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1049_6787_1049_6750: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1049_6787_1049_6751: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1049_6787_1049_6751_759_4856: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1049_6787_1049_6751_759_4856: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1049_6788: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("93%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1049_6788_1049_6755: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1049_6788_1049_6756: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1049_6788_1049_6756_759_4856: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1049_6788_1049_6756_759_4856: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1049_6789: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("93%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1049_6789_1049_6760: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1049_6789_1049_6761: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1049_6789_1049_6761_759_4856: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1049_6789_1049_6761_759_4856: {
    color: "rgba(110, 113, 145, 1)",
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
