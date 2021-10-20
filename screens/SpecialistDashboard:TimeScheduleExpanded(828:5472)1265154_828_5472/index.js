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
      <View style={styles.View_828_5473}>
        <View style={styles.View_I828_5473_199_344}>
          <View style={styles.View_I828_5473_199_344_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5979/5b08/877131cfaf519bff9199829a08dfeb63"
          }}
          style={styles.ImageBackground_I828_5473_199_345}
        />
        <View style={styles.View_I828_5473_199_346}>
          <View style={styles.View_I828_5473_199_347}>
            <View style={styles.View_I828_5473_199_349}>
              <Text style={styles.Text_I828_5473_199_349}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I828_5473_199_350}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I828_5473_199_351}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I828_5473_199_352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/171b/ad41/cca1fc9a4c61a69f2073888e1559d679"
          }}
          style={styles.ImageBackground_I828_5473_199_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/85c9/7f4f5815b12675432f7bce135fb62d6e"
          }}
          style={styles.ImageBackground_I828_5473_199_354}
        />
      </View>
      <View style={styles.View_828_5474}>
        <View style={styles.View_I828_5474_199_444}>
          <View style={styles.View_I828_5474_199_445}>
            <View style={styles.View_I828_5474_199_445_4_227} />
          </View>
        </View>
        <View style={styles.View_I828_5474_199_446}>
          <View style={styles.View_I828_5474_199_447}>
            <Text style={styles.Text_I828_5474_199_447}>My Health</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbcc/2f1e/81abeac8cf8ec8378572a9b6dfbf3974"
            }}
            style={styles.ImageBackground_I828_5474_199_448}
          />
        </View>
        <View style={styles.View_I828_5474_199_450}>
          <View style={styles.View_I828_5474_199_451}>
            <Text style={styles.Text_I828_5474_199_451}>Specislist Area</Text>
          </View>
          <View style={styles.View_I828_5474_199_452}>
            <View style={styles.View_I828_5474_199_453}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/984b/92fa/664da26c3fb9b69746b556885206648d"
                }}
                style={styles.ImageBackground_I828_5474_199_454}
              />
            </View>
            <View style={styles.View_I828_5474_199_456}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34b/3fad/fc809c0af8ff375c0c1d3e6770c999b4"
                }}
                style={styles.ImageBackground_I828_5474_199_457}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I828_5474_199_459}>
          <View style={styles.View_I828_5474_199_460}>
            <Text style={styles.Text_I828_5474_199_460}>Friends Area</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff31/53eb/73d3d7306c8dbccc98301d70467a39f7"
            }}
            style={styles.ImageBackground_I828_5474_199_461}
          />
        </View>
        <View style={styles.View_I828_5474_199_463}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6a6/d86f/210c1d275b8c8f0067359d58037f63b0"
            }}
            style={styles.ImageBackground_I828_5474_199_464}
          />
          <View style={styles.View_I828_5474_199_465}>
            <View style={styles.View_I828_5474_199_466}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3155/9060/f25304a55c8d3ee3cadb0523048eb23b"
                }}
                style={styles.ImageBackground_I828_5474_199_467}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I828_5474_199_469}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5933/03b8/c08f024b145b53dd98ea067662c58dab"
            }}
            style={styles.ImageBackground_I828_5474_199_470}
          />
          <View style={styles.View_I828_5474_199_471}>
            <View style={styles.View_I828_5474_199_472}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a6/6501/690ec443ee5966d5124104068518bdb1"
                }}
                style={styles.ImageBackground_I828_5474_199_473}
              />
            </View>
            <View style={styles.View_I828_5474_199_478}>
              <Text style={styles.Text_I828_5474_199_478}>Dashboard</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_807_5378}>
        <View style={styles.View_I807_5378_4_227} />
      </View>
      <View style={styles.View_827_5704}>
        <View style={styles.View_807_5379}>
          <Text style={styles.Text_807_5379}>Consultation Types</Text>
        </View>
      </View>
      <View style={styles.View_807_5380} />
      <View style={styles.View_807_5381}>
        <View style={styles.View_I807_5381_982_4250} />
        <View style={styles.View_I807_5381_982_4251} />
      </View>
      <View style={styles.View_807_5382}>
        <View style={styles.View_I807_5382_726_4900}>
          <Text style={styles.Text_I807_5382_726_4900}>
            5 Minutes Free Consultation
          </Text>
        </View>
      </View>
      <View style={styles.View_807_5384}>
        <View style={styles.View_I807_5384_792_5165}>
          <Text style={styles.Text_I807_5384_792_5165}>Free</Text>
        </View>
      </View>
      <View style={styles.View_812_5686}>
        <View style={styles.View_812_5685}>
          <View style={styles.View_I812_5685_808_5758} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a7c/5d25/6c52399901e593ce33e0e5fae64faaf1"
          }}
          style={styles.ImageBackground_808_5759}
        />
        <View style={styles.View_808_5760}>
          <View style={styles.View_I808_5760_803_5185}>
            <View style={styles.View_I808_5760_803_5185_803_5169}>
              <Text style={styles.Text_I808_5760_803_5185_803_5169}>From</Text>
            </View>
          </View>
          <View style={styles.View_I808_5760_803_5186}>
            <View style={styles.View_I808_5760_803_5186_803_5170}>
              <Text style={styles.Text_I808_5760_803_5186_803_5170}>14:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_808_5761}>
          <View style={styles.View_I808_5761_803_5180}>
            <View style={styles.View_I808_5761_803_5180_803_5169}>
              <Text style={styles.Text_I808_5761_803_5180_803_5169}>To</Text>
            </View>
          </View>
          <View style={styles.View_I808_5761_803_5181}>
            <View style={styles.View_I808_5761_803_5181_803_5170}>
              <Text style={styles.Text_I808_5761_803_5181_803_5170}>16:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_808_5762}>
          <View style={styles.View_I808_5762_803_5185}>
            <View style={styles.View_I808_5762_803_5185_803_5169}>
              <Text style={styles.Text_I808_5762_803_5185_803_5169}>From</Text>
            </View>
          </View>
          <View style={styles.View_I808_5762_803_5186}>
            <View style={styles.View_I808_5762_803_5186_803_5170}>
              <Text style={styles.Text_I808_5762_803_5186_803_5170}>18:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_808_5763}>
          <View style={styles.View_I808_5763_803_5180}>
            <View style={styles.View_I808_5763_803_5180_803_5169}>
              <Text style={styles.Text_I808_5763_803_5180_803_5169}>To</Text>
            </View>
          </View>
          <View style={styles.View_I808_5763_803_5181}>
            <View style={styles.View_I808_5763_803_5181_803_5170}>
              <Text style={styles.Text_I808_5763_803_5181_803_5170}>21:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_808_5764}>
          <View style={styles.View_I808_5764_803_5185}>
            <View style={styles.View_I808_5764_803_5185_803_5169}>
              <Text style={styles.Text_I808_5764_803_5185_803_5169}>From</Text>
            </View>
          </View>
          <View style={styles.View_I808_5764_803_5186}>
            <View style={styles.View_I808_5764_803_5186_803_5170}>
              <Text style={styles.Text_I808_5764_803_5186_803_5170}>22:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_808_5765}>
          <View style={styles.View_I808_5765_803_5180}>
            <View style={styles.View_I808_5765_803_5180_803_5169}>
              <Text style={styles.Text_I808_5765_803_5180_803_5169}>To</Text>
            </View>
          </View>
          <View style={styles.View_I808_5765_803_5181}>
            <View style={styles.View_I808_5765_803_5181_803_5170}>
              <Text style={styles.Text_I808_5765_803_5181_803_5170}>00:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_808_5766}>
          <View style={styles.View_I808_5766_803_5175}>
            <Text style={styles.Text_I808_5766_803_5175}>Monday</Text>
          </View>
        </View>
        <View style={styles.View_808_5767}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11c0/c588/60bc898739e4bb27f84b171bf8347532"
            }}
            style={styles.ImageBackground_I808_5767_803_5386}
          />
          <View style={styles.View_I808_5767_803_5397}>
            <View style={styles.View_I808_5767_803_5397_803_5391}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ee/8cd5/8a88a8d0a8b4dbd5d772e2eafffdb386"
                }}
                style={styles.ImageBackground_I808_5767_803_5397_803_5392}
              />
            </View>
            <View style={styles.View_I808_5767_803_5397_803_5387}>
              <View style={styles.View_I808_5767_803_5397_803_5387_759_4856}>
                <Text style={styles.Text_I808_5767_803_5397_803_5387_759_4856}>
                  Add
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_808_5768}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aeca/5de9/cba476fdeae679bba9591bb1a5e36e43"
            }}
            style={styles.ImageBackground_I808_5768_805_5405}
          />
        </View>
        <View style={styles.View_808_5769}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aeca/5de9/cba476fdeae679bba9591bb1a5e36e43"
            }}
            style={styles.ImageBackground_I808_5769_805_5405}
          />
        </View>
        <View style={styles.View_808_5770}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aeca/5de9/cba476fdeae679bba9591bb1a5e36e43"
            }}
            style={styles.ImageBackground_I808_5770_805_5405}
          />
        </View>
      </View>
      <View style={styles.View_812_5676}>
        <View style={styles.View_812_5674}>
          <View style={styles.View_I812_5674_808_5815} />
        </View>
        <View style={styles.View_812_5675}>
          <View style={styles.View_I812_5675_812_5664}>
            <View style={styles.View_I812_5675_812_5666}>
              <Text style={styles.Text_I812_5675_812_5666}>
                Average Time (in minutes) per Appointment
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_814_5629}>
        <View style={styles.View_807_5387}>
          <View style={styles.View_I807_5387_805_5653} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a7c/5d25/6c52399901e593ce33e0e5fae64faaf1"
          }}
          style={styles.ImageBackground_807_5388}
        />
        <View style={styles.View_807_5389}>
          <View style={styles.View_I807_5389_803_5185}>
            <View style={styles.View_I807_5389_803_5185_803_5169}>
              <Text style={styles.Text_I807_5389_803_5185_803_5169}>From</Text>
            </View>
          </View>
          <View style={styles.View_I807_5389_803_5186}>
            <View style={styles.View_I807_5389_803_5186_803_5170}>
              <Text style={styles.Text_I807_5389_803_5186_803_5170}>14:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5390}>
          <View style={styles.View_I807_5390_803_5180}>
            <View style={styles.View_I807_5390_803_5180_803_5169}>
              <Text style={styles.Text_I807_5390_803_5180_803_5169}>To</Text>
            </View>
          </View>
          <View style={styles.View_I807_5390_803_5181}>
            <View style={styles.View_I807_5390_803_5181_803_5170}>
              <Text style={styles.Text_I807_5390_803_5181_803_5170}>16:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5391}>
          <View style={styles.View_I807_5391_803_5185}>
            <View style={styles.View_I807_5391_803_5185_803_5169}>
              <Text style={styles.Text_I807_5391_803_5185_803_5169}>From</Text>
            </View>
          </View>
          <View style={styles.View_I807_5391_803_5186}>
            <View style={styles.View_I807_5391_803_5186_803_5170}>
              <Text style={styles.Text_I807_5391_803_5186_803_5170}>18:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5392}>
          <View style={styles.View_I807_5392_803_5180}>
            <View style={styles.View_I807_5392_803_5180_803_5169}>
              <Text style={styles.Text_I807_5392_803_5180_803_5169}>To</Text>
            </View>
          </View>
          <View style={styles.View_I807_5392_803_5181}>
            <View style={styles.View_I807_5392_803_5181_803_5170}>
              <Text style={styles.Text_I807_5392_803_5181_803_5170}>21:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5393}>
          <View style={styles.View_I807_5393_803_5185}>
            <View style={styles.View_I807_5393_803_5185_803_5169}>
              <Text style={styles.Text_I807_5393_803_5185_803_5169}>From</Text>
            </View>
          </View>
          <View style={styles.View_I807_5393_803_5186}>
            <View style={styles.View_I807_5393_803_5186_803_5170}>
              <Text style={styles.Text_I807_5393_803_5186_803_5170}>22:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5394}>
          <View style={styles.View_I807_5394_803_5180}>
            <View style={styles.View_I807_5394_803_5180_803_5169}>
              <Text style={styles.Text_I807_5394_803_5180_803_5169}>To</Text>
            </View>
          </View>
          <View style={styles.View_I807_5394_803_5181}>
            <View style={styles.View_I807_5394_803_5181_803_5170}>
              <Text style={styles.Text_I807_5394_803_5181_803_5170}>00:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5395}>
          <View style={styles.View_I807_5395_803_5175}>
            <Text style={styles.Text_I807_5395_803_5175}>Thursday</Text>
          </View>
        </View>
        <View style={styles.View_807_5396}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11c0/c588/60bc898739e4bb27f84b171bf8347532"
            }}
            style={styles.ImageBackground_I807_5396_803_5386}
          />
          <View style={styles.View_I807_5396_803_5397}>
            <View style={styles.View_I807_5396_803_5397_803_5391}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ee/8cd5/8a88a8d0a8b4dbd5d772e2eafffdb386"
                }}
                style={styles.ImageBackground_I807_5396_803_5397_803_5392}
              />
            </View>
            <View style={styles.View_I807_5396_803_5397_803_5387}>
              <View style={styles.View_I807_5396_803_5397_803_5387_759_4856}>
                <Text style={styles.Text_I807_5396_803_5397_803_5387_759_4856}>
                  Add
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5397}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aeca/5de9/cba476fdeae679bba9591bb1a5e36e43"
            }}
            style={styles.ImageBackground_I807_5397_805_5405}
          />
        </View>
        <View style={styles.View_807_5398}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aeca/5de9/cba476fdeae679bba9591bb1a5e36e43"
            }}
            style={styles.ImageBackground_I807_5398_805_5405}
          />
        </View>
        <View style={styles.View_807_5399}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aeca/5de9/cba476fdeae679bba9591bb1a5e36e43"
            }}
            style={styles.ImageBackground_I807_5399_805_5405}
          />
        </View>
      </View>
      <View style={styles.View_814_5633}>
        <View style={styles.View_807_5400}>
          <View style={styles.View_I807_5400_805_5653} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a7c/5d25/6c52399901e593ce33e0e5fae64faaf1"
          }}
          style={styles.ImageBackground_807_5401}
        />
        <View style={styles.View_807_5402}>
          <View style={styles.View_I807_5402_803_5185}>
            <View style={styles.View_I807_5402_803_5185_803_5169}>
              <Text style={styles.Text_I807_5402_803_5185_803_5169}>From</Text>
            </View>
          </View>
          <View style={styles.View_I807_5402_803_5186}>
            <View style={styles.View_I807_5402_803_5186_803_5170}>
              <Text style={styles.Text_I807_5402_803_5186_803_5170}>8:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5403}>
          <View style={styles.View_I807_5403_803_5180}>
            <View style={styles.View_I807_5403_803_5180_803_5169}>
              <Text style={styles.Text_I807_5403_803_5180_803_5169}>To</Text>
            </View>
          </View>
          <View style={styles.View_I807_5403_803_5181}>
            <View style={styles.View_I807_5403_803_5181_803_5170}>
              <Text style={styles.Text_I807_5403_803_5181_803_5170}>10:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5404}>
          <View style={styles.View_I807_5404_803_5185}>
            <View style={styles.View_I807_5404_803_5185_803_5169}>
              <Text style={styles.Text_I807_5404_803_5185_803_5169}>From</Text>
            </View>
          </View>
          <View style={styles.View_I807_5404_803_5186}>
            <View style={styles.View_I807_5404_803_5186_803_5170}>
              <Text style={styles.Text_I807_5404_803_5186_803_5170}>12:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5405}>
          <View style={styles.View_I807_5405_803_5180}>
            <View style={styles.View_I807_5405_803_5180_803_5169}>
              <Text style={styles.Text_I807_5405_803_5180_803_5169}>To</Text>
            </View>
          </View>
          <View style={styles.View_I807_5405_803_5181}>
            <View style={styles.View_I807_5405_803_5181_803_5170}>
              <Text style={styles.Text_I807_5405_803_5181_803_5170}>14:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5406}>
          <View style={styles.View_I807_5406_803_5185}>
            <View style={styles.View_I807_5406_803_5185_803_5169}>
              <Text style={styles.Text_I807_5406_803_5185_803_5169}>From</Text>
            </View>
          </View>
          <View style={styles.View_I807_5406_803_5186}>
            <View style={styles.View_I807_5406_803_5186_803_5170}>
              <Text style={styles.Text_I807_5406_803_5186_803_5170}>17:30</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5407}>
          <View style={styles.View_I807_5407_803_5180}>
            <View style={styles.View_I807_5407_803_5180_803_5169}>
              <Text style={styles.Text_I807_5407_803_5180_803_5169}>To</Text>
            </View>
          </View>
          <View style={styles.View_I807_5407_803_5181}>
            <View style={styles.View_I807_5407_803_5181_803_5170}>
              <Text style={styles.Text_I807_5407_803_5181_803_5170}>19:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5408}>
          <View style={styles.View_I807_5408_803_5175}>
            <Text style={styles.Text_I807_5408_803_5175}>Sunday</Text>
          </View>
        </View>
        <View style={styles.View_807_5409}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11c0/c588/60bc898739e4bb27f84b171bf8347532"
            }}
            style={styles.ImageBackground_I807_5409_803_5386}
          />
          <View style={styles.View_I807_5409_803_5397}>
            <View style={styles.View_I807_5409_803_5397_803_5391}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ee/8cd5/8a88a8d0a8b4dbd5d772e2eafffdb386"
                }}
                style={styles.ImageBackground_I807_5409_803_5397_803_5392}
              />
            </View>
            <View style={styles.View_I807_5409_803_5397_803_5387}>
              <View style={styles.View_I807_5409_803_5397_803_5387_759_4856}>
                <Text style={styles.Text_I807_5409_803_5397_803_5387_759_4856}>
                  Add
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5410}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aeca/5de9/cba476fdeae679bba9591bb1a5e36e43"
            }}
            style={styles.ImageBackground_I807_5410_805_5405}
          />
        </View>
        <View style={styles.View_807_5411}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aeca/5de9/cba476fdeae679bba9591bb1a5e36e43"
            }}
            style={styles.ImageBackground_I807_5411_805_5405}
          />
        </View>
        <View style={styles.View_807_5412}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aeca/5de9/cba476fdeae679bba9591bb1a5e36e43"
            }}
            style={styles.ImageBackground_I807_5412_805_5405}
          />
        </View>
        <View style={styles.View_807_5413}>
          <View style={styles.View_I807_5413_803_5185}>
            <View style={styles.View_I807_5413_803_5185_803_5169}>
              <Text style={styles.Text_I807_5413_803_5185_803_5169}>From</Text>
            </View>
          </View>
          <View style={styles.View_I807_5413_803_5186}>
            <View style={styles.View_I807_5413_803_5186_803_5170}>
              <Text style={styles.Text_I807_5413_803_5186_803_5170}>20:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5414}>
          <View style={styles.View_I807_5414_803_5180}>
            <View style={styles.View_I807_5414_803_5180_803_5169}>
              <Text style={styles.Text_I807_5414_803_5180_803_5169}>To</Text>
            </View>
          </View>
          <View style={styles.View_I807_5414_803_5181}>
            <View style={styles.View_I807_5414_803_5181_803_5170}>
              <Text style={styles.Text_I807_5414_803_5181_803_5170}>00:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5415}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aeca/5de9/cba476fdeae679bba9591bb1a5e36e43"
            }}
            style={styles.ImageBackground_I807_5415_805_5405}
          />
        </View>
      </View>
      <View style={styles.View_827_5668}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a993/7ece/9b003b6eb8fa7203b14f32ef5ac292d7"
          }}
          style={styles.ImageBackground_I827_5668_803_5386}
        />
        <View style={styles.View_I827_5668_803_5397}>
          <View style={styles.View_I827_5668_803_5397_803_5391}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ee/8cd5/8a88a8d0a8b4dbd5d772e2eafffdb386"
              }}
              style={styles.ImageBackground_I827_5668_803_5397_803_5392}
            />
          </View>
          <View style={styles.View_I827_5668_803_5397_803_5387}>
            <View style={styles.View_I827_5668_803_5397_803_5387_759_4856}>
              <Text style={styles.Text_I827_5668_803_5397_803_5387_759_4856}>
                Add
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_814_5628}>
        <View style={styles.View_807_5425}>
          <View style={styles.View_I807_5425_805_5510} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a7c/5d25/6c52399901e593ce33e0e5fae64faaf1"
          }}
          style={styles.ImageBackground_807_5426}
        />
        <View style={styles.View_807_5427}>
          <View style={styles.View_I807_5427_803_5175}>
            <Text style={styles.Text_I807_5427_803_5175}>Wednesday</Text>
          </View>
        </View>
        <View style={styles.View_807_5428}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11c0/c588/60bc898739e4bb27f84b171bf8347532"
            }}
            style={styles.ImageBackground_I807_5428_803_5386}
          />
          <View style={styles.View_I807_5428_803_5397}>
            <View style={styles.View_I807_5428_803_5397_803_5391}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ee/8cd5/8a88a8d0a8b4dbd5d772e2eafffdb386"
                }}
                style={styles.ImageBackground_I807_5428_803_5397_803_5392}
              />
            </View>
            <View style={styles.View_I807_5428_803_5397_803_5387}>
              <View style={styles.View_I807_5428_803_5397_803_5387_759_4856}>
                <Text style={styles.Text_I807_5428_803_5397_803_5387_759_4856}>
                  Add
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_814_5631}>
        <View style={styles.View_807_5429}>
          <View style={styles.View_I807_5429_805_5510} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a7c/5d25/6c52399901e593ce33e0e5fae64faaf1"
          }}
          style={styles.ImageBackground_807_5430}
        />
        <View style={styles.View_807_5431}>
          <View style={styles.View_I807_5431_803_5175}>
            <Text style={styles.Text_I807_5431_803_5175}>Saturday</Text>
          </View>
        </View>
        <View style={styles.View_807_5432}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11c0/c588/60bc898739e4bb27f84b171bf8347532"
            }}
            style={styles.ImageBackground_I807_5432_803_5386}
          />
          <View style={styles.View_I807_5432_803_5397}>
            <View style={styles.View_I807_5432_803_5397_803_5391}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ee/8cd5/8a88a8d0a8b4dbd5d772e2eafffdb386"
                }}
                style={styles.ImageBackground_I807_5432_803_5397_803_5392}
              />
            </View>
            <View style={styles.View_I807_5432_803_5397_803_5387}>
              <View style={styles.View_I807_5432_803_5397_803_5387_759_4856}>
                <Text style={styles.Text_I807_5432_803_5397_803_5387_759_4856}>
                  Add
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_814_5627}>
        <View style={styles.View_807_5416}>
          <View style={styles.View_I807_5416_805_5510} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a7c/5d25/6c52399901e593ce33e0e5fae64faaf1"
          }}
          style={styles.ImageBackground_807_5417}
        />
        <View style={styles.View_807_5418}>
          <View style={styles.View_I807_5418_803_5185}>
            <View style={styles.View_I807_5418_803_5185_803_5169}>
              <Text style={styles.Text_I807_5418_803_5185_803_5169}>From</Text>
            </View>
          </View>
          <View style={styles.View_I807_5418_803_5186}>
            <View style={styles.View_I807_5418_803_5186_803_5170}>
              <Text style={styles.Text_I807_5418_803_5186_803_5170}>14:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5419}>
          <View style={styles.View_I807_5419_803_5180}>
            <View style={styles.View_I807_5419_803_5180_803_5169}>
              <Text style={styles.Text_I807_5419_803_5180_803_5169}>To</Text>
            </View>
          </View>
          <View style={styles.View_I807_5419_803_5181}>
            <View style={styles.View_I807_5419_803_5181_803_5170}>
              <Text style={styles.Text_I807_5419_803_5181_803_5170}>16:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5420}>
          <View style={styles.View_I807_5420_803_5185}>
            <View style={styles.View_I807_5420_803_5185_803_5169}>
              <Text style={styles.Text_I807_5420_803_5185_803_5169}>From</Text>
            </View>
          </View>
          <View style={styles.View_I807_5420_803_5186}>
            <View style={styles.View_I807_5420_803_5186_803_5170}>
              <Text style={styles.Text_I807_5420_803_5186_803_5170}>18:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5421}>
          <View style={styles.View_I807_5421_803_5180}>
            <View style={styles.View_I807_5421_803_5180_803_5169}>
              <Text style={styles.Text_I807_5421_803_5180_803_5169}>To</Text>
            </View>
          </View>
          <View style={styles.View_I807_5421_803_5181}>
            <View style={styles.View_I807_5421_803_5181_803_5170}>
              <Text style={styles.Text_I807_5421_803_5181_803_5170}>21:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5422}>
          <View style={styles.View_I807_5422_803_5175}>
            <Text style={styles.Text_I807_5422_803_5175}>Tuesday</Text>
          </View>
        </View>
        <View style={styles.View_807_5423}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11c0/c588/60bc898739e4bb27f84b171bf8347532"
            }}
            style={styles.ImageBackground_I807_5423_803_5386}
          />
          <View style={styles.View_I807_5423_803_5397}>
            <View style={styles.View_I807_5423_803_5397_803_5391}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ee/8cd5/8a88a8d0a8b4dbd5d772e2eafffdb386"
                }}
                style={styles.ImageBackground_I807_5423_803_5397_803_5392}
              />
            </View>
            <View style={styles.View_I807_5423_803_5397_803_5387}>
              <View style={styles.View_I807_5423_803_5397_803_5387_759_4856}>
                <Text style={styles.Text_I807_5423_803_5397_803_5387_759_4856}>
                  Add
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5424}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aeca/5de9/cba476fdeae679bba9591bb1a5e36e43"
            }}
            style={styles.ImageBackground_I807_5424_805_5405}
          />
        </View>
        <View style={styles.View_807_5433}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aeca/5de9/cba476fdeae679bba9591bb1a5e36e43"
            }}
            style={styles.ImageBackground_I807_5433_805_5405}
          />
        </View>
      </View>
      <View style={styles.View_814_5630}>
        <View style={styles.View_807_5434}>
          <View style={styles.View_I807_5434_805_5510} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a7c/5d25/6c52399901e593ce33e0e5fae64faaf1"
          }}
          style={styles.ImageBackground_807_5435}
        />
        <View style={styles.View_807_5436}>
          <View style={styles.View_I807_5436_803_5185}>
            <View style={styles.View_I807_5436_803_5185_803_5169}>
              <Text style={styles.Text_I807_5436_803_5185_803_5169}>From</Text>
            </View>
          </View>
          <View style={styles.View_I807_5436_803_5186}>
            <View style={styles.View_I807_5436_803_5186_803_5170}>
              <Text style={styles.Text_I807_5436_803_5186_803_5170}>14:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5437}>
          <View style={styles.View_I807_5437_803_5180}>
            <View style={styles.View_I807_5437_803_5180_803_5169}>
              <Text style={styles.Text_I807_5437_803_5180_803_5169}>To</Text>
            </View>
          </View>
          <View style={styles.View_I807_5437_803_5181}>
            <View style={styles.View_I807_5437_803_5181_803_5170}>
              <Text style={styles.Text_I807_5437_803_5181_803_5170}>16:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5438}>
          <View style={styles.View_I807_5438_803_5185}>
            <View style={styles.View_I807_5438_803_5185_803_5169}>
              <Text style={styles.Text_I807_5438_803_5185_803_5169}>From</Text>
            </View>
          </View>
          <View style={styles.View_I807_5438_803_5186}>
            <View style={styles.View_I807_5438_803_5186_803_5170}>
              <Text style={styles.Text_I807_5438_803_5186_803_5170}>18:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5439}>
          <View style={styles.View_I807_5439_803_5180}>
            <View style={styles.View_I807_5439_803_5180_803_5169}>
              <Text style={styles.Text_I807_5439_803_5180_803_5169}>To</Text>
            </View>
          </View>
          <View style={styles.View_I807_5439_803_5181}>
            <View style={styles.View_I807_5439_803_5181_803_5170}>
              <Text style={styles.Text_I807_5439_803_5181_803_5170}>21:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5440}>
          <View style={styles.View_I807_5440_803_5175}>
            <Text style={styles.Text_I807_5440_803_5175}>Friday</Text>
          </View>
        </View>
        <View style={styles.View_807_5441}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11c0/c588/60bc898739e4bb27f84b171bf8347532"
            }}
            style={styles.ImageBackground_I807_5441_803_5386}
          />
          <View style={styles.View_I807_5441_803_5397}>
            <View style={styles.View_I807_5441_803_5397_803_5391}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ee/8cd5/8a88a8d0a8b4dbd5d772e2eafffdb386"
                }}
                style={styles.ImageBackground_I807_5441_803_5397_803_5392}
              />
            </View>
            <View style={styles.View_I807_5441_803_5397_803_5387}>
              <View style={styles.View_I807_5441_803_5397_803_5387_759_4856}>
                <Text style={styles.Text_I807_5441_803_5397_803_5387_759_4856}>
                  Add
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_807_5442}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aeca/5de9/cba476fdeae679bba9591bb1a5e36e43"
            }}
            style={styles.ImageBackground_I807_5442_805_5405}
          />
        </View>
        <View style={styles.View_807_5443}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aeca/5de9/cba476fdeae679bba9591bb1a5e36e43"
            }}
            style={styles.ImageBackground_I807_5443_805_5405}
          />
        </View>
      </View>
      <View style={styles.View_807_5698}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9284/6645/e9e3aaa826915339fef7bda968ae7e0a"
          }}
          style={styles.ImageBackground_I807_5698_726_4836}
        />
      </View>
      <View style={styles.View_827_5666}>
        <View style={styles.View_827_5665}>
          <View style={styles.View_I827_5665_822_5627} />
        </View>
        <View style={styles.View_827_5629}>
          <View style={styles.View_I827_5629_726_4900}>
            <Text style={styles.Text_I827_5629_726_4900}>
              30 Minutes Consultation
            </Text>
          </View>
        </View>
        <View style={styles.View_827_5630}>
          <View style={styles.View_I827_5630_707_5371}>
            <Text style={styles.Text_I827_5630_707_5371}>Text Messaging</Text>
          </View>
          <View style={styles.View_I827_5630_707_5372}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3447/23a0/0b0f4af9b8348048afded97925707aec"
              }}
              style={styles.ImageBackground_I827_5630_707_5373}
            />
          </View>
        </View>
        <View style={styles.View_827_5642}>
          <View style={styles.View_I827_5642_707_5361}>
            <Text style={styles.Text_I827_5642_707_5361}>Phone Call</Text>
          </View>
          <View style={styles.View_I827_5642_707_5362}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1a6/c0ab/3d7230befb9531a54ae2685d68c7d622"
              }}
              style={styles.ImageBackground_I827_5642_707_5363}
            />
          </View>
        </View>
        <View style={styles.View_827_5646}>
          <View style={styles.View_I827_5646_827_5653}>
            <View style={styles.View_I827_5646_827_5653_707_5366}>
              <Text style={styles.Text_I827_5646_827_5653_707_5366}>
                Video Call
              </Text>
            </View>
            <View style={styles.View_I827_5646_827_5653_707_5367}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5696/810d/ca102877d62f460a062b9f005d9d9a5c"
                }}
                style={styles.ImageBackground_I827_5646_827_5653_707_5368}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_827_5628}>
          <View style={styles.View_I827_5628_982_4250} />
          <View style={styles.View_I827_5628_982_4251} />
        </View>
        <View style={styles.View_827_5631}>
          <View style={styles.View_I827_5631_792_5165}>
            <Text style={styles.Text_I827_5631_792_5165}>$65</Text>
          </View>
        </View>
        <View style={styles.View_827_5632}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdc8/759e/f807006cfdc0af8bbda703f79c1c5201"
            }}
            style={styles.ImageBackground_I827_5632_726_4836}
          />
        </View>
      </View>
      <View style={styles.View_815_5627}>
        <Text style={styles.Text_815_5627}>Time Schedule</Text>
      </View>
      <View style={styles.View_851_6403}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33a4/46c7/d7e5546f38a9f49515f7d078c3fb4ff0"
          }}
          style={styles.ImageBackground_851_6344}
        />
        <View style={styles.View_851_6286}>
          <View style={styles.View_I851_6286_707_5371}>
            <Text style={styles.Text_I851_6286_707_5371}>Text Messaging</Text>
          </View>
          <View style={styles.View_I851_6286_707_5372}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a09c/8ce4/4af25b0414bebb3696cd075fcc8f1532"
              }}
              style={styles.ImageBackground_I851_6286_707_5373}
            />
          </View>
        </View>
        <View style={styles.View_851_6328}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6853/e976/e33cfac6e1231109ce5d306d72cb1a3c"
            }}
            style={styles.ImageBackground_I851_6328_982_4345}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20be/75df/4389696349233c41e94a261fb7ad3c03"
            }}
            style={styles.ImageBackground_I851_6328_982_4346}
          />
        </View>
      </View>
      <View style={styles.View_851_6422}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33a4/46c7/d7e5546f38a9f49515f7d078c3fb4ff0"
          }}
          style={styles.ImageBackground_I851_6422_851_6379}
        />
        <View style={styles.View_I851_6422_851_6381}>
          <View style={styles.View_I851_6422_851_6381_707_5361}>
            <Text style={styles.Text_I851_6422_851_6381_707_5361}>
              Phone Call
            </Text>
          </View>
          <View style={styles.View_I851_6422_851_6381_707_5362}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56c8/335b/a741cd2d1f7c00904f604b7fef643365"
              }}
              style={styles.ImageBackground_I851_6422_851_6381_707_5363}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b37/292a/b7f2f33cafe79fcb5fabbcdafe69ba65"
          }}
          style={styles.ImageBackground_I851_6422_851_6401}
        />
      </View>
      <View style={styles.View_851_6407}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33a4/46c7/d7e5546f38a9f49515f7d078c3fb4ff0"
          }}
          style={styles.ImageBackground_851_6376}
        />
        <View style={styles.View_851_6378}>
          <View style={styles.View_I851_6378_827_5653}>
            <View style={styles.View_I851_6378_827_5653_707_5366}>
              <Text style={styles.Text_I851_6378_827_5653_707_5366}>
                Video Call
              </Text>
            </View>
            <View style={styles.View_I851_6378_827_5653_707_5367}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6a6/494f/d50b514e12b1429c5e1c2f6d32c30252"
                }}
                style={styles.ImageBackground_I851_6378_827_5653_707_5368}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b37/292a/b7f2f33cafe79fcb5fabbcdafe69ba65"
          }}
          style={styles.ImageBackground_851_6406}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("389%") },
  View_828_5473: {
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
  View_I828_5473_199_344: {
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
  View_I828_5473_199_344_4_227: {
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
  ImageBackground_I828_5473_199_345: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("3%")
  },
  View_I828_5473_199_346: {
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
  View_I828_5473_199_347: {
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
  View_I828_5473_199_349: {
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
  Text_I828_5473_199_349: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I828_5473_199_350: {
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
  ImageBackground_I828_5473_199_351: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I828_5473_199_352: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I828_5473_199_353: {
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
  ImageBackground_I828_5473_199_354: {
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
  View_828_5474: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("369%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I828_5474_199_444: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_I828_5474_199_445: {
    width: wp("100%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I828_5474_199_445_4_227: {
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
  View_I828_5474_199_446: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("12%")
  },
  View_I828_5474_199_447: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I828_5474_199_447: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I828_5474_199_448: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I828_5474_199_450: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("12%")
  },
  View_I828_5474_199_451: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I828_5474_199_451: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I828_5474_199_452: {
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
  View_I828_5474_199_453: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I828_5474_199_454: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I828_5474_199_456: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I828_5474_199_457: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I828_5474_199_459: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("12%")
  },
  View_I828_5474_199_460: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I828_5474_199_460: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I828_5474_199_461: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I828_5474_199_463: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%")
  },
  ImageBackground_I828_5474_199_464: {
    width: wp("7%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I828_5474_199_465: {
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
  View_I828_5474_199_466: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I828_5474_199_467: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I828_5474_199_469: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%")
  },
  ImageBackground_I828_5474_199_470: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I828_5474_199_471: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I828_5474_199_472: {
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
  ImageBackground_I828_5474_199_473: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I828_5474_199_478: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I828_5474_199_478: {
    color: "rgba(28, 200, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_807_5378: {
    width: wp("93%"),
    height: hp("346%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5378_4_227: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("346%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_827_5704: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_807_5379: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_807_5379: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5380: {
    width: wp("86%"),
    height: hp("285%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_807_5381: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5381_982_4250: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I807_5381_982_4251: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 247, 252, 1)"
  },
  View_807_5382: {
    width: wp("24%"),
    height: hp("4%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5382_726_4900: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I807_5382_726_4900: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5384: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5384_792_5165: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_I807_5384_792_5165: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_812_5686: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("96%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_812_5685: {
    flexGrow: 1,
    width: wp("79%"),
    height: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I812_5685_808_5758: {
    flexGrow: 1,
    width: wp("79%"),
    height: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_808_5759: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%")
  },
  View_808_5760: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I808_5760_803_5185: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I808_5760_803_5185_803_5169: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I808_5760_803_5185_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I808_5760_803_5186: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I808_5760_803_5186_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I808_5760_803_5186_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_808_5761: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I808_5761_803_5180: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I808_5761_803_5180_803_5169: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I808_5761_803_5180_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I808_5761_803_5181: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I808_5761_803_5181_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I808_5761_803_5181_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_808_5762: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I808_5762_803_5185: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I808_5762_803_5185_803_5169: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I808_5762_803_5185_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I808_5762_803_5186: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I808_5762_803_5186_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I808_5762_803_5186_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_808_5763: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I808_5763_803_5180: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I808_5763_803_5180_803_5169: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I808_5763_803_5180_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I808_5763_803_5181: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I808_5763_803_5181_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I808_5763_803_5181_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_808_5764: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I808_5764_803_5185: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I808_5764_803_5185_803_5169: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I808_5764_803_5185_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I808_5764_803_5186: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I808_5764_803_5186_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I808_5764_803_5186_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_808_5765: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I808_5765_803_5180: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I808_5765_803_5180_803_5169: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I808_5765_803_5180_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I808_5765_803_5181: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I808_5765_803_5181_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I808_5765_803_5181_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_808_5766: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I808_5766_803_5175: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I808_5766_803_5175: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_808_5767: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I808_5767_803_5386: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I808_5767_803_5397: {
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
  View_I808_5767_803_5397_803_5391: {
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
  ImageBackground_I808_5767_803_5397_803_5392: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I808_5767_803_5397_803_5387: {
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
  View_I808_5767_803_5397_803_5387_759_4856: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I808_5767_803_5397_803_5387_759_4856: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_808_5768: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I808_5768_805_5405: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_808_5769: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I808_5769_805_5405: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_808_5770: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I808_5770_805_5405: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_812_5676: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("66%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_812_5674: {
    flexGrow: 1,
    width: wp("79%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I812_5674_808_5815: {
    flexGrow: 1,
    width: wp("79%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_812_5675: {
    flexGrow: 1,
    width: wp("72%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I812_5675_812_5664: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I812_5675_812_5666: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I812_5675_812_5666: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_814_5629: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("183%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_807_5387: {
    flexGrow: 1,
    width: wp("79%"),
    height: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5387_805_5653: {
    flexGrow: 1,
    width: wp("79%"),
    height: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_807_5388: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%")
  },
  View_807_5389: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5389_803_5185: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5389_803_5185_803_5169: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5389_803_5185_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5389_803_5186: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5389_803_5186_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5389_803_5186_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5390: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5390_803_5180: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5390_803_5180_803_5169: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5390_803_5180_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5390_803_5181: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5390_803_5181_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5390_803_5181_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5391: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5391_803_5185: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5391_803_5185_803_5169: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5391_803_5185_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5391_803_5186: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5391_803_5186_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5391_803_5186_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5392: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5392_803_5180: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5392_803_5180_803_5169: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5392_803_5180_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5392_803_5181: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5392_803_5181_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5392_803_5181_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5393: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5393_803_5185: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5393_803_5185_803_5169: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5393_803_5185_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5393_803_5186: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5393_803_5186_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5393_803_5186_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5394: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5394_803_5180: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5394_803_5180_803_5169: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5394_803_5180_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5394_803_5181: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5394_803_5181_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5394_803_5181_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5395: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5395_803_5175: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I807_5395_803_5175: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5396: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I807_5396_803_5386: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I807_5396_803_5397: {
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
  View_I807_5396_803_5397_803_5391: {
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
  ImageBackground_I807_5396_803_5397_803_5392: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I807_5396_803_5397_803_5387: {
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
  View_I807_5396_803_5397_803_5387_759_4856: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I807_5396_803_5397_803_5387_759_4856: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_807_5397: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I807_5397_805_5405: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_807_5398: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I807_5398_805_5405: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_807_5399: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I807_5399_805_5405: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_814_5633: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("270%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_807_5400: {
    flexGrow: 1,
    width: wp("79%"),
    height: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5400_805_5653: {
    flexGrow: 1,
    width: wp("79%"),
    height: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_807_5401: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%")
  },
  View_807_5402: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5402_803_5185: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5402_803_5185_803_5169: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5402_803_5185_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5402_803_5186: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5402_803_5186_803_5170: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5402_803_5186_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5403: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5403_803_5180: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5403_803_5180_803_5169: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5403_803_5180_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5403_803_5181: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5403_803_5181_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5403_803_5181_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5404: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5404_803_5185: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5404_803_5185_803_5169: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5404_803_5185_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5404_803_5186: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5404_803_5186_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5404_803_5186_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5405: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5405_803_5180: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5405_803_5180_803_5169: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5405_803_5180_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5405_803_5181: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5405_803_5181_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5405_803_5181_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5406: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5406_803_5185: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5406_803_5185_803_5169: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5406_803_5185_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5406_803_5186: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5406_803_5186_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5406_803_5186_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5407: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5407_803_5180: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5407_803_5180_803_5169: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5407_803_5180_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5407_803_5181: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5407_803_5181_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5407_803_5181_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5408: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5408_803_5175: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I807_5408_803_5175: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5409: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I807_5409_803_5386: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I807_5409_803_5397: {
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
  View_I807_5409_803_5397_803_5391: {
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
  ImageBackground_I807_5409_803_5397_803_5392: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I807_5409_803_5397_803_5387: {
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
  View_I807_5409_803_5397_803_5387_759_4856: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I807_5409_803_5397_803_5387_759_4856: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_807_5410: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I807_5410_805_5405: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_807_5411: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I807_5411_805_5405: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_807_5412: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I807_5412_805_5405: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_807_5413: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5413_803_5185: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5413_803_5185_803_5169: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5413_803_5185_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5413_803_5186: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5413_803_5186_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5413_803_5186_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5414: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5414_803_5180: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5414_803_5180_803_5169: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5414_803_5180_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5414_803_5181: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5414_803_5181_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5414_803_5181_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5415: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I807_5415_805_5405: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_827_5668: {
    width: wp("86%"),
    height: hp("8%"),
    top: hp("352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I827_5668_803_5386: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I827_5668_803_5397: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I827_5668_803_5397_803_5391: {
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
  ImageBackground_I827_5668_803_5397_803_5392: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I827_5668_803_5397_803_5387: {
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
  View_I827_5668_803_5397_803_5387_759_4856: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I827_5668_803_5397_803_5387_759_4856: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_814_5628: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("164%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_807_5425: {
    flexGrow: 1,
    width: wp("79%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5425_805_5510: {
    flexGrow: 1,
    width: wp("79%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_807_5426: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%")
  },
  View_807_5427: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5427_803_5175: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I807_5427_803_5175: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5428: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I807_5428_803_5386: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I807_5428_803_5397: {
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
  View_I807_5428_803_5397_803_5391: {
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
  ImageBackground_I807_5428_803_5397_803_5392: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I807_5428_803_5397_803_5387: {
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
  View_I807_5428_803_5397_803_5387_759_4856: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I807_5428_803_5397_803_5387_759_4856: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_814_5631: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("252%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_807_5429: {
    flexGrow: 1,
    width: wp("79%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5429_805_5510: {
    flexGrow: 1,
    width: wp("79%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_807_5430: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%")
  },
  View_807_5431: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5431_803_5175: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I807_5431_803_5175: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5432: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I807_5432_803_5386: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I807_5432_803_5397: {
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
  View_I807_5432_803_5397_803_5391: {
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
  ImageBackground_I807_5432_803_5397_803_5392: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I807_5432_803_5397_803_5387: {
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
  View_I807_5432_803_5397_803_5387_759_4856: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I807_5432_803_5397_803_5387_759_4856: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_814_5627: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("135%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_807_5416: {
    flexGrow: 1,
    width: wp("79%"),
    height: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5416_805_5510: {
    flexGrow: 1,
    width: wp("79%"),
    height: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_807_5417: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%")
  },
  View_807_5418: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5418_803_5185: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5418_803_5185_803_5169: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5418_803_5185_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5418_803_5186: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5418_803_5186_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5418_803_5186_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5419: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5419_803_5180: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5419_803_5180_803_5169: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5419_803_5180_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5419_803_5181: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5419_803_5181_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5419_803_5181_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5420: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5420_803_5185: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5420_803_5185_803_5169: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5420_803_5185_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5420_803_5186: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5420_803_5186_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5420_803_5186_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5421: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5421_803_5180: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5421_803_5180_803_5169: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5421_803_5180_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5421_803_5181: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5421_803_5181_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5421_803_5181_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5422: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5422_803_5175: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I807_5422_803_5175: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5423: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I807_5423_803_5386: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I807_5423_803_5397: {
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
  View_I807_5423_803_5397_803_5391: {
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
  ImageBackground_I807_5423_803_5397_803_5392: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I807_5423_803_5397_803_5387: {
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
  View_I807_5423_803_5397_803_5387_759_4856: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I807_5423_803_5397_803_5387_759_4856: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_807_5424: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I807_5424_805_5405: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_807_5433: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I807_5433_805_5405: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_814_5630: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("222%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_807_5434: {
    flexGrow: 1,
    width: wp("79%"),
    height: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5434_805_5510: {
    flexGrow: 1,
    width: wp("79%"),
    height: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_807_5435: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%")
  },
  View_807_5436: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5436_803_5185: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5436_803_5185_803_5169: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5436_803_5185_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5436_803_5186: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5436_803_5186_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5436_803_5186_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5437: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5437_803_5180: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5437_803_5180_803_5169: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5437_803_5180_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5437_803_5181: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5437_803_5181_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5437_803_5181_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5438: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5438_803_5185: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5438_803_5185_803_5169: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5438_803_5185_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5438_803_5186: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5438_803_5186_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5438_803_5186_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5439: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5439_803_5180: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5439_803_5180_803_5169: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5439_803_5180_803_5169: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I807_5439_803_5181: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5439_803_5181_803_5170: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I807_5439_803_5181_803_5170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5440: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I807_5440_803_5175: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I807_5440_803_5175: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_807_5441: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I807_5441_803_5386: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I807_5441_803_5397: {
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
  View_I807_5441_803_5397_803_5391: {
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
  ImageBackground_I807_5441_803_5397_803_5392: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I807_5441_803_5397_803_5387: {
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
  View_I807_5441_803_5397_803_5387_759_4856: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I807_5441_803_5397_803_5387_759_4856: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_807_5442: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I807_5442_805_5405: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_807_5443: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I807_5443_805_5405: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_807_5698: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I807_5698_726_4836: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_827_5666: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("327%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_827_5665: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I827_5665_822_5627: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_827_5629: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I827_5629_726_4900: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I827_5629_726_4900: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_827_5630: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I827_5630_707_5371: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I827_5630_707_5371: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I827_5630_707_5372: {
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
  ImageBackground_I827_5630_707_5373: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_827_5642: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I827_5642_707_5361: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I827_5642_707_5361: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I827_5642_707_5362: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I827_5642_707_5363: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_827_5646: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I827_5646_827_5653: {
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
  View_I827_5646_827_5653_707_5366: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I827_5646_827_5653_707_5366: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I827_5646_827_5653_707_5367: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I827_5646_827_5653_707_5368: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_827_5628: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I827_5628_982_4250: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I827_5628_982_4251: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 247, 252, 1)"
  },
  View_827_5631: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I827_5631_792_5165: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_I827_5631_792_5165: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_827_5632: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I827_5632_726_4836: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_815_5627: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("89%"),
    justifyContent: "center"
  },
  Text_815_5627: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_851_6403: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_851_6344: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_851_6286: {
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
  View_I851_6286_707_5371: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I851_6286_707_5371: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I851_6286_707_5372: {
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
  ImageBackground_I851_6286_707_5373: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_851_6328: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I851_6328_982_4345: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I851_6328_982_4346: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_851_6422: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I851_6422_851_6379: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I851_6422_851_6381: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I851_6422_851_6381_707_5361: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I851_6422_851_6381_707_5361: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I851_6422_851_6381_707_5362: {
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
  ImageBackground_I851_6422_851_6381_707_5363: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I851_6422_851_6401: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%")
  },
  View_851_6407: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_851_6376: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_851_6378: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I851_6378_827_5653: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I851_6378_827_5653_707_5366: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I851_6378_827_5653_707_5366: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I851_6378_827_5653_707_5367: {
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
  ImageBackground_I851_6378_827_5653_707_5368: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_851_6406: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
