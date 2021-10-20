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
      <View style={styles.View_917_5750}>
        <View style={styles.View_I917_5750_199_344}>
          <View style={styles.View_I917_5750_199_344_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5979/5b08/877131cfaf519bff9199829a08dfeb63"
          }}
          style={styles.ImageBackground_I917_5750_199_345}
        />
        <View style={styles.View_I917_5750_199_346}>
          <View style={styles.View_I917_5750_199_347}>
            <View style={styles.View_I917_5750_199_349}>
              <Text style={styles.Text_I917_5750_199_349}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I917_5750_199_350}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I917_5750_199_351}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I917_5750_199_352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/171b/ad41/cca1fc9a4c61a69f2073888e1559d679"
          }}
          style={styles.ImageBackground_I917_5750_199_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/85c9/7f4f5815b12675432f7bce135fb62d6e"
          }}
          style={styles.ImageBackground_I917_5750_199_354}
        />
      </View>
      <View style={styles.View_917_5752}>
        <View style={styles.View_I917_5752_830_5526}>
          <View style={styles.View_I917_5752_830_5526_4_227} />
        </View>
      </View>
      <View style={styles.View_917_5754}>
        <View style={styles.View_I917_5754_807_5379}>
          <Text style={styles.Text_I917_5754_807_5379}>Earnings Report</Text>
        </View>
      </View>
      <View style={styles.View_917_5756}>
        <View style={styles.View_I917_5756_199_444}>
          <View style={styles.View_I917_5756_199_445}>
            <View style={styles.View_I917_5756_199_445_4_227} />
          </View>
        </View>
        <View style={styles.View_I917_5756_199_446}>
          <View style={styles.View_I917_5756_199_447}>
            <Text style={styles.Text_I917_5756_199_447}>My Health</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbcc/2f1e/81abeac8cf8ec8378572a9b6dfbf3974"
            }}
            style={styles.ImageBackground_I917_5756_199_448}
          />
        </View>
        <View style={styles.View_I917_5756_199_450}>
          <View style={styles.View_I917_5756_199_451}>
            <Text style={styles.Text_I917_5756_199_451}>Specislist Area</Text>
          </View>
          <View style={styles.View_I917_5756_199_452}>
            <View style={styles.View_I917_5756_199_453}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/984b/92fa/664da26c3fb9b69746b556885206648d"
                }}
                style={styles.ImageBackground_I917_5756_199_454}
              />
            </View>
            <View style={styles.View_I917_5756_199_456}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34b/3fad/fc809c0af8ff375c0c1d3e6770c999b4"
                }}
                style={styles.ImageBackground_I917_5756_199_457}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I917_5756_199_459}>
          <View style={styles.View_I917_5756_199_460}>
            <Text style={styles.Text_I917_5756_199_460}>Friends Area</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff31/53eb/73d3d7306c8dbccc98301d70467a39f7"
            }}
            style={styles.ImageBackground_I917_5756_199_461}
          />
        </View>
        <View style={styles.View_I917_5756_199_463}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6a6/d86f/210c1d275b8c8f0067359d58037f63b0"
            }}
            style={styles.ImageBackground_I917_5756_199_464}
          />
          <View style={styles.View_I917_5756_199_465}>
            <View style={styles.View_I917_5756_199_466}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3155/9060/f25304a55c8d3ee3cadb0523048eb23b"
                }}
                style={styles.ImageBackground_I917_5756_199_467}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I917_5756_199_469}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5933/03b8/c08f024b145b53dd98ea067662c58dab"
            }}
            style={styles.ImageBackground_I917_5756_199_470}
          />
          <View style={styles.View_I917_5756_199_471}>
            <View style={styles.View_I917_5756_199_472}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a6/6501/690ec443ee5966d5124104068518bdb1"
                }}
                style={styles.ImageBackground_I917_5756_199_473}
              />
            </View>
            <View style={styles.View_I917_5756_199_478}>
              <Text style={styles.Text_I917_5756_199_478}>Dashboard</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_917_6028}>
        <View style={styles.View_917_6024}>
          <View style={styles.View_I917_6024_917_5957} />
        </View>
        <View style={styles.View_917_6025}>
          <View style={styles.View_I917_6025_917_5958}>
            <Text style={styles.Text_I917_6025_917_5958}>07/14/21</Text>
          </View>
        </View>
        <View style={styles.View_917_6026}>
          <View style={styles.View_I917_6026_917_5960}>
            <Text style={styles.Text_I917_6026_917_5960}>Sarah Kowalski</Text>
          </View>
        </View>
        <View style={styles.View_917_6027}>
          <View style={styles.View_I917_6027_917_5959}>
            <Text style={styles.Text_I917_6027_917_5959}>$ 0</Text>
          </View>
        </View>
        <View style={styles.View_917_5989}>
          <View style={styles.View_I917_5989_713_4865}>
            <Text style={styles.Text_I917_5989_713_4865}>
              5 Minutes Free Consultation
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_917_6044}>
        <View style={styles.View_I917_6044_917_6024}>
          <View style={styles.View_I917_6044_917_6024_917_5957} />
        </View>
        <View style={styles.View_I917_6044_917_6025}>
          <View style={styles.View_I917_6044_917_6025_917_5958}>
            <Text style={styles.Text_I917_6044_917_6025_917_5958}>
              07/12/21
            </Text>
          </View>
        </View>
        <View style={styles.View_I917_6044_917_6026}>
          <View style={styles.View_I917_6044_917_6026_917_5960}>
            <Text style={styles.Text_I917_6044_917_6026_917_5960}>
              Thomas Signo
            </Text>
          </View>
        </View>
        <View style={styles.View_I917_6044_917_6027}>
          <View style={styles.View_I917_6044_917_6027_917_5959}>
            <Text style={styles.Text_I917_6044_917_6027_917_5959}>$ 0</Text>
          </View>
        </View>
        <View style={styles.View_I917_6044_917_5989}>
          <View style={styles.View_I917_6044_917_5989_713_4865}>
            <Text style={styles.Text_I917_6044_917_5989_713_4865}>
              5 Minutes Free Consultation
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_917_6033}>
        <View style={styles.View_I917_6033_917_6024}>
          <View style={styles.View_I917_6033_917_6024_917_5957} />
        </View>
        <View style={styles.View_I917_6033_917_6025}>
          <View style={styles.View_I917_6033_917_6025_917_5958}>
            <Text style={styles.Text_I917_6033_917_6025_917_5958}>
              07/13/21
            </Text>
          </View>
        </View>
        <View style={styles.View_I917_6033_917_6026}>
          <View style={styles.View_I917_6033_917_6026_917_5960}>
            <Text style={styles.Text_I917_6033_917_6026_917_5960}>
              Nolan Berthaud
            </Text>
          </View>
        </View>
        <View style={styles.View_I917_6033_917_6027}>
          <View style={styles.View_I917_6033_917_6027_917_5959}>
            <Text style={styles.Text_I917_6033_917_6027_917_5959}>$ 75</Text>
          </View>
        </View>
        <View style={styles.View_I917_6033_917_5989}>
          <View style={styles.View_I917_6033_917_5989_713_4865}>
            <Text style={styles.Text_I917_6033_917_5989_713_4865}>
              30 Minutes Consultation
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_917_6055}>
        <View style={styles.View_I917_6055_917_6024}>
          <View style={styles.View_I917_6055_917_6024_917_5957} />
        </View>
        <View style={styles.View_I917_6055_917_6025}>
          <View style={styles.View_I917_6055_917_6025_917_5958}>
            <Text style={styles.Text_I917_6055_917_6025_917_5958}>
              07/11/21
            </Text>
          </View>
        </View>
        <View style={styles.View_I917_6055_917_6026}>
          <View style={styles.View_I917_6055_917_6026_917_5960}>
            <Text style={styles.Text_I917_6055_917_6026_917_5960}>
              Becky Imbel
            </Text>
          </View>
        </View>
        <View style={styles.View_I917_6055_917_6027}>
          <View style={styles.View_I917_6055_917_6027_917_5959}>
            <Text style={styles.Text_I917_6055_917_6027_917_5959}>$ 75</Text>
          </View>
        </View>
        <View style={styles.View_I917_6055_917_5989}>
          <View style={styles.View_I917_6055_917_5989_713_4865}>
            <Text style={styles.Text_I917_6055_917_5989_713_4865}>
              30 Minutes Consultation
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_917_6066}>
        <View style={styles.View_I917_6066_917_6024}>
          <View style={styles.View_I917_6066_917_6024_917_5957} />
        </View>
        <View style={styles.View_I917_6066_917_6025}>
          <View style={styles.View_I917_6066_917_6025_917_5958}>
            <Text style={styles.Text_I917_6066_917_6025_917_5958}>
              07/10/21
            </Text>
          </View>
        </View>
        <View style={styles.View_I917_6066_917_6026}>
          <View style={styles.View_I917_6066_917_6026_917_5960}>
            <Text style={styles.Text_I917_6066_917_6026_917_5960}>
              Mike Mille
            </Text>
          </View>
        </View>
        <View style={styles.View_I917_6066_917_6027}>
          <View style={styles.View_I917_6066_917_6027_917_5959}>
            <Text style={styles.Text_I917_6066_917_6027_917_5959}>$ 75</Text>
          </View>
        </View>
        <View style={styles.View_I917_6066_917_5989}>
          <View style={styles.View_I917_6066_917_5989_713_4865}>
            <Text style={styles.Text_I917_6066_917_5989_713_4865}>
              30 Minutes Consultation
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_922_5871}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b276/e380/c8c42f165fb338ed2659c3a8cc467883"
          }}
          style={styles.ImageBackground_920_5861}
        />
        <View style={styles.View_920_5862}>
          <View style={styles.View_I920_5862_830_5847}>
            <Text style={styles.Text_I920_5862_830_5847}>Filter</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d5c/cd5a/59c5f14984bc75a4f236a4ab064c3d4d"
          }}
          style={styles.ImageBackground_922_5870}
        />
      </View>
      <View style={styles.View_925_5875}>
        <View style={styles.View_I925_5875_830_5805}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/193b/847d/e0bce143915e7d1fb30f99d38e4d150e"
            }}
            style={styles.ImageBackground_I925_5875_830_5805_687_4666}
          />
          <View style={styles.View_I925_5875_830_5805_687_4667}>
            <View style={styles.View_I925_5875_830_5805_687_4668}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/732c/3a5c/f37348f873626cc059cee90e58c7ef7e"
                }}
                style={styles.ImageBackground_I925_5875_830_5805_687_4669}
              />
            </View>
            <View style={styles.View_I925_5875_830_5805_687_4671}>
              <Text style={styles.Text_I925_5875_830_5805_687_4671}>
                Download
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_925_5889}>
        <View style={styles.View_I925_5889_830_5526}>
          <View style={styles.View_I925_5889_830_5526_4_227} />
        </View>
      </View>
      <View style={styles.View_925_5890}>
        <View style={styles.View_I925_5890_807_5379}>
          <Text style={styles.Text_I925_5890_807_5379}>Expenses Report</Text>
        </View>
      </View>
      <View style={styles.View_925_5976}>
        <View style={styles.View_925_5966}>
          <View style={styles.View_I925_5966_917_5957} />
        </View>
        <View style={styles.View_925_5967}>
          <View style={styles.View_I925_5967_917_5958}>
            <Text style={styles.Text_I925_5967_917_5958}>07/14/21</Text>
          </View>
        </View>
        <View style={styles.View_925_5968}>
          <View style={styles.View_I925_5968_917_5960}>
            <Text style={styles.Text_I925_5968_917_5960}>Coffee Donation</Text>
          </View>
        </View>
        <View style={styles.View_925_5969}>
          <View style={styles.View_I925_5969_917_5959}>
            <Text style={styles.Text_I925_5969_917_5959}>$ 5</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_925_5893}>
        <View style={styles.View_I925_5893_917_6024}>
          <View style={styles.View_I925_5893_917_6024_917_5957} />
        </View>
        <View style={styles.View_I925_5893_917_6025}>
          <View style={styles.View_I925_5893_917_6025_917_5958}>
            <Text style={styles.Text_I925_5893_917_6025_917_5958}>
              07/13/21
            </Text>
          </View>
        </View>
        <View style={styles.View_I925_5893_917_6026}>
          <View style={styles.View_I925_5893_917_6026_917_5960}>
            <Text style={styles.Text_I925_5893_917_6026_917_5960}>
              Dr Mike NgGuard
            </Text>
          </View>
        </View>
        <View style={styles.View_I925_5893_917_6027}>
          <View style={styles.View_I925_5893_917_6027_917_5959}>
            <Text style={styles.Text_I925_5893_917_6027_917_5959}>$ 75</Text>
          </View>
        </View>
        <View style={styles.View_I925_5893_917_5989}>
          <View style={styles.View_I925_5893_917_5989_713_4865}>
            <Text style={styles.Text_I925_5893_917_5989_713_4865}>
              30 Minutes Consultation
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_925_5896}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b276/e380/c8c42f165fb338ed2659c3a8cc467883"
          }}
          style={styles.ImageBackground_I925_5896_920_5861}
        />
        <View style={styles.View_I925_5896_920_5862}>
          <View style={styles.View_I925_5896_920_5862_830_5847}>
            <Text style={styles.Text_I925_5896_920_5862_830_5847}>Filter</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d5c/cd5a/59c5f14984bc75a4f236a4ab064c3d4d"
          }}
          style={styles.ImageBackground_I925_5896_922_5870}
        />
      </View>
      <View style={styles.View_925_5897}>
        <View style={styles.View_I925_5897_830_5805}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/193b/847d/e0bce143915e7d1fb30f99d38e4d150e"
            }}
            style={styles.ImageBackground_I925_5897_830_5805_687_4666}
          />
          <View style={styles.View_I925_5897_830_5805_687_4667}>
            <View style={styles.View_I925_5897_830_5805_687_4668}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a17d/a101/b83dd5d102e6037d85b6e8887e8d435f"
                }}
                style={styles.ImageBackground_I925_5897_830_5805_687_4669}
              />
            </View>
            <View style={styles.View_I925_5897_830_5805_687_4671}>
              <Text style={styles.Text_I925_5897_830_5805_687_4671}>
                Download
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_928_5977}>
        <View style={styles.View_I928_5977_830_5526}>
          <View style={styles.View_I928_5977_830_5526_4_227} />
        </View>
      </View>
      <View style={styles.View_928_5978}>
        <View style={styles.View_I928_5978_807_5379}>
          <Text style={styles.Text_I928_5978_807_5379}>Smiles Points</Text>
        </View>
      </View>
      <View style={styles.View_941_5905}>
        <View style={styles.View_941_5903}>
          <Text style={styles.Text_941_5903}>10,280 Points</Text>
        </View>
        <View style={styles.View_941_5904}>
          <Text style={styles.Text_941_5904}>56% of goal reached</Text>
        </View>
      </View>
      <View style={styles.View_961_5901}>
        <View style={styles.View_938_5919} />
        <View style={styles.View_938_5920} />
      </View>
      <View style={styles.View_944_5892}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05cc/a73c/d44c69c3bdd4533c20221609df610ccd"
          }}
          style={styles.ImageBackground_943_5923}
        />
        <View style={styles.View_943_5928}>
          <Text style={styles.Text_943_5928}>Donate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86e0/3371/57706b8b6dad681050a11ca267902138"
          }}
          style={styles.ImageBackground_943_5929}
        />
      </View>
      <View style={styles.View_945_5896}>
        <View style={styles.View_I945_5896_982_3933}>
          <View style={styles.View_I945_5896_982_3935}>
            <Text style={styles.Text_I945_5896_982_3935}>Points Goal</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_955_5909}>
        <View style={styles.View_I955_5909_917_5958}>
          <Text style={styles.Text_I955_5909_917_5958}>07/14/21</Text>
        </View>
      </View>
      <View style={styles.View_955_5910}>
        <View style={styles.View_I955_5910_917_5960}>
          <Text style={styles.Text_I955_5910_917_5960}>Free Consultation</Text>
        </View>
      </View>
      <View style={styles.View_955_5911}>
        <View style={styles.View_I955_5911_917_5959}>
          <Text style={styles.Text_I955_5911_917_5959}>100 points</Text>
        </View>
      </View>
      <View style={styles.View_961_5902}>
        <View style={styles.View_I961_5902_917_5958}>
          <Text style={styles.Text_I961_5902_917_5958}>07/13/21</Text>
        </View>
      </View>
      <View style={styles.View_961_5903}>
        <View style={styles.View_I961_5903_917_5960}>
          <Text style={styles.Text_I961_5903_917_5960}>Free Consultation</Text>
        </View>
      </View>
      <View style={styles.View_961_5904}>
        <View style={styles.View_I961_5904_917_5959}>
          <Text style={styles.Text_I961_5904_917_5959}>100 points</Text>
        </View>
      </View>
      <View style={styles.View_961_5908}>
        <View style={styles.View_I961_5908_917_5958}>
          <Text style={styles.Text_I961_5908_917_5958}>07/12/21</Text>
        </View>
      </View>
      <View style={styles.View_961_5909}>
        <View style={styles.View_I961_5909_917_5960}>
          <Text style={styles.Text_I961_5909_917_5960}>Caretaker Help</Text>
        </View>
      </View>
      <View style={styles.View_961_5910}>
        <View style={styles.View_I961_5910_917_5959}>
          <Text style={styles.Text_I961_5910_917_5959}>100 points</Text>
        </View>
      </View>
      <View style={styles.View_965_5916}>
        <View style={styles.View_962_5914}>
          <Text style={styles.Text_962_5914}>View More</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/844f/3b52/34b8ffcce8c1e023a6e46bd8ad5f3e76"
          }}
          style={styles.ImageBackground_962_5915}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("344%") },
  View_917_5750: {
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
  View_I917_5750_199_344: {
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
  View_I917_5750_199_344_4_227: {
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
  ImageBackground_I917_5750_199_345: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("3%")
  },
  View_I917_5750_199_346: {
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
  View_I917_5750_199_347: {
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
  View_I917_5750_199_349: {
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
  Text_I917_5750_199_349: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I917_5750_199_350: {
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
  ImageBackground_I917_5750_199_351: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I917_5750_199_352: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I917_5750_199_353: {
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
  ImageBackground_I917_5750_199_354: {
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
  View_917_5752: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("119%"),
    minHeight: hp("119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_5752_830_5526: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_5752_830_5526_4_227: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_917_5754: {
    width: wp("14%"),
    height: hp("4%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_5754_807_5379: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I917_5754_807_5379: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_917_5756: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("324%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_5756_199_444: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_I917_5756_199_445: {
    width: wp("100%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_5756_199_445_4_227: {
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
  View_I917_5756_199_446: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("12%")
  },
  View_I917_5756_199_447: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I917_5756_199_447: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I917_5756_199_448: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I917_5756_199_450: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("12%")
  },
  View_I917_5756_199_451: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I917_5756_199_451: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I917_5756_199_452: {
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
  View_I917_5756_199_453: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I917_5756_199_454: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I917_5756_199_456: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I917_5756_199_457: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I917_5756_199_459: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("12%")
  },
  View_I917_5756_199_460: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I917_5756_199_460: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I917_5756_199_461: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I917_5756_199_463: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%")
  },
  ImageBackground_I917_5756_199_464: {
    width: wp("7%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I917_5756_199_465: {
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
  View_I917_5756_199_466: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I917_5756_199_467: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I917_5756_199_469: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%")
  },
  ImageBackground_I917_5756_199_470: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I917_5756_199_471: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I917_5756_199_472: {
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
  ImageBackground_I917_5756_199_473: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I917_5756_199_478: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I917_5756_199_478: {
    color: "rgba(28, 200, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_917_6028: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_917_6024: {
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
  View_I917_6024_917_5957: {
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
  View_917_6025: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6025_917_5958: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I917_6025_917_5958: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_917_6026: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6026_917_5960: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I917_6026_917_5960: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_917_6027: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6027_917_5959: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I917_6027_917_5959: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_917_5989: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_5989_713_4865: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I917_5989_713_4865: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_917_6044: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("86%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6044_917_6024: {
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
  View_I917_6044_917_6024_917_5957: {
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
  View_I917_6044_917_6025: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6044_917_6025_917_5958: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I917_6044_917_6025_917_5958: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I917_6044_917_6026: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6044_917_6026_917_5960: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I917_6044_917_6026_917_5960: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I917_6044_917_6027: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6044_917_6027_917_5959: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I917_6044_917_6027_917_5959: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I917_6044_917_5989: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6044_917_5989_713_4865: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I917_6044_917_5989_713_4865: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_917_6033: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("69%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6033_917_6024: {
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
  View_I917_6033_917_6024_917_5957: {
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
  View_I917_6033_917_6025: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6033_917_6025_917_5958: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I917_6033_917_6025_917_5958: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I917_6033_917_6026: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6033_917_6026_917_5960: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I917_6033_917_6026_917_5960: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I917_6033_917_6027: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6033_917_6027_917_5959: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I917_6033_917_6027_917_5959: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I917_6033_917_5989: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6033_917_5989_713_4865: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I917_6033_917_5989_713_4865: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_917_6055: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("102%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6055_917_6024: {
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
  View_I917_6055_917_6024_917_5957: {
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
  View_I917_6055_917_6025: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6055_917_6025_917_5958: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I917_6055_917_6025_917_5958: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I917_6055_917_6026: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6055_917_6026_917_5960: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I917_6055_917_6026_917_5960: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I917_6055_917_6027: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6055_917_6027_917_5959: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I917_6055_917_6027_917_5959: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I917_6055_917_5989: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6055_917_5989_713_4865: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I917_6055_917_5989_713_4865: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_917_6066: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("119%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6066_917_6024: {
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
  View_I917_6066_917_6024_917_5957: {
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
  View_I917_6066_917_6025: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6066_917_6025_917_5958: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I917_6066_917_6025_917_5958: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I917_6066_917_6026: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6066_917_6026_917_5960: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I917_6066_917_6026_917_5960: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I917_6066_917_6027: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6066_917_6027_917_5959: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I917_6066_917_6027_917_5959: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I917_6066_917_5989: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I917_6066_917_5989_713_4865: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I917_6066_917_5989_713_4865: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_922_5871: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_920_5861: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_920_5862: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I920_5862_830_5847: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I920_5862_830_5847: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_922_5870: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_925_5875: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I925_5875_830_5805: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I925_5875_830_5805_687_4666: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I925_5875_830_5805_687_4667: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_I925_5875_830_5805_687_4668: {
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
  ImageBackground_I925_5875_830_5805_687_4669: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I925_5875_830_5805_687_4671: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I925_5875_830_5805_687_4671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_925_5889: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("152%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I925_5889_830_5526: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I925_5889_830_5526_4_227: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_925_5890: {
    width: wp("15%"),
    height: hp("4%"),
    top: hp("159%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I925_5890_807_5379: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I925_5890_807_5379: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_925_5976: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("181%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_925_5966: {
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
  View_I925_5966_917_5957: {
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
  View_925_5967: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I925_5967_917_5958: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I925_5967_917_5958: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_925_5968: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I925_5968_917_5960: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I925_5968_917_5960: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_925_5969: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I925_5969_917_5959: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I925_5969_917_5959: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_925_5893: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("198%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I925_5893_917_6024: {
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
  View_I925_5893_917_6024_917_5957: {
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
  View_I925_5893_917_6025: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I925_5893_917_6025_917_5958: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I925_5893_917_6025_917_5958: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I925_5893_917_6026: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I925_5893_917_6026_917_5960: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I925_5893_917_6026_917_5960: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I925_5893_917_6027: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I925_5893_917_6027_917_5959: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I925_5893_917_6027_917_5959: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I925_5893_917_5989: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I925_5893_917_5989_713_4865: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I925_5893_917_5989_713_4865: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_925_5896: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("170%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I925_5896_920_5861: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I925_5896_920_5862: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I925_5896_920_5862_830_5847: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I925_5896_920_5862_830_5847: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I925_5896_922_5870: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_925_5897: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("170%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I925_5897_830_5805: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I925_5897_830_5805_687_4666: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I925_5897_830_5805_687_4667: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_I925_5897_830_5805_687_4668: {
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
  ImageBackground_I925_5897_830_5805_687_4669: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I925_5897_830_5805_687_4671: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I925_5897_830_5805_687_4671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_928_5977: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("231%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I928_5977_830_5526: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I928_5977_830_5526_4_227: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_928_5978: {
    width: wp("12%"),
    height: hp("4%"),
    top: hp("238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I928_5978_807_5379: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I928_5978_807_5379: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_941_5905: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("269%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_941_5903: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_941_5903: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_941_5904: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_941_5904: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_961_5901: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("260%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_938_5919: {
    flexGrow: 1,
    width: wp("76%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)",
    opacity: 0.5
  },
  View_938_5920: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_944_5892: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("249%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_943_5923: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_943_5928: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_943_5928: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_943_5929: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_945_5896: {
    width: wp("10%"),
    height: hp("8%"),
    top: hp("249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I945_5896_982_3933: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I945_5896_982_3935: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I945_5896_982_3935: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_955_5909: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I955_5909_917_5958: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I955_5909_917_5958: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_955_5910: {
    width: wp("13%"),
    height: hp("5%"),
    top: hp("282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I955_5910_917_5960: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I955_5910_917_5960: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_955_5911: {
    width: wp("7%"),
    height: hp("5%"),
    top: hp("282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I955_5911_917_5959: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I955_5911_917_5959: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_961_5902: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I961_5902_917_5958: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I961_5902_917_5958: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_961_5903: {
    width: wp("13%"),
    height: hp("5%"),
    top: hp("288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I961_5903_917_5960: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I961_5903_917_5960: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_961_5904: {
    width: wp("7%"),
    height: hp("5%"),
    top: hp("288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I961_5904_917_5959: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I961_5904_917_5959: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_961_5908: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I961_5908_917_5958: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I961_5908_917_5958: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_961_5909: {
    width: wp("13%"),
    height: hp("5%"),
    top: hp("294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I961_5909_917_5960: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I961_5909_917_5960: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_961_5910: {
    width: wp("7%"),
    height: hp("5%"),
    top: hp("294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I961_5910_917_5959: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I961_5910_917_5959: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_965_5916: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("303%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_962_5914: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_962_5914: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_962_5915: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
