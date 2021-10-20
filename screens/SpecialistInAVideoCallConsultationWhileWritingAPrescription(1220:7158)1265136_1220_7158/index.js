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
      <View style={styles.View_1220_7159}>
        <View style={styles.View_I1220_7159_199_344}>
          <View style={styles.View_I1220_7159_199_344_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5979/5b08/877131cfaf519bff9199829a08dfeb63"
          }}
          style={styles.ImageBackground_I1220_7159_199_345}
        />
        <View style={styles.View_I1220_7159_199_346}>
          <View style={styles.View_I1220_7159_199_347}>
            <View style={styles.View_I1220_7159_199_349}>
              <Text style={styles.Text_I1220_7159_199_349}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I1220_7159_199_350}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I1220_7159_199_351}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I1220_7159_199_352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/171b/ad41/cca1fc9a4c61a69f2073888e1559d679"
          }}
          style={styles.ImageBackground_I1220_7159_199_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/85c9/7f4f5815b12675432f7bce135fb62d6e"
          }}
          style={styles.ImageBackground_I1220_7159_199_354}
        />
      </View>
      <View style={styles.View_1220_7160}>
        <View style={styles.View_I1220_7160_199_444}>
          <View style={styles.View_I1220_7160_199_445}>
            <View style={styles.View_I1220_7160_199_445_4_227} />
          </View>
        </View>
        <View style={styles.View_I1220_7160_199_446}>
          <View style={styles.View_I1220_7160_199_447}>
            <Text style={styles.Text_I1220_7160_199_447}>My Health</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbcc/2f1e/81abeac8cf8ec8378572a9b6dfbf3974"
            }}
            style={styles.ImageBackground_I1220_7160_199_448}
          />
        </View>
        <View style={styles.View_I1220_7160_199_450}>
          <View style={styles.View_I1220_7160_199_451}>
            <Text style={styles.Text_I1220_7160_199_451}>Specislist Area</Text>
          </View>
          <View style={styles.View_I1220_7160_199_452}>
            <View style={styles.View_I1220_7160_199_453}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/984b/92fa/664da26c3fb9b69746b556885206648d"
                }}
                style={styles.ImageBackground_I1220_7160_199_454}
              />
            </View>
            <View style={styles.View_I1220_7160_199_456}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34b/3fad/fc809c0af8ff375c0c1d3e6770c999b4"
                }}
                style={styles.ImageBackground_I1220_7160_199_457}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I1220_7160_199_459}>
          <View style={styles.View_I1220_7160_199_460}>
            <Text style={styles.Text_I1220_7160_199_460}>Friends Area</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff31/53eb/73d3d7306c8dbccc98301d70467a39f7"
            }}
            style={styles.ImageBackground_I1220_7160_199_461}
          />
        </View>
        <View style={styles.View_I1220_7160_199_463}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6a6/d86f/210c1d275b8c8f0067359d58037f63b0"
            }}
            style={styles.ImageBackground_I1220_7160_199_464}
          />
          <View style={styles.View_I1220_7160_199_465}>
            <View style={styles.View_I1220_7160_199_466}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3155/9060/f25304a55c8d3ee3cadb0523048eb23b"
                }}
                style={styles.ImageBackground_I1220_7160_199_467}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I1220_7160_199_469}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5933/03b8/c08f024b145b53dd98ea067662c58dab"
            }}
            style={styles.ImageBackground_I1220_7160_199_470}
          />
          <View style={styles.View_I1220_7160_199_471}>
            <View style={styles.View_I1220_7160_199_472}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a6/6501/690ec443ee5966d5124104068518bdb1"
                }}
                style={styles.ImageBackground_I1220_7160_199_473}
              />
            </View>
            <View style={styles.View_I1220_7160_199_478}>
              <Text style={styles.Text_I1220_7160_199_478}>Dashboard</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1220_7161}>
        <View style={styles.View_I1220_7161_4_227} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10f2/5f68/483d0002ba0d72c3745a29e0c5686ce8"
        }}
        style={styles.ImageBackground_1220_7162}
      />
      <View style={styles.View_1220_7164}>
        <Text style={styles.Text_1220_7164}>Sarah Kowalski</Text>
      </View>
      <View style={styles.View_1220_7165}>
        <Text style={styles.Text_1220_7165}>
          Hi, I have been facing difficulties to fall asleep recently.{" "}
        </Text>
      </View>
      <View style={styles.View_1220_7166}>
        <Text style={styles.Text_1220_7166}>Appointment at 14:30</Text>
      </View>
      <View style={styles.View_1220_7167}>
        <Text style={styles.Text_1220_7167}>10:31:54</Text>
      </View>
      <View style={styles.View_1220_7168}>
        <View style={styles.View_I1220_7168_162_54}>
          <View style={styles.View_I1220_7168_162_56}>
            <Text style={styles.Text_I1220_7168_162_56}>Notes</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4485/ea18/b6a812bd5ad345667b4dcb49a97bde97"
          }}
          style={styles.ImageBackground_I1220_7168_162_59}
        />
      </View>
      <View style={styles.View_1220_7169}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7191/8f95/21e641fe9023c7673397178534dd24d6"
          }}
          style={styles.ImageBackground_I1220_7169_655_4869}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a6a/feb3/44e782921b0338f61d1001ab4d8b8bf6"
          }}
          style={styles.ImageBackground_I1220_7169_661_4930}
        />
        <View style={styles.View_I1220_7169_691_4689}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e0b/d71b/76d12bad540f33a5badeab9855c83d9b"
            }}
            style={styles.ImageBackground_I1220_7169_691_4689_691_4672}
          />
          <View style={styles.View_I1220_7169_691_4689_691_4665}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/816b/6c9b/6efaef7ce972454be53af500164a3700"
              }}
              style={styles.ImageBackground_I1220_7169_691_4689_691_4666}
            />
          </View>
        </View>
        <View style={styles.View_I1220_7169_691_4690}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e0b/d71b/76d12bad540f33a5badeab9855c83d9b"
            }}
            style={styles.ImageBackground_I1220_7169_691_4690_691_4673}
          />
          <View style={styles.View_I1220_7169_691_4690_691_4660}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da2b/d639/ea43925224dbf212f4b8e53b007367e3"
              }}
              style={styles.ImageBackground_I1220_7169_691_4690_691_4661}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1220_7170}>
        <View style={styles.View_I1220_7170_691_4686}>
          <Text style={styles.Text_I1220_7170_691_4686}>Symptom List</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc00/c3f0/b6795834bb9d45e585f16f8bf424d91a"
          }}
          style={styles.ImageBackground_I1220_7170_691_4685}
        />
      </View>
      <View style={styles.View_1220_7171}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50a8/3ee8/db874c4cc24840ad929f0a2a6559f2c8"
          }}
          style={styles.ImageBackground_I1220_7171_982_4565}
        />
        <View style={styles.View_I1220_7171_982_4566}>
          <Text style={styles.Text_I1220_7171_982_4566}>Upload Files</Text>
        </View>
      </View>
      <View style={styles.View_1220_7172}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c149/8603/3d1dcc9f01fd8477a3902ddbc8c4e16c"
          }}
          style={styles.ImageBackground_I1220_7172_982_4565}
        />
        <View style={styles.View_I1220_7172_982_4566}>
          <Text style={styles.Text_I1220_7172_982_4566}>
            Write a Prescription
          </Text>
        </View>
      </View>
      <View style={styles.View_1232_7211}>
        <View style={styles.View_I1232_7211_1230_7169} />
        <View style={styles.View_I1232_7211_1230_7170}>
          <Text style={styles.Text_I1232_7211_1230_7170}>Prescription</Text>
        </View>
        <View style={styles.View_I1232_7211_1230_7171}>
          <View style={styles.View_I1232_7211_1230_7171_1220_7109}>
            <View style={styles.View_I1232_7211_1230_7171_1220_7111}>
              <Text style={styles.Text_I1232_7211_1230_7171_1220_7111}>
                Medicine Name
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I1232_7211_1230_7172}>
          <View style={styles.View_I1232_7211_1230_7172_1220_7109}>
            <View style={styles.View_I1232_7211_1230_7172_1220_7111}>
              <Text style={styles.Text_I1232_7211_1230_7172_1220_7111}>
                Medicine Uses
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I1232_7211_1230_7173}>
          <View style={styles.View_I1232_7211_1230_7173_1220_7109}>
            <View style={styles.View_I1232_7211_1230_7173_1220_7111}>
              <Text style={styles.Text_I1232_7211_1230_7173_1220_7111}>
                Dosage
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I1232_7211_1230_7174}>
          <Text style={styles.Text_I1232_7211_1230_7174}>
            You are solely responsible for all the prescribed medications.
            Ensure that your patient is not allergic to the prescriptions for
            they can directly sue you. CarePro is not be liable.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed8b/6ffe/b86fa0a99bafc321134b6d481f21425a"
          }}
          style={styles.ImageBackground_I1232_7211_1230_7175}
        />
        <View style={styles.View_I1232_7211_1230_7178}>
          <View style={styles.View_I1232_7211_1230_7178_1224_7304} />
          <View style={styles.View_I1232_7211_1230_7178_1224_7305}>
            <Text style={styles.Text_I1232_7211_1230_7178_1224_7305}>
              Confirm Prescription
            </Text>
          </View>
        </View>
        <View style={styles.View_I1232_7211_1230_7179}>
          <View style={styles.View_I1232_7211_1230_7179_1224_7601}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1683/a0c0/811a7e87b0ea3113804594ee7dc2027e"
              }}
              style={styles.ImageBackground_I1232_7211_1230_7179_1224_7602}
            />
            <View style={styles.View_I1232_7211_1230_7179_1224_7603}>
              <View style={styles.View_I1232_7211_1230_7179_1224_7604}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ee/8cd5/8a88a8d0a8b4dbd5d772e2eafffdb386"
                  }}
                  style={styles.ImageBackground_I1232_7211_1230_7179_1224_7605}
                />
              </View>
              <View style={styles.View_I1232_7211_1230_7179_1224_7607}>
                <View style={styles.View_I1232_7211_1230_7179_1224_7608}>
                  <Text style={styles.Text_I1232_7211_1230_7179_1224_7608}>
                    Add
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I1232_7211_1230_7230}>
          <View style={styles.View_I1232_7211_1230_7230_1230_7217}>
            <View style={styles.View_I1232_7211_1230_7230_1230_7219}>
              <Text style={styles.Text_I1232_7211_1230_7230_1230_7219}>
                Notes (if any)
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4485/ea18/b6a812bd5ad345667b4dcb49a97bde97"
            }}
            style={styles.ImageBackground_I1232_7211_1230_7230_1230_7222}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("250%") },
  View_1220_7159: {
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
  View_I1220_7159_199_344: {
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
  View_I1220_7159_199_344_4_227: {
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
  ImageBackground_I1220_7159_199_345: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("3%")
  },
  View_I1220_7159_199_346: {
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
  View_I1220_7159_199_347: {
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
  View_I1220_7159_199_349: {
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
  Text_I1220_7159_199_349: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1220_7159_199_350: {
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
  ImageBackground_I1220_7159_199_351: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I1220_7159_199_352: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I1220_7159_199_353: {
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
  ImageBackground_I1220_7159_199_354: {
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
  View_1220_7160: {
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
  View_I1220_7160_199_444: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_I1220_7160_199_445: {
    width: wp("100%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1220_7160_199_445_4_227: {
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
  View_I1220_7160_199_446: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("12%")
  },
  View_I1220_7160_199_447: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I1220_7160_199_447: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1220_7160_199_448: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1220_7160_199_450: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("12%")
  },
  View_I1220_7160_199_451: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I1220_7160_199_451: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1220_7160_199_452: {
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
  View_I1220_7160_199_453: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1220_7160_199_454: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1220_7160_199_456: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I1220_7160_199_457: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1220_7160_199_459: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("12%")
  },
  View_I1220_7160_199_460: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I1220_7160_199_460: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1220_7160_199_461: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1220_7160_199_463: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%")
  },
  ImageBackground_I1220_7160_199_464: {
    width: wp("7%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1220_7160_199_465: {
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
  View_I1220_7160_199_466: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1220_7160_199_467: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1220_7160_199_469: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%")
  },
  ImageBackground_I1220_7160_199_470: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1220_7160_199_471: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I1220_7160_199_472: {
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
  ImageBackground_I1220_7160_199_473: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1220_7160_199_478: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I1220_7160_199_478: {
    color: "rgba(28, 200, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1220_7161: {
    width: wp("93%"),
    height: hp("202%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1220_7161_4_227: {
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
  ImageBackground_1220_7162: {
    width: wp("8%"),
    height: hp("15%"),
    top: hp("126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    resizeMode: "cover"
  },
  View_1220_7164: {
    width: wp("13%"),
    top: hp("129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "center"
  },
  Text_1220_7164: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1220_7165: {
    width: wp("40%"),
    top: hp("142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "center"
  },
  Text_1220_7165: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1220_7166: {
    width: wp("13%"),
    top: hp("133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "center"
  },
  Text_1220_7166: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1220_7167: {
    width: wp("8%"),
    top: hp("131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    justifyContent: "center"
  },
  Text_1220_7167: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1220_7168: {
    width: wp("86%"),
    height: hp("17%"),
    top: hp("162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1220_7168_162_54: {
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
  View_I1220_7168_162_56: {
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
  Text_I1220_7168_162_56: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1220_7168_162_59: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("14%")
  },
  View_1220_7169: {
    width: wp("93%"),
    height: hp("96%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1220_7169_655_4869: {
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
  ImageBackground_I1220_7169_661_4930: {
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
  View_I1220_7169_691_4689: {
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
  ImageBackground_I1220_7169_691_4689_691_4672: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1220_7169_691_4689_691_4665: {
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
  ImageBackground_I1220_7169_691_4689_691_4666: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1220_7169_691_4690: {
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
  ImageBackground_I1220_7169_691_4690_691_4673: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1220_7169_691_4690_691_4660: {
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
  ImageBackground_I1220_7169_691_4690_691_4661: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1220_7170: {
    width: wp("10%"),
    height: hp("33%"),
    top: hp("183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1220_7170_691_4686: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_I1220_7170_691_4686: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1220_7170_691_4685: {
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
  View_1220_7171: {
    width: wp("42%"),
    height: hp("8%"),
    top: hp("150%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1220_7171_982_4565: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1220_7171_982_4566: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1220_7171_982_4566: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1220_7172: {
    width: wp("42%"),
    height: hp("8%"),
    top: hp("150%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1220_7172_982_4565: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1220_7172_982_4566: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1220_7172_982_4566: {
    color: "rgba(247, 247, 252, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1232_7211: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("120%"),
    minHeight: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("119%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1232_7211_1230_7169: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1232_7211_1230_7170: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_I1232_7211_1230_7170: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1232_7211_1230_7171: {
    flexGrow: 1,
    width: wp("76%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("23%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1232_7211_1230_7171_1220_7109: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1232_7211_1230_7171_1220_7111: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1232_7211_1230_7171_1220_7111: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1232_7211_1230_7172: {
    flexGrow: 1,
    width: wp("76%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("34%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1232_7211_1230_7172_1220_7109: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1232_7211_1230_7172_1220_7111: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1232_7211_1230_7172_1220_7111: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1232_7211_1230_7173: {
    flexGrow: 1,
    width: wp("76%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("46%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1232_7211_1230_7173_1220_7109: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1232_7211_1230_7173_1220_7111: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1232_7211_1230_7173_1220_7111: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1232_7211_1230_7174: {
    flexGrow: 1,
    width: wp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("105%"),
    justifyContent: "center"
  },
  Text_I1232_7211_1230_7174: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I1232_7211_1230_7175: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("9%")
  },
  View_I1232_7211_1230_7178: {
    flexGrow: 1,
    width: wp("69%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("93%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1232_7211_1230_7178_1224_7304: {
    flexGrow: 1,
    width: wp("69%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1232_7211_1230_7178_1224_7305: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1232_7211_1230_7178_1224_7305: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1232_7211_1230_7179: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("79%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1232_7211_1230_7179_1224_7601: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1232_7211_1230_7179_1224_7602: {
    width: wp("9%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1232_7211_1230_7179_1224_7603: {
    width: wp("9%"),
    height: hp("7%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1232_7211_1230_7179_1224_7604: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1232_7211_1230_7179_1224_7605: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1232_7211_1230_7179_1224_7607: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1232_7211_1230_7179_1224_7608: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I1232_7211_1230_7179_1224_7608: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1232_7211_1230_7230: {
    flexGrow: 1,
    width: wp("76%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("57%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1232_7211_1230_7230_1230_7217: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1232_7211_1230_7230_1230_7219: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1232_7211_1230_7230_1230_7219: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1232_7211_1230_7230_1230_7222: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("14%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
