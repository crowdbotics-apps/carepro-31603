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
      <View style={styles.View_1249_8041}>
        <View style={styles.View_I1249_8041_199_344}>
          <View style={styles.View_I1249_8041_199_344_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5979/5b08/877131cfaf519bff9199829a08dfeb63"
          }}
          style={styles.ImageBackground_I1249_8041_199_345}
        />
        <View style={styles.View_I1249_8041_199_346}>
          <View style={styles.View_I1249_8041_199_347}>
            <View style={styles.View_I1249_8041_199_349}>
              <Text style={styles.Text_I1249_8041_199_349}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I1249_8041_199_350}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I1249_8041_199_351}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I1249_8041_199_352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/171b/ad41/cca1fc9a4c61a69f2073888e1559d679"
          }}
          style={styles.ImageBackground_I1249_8041_199_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/85c9/7f4f5815b12675432f7bce135fb62d6e"
          }}
          style={styles.ImageBackground_I1249_8041_199_354}
        />
      </View>
      <View style={styles.View_1249_8042}>
        <View style={styles.View_I1249_8042_199_444}>
          <View style={styles.View_I1249_8042_199_445}>
            <View style={styles.View_I1249_8042_199_445_4_227} />
          </View>
        </View>
        <View style={styles.View_I1249_8042_199_446}>
          <View style={styles.View_I1249_8042_199_447}>
            <Text style={styles.Text_I1249_8042_199_447}>My Health</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbcc/2f1e/81abeac8cf8ec8378572a9b6dfbf3974"
            }}
            style={styles.ImageBackground_I1249_8042_199_448}
          />
        </View>
        <View style={styles.View_I1249_8042_199_450}>
          <View style={styles.View_I1249_8042_199_451}>
            <Text style={styles.Text_I1249_8042_199_451}>Specislist Area</Text>
          </View>
          <View style={styles.View_I1249_8042_199_452}>
            <View style={styles.View_I1249_8042_199_453}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/984b/92fa/664da26c3fb9b69746b556885206648d"
                }}
                style={styles.ImageBackground_I1249_8042_199_454}
              />
            </View>
            <View style={styles.View_I1249_8042_199_456}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34b/3fad/fc809c0af8ff375c0c1d3e6770c999b4"
                }}
                style={styles.ImageBackground_I1249_8042_199_457}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I1249_8042_199_459}>
          <View style={styles.View_I1249_8042_199_460}>
            <Text style={styles.Text_I1249_8042_199_460}>Friends Area</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff31/53eb/73d3d7306c8dbccc98301d70467a39f7"
            }}
            style={styles.ImageBackground_I1249_8042_199_461}
          />
        </View>
        <View style={styles.View_I1249_8042_199_463}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6a6/d86f/210c1d275b8c8f0067359d58037f63b0"
            }}
            style={styles.ImageBackground_I1249_8042_199_464}
          />
          <View style={styles.View_I1249_8042_199_465}>
            <View style={styles.View_I1249_8042_199_466}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3155/9060/f25304a55c8d3ee3cadb0523048eb23b"
                }}
                style={styles.ImageBackground_I1249_8042_199_467}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I1249_8042_199_469}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5933/03b8/c08f024b145b53dd98ea067662c58dab"
            }}
            style={styles.ImageBackground_I1249_8042_199_470}
          />
          <View style={styles.View_I1249_8042_199_471}>
            <View style={styles.View_I1249_8042_199_472}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a6/6501/690ec443ee5966d5124104068518bdb1"
                }}
                style={styles.ImageBackground_I1249_8042_199_473}
              />
            </View>
            <View style={styles.View_I1249_8042_199_478}>
              <Text style={styles.Text_I1249_8042_199_478}>Dashboard</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1249_8044}>
        <View style={styles.View_I1249_8044_768_5039} />
        <View style={styles.View_I1249_8044_768_5041}>
          <View style={styles.View_I1249_8044_768_5041_726_4830}>
            <Text style={styles.Text_I1249_8044_768_5041_726_4830}>
              Pledge to be a Moderator / Friend to the world
            </Text>
          </View>
        </View>
        <View style={styles.View_I1249_8044_777_5073}>
          <View style={styles.View_I1249_8044_777_5073_768_5059}>
            <Text style={styles.Text_I1249_8044_777_5073_768_5059}>
              Receive 100 points per hour
            </Text>
          </View>
        </View>
        <View style={styles.View_I1249_8044_777_5074}>
          <View style={styles.View_I1249_8044_777_5074_768_5062}>
            <Text style={styles.Text_I1249_8044_777_5074_768_5062}>
              Terms &amp; Conditions applied
            </Text>
          </View>
        </View>
        <View style={styles.View_I1249_8044_772_4967}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3978/3eaa/98ea481fe7ceacfbb99c00020fbd96a3"
            }}
            style={styles.ImageBackground_I1249_8044_772_4967_726_4836}
          />
        </View>
      </View>
      <View style={styles.View_1249_8214} />
      <View style={styles.View_1249_8215}>
        <Text style={styles.Text_1249_8215}>My Feed</Text>
      </View>
      <View style={styles.View_1249_8216}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9284/6645/e9e3aaa826915339fef7bda968ae7e0a"
          }}
          style={styles.ImageBackground_I1249_8216_726_4836}
        />
      </View>
      <View style={styles.View_1249_8046}>
        <View style={styles.View_I1249_8046_760_4863}>
          <View style={styles.View_I1249_8046_760_4863_4_227} />
        </View>
        <View style={styles.View_I1249_8046_760_4864}>
          <Text style={styles.Text_I1249_8046_760_4864}>My Friends</Text>
        </View>
        <View style={styles.View_I1249_8046_764_5004} />
        <View style={styles.View_I1249_8046_764_5006}>
          <View style={styles.View_I1249_8046_764_5006_726_4900}>
            <Text style={styles.Text_I1249_8046_764_5006_726_4900}>
              United Against Depression
            </Text>
          </View>
        </View>
        <View style={styles.View_I1249_8046_772_5002}>
          <View style={styles.View_I1249_8046_772_5002_764_5007}>
            <View style={styles.View_I1249_8046_772_5002_764_5007_726_4901}>
              <Text style={styles.Text_I1249_8046_772_5002_764_5007_726_4901}>
                23 friends online
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b2c/dc21/954503e1cb995b641aacb39d2aded4cd"
            }}
            style={styles.ImageBackground_I1249_8046_772_5002_767_5028}
          />
        </View>
        <View style={styles.View_I1249_8046_771_4950} />
        <View style={styles.View_I1249_8046_771_4951}>
          <View style={styles.View_I1249_8046_771_4951_726_4900}>
            <Text style={styles.Text_I1249_8046_771_4951_726_4900}>
              Yonna McCallister
            </Text>
          </View>
        </View>
        <View style={styles.View_I1249_8046_772_5003}>
          <View style={styles.View_I1249_8046_772_5003_772_4965}>
            <Text style={styles.Text_I1249_8046_772_5003_772_4965}>
              Talking about Feeling Lonely
            </Text>
          </View>
        </View>
        <View style={styles.View_I1249_8046_772_4981}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bec/4693/5dab2187358a965db4413f5706a47beb"
            }}
            style={styles.ImageBackground_I1249_8046_772_4981_746_4858}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/810d/1281/8d383e502e3714b334a4a038a560b821"
            }}
            style={styles.ImageBackground_I1249_8046_772_4981_746_4855}
          />
        </View>
        <View style={styles.View_I1249_8046_772_4989}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fcf/d65a/a7f42c34b24324efc06031d780bf17bd"
            }}
            style={styles.ImageBackground_I1249_8046_772_4989_982_5465}
          />
        </View>
        <View style={styles.View_I1249_8046_772_4993}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bec/4693/5dab2187358a965db4413f5706a47beb"
            }}
            style={styles.ImageBackground_I1249_8046_772_4993_746_4858}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/810d/1281/8d383e502e3714b334a4a038a560b821"
            }}
            style={styles.ImageBackground_I1249_8046_772_4993_746_4855}
          />
        </View>
        <View style={styles.View_I1249_8046_772_4994}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fcf/d65a/a7f42c34b24324efc06031d780bf17bd"
            }}
            style={styles.ImageBackground_I1249_8046_772_4994_982_5465}
          />
        </View>
      </View>
      <View style={styles.View_1249_8048}>
        <View style={styles.View_I1249_8048_1248_7958} />
        <View style={styles.View_I1249_8048_1248_7959}>
          <View style={styles.View_I1249_8048_1248_7959_726_4830}>
            <Text style={styles.Text_I1249_8048_1248_7959_726_4830}>
              Look for a Friend
            </Text>
          </View>
        </View>
        <View style={styles.View_I1249_8048_1248_7960}>
          <View style={styles.View_I1249_8048_1248_7960_774_5026}>
            <View style={styles.View_I1249_8048_1248_7960_774_5028}>
              <Text style={styles.Text_I1249_8048_1248_7960_774_5028}>
                Topic to talk about
              </Text>
            </View>
          </View>
          <View style={styles.View_I1249_8048_1248_7960_774_5029}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I1249_8048_1248_7960_774_5030}
            />
          </View>
        </View>
        <View style={styles.View_I1249_8048_1248_7961}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0a3/d629/d50f7787245d5ce35f5e62b5f6a4dd6d"
            }}
            style={styles.ImageBackground_I1249_8048_1248_7961_759_4854}
          />
          <View style={styles.View_I1249_8048_1248_7961_759_4933}>
            <View style={styles.View_I1249_8048_1248_7961_759_4933_759_4856}>
              <Text style={styles.Text_I1249_8048_1248_7961_759_4933_759_4856}>
                Life in General
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I1249_8048_1248_7962}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6588/37a1/c6719f182502ece3ca9d3a491dff6c8a"
            }}
            style={styles.ImageBackground_I1249_8048_1248_7962_759_4854}
          />
          <View style={styles.View_I1249_8048_1248_7962_759_4933}>
            <View style={styles.View_I1249_8048_1248_7962_759_4933_759_4856}>
              <Text style={styles.Text_I1249_8048_1248_7962_759_4933_759_4856}>
                Work Life Balance
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I1249_8048_1248_7963}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0a3/d629/d50f7787245d5ce35f5e62b5f6a4dd6d"
            }}
            style={styles.ImageBackground_I1249_8048_1248_7963_759_4854}
          />
          <View style={styles.View_I1249_8048_1248_7963_759_4933}>
            <View style={styles.View_I1249_8048_1248_7963_759_4933_759_4856}>
              <Text style={styles.Text_I1249_8048_1248_7963_759_4933_759_4856}>
                Feeling Low
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I1249_8048_1248_7964}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21dc/8cc6/1d11260ff4d307697f9610600657ced4"
            }}
            style={styles.ImageBackground_I1249_8048_1248_7964_759_4854}
          />
          <View style={styles.View_I1249_8048_1248_7964_759_4933}>
            <View style={styles.View_I1249_8048_1248_7964_759_4933_759_4856}>
              <Text style={styles.Text_I1249_8048_1248_7964_759_4933_759_4856}>
                Feeling Depressed
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I1249_8048_1248_7965}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7df8/b8df/721b7325f7f4a433b2c78360be7f0ef7"
            }}
            style={styles.ImageBackground_I1249_8048_1248_7965_759_4854}
          />
          <View style={styles.View_I1249_8048_1248_7965_759_4933}>
            <View style={styles.View_I1249_8048_1248_7965_759_4933_759_4856}>
              <Text style={styles.Text_I1249_8048_1248_7965_759_4933_759_4856}>
                Feeling Lonely
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I1249_8048_1248_8005}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccff/0978/52225b39895186230929249b6c317b0e"
            }}
            style={styles.ImageBackground_I1249_8048_1248_8005_1248_7891}
          />
          <View style={styles.View_I1249_8048_1248_8005_1248_7892}>
            <View style={styles.View_I1249_8048_1248_8005_1248_7892_759_4856}>
              <Text style={styles.Text_I1249_8048_1248_8005_1248_7892_759_4856}>
                Add Tag
              </Text>
            </View>
          </View>
          <View style={styles.View_I1249_8048_1248_8005_1248_7896}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4f0/f3e0/38c477c00b13546294ec7be3acb545dc"
              }}
              style={styles.ImageBackground_I1249_8048_1248_8005_1248_7897}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1253_8041}>
        <View style={styles.View_1249_8243} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d083/f78f/21eebe84a905a91e6e6598d29c39e55d"
          }}
          style={styles.ImageBackground_1249_8244}
        />
        <View style={styles.View_1249_8245}>
          <Text style={styles.Text_1249_8245}>Manish Kumar</Text>
        </View>
        <View style={styles.View_1251_8246}>
          <Text style={styles.Text_1251_8246}>13 mins ago</Text>
        </View>
        <View style={styles.View_1251_8247}>
          <Text style={styles.Text_1251_8247}>Life in General</Text>
        </View>
        <View style={styles.View_1251_8248}>
          <Text style={styles.Text_1251_8248}>
            Day 10 of daily meditation: I’ve noticed myself getting much calmer.
            I’ve never felt something like this. It’s like everything is where
            it should be and I am loved
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978e/6631/2d651c30d513f7dc4c4ce68c08c8384f"
          }}
          style={styles.ImageBackground_1251_8249}
        />
        <View style={styles.View_1252_8624}>
          <View style={styles.View_1252_8625}>
            <View style={styles.View_1252_8627}>
              <Text style={styles.Text_1252_8627}>Comment</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d30/f09f/1ba5a18756a4f709b880c6fb8beb7ab8"
            }}
            style={styles.ImageBackground_1252_8632}
          />
        </View>
      </View>
      <View style={styles.View_1253_8042}>
        <View style={styles.View_1253_8019} />
        <View style={styles.View_1253_8035}>
          <Text style={styles.Text_1253_8035}>13 comments</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ed/9b60/33630c7c9f623d63045b97826bab11ed"
          }}
          style={styles.ImageBackground_1253_8020}
        />
        <View style={styles.View_1253_8021}>
          <Text style={styles.Text_1253_8021}>Savannah Thierry</Text>
        </View>
        <View style={styles.View_1253_8022}>
          <Text style={styles.Text_1253_8022}>1 hour ago</Text>
        </View>
        <View style={styles.View_1253_8023}>
          <Text style={styles.Text_1253_8023}>Work Life Balance</Text>
        </View>
        <View style={styles.View_1253_8024}>
          <Text style={styles.Text_1253_8024}>
            Today, I made a timetable for work. At the end of the day, I’ve
            noticed that my work has been done earlier than usual and I have
            more free time for myself. Focus only on the important tasks and
            live life to the fullest. Much love
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978e/6631/2d651c30d513f7dc4c4ce68c08c8384f"
          }}
          style={styles.ImageBackground_1253_8025}
        />
        <View style={styles.View_1253_8026}>
          <View style={styles.View_1253_8027}>
            <View style={styles.View_1253_8029}>
              <Text style={styles.Text_1253_8029}>Comment</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d30/f09f/1ba5a18756a4f709b880c6fb8beb7ab8"
            }}
            style={styles.ImageBackground_1253_8030}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c89e/5f54/69ec5480f7a88755eb1565337d45231f"
          }}
          style={styles.ImageBackground_1253_8034}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("379%") },
  View_1249_8041: {
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
  View_I1249_8041_199_344: {
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
  View_I1249_8041_199_344_4_227: {
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
  ImageBackground_I1249_8041_199_345: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("3%")
  },
  View_I1249_8041_199_346: {
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
  View_I1249_8041_199_347: {
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
  View_I1249_8041_199_349: {
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
  Text_I1249_8041_199_349: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1249_8041_199_350: {
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
  ImageBackground_I1249_8041_199_351: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I1249_8041_199_352: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I1249_8041_199_353: {
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
  ImageBackground_I1249_8041_199_354: {
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
  View_1249_8042: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("358%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8042_199_444: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_I1249_8042_199_445: {
    width: wp("100%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8042_199_445_4_227: {
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
  View_I1249_8042_199_446: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("12%")
  },
  View_I1249_8042_199_447: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I1249_8042_199_447: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1249_8042_199_448: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1249_8042_199_450: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("12%")
  },
  View_I1249_8042_199_451: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I1249_8042_199_451: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1249_8042_199_452: {
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
  View_I1249_8042_199_453: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1249_8042_199_454: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1249_8042_199_456: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I1249_8042_199_457: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1249_8042_199_459: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("12%")
  },
  View_I1249_8042_199_460: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I1249_8042_199_460: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1249_8042_199_461: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1249_8042_199_463: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%")
  },
  ImageBackground_I1249_8042_199_464: {
    width: wp("7%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1249_8042_199_465: {
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
  View_I1249_8042_199_466: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1249_8042_199_467: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1249_8042_199_469: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%")
  },
  ImageBackground_I1249_8042_199_470: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1249_8042_199_471: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I1249_8042_199_472: {
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
  ImageBackground_I1249_8042_199_473: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1249_8042_199_478: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I1249_8042_199_478: {
    color: "rgba(28, 200, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1249_8044: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("330%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8044_768_5039: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1249_8044_768_5041: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8044_768_5041_726_4830: {
    flexGrow: 1,
    width: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1249_8044_768_5041_726_4830: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1249_8044_777_5073: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8044_777_5073_768_5059: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1249_8044_777_5073_768_5059: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1249_8044_777_5074: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8044_777_5074_768_5062: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1249_8044_777_5074_768_5062: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1249_8044_772_4967: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1249_8044_772_4967_726_4836: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_1249_8214: {
    width: wp("93%"),
    height: hp("192%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1249_8215: {
    width: wp("7%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_1249_8215: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1249_8216: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1249_8216_726_4836: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_1249_8046: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("262%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8046_760_4863: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8046_760_4863_4_227: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1249_8046_760_4864: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_I1249_8046_760_4864: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1249_8046_764_5004: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1249_8046_764_5006: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8046_764_5006_726_4900: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1249_8046_764_5006_726_4900: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1249_8046_772_5002: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8046_772_5002_764_5007: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8046_772_5002_764_5007_726_4901: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1249_8046_772_5002_764_5007_726_4901: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I1249_8046_772_5002_767_5028: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_I1249_8046_771_4950: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("37%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1249_8046_771_4951: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8046_771_4951_726_4900: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1249_8046_771_4951_726_4900: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1249_8046_772_5003: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("47%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8046_772_5003_772_4965: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1249_8046_772_5003_772_4965: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1249_8046_772_4981: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1249_8046_772_4981_746_4858: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1249_8046_772_4981_746_4855: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  View_I1249_8046_772_4989: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1249_8046_772_4989_982_5465: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I1249_8046_772_4993: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1249_8046_772_4993_746_4858: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1249_8046_772_4993_746_4855: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  View_I1249_8046_772_4994: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("44%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1249_8046_772_4994_982_5465: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_1249_8048: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8048_1248_7958: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1249_8048_1248_7959: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8048_1248_7959_726_4830: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1249_8048_1248_7959_726_4830: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I1249_8048_1248_7960: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("11%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1249_8048_1248_7960_774_5026: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8048_1248_7960_774_5028: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1249_8048_1248_7960_774_5028: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1249_8048_1248_7960_774_5029: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1249_8048_1248_7960_774_5030: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I1249_8048_1248_7961: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1249_8048_1248_7961_759_4854: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1249_8048_1248_7961_759_4933: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8048_1248_7961_759_4933_759_4856: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1249_8048_1248_7961_759_4933_759_4856: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1249_8048_1248_7962: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1249_8048_1248_7962_759_4854: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1249_8048_1248_7962_759_4933: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8048_1248_7962_759_4933_759_4856: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1249_8048_1248_7962_759_4933_759_4856: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1249_8048_1248_7963: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1249_8048_1248_7963_759_4854: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1249_8048_1248_7963_759_4933: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8048_1248_7963_759_4933_759_4856: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1249_8048_1248_7963_759_4933_759_4856: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1249_8048_1248_7964: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1249_8048_1248_7964_759_4854: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1249_8048_1248_7964_759_4933: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8048_1248_7964_759_4933_759_4856: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1249_8048_1248_7964_759_4933_759_4856: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1249_8048_1248_7965: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1249_8048_1248_7965_759_4854: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1249_8048_1248_7965_759_4933: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8048_1248_7965_759_4933_759_4856: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1249_8048_1248_7965_759_4933_759_4856: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1249_8048_1248_8005: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1249_8048_1248_8005_1248_7891: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1249_8048_1248_8005_1248_7892: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1249_8048_1248_8005_1248_7892_759_4856: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1249_8048_1248_8005_1248_7892_759_4856: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1249_8048_1248_8005_1248_7896: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1249_8048_1248_8005_1248_7897: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1253_8041: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1249_8243: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1249_8244: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%"),
    resizeMode: "cover"
  },
  View_1249_8245: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_1249_8245: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1251_8246: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_1251_8246: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1251_8247: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_1251_8247: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1251_8248: {
    flexGrow: 1,
    width: wp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_1251_8248: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1251_8249: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("7%")
  },
  View_1252_8624: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("26%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_1252_8625: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1252_8627: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1252_8627: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_1252_8632: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1253_8042: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("126%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1253_8019: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1253_8035: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("112%"),
    justifyContent: "center"
  },
  Text_1253_8035: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_1253_8020: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%"),
    resizeMode: "cover"
  },
  View_1253_8021: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_1253_8021: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1253_8022: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_1253_8022: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1253_8023: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_1253_8023: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1253_8024: {
    flexGrow: 1,
    width: wp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_1253_8024: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1253_8025: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("7%")
  },
  View_1253_8026: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("102%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_1253_8027: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1253_8029: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1253_8029: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_1253_8030: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1253_8034: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("30%"),
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
