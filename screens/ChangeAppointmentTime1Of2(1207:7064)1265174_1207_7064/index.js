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
      <View style={styles.View_1207_7065}>
        <View style={styles.View_I1207_7065_199_344}>
          <View style={styles.View_I1207_7065_199_344_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5979/5b08/877131cfaf519bff9199829a08dfeb63"
          }}
          style={styles.ImageBackground_I1207_7065_199_345}
        />
        <View style={styles.View_I1207_7065_199_346}>
          <View style={styles.View_I1207_7065_199_347}>
            <View style={styles.View_I1207_7065_199_349}>
              <Text style={styles.Text_I1207_7065_199_349}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I1207_7065_199_350}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I1207_7065_199_351}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I1207_7065_199_352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/171b/ad41/cca1fc9a4c61a69f2073888e1559d679"
          }}
          style={styles.ImageBackground_I1207_7065_199_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/85c9/7f4f5815b12675432f7bce135fb62d6e"
          }}
          style={styles.ImageBackground_I1207_7065_199_354}
        />
      </View>
      <View style={styles.View_1209_7455}>
        <View style={styles.View_1207_7168} />
        <View style={styles.View_1207_7169}>
          <Text style={styles.Text_1207_7169}>Change Appointment Time</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/645f/72113d275c2303233fc6bbece336b01b"
          }}
          style={styles.ImageBackground_1207_7170}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d30/745a/a0ab80129ffcf227c519cd9350da346f"
          }}
          style={styles.ImageBackground_1207_7172}
        />
        <View style={styles.View_1207_7174}>
          <View style={styles.View_I1207_7174_426_3}>
            <Text style={styles.Text_I1207_7174_426_3}>Time Slot</Text>
          </View>
        </View>
        <View style={styles.View_1207_7175}>
          <View style={styles.View_I1207_7175_438_2}>
            <Text style={styles.Text_I1207_7175_438_2}>7:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1207_7175_438_3}
          />
        </View>
        <View style={styles.View_1207_7176}>
          <View style={styles.View_I1207_7176_438_2}>
            <Text style={styles.Text_I1207_7176_438_2}>7:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1207_7176_438_3}
          />
        </View>
        <View style={styles.View_1207_7177}>
          <View style={styles.View_I1207_7177_438_2}>
            <Text style={styles.Text_I1207_7177_438_2}>8:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1207_7177_438_3}
          />
        </View>
        <View style={styles.View_1207_7178}>
          <View style={styles.View_I1207_7178_438_2}>
            <Text style={styles.Text_I1207_7178_438_2}>10:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1207_7178_438_3}
          />
        </View>
        <View style={styles.View_1207_7179}>
          <View style={styles.View_I1207_7179_438_2}>
            <Text style={styles.Text_I1207_7179_438_2}>12:00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1207_7179_438_3}
          />
        </View>
        <View style={styles.View_1207_7180}>
          <View style={styles.View_I1207_7180_438_2}>
            <Text style={styles.Text_I1207_7180_438_2}>14:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1207_7180_438_3}
          />
        </View>
        <View style={styles.View_1207_7181}>
          <View style={styles.View_I1207_7181_438_2}>
            <Text style={styles.Text_I1207_7181_438_2}>16:00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1207_7181_438_3}
          />
        </View>
        <View style={styles.View_1207_7182}>
          <View style={styles.View_I1207_7182_438_2}>
            <Text style={styles.Text_I1207_7182_438_2}>7:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1207_7182_438_3}
          />
        </View>
        <View style={styles.View_1207_7183}>
          <View style={styles.View_I1207_7183_438_2}>
            <Text style={styles.Text_I1207_7183_438_2}>14:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1207_7183_438_3}
          />
        </View>
        <View style={styles.View_1207_7184}>
          <View style={styles.View_I1207_7184_438_2}>
            <Text style={styles.Text_I1207_7184_438_2}>9:00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1207_7184_438_3}
          />
        </View>
        <View style={styles.View_1207_7185}>
          <View style={styles.View_I1207_7185_438_2}>
            <Text style={styles.Text_I1207_7185_438_2}>11:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1207_7185_438_3}
          />
        </View>
        <View style={styles.View_1207_7186}>
          <View style={styles.View_I1207_7186_438_2}>
            <Text style={styles.Text_I1207_7186_438_2}>16:10</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1207_7186_438_3}
          />
        </View>
        <View style={styles.View_1207_7187}>
          <View style={styles.View_I1207_7187_438_2}>
            <Text style={styles.Text_I1207_7187_438_2}>22:00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1207_7187_438_3}
          />
        </View>
        <View style={styles.View_1207_7188}>
          <View style={styles.View_I1207_7188_438_2}>
            <Text style={styles.Text_I1207_7188_438_2}>9:00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1207_7188_438_3}
          />
        </View>
        <View style={styles.View_1207_7189}>
          <View style={styles.View_I1207_7189_438_2}>
            <Text style={styles.Text_I1207_7189_438_2}>11:50</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1207_7189_438_3}
          />
        </View>
        <View style={styles.View_1207_7190}>
          <View style={styles.View_I1207_7190_438_2}>
            <Text style={styles.Text_I1207_7190_438_2}>15:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1207_7190_438_3}
          />
        </View>
        <View style={styles.View_1207_7191}>
          <View style={styles.View_I1207_7191_438_2}>
            <Text style={styles.Text_I1207_7191_438_2}>17:20</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1207_7191_438_3}
          />
        </View>
        <View style={styles.View_1207_7192}>
          <View style={styles.View_I1207_7192_438_2}>
            <Text style={styles.Text_I1207_7192_438_2}>7:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1207_7192_438_3}
          />
        </View>
        <View style={styles.View_1207_7193}>
          <View style={styles.View_I1207_7193_438_2}>
            <Text style={styles.Text_I1207_7193_438_2}>15:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1207_7193_438_3}
          />
        </View>
        <View style={styles.View_1207_7194}>
          <View style={styles.View_I1207_7194_438_2}>
            <Text style={styles.Text_I1207_7194_438_2}>16:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1207_7194_438_3}
          />
        </View>
        <View style={styles.View_1207_7195}>
          <View style={styles.View_1207_7196} />
          <View style={styles.View_1207_7197}>
            <Text style={styles.Text_1207_7197}>Monday, 14 June 2021</Text>
          </View>
        </View>
        <View style={styles.View_1207_7198}>
          <View style={styles.View_1207_7199} />
          <View style={styles.View_1207_7200}>
            <Text style={styles.Text_1207_7200}>Wednesday, 16 June 2021</Text>
          </View>
        </View>
        <View style={styles.View_1207_7201}>
          <View style={styles.View_1207_7202} />
          <View style={styles.View_1207_7203}>
            <Text style={styles.Text_1207_7203}>Thursday, 17 June 2021</Text>
          </View>
        </View>
        <View style={styles.View_1207_7204}>
          <View style={styles.View_1207_7205} />
          <View style={styles.View_1207_7206}>
            <Text style={styles.Text_1207_7206}>Friday, 18 June 2021</Text>
          </View>
        </View>
        <View style={styles.View_1207_7207}>
          <View style={styles.View_1207_7208} />
          <View style={styles.View_1207_7209}>
            <Text style={styles.Text_1207_7209}>Tuesday, 15 June 2021</Text>
          </View>
        </View>
        <View style={styles.View_1209_7454}>
          <View style={styles.View_I1209_7454_1208_7339} />
          <View style={styles.View_I1209_7454_1208_7340}>
            <Text style={styles.Text_I1209_7454_1208_7340}>Confirm Change</Text>
          </View>
        </View>
        <View style={styles.View_1208_7312}>
          <View style={styles.View_I1208_7312_426_3}>
            <Text style={styles.Text_I1208_7312_426_3}>
              Preferred Communication
            </Text>
          </View>
        </View>
        <View style={styles.View_1208_7313}>
          <View style={styles.View_I1208_7313_426_13}>
            <Text style={styles.Text_I1208_7313_426_13}>Text Messaging</Text>
          </View>
          <View style={styles.View_I1208_7313_426_4}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a09c/8ce4/4af25b0414bebb3696cd075fcc8f1532"
              }}
              style={styles.ImageBackground_I1208_7313_426_5}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1208_7313_426_10}
          />
        </View>
        <View style={styles.View_1208_7314}>
          <View style={styles.View_I1208_7314_426_13}>
            <Text style={styles.Text_I1208_7314_426_13}>Video Call</Text>
          </View>
          <View style={styles.View_I1208_7314_426_4}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6a6/494f/d50b514e12b1429c5e1c2f6d32c30252"
              }}
              style={styles.ImageBackground_I1208_7314_426_5}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1208_7314_426_10}
          />
        </View>
        <View style={styles.View_1208_7315}>
          <View style={styles.View_I1208_7315_426_13}>
            <Text style={styles.Text_I1208_7315_426_13}>Phone Call</Text>
          </View>
          <View style={styles.View_I1208_7315_426_4}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56c8/335b/a741cd2d1f7c00904f604b7fef643365"
              }}
              style={styles.ImageBackground_I1208_7315_426_5}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I1208_7315_426_10}
          />
        </View>
        <View style={styles.View_1208_7318}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2638/787c/18bde873448a4bea108f349b14c64062"
            }}
            style={styles.ImageBackground_I1208_7318_984_6409}
          />
        </View>
        <View style={styles.View_1208_7337}>
          <Text style={styles.Text_1208_7337}>
            NOTE: You can change this appointment time only twice free of
            charge. After that, you will be charged 50% of the appointment cost.
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("204%") },
  View_1207_7065: {
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
  View_I1207_7065_199_344: {
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
  View_I1207_7065_199_344_4_227: {
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
  ImageBackground_I1207_7065_199_345: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("3%")
  },
  View_I1207_7065_199_346: {
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
  View_I1207_7065_199_347: {
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
  View_I1207_7065_199_349: {
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
  Text_I1207_7065_199_349: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1207_7065_199_350: {
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
  ImageBackground_I1207_7065_199_351: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I1207_7065_199_352: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I1207_7065_199_353: {
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
  ImageBackground_I1207_7065_199_354: {
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
  View_1209_7455: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("174%"),
    minHeight: hp("174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1207_7168: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1207_7169: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_1207_7169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_7170: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("7%")
  },
  ImageBackground_1207_7172: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%")
  },
  View_1207_7174: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_7174_426_3: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_7174_426_3: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_7175: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_7175_438_2: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_7175_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_7175_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_7176: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("106%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_7176_438_2: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_7176_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_7176_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_7177: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("106%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_7177_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_7177_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_7177_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_7178: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("106%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_7178_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_7178_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_7178_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_7179: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("106%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_7179_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_7179_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_7179_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_7180: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("106%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_7180_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_7180_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_7180_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_7181: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("106%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_7181_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_7181_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_7181_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_7182: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("72%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_7182_438_2: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_7182_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_7182_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_7183: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("72%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_7183_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_7183_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_7183_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_7184: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("55%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_7184_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_7184_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_7184_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_7185: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("55%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_7185_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_7185_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_7185_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_7186: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("55%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_7186_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_7186_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_7186_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_7187: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("55%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_7187_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_7187_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_7187_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_7188: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_7188_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_7188_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_7188_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_7189: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_7189_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_7189_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_7189_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_7190: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_7190_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_7190_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_7190_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_7191: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_7191_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_7191_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_7191_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_7192: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("89%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_7192_438_2: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_7192_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_7192_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_7193: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("89%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_7193_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_7193_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_7193_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_7194: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("89%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_7194_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_7194_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_7194_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_7195: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("28%")
  },
  View_1207_7196: {
    width: wp("15%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)",
    opacity: 0.5
  },
  View_1207_7197: {
    width: wp("13%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_1207_7197: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_7198: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("62%")
  },
  View_1207_7199: {
    width: wp("18%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)",
    opacity: 0.5
  },
  View_1207_7200: {
    width: wp("15%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_1207_7200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_7201: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("80%")
  },
  View_1207_7202: {
    width: wp("16%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)",
    opacity: 0.5
  },
  View_1207_7203: {
    width: wp("13%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_1207_7203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_7204: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("97%")
  },
  View_1207_7205: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)",
    opacity: 0.5
  },
  View_1207_7206: {
    width: wp("11%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_1207_7206: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_7207: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("45%")
  },
  View_1207_7208: {
    width: wp("15%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)",
    opacity: 0.5
  },
  View_1207_7209: {
    width: wp("13%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_1207_7209: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1209_7454: {
    flexGrow: 1,
    width: wp("69%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("157%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1209_7454_1208_7339: {
    flexGrow: 1,
    width: wp("69%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)"
  },
  View_I1209_7454_1208_7340: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1209_7454_1208_7340: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1208_7312: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("120%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1208_7312_426_3: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1208_7312_426_3: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1208_7313: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("128%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1208_7313_426_13: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1208_7313_426_13: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1208_7313_426_4: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1208_7313_426_5: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I1208_7313_426_10: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_1208_7314: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("128%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1208_7314_426_13: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1208_7314_426_13: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1208_7314_426_4: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1208_7314_426_5: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I1208_7314_426_10: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_1208_7315: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("128%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1208_7315_426_13: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1208_7315_426_13: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1208_7315_426_4: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1208_7315_426_5: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I1208_7315_426_10: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_1208_7318: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("128%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1208_7318_984_6409: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1208_7337: {
    flexGrow: 1,
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("142%"),
    justifyContent: "flex-start"
  },
  Text_1208_7337: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 16,
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
