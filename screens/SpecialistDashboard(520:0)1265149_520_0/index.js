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
      <View style={styles.View_520_1}>
        <View style={styles.View_I520_1_199_344}>
          <View style={styles.View_I520_1_199_344_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5979/5b08/877131cfaf519bff9199829a08dfeb63"
          }}
          style={styles.ImageBackground_I520_1_199_345}
        />
        <View style={styles.View_I520_1_199_346}>
          <View style={styles.View_I520_1_199_347}>
            <View style={styles.View_I520_1_199_349}>
              <Text style={styles.Text_I520_1_199_349}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I520_1_199_350}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I520_1_199_351}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I520_1_199_352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/171b/ad41/cca1fc9a4c61a69f2073888e1559d679"
          }}
          style={styles.ImageBackground_I520_1_199_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/85c9/7f4f5815b12675432f7bce135fb62d6e"
          }}
          style={styles.ImageBackground_I520_1_199_354}
        />
      </View>
      <View style={styles.View_707_4865}>
        <View style={styles.View_I707_4865_4_227} />
      </View>
      <View style={styles.View_707_4866}>
        <Text style={styles.Text_707_4866}>Upcoming appointments</Text>
      </View>
      <View style={styles.View_755_4828}>
        <View style={styles.View_I755_4828_4_227} />
      </View>
      <View style={styles.View_755_4829}>
        <Text style={styles.Text_755_4829}>Patients</Text>
      </View>
      <View style={styles.View_520_5}>
        <View style={styles.View_I520_5_199_444}>
          <View style={styles.View_I520_5_199_445}>
            <View style={styles.View_I520_5_199_445_4_227} />
          </View>
        </View>
        <View style={styles.View_I520_5_199_446}>
          <View style={styles.View_I520_5_199_447}>
            <Text style={styles.Text_I520_5_199_447}>My Health</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbcc/2f1e/81abeac8cf8ec8378572a9b6dfbf3974"
            }}
            style={styles.ImageBackground_I520_5_199_448}
          />
        </View>
        <View style={styles.View_I520_5_199_450}>
          <View style={styles.View_I520_5_199_451}>
            <Text style={styles.Text_I520_5_199_451}>Specislist Area</Text>
          </View>
          <View style={styles.View_I520_5_199_452}>
            <View style={styles.View_I520_5_199_453}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/984b/92fa/664da26c3fb9b69746b556885206648d"
                }}
                style={styles.ImageBackground_I520_5_199_454}
              />
            </View>
            <View style={styles.View_I520_5_199_456}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34b/3fad/fc809c0af8ff375c0c1d3e6770c999b4"
                }}
                style={styles.ImageBackground_I520_5_199_457}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I520_5_199_459}>
          <View style={styles.View_I520_5_199_460}>
            <Text style={styles.Text_I520_5_199_460}>Friends Area</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff31/53eb/73d3d7306c8dbccc98301d70467a39f7"
            }}
            style={styles.ImageBackground_I520_5_199_461}
          />
        </View>
        <View style={styles.View_I520_5_199_463}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6a6/d86f/210c1d275b8c8f0067359d58037f63b0"
            }}
            style={styles.ImageBackground_I520_5_199_464}
          />
          <View style={styles.View_I520_5_199_465}>
            <View style={styles.View_I520_5_199_466}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3155/9060/f25304a55c8d3ee3cadb0523048eb23b"
                }}
                style={styles.ImageBackground_I520_5_199_467}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I520_5_199_469}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5933/03b8/c08f024b145b53dd98ea067662c58dab"
            }}
            style={styles.ImageBackground_I520_5_199_470}
          />
          <View style={styles.View_I520_5_199_471}>
            <View style={styles.View_I520_5_199_472}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a6/6501/690ec443ee5966d5124104068518bdb1"
                }}
                style={styles.ImageBackground_I520_5_199_473}
              />
            </View>
            <View style={styles.View_I520_5_199_478}>
              <Text style={styles.Text_I520_5_199_478}>Dashboard</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_520_7}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/091d/8da7/4efd9608aff2bd72591117a20960c217"
          }}
          style={styles.ImageBackground_I520_7_199_493}
        />
        <View style={styles.View_I520_7_199_494}>
          <Text style={styles.Text_I520_7_199_494}>Hi Josh!</Text>
        </View>
      </View>
      <View style={styles.View_726_4857}>
        <View style={styles.View_726_4828} />
        <View style={styles.View_726_4851}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10f2/5f68/483d0002ba0d72c3745a29e0c5686ce8"
            }}
            style={styles.ImageBackground_I726_4851_726_4829}
          />
        </View>
        <View style={styles.View_726_4852}>
          <View style={styles.View_I726_4852_726_4830}>
            <Text style={styles.Text_I726_4852_726_4830}>Sarah Kowalski</Text>
          </View>
        </View>
        <View style={styles.View_726_4853}>
          <View style={styles.View_I726_4853_726_4831}>
            <Text style={styles.Text_I726_4853_726_4831}>
              Monday, 26th of April 2021
            </Text>
          </View>
        </View>
        <View style={styles.View_726_4854}>
          <View style={styles.View_I726_4854_726_4833}>
            <Text style={styles.Text_I726_4854_726_4833}>
              7 days 8 Hours 43 Minutes
            </Text>
          </View>
          <View style={styles.View_I726_4854_726_4834}>
            <Text style={styles.Text_I726_4854_726_4834}>left</Text>
          </View>
        </View>
        <View style={styles.View_726_4855}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/464d/f958/03133056a6bbe994722b7fba27e0ce4a"
            }}
            style={styles.ImageBackground_I726_4855_726_4836}
          />
        </View>
        <View style={styles.View_726_4845}>
          <View style={styles.View_726_4839}>
            <View style={styles.View_I726_4839_707_5366}>
              <Text style={styles.Text_I726_4839_707_5366}>Video Call</Text>
            </View>
            <View style={styles.View_I726_4839_707_5367}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6a6/494f/d50b514e12b1429c5e1c2f6d32c30252"
                }}
                style={styles.ImageBackground_I726_4839_707_5368}
              />
            </View>
          </View>
          <View style={styles.View_726_4856}>
            <View style={styles.View_I726_4856_726_4840}>
              <Text style={styles.Text_I726_4856_726_4840}>
                30 Minutes Consultation
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_726_4952}>
        <View style={styles.View_726_4898} />
        <View style={styles.View_726_4942}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faa1/21c0/bb91a1d4841b76c11786f5ba24adfbbe"
            }}
            style={styles.ImageBackground_I726_4942_726_4899}
          />
        </View>
        <View style={styles.View_726_4943}>
          <View style={styles.View_I726_4943_726_4900}>
            <Text style={styles.Text_I726_4943_726_4900}>Wolf Zeeva</Text>
          </View>
        </View>
        <View style={styles.View_726_4944}>
          <View style={styles.View_I726_4944_726_4901}>
            <Text style={styles.Text_I726_4944_726_4901}>
              Monday, 26th of April 2021
            </Text>
          </View>
        </View>
        <View style={styles.View_726_4945}>
          <View style={styles.View_I726_4945_726_4903}>
            <Text style={styles.Text_I726_4945_726_4903}>
              23 Hours 59 Minutes
            </Text>
          </View>
          <View style={styles.View_I726_4945_726_4904}>
            <Text style={styles.Text_I726_4945_726_4904}>left</Text>
          </View>
        </View>
        <View style={styles.View_726_4946}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cd9/96e2/134ed6569d7c2fded6866458ac9663d4"
            }}
            style={styles.ImageBackground_I726_4946_726_4906}
          />
        </View>
        <View style={styles.View_726_4947}>
          <View style={styles.View_I726_4947_726_4909}>
            <View style={styles.View_I726_4947_726_4909_707_5371}>
              <Text style={styles.Text_I726_4947_726_4909_707_5371}>
                Text Messaging
              </Text>
            </View>
            <View style={styles.View_I726_4947_726_4909_707_5372}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3447/23a0/0b0f4af9b8348048afded97925707aec"
                }}
                style={styles.ImageBackground_I726_4947_726_4909_707_5373}
              />
            </View>
          </View>
          <View style={styles.View_I726_4947_726_4935}>
            <View style={styles.View_I726_4947_726_4935_713_4865}>
              <Text style={styles.Text_I726_4947_726_4935_713_4865}>
                5 Minutes Free Consultation
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_726_4948}>
          <View style={styles.View_I726_4948_726_4912}>
            <Text style={styles.Text_I726_4948_726_4912}>29 years old</Text>
          </View>
          <View style={styles.View_I726_4948_726_4913}>
            <Text style={styles.Text_I726_4948_726_4913}>Age</Text>
          </View>
        </View>
        <View style={styles.View_726_4949}>
          <View style={styles.View_I726_4949_726_4914}>
            <Text style={styles.Text_I726_4949_726_4914}>
              Seasonal Allergies, Irritable Bowel Syndrome (IBS)
            </Text>
          </View>
          <View style={styles.View_I726_4949_726_4915}>
            <Text style={styles.Text_I726_4949_726_4915}>
              Existing Health Issues
            </Text>
          </View>
        </View>
        <View style={styles.View_726_4950}>
          <View style={styles.View_I726_4950_726_4916}>
            <Text style={styles.Text_I726_4950_726_4916}>Allegra Adult</Text>
          </View>
          <View style={styles.View_I726_4950_726_4917}>
            <Text style={styles.Text_I726_4950_726_4917}>
              Current Medication
            </Text>
          </View>
        </View>
        <View style={styles.View_726_4951}>
          <View style={styles.View_I726_4951_726_4911}>
            <Text style={styles.Text_I726_4951_726_4911}>
              Hi, I’ve been having a headache that comes and goes every 3 hours
              since last week. I’ve been taking paracetamol but it doesn’t seem
              to be going away for long.
            </Text>
          </View>
          <View style={styles.View_I726_4951_726_4918}>
            <Text style={styles.Text_I726_4951_726_4918}>Introduction</Text>
          </View>
        </View>
        <View style={styles.View_726_4919}>
          <View style={styles.View_I726_4919_721_4889} />
          <View style={styles.View_I726_4919_721_4890}>
            <Text style={styles.Text_I726_4919_721_4890}>
              Request Immediate Consultation
            </Text>
          </View>
        </View>
        <View style={styles.View_726_4920}>
          <View style={styles.View_I726_4920_721_4891} />
          <View style={styles.View_I726_4920_721_4892}>
            <Text style={styles.Text_I726_4920_721_4892}>
              Cancel Appointment
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_731_4874} />
      <View style={styles.View_731_4875}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faa1/21c0/bb91a1d4841b76c11786f5ba24adfbbe"
          }}
          style={styles.ImageBackground_I731_4875_726_4899}
        />
      </View>
      <View style={styles.View_731_4876}>
        <View style={styles.View_I731_4876_726_4900}>
          <Text style={styles.Text_I731_4876_726_4900}>Alex Hamilton</Text>
        </View>
      </View>
      <View style={styles.View_731_4881}>
        <View style={styles.View_I731_4881_726_4912}>
          <Text style={styles.Text_I731_4881_726_4912}>21 years old</Text>
        </View>
        <View style={styles.View_I731_4881_726_4913}>
          <Text style={styles.Text_I731_4881_726_4913}>Age</Text>
        </View>
      </View>
      <View style={styles.View_731_4882}>
        <View style={styles.View_I731_4882_726_4914}>
          <Text style={styles.Text_I731_4882_726_4914}>
            Respiratory Inflammation
          </Text>
        </View>
        <View style={styles.View_I731_4882_726_4915}>
          <Text style={styles.Text_I731_4882_726_4915}>
            Existing Health Issues
          </Text>
        </View>
      </View>
      <View style={styles.View_731_4883}>
        <View style={styles.View_I731_4883_726_4916}>
          <Text style={styles.Text_I731_4883_726_4916}>Nasal Spray</Text>
        </View>
        <View style={styles.View_I731_4883_726_4917}>
          <Text style={styles.Text_I731_4883_726_4917}>Current Medication</Text>
        </View>
      </View>
      <View style={styles.View_742_4830}>
        <View style={styles.View_734_4959} />
        <View style={styles.View_731_4884}>
          <View style={styles.View_I731_4884_726_4911}>
            <Text style={styles.Text_I731_4884_726_4911}>
              After taking the DayQuil for 2 days, I’ve noticed a slight pain in
              my chest and my energy level has gone down. Is that normal?
            </Text>
          </View>
          <View style={styles.View_I731_4884_726_4918}>
            <Text style={styles.Text_I731_4884_726_4918}>Update</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_745_4828} />
      <View style={styles.View_745_4829}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faa1/21c0/bb91a1d4841b76c11786f5ba24adfbbe"
          }}
          style={styles.ImageBackground_I745_4829_726_4899}
        />
      </View>
      <View style={styles.View_745_4830}>
        <View style={styles.View_I745_4830_726_4900}>
          <Text style={styles.Text_I745_4830_726_4900}>Lewis Holfman</Text>
        </View>
      </View>
      <View style={styles.View_745_4831}>
        <View style={styles.View_I745_4831_726_4912}>
          <Text style={styles.Text_I745_4831_726_4912}>19 years old</Text>
        </View>
        <View style={styles.View_I745_4831_726_4913}>
          <Text style={styles.Text_I745_4831_726_4913}>Age</Text>
        </View>
      </View>
      <View style={styles.View_745_4832}>
        <View style={styles.View_I745_4832_726_4914}>
          <Text style={styles.Text_I745_4832_726_4914}>
            Irritable Bowel Syndrome (IBS)
          </Text>
        </View>
        <View style={styles.View_I745_4832_726_4915}>
          <Text style={styles.Text_I745_4832_726_4915}>
            Existing Health Issues
          </Text>
        </View>
      </View>
      <View style={styles.View_745_4833}>
        <View style={styles.View_I745_4833_726_4916}>
          <Text style={styles.Text_I745_4833_726_4916}>-</Text>
        </View>
        <View style={styles.View_I745_4833_726_4917}>
          <Text style={styles.Text_I745_4833_726_4917}>Current Medication</Text>
        </View>
      </View>
      <View style={styles.View_746_4859}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3051/d662/be4702306a273fc640e7765c4681b344"
          }}
          style={styles.ImageBackground_746_4858}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d18e/123a/581f7126935559c5957970f0f2d3ef2b"
          }}
          style={styles.ImageBackground_746_4855}
        />
      </View>
      <View style={styles.View_746_4860}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3051/d662/be4702306a273fc640e7765c4681b344"
          }}
          style={styles.ImageBackground_I746_4860_746_4858}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d18e/123a/581f7126935559c5957970f0f2d3ef2b"
          }}
          style={styles.ImageBackground_I746_4860_746_4855}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("335%") },
  View_520_1: {
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
  View_I520_1_199_344: {
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
  View_I520_1_199_344_4_227: {
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
  ImageBackground_I520_1_199_345: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("3%")
  },
  View_I520_1_199_346: {
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
  View_I520_1_199_347: {
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
  View_I520_1_199_349: {
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
  Text_I520_1_199_349: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I520_1_199_350: {
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
  ImageBackground_I520_1_199_351: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I520_1_199_352: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I520_1_199_353: {
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
  ImageBackground_I520_1_199_354: {
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
  View_707_4865: {
    width: wp("93%"),
    height: hp("131%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I707_4865_4_227: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_707_4866: {
    width: wp("23%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    justifyContent: "center"
  },
  Text_707_4866: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_755_4828: {
    width: wp("93%"),
    height: hp("118%"),
    top: hp("182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I755_4828_4_227: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_755_4829: {
    width: wp("7%"),
    top: hp("188%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    justifyContent: "center"
  },
  Text_755_4829: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_520_5: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("314%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I520_5_199_444: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_I520_5_199_445: {
    width: wp("100%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I520_5_199_445_4_227: {
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
  View_I520_5_199_446: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("12%")
  },
  View_I520_5_199_447: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I520_5_199_447: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I520_5_199_448: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I520_5_199_450: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("12%")
  },
  View_I520_5_199_451: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I520_5_199_451: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I520_5_199_452: {
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
  View_I520_5_199_453: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I520_5_199_454: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I520_5_199_456: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I520_5_199_457: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I520_5_199_459: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("12%")
  },
  View_I520_5_199_460: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I520_5_199_460: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I520_5_199_461: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I520_5_199_463: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%")
  },
  ImageBackground_I520_5_199_464: {
    width: wp("7%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I520_5_199_465: {
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
  View_I520_5_199_466: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I520_5_199_467: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I520_5_199_469: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%")
  },
  ImageBackground_I520_5_199_470: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I520_5_199_471: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I520_5_199_472: {
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
  ImageBackground_I520_5_199_473: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I520_5_199_478: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I520_5_199_478: {
    color: "rgba(28, 200, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_520_7: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I520_7_199_493: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I520_7_199_494: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I520_7_199_494: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_726_4857: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("139%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_726_4828: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_726_4851: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I726_4851_726_4829: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_726_4852: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I726_4852_726_4830: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I726_4852_726_4830: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_726_4853: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I726_4853_726_4831: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I726_4853_726_4831: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_726_4854: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I726_4854_726_4833: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I726_4854_726_4833: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I726_4854_726_4834: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I726_4854_726_4834: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_726_4855: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I726_4855_726_4836: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_726_4845: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_726_4839: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I726_4839_707_5366: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I726_4839_707_5366: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I726_4839_707_5367: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I726_4839_707_5368: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_726_4856: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I726_4856_726_4840: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I726_4856_726_4840: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_726_4952: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_726_4898: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_726_4942: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I726_4942_726_4899: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_726_4943: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I726_4943_726_4900: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I726_4943_726_4900: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_726_4944: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I726_4944_726_4901: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I726_4944_726_4901: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_726_4945: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I726_4945_726_4903: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I726_4945_726_4903: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I726_4945_726_4904: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I726_4945_726_4904: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_726_4946: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I726_4946_726_4906: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_726_4947: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I726_4947_726_4909: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I726_4947_726_4909_707_5371: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I726_4947_726_4909_707_5371: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I726_4947_726_4909_707_5372: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I726_4947_726_4909_707_5373: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I726_4947_726_4935: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I726_4947_726_4935_713_4865: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I726_4947_726_4935_713_4865: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_726_4948: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I726_4948_726_4912: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I726_4948_726_4912: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I726_4948_726_4913: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I726_4948_726_4913: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_726_4949: {
    flexGrow: 1,
    width: wp("46%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I726_4949_726_4914: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I726_4949_726_4914: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I726_4949_726_4915: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I726_4949_726_4915: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_726_4950: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I726_4950_726_4916: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I726_4950_726_4916: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I726_4950_726_4917: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I726_4950_726_4917: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_726_4951: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("46%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I726_4951_726_4911: {
    flexGrow: 1,
    width: wp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I726_4951_726_4911: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I726_4951_726_4918: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I726_4951_726_4918: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_726_4919: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("63%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I726_4919_721_4889: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I726_4919_721_4890: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I726_4919_721_4890: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_726_4920: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("63%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I726_4920_721_4891: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I726_4920_721_4892: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I726_4920_721_4892: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_731_4874: {
    width: wp("86%"),
    height: hp("58%"),
    top: hp("199%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_731_4875: {
    width: wp("8%"),
    height: hp("15%"),
    top: hp("207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I731_4875_726_4899: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_731_4876: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I731_4876_726_4900: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I731_4876_726_4900: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_731_4881: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("211%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I731_4881_726_4912: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I731_4881_726_4912: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I731_4881_726_4913: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I731_4881_726_4913: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_731_4882: {
    width: wp("46%"),
    height: hp("4%"),
    top: hp("216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I731_4882_726_4914: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I731_4882_726_4914: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I731_4882_726_4915: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I731_4882_726_4915: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_731_4883: {
    width: wp("20%"),
    height: hp("4%"),
    top: hp("221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I731_4883_726_4916: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I731_4883_726_4916: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I731_4883_726_4917: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I731_4883_726_4917: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_742_4830: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("229%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_734_4959: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 247, 252, 1)"
  },
  View_731_4884: {
    flexGrow: 1,
    width: wp("66%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I731_4884_726_4911: {
    flexGrow: 1,
    width: wp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I731_4884_726_4911: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I731_4884_726_4918: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I731_4884_726_4918: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_745_4828: {
    width: wp("86%"),
    height: hp("32%"),
    top: hp("261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_745_4829: {
    width: wp("8%"),
    height: hp("15%"),
    top: hp("269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I745_4829_726_4899: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_745_4830: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I745_4830_726_4900: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I745_4830_726_4900: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_745_4831: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I745_4831_726_4912: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I745_4831_726_4912: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I745_4831_726_4913: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I745_4831_726_4913: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_745_4832: {
    width: wp("46%"),
    height: hp("4%"),
    top: hp("278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I745_4832_726_4914: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I745_4832_726_4914: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I745_4832_726_4915: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I745_4832_726_4915: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_745_4833: {
    width: wp("20%"),
    height: hp("4%"),
    top: hp("283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I745_4833_726_4916: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I745_4833_726_4916: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I745_4833_726_4917: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I745_4833_726_4917: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_746_4859: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("270%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_746_4858: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_746_4855: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  View_746_4860: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("208%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I746_4860_746_4858: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I746_4860_746_4855: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
