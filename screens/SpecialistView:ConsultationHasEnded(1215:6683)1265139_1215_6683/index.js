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
      <View style={styles.View_1215_6684}>
        <View style={styles.View_I1215_6684_199_344}>
          <View style={styles.View_I1215_6684_199_344_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5979/5b08/877131cfaf519bff9199829a08dfeb63"
          }}
          style={styles.ImageBackground_I1215_6684_199_345}
        />
        <View style={styles.View_I1215_6684_199_346}>
          <View style={styles.View_I1215_6684_199_347}>
            <View style={styles.View_I1215_6684_199_349}>
              <Text style={styles.Text_I1215_6684_199_349}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I1215_6684_199_350}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I1215_6684_199_351}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I1215_6684_199_352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/171b/ad41/cca1fc9a4c61a69f2073888e1559d679"
          }}
          style={styles.ImageBackground_I1215_6684_199_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/85c9/7f4f5815b12675432f7bce135fb62d6e"
          }}
          style={styles.ImageBackground_I1215_6684_199_354}
        />
      </View>
      <View style={styles.View_1215_6685}>
        <View style={styles.View_I1215_6685_199_444}>
          <View style={styles.View_I1215_6685_199_445}>
            <View style={styles.View_I1215_6685_199_445_4_227} />
          </View>
        </View>
        <View style={styles.View_I1215_6685_199_446}>
          <View style={styles.View_I1215_6685_199_447}>
            <Text style={styles.Text_I1215_6685_199_447}>My Health</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbcc/2f1e/81abeac8cf8ec8378572a9b6dfbf3974"
            }}
            style={styles.ImageBackground_I1215_6685_199_448}
          />
        </View>
        <View style={styles.View_I1215_6685_199_450}>
          <View style={styles.View_I1215_6685_199_451}>
            <Text style={styles.Text_I1215_6685_199_451}>Specislist Area</Text>
          </View>
          <View style={styles.View_I1215_6685_199_452}>
            <View style={styles.View_I1215_6685_199_453}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/984b/92fa/664da26c3fb9b69746b556885206648d"
                }}
                style={styles.ImageBackground_I1215_6685_199_454}
              />
            </View>
            <View style={styles.View_I1215_6685_199_456}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34b/3fad/fc809c0af8ff375c0c1d3e6770c999b4"
                }}
                style={styles.ImageBackground_I1215_6685_199_457}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I1215_6685_199_459}>
          <View style={styles.View_I1215_6685_199_460}>
            <Text style={styles.Text_I1215_6685_199_460}>Friends Area</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff31/53eb/73d3d7306c8dbccc98301d70467a39f7"
            }}
            style={styles.ImageBackground_I1215_6685_199_461}
          />
        </View>
        <View style={styles.View_I1215_6685_199_463}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6a6/d86f/210c1d275b8c8f0067359d58037f63b0"
            }}
            style={styles.ImageBackground_I1215_6685_199_464}
          />
          <View style={styles.View_I1215_6685_199_465}>
            <View style={styles.View_I1215_6685_199_466}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3155/9060/f25304a55c8d3ee3cadb0523048eb23b"
                }}
                style={styles.ImageBackground_I1215_6685_199_467}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I1215_6685_199_469}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5933/03b8/c08f024b145b53dd98ea067662c58dab"
            }}
            style={styles.ImageBackground_I1215_6685_199_470}
          />
          <View style={styles.View_I1215_6685_199_471}>
            <View style={styles.View_I1215_6685_199_472}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a6/6501/690ec443ee5966d5124104068518bdb1"
                }}
                style={styles.ImageBackground_I1215_6685_199_473}
              />
            </View>
            <View style={styles.View_I1215_6685_199_478}>
              <Text style={styles.Text_I1215_6685_199_478}>Dashboard</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1215_6686}>
        <View style={styles.View_I1215_6686_4_227} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10f2/5f68/483d0002ba0d72c3745a29e0c5686ce8"
        }}
        style={styles.ImageBackground_1232_7256}
      />
      <View style={styles.View_1232_7257}>
        <Text style={styles.Text_1232_7257}>Sarah Kowalski</Text>
      </View>
      <View style={styles.View_1232_7259}>
        <Text style={styles.Text_1232_7259}>
          Appointment at 14:30 Ended at 14:57
        </Text>
      </View>
      <View style={styles.View_1232_7260}>
        <Text style={styles.Text_1232_7260}>27:23:58</Text>
      </View>
      <View style={styles.View_1215_6688}>
        <View style={styles.View_I1215_6688_162_54}>
          <View style={styles.View_I1215_6688_162_56}>
            <Text style={styles.Text_I1215_6688_162_56}>Notes</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4485/ea18/b6a812bd5ad345667b4dcb49a97bde97"
          }}
          style={styles.ImageBackground_I1215_6688_162_59}
        />
      </View>
      <View style={styles.View_1215_6689}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e49c/9dbf/f47d7028dce4a4ec03a7fce187b4e416"
          }}
          style={styles.ImageBackground_I1215_6689_982_4565}
        />
        <View style={styles.View_I1215_6689_982_4566}>
          <Text style={styles.Text_I1215_6689_982_4566}>Message</Text>
        </View>
      </View>
      <View style={styles.View_1215_6690}>
        <View style={styles.View_I1215_6690_691_4686}>
          <Text style={styles.Text_I1215_6690_691_4686}>Symptom List</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc00/c3f0/b6795834bb9d45e585f16f8bf424d91a"
          }}
          style={styles.ImageBackground_I1215_6690_691_4685}
        />
      </View>
      <View style={styles.View_1215_6691}>
        <View style={styles.View_I1215_6691_691_4812}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f67/b8aa/d626e7a32bb09c91f7465c742451ce95"
            }}
            style={styles.ImageBackground_I1215_6691_691_4812_655_4869}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0510/9a20/ccb8c580d4e1693b1158f718e0d3858e"
            }}
            style={styles.ImageBackground_I1215_6691_691_4812_661_4930}
          />
          <View style={styles.View_I1215_6691_691_4812_691_4689}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e0b/d71b/76d12bad540f33a5badeab9855c83d9b"
              }}
              style={
                styles.ImageBackground_I1215_6691_691_4812_691_4689_691_4672
              }
            />
            <View style={styles.View_I1215_6691_691_4812_691_4689_691_4665}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/816b/6c9b/6efaef7ce972454be53af500164a3700"
                }}
                style={
                  styles.ImageBackground_I1215_6691_691_4812_691_4689_691_4666
                }
              />
            </View>
          </View>
          <View style={styles.View_I1215_6691_691_4812_691_4690}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e0b/d71b/76d12bad540f33a5badeab9855c83d9b"
              }}
              style={
                styles.ImageBackground_I1215_6691_691_4812_691_4690_691_4673
              }
            />
            <View style={styles.View_I1215_6691_691_4812_691_4690_691_4660}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da2b/d639/ea43925224dbf212f4b8e53b007367e3"
                }}
                style={
                  styles.ImageBackground_I1215_6691_691_4812_691_4690_691_4661
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I1215_6691_691_4901} />
        <View style={styles.View_I1215_6691_691_4902}>
          <Text style={styles.Text_I1215_6691_691_4902}>
            This consultation has ended!
          </Text>
        </View>
        <View style={styles.View_I1215_6691_691_4903}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b31/a484/0b3d3873bfcc7db7e1e34ebfda9c25f1"
            }}
            style={styles.ImageBackground_I1215_6691_691_4904}
          />
        </View>
        <View style={styles.View_I1215_6691_691_4913}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29a4/4b5d/d84c9f889c884a468b97b2e94000111e"
            }}
            style={styles.ImageBackground_I1215_6691_691_4913_982_4565}
          />
          <View style={styles.View_I1215_6691_691_4913_982_4566}>
            <Text style={styles.Text_I1215_6691_691_4913_982_4566}>
              Back to My Dashboard
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1215_6692}>
        <View style={styles.View_I1215_6692_655_4910} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d38/9ca2/dd5a1f57d1427a42a4334f4429cffc77"
          }}
          style={styles.ImageBackground_I1215_6692_664_4974}
        />
        <View style={styles.View_I1215_6692_671_4651}>
          <Text style={styles.Text_I1215_6692_671_4651}>Prescriptions</Text>
        </View>
        <View style={styles.View_I1215_6692_671_4652}>
          <Text style={styles.Text_I1215_6692_671_4652}>DayQuil</Text>
        </View>
        <View style={styles.View_I1215_6692_671_4653}>
          <Text style={styles.Text_I1215_6692_671_4653}>
            For cold &amp; flu and headache
          </Text>
        </View>
        <View style={styles.View_I1215_6692_671_4654}>
          <Text style={styles.Text_I1215_6692_671_4654}>
            One Liquicap Once a Day
          </Text>
        </View>
        <View style={styles.View_I1215_6692_668_4651}>
          <Text style={styles.Text_I1215_6692_668_4651}>June 29, 2021</Text>
        </View>
        <View style={styles.View_I1215_6692_669_4652}>
          <Text style={styles.Text_I1215_6692_669_4652}>Sarah Kowalski</Text>
        </View>
        <View style={styles.View_I1215_6692_665_4986}>
          <Text style={styles.Text_I1215_6692_665_4986}>
            General Practitioner
          </Text>
        </View>
        <View style={styles.View_I1215_6692_667_4651}>
          <Text style={styles.Text_I1215_6692_667_4651}>Patient Name</Text>
        </View>
        <View style={styles.View_I1215_6692_667_4652}>
          <Text style={styles.Text_I1215_6692_667_4652}>Date</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a6d/8e5c/83b85bde0e8884c3b57e636cea7ec7ae"
          }}
          style={styles.ImageBackground_I1215_6692_671_4655}
        />
        <View style={styles.View_I1215_6692_674_4656}>
          <Text style={styles.Text_I1215_6692_674_4656}>Dr Josh Muronne</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7de1/445b/0083a18e52fbf0ebe686af415be71d0a"
          }}
          style={styles.ImageBackground_I1215_6692_680_4632}
        />
        <View style={styles.View_I1215_6692_689_4632}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/193b/847d/e0bce143915e7d1fb30f99d38e4d150e"
            }}
            style={styles.ImageBackground_I1215_6692_689_4632_687_4666}
          />
          <View style={styles.View_I1215_6692_689_4632_687_4667}>
            <View style={styles.View_I1215_6692_689_4632_687_4668}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/732c/3a5c/f37348f873626cc059cee90e58c7ef7e"
                }}
                style={styles.ImageBackground_I1215_6692_689_4632_687_4669}
              />
            </View>
            <View style={styles.View_I1215_6692_689_4632_687_4671}>
              <Text style={styles.Text_I1215_6692_689_4632_687_4671}>
                Download
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I1215_6692_689_4633}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7f6/5c52/abe1d8b42514d1603f599e8b1de08349"
            }}
            style={styles.ImageBackground_I1215_6692_689_4633_687_4681}
          />
          <View style={styles.View_I1215_6692_689_4633_687_4688}>
            <View style={styles.View_I1215_6692_689_4633_683_4644}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a65/65bd/7410f11af530573482516454f1b69997"
                }}
                style={styles.ImageBackground_I1215_6692_689_4633_683_4645}
              />
            </View>
            <View style={styles.View_I1215_6692_689_4633_683_4650}>
              <Text style={styles.Text_I1215_6692_689_4633_683_4650}>
                Medicine Consultation
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I1215_6692_687_4690}>
          <Text style={styles.Text_I1215_6692_687_4690}>Dosage</Text>
        </View>
        <View style={styles.View_I1215_6692_687_4691}>
          <Text style={styles.Text_I1215_6692_687_4691}>Medicine Name</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("361%") },
  View_1215_6684: {
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
  View_I1215_6684_199_344: {
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
  View_I1215_6684_199_344_4_227: {
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
  ImageBackground_I1215_6684_199_345: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("3%")
  },
  View_I1215_6684_199_346: {
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
  View_I1215_6684_199_347: {
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
  View_I1215_6684_199_349: {
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
  Text_I1215_6684_199_349: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1215_6684_199_350: {
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
  ImageBackground_I1215_6684_199_351: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I1215_6684_199_352: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I1215_6684_199_353: {
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
  ImageBackground_I1215_6684_199_354: {
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
  View_1215_6685: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("341%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1215_6685_199_444: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_I1215_6685_199_445: {
    width: wp("100%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1215_6685_199_445_4_227: {
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
  View_I1215_6685_199_446: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("12%")
  },
  View_I1215_6685_199_447: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I1215_6685_199_447: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1215_6685_199_448: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1215_6685_199_450: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("12%")
  },
  View_I1215_6685_199_451: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I1215_6685_199_451: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1215_6685_199_452: {
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
  View_I1215_6685_199_453: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1215_6685_199_454: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1215_6685_199_456: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I1215_6685_199_457: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1215_6685_199_459: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("12%")
  },
  View_I1215_6685_199_460: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I1215_6685_199_460: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1215_6685_199_461: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1215_6685_199_463: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%")
  },
  ImageBackground_I1215_6685_199_464: {
    width: wp("7%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1215_6685_199_465: {
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
  View_I1215_6685_199_466: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1215_6685_199_467: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1215_6685_199_469: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%")
  },
  ImageBackground_I1215_6685_199_470: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1215_6685_199_471: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I1215_6685_199_472: {
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
  ImageBackground_I1215_6685_199_473: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1215_6685_199_478: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I1215_6685_199_478: {
    color: "rgba(28, 200, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1215_6686: {
    width: wp("93%"),
    height: hp("197%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1215_6686_4_227: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1232_7256: {
    width: wp("8%"),
    height: hp("15%"),
    top: hp("126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    resizeMode: "cover"
  },
  View_1232_7257: {
    width: wp("13%"),
    top: hp("129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "center"
  },
  Text_1232_7257: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1232_7259: {
    width: wp("22%"),
    top: hp("133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "center"
  },
  Text_1232_7259: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1232_7260: {
    width: wp("9%"),
    top: hp("131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    justifyContent: "center"
  },
  Text_1232_7260: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1215_6688: {
    width: wp("86%"),
    height: hp("17%"),
    top: hp("157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1215_6688_162_54: {
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
  View_I1215_6688_162_56: {
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
  Text_I1215_6688_162_56: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1215_6688_162_59: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("14%")
  },
  View_1215_6689: {
    width: wp("86%"),
    height: hp("8%"),
    top: hp("145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1215_6689_982_4565: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1215_6689_982_4566: {
    flexGrow: 1,
    width: wp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1215_6689_982_4566: {
    color: "rgba(247, 247, 252, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1215_6690: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("178%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1215_6690_691_4686: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_I1215_6690_691_4686: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1215_6690_691_4685: {
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
  View_1215_6691: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("96%"),
    minHeight: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1215_6691_691_4812: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1215_6691_691_4812_655_4869: {
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
  ImageBackground_I1215_6691_691_4812_661_4930: {
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
  View_I1215_6691_691_4812_691_4689: {
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
  ImageBackground_I1215_6691_691_4812_691_4689_691_4672: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1215_6691_691_4812_691_4689_691_4665: {
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
  ImageBackground_I1215_6691_691_4812_691_4689_691_4666: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1215_6691_691_4812_691_4690: {
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
  ImageBackground_I1215_6691_691_4812_691_4690_691_4673: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1215_6691_691_4812_691_4690_691_4660: {
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
  ImageBackground_I1215_6691_691_4812_691_4690_691_4661: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1215_6691_691_4901: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(20, 20, 43, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I1215_6691_691_4902: {
    flexGrow: 1,
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("56%"),
    justifyContent: "center"
  },
  Text_I1215_6691_691_4902: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1215_6691_691_4903: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1215_6691_691_4904: {
    width: wp("6%"),
    height: hp("8%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1215_6691_691_4913: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("78%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1215_6691_691_4913_982_4565: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1215_6691_691_4913_982_4566: {
    flexGrow: 1,
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1215_6691_691_4913_982_4566: {
    color: "rgba(247, 247, 252, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1215_6692: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("101%"),
    minHeight: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("230%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1215_6692_655_4910: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1215_6692_664_4974: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%"),
    resizeMode: "cover"
  },
  View_I1215_6692_671_4651: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("41%"),
    justifyContent: "center"
  },
  Text_I1215_6692_671_4651: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1215_6692_671_4652: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("54%"),
    justifyContent: "center"
  },
  Text_I1215_6692_671_4652: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1215_6692_671_4653: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("59%"),
    justifyContent: "center"
  },
  Text_I1215_6692_671_4653: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1215_6692_671_4654: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("57%"),
    justifyContent: "center"
  },
  Text_I1215_6692_671_4654: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1215_6692_668_4651: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("22%"),
    justifyContent: "center"
  },
  Text_I1215_6692_668_4651: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1215_6692_669_4652: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("27%"),
    justifyContent: "center"
  },
  Text_I1215_6692_669_4652: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1215_6692_665_4986: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("88%"),
    justifyContent: "center"
  },
  Text_I1215_6692_665_4986: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1215_6692_667_4651: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("27%"),
    justifyContent: "center"
  },
  Text_I1215_6692_667_4651: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1215_6692_667_4652: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("22%"),
    justifyContent: "center"
  },
  Text_I1215_6692_667_4652: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I1215_6692_671_4655: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("73%"),
    resizeMode: "cover"
  },
  View_I1215_6692_674_4656: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("84%"),
    justifyContent: "center"
  },
  Text_I1215_6692_674_4656: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I1215_6692_680_4632: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("54%")
  },
  View_I1215_6692_689_4632: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1215_6692_689_4632_687_4666: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1215_6692_689_4632_687_4667: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_I1215_6692_689_4632_687_4668: {
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
  ImageBackground_I1215_6692_689_4632_687_4669: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1215_6692_689_4632_687_4671: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I1215_6692_689_4632_687_4671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1215_6692_689_4633: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1215_6692_689_4633_687_4681: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1215_6692_689_4633_687_4688: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_I1215_6692_689_4633_683_4644: {
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
  ImageBackground_I1215_6692_689_4633_683_4645: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1215_6692_689_4633_683_4650: {
    width: wp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I1215_6692_689_4633_683_4650: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1215_6692_687_4690: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("49%"),
    justifyContent: "center"
  },
  Text_I1215_6692_687_4690: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1215_6692_687_4691: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("49%"),
    justifyContent: "center"
  },
  Text_I1215_6692_687_4691: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
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
