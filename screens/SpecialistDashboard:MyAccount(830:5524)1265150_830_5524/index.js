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
      <View style={styles.View_830_5525}>
        <View style={styles.View_I830_5525_199_344}>
          <View style={styles.View_I830_5525_199_344_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5979/5b08/877131cfaf519bff9199829a08dfeb63"
          }}
          style={styles.ImageBackground_I830_5525_199_345}
        />
        <View style={styles.View_I830_5525_199_346}>
          <View style={styles.View_I830_5525_199_347}>
            <View style={styles.View_I830_5525_199_349}>
              <Text style={styles.Text_I830_5525_199_349}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I830_5525_199_350}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I830_5525_199_351}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I830_5525_199_352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/171b/ad41/cca1fc9a4c61a69f2073888e1559d679"
          }}
          style={styles.ImageBackground_I830_5525_199_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/85c9/7f4f5815b12675432f7bce135fb62d6e"
          }}
          style={styles.ImageBackground_I830_5525_199_354}
        />
      </View>
      <View style={styles.View_849_5887}>
        <View style={styles.View_830_5526}>
          <View style={styles.View_I830_5526_4_227} />
        </View>
      </View>
      <View style={styles.View_882_5735}>
        <View style={styles.View_I882_5735_830_5526}>
          <View style={styles.View_I882_5735_830_5526_4_227} />
        </View>
      </View>
      <View style={styles.View_878_5733}>
        <View style={styles.View_I878_5733_807_5379}>
          <Text style={styles.Text_I878_5733_807_5379}>My Profile</Text>
        </View>
      </View>
      <View style={styles.View_883_5738}>
        <View style={styles.View_I883_5738_807_5379}>
          <Text style={styles.Text_I883_5738_807_5379}>Payment</Text>
        </View>
      </View>
      <View style={styles.View_906_5730}>
        <View style={styles.View_I906_5730_807_5379}>
          <Text style={styles.Text_I906_5730_807_5379}>Withdrawal</Text>
        </View>
      </View>
      <View style={styles.View_830_5530}>
        <View style={styles.View_I830_5530_199_444}>
          <View style={styles.View_I830_5530_199_445}>
            <View style={styles.View_I830_5530_199_445_4_227} />
          </View>
        </View>
        <View style={styles.View_I830_5530_199_446}>
          <View style={styles.View_I830_5530_199_447}>
            <Text style={styles.Text_I830_5530_199_447}>My Health</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbcc/2f1e/81abeac8cf8ec8378572a9b6dfbf3974"
            }}
            style={styles.ImageBackground_I830_5530_199_448}
          />
        </View>
        <View style={styles.View_I830_5530_199_450}>
          <View style={styles.View_I830_5530_199_451}>
            <Text style={styles.Text_I830_5530_199_451}>Specislist Area</Text>
          </View>
          <View style={styles.View_I830_5530_199_452}>
            <View style={styles.View_I830_5530_199_453}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/984b/92fa/664da26c3fb9b69746b556885206648d"
                }}
                style={styles.ImageBackground_I830_5530_199_454}
              />
            </View>
            <View style={styles.View_I830_5530_199_456}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34b/3fad/fc809c0af8ff375c0c1d3e6770c999b4"
                }}
                style={styles.ImageBackground_I830_5530_199_457}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I830_5530_199_459}>
          <View style={styles.View_I830_5530_199_460}>
            <Text style={styles.Text_I830_5530_199_460}>Friends Area</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff31/53eb/73d3d7306c8dbccc98301d70467a39f7"
            }}
            style={styles.ImageBackground_I830_5530_199_461}
          />
        </View>
        <View style={styles.View_I830_5530_199_463}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6a6/d86f/210c1d275b8c8f0067359d58037f63b0"
            }}
            style={styles.ImageBackground_I830_5530_199_464}
          />
          <View style={styles.View_I830_5530_199_465}>
            <View style={styles.View_I830_5530_199_466}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3155/9060/f25304a55c8d3ee3cadb0523048eb23b"
                }}
                style={styles.ImageBackground_I830_5530_199_467}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I830_5530_199_469}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5933/03b8/c08f024b145b53dd98ea067662c58dab"
            }}
            style={styles.ImageBackground_I830_5530_199_470}
          />
          <View style={styles.View_I830_5530_199_471}>
            <View style={styles.View_I830_5530_199_472}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a6/6501/690ec443ee5966d5124104068518bdb1"
                }}
                style={styles.ImageBackground_I830_5530_199_473}
              />
            </View>
            <View style={styles.View_I830_5530_199_478}>
              <Text style={styles.Text_I830_5530_199_478}>Dashboard</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_848_5847}>
        <View style={styles.View_I848_5847_836_5670}>
          <View style={styles.View_I848_5847_836_5670_836_5663} />
        </View>
        <View style={styles.View_I848_5847_836_5671}>
          <View style={styles.View_I848_5847_836_5671_836_5664}>
            <Text style={styles.Text_I848_5847_836_5671_836_5664}>
              Short Bio
            </Text>
          </View>
        </View>
        <View style={styles.View_I848_5847_836_5672}>
          <View style={styles.View_I848_5847_836_5672_836_5665}>
            <Text style={styles.Text_I848_5847_836_5672_836_5665}>
              Hi, I’m Dr Josh Muronne and I specialise in minor to mild general
              health issues like seasonal flu, fever, etc.
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7917/2bac/0ec01824ab240d5b258e27d779d7c4a6"
          }}
          style={styles.ImageBackground_I848_5847_836_5673}
        />
      </View>
      <View style={styles.View_830_5854}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4606/8eb9/e8ef90343761899b7c69ac86bc3cb3d4"
          }}
          style={styles.ImageBackground_830_5851}
        />
        <View style={styles.View_830_5852}>
          <View style={styles.View_I830_5852_830_5847}>
            <Text style={styles.Text_I830_5852_830_5847}>Share</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36a7/9149/aa95a16a90d4960b45a20c4712d1bb5e"
          }}
          style={styles.ImageBackground_830_5853}
        />
      </View>
      <View style={styles.View_849_5855}>
        <View style={styles.View_I849_5855_849_5866}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11c0/c588/60bc898739e4bb27f84b171bf8347532"
            }}
            style={styles.ImageBackground_I849_5855_849_5866_803_5386}
          />
          <View style={styles.View_I849_5855_849_5866_803_5397}>
            <View style={styles.View_I849_5855_849_5866_803_5397_803_5391}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ee/8cd5/8a88a8d0a8b4dbd5d772e2eafffdb386"
                }}
                style={
                  styles.ImageBackground_I849_5855_849_5866_803_5397_803_5392
                }
              />
            </View>
            <View style={styles.View_I849_5855_849_5866_803_5397_803_5387}>
              <View
                style={
                  styles.View_I849_5855_849_5866_803_5397_803_5387_759_4856
                }
              >
                <Text
                  style={
                    styles.Text_I849_5855_849_5866_803_5397_803_5387_759_4856
                  }
                >
                  Add
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_849_5890}>
        <View style={styles.View_I849_5890_849_5866}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11c0/c588/60bc898739e4bb27f84b171bf8347532"
            }}
            style={styles.ImageBackground_I849_5890_849_5866_803_5386}
          />
          <View style={styles.View_I849_5890_849_5866_803_5397}>
            <View style={styles.View_I849_5890_849_5866_803_5397_803_5391}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ee/8cd5/8a88a8d0a8b4dbd5d772e2eafffdb386"
                }}
                style={
                  styles.ImageBackground_I849_5890_849_5866_803_5397_803_5392
                }
              />
            </View>
            <View style={styles.View_I849_5890_849_5866_803_5397_803_5387}>
              <View
                style={
                  styles.View_I849_5890_849_5866_803_5397_803_5387_759_4856
                }
              >
                <Text
                  style={
                    styles.Text_I849_5890_849_5866_803_5397_803_5387_759_4856
                  }
                >
                  Add
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_858_5734}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92a4/b3b9/58e8b3b114670a99144bff1cad6fe4bd"
          }}
          style={styles.ImageBackground_838_6023}
        />
      </View>
      <View style={styles.View_858_5733}>
        <View style={styles.View_838_6025}>
          <Text style={styles.Text_838_6025}>Dr Josh Muronne</Text>
        </View>
      </View>
      <View style={styles.View_858_5732}>
        <View style={styles.View_838_6027}>
          <Text style={styles.Text_838_6027}>General Practitioner</Text>
        </View>
      </View>
      <View style={styles.View_858_5731}>
        <View style={styles.View_838_6029}>
          <Text style={styles.Text_838_6029}>Michigan, United States</Text>
        </View>
      </View>
      <View style={styles.View_849_5889}>
        <View style={styles.View_848_5858}>
          <Text style={styles.Text_848_5858}>Licensing</Text>
        </View>
        <View style={styles.View_848_5859}>
          <Text style={styles.Text_848_5859}>
            Licensed and approved by the state of Michigan
          </Text>
        </View>
      </View>
      <View style={styles.View_849_5888}>
        <View style={styles.View_848_5861}>
          <Text style={styles.Text_848_5861}>Certification</Text>
        </View>
        <View style={styles.View_848_5862}>
          <Text style={styles.Text_848_5862}>
            Bachlor’s Degree Physics - University of Michigan
          </Text>
        </View>
        <View style={styles.View_848_5863}>
          <Text style={styles.Text_848_5863}>USMLE - Michigan</Text>
        </View>
      </View>
      <View style={styles.View_849_6284}>
        <View style={styles.View_849_6269}>
          <View style={styles.View_I849_6269_377_91} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2aa/5601/0ec744428263a4b258678af7f7e8804d"
            }}
            style={styles.ImageBackground_I849_6269_377_94}
          />
          <View style={styles.View_I849_6269_377_95}>
            <Text style={styles.Text_I849_6269_377_95}>Reviews</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4fd/d923/5421f862d1ae4521109c9beb49655b55"
            }}
            style={styles.ImageBackground_I849_6269_389_15}
          />
          <View style={styles.View_I849_6269_389_1}>
            <View style={styles.View_I849_6269_389_1_365_11}>
              <Text style={styles.Text_I849_6269_389_1_365_11}>
                (238 reviews)
              </Text>
            </View>
            <View style={styles.View_I849_6269_389_1_365_12}>
              <Text style={styles.Text_I849_6269_389_1_365_12}>4.36 stars</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_906_5729}>
        <View style={styles.View_890_5757} />
        <View style={styles.View_890_5759}>
          <Text style={styles.Text_890_5759}>Balance Available</Text>
        </View>
        <View style={styles.View_890_5771}>
          <Text style={styles.Text_890_5771}>$ 10,398</Text>
        </View>
      </View>
      <View style={styles.View_906_5728}>
        <View style={styles.View_898_5761} />
        <View style={styles.View_898_5762}>
          <View style={styles.View_I898_5762_726_4830}>
            <Text style={styles.Text_I898_5762_726_4830}>PayPal</Text>
          </View>
        </View>
        <View style={styles.View_898_5764}>
          <View style={styles.View_I898_5764_768_5062}>
            <Text style={styles.Text_I898_5764_768_5062}>
              joshmuronne@gmail.com
            </Text>
          </View>
        </View>
        <View style={styles.View_898_5765}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdc8/759e/f807006cfdc0af8bbda703f79c1c5201"
            }}
            style={styles.ImageBackground_I898_5765_726_4836}
          />
        </View>
      </View>
      <View style={styles.View_907_5748}>
        <View style={styles.View_I907_5748_812_5664}>
          <View style={styles.View_I907_5748_812_5666}>
            <Text style={styles.Text_I907_5748_812_5666}>
              Amount to withdraw
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_907_5754}>
        <View style={styles.View_I907_5754_721_4889} />
        <View style={styles.View_I907_5754_721_4890}>
          <Text style={styles.Text_I907_5754_721_4890}>Withdraw</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("335%") },
  View_830_5525: {
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
  View_I830_5525_199_344: {
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
  View_I830_5525_199_344_4_227: {
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
  ImageBackground_I830_5525_199_345: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("3%")
  },
  View_I830_5525_199_346: {
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
  View_I830_5525_199_347: {
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
  View_I830_5525_199_349: {
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
  Text_I830_5525_199_349: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I830_5525_199_350: {
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
  ImageBackground_I830_5525_199_351: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I830_5525_199_352: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I830_5525_199_353: {
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
  ImageBackground_I830_5525_199_354: {
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
  View_849_5887: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("139%"),
    minHeight: hp("139%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_830_5526: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("139%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I830_5526_4_227: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("139%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_882_5735: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("89%"),
    minHeight: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("172%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I882_5735_830_5526: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I882_5735_830_5526_4_227: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_878_5733: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I878_5733_807_5379: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I878_5733_807_5379: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_883_5738: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("179%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I883_5738_807_5379: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I883_5738_807_5379: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_906_5730: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("210%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I906_5730_807_5379: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I906_5730_807_5379: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_830_5530: {
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
  View_I830_5530_199_444: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_I830_5530_199_445: {
    width: wp("100%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I830_5530_199_445_4_227: {
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
  View_I830_5530_199_446: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("12%")
  },
  View_I830_5530_199_447: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I830_5530_199_447: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I830_5530_199_448: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I830_5530_199_450: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("12%")
  },
  View_I830_5530_199_451: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I830_5530_199_451: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I830_5530_199_452: {
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
  View_I830_5530_199_453: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I830_5530_199_454: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I830_5530_199_456: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I830_5530_199_457: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I830_5530_199_459: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("12%")
  },
  View_I830_5530_199_460: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I830_5530_199_460: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I830_5530_199_461: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I830_5530_199_463: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%")
  },
  ImageBackground_I830_5530_199_464: {
    width: wp("7%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I830_5530_199_465: {
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
  View_I830_5530_199_466: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I830_5530_199_467: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I830_5530_199_469: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%")
  },
  ImageBackground_I830_5530_199_470: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I830_5530_199_471: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I830_5530_199_472: {
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
  ImageBackground_I830_5530_199_473: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I830_5530_199_478: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I830_5530_199_478: {
    color: "rgba(28, 200, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_848_5847: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I848_5847_836_5670: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I848_5847_836_5670_836_5663: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I848_5847_836_5671: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I848_5847_836_5671_836_5664: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I848_5847_836_5671_836_5664: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I848_5847_836_5672: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I848_5847_836_5672_836_5665: {
    flexGrow: 1,
    width: wp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I848_5847_836_5672_836_5665: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I848_5847_836_5673: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("15%")
  },
  View_830_5854: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("44%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_830_5851: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_830_5852: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I830_5852_830_5847: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I830_5852_830_5847: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_830_5853: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_849_5855: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("99%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I849_5855_849_5866: {
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
  ImageBackground_I849_5855_849_5866_803_5386: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I849_5855_849_5866_803_5397: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I849_5855_849_5866_803_5397_803_5391: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I849_5855_849_5866_803_5397_803_5392: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I849_5855_849_5866_803_5397_803_5387: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I849_5855_849_5866_803_5397_803_5387_759_4856: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I849_5855_849_5866_803_5397_803_5387_759_4856: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_849_5890: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I849_5890_849_5866: {
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
  ImageBackground_I849_5890_849_5866_803_5386: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I849_5890_849_5866_803_5397: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I849_5890_849_5866_803_5397_803_5391: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I849_5890_849_5866_803_5397_803_5392: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I849_5890_849_5866_803_5397_803_5387: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I849_5890_849_5866_803_5397_803_5387_759_4856: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I849_5890_849_5866_803_5397_803_5387_759_4856: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_858_5734: {
    width: wp("14%"),
    height: hp("27%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_838_6023: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_858_5733: {
    width: wp("18%"),
    height: hp("4%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_838_6025: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_838_6025: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_858_5732: {
    width: wp("19%"),
    height: hp("4%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_838_6027: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_838_6027: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_858_5731: {
    width: wp("21%"),
    height: hp("4%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_838_6029: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_838_6029: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_849_5889: {
    width: wp("30%"),
    height: hp("10%"),
    top: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_848_5858: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_848_5858: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_848_5859: {
    flexGrow: 1,
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_848_5859: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_849_5888: {
    width: wp("31%"),
    height: hp("16%"),
    top: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_848_5861: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_848_5861: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_848_5862: {
    flexGrow: 1,
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_848_5862: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_848_5863: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_848_5863: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_849_6284: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("139%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_849_6269: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I849_6269_377_91: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I849_6269_377_94: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("5%")
  },
  View_I849_6269_377_95: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I849_6269_377_95: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I849_6269_389_15: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("5%")
  },
  View_I849_6269_389_1: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I849_6269_389_1_365_11: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I849_6269_389_1_365_11: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I849_6269_389_1_365_12: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I849_6269_389_1_365_12: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_906_5729: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("189%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_890_5757: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_890_5759: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_890_5759: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_890_5771: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_890_5771: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_906_5728: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("218%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_898_5761: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_898_5762: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I898_5762_726_4830: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I898_5762_726_4830: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_898_5764: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I898_5764_768_5062: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I898_5764_768_5062: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_898_5765: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I898_5765_726_4836: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_907_5748: {
    width: wp("83%"),
    height: hp("9%"),
    top: hp("234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I907_5748_812_5664: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I907_5748_812_5666: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I907_5748_812_5666: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_907_5754: {
    width: wp("83%"),
    height: hp("8%"),
    top: hp("247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I907_5754_721_4889: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I907_5754_721_4890: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I907_5754_721_4890: {
    color: "rgba(255, 255, 255, 1)",
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
