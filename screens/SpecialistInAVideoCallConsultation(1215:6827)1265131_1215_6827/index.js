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
      <View style={styles.View_1215_6828}>
        <View style={styles.View_I1215_6828_199_344}>
          <View style={styles.View_I1215_6828_199_344_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5979/5b08/877131cfaf519bff9199829a08dfeb63"
          }}
          style={styles.ImageBackground_I1215_6828_199_345}
        />
        <View style={styles.View_I1215_6828_199_346}>
          <View style={styles.View_I1215_6828_199_347}>
            <View style={styles.View_I1215_6828_199_349}>
              <Text style={styles.Text_I1215_6828_199_349}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I1215_6828_199_350}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I1215_6828_199_351}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I1215_6828_199_352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/171b/ad41/cca1fc9a4c61a69f2073888e1559d679"
          }}
          style={styles.ImageBackground_I1215_6828_199_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/85c9/7f4f5815b12675432f7bce135fb62d6e"
          }}
          style={styles.ImageBackground_I1215_6828_199_354}
        />
      </View>
      <View style={styles.View_1215_6829}>
        <View style={styles.View_I1215_6829_199_444}>
          <View style={styles.View_I1215_6829_199_445}>
            <View style={styles.View_I1215_6829_199_445_4_227} />
          </View>
        </View>
        <View style={styles.View_I1215_6829_199_446}>
          <View style={styles.View_I1215_6829_199_447}>
            <Text style={styles.Text_I1215_6829_199_447}>My Health</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbcc/2f1e/81abeac8cf8ec8378572a9b6dfbf3974"
            }}
            style={styles.ImageBackground_I1215_6829_199_448}
          />
        </View>
        <View style={styles.View_I1215_6829_199_450}>
          <View style={styles.View_I1215_6829_199_451}>
            <Text style={styles.Text_I1215_6829_199_451}>Specislist Area</Text>
          </View>
          <View style={styles.View_I1215_6829_199_452}>
            <View style={styles.View_I1215_6829_199_453}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/984b/92fa/664da26c3fb9b69746b556885206648d"
                }}
                style={styles.ImageBackground_I1215_6829_199_454}
              />
            </View>
            <View style={styles.View_I1215_6829_199_456}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34b/3fad/fc809c0af8ff375c0c1d3e6770c999b4"
                }}
                style={styles.ImageBackground_I1215_6829_199_457}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I1215_6829_199_459}>
          <View style={styles.View_I1215_6829_199_460}>
            <Text style={styles.Text_I1215_6829_199_460}>Friends Area</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff31/53eb/73d3d7306c8dbccc98301d70467a39f7"
            }}
            style={styles.ImageBackground_I1215_6829_199_461}
          />
        </View>
        <View style={styles.View_I1215_6829_199_463}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6a6/d86f/210c1d275b8c8f0067359d58037f63b0"
            }}
            style={styles.ImageBackground_I1215_6829_199_464}
          />
          <View style={styles.View_I1215_6829_199_465}>
            <View style={styles.View_I1215_6829_199_466}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3155/9060/f25304a55c8d3ee3cadb0523048eb23b"
                }}
                style={styles.ImageBackground_I1215_6829_199_467}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I1215_6829_199_469}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5933/03b8/c08f024b145b53dd98ea067662c58dab"
            }}
            style={styles.ImageBackground_I1215_6829_199_470}
          />
          <View style={styles.View_I1215_6829_199_471}>
            <View style={styles.View_I1215_6829_199_472}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a6/6501/690ec443ee5966d5124104068518bdb1"
                }}
                style={styles.ImageBackground_I1215_6829_199_473}
              />
            </View>
            <View style={styles.View_I1215_6829_199_478}>
              <Text style={styles.Text_I1215_6829_199_478}>Dashboard</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1216_6928}>
        <View style={styles.View_I1216_6928_4_227} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10f2/5f68/483d0002ba0d72c3745a29e0c5686ce8"
        }}
        style={styles.ImageBackground_1216_6992}
      />
      <View style={styles.View_1216_6993}>
        <Text style={styles.Text_1216_6993}>Sarah Kowalski</Text>
      </View>
      <View style={styles.View_1220_6998}>
        <Text style={styles.Text_1220_6998}>
          Hi, I have been facing difficulties to fall asleep recently.{" "}
        </Text>
      </View>
      <View style={styles.View_1216_6995}>
        <Text style={styles.Text_1216_6995}>Appointment at 14:30</Text>
      </View>
      <View style={styles.View_1216_6996}>
        <Text style={styles.Text_1216_6996}>10:31:54</Text>
      </View>
      <View style={styles.View_1216_6930}>
        <View style={styles.View_I1216_6930_162_54}>
          <View style={styles.View_I1216_6930_162_56}>
            <Text style={styles.Text_I1216_6930_162_56}>Notes</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4485/ea18/b6a812bd5ad345667b4dcb49a97bde97"
          }}
          style={styles.ImageBackground_I1216_6930_162_59}
        />
      </View>
      <View style={styles.View_1216_6932}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7191/8f95/21e641fe9023c7673397178534dd24d6"
          }}
          style={styles.ImageBackground_I1216_6932_655_4869}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a6a/feb3/44e782921b0338f61d1001ab4d8b8bf6"
          }}
          style={styles.ImageBackground_I1216_6932_661_4930}
        />
        <View style={styles.View_I1216_6932_691_4689}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e0b/d71b/76d12bad540f33a5badeab9855c83d9b"
            }}
            style={styles.ImageBackground_I1216_6932_691_4689_691_4672}
          />
          <View style={styles.View_I1216_6932_691_4689_691_4665}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/816b/6c9b/6efaef7ce972454be53af500164a3700"
              }}
              style={styles.ImageBackground_I1216_6932_691_4689_691_4666}
            />
          </View>
        </View>
        <View style={styles.View_I1216_6932_691_4690}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e0b/d71b/76d12bad540f33a5badeab9855c83d9b"
            }}
            style={styles.ImageBackground_I1216_6932_691_4690_691_4673}
          />
          <View style={styles.View_I1216_6932_691_4690_691_4660}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fe0/d245/b723322b6633222b41d73b51e2025107"
              }}
              style={styles.ImageBackground_I1216_6932_691_4690_691_4661}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1216_6933}>
        <View style={styles.View_I1216_6933_691_4686}>
          <Text style={styles.Text_I1216_6933_691_4686}>Symptom List</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc00/c3f0/b6795834bb9d45e585f16f8bf424d91a"
          }}
          style={styles.ImageBackground_I1216_6933_691_4685}
        />
      </View>
      <View style={styles.View_1216_6975}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50a8/3ee8/db874c4cc24840ad929f0a2a6559f2c8"
          }}
          style={styles.ImageBackground_I1216_6975_982_4565}
        />
        <View style={styles.View_I1216_6975_982_4566}>
          <Text style={styles.Text_I1216_6975_982_4566}>Upload Files</Text>
        </View>
      </View>
      <View style={styles.View_1216_6988}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c149/8603/3d1dcc9f01fd8477a3902ddbc8c4e16c"
          }}
          style={styles.ImageBackground_I1216_6988_982_4565}
        />
        <View style={styles.View_I1216_6988_982_4566}>
          <Text style={styles.Text_I1216_6988_982_4566}>
            Write a Prescription
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("250%") },
  View_1215_6828: {
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
  View_I1215_6828_199_344: {
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
  View_I1215_6828_199_344_4_227: {
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
  ImageBackground_I1215_6828_199_345: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("3%")
  },
  View_I1215_6828_199_346: {
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
  View_I1215_6828_199_347: {
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
  View_I1215_6828_199_349: {
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
  Text_I1215_6828_199_349: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1215_6828_199_350: {
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
  ImageBackground_I1215_6828_199_351: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I1215_6828_199_352: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I1215_6828_199_353: {
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
  ImageBackground_I1215_6828_199_354: {
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
  View_1215_6829: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("230%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1215_6829_199_444: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_I1215_6829_199_445: {
    width: wp("100%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1215_6829_199_445_4_227: {
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
  View_I1215_6829_199_446: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("12%")
  },
  View_I1215_6829_199_447: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I1215_6829_199_447: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1215_6829_199_448: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1215_6829_199_450: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("12%")
  },
  View_I1215_6829_199_451: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I1215_6829_199_451: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1215_6829_199_452: {
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
  View_I1215_6829_199_453: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1215_6829_199_454: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1215_6829_199_456: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I1215_6829_199_457: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1215_6829_199_459: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("12%")
  },
  View_I1215_6829_199_460: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I1215_6829_199_460: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1215_6829_199_461: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1215_6829_199_463: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%")
  },
  ImageBackground_I1215_6829_199_464: {
    width: wp("7%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1215_6829_199_465: {
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
  View_I1215_6829_199_466: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1215_6829_199_467: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1215_6829_199_469: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%")
  },
  ImageBackground_I1215_6829_199_470: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1215_6829_199_471: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I1215_6829_199_472: {
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
  ImageBackground_I1215_6829_199_473: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1215_6829_199_478: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I1215_6829_199_478: {
    color: "rgba(28, 200, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1216_6928: {
    width: wp("93%"),
    height: hp("202%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1216_6928_4_227: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1216_6992: {
    width: wp("8%"),
    height: hp("15%"),
    top: hp("126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    resizeMode: "cover"
  },
  View_1216_6993: {
    width: wp("13%"),
    top: hp("129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "center"
  },
  Text_1216_6993: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1220_6998: {
    width: wp("40%"),
    top: hp("142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "center"
  },
  Text_1220_6998: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1216_6995: {
    width: wp("13%"),
    top: hp("133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "center"
  },
  Text_1216_6995: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1216_6996: {
    width: wp("8%"),
    top: hp("131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    justifyContent: "center"
  },
  Text_1216_6996: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1216_6930: {
    width: wp("86%"),
    height: hp("17%"),
    top: hp("162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1216_6930_162_54: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1216_6930_162_56: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1216_6930_162_56: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1216_6930_162_59: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("14%")
  },
  View_1216_6932: {
    width: wp("93%"),
    height: hp("96%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1216_6932_655_4869: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_I1216_6932_661_4930: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("68%"),
    resizeMode: "cover"
  },
  View_I1216_6932_691_4689: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("82%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1216_6932_691_4689_691_4672: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1216_6932_691_4689_691_4665: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1216_6932_691_4689_691_4666: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1216_6932_691_4690: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("82%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1216_6932_691_4690_691_4673: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1216_6932_691_4690_691_4660: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1216_6932_691_4690_691_4661: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1216_6933: {
    width: wp("10%"),
    height: hp("33%"),
    top: hp("183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1216_6933_691_4686: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_I1216_6933_691_4686: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1216_6933_691_4685: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1216_6975: {
    width: wp("42%"),
    height: hp("8%"),
    top: hp("150%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1216_6975_982_4565: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1216_6975_982_4566: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1216_6975_982_4566: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1216_6988: {
    width: wp("42%"),
    height: hp("8%"),
    top: hp("150%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1216_6988_982_4565: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1216_6988_982_4566: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1216_6988_982_4566: {
    color: "rgba(247, 247, 252, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
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
