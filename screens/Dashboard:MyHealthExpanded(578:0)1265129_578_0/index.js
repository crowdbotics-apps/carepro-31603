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
      <View style={styles.View_578_1}>
        <View style={styles.View_I578_1_199_344}>
          <View style={styles.View_I578_1_199_344_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5979/5b08/877131cfaf519bff9199829a08dfeb63"
          }}
          style={styles.ImageBackground_I578_1_199_345}
        />
        <View style={styles.View_I578_1_199_346}>
          <View style={styles.View_I578_1_199_347}>
            <View style={styles.View_I578_1_199_349}>
              <Text style={styles.Text_I578_1_199_349}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I578_1_199_350}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I578_1_199_351}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I578_1_199_352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/171b/ad41/cca1fc9a4c61a69f2073888e1559d679"
          }}
          style={styles.ImageBackground_I578_1_199_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/85c9/7f4f5815b12675432f7bce135fb62d6e"
          }}
          style={styles.ImageBackground_I578_1_199_354}
        />
      </View>
      <View style={styles.View_578_4}>
        <View style={styles.View_I578_4_199_444}>
          <View style={styles.View_I578_4_199_445}>
            <View style={styles.View_I578_4_199_445_4_227} />
          </View>
        </View>
        <View style={styles.View_I578_4_199_446}>
          <View style={styles.View_I578_4_199_447}>
            <Text style={styles.Text_I578_4_199_447}>My Health</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbcc/2f1e/81abeac8cf8ec8378572a9b6dfbf3974"
            }}
            style={styles.ImageBackground_I578_4_199_448}
          />
        </View>
        <View style={styles.View_I578_4_199_450}>
          <View style={styles.View_I578_4_199_451}>
            <Text style={styles.Text_I578_4_199_451}>Specislist Area</Text>
          </View>
          <View style={styles.View_I578_4_199_452}>
            <View style={styles.View_I578_4_199_453}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/984b/92fa/664da26c3fb9b69746b556885206648d"
                }}
                style={styles.ImageBackground_I578_4_199_454}
              />
            </View>
            <View style={styles.View_I578_4_199_456}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34b/3fad/fc809c0af8ff375c0c1d3e6770c999b4"
                }}
                style={styles.ImageBackground_I578_4_199_457}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I578_4_199_459}>
          <View style={styles.View_I578_4_199_460}>
            <Text style={styles.Text_I578_4_199_460}>Friends Area</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff31/53eb/73d3d7306c8dbccc98301d70467a39f7"
            }}
            style={styles.ImageBackground_I578_4_199_461}
          />
        </View>
        <View style={styles.View_I578_4_199_463}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6a6/d86f/210c1d275b8c8f0067359d58037f63b0"
            }}
            style={styles.ImageBackground_I578_4_199_464}
          />
          <View style={styles.View_I578_4_199_465}>
            <View style={styles.View_I578_4_199_466}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3155/9060/f25304a55c8d3ee3cadb0523048eb23b"
                }}
                style={styles.ImageBackground_I578_4_199_467}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I578_4_199_469}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5933/03b8/c08f024b145b53dd98ea067662c58dab"
            }}
            style={styles.ImageBackground_I578_4_199_470}
          />
          <View style={styles.View_I578_4_199_471}>
            <View style={styles.View_I578_4_199_472}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a6/6501/690ec443ee5966d5124104068518bdb1"
                }}
                style={styles.ImageBackground_I578_4_199_473}
              />
            </View>
            <View style={styles.View_I578_4_199_478}>
              <Text style={styles.Text_I578_4_199_478}>Dashboard</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_606_4377}>
        <View style={styles.View_605_4}>
          <View style={styles.View_I605_4_4_227} />
        </View>
        <View style={styles.View_605_6}>
          <View style={styles.View_I605_6_162_54}>
            <View style={styles.View_I605_6_162_56}>
              <Text style={styles.Text_I605_6_162_56}>
                Unusual symptom experienced
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4485/ea18/b6a812bd5ad345667b4dcb49a97bde97"
            }}
            style={styles.ImageBackground_I605_6_162_59}
          />
        </View>
        <View style={styles.View_606_4376}>
          <View style={styles.View_I606_4376_606_4363} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5647/d966/6f331e7ac0d5214c0ae38fc87abd7d88"
            }}
            style={styles.ImageBackground_I606_4376_606_4364}
          />
          <View style={styles.View_I606_4376_606_4365}>
            <Text style={styles.Text_I606_4376_606_4365}>
              Select Specialist
            </Text>
          </View>
        </View>
        <View style={styles.View_606_4367}>
          <Text style={styles.Text_606_4367}>Symptom Log</Text>
        </View>
        <View style={styles.View_606_4370}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e49c/9dbf/f47d7028dce4a4ec03a7fce187b4e416"
            }}
            style={styles.ImageBackground_I606_4370_982_4565}
          />
          <View style={styles.View_I606_4370_982_4566}>
            <Text style={styles.Text_I606_4370_982_4566}>Send</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_606_4423}>
        <View style={styles.View_606_4385}>
          <View style={styles.View_I606_4385_4_227} />
        </View>
        <View style={styles.View_606_4386}>
          <Text style={styles.Text_606_4386}>Medicine Info</Text>
        </View>
        <View style={styles.View_606_4387}>
          <View style={styles.View_I606_4387_548_43} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1566/4bfd/0cf671a6236506689a86f6d2d2866add"
            }}
            style={styles.ImageBackground_I606_4387_548_44}
          />
          <View style={styles.View_I606_4387_548_45}>
            <Text style={styles.Text_I606_4387_548_45}>Cough Syrup</Text>
          </View>
          <View style={styles.View_I606_4387_548_46}>
            <Text style={styles.Text_I606_4387_548_46}>
              Two Tablespoon Twice a Day
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acbd/3eec/8319f3c134c8db3d1173cbba3949ef2b"
            }}
            style={styles.ImageBackground_I606_4387_574_115}
          />
        </View>
        <View style={styles.View_606_4388}>
          <View style={styles.View_I606_4388_548_43} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2602/2335/5ddf7fc1484ad9fb14ca35458e4f65af"
            }}
            style={styles.ImageBackground_I606_4388_548_44}
          />
          <View style={styles.View_I606_4388_548_45}>
            <Text style={styles.Text_I606_4388_548_45}>Laxofit</Text>
          </View>
          <View style={styles.View_I606_4388_548_46}>
            <Text style={styles.Text_I606_4388_548_46}>
              One Capsule Once a Day
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acbd/3eec/8319f3c134c8db3d1173cbba3949ef2b"
            }}
            style={styles.ImageBackground_I606_4388_574_115}
          />
        </View>
        <View style={styles.View_606_4389}>
          <View style={styles.View_I606_4389_548_35} />
          <View style={styles.View_I606_4389_564_0}>
            <Text style={styles.Text_I606_4389_564_0}>Uses:</Text>
          </View>
          <View style={styles.View_I606_4389_574_0}>
            <Text style={styles.Text_I606_4389_574_0}>Warnings:</Text>
          </View>
          <View style={styles.View_I606_4389_574_2}>
            <Text style={styles.Text_I606_4389_574_2}>Side Effects:</Text>
          </View>
          <View style={styles.View_I606_4389_564_1}>
            <Text style={styles.Text_I606_4389_564_1}>Pain Reliever</Text>
          </View>
          <View style={styles.View_I606_4389_564_2}>
            <Text style={styles.Text_I606_4389_564_2}>Fever Reducer</Text>
          </View>
          <View style={styles.View_I606_4389_564_3}>
            <Text style={styles.Text_I606_4389_564_3}>Cough Suppressant</Text>
          </View>
          <View style={styles.View_I606_4389_566_4260}>
            <Text style={styles.Text_I606_4389_566_4260}>Decongestant</Text>
          </View>
          <View style={styles.View_I606_4389_570_2}>
            <Text style={styles.Text_I606_4389_570_2}>
              May also be used for purposes not listed above
            </Text>
          </View>
          <View style={styles.View_I606_4389_574_3}>
            <Text style={styles.Text_I606_4389_574_3}>
              Stop using DayQuil Cold &amp; Flu and call your doctor at once if
              you have: chest pain, fast, slow, or uneven heart rate; severe
              dizziness, feeling like you might pass out; mood changes,
              confusion, hallucinations, seizure (convulsions); little or no
              urinating; nausea, upper stomach pain, itching, loss of appetite,
              dark urine, clay-colored stools, jaundice (yellowing of the skin
              or eyes); or dangerously high blood pressure (severe headache,
              blurred vision, buzzing in your ears, anxiety, chest pain, uneven
              heartbeats, seizure). Common side effects may include: dizziness,
              weakness, mild headache; diarrhea, upset stomach; dry mouth, nose,
              or throat; feeling nervous, restless, irritable, or anxious; or
              sleep problems (insomnia). This is not a complete list of side
              effects and others may occur. Call your doctor for medical advice
              about side effects.
            </Text>
          </View>
          <View style={styles.View_I606_4389_574_1}>
            <Text style={styles.Text_I606_4389_574_1}>
              Do not use this medicine if you have taken an MAO inhibitor in the
              past 14 days. A dangerous drug interaction could occur. MAO
              inhibitors include isocarboxazid, linezolid, phenelzine,
              rasagiline, selegiline, and tranylcypromine. Do not take more of
              this medication than is recommended. An overdose of acetaminophen
              can damage your liver or cause death. Call your doctor at once if
              you have nausea, pain in your upper stomach, itching, loss of
              appetite, dark urine, clay-colored stools, or jaundice (yellowing
              of your skin or eyes). In rare cases, acetaminophen may cause a
              severe skin reaction. Stop taking this medicine and call your
              doctor right away if you have skin redness or a rash that spreads
              and causes blistering and peeling.
            </Text>
          </View>
          <View style={styles.View_I606_4389_570_0}>
            <Text style={styles.Text_I606_4389_570_0}>
              Treats headache, fever, body aches, cough, stuffy nose, and sinus
              congestion caused by allergies, the common cold, or the flu
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe38/9b9e/3cfb17f477ce8f8b9e694d86b4cc00f0"
            }}
            style={styles.ImageBackground_I606_4389_548_36}
          />
          <View style={styles.View_I606_4389_548_37}>
            <Text style={styles.Text_I606_4389_548_37}>DayQuil</Text>
          </View>
          <View style={styles.View_I606_4389_548_38}>
            <Text style={styles.Text_I606_4389_548_38}>
              One Liquicap Once a Day
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c135/20a0/01481f2ef3e5153b706b33e0254b5c0f"
            }}
            style={styles.ImageBackground_I606_4389_562_3}
          />
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("401%") },
  View_578_1: {
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
  View_I578_1_199_344: {
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
  View_I578_1_199_344_4_227: {
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
  ImageBackground_I578_1_199_345: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("3%")
  },
  View_I578_1_199_346: {
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
  View_I578_1_199_347: {
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
  View_I578_1_199_349: {
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
  Text_I578_1_199_349: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I578_1_199_350: {
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
  ImageBackground_I578_1_199_351: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I578_1_199_352: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I578_1_199_353: {
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
  ImageBackground_I578_1_199_354: {
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
  View_578_4: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("380%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I578_4_199_444: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_I578_4_199_445: {
    width: wp("100%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I578_4_199_445_4_227: {
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
  View_I578_4_199_446: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("12%")
  },
  View_I578_4_199_447: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I578_4_199_447: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I578_4_199_448: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I578_4_199_450: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("12%")
  },
  View_I578_4_199_451: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I578_4_199_451: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I578_4_199_452: {
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
  View_I578_4_199_453: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I578_4_199_454: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I578_4_199_456: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I578_4_199_457: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I578_4_199_459: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("12%")
  },
  View_I578_4_199_460: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I578_4_199_460: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I578_4_199_461: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I578_4_199_463: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%")
  },
  ImageBackground_I578_4_199_464: {
    width: wp("7%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I578_4_199_465: {
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
  View_I578_4_199_466: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I578_4_199_467: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I578_4_199_469: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%")
  },
  ImageBackground_I578_4_199_470: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I578_4_199_471: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I578_4_199_472: {
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
  ImageBackground_I578_4_199_473: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I578_4_199_478: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I578_4_199_478: {
    color: "rgba(28, 200, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_606_4377: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("308%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_605_4: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I605_4_4_227: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_605_6: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("28%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I605_6_162_54: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I605_6_162_56: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I605_6_162_56: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I605_6_162_59: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("14%")
  },
  View_606_4376: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I606_4376_606_4363: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  ImageBackground_I606_4376_606_4364: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("3%")
  },
  View_I606_4376_606_4365: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I606_4376_606_4365: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_606_4367: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_606_4367: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_606_4370: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("48%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I606_4370_982_4565: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I606_4370_982_4566: {
    flexGrow: 1,
    width: wp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I606_4370_982_4566: {
    color: "rgba(247, 247, 252, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_606_4423: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("275%"),
    minHeight: hp("275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_606_4385: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I606_4385_4_227: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_606_4386: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_606_4386: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_606_4387: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("223%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I606_4387_548_43: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I606_4387_548_44: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_I606_4387_548_45: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I606_4387_548_45: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I606_4387_548_46: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_I606_4387_548_46: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I606_4387_574_115: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("9%")
  },
  View_606_4388: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("248%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I606_4388_548_43: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I606_4388_548_44: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_I606_4388_548_45: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I606_4388_548_45: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I606_4388_548_46: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_I606_4388_548_46: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I606_4388_574_115: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("9%")
  },
  View_606_4389: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I606_4389_548_35: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I606_4389_564_0: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("18%"),
    justifyContent: "center"
  },
  Text_I606_4389_564_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I606_4389_574_0: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("59%"),
    justifyContent: "center"
  },
  Text_I606_4389_574_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I606_4389_574_2: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("116%"),
    justifyContent: "center"
  },
  Text_I606_4389_574_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I606_4389_564_1: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("25%"),
    justifyContent: "center"
  },
  Text_I606_4389_564_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I606_4389_564_2: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("29%"),
    justifyContent: "center"
  },
  Text_I606_4389_564_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I606_4389_564_3: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("34%"),
    justifyContent: "center"
  },
  Text_I606_4389_564_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I606_4389_566_4260: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("38%"),
    justifyContent: "center"
  },
  Text_I606_4389_566_4260: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I606_4389_570_2: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("51%"),
    justifyContent: "center"
  },
  Text_I606_4389_570_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I606_4389_574_3: {
    flexGrow: 1,
    width: wp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("122%"),
    justifyContent: "center"
  },
  Text_I606_4389_574_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I606_4389_574_1: {
    flexGrow: 1,
    width: wp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("66%"),
    justifyContent: "center"
  },
  Text_I606_4389_574_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I606_4389_570_0: {
    flexGrow: 1,
    width: wp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("43%"),
    justifyContent: "center"
  },
  Text_I606_4389_570_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I606_4389_548_36: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_I606_4389_548_37: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I606_4389_548_37: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I606_4389_548_38: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_I606_4389_548_38: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I606_4389_562_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("9%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
