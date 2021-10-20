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
      <View style={styles.View_1055_6632}>
        <View style={styles.View_I1055_6632_228_1}>
          <View style={styles.View_I1055_6632_228_1_4_227} />
        </View>
        <View style={styles.View_I1055_6632_228_3}>
          <View style={styles.View_I1055_6632_228_4}>
            <View style={styles.View_I1055_6632_228_6}>
              <Text style={styles.Text_I1055_6632_228_6}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I1055_6632_228_7}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I1055_6632_228_8}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I1055_6632_228_9}
        />
        <View style={styles.View_I1055_6632_320_49}>
          <View style={styles.View_I1055_6632_137_21} />
          <View style={styles.View_I1055_6632_230_0}>
            <Text style={styles.Text_I1055_6632_230_0}>Log In/Sign Up</Text>
          </View>
        </View>
        <View style={styles.View_I1055_6632_248_0}>
          <Text style={styles.Text_I1055_6632_248_0}>For Patients</Text>
        </View>
        <View style={styles.View_I1055_6632_248_1}>
          <Text style={styles.Text_I1055_6632_248_1}>For Specialists</Text>
        </View>
        <View style={styles.View_I1055_6632_248_2}>
          <Text style={styles.Text_I1055_6632_248_2}>More</Text>
        </View>
      </View>
      <View style={styles.View_1055_6633}>
        <View style={styles.View_I1055_6633_280_66}>
          <View style={styles.View_I1055_6633_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de92/0382/36aaad11d472f2b1c708776c054884a7"
          }}
          style={styles.ImageBackground_I1055_6633_280_70}
        />
        <View style={styles.View_I1055_6633_280_71}>
          <Text style={styles.Text_I1055_6633_280_71}>Dr Gabriel Bruce</Text>
        </View>
        <View style={styles.View_I1055_6633_280_72}>
          <Text style={styles.Text_I1055_6633_280_72}>
            Primary Care Physician
          </Text>
        </View>
        <View style={styles.View_I1055_6633_288_12}>
          <Text style={styles.Text_I1055_6633_288_12}>Michigan, US</Text>
        </View>
        <View style={styles.View_I1055_6633_285_3}>
          <View style={styles.View_I1055_6633_285_1}>
            <Text style={styles.Text_I1055_6633_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I1055_6633_285_2}>
            <Text style={styles.Text_I1055_6633_285_2}>14:00</Text>
          </View>
        </View>
        <View style={styles.View_I1055_6633_288_10}>
          <View style={styles.View_I1055_6633_288_8}>
            <Text style={styles.Text_I1055_6633_288_8}>(238 reviews)</Text>
          </View>
          <View style={styles.View_I1055_6633_288_9}>
            <Text style={styles.Text_I1055_6633_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b94/5c82/a3230babd4861f63ea22d1dbce27643a"
          }}
          style={styles.ImageBackground_I1055_6633_288_11}
        />
      </View>
      <View style={styles.View_1055_6634}>
        <View style={styles.View_I1055_6634_280_66}>
          <View style={styles.View_I1055_6634_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d7a/66bc/25912571a0cf7faff8348148f0ec196d"
          }}
          style={styles.ImageBackground_I1055_6634_280_70}
        />
        <View style={styles.View_I1055_6634_280_71}>
          <Text style={styles.Text_I1055_6634_280_71}>Dr Yola Baut</Text>
        </View>
        <View style={styles.View_I1055_6634_280_72}>
          <Text style={styles.Text_I1055_6634_280_72}>Neurologist</Text>
        </View>
        <View style={styles.View_I1055_6634_288_12}>
          <Text style={styles.Text_I1055_6634_288_12}>Manchester, UK</Text>
        </View>
        <View style={styles.View_I1055_6634_285_3}>
          <View style={styles.View_I1055_6634_285_1}>
            <Text style={styles.Text_I1055_6634_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I1055_6634_285_2}>
            <Text style={styles.Text_I1055_6634_285_2}>Mon 10:00</Text>
          </View>
        </View>
        <View style={styles.View_I1055_6634_288_10}>
          <View style={styles.View_I1055_6634_288_8}>
            <Text style={styles.Text_I1055_6634_288_8}>(88 reviews)</Text>
          </View>
          <View style={styles.View_I1055_6634_288_9}>
            <Text style={styles.Text_I1055_6634_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c82/8624/0425dbc008f20cbe91b366097d811a75"
          }}
          style={styles.ImageBackground_I1055_6634_288_11}
        />
      </View>
      <View style={styles.View_1055_6635}>
        <View style={styles.View_I1055_6635_280_66}>
          <View style={styles.View_I1055_6635_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac03/c1b1/dd8774d98f71f2af79a567781b540c58"
          }}
          style={styles.ImageBackground_I1055_6635_280_70}
        />
        <View style={styles.View_I1055_6635_280_71}>
          <Text style={styles.Text_I1055_6635_280_71}>Dr Stephan Wolf</Text>
        </View>
        <View style={styles.View_I1055_6635_280_72}>
          <Text style={styles.Text_I1055_6635_280_72}>
            Primary Care Physician
          </Text>
        </View>
        <View style={styles.View_I1055_6635_288_12}>
          <Text style={styles.Text_I1055_6635_288_12}>Toronto, Canada</Text>
        </View>
        <View style={styles.View_I1055_6635_285_3}>
          <View style={styles.View_I1055_6635_285_1}>
            <Text style={styles.Text_I1055_6635_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I1055_6635_285_2}>
            <Text style={styles.Text_I1055_6635_285_2}>Mon 12:00</Text>
          </View>
        </View>
        <View style={styles.View_I1055_6635_288_10}>
          <View style={styles.View_I1055_6635_288_8}>
            <Text style={styles.Text_I1055_6635_288_8}>(1238 reviews)</Text>
          </View>
          <View style={styles.View_I1055_6635_288_9}>
            <Text style={styles.Text_I1055_6635_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b94/5c82/a3230babd4861f63ea22d1dbce27643a"
          }}
          style={styles.ImageBackground_I1055_6635_288_11}
        />
      </View>
      <View style={styles.View_1055_6636}>
        <View style={styles.View_I1055_6636_280_66}>
          <View style={styles.View_I1055_6636_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00a8/7990/d8c7600daf7b8ff8195f435660e39ec9"
          }}
          style={styles.ImageBackground_I1055_6636_280_70}
        />
        <View style={styles.View_I1055_6636_280_71}>
          <Text style={styles.Text_I1055_6636_280_71}>Dr Elizabeth Wenny</Text>
        </View>
        <View style={styles.View_I1055_6636_280_72}>
          <Text style={styles.Text_I1055_6636_280_72}>Psychiatrist</Text>
        </View>
        <View style={styles.View_I1055_6636_288_12}>
          <Text style={styles.Text_I1055_6636_288_12}>Tokyo, Japan</Text>
        </View>
        <View style={styles.View_I1055_6636_285_3}>
          <View style={styles.View_I1055_6636_285_1}>
            <Text style={styles.Text_I1055_6636_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I1055_6636_285_2}>
            <Text style={styles.Text_I1055_6636_285_2}>Mon 13:30</Text>
          </View>
        </View>
        <View style={styles.View_I1055_6636_288_10}>
          <View style={styles.View_I1055_6636_288_8}>
            <Text style={styles.Text_I1055_6636_288_8}>(5 reviews)</Text>
          </View>
          <View style={styles.View_I1055_6636_288_9}>
            <Text style={styles.Text_I1055_6636_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c82/8624/0425dbc008f20cbe91b366097d811a75"
          }}
          style={styles.ImageBackground_I1055_6636_288_11}
        />
      </View>
      <View style={styles.View_1055_6637}>
        <View style={styles.View_I1055_6637_280_66}>
          <View style={styles.View_I1055_6637_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc1c/ad79/e3447490cf16183cfbcb353f681708f3"
          }}
          style={styles.ImageBackground_I1055_6637_280_70}
        />
        <View style={styles.View_I1055_6637_280_71}>
          <Text style={styles.Text_I1055_6637_280_71}>Dr Cindy Bliep</Text>
        </View>
        <View style={styles.View_I1055_6637_280_72}>
          <Text style={styles.Text_I1055_6637_280_72}>Psychologist</Text>
        </View>
        <View style={styles.View_I1055_6637_288_12}>
          <Text style={styles.Text_I1055_6637_288_12}>Paris, France</Text>
        </View>
        <View style={styles.View_I1055_6637_285_3}>
          <View style={styles.View_I1055_6637_285_1}>
            <Text style={styles.Text_I1055_6637_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I1055_6637_285_2}>
            <Text style={styles.Text_I1055_6637_285_2}>Tue 9:00</Text>
          </View>
        </View>
        <View style={styles.View_I1055_6637_288_10}>
          <View style={styles.View_I1055_6637_288_8}>
            <Text style={styles.Text_I1055_6637_288_8}>(23 reviews)</Text>
          </View>
          <View style={styles.View_I1055_6637_288_9}>
            <Text style={styles.Text_I1055_6637_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b94/5c82/a3230babd4861f63ea22d1dbce27643a"
          }}
          style={styles.ImageBackground_I1055_6637_288_11}
        />
      </View>
      <View style={styles.View_1055_6638}>
        <View style={styles.View_I1055_6638_280_66}>
          <View style={styles.View_I1055_6638_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5950/8fda/9c55c2caeb7e8ce1380f01a45ac46e83"
          }}
          style={styles.ImageBackground_I1055_6638_280_70}
        />
        <View style={styles.View_I1055_6638_280_71}>
          <Text style={styles.Text_I1055_6638_280_71}>Dr Yash Verma</Text>
        </View>
        <View style={styles.View_I1055_6638_280_72}>
          <Text style={styles.Text_I1055_6638_280_72}>
            Sleep Medicine Specialist
          </Text>
        </View>
        <View style={styles.View_I1055_6638_288_12}>
          <Text style={styles.Text_I1055_6638_288_12}>Texas, US</Text>
        </View>
        <View style={styles.View_I1055_6638_285_3}>
          <View style={styles.View_I1055_6638_285_1}>
            <Text style={styles.Text_I1055_6638_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I1055_6638_285_2}>
            <Text style={styles.Text_I1055_6638_285_2}>Tue 10:30</Text>
          </View>
        </View>
        <View style={styles.View_I1055_6638_288_10}>
          <View style={styles.View_I1055_6638_288_8}>
            <Text style={styles.Text_I1055_6638_288_8}>(788 reviews)</Text>
          </View>
          <View style={styles.View_I1055_6638_288_9}>
            <Text style={styles.Text_I1055_6638_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c82/8624/0425dbc008f20cbe91b366097d811a75"
          }}
          style={styles.ImageBackground_I1055_6638_288_11}
        />
      </View>
      <View style={styles.View_1055_6639}>
        <View style={styles.View_I1055_6639_1053_10221}>
          <View style={styles.View_I1055_6639_1053_10221_1053_10170}>
            <View style={styles.View_I1055_6639_1053_10221_1053_10170_4_227} />
          </View>
          <View style={styles.View_I1055_6639_1053_10221_1053_10171}>
            <View style={styles.View_I1055_6639_1053_10221_1053_10172}>
              <Text style={styles.Text_I1055_6639_1053_10221_1053_10172}>
                Filter
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1450/3248/79bc9b7e047ca44a6dc8abe9a178ed03"
              }}
              style={styles.ImageBackground_I1055_6639_1053_10221_1053_10173}
            />
          </View>
        </View>
        <View style={styles.View_I1055_6639_1053_10174}>
          <View style={styles.View_I1055_6639_1053_10174_263_54} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5238/1d56/d8c93f05c5bfb93d65d57e1fc6879df0"
            }}
            style={styles.ImageBackground_I1055_6639_1053_10174_263_55}
          />
          <View style={styles.View_I1055_6639_1053_10174_263_56}>
            <Text style={styles.Text_I1055_6639_1053_10174_263_56}>
              Availability
            </Text>
          </View>
        </View>
        <View style={styles.View_I1055_6639_1053_10214}>
          <View style={styles.View_I1055_6639_1053_10214_263_54} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5238/1d56/d8c93f05c5bfb93d65d57e1fc6879df0"
            }}
            style={styles.ImageBackground_I1055_6639_1053_10214_263_55}
          />
          <View style={styles.View_I1055_6639_1053_10214_263_56}>
            <Text style={styles.Text_I1055_6639_1053_10214_263_56}>
              Location
            </Text>
          </View>
        </View>
        <View style={styles.View_I1055_6639_1053_10175}>
          <View style={styles.View_I1055_6639_1053_10175_280_56} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5238/1d56/d8c93f05c5bfb93d65d57e1fc6879df0"
            }}
            style={styles.ImageBackground_I1055_6639_1053_10175_280_57}
          />
          <View style={styles.View_I1055_6639_1053_10175_280_58}>
            <Text style={styles.Text_I1055_6639_1053_10175_280_58}>
              Communication
            </Text>
          </View>
        </View>
        <View style={styles.View_I1055_6639_1053_10176}>
          <View style={styles.View_I1055_6639_1053_10176_280_61} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5238/1d56/d8c93f05c5bfb93d65d57e1fc6879df0"
            }}
            style={styles.ImageBackground_I1055_6639_1053_10176_280_62}
          />
          <View style={styles.View_I1055_6639_1053_10176_280_63}>
            <Text style={styles.Text_I1055_6639_1053_10176_280_63}>
              Reviews
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("178%") },
  View_1055_6632: {
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
  View_I1055_6632_228_1: {
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
  View_I1055_6632_228_1_4_227: {
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
  View_I1055_6632_228_3: {
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
  View_I1055_6632_228_4: {
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
  View_I1055_6632_228_6: {
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
  Text_I1055_6632_228_6: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1055_6632_228_7: {
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
  ImageBackground_I1055_6632_228_8: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I1055_6632_228_9: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I1055_6632_320_49: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("3%")
  },
  View_I1055_6632_137_21: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1055_6632_230_0: {
    width: wp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_I1055_6632_230_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1055_6632_248_0: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I1055_6632_248_0: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1055_6632_248_1: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I1055_6632_248_1: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1055_6632_248_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I1055_6632_248_2: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1055_6633: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1055_6633_280_66: {
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
  View_I1055_6633_280_66_4_227: {
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
  ImageBackground_I1055_6633_280_70: {
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
  View_I1055_6633_280_71: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I1055_6633_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6633_280_72: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I1055_6633_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6633_288_12: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I1055_6633_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6633_285_3: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I1055_6633_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I1055_6633_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6633_285_2: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I1055_6633_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6633_288_10: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I1055_6633_288_8: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I1055_6633_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6633_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I1055_6633_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I1055_6633_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_1055_6634: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1055_6634_280_66: {
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
  View_I1055_6634_280_66_4_227: {
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
  ImageBackground_I1055_6634_280_70: {
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
  View_I1055_6634_280_71: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I1055_6634_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6634_280_72: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I1055_6634_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6634_288_12: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I1055_6634_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6634_285_3: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I1055_6634_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I1055_6634_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6634_285_2: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I1055_6634_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6634_288_10: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I1055_6634_288_8: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I1055_6634_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6634_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I1055_6634_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I1055_6634_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_1055_6635: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1055_6635_280_66: {
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
  View_I1055_6635_280_66_4_227: {
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
  ImageBackground_I1055_6635_280_70: {
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
  View_I1055_6635_280_71: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I1055_6635_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6635_280_72: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I1055_6635_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6635_288_12: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I1055_6635_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6635_285_3: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I1055_6635_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I1055_6635_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6635_285_2: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I1055_6635_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6635_288_10: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I1055_6635_288_8: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I1055_6635_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6635_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I1055_6635_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I1055_6635_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_1055_6636: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1055_6636_280_66: {
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
  View_I1055_6636_280_66_4_227: {
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
  ImageBackground_I1055_6636_280_70: {
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
  View_I1055_6636_280_71: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I1055_6636_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6636_280_72: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I1055_6636_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6636_288_12: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I1055_6636_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6636_285_3: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I1055_6636_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I1055_6636_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6636_285_2: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I1055_6636_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6636_288_10: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I1055_6636_288_8: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I1055_6636_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6636_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I1055_6636_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I1055_6636_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_1055_6637: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("110%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1055_6637_280_66: {
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
  View_I1055_6637_280_66_4_227: {
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
  ImageBackground_I1055_6637_280_70: {
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
  View_I1055_6637_280_71: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I1055_6637_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6637_280_72: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I1055_6637_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6637_288_12: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I1055_6637_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6637_285_3: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I1055_6637_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I1055_6637_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6637_285_2: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I1055_6637_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6637_288_10: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I1055_6637_288_8: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I1055_6637_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6637_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I1055_6637_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I1055_6637_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_1055_6638: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("110%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1055_6638_280_66: {
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
  View_I1055_6638_280_66_4_227: {
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
  ImageBackground_I1055_6638_280_70: {
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
  View_I1055_6638_280_71: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I1055_6638_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6638_280_72: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I1055_6638_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6638_288_12: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I1055_6638_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6638_285_3: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I1055_6638_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I1055_6638_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6638_285_2: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I1055_6638_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6638_288_10: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I1055_6638_288_8: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I1055_6638_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1055_6638_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I1055_6638_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I1055_6638_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_1055_6639: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1055_6639_1053_10221: {
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
  View_I1055_6639_1053_10221_1053_10170: {
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
  View_I1055_6639_1053_10221_1053_10170_4_227: {
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
  View_I1055_6639_1053_10221_1053_10171: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%")
  },
  View_I1055_6639_1053_10221_1053_10172: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I1055_6639_1053_10221_1053_10172: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1055_6639_1053_10221_1053_10173: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I1055_6639_1053_10174: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1055_6639_1053_10174_263_54: {
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
  ImageBackground_I1055_6639_1053_10174_263_55: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%")
  },
  View_I1055_6639_1053_10174_263_56: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1055_6639_1053_10174_263_56: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1055_6639_1053_10214: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1055_6639_1053_10214_263_54: {
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
  ImageBackground_I1055_6639_1053_10214_263_55: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%")
  },
  View_I1055_6639_1053_10214_263_56: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1055_6639_1053_10214_263_56: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1055_6639_1053_10175: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1055_6639_1053_10175_280_56: {
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
  ImageBackground_I1055_6639_1053_10175_280_57: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%")
  },
  View_I1055_6639_1053_10175_280_58: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1055_6639_1053_10175_280_58: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1055_6639_1053_10176: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1055_6639_1053_10176_280_61: {
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
  ImageBackground_I1055_6639_1053_10176_280_62: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%")
  },
  View_I1055_6639_1053_10176_280_63: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1055_6639_1053_10176_280_63: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "500",
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
