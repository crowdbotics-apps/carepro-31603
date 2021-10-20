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
      <View style={styles.View_521_2}>
        <View style={styles.View_I521_2_261_1}>
          <View style={styles.View_I521_2_261_1_4_227} />
        </View>
        <View style={styles.View_I521_2_261_0}>
          <View style={styles.View_I521_2_248_4}>
            <Text style={styles.Text_I521_2_248_4}>Filter</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1450/3248/79bc9b7e047ca44a6dc8abe9a178ed03"
            }}
            style={styles.ImageBackground_I521_2_254_0}
          />
        </View>
        <View style={styles.View_I521_2_320_8}>
          <View style={styles.View_I521_2_320_8_263_54} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5238/1d56/d8c93f05c5bfb93d65d57e1fc6879df0"
            }}
            style={styles.ImageBackground_I521_2_320_8_263_55}
          />
          <View style={styles.View_I521_2_320_8_263_56}>
            <Text style={styles.Text_I521_2_320_8_263_56}>Availability</Text>
          </View>
        </View>
        <View style={styles.View_I521_2_320_9}>
          <View style={styles.View_I521_2_320_9_280_56} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5238/1d56/d8c93f05c5bfb93d65d57e1fc6879df0"
            }}
            style={styles.ImageBackground_I521_2_320_9_280_57}
          />
          <View style={styles.View_I521_2_320_9_280_58}>
            <Text style={styles.Text_I521_2_320_9_280_58}>Communication</Text>
          </View>
        </View>
        <View style={styles.View_I521_2_320_10}>
          <View style={styles.View_I521_2_320_10_280_61} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5238/1d56/d8c93f05c5bfb93d65d57e1fc6879df0"
            }}
            style={styles.ImageBackground_I521_2_320_10_280_62}
          />
          <View style={styles.View_I521_2_320_10_280_63}>
            <Text style={styles.Text_I521_2_320_10_280_63}>Reviews</Text>
          </View>
        </View>
        <View style={styles.View_I521_2_320_11}>
          <View style={styles.View_I521_2_320_11_264_60} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6699/7d63/45e52ad3f3577d97efb85700409075d5"
            }}
            style={styles.ImageBackground_I521_2_320_11_264_58}
          />
          <View style={styles.View_I521_2_320_11_264_59}>
            <Text style={styles.Text_I521_2_320_11_264_59}>Location</Text>
          </View>
          <View style={styles.View_I521_2_320_11_267_1}>
            <Text style={styles.Text_I521_2_320_11_267_1}>United States</Text>
          </View>
          <View style={styles.View_I521_2_320_11_268_51}>
            <Text style={styles.Text_I521_2_320_11_268_51}>United Kingdom</Text>
          </View>
          <View style={styles.View_I521_2_320_11_268_52}>
            <Text style={styles.Text_I521_2_320_11_268_52}>Canada</Text>
          </View>
          <View style={styles.View_I521_2_320_11_268_53}>
            <Text style={styles.Text_I521_2_320_11_268_53}>India</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/541b/d632/192b6718dafd98253cff821dbaa3bd85"
            }}
            style={styles.ImageBackground_I521_2_320_11_268_56}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc02/a947/bfc953014fda6ef712fc5bb7f60a0c63"
            }}
            style={styles.ImageBackground_I521_2_320_11_271_1}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc02/a947/bfc953014fda6ef712fc5bb7f60a0c63"
            }}
            style={styles.ImageBackground_I521_2_320_11_271_6}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc02/a947/bfc953014fda6ef712fc5bb7f60a0c63"
            }}
            style={styles.ImageBackground_I521_2_320_11_271_8}
          />
          <View style={styles.View_I521_2_320_11_320_0}>
            <View style={styles.View_I521_2_320_11_320_0_278_7}>
              <View style={styles.View_I521_2_320_11_320_0_278_9}>
                <Text style={styles.Text_I521_2_320_11_320_0_278_9}>
                  Search Location
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_521_3}>
        <View style={styles.View_I521_3_280_66}>
          <View style={styles.View_I521_3_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de92/0382/36aaad11d472f2b1c708776c054884a7"
          }}
          style={styles.ImageBackground_I521_3_280_70}
        />
        <View style={styles.View_I521_3_280_71}>
          <Text style={styles.Text_I521_3_280_71}>Dr Gabriel Bruce</Text>
        </View>
        <View style={styles.View_I521_3_280_72}>
          <Text style={styles.Text_I521_3_280_72}>Primary Care Physician</Text>
        </View>
        <View style={styles.View_I521_3_288_12}>
          <Text style={styles.Text_I521_3_288_12}>Michigan, US</Text>
        </View>
        <View style={styles.View_I521_3_285_3}>
          <View style={styles.View_I521_3_285_1}>
            <Text style={styles.Text_I521_3_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I521_3_285_2}>
            <Text style={styles.Text_I521_3_285_2}>14:00</Text>
          </View>
        </View>
        <View style={styles.View_I521_3_288_10}>
          <View style={styles.View_I521_3_288_8}>
            <Text style={styles.Text_I521_3_288_8}>(238 reviews)</Text>
          </View>
          <View style={styles.View_I521_3_288_9}>
            <Text style={styles.Text_I521_3_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d50/8e27/8ca897522cec0a9ca9df4c5d702422e0"
          }}
          style={styles.ImageBackground_I521_3_288_11}
        />
      </View>
      <View style={styles.View_521_4}>
        <View style={styles.View_I521_4_280_66}>
          <View style={styles.View_I521_4_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d7a/66bc/25912571a0cf7faff8348148f0ec196d"
          }}
          style={styles.ImageBackground_I521_4_280_70}
        />
        <View style={styles.View_I521_4_280_71}>
          <Text style={styles.Text_I521_4_280_71}>Dr Yola Baut</Text>
        </View>
        <View style={styles.View_I521_4_280_72}>
          <Text style={styles.Text_I521_4_280_72}>Psychotherapist</Text>
        </View>
        <View style={styles.View_I521_4_288_12}>
          <Text style={styles.Text_I521_4_288_12}>Birmingham, UK</Text>
        </View>
        <View style={styles.View_I521_4_285_3}>
          <View style={styles.View_I521_4_285_1}>
            <Text style={styles.Text_I521_4_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I521_4_285_2}>
            <Text style={styles.Text_I521_4_285_2}>Mon 10:00</Text>
          </View>
        </View>
        <View style={styles.View_I521_4_288_10}>
          <View style={styles.View_I521_4_288_8}>
            <Text style={styles.Text_I521_4_288_8}>(88 reviews)</Text>
          </View>
          <View style={styles.View_I521_4_288_9}>
            <Text style={styles.Text_I521_4_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f97e/4d62/e88bd06710107fc0a334f39ddfd4af74"
          }}
          style={styles.ImageBackground_I521_4_288_11}
        />
      </View>
      <View style={styles.View_521_5}>
        <View style={styles.View_I521_5_280_66}>
          <View style={styles.View_I521_5_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac03/c1b1/dd8774d98f71f2af79a567781b540c58"
          }}
          style={styles.ImageBackground_I521_5_280_70}
        />
        <View style={styles.View_I521_5_280_71}>
          <Text style={styles.Text_I521_5_280_71}>Dr Stephan Wolf</Text>
        </View>
        <View style={styles.View_I521_5_280_72}>
          <Text style={styles.Text_I521_5_280_72}>Primary Care Physician</Text>
        </View>
        <View style={styles.View_I521_5_288_12}>
          <Text style={styles.Text_I521_5_288_12}>Toronto, Canada</Text>
        </View>
        <View style={styles.View_I521_5_285_3}>
          <View style={styles.View_I521_5_285_1}>
            <Text style={styles.Text_I521_5_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I521_5_285_2}>
            <Text style={styles.Text_I521_5_285_2}>Mon 12:00</Text>
          </View>
        </View>
        <View style={styles.View_I521_5_288_10}>
          <View style={styles.View_I521_5_288_8}>
            <Text style={styles.Text_I521_5_288_8}>(1238 reviews)</Text>
          </View>
          <View style={styles.View_I521_5_288_9}>
            <Text style={styles.Text_I521_5_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d50/8e27/8ca897522cec0a9ca9df4c5d702422e0"
          }}
          style={styles.ImageBackground_I521_5_288_11}
        />
      </View>
      <View style={styles.View_521_6}>
        <View style={styles.View_I521_6_280_66}>
          <View style={styles.View_I521_6_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00a8/7990/d8c7600daf7b8ff8195f435660e39ec9"
          }}
          style={styles.ImageBackground_I521_6_280_70}
        />
        <View style={styles.View_I521_6_280_71}>
          <Text style={styles.Text_I521_6_280_71}>Dr Elizabeth Wenny</Text>
        </View>
        <View style={styles.View_I521_6_280_72}>
          <Text style={styles.Text_I521_6_280_72}>Psychotherapist</Text>
        </View>
        <View style={styles.View_I521_6_288_12}>
          <Text style={styles.Text_I521_6_288_12}>Bali, Indonesia</Text>
        </View>
        <View style={styles.View_I521_6_285_3}>
          <View style={styles.View_I521_6_285_1}>
            <Text style={styles.Text_I521_6_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I521_6_285_2}>
            <Text style={styles.Text_I521_6_285_2}>Mon 13:30</Text>
          </View>
        </View>
        <View style={styles.View_I521_6_288_10}>
          <View style={styles.View_I521_6_288_8}>
            <Text style={styles.Text_I521_6_288_8}>(5 reviews)</Text>
          </View>
          <View style={styles.View_I521_6_288_9}>
            <Text style={styles.Text_I521_6_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f97e/4d62/e88bd06710107fc0a334f39ddfd4af74"
          }}
          style={styles.ImageBackground_I521_6_288_11}
        />
      </View>
      <View style={styles.View_521_7}>
        <View style={styles.View_I521_7_280_66}>
          <View style={styles.View_I521_7_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc1c/ad79/e3447490cf16183cfbcb353f681708f3"
          }}
          style={styles.ImageBackground_I521_7_280_70}
        />
        <View style={styles.View_I521_7_280_71}>
          <Text style={styles.Text_I521_7_280_71}>Dr Cindy Bliep</Text>
        </View>
        <View style={styles.View_I521_7_280_72}>
          <Text style={styles.Text_I521_7_280_72}>Primary Care Physician</Text>
        </View>
        <View style={styles.View_I521_7_288_12}>
          <Text style={styles.Text_I521_7_288_12}>Cape Town, South Africa</Text>
        </View>
        <View style={styles.View_I521_7_285_3}>
          <View style={styles.View_I521_7_285_1}>
            <Text style={styles.Text_I521_7_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I521_7_285_2}>
            <Text style={styles.Text_I521_7_285_2}>Tue 9:00</Text>
          </View>
        </View>
        <View style={styles.View_I521_7_288_10}>
          <View style={styles.View_I521_7_288_8}>
            <Text style={styles.Text_I521_7_288_8}>(23 reviews)</Text>
          </View>
          <View style={styles.View_I521_7_288_9}>
            <Text style={styles.Text_I521_7_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d50/8e27/8ca897522cec0a9ca9df4c5d702422e0"
          }}
          style={styles.ImageBackground_I521_7_288_11}
        />
      </View>
      <View style={styles.View_521_8}>
        <View style={styles.View_I521_8_280_66}>
          <View style={styles.View_I521_8_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5950/8fda/9c55c2caeb7e8ce1380f01a45ac46e83"
          }}
          style={styles.ImageBackground_I521_8_280_70}
        />
        <View style={styles.View_I521_8_280_71}>
          <Text style={styles.Text_I521_8_280_71}>Dr Yash Verma</Text>
        </View>
        <View style={styles.View_I521_8_280_72}>
          <Text style={styles.Text_I521_8_280_72}>Psychotherapist</Text>
        </View>
        <View style={styles.View_I521_8_288_12}>
          <Text style={styles.Text_I521_8_288_12}>Mumbai, India</Text>
        </View>
        <View style={styles.View_I521_8_285_3}>
          <View style={styles.View_I521_8_285_1}>
            <Text style={styles.Text_I521_8_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I521_8_285_2}>
            <Text style={styles.Text_I521_8_285_2}>Tue 10:30</Text>
          </View>
        </View>
        <View style={styles.View_I521_8_288_10}>
          <View style={styles.View_I521_8_288_8}>
            <Text style={styles.Text_I521_8_288_8}>(788 reviews)</Text>
          </View>
          <View style={styles.View_I521_8_288_9}>
            <Text style={styles.Text_I521_8_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f97e/4d62/e88bd06710107fc0a334f39ddfd4af74"
          }}
          style={styles.ImageBackground_I521_8_288_11}
        />
      </View>
      <View style={styles.View_526_0}>
        <View style={styles.View_I526_0_199_344}>
          <View style={styles.View_I526_0_199_344_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5979/5b08/877131cfaf519bff9199829a08dfeb63"
          }}
          style={styles.ImageBackground_I526_0_199_345}
        />
        <View style={styles.View_I526_0_199_346}>
          <View style={styles.View_I526_0_199_347}>
            <View style={styles.View_I526_0_199_349}>
              <Text style={styles.Text_I526_0_199_349}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I526_0_199_350}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I526_0_199_351}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I526_0_199_352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/171b/ad41/cca1fc9a4c61a69f2073888e1559d679"
          }}
          style={styles.ImageBackground_I526_0_199_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/85c9/7f4f5815b12675432f7bce135fb62d6e"
          }}
          style={styles.ImageBackground_I526_0_199_354}
        />
      </View>
      <View style={styles.View_697_4990}>
        <View style={styles.View_I697_4990_199_444}>
          <View style={styles.View_I697_4990_199_445}>
            <View style={styles.View_I697_4990_199_445_4_227} />
          </View>
        </View>
        <View style={styles.View_I697_4990_199_446}>
          <View style={styles.View_I697_4990_199_447}>
            <Text style={styles.Text_I697_4990_199_447}>My Health</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbcc/2f1e/81abeac8cf8ec8378572a9b6dfbf3974"
            }}
            style={styles.ImageBackground_I697_4990_199_448}
          />
        </View>
        <View style={styles.View_I697_4990_199_450}>
          <View style={styles.View_I697_4990_199_451}>
            <Text style={styles.Text_I697_4990_199_451}>Specislist Area</Text>
          </View>
          <View style={styles.View_I697_4990_199_452}>
            <View style={styles.View_I697_4990_199_453}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/984b/92fa/664da26c3fb9b69746b556885206648d"
                }}
                style={styles.ImageBackground_I697_4990_199_454}
              />
            </View>
            <View style={styles.View_I697_4990_199_456}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34b/3fad/fc809c0af8ff375c0c1d3e6770c999b4"
                }}
                style={styles.ImageBackground_I697_4990_199_457}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I697_4990_199_459}>
          <View style={styles.View_I697_4990_199_460}>
            <Text style={styles.Text_I697_4990_199_460}>Friends Area</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff31/53eb/73d3d7306c8dbccc98301d70467a39f7"
            }}
            style={styles.ImageBackground_I697_4990_199_461}
          />
        </View>
        <View style={styles.View_I697_4990_199_463}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6a6/d86f/210c1d275b8c8f0067359d58037f63b0"
            }}
            style={styles.ImageBackground_I697_4990_199_464}
          />
          <View style={styles.View_I697_4990_199_465}>
            <View style={styles.View_I697_4990_199_466}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3155/9060/f25304a55c8d3ee3cadb0523048eb23b"
                }}
                style={styles.ImageBackground_I697_4990_199_467}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I697_4990_199_469}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5933/03b8/c08f024b145b53dd98ea067662c58dab"
            }}
            style={styles.ImageBackground_I697_4990_199_470}
          />
          <View style={styles.View_I697_4990_199_471}>
            <View style={styles.View_I697_4990_199_472}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a6/6501/690ec443ee5966d5124104068518bdb1"
                }}
                style={styles.ImageBackground_I697_4990_199_473}
              />
            </View>
            <View style={styles.View_I697_4990_199_478}>
              <Text style={styles.Text_I697_4990_199_478}>Dashboard</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("178%") },
  View_521_2: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("108%"),
    minHeight: hp("108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I521_2_261_1: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I521_2_261_1_4_227: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I521_2_261_0: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%")
  },
  View_I521_2_248_4: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I521_2_248_4: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I521_2_254_0: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I521_2_320_8: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I521_2_320_8_263_54: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I521_2_320_8_263_55: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%")
  },
  View_I521_2_320_8_263_56: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I521_2_320_8_263_56: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I521_2_320_9: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("84%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I521_2_320_9_280_56: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I521_2_320_9_280_57: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%")
  },
  View_I521_2_320_9_280_58: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I521_2_320_9_280_58: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I521_2_320_10: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I521_2_320_10_280_61: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I521_2_320_10_280_62: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%")
  },
  View_I521_2_320_10_280_63: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I521_2_320_10_280_63: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I521_2_320_11: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I521_2_320_11_264_60: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I521_2_320_11_264_58: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%")
  },
  View_I521_2_320_11_264_59: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I521_2_320_11_264_59: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I521_2_320_11_267_1: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I521_2_320_11_267_1: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I521_2_320_11_268_51: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_I521_2_320_11_268_51: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I521_2_320_11_268_52: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_I521_2_320_11_268_52: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I521_2_320_11_268_53: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_I521_2_320_11_268_53: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I521_2_320_11_268_56: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("12%")
  },
  ImageBackground_I521_2_320_11_271_1: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("20%")
  },
  ImageBackground_I521_2_320_11_271_6: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("27%")
  },
  ImageBackground_I521_2_320_11_271_8: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("34%")
  },
  View_I521_2_320_11_320_0: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("42%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_I521_2_320_11_320_0_278_7: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I521_2_320_11_320_0_278_9: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I521_2_320_11_320_0_278_9: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_521_3: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I521_3_280_66: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I521_3_280_66_4_227: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I521_3_280_70: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_I521_3_280_71: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I521_3_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_3_280_72: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I521_3_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_3_288_12: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I521_3_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_3_285_3: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I521_3_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I521_3_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_3_285_2: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I521_3_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_3_288_10: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I521_3_288_8: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I521_3_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_3_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I521_3_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I521_3_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_521_4: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I521_4_280_66: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I521_4_280_66_4_227: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I521_4_280_70: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_I521_4_280_71: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I521_4_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_4_280_72: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I521_4_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_4_288_12: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I521_4_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_4_285_3: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I521_4_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I521_4_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_4_285_2: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I521_4_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_4_288_10: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I521_4_288_8: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I521_4_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_4_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I521_4_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I521_4_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_521_5: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I521_5_280_66: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I521_5_280_66_4_227: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I521_5_280_70: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_I521_5_280_71: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I521_5_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_5_280_72: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I521_5_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_5_288_12: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I521_5_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_5_285_3: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I521_5_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I521_5_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_5_285_2: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I521_5_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_5_288_10: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I521_5_288_8: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I521_5_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_5_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I521_5_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I521_5_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_521_6: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I521_6_280_66: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I521_6_280_66_4_227: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I521_6_280_70: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_I521_6_280_71: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I521_6_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_6_280_72: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I521_6_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_6_288_12: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I521_6_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_6_285_3: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I521_6_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I521_6_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_6_285_2: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I521_6_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_6_288_10: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I521_6_288_8: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I521_6_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_6_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I521_6_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I521_6_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_521_7: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("110%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I521_7_280_66: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I521_7_280_66_4_227: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I521_7_280_70: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_I521_7_280_71: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I521_7_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_7_280_72: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I521_7_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_7_288_12: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I521_7_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_7_285_3: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I521_7_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I521_7_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_7_285_2: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I521_7_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_7_288_10: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I521_7_288_8: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I521_7_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_7_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I521_7_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I521_7_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_521_8: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("110%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I521_8_280_66: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I521_8_280_66_4_227: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I521_8_280_70: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_I521_8_280_71: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I521_8_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_8_280_72: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I521_8_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_8_288_12: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I521_8_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_8_285_3: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I521_8_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I521_8_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_8_285_2: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I521_8_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_8_288_10: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I521_8_288_8: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I521_8_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I521_8_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I521_8_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I521_8_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_526_0: {
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
  View_I526_0_199_344: {
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
  View_I526_0_199_344_4_227: {
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
  ImageBackground_I526_0_199_345: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("3%")
  },
  View_I526_0_199_346: {
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
  View_I526_0_199_347: {
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
  View_I526_0_199_349: {
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
  Text_I526_0_199_349: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I526_0_199_350: {
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
  ImageBackground_I526_0_199_351: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I526_0_199_352: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I526_0_199_353: {
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
  ImageBackground_I526_0_199_354: {
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
  View_697_4990: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("157%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I697_4990_199_444: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_I697_4990_199_445: {
    width: wp("100%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I697_4990_199_445_4_227: {
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
  View_I697_4990_199_446: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("12%")
  },
  View_I697_4990_199_447: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I697_4990_199_447: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I697_4990_199_448: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I697_4990_199_450: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("12%")
  },
  View_I697_4990_199_451: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I697_4990_199_451: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I697_4990_199_452: {
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
  View_I697_4990_199_453: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I697_4990_199_454: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I697_4990_199_456: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I697_4990_199_457: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I697_4990_199_459: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("12%")
  },
  View_I697_4990_199_460: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I697_4990_199_460: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I697_4990_199_461: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I697_4990_199_463: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%")
  },
  ImageBackground_I697_4990_199_464: {
    width: wp("7%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I697_4990_199_465: {
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
  View_I697_4990_199_466: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I697_4990_199_467: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I697_4990_199_469: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%")
  },
  ImageBackground_I697_4990_199_470: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I697_4990_199_471: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I697_4990_199_472: {
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
  ImageBackground_I697_4990_199_473: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I697_4990_199_478: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I697_4990_199_478: {
    color: "rgba(28, 200, 238, 1)",
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
