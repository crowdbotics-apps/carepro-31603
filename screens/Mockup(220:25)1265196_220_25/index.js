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
      <View style={styles.View_220_133}>
        <View style={styles.View_220_134}>
          <View style={styles.View_I220_134_4_227} />
        </View>
        <View style={styles.View_220_135}>
          <Text style={styles.Text_220_135}>Upcoming appointments</Text>
        </View>
        <View style={styles.View_220_136} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/821b/9ef8/d439524ca5436f04b64023b0a5d99486"
          }}
          style={styles.ImageBackground_220_137}
        />
        <View style={styles.View_220_138}>
          <Text style={styles.Text_220_138}>Dr Gabriel Bruce</Text>
        </View>
        <View style={styles.View_220_139}>
          <Text style={styles.Text_220_139}>General Practitioner</Text>
        </View>
        <View style={styles.View_220_140}>
          <Text style={styles.Text_220_140}>Monday, 26th of April 2021</Text>
        </View>
        <View style={styles.View_220_141}>
          <Text style={styles.Text_220_141}>2 Hours 41 Minutes</Text>
        </View>
        <View style={styles.View_220_142}>
          <Text style={styles.Text_220_142}>left</Text>
        </View>
        <View style={styles.View_220_143} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff36/8fca/4c287fa62554c36dcd684f0addc025b4"
          }}
          style={styles.ImageBackground_220_144}
        />
        <View style={styles.View_220_145}>
          <Text style={styles.Text_220_145}>Dr Sandra Geir</Text>
        </View>
        <View style={styles.View_220_146}>
          <Text style={styles.Text_220_146}>Psychologist &amp; Therapist</Text>
        </View>
        <View style={styles.View_220_147}>
          <Text style={styles.Text_220_147}>Wednesday, 28th of April 2021</Text>
        </View>
        <View style={styles.View_220_148}>
          <Text style={styles.Text_220_148}>2 Days 2 Hours 41 Minutes</Text>
        </View>
        <View style={styles.View_220_149}>
          <Text style={styles.Text_220_149}>left</Text>
        </View>
      </View>
      <View style={styles.View_220_28}>
        <View style={styles.View_220_29}>
          <View style={styles.View_I220_29_4_227} />
        </View>
      </View>
      <View style={styles.View_220_40}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5933/03b8/c08f024b145b53dd98ea067662c58dab"
          }}
          style={styles.ImageBackground_220_41}
        />
        <View style={styles.View_220_42}>
          <View style={styles.View_220_43}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a6/6501/690ec443ee5966d5124104068518bdb1"
              }}
              style={styles.ImageBackground_220_44}
            />
          </View>
          <View style={styles.View_220_49}>
            <Text style={styles.Text_220_49}>Dashboard</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6a6/d86f/210c1d275b8c8f0067359d58037f63b0"
        }}
        style={styles.ImageBackground_220_50}
      />
      <View style={styles.View_220_51}>
        <View style={styles.View_220_52}>
          <Text style={styles.Text_220_52}>My Health</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbcc/2f1e/81abeac8cf8ec8378572a9b6dfbf3974"
          }}
          style={styles.ImageBackground_220_53}
        />
      </View>
      <View style={styles.View_220_55}>
        <View style={styles.View_220_56}>
          <Text style={styles.Text_220_56}>Specislist Area</Text>
        </View>
        <View style={styles.View_220_57}>
          <View style={styles.View_220_58}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/984b/92fa/664da26c3fb9b69746b556885206648d"
              }}
              style={styles.ImageBackground_220_59}
            />
          </View>
          <View style={styles.View_220_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34b/3fad/fc809c0af8ff375c0c1d3e6770c999b4"
              }}
              style={styles.ImageBackground_220_62}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_220_64}>
        <View style={styles.View_220_65}>
          <Text style={styles.Text_220_65}>Friends Area</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff31/53eb/73d3d7306c8dbccc98301d70467a39f7"
          }}
          style={styles.ImageBackground_220_66}
        />
      </View>
      <View style={styles.View_220_68}>
        <View style={styles.View_220_69}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3155/9060/f25304a55c8d3ee3cadb0523048eb23b"
            }}
            style={styles.ImageBackground_220_70}
          />
        </View>
      </View>
      <View style={styles.View_220_87}>
        <View style={styles.View_220_88}>
          <View style={styles.View_I220_88_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5979/5b08/877131cfaf519bff9199829a08dfeb63"
          }}
          style={styles.ImageBackground_220_89}
        />
        <View style={styles.View_220_90}>
          <View style={styles.View_220_91}>
            <View style={styles.View_220_93}>
              <Text style={styles.Text_220_93}>Search</Text>
            </View>
          </View>
          <View style={styles.View_220_94}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_220_95}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_220_96}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/171b/ad41/cca1fc9a4c61a69f2073888e1559d679"
          }}
          style={styles.ImageBackground_220_97}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/85c9/7f4f5815b12675432f7bce135fb62d6e"
          }}
          style={styles.ImageBackground_220_98}
        />
      </View>
      <View style={styles.View_220_99}>
        <View style={styles.View_220_100}>
          <View style={styles.View_I220_100_4_227} />
        </View>
        <View style={styles.View_220_101}>
          <Text style={styles.Text_220_101}>Prescription alert</Text>
        </View>
        <View style={styles.View_220_102}>
          <View style={styles.View_220_103} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b43/abff/0dac793d6c3b9990c5ad4e1269fd0907"
            }}
            style={styles.ImageBackground_220_104}
          />
          <View style={styles.View_220_105}>
            <Text style={styles.Text_220_105}>Laxofit</Text>
          </View>
          <View style={styles.View_220_106}>
            <Text style={styles.Text_220_106}>One Capsule</Text>
          </View>
          <View style={styles.View_220_107}>
            <Text style={styles.Text_220_107}>11 AM</Text>
          </View>
        </View>
        <View style={styles.View_220_108}>
          <View style={styles.View_220_109} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c002/7e11/3aa778bead3f8092f4df4c16490038b3"
            }}
            style={styles.ImageBackground_220_110}
          />
          <View style={styles.View_220_111}>
            <Text style={styles.Text_220_111}>Cough  Syrup</Text>
          </View>
          <View style={styles.View_220_112}>
            <Text style={styles.Text_220_112}>Two Tablespoon</Text>
          </View>
          <View style={styles.View_220_113}>
            <Text style={styles.Text_220_113}>9 AM</Text>
          </View>
        </View>
        <View style={styles.View_220_114}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a001/d42a/b0fe994c74700052ed9fcd149360c1b2"
            }}
            style={styles.ImageBackground_220_115}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dd5/0e18/d9561f50a237c0728338bd35941e1bf5"
            }}
            style={styles.ImageBackground_220_116}
          />
          <View style={styles.View_220_117}>
            <Text style={styles.Text_220_117}>DayQuil</Text>
          </View>
          <View style={styles.View_220_118}>
            <Text style={styles.Text_220_118}>One Liquicap</Text>
          </View>
          <View style={styles.View_220_119}>
            <Text style={styles.Text_220_119}>9 AM</Text>
          </View>
        </View>
        <View style={styles.View_220_120}>
          <View style={styles.View_220_121} />
          <View style={styles.View_220_122}>
            <View style={styles.View_220_123}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3784/2da1/1ccb9305878e4b560ffcdc62fb401c0c"
                }}
                style={styles.ImageBackground_220_124}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_220_126}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/091d/8da7/4efd9608aff2bd72591117a20960c217"
          }}
          style={styles.ImageBackground_220_127}
        />
        <View style={styles.View_220_128}>
          <Text style={styles.Text_220_128}>Hi Sarah!</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("118%") },
  View_220_133: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("99%")
  },
  View_220_134: {
    width: wp("93%"),
    height: hp("68%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I220_134_4_227: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_220_135: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_220_135: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_220_136: {
    width: wp("86%"),
    height: hp("20%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_220_137: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("20%"),
    resizeMode: "cover"
  },
  View_220_138: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("22%"),
    justifyContent: "center"
  },
  Text_220_138: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_220_139: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_220_139: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_220_140: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("30%"),
    justifyContent: "center"
  },
  Text_220_140: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_220_141: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("25%"),
    justifyContent: "center"
  },
  Text_220_141: {
    color: "rgba(237, 46, 126, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_220_142: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("25%"),
    justifyContent: "center"
  },
  Text_220_142: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_220_143: {
    width: wp("86%"),
    height: hp("20%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_220_144: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("44%"),
    resizeMode: "cover"
  },
  View_220_145: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("46%"),
    justifyContent: "center"
  },
  Text_220_145: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_220_146: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("50%"),
    justifyContent: "center"
  },
  Text_220_146: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_220_147: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("55%"),
    justifyContent: "center"
  },
  Text_220_147: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_220_148: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("50%"),
    justifyContent: "center"
  },
  Text_220_148: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_220_149: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("50%"),
    justifyContent: "center"
  },
  Text_220_149: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_220_28: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("105%")
  },
  View_220_29: {
    width: wp("100%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I220_29_4_227: {
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
  View_220_40: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("108%")
  },
  ImageBackground_220_41: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_220_42: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_220_43: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_220_44: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_220_49: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_220_49: {
    color: "rgba(28, 200, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_220_50: {
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("98%")
  },
  View_220_51: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("109%")
  },
  View_220_52: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_220_52: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_220_53: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_220_55: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("109%")
  },
  View_220_56: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_220_56: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_220_57: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_220_58: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_220_59: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_220_61: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_220_62: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_220_64: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("109%")
  },
  View_220_65: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_220_65: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_220_66: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_220_68: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("102%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_220_69: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_220_70: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_220_87: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_220_88: {
    width: wp("100%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I220_88_4_227: {
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
  ImageBackground_220_89: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("3%")
  },
  View_220_90: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("4%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_220_91: {
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
  View_220_93: {
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
  Text_220_93: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_220_94: {
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
  ImageBackground_220_95: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_220_96: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_220_97: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("4%"),
    resizeMode: "cover"
  },
  ImageBackground_220_98: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("4%"),
    resizeMode: "cover"
  },
  View_220_99: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("41%")
  },
  View_220_100: {
    width: wp("93%"),
    height: hp("49%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I220_100_4_227: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_220_101: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_220_101: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_220_102: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("16%")
  },
  View_220_103: {
    width: wp("14%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_220_104: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_220_105: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_220_105: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_220_106: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("13%"),
    justifyContent: "center"
  },
  Text_220_106: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_220_107: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("19%"),
    justifyContent: "center"
  },
  Text_220_107: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_220_108: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("16%")
  },
  View_220_109: {
    width: wp("14%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_220_110: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_220_111: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_220_111: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_220_112: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("13%"),
    justifyContent: "center"
  },
  Text_220_112: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_220_113: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("19%"),
    justifyContent: "center"
  },
  Text_220_113: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_220_114: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("16%")
  },
  ImageBackground_220_115: {
    width: wp("14%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_220_116: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_220_117: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_220_117: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_220_118: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("13%"),
    justifyContent: "center"
  },
  Text_220_118: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_220_119: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("19%"),
    justifyContent: "center"
  },
  Text_220_119: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_220_120: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("6%")
  },
  View_220_121: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_220_122: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_220_123: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_220_124: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_220_126: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("23%")
  },
  ImageBackground_220_127: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_220_128: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_220_128: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "500",
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
