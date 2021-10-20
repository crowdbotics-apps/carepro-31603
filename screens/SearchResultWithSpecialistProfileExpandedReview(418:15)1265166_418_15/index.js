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
      <View style={styles.View_418_16}>
        <View style={styles.View_I418_16_228_1}>
          <View style={styles.View_I418_16_228_1_4_227} />
        </View>
        <View style={styles.View_I418_16_228_3}>
          <View style={styles.View_I418_16_228_4}>
            <View style={styles.View_I418_16_228_6}>
              <Text style={styles.Text_I418_16_228_6}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I418_16_228_7}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I418_16_228_8}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I418_16_228_9}
        />
        <View style={styles.View_I418_16_320_49}>
          <View style={styles.View_I418_16_137_21} />
          <View style={styles.View_I418_16_230_0}>
            <Text style={styles.Text_I418_16_230_0}>Log In/Sign Up</Text>
          </View>
        </View>
        <View style={styles.View_I418_16_248_0}>
          <Text style={styles.Text_I418_16_248_0}>For Patients</Text>
        </View>
        <View style={styles.View_I418_16_248_1}>
          <Text style={styles.Text_I418_16_248_1}>For Specialists</Text>
        </View>
        <View style={styles.View_I418_16_248_2}>
          <Text style={styles.Text_I418_16_248_2}>More</Text>
        </View>
      </View>
      <View style={styles.View_418_585}>
        <View style={styles.View_418_421} />
        <View style={styles.View_418_582}>
          <View style={styles.View_418_422} />
          <View style={styles.View_418_584}>
            <View style={styles.View_I418_584_418_247} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8750/edea/d363b2c3a963cd26ad1be2660357e454"
              }}
              style={styles.ImageBackground_I418_584_418_248}
            />
            <View style={styles.View_I418_584_418_249}>
              <Text style={styles.Text_I418_584_418_249}>Reviews</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d493/7aa4/8a5d87b395988e7816432377fcb57e75"
              }}
              style={styles.ImageBackground_I418_584_418_250}
            />
            <View style={styles.View_I418_584_418_256}>
              <View style={styles.View_I418_584_418_256_365_11}>
                <Text style={styles.Text_I418_584_418_256_365_11}>
                  (238 reviews)
                </Text>
              </View>
              <View style={styles.View_I418_584_418_256_365_12}>
                <Text style={styles.Text_I418_584_418_256_365_12}>
                  4.36 stars
                </Text>
              </View>
            </View>
            <View style={styles.View_I418_584_418_257}>
              <View style={styles.View_I418_584_418_257_418_163} />
              <View style={styles.View_I418_584_418_257_418_165}>
                <Text style={styles.Text_I418_584_418_257_418_165}>
                  Anita Ray
                </Text>
              </View>
              <View style={styles.View_I418_584_418_257_418_167}>
                <Text style={styles.Text_I418_584_418_257_418_167}>
                  Dr Gabriel has been a very understanding person and has helped
                  me get through my seasonal allergy. I would highly recomend
                  him.
                </Text>
              </View>
              <View style={styles.View_I418_584_418_257_418_166}>
                <Text style={styles.Text_I418_584_418_257_418_166}>
                  2 days ago
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5029/604a/fb8c04476bf0e0afed6d5507a3ad8f51"
                }}
                style={styles.ImageBackground_I418_584_418_257_418_175}
              />
            </View>
            <View style={styles.View_I418_584_418_258}>
              <View style={styles.View_I418_584_418_258_418_163} />
              <View style={styles.View_I418_584_418_258_418_165}>
                <Text style={styles.Text_I418_584_418_258_418_165}>
                  Anita Ray
                </Text>
              </View>
              <View style={styles.View_I418_584_418_258_418_167}>
                <Text style={styles.Text_I418_584_418_258_418_167}>
                  Dr Gabriel has been a very understanding person and has helped
                  me get through my seasonal allergy. I would highly recomend
                  him.
                </Text>
              </View>
              <View style={styles.View_I418_584_418_258_418_166}>
                <Text style={styles.Text_I418_584_418_258_418_166}>
                  2 days ago
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5029/604a/fb8c04476bf0e0afed6d5507a3ad8f51"
                }}
                style={styles.ImageBackground_I418_584_418_258_418_175}
              />
            </View>
            <View style={styles.View_I418_584_418_316}>
              <View style={styles.View_I418_584_418_316_418_303}>
                <View style={styles.View_I418_584_418_316_418_304} />
                <View style={styles.View_I418_584_418_316_418_305}>
                  <Text style={styles.Text_I418_584_418_316_418_305}>
                    Thomas Bright
                  </Text>
                </View>
                <View style={styles.View_I418_584_418_316_418_306}>
                  <Text style={styles.Text_I418_584_418_316_418_306}>
                    It has been a great time communicating with Dr Gabriel. His
                    professionalism is reflected in everything he does. I cannot
                    thank him enough for bringing light to my health issues.
                  </Text>
                </View>
                <View style={styles.View_I418_584_418_316_418_307}>
                  <Text style={styles.Text_I418_584_418_316_418_307}>
                    3 days ago
                  </Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5029/604a/fb8c04476bf0e0afed6d5507a3ad8f51"
                  }}
                  style={styles.ImageBackground_I418_584_418_316_418_308}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_418_416}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf67/8cf1/8f901b391b2a3cba95018f08ce84c355"
              }}
              style={styles.ImageBackground_418_417}
            />
          </View>
          <View style={styles.View_418_397}>
            <View style={styles.View_418_398}>
              <Text style={styles.Text_418_398}>Dr Gabriel Bruce</Text>
            </View>
          </View>
          <View style={styles.View_418_395}>
            <View style={styles.View_418_396}>
              <Text style={styles.Text_418_396}>Primary Care Physician</Text>
            </View>
          </View>
          <View style={styles.View_418_399}>
            <View style={styles.View_418_400}>
              <Text style={styles.Text_418_400}>Michigan, United States</Text>
            </View>
          </View>
          <View style={styles.View_418_392}>
            <View style={styles.View_418_393}>
              <Text style={styles.Text_418_393}>Introduction</Text>
            </View>
            <View style={styles.View_418_394}>
              <Text style={styles.Text_418_394}>
                Hi, I’m Dr Gabriel Bruce and I specialist in minor to mild
                general health issues like seasonal flu, fever, etc.
              </Text>
            </View>
          </View>
          <View style={styles.View_418_389}>
            <View style={styles.View_418_390}>
              <Text style={styles.Text_418_390}>Licensing</Text>
            </View>
            <View style={styles.View_418_391}>
              <Text style={styles.Text_418_391}>
                Licensed and approved by the state of Michigan
              </Text>
            </View>
          </View>
          <View style={styles.View_418_385}>
            <View style={styles.View_418_386}>
              <Text style={styles.Text_418_386}>Certification</Text>
            </View>
            <View style={styles.View_418_387}>
              <Text style={styles.Text_418_387}>
                Bachlor’s Degree Physics - University of Michigan
              </Text>
            </View>
            <View style={styles.View_418_388}>
              <Text style={styles.Text_418_388}>USMLE - Michigan</Text>
            </View>
          </View>
          <View style={styles.View_418_382}>
            <View style={styles.View_418_383} />
            <View style={styles.View_418_384}>
              <Text style={styles.Text_418_384}>Book an appointment</Text>
            </View>
          </View>
          <View style={styles.View_418_418}>
            <View style={styles.View_418_419}>
              <Text style={styles.Text_418_419}>Next Availability</Text>
            </View>
            <View style={styles.View_418_420}>
              <Text style={styles.Text_418_420}>14:00</Text>
            </View>
          </View>
          <View style={styles.View_418_380}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/314e/922c/0ff357283eb5cdd9ce89f1ae2d1431f9"
              }}
              style={styles.ImageBackground_418_381}
            />
          </View>
          <View style={styles.View_418_378}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68b4/f570/419b313f6e3fae2f4a28ca9e2efcdee0"
              }}
              style={styles.ImageBackground_418_379}
            />
          </View>
          <View style={styles.View_418_376}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7085/219e/b44215a13f8a1bd43b23e438ae39b538"
              }}
              style={styles.ImageBackground_418_377}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("197%") },
  View_418_16: {
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
  View_I418_16_228_1: {
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
  View_I418_16_228_1_4_227: {
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
  View_I418_16_228_3: {
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
  View_I418_16_228_4: {
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
  View_I418_16_228_6: {
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
  Text_I418_16_228_6: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I418_16_228_7: {
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
  ImageBackground_I418_16_228_8: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I418_16_228_9: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I418_16_320_49: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("3%")
  },
  View_I418_16_137_21: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I418_16_230_0: {
    width: wp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_I418_16_230_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I418_16_248_0: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I418_16_248_0: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I418_16_248_1: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I418_16_248_1: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I418_16_248_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I418_16_248_2: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_418_585: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("167%"),
    minHeight: hp("167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_418_421: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_418_582: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_418_422: {
    width: wp("87%"),
    height: hp("167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_418_584: {
    width: wp("80%"),
    height: hp("63%"),
    top: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I418_584_418_247: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I418_584_418_248: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("7%")
  },
  View_I418_584_418_249: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I418_584_418_249: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I418_584_418_250: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("5%")
  },
  View_I418_584_418_256: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I418_584_418_256_365_11: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I418_584_418_256_365_11: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I418_584_418_256_365_12: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I418_584_418_256_365_12: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I418_584_418_257: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I418_584_418_257_418_163: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I418_584_418_257_418_165: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I418_584_418_257_418_165: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I418_584_418_257_418_167: {
    flexGrow: 1,
    width: wp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_I418_584_418_257_418_167: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I418_584_418_257_418_166: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I418_584_418_257_418_166: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I418_584_418_257_418_175: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("5%")
  },
  View_I418_584_418_258: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I418_584_418_258_418_163: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I418_584_418_258_418_165: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I418_584_418_258_418_165: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I418_584_418_258_418_167: {
    flexGrow: 1,
    width: wp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_I418_584_418_258_418_167: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I418_584_418_258_418_166: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I418_584_418_258_418_166: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I418_584_418_258_418_175: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("5%")
  },
  View_I418_584_418_316: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I418_584_418_316_418_303: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I418_584_418_316_418_304: {
    width: wp("80%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I418_584_418_316_418_305: {
    width: wp("11%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I418_584_418_316_418_305: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I418_584_418_316_418_306: {
    width: wp("74%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I418_584_418_316_418_306: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I418_584_418_316_418_307: {
    width: wp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    justifyContent: "flex-start"
  },
  Text_I418_584_418_316_418_307: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I418_584_418_316_418_308: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  View_418_416: {
    width: wp("14%"),
    height: hp("27%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_418_417: {
    width: wp("14%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_418_397: {
    width: wp("18%"),
    height: hp("4%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_418_398: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_418_398: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_418_395: {
    width: wp("19%"),
    height: hp("4%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_418_396: {
    width: wp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_418_396: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_418_399: {
    width: wp("12%"),
    height: hp("4%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_418_400: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_418_400: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_418_392: {
    width: wp("65%"),
    height: hp("10%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_418_393: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_418_393: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_418_394: {
    width: wp("80%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_418_394: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_418_389: {
    width: wp("30%"),
    height: hp("10%"),
    top: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_418_390: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_418_390: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_418_391: {
    width: wp("30%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_418_391: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_418_385: {
    width: wp("31%"),
    height: hp("16%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_418_386: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_418_386: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_418_387: {
    width: wp("31%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_418_387: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_418_388: {
    width: wp("11%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_418_388: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_418_382: {
    width: wp("21%"),
    height: hp("7%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_418_383: {
    width: wp("21%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_418_384: {
    width: wp("16%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_418_384: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_418_418: {
    width: wp("14%"),
    height: hp("4%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_418_419: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_418_419: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_418_420: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_418_420: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_418_380: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_418_381: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_418_378: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_418_379: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_418_376: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_418_377: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
