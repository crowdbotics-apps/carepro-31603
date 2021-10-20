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
      <View style={styles.View_609_2}>
        <View style={styles.View_I609_2_199_344}>
          <View style={styles.View_I609_2_199_344_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5979/5b08/877131cfaf519bff9199829a08dfeb63"
          }}
          style={styles.ImageBackground_I609_2_199_345}
        />
        <View style={styles.View_I609_2_199_346}>
          <View style={styles.View_I609_2_199_347}>
            <View style={styles.View_I609_2_199_349}>
              <Text style={styles.Text_I609_2_199_349}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I609_2_199_350}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I609_2_199_351}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I609_2_199_352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/171b/ad41/cca1fc9a4c61a69f2073888e1559d679"
          }}
          style={styles.ImageBackground_I609_2_199_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/85c9/7f4f5815b12675432f7bce135fb62d6e"
          }}
          style={styles.ImageBackground_I609_2_199_354}
        />
      </View>
      <View style={styles.View_609_3}>
        <View style={styles.View_I609_3_199_444}>
          <View style={styles.View_I609_3_199_445}>
            <View style={styles.View_I609_3_199_445_4_227} />
          </View>
        </View>
        <View style={styles.View_I609_3_199_446}>
          <View style={styles.View_I609_3_199_447}>
            <Text style={styles.Text_I609_3_199_447}>My Health</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbcc/2f1e/81abeac8cf8ec8378572a9b6dfbf3974"
            }}
            style={styles.ImageBackground_I609_3_199_448}
          />
        </View>
        <View style={styles.View_I609_3_199_450}>
          <View style={styles.View_I609_3_199_451}>
            <Text style={styles.Text_I609_3_199_451}>Specislist Area</Text>
          </View>
          <View style={styles.View_I609_3_199_452}>
            <View style={styles.View_I609_3_199_453}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/984b/92fa/664da26c3fb9b69746b556885206648d"
                }}
                style={styles.ImageBackground_I609_3_199_454}
              />
            </View>
            <View style={styles.View_I609_3_199_456}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34b/3fad/fc809c0af8ff375c0c1d3e6770c999b4"
                }}
                style={styles.ImageBackground_I609_3_199_457}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I609_3_199_459}>
          <View style={styles.View_I609_3_199_460}>
            <Text style={styles.Text_I609_3_199_460}>Friends Area</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff31/53eb/73d3d7306c8dbccc98301d70467a39f7"
            }}
            style={styles.ImageBackground_I609_3_199_461}
          />
        </View>
        <View style={styles.View_I609_3_199_463}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6a6/d86f/210c1d275b8c8f0067359d58037f63b0"
            }}
            style={styles.ImageBackground_I609_3_199_464}
          />
          <View style={styles.View_I609_3_199_465}>
            <View style={styles.View_I609_3_199_466}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3155/9060/f25304a55c8d3ee3cadb0523048eb23b"
                }}
                style={styles.ImageBackground_I609_3_199_467}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I609_3_199_469}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5933/03b8/c08f024b145b53dd98ea067662c58dab"
            }}
            style={styles.ImageBackground_I609_3_199_470}
          />
          <View style={styles.View_I609_3_199_471}>
            <View style={styles.View_I609_3_199_472}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a6/6501/690ec443ee5966d5124104068518bdb1"
                }}
                style={styles.ImageBackground_I609_3_199_473}
              />
            </View>
            <View style={styles.View_I609_3_199_478}>
              <Text style={styles.Text_I609_3_199_478}>Dashboard</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_612_0}>
        <View style={styles.View_609_136}>
          <View style={styles.View_I609_136_4_227} />
        </View>
        <View style={styles.View_609_137}>
          <Text style={styles.Text_609_137}>Upcoming Appointments</Text>
        </View>
        <View style={styles.View_609_138} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8a0/a050/45d0895230e82d082a43741278389838"
          }}
          style={styles.ImageBackground_609_139}
        />
        <View style={styles.View_609_140}>
          <Text style={styles.Text_609_140}>Dr Josh Muronne</Text>
        </View>
        <View style={styles.View_609_141}>
          <Text style={styles.Text_609_141}>General Practitioner</Text>
        </View>
        <View style={styles.View_609_142}>
          <Text style={styles.Text_609_142}>Monday, 26th of April 2021</Text>
        </View>
        <View style={styles.View_609_143}>
          <View style={styles.View_609_144}>
            <Text style={styles.Text_609_144}>2 Hours 41 Minutes</Text>
          </View>
          <View style={styles.View_609_145}>
            <Text style={styles.Text_609_145}>left</Text>
          </View>
        </View>
        <View style={styles.View_609_146} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff36/8fca/4c287fa62554c36dcd684f0addc025b4"
          }}
          style={styles.ImageBackground_609_147}
        />
        <View style={styles.View_609_148}>
          <Text style={styles.Text_609_148}>Dr Sandra Geir</Text>
        </View>
        <View style={styles.View_609_149}>
          <Text style={styles.Text_609_149}>Psychologist &amp; Therapist</Text>
        </View>
        <View style={styles.View_609_150}>
          <Text style={styles.Text_609_150}>Wednesday, 28th of April 2021</Text>
        </View>
        <View style={styles.View_609_151}>
          <View style={styles.View_609_152}>
            <Text style={styles.Text_609_152}>2 Days 2 Hours 41 Minutes</Text>
          </View>
          <View style={styles.View_609_153}>
            <Text style={styles.Text_609_153}>left</Text>
          </View>
        </View>
        <View style={styles.View_610_3}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fcf/d65a/a7f42c34b24324efc06031d780bf17bd"
            }}
            style={styles.ImageBackground_I610_3_982_5465}
          />
        </View>
        <View style={styles.View_610_12}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fcf/d65a/a7f42c34b24324efc06031d780bf17bd"
            }}
            style={styles.ImageBackground_I610_12_982_5465}
          />
        </View>
      </View>
      <View style={styles.View_641_4486}>
        <View style={styles.View_627_29}>
          <View style={styles.View_I627_29_4_227} />
        </View>
        <View style={styles.View_627_30}>
          <Text style={styles.Text_627_30}>My Specialists</Text>
        </View>
        <View style={styles.View_627_31} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/821b/9ef8/d439524ca5436f04b64023b0a5d99486"
          }}
          style={styles.ImageBackground_627_32}
        />
        <View style={styles.View_627_33}>
          <Text style={styles.Text_627_33}>Dr Gabriel Bruce</Text>
        </View>
        <View style={styles.View_627_34}>
          <Text style={styles.Text_627_34}>General Practitioner</Text>
        </View>
        <View style={styles.View_627_35}>
          <Text style={styles.Text_627_35}>
            Ended on Monday, 19th of April 2021
          </Text>
        </View>
        <View style={styles.View_627_39} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff36/8fca/4c287fa62554c36dcd684f0addc025b4"
          }}
          style={styles.ImageBackground_627_40}
        />
        <View style={styles.View_627_41}>
          <Text style={styles.Text_627_41}>Dr Sandra Geir</Text>
        </View>
        <View style={styles.View_627_42}>
          <Text style={styles.Text_627_42}>Psychologist &amp; Therapist</Text>
        </View>
        <View style={styles.View_627_43}>
          <Text style={styles.Text_627_43}>
            Ended on Wednesday, 21th of April 2021
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/beeb/5c50/f915f2a5be008b923038c12affb19c21"
          }}
          style={styles.ImageBackground_627_87}
        />
        <View style={styles.View_627_101}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bec/4693/5dab2187358a965db4413f5706a47beb"
            }}
            style={styles.ImageBackground_627_98}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b3e/4ab9/73140d426c606d6aadfdb951db8bc821"
            }}
            style={styles.ImageBackground_627_99}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/beeb/5c50/f915f2a5be008b923038c12affb19c21"
          }}
          style={styles.ImageBackground_627_102}
        />
        <View style={styles.View_627_108}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bec/4693/5dab2187358a965db4413f5706a47beb"
            }}
            style={styles.ImageBackground_627_109}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b3e/4ab9/73140d426c606d6aadfdb951db8bc821"
            }}
            style={styles.ImageBackground_627_110}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("202%") },
  View_609_2: {
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
  View_I609_2_199_344: {
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
  View_I609_2_199_344_4_227: {
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
  ImageBackground_I609_2_199_345: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("3%")
  },
  View_I609_2_199_346: {
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
  View_I609_2_199_347: {
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
  View_I609_2_199_349: {
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
  Text_I609_2_199_349: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I609_2_199_350: {
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
  ImageBackground_I609_2_199_351: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I609_2_199_352: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I609_2_199_353: {
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
  ImageBackground_I609_2_199_354: {
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
  View_609_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("181%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I609_3_199_444: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_I609_3_199_445: {
    width: wp("100%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I609_3_199_445_4_227: {
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
  View_I609_3_199_446: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("12%")
  },
  View_I609_3_199_447: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I609_3_199_447: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I609_3_199_448: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I609_3_199_450: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("12%")
  },
  View_I609_3_199_451: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I609_3_199_451: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I609_3_199_452: {
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
  View_I609_3_199_453: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I609_3_199_454: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I609_3_199_456: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I609_3_199_457: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I609_3_199_459: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("12%")
  },
  View_I609_3_199_460: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I609_3_199_460: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I609_3_199_461: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I609_3_199_463: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%")
  },
  ImageBackground_I609_3_199_464: {
    width: wp("7%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I609_3_199_465: {
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
  View_I609_3_199_466: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I609_3_199_467: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I609_3_199_469: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%")
  },
  ImageBackground_I609_3_199_470: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I609_3_199_471: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I609_3_199_472: {
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
  ImageBackground_I609_3_199_473: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I609_3_199_478: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I609_3_199_478: {
    color: "rgba(28, 200, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_612_0: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_609_136: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I609_136_4_227: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_609_137: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_609_137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_609_138: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_609_139: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("21%"),
    resizeMode: "cover"
  },
  View_609_140: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("23%"),
    justifyContent: "center"
  },
  Text_609_140: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_609_141: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("27%"),
    justifyContent: "center"
  },
  Text_609_141: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_609_142: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("31%"),
    justifyContent: "center"
  },
  Text_609_142: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_609_143: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("27%")
  },
  View_609_144: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_609_144: {
    color: "rgba(237, 46, 126, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_609_145: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    justifyContent: "center"
  },
  Text_609_145: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_609_146: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("42%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_609_147: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  View_609_148: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("48%"),
    justifyContent: "center"
  },
  Text_609_148: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_609_149: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("52%"),
    justifyContent: "center"
  },
  Text_609_149: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_609_150: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("56%"),
    justifyContent: "center"
  },
  Text_609_150: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_609_151: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("51%")
  },
  View_609_152: {
    width: wp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_609_152: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_609_153: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "center"
  },
  Text_609_153: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_610_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I610_3_982_5465: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_610_12: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I610_12_982_5465: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_641_4486: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("102%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_627_29: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I627_29_4_227: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_627_30: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_627_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_627_31: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_627_32: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("21%"),
    resizeMode: "cover"
  },
  View_627_33: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("23%"),
    justifyContent: "center"
  },
  Text_627_33: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_627_34: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("27%"),
    justifyContent: "center"
  },
  Text_627_34: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_627_35: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("31%"),
    justifyContent: "center"
  },
  Text_627_35: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_627_39: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("42%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_627_40: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  View_627_41: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("48%"),
    justifyContent: "center"
  },
  Text_627_41: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_627_42: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("52%"),
    justifyContent: "center"
  },
  Text_627_42: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_627_43: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("56%"),
    justifyContent: "center"
  },
  Text_627_43: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_627_87: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("24%")
  },
  View_627_101: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("23%")
  },
  ImageBackground_627_98: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_627_99: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_627_102: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("49%")
  },
  View_627_108: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("47%")
  },
  ImageBackground_627_109: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_627_110: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
