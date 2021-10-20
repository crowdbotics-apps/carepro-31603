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
      <View style={styles.View_527_2677}>
        <View style={styles.View_I527_2677_199_344}>
          <View style={styles.View_I527_2677_199_344_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5979/5b08/877131cfaf519bff9199829a08dfeb63"
          }}
          style={styles.ImageBackground_I527_2677_199_345}
        />
        <View style={styles.View_I527_2677_199_346}>
          <View style={styles.View_I527_2677_199_347}>
            <View style={styles.View_I527_2677_199_349}>
              <Text style={styles.Text_I527_2677_199_349}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I527_2677_199_350}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I527_2677_199_351}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I527_2677_199_352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/171b/ad41/cca1fc9a4c61a69f2073888e1559d679"
          }}
          style={styles.ImageBackground_I527_2677_199_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/85c9/7f4f5815b12675432f7bce135fb62d6e"
          }}
          style={styles.ImageBackground_I527_2677_199_354}
        />
      </View>
      <View style={styles.View_527_2678}>
        <View style={styles.View_I527_2678_261_1}>
          <View style={styles.View_I527_2678_261_1_4_227} />
        </View>
        <View style={styles.View_I527_2678_261_0}>
          <View style={styles.View_I527_2678_248_4}>
            <Text style={styles.Text_I527_2678_248_4}>Filter</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1450/3248/79bc9b7e047ca44a6dc8abe9a178ed03"
            }}
            style={styles.ImageBackground_I527_2678_254_0}
          />
        </View>
        <View style={styles.View_I527_2678_320_8}>
          <View style={styles.View_I527_2678_320_8_263_54} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5238/1d56/d8c93f05c5bfb93d65d57e1fc6879df0"
            }}
            style={styles.ImageBackground_I527_2678_320_8_263_55}
          />
          <View style={styles.View_I527_2678_320_8_263_56}>
            <Text style={styles.Text_I527_2678_320_8_263_56}>Availability</Text>
          </View>
        </View>
        <View style={styles.View_I527_2678_320_9}>
          <View style={styles.View_I527_2678_320_9_280_56} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5238/1d56/d8c93f05c5bfb93d65d57e1fc6879df0"
            }}
            style={styles.ImageBackground_I527_2678_320_9_280_57}
          />
          <View style={styles.View_I527_2678_320_9_280_58}>
            <Text style={styles.Text_I527_2678_320_9_280_58}>
              Communication
            </Text>
          </View>
        </View>
        <View style={styles.View_I527_2678_320_10}>
          <View style={styles.View_I527_2678_320_10_280_61} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5238/1d56/d8c93f05c5bfb93d65d57e1fc6879df0"
            }}
            style={styles.ImageBackground_I527_2678_320_10_280_62}
          />
          <View style={styles.View_I527_2678_320_10_280_63}>
            <Text style={styles.Text_I527_2678_320_10_280_63}>Reviews</Text>
          </View>
        </View>
        <View style={styles.View_I527_2678_320_11}>
          <View style={styles.View_I527_2678_320_11_264_60} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6699/7d63/45e52ad3f3577d97efb85700409075d5"
            }}
            style={styles.ImageBackground_I527_2678_320_11_264_58}
          />
          <View style={styles.View_I527_2678_320_11_264_59}>
            <Text style={styles.Text_I527_2678_320_11_264_59}>Location</Text>
          </View>
          <View style={styles.View_I527_2678_320_11_267_1}>
            <Text style={styles.Text_I527_2678_320_11_267_1}>
              United States
            </Text>
          </View>
          <View style={styles.View_I527_2678_320_11_268_51}>
            <Text style={styles.Text_I527_2678_320_11_268_51}>
              United Kingdom
            </Text>
          </View>
          <View style={styles.View_I527_2678_320_11_268_52}>
            <Text style={styles.Text_I527_2678_320_11_268_52}>Canada</Text>
          </View>
          <View style={styles.View_I527_2678_320_11_268_53}>
            <Text style={styles.Text_I527_2678_320_11_268_53}>India</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/541b/d632/192b6718dafd98253cff821dbaa3bd85"
            }}
            style={styles.ImageBackground_I527_2678_320_11_268_56}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc02/a947/bfc953014fda6ef712fc5bb7f60a0c63"
            }}
            style={styles.ImageBackground_I527_2678_320_11_271_1}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc02/a947/bfc953014fda6ef712fc5bb7f60a0c63"
            }}
            style={styles.ImageBackground_I527_2678_320_11_271_6}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc02/a947/bfc953014fda6ef712fc5bb7f60a0c63"
            }}
            style={styles.ImageBackground_I527_2678_320_11_271_8}
          />
          <View style={styles.View_I527_2678_320_11_320_0}>
            <View style={styles.View_I527_2678_320_11_320_0_278_7}>
              <View style={styles.View_I527_2678_320_11_320_0_278_9}>
                <Text style={styles.Text_I527_2678_320_11_320_0_278_9}>
                  Search Location
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_527_2679}>
        <View style={styles.View_I527_2679_280_66}>
          <View style={styles.View_I527_2679_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de92/0382/36aaad11d472f2b1c708776c054884a7"
          }}
          style={styles.ImageBackground_I527_2679_280_70}
        />
        <View style={styles.View_I527_2679_280_71}>
          <Text style={styles.Text_I527_2679_280_71}>Dr Gabriel Bruce</Text>
        </View>
        <View style={styles.View_I527_2679_280_72}>
          <Text style={styles.Text_I527_2679_280_72}>
            Primary Care Physician
          </Text>
        </View>
        <View style={styles.View_I527_2679_288_12}>
          <Text style={styles.Text_I527_2679_288_12}>Michigan, US</Text>
        </View>
        <View style={styles.View_I527_2679_285_3}>
          <View style={styles.View_I527_2679_285_1}>
            <Text style={styles.Text_I527_2679_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I527_2679_285_2}>
            <Text style={styles.Text_I527_2679_285_2}>14:00</Text>
          </View>
        </View>
        <View style={styles.View_I527_2679_288_10}>
          <View style={styles.View_I527_2679_288_8}>
            <Text style={styles.Text_I527_2679_288_8}>(238 reviews)</Text>
          </View>
          <View style={styles.View_I527_2679_288_9}>
            <Text style={styles.Text_I527_2679_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f97e/4d62/e88bd06710107fc0a334f39ddfd4af74"
          }}
          style={styles.ImageBackground_I527_2679_288_11}
        />
      </View>
      <View style={styles.View_527_2680}>
        <View style={styles.View_I527_2680_280_66}>
          <View style={styles.View_I527_2680_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d7a/66bc/25912571a0cf7faff8348148f0ec196d"
          }}
          style={styles.ImageBackground_I527_2680_280_70}
        />
        <View style={styles.View_I527_2680_280_71}>
          <Text style={styles.Text_I527_2680_280_71}>Dr Yola Baut</Text>
        </View>
        <View style={styles.View_I527_2680_280_72}>
          <Text style={styles.Text_I527_2680_280_72}>Psychotherapist</Text>
        </View>
        <View style={styles.View_I527_2680_288_12}>
          <Text style={styles.Text_I527_2680_288_12}>Birmingham, UK</Text>
        </View>
        <View style={styles.View_I527_2680_285_3}>
          <View style={styles.View_I527_2680_285_1}>
            <Text style={styles.Text_I527_2680_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I527_2680_285_2}>
            <Text style={styles.Text_I527_2680_285_2}>Mon 10:00</Text>
          </View>
        </View>
        <View style={styles.View_I527_2680_288_10}>
          <View style={styles.View_I527_2680_288_8}>
            <Text style={styles.Text_I527_2680_288_8}>(88 reviews)</Text>
          </View>
          <View style={styles.View_I527_2680_288_9}>
            <Text style={styles.Text_I527_2680_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd6f/cb0c/27ae9635d38ded8aec706c5114145910"
          }}
          style={styles.ImageBackground_I527_2680_288_11}
        />
      </View>
      <View style={styles.View_527_2681}>
        <View style={styles.View_I527_2681_280_66}>
          <View style={styles.View_I527_2681_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac03/c1b1/dd8774d98f71f2af79a567781b540c58"
          }}
          style={styles.ImageBackground_I527_2681_280_70}
        />
        <View style={styles.View_I527_2681_280_71}>
          <Text style={styles.Text_I527_2681_280_71}>Dr Stephan Wolf</Text>
        </View>
        <View style={styles.View_I527_2681_280_72}>
          <Text style={styles.Text_I527_2681_280_72}>
            Primary Care Physician
          </Text>
        </View>
        <View style={styles.View_I527_2681_288_12}>
          <Text style={styles.Text_I527_2681_288_12}>Toronto, Canada</Text>
        </View>
        <View style={styles.View_I527_2681_285_3}>
          <View style={styles.View_I527_2681_285_1}>
            <Text style={styles.Text_I527_2681_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I527_2681_285_2}>
            <Text style={styles.Text_I527_2681_285_2}>Mon 12:00</Text>
          </View>
        </View>
        <View style={styles.View_I527_2681_288_10}>
          <View style={styles.View_I527_2681_288_8}>
            <Text style={styles.Text_I527_2681_288_8}>(1238 reviews)</Text>
          </View>
          <View style={styles.View_I527_2681_288_9}>
            <Text style={styles.Text_I527_2681_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f97e/4d62/e88bd06710107fc0a334f39ddfd4af74"
          }}
          style={styles.ImageBackground_I527_2681_288_11}
        />
      </View>
      <View style={styles.View_527_2682}>
        <View style={styles.View_I527_2682_280_66}>
          <View style={styles.View_I527_2682_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00a8/7990/d8c7600daf7b8ff8195f435660e39ec9"
          }}
          style={styles.ImageBackground_I527_2682_280_70}
        />
        <View style={styles.View_I527_2682_280_71}>
          <Text style={styles.Text_I527_2682_280_71}>Dr Elizabeth Wenny</Text>
        </View>
        <View style={styles.View_I527_2682_280_72}>
          <Text style={styles.Text_I527_2682_280_72}>Psychotherapist</Text>
        </View>
        <View style={styles.View_I527_2682_288_12}>
          <Text style={styles.Text_I527_2682_288_12}>Bali, Indonesia</Text>
        </View>
        <View style={styles.View_I527_2682_285_3}>
          <View style={styles.View_I527_2682_285_1}>
            <Text style={styles.Text_I527_2682_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I527_2682_285_2}>
            <Text style={styles.Text_I527_2682_285_2}>Mon 13:30</Text>
          </View>
        </View>
        <View style={styles.View_I527_2682_288_10}>
          <View style={styles.View_I527_2682_288_8}>
            <Text style={styles.Text_I527_2682_288_8}>(5 reviews)</Text>
          </View>
          <View style={styles.View_I527_2682_288_9}>
            <Text style={styles.Text_I527_2682_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd6f/cb0c/27ae9635d38ded8aec706c5114145910"
          }}
          style={styles.ImageBackground_I527_2682_288_11}
        />
      </View>
      <View style={styles.View_527_2683}>
        <View style={styles.View_I527_2683_280_66}>
          <View style={styles.View_I527_2683_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc1c/ad79/e3447490cf16183cfbcb353f681708f3"
          }}
          style={styles.ImageBackground_I527_2683_280_70}
        />
        <View style={styles.View_I527_2683_280_71}>
          <Text style={styles.Text_I527_2683_280_71}>Dr Cindy Bliep</Text>
        </View>
        <View style={styles.View_I527_2683_280_72}>
          <Text style={styles.Text_I527_2683_280_72}>
            Primary Care Physician
          </Text>
        </View>
        <View style={styles.View_I527_2683_288_12}>
          <Text style={styles.Text_I527_2683_288_12}>
            Cape Town, South Africa
          </Text>
        </View>
        <View style={styles.View_I527_2683_285_3}>
          <View style={styles.View_I527_2683_285_1}>
            <Text style={styles.Text_I527_2683_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I527_2683_285_2}>
            <Text style={styles.Text_I527_2683_285_2}>Tue 9:00</Text>
          </View>
        </View>
        <View style={styles.View_I527_2683_288_10}>
          <View style={styles.View_I527_2683_288_8}>
            <Text style={styles.Text_I527_2683_288_8}>(23 reviews)</Text>
          </View>
          <View style={styles.View_I527_2683_288_9}>
            <Text style={styles.Text_I527_2683_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f97e/4d62/e88bd06710107fc0a334f39ddfd4af74"
          }}
          style={styles.ImageBackground_I527_2683_288_11}
        />
      </View>
      <View style={styles.View_527_2684}>
        <View style={styles.View_I527_2684_280_66}>
          <View style={styles.View_I527_2684_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5950/8fda/9c55c2caeb7e8ce1380f01a45ac46e83"
          }}
          style={styles.ImageBackground_I527_2684_280_70}
        />
        <View style={styles.View_I527_2684_280_71}>
          <Text style={styles.Text_I527_2684_280_71}>Dr Yash Verma</Text>
        </View>
        <View style={styles.View_I527_2684_280_72}>
          <Text style={styles.Text_I527_2684_280_72}>Psychotherapist</Text>
        </View>
        <View style={styles.View_I527_2684_288_12}>
          <Text style={styles.Text_I527_2684_288_12}>Mumbai, India</Text>
        </View>
        <View style={styles.View_I527_2684_285_3}>
          <View style={styles.View_I527_2684_285_1}>
            <Text style={styles.Text_I527_2684_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I527_2684_285_2}>
            <Text style={styles.Text_I527_2684_285_2}>Tue 10:30</Text>
          </View>
        </View>
        <View style={styles.View_I527_2684_288_10}>
          <View style={styles.View_I527_2684_288_8}>
            <Text style={styles.Text_I527_2684_288_8}>(788 reviews)</Text>
          </View>
          <View style={styles.View_I527_2684_288_9}>
            <Text style={styles.Text_I527_2684_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd6f/cb0c/27ae9635d38ded8aec706c5114145910"
          }}
          style={styles.ImageBackground_I527_2684_288_11}
        />
      </View>
      <View style={styles.View_527_2685} />
      <View style={styles.View_457_338}>
        <View style={styles.View_457_322} />
        <View style={styles.View_457_330}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e381/9fcf/bb2dd83c50c0ae3c615f916bade8a6e3"
            }}
            style={styles.ImageBackground_I457_330_982_4345}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/833f/be74/71439dc96c926a06e1f51525481281da"
            }}
            style={styles.ImageBackground_I457_330_982_4346}
          />
        </View>
        <View style={styles.View_457_323}>
          <Text style={styles.Text_457_323}>
            Booking confirmed for Monday, 14 June 2021 at 15:45
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("158%") },
  View_527_2677: {
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
  View_I527_2677_199_344: {
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
  View_I527_2677_199_344_4_227: {
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
  ImageBackground_I527_2677_199_345: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("3%")
  },
  View_I527_2677_199_346: {
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
  View_I527_2677_199_347: {
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
  View_I527_2677_199_349: {
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
  Text_I527_2677_199_349: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_2677_199_350: {
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
  ImageBackground_I527_2677_199_351: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I527_2677_199_352: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I527_2677_199_353: {
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
  ImageBackground_I527_2677_199_354: {
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
  View_527_2678: {
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
  View_I527_2678_261_1: {
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
  View_I527_2678_261_1_4_227: {
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
  View_I527_2678_261_0: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%")
  },
  View_I527_2678_248_4: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I527_2678_248_4: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I527_2678_254_0: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I527_2678_320_8: {
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
  View_I527_2678_320_8_263_54: {
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
  ImageBackground_I527_2678_320_8_263_55: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%")
  },
  View_I527_2678_320_8_263_56: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I527_2678_320_8_263_56: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_2678_320_9: {
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
  View_I527_2678_320_9_280_56: {
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
  ImageBackground_I527_2678_320_9_280_57: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%")
  },
  View_I527_2678_320_9_280_58: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I527_2678_320_9_280_58: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_2678_320_10: {
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
  View_I527_2678_320_10_280_61: {
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
  ImageBackground_I527_2678_320_10_280_62: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%")
  },
  View_I527_2678_320_10_280_63: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I527_2678_320_10_280_63: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_2678_320_11: {
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
  View_I527_2678_320_11_264_60: {
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
  ImageBackground_I527_2678_320_11_264_58: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%")
  },
  View_I527_2678_320_11_264_59: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I527_2678_320_11_264_59: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_2678_320_11_267_1: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I527_2678_320_11_267_1: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_2678_320_11_268_51: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_I527_2678_320_11_268_51: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_2678_320_11_268_52: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_I527_2678_320_11_268_52: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_2678_320_11_268_53: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_I527_2678_320_11_268_53: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I527_2678_320_11_268_56: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("12%")
  },
  ImageBackground_I527_2678_320_11_271_1: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("20%")
  },
  ImageBackground_I527_2678_320_11_271_6: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("27%")
  },
  ImageBackground_I527_2678_320_11_271_8: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("34%")
  },
  View_I527_2678_320_11_320_0: {
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
  View_I527_2678_320_11_320_0_278_7: {
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
  View_I527_2678_320_11_320_0_278_9: {
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
  Text_I527_2678_320_11_320_0_278_9: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_527_2679: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I527_2679_280_66: {
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
  View_I527_2679_280_66_4_227: {
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
  ImageBackground_I527_2679_280_70: {
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
  View_I527_2679_280_71: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I527_2679_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2679_280_72: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I527_2679_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2679_288_12: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I527_2679_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2679_285_3: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I527_2679_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2679_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2679_285_2: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I527_2679_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2679_288_10: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I527_2679_288_8: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I527_2679_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2679_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2679_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I527_2679_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_527_2680: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I527_2680_280_66: {
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
  View_I527_2680_280_66_4_227: {
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
  ImageBackground_I527_2680_280_70: {
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
  View_I527_2680_280_71: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I527_2680_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2680_280_72: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I527_2680_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2680_288_12: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I527_2680_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2680_285_3: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I527_2680_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2680_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2680_285_2: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I527_2680_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2680_288_10: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I527_2680_288_8: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I527_2680_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2680_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2680_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I527_2680_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_527_2681: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I527_2681_280_66: {
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
  View_I527_2681_280_66_4_227: {
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
  ImageBackground_I527_2681_280_70: {
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
  View_I527_2681_280_71: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I527_2681_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2681_280_72: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I527_2681_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2681_288_12: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I527_2681_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2681_285_3: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I527_2681_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2681_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2681_285_2: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I527_2681_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2681_288_10: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I527_2681_288_8: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I527_2681_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2681_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2681_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I527_2681_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_527_2682: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I527_2682_280_66: {
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
  View_I527_2682_280_66_4_227: {
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
  ImageBackground_I527_2682_280_70: {
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
  View_I527_2682_280_71: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I527_2682_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2682_280_72: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I527_2682_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2682_288_12: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I527_2682_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2682_285_3: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I527_2682_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2682_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2682_285_2: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I527_2682_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2682_288_10: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I527_2682_288_8: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I527_2682_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2682_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2682_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I527_2682_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_527_2683: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("110%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I527_2683_280_66: {
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
  View_I527_2683_280_66_4_227: {
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
  ImageBackground_I527_2683_280_70: {
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
  View_I527_2683_280_71: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I527_2683_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2683_280_72: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I527_2683_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2683_288_12: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I527_2683_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2683_285_3: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I527_2683_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2683_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2683_285_2: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I527_2683_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2683_288_10: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I527_2683_288_8: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I527_2683_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2683_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2683_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I527_2683_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_527_2684: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("110%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I527_2684_280_66: {
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
  View_I527_2684_280_66_4_227: {
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
  ImageBackground_I527_2684_280_70: {
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
  View_I527_2684_280_71: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I527_2684_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2684_280_72: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I527_2684_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2684_288_12: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I527_2684_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2684_285_3: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I527_2684_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2684_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2684_285_2: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I527_2684_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2684_288_10: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I527_2684_288_8: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I527_2684_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2684_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2684_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I527_2684_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_527_2685: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("144%"),
    minHeight: hp("144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(168, 168, 168, 1)",
    opacity: 0.15000000596046448
  },
  View_457_338: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_457_322: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_457_330: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I457_330_982_4345: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I457_330_982_4346: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("5%")
  },
  View_457_323: {
    flexGrow: 1,
    width: wp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_457_323: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
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
