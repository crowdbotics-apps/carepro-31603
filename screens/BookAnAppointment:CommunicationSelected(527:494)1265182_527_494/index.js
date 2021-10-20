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
      <View style={styles.View_527_496}>
        <View style={styles.View_I527_496_261_1}>
          <View style={styles.View_I527_496_261_1_4_227} />
        </View>
        <View style={styles.View_I527_496_261_0}>
          <View style={styles.View_I527_496_248_4}>
            <Text style={styles.Text_I527_496_248_4}>Filter</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1450/3248/79bc9b7e047ca44a6dc8abe9a178ed03"
            }}
            style={styles.ImageBackground_I527_496_254_0}
          />
        </View>
        <View style={styles.View_I527_496_320_8}>
          <View style={styles.View_I527_496_320_8_263_54} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5238/1d56/d8c93f05c5bfb93d65d57e1fc6879df0"
            }}
            style={styles.ImageBackground_I527_496_320_8_263_55}
          />
          <View style={styles.View_I527_496_320_8_263_56}>
            <Text style={styles.Text_I527_496_320_8_263_56}>Availability</Text>
          </View>
        </View>
        <View style={styles.View_I527_496_320_9}>
          <View style={styles.View_I527_496_320_9_280_56} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5238/1d56/d8c93f05c5bfb93d65d57e1fc6879df0"
            }}
            style={styles.ImageBackground_I527_496_320_9_280_57}
          />
          <View style={styles.View_I527_496_320_9_280_58}>
            <Text style={styles.Text_I527_496_320_9_280_58}>Communication</Text>
          </View>
        </View>
        <View style={styles.View_I527_496_320_10}>
          <View style={styles.View_I527_496_320_10_280_61} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5238/1d56/d8c93f05c5bfb93d65d57e1fc6879df0"
            }}
            style={styles.ImageBackground_I527_496_320_10_280_62}
          />
          <View style={styles.View_I527_496_320_10_280_63}>
            <Text style={styles.Text_I527_496_320_10_280_63}>Reviews</Text>
          </View>
        </View>
        <View style={styles.View_I527_496_320_11}>
          <View style={styles.View_I527_496_320_11_264_60} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6699/7d63/45e52ad3f3577d97efb85700409075d5"
            }}
            style={styles.ImageBackground_I527_496_320_11_264_58}
          />
          <View style={styles.View_I527_496_320_11_264_59}>
            <Text style={styles.Text_I527_496_320_11_264_59}>Location</Text>
          </View>
          <View style={styles.View_I527_496_320_11_267_1}>
            <Text style={styles.Text_I527_496_320_11_267_1}>United States</Text>
          </View>
          <View style={styles.View_I527_496_320_11_268_51}>
            <Text style={styles.Text_I527_496_320_11_268_51}>
              United Kingdom
            </Text>
          </View>
          <View style={styles.View_I527_496_320_11_268_52}>
            <Text style={styles.Text_I527_496_320_11_268_52}>Canada</Text>
          </View>
          <View style={styles.View_I527_496_320_11_268_53}>
            <Text style={styles.Text_I527_496_320_11_268_53}>India</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/541b/d632/192b6718dafd98253cff821dbaa3bd85"
            }}
            style={styles.ImageBackground_I527_496_320_11_268_56}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc02/a947/bfc953014fda6ef712fc5bb7f60a0c63"
            }}
            style={styles.ImageBackground_I527_496_320_11_271_1}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc02/a947/bfc953014fda6ef712fc5bb7f60a0c63"
            }}
            style={styles.ImageBackground_I527_496_320_11_271_6}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc02/a947/bfc953014fda6ef712fc5bb7f60a0c63"
            }}
            style={styles.ImageBackground_I527_496_320_11_271_8}
          />
          <View style={styles.View_I527_496_320_11_320_0}>
            <View style={styles.View_I527_496_320_11_320_0_278_7}>
              <View style={styles.View_I527_496_320_11_320_0_278_9}>
                <Text style={styles.Text_I527_496_320_11_320_0_278_9}>
                  Search Location
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_527_497}>
        <View style={styles.View_I527_497_280_66}>
          <View style={styles.View_I527_497_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de92/0382/36aaad11d472f2b1c708776c054884a7"
          }}
          style={styles.ImageBackground_I527_497_280_70}
        />
        <View style={styles.View_I527_497_280_71}>
          <Text style={styles.Text_I527_497_280_71}>Dr Gabriel Bruce</Text>
        </View>
        <View style={styles.View_I527_497_280_72}>
          <Text style={styles.Text_I527_497_280_72}>
            Primary Care Physician
          </Text>
        </View>
        <View style={styles.View_I527_497_288_12}>
          <Text style={styles.Text_I527_497_288_12}>Michigan, US</Text>
        </View>
        <View style={styles.View_I527_497_285_3}>
          <View style={styles.View_I527_497_285_1}>
            <Text style={styles.Text_I527_497_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I527_497_285_2}>
            <Text style={styles.Text_I527_497_285_2}>14:00</Text>
          </View>
        </View>
        <View style={styles.View_I527_497_288_10}>
          <View style={styles.View_I527_497_288_8}>
            <Text style={styles.Text_I527_497_288_8}>(238 reviews)</Text>
          </View>
          <View style={styles.View_I527_497_288_9}>
            <Text style={styles.Text_I527_497_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da1b/7d92/a694754f9d4d789ae9165b0f08dc70f9"
          }}
          style={styles.ImageBackground_I527_497_288_11}
        />
      </View>
      <View style={styles.View_527_498}>
        <View style={styles.View_I527_498_280_66}>
          <View style={styles.View_I527_498_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d7a/66bc/25912571a0cf7faff8348148f0ec196d"
          }}
          style={styles.ImageBackground_I527_498_280_70}
        />
        <View style={styles.View_I527_498_280_71}>
          <Text style={styles.Text_I527_498_280_71}>Dr Yola Baut</Text>
        </View>
        <View style={styles.View_I527_498_280_72}>
          <Text style={styles.Text_I527_498_280_72}>Psychotherapist</Text>
        </View>
        <View style={styles.View_I527_498_288_12}>
          <Text style={styles.Text_I527_498_288_12}>Birmingham, UK</Text>
        </View>
        <View style={styles.View_I527_498_285_3}>
          <View style={styles.View_I527_498_285_1}>
            <Text style={styles.Text_I527_498_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I527_498_285_2}>
            <Text style={styles.Text_I527_498_285_2}>Mon 10:00</Text>
          </View>
        </View>
        <View style={styles.View_I527_498_288_10}>
          <View style={styles.View_I527_498_288_8}>
            <Text style={styles.Text_I527_498_288_8}>(88 reviews)</Text>
          </View>
          <View style={styles.View_I527_498_288_9}>
            <Text style={styles.Text_I527_498_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/311c/427e/ed17ab6cbe6339d9bf4ca5a6b612b733"
          }}
          style={styles.ImageBackground_I527_498_288_11}
        />
      </View>
      <View style={styles.View_527_499}>
        <View style={styles.View_I527_499_280_66}>
          <View style={styles.View_I527_499_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac03/c1b1/dd8774d98f71f2af79a567781b540c58"
          }}
          style={styles.ImageBackground_I527_499_280_70}
        />
        <View style={styles.View_I527_499_280_71}>
          <Text style={styles.Text_I527_499_280_71}>Dr Stephan Wolf</Text>
        </View>
        <View style={styles.View_I527_499_280_72}>
          <Text style={styles.Text_I527_499_280_72}>
            Primary Care Physician
          </Text>
        </View>
        <View style={styles.View_I527_499_288_12}>
          <Text style={styles.Text_I527_499_288_12}>Toronto, Canada</Text>
        </View>
        <View style={styles.View_I527_499_285_3}>
          <View style={styles.View_I527_499_285_1}>
            <Text style={styles.Text_I527_499_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I527_499_285_2}>
            <Text style={styles.Text_I527_499_285_2}>Mon 12:00</Text>
          </View>
        </View>
        <View style={styles.View_I527_499_288_10}>
          <View style={styles.View_I527_499_288_8}>
            <Text style={styles.Text_I527_499_288_8}>(1238 reviews)</Text>
          </View>
          <View style={styles.View_I527_499_288_9}>
            <Text style={styles.Text_I527_499_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da1b/7d92/a694754f9d4d789ae9165b0f08dc70f9"
          }}
          style={styles.ImageBackground_I527_499_288_11}
        />
      </View>
      <View style={styles.View_527_500}>
        <View style={styles.View_I527_500_280_66}>
          <View style={styles.View_I527_500_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00a8/7990/d8c7600daf7b8ff8195f435660e39ec9"
          }}
          style={styles.ImageBackground_I527_500_280_70}
        />
        <View style={styles.View_I527_500_280_71}>
          <Text style={styles.Text_I527_500_280_71}>Dr Elizabeth Wenny</Text>
        </View>
        <View style={styles.View_I527_500_280_72}>
          <Text style={styles.Text_I527_500_280_72}>Psychotherapist</Text>
        </View>
        <View style={styles.View_I527_500_288_12}>
          <Text style={styles.Text_I527_500_288_12}>Bali, Indonesia</Text>
        </View>
        <View style={styles.View_I527_500_285_3}>
          <View style={styles.View_I527_500_285_1}>
            <Text style={styles.Text_I527_500_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I527_500_285_2}>
            <Text style={styles.Text_I527_500_285_2}>Mon 13:30</Text>
          </View>
        </View>
        <View style={styles.View_I527_500_288_10}>
          <View style={styles.View_I527_500_288_8}>
            <Text style={styles.Text_I527_500_288_8}>(5 reviews)</Text>
          </View>
          <View style={styles.View_I527_500_288_9}>
            <Text style={styles.Text_I527_500_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/311c/427e/ed17ab6cbe6339d9bf4ca5a6b612b733"
          }}
          style={styles.ImageBackground_I527_500_288_11}
        />
      </View>
      <View style={styles.View_527_501}>
        <View style={styles.View_I527_501_280_66}>
          <View style={styles.View_I527_501_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc1c/ad79/e3447490cf16183cfbcb353f681708f3"
          }}
          style={styles.ImageBackground_I527_501_280_70}
        />
        <View style={styles.View_I527_501_280_71}>
          <Text style={styles.Text_I527_501_280_71}>Dr Cindy Bliep</Text>
        </View>
        <View style={styles.View_I527_501_280_72}>
          <Text style={styles.Text_I527_501_280_72}>
            Primary Care Physician
          </Text>
        </View>
        <View style={styles.View_I527_501_288_12}>
          <Text style={styles.Text_I527_501_288_12}>
            Cape Town, South Africa
          </Text>
        </View>
        <View style={styles.View_I527_501_285_3}>
          <View style={styles.View_I527_501_285_1}>
            <Text style={styles.Text_I527_501_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I527_501_285_2}>
            <Text style={styles.Text_I527_501_285_2}>Tue 9:00</Text>
          </View>
        </View>
        <View style={styles.View_I527_501_288_10}>
          <View style={styles.View_I527_501_288_8}>
            <Text style={styles.Text_I527_501_288_8}>(23 reviews)</Text>
          </View>
          <View style={styles.View_I527_501_288_9}>
            <Text style={styles.Text_I527_501_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da1b/7d92/a694754f9d4d789ae9165b0f08dc70f9"
          }}
          style={styles.ImageBackground_I527_501_288_11}
        />
      </View>
      <View style={styles.View_527_502}>
        <View style={styles.View_I527_502_280_66}>
          <View style={styles.View_I527_502_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5950/8fda/9c55c2caeb7e8ce1380f01a45ac46e83"
          }}
          style={styles.ImageBackground_I527_502_280_70}
        />
        <View style={styles.View_I527_502_280_71}>
          <Text style={styles.Text_I527_502_280_71}>Dr Yash Verma</Text>
        </View>
        <View style={styles.View_I527_502_280_72}>
          <Text style={styles.Text_I527_502_280_72}>Psychotherapist</Text>
        </View>
        <View style={styles.View_I527_502_288_12}>
          <Text style={styles.Text_I527_502_288_12}>Mumbai, India</Text>
        </View>
        <View style={styles.View_I527_502_285_3}>
          <View style={styles.View_I527_502_285_1}>
            <Text style={styles.Text_I527_502_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I527_502_285_2}>
            <Text style={styles.Text_I527_502_285_2}>Tue 10:30</Text>
          </View>
        </View>
        <View style={styles.View_I527_502_288_10}>
          <View style={styles.View_I527_502_288_8}>
            <Text style={styles.Text_I527_502_288_8}>(788 reviews)</Text>
          </View>
          <View style={styles.View_I527_502_288_9}>
            <Text style={styles.Text_I527_502_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/311c/427e/ed17ab6cbe6339d9bf4ca5a6b612b733"
          }}
          style={styles.ImageBackground_I527_502_288_11}
        />
      </View>
      <View style={styles.View_527_503} />
      <View style={styles.View_457_254}>
        <View style={styles.View_457_245}>
          <View style={styles.View_I457_245_424_1} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2638/787c/18bde873448a4bea108f349b14c64062"
            }}
            style={styles.ImageBackground_I457_245_424_89}
          />
          <View style={styles.View_I457_245_424_48}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9011/dc9c/913447049b4d2678100b9ada4ac01db2"
              }}
              style={styles.ImageBackground_I457_245_424_50}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a8/f8af/bba021ba5f8b94bb4bb50c9e1568f912"
              }}
              style={styles.ImageBackground_I457_245_424_51}
            />
          </View>
          <View style={styles.View_I457_245_424_53}>
            <Text style={styles.Text_I457_245_424_53}>
              Prescription will be given if needed
            </Text>
          </View>
          <View style={styles.View_I457_245_424_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9011/dc9c/913447049b4d2678100b9ada4ac01db2"
              }}
              style={styles.ImageBackground_I457_245_424_62}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a8/f8af/bba021ba5f8b94bb4bb50c9e1568f912"
              }}
              style={styles.ImageBackground_I457_245_424_63}
            />
          </View>
          <View style={styles.View_I457_245_424_65}>
            <Text style={styles.Text_I457_245_424_65}>
              Healthcare insurance approved
            </Text>
          </View>
          <View style={styles.View_I457_245_424_3}>
            <Text style={styles.Text_I457_245_424_3}>
              30 minutes consultation
            </Text>
          </View>
          <View style={styles.View_I457_245_424_4}>
            <Text style={styles.Text_I457_245_424_4}>
              Through this 30 minutes consultation, Dr Gabriel will help you
              with general, seasonal and chronic health issues. He will be
              working with you in determining the root of the issue and will
              advice you on how to move ahead.
            </Text>
          </View>
          <View style={styles.View_I457_245_424_5}>
            <Text style={styles.Text_I457_245_424_5}>$30</Text>
          </View>
          <View style={styles.View_I457_245_424_54}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b5/dc4d/c99ef6a4cb95d13def97abc2c8311bdd"
              }}
              style={styles.ImageBackground_I457_245_424_55}
            />
          </View>
          <View style={styles.View_I457_245_424_56}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23d5/6c84/f4d54cc4d8ba069030d34a922808b83b"
              }}
              style={styles.ImageBackground_I457_245_424_57}
            />
          </View>
          <View style={styles.View_I457_245_424_58}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d67a/53bc/64e56e8bee052c7a4c752399c13cd25c"
              }}
              style={styles.ImageBackground_I457_245_424_59}
            />
          </View>
        </View>
        <View style={styles.View_457_246}>
          <View style={styles.View_I457_246_426_3}>
            <Text style={styles.Text_I457_246_426_3}>
              Preferred Communication
            </Text>
          </View>
        </View>
        <View style={styles.View_457_247}>
          <View style={styles.View_I457_247_425_970} />
          <View style={styles.View_I457_247_425_982}>
            <Text style={styles.Text_I457_247_425_982}>
              5 minutes consultation
            </Text>
          </View>
          <View style={styles.View_I457_247_425_983}>
            <Text style={styles.Text_I457_247_425_983}>
              Through this 5 minutes consultation, Dr Gabriel will answer any
              health related questions.
            </Text>
          </View>
          <View style={styles.View_I457_247_425_985}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b5/dc4d/c99ef6a4cb95d13def97abc2c8311bdd"
              }}
              style={styles.ImageBackground_I457_247_425_986}
            />
          </View>
          <View style={styles.View_I457_247_425_984}>
            <Text style={styles.Text_I457_247_425_984}>Free</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I457_247_426_1}
          />
        </View>
        <View style={styles.View_457_248}>
          <View style={styles.View_I457_248_442_1032} />
          <View style={styles.View_I457_248_442_1033}>
            <Text style={styles.Text_I457_248_442_1033}>Debit/Credit Card</Text>
          </View>
          <View style={styles.View_I457_248_442_1039}>
            <Text style={styles.Text_I457_248_442_1039}>Ending 0918</Text>
          </View>
          <View style={styles.View_I457_248_442_1040}>
            <Text style={styles.Text_I457_248_442_1040}>Sarah Kowalski</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I457_248_442_1038}
          />
        </View>
        <View style={styles.View_457_249}>
          <View style={styles.View_I457_249_426_13}>
            <Text style={styles.Text_I457_249_426_13}>Text Messaging</Text>
          </View>
          <View style={styles.View_I457_249_426_4}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a09c/8ce4/4af25b0414bebb3696cd075fcc8f1532"
              }}
              style={styles.ImageBackground_I457_249_426_5}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I457_249_426_10}
          />
        </View>
        <View style={styles.View_457_250}>
          <View style={styles.View_I457_250_438_2}>
            <Text style={styles.Text_I457_250_438_2}>7:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I457_250_438_3}
          />
        </View>
        <View style={styles.View_457_251}>
          <View style={styles.View_I457_251_440_56}>
            <View style={styles.View_I457_251_440_58}>
              <Text style={styles.Text_I457_251_440_58}>
                Briefly description
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4485/ea18/b6a812bd5ad345667b4dcb49a97bde97"
            }}
            style={styles.ImageBackground_I457_251_440_61}
          />
        </View>
        <View style={styles.View_457_252}>
          <View style={styles.View_I457_252_440_163} />
          <View style={styles.View_I457_252_440_164}>
            <Text style={styles.Text_I457_252_440_164}>
              Happy Health Insurance
            </Text>
          </View>
          <View style={styles.View_I457_252_442_1021}>
            <Text style={styles.Text_I457_252_442_1021}>Sarah Kowalski</Text>
          </View>
          <View style={styles.View_I457_252_440_170}>
            <Text style={styles.Text_I457_252_440_170}>ID #077189</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2638/787c/18bde873448a4bea108f349b14c64062"
            }}
            style={styles.ImageBackground_I457_252_441_1020}
          />
        </View>
        <View style={styles.View_457_253}>
          <View style={styles.View_I457_253_442_1044} />
          <View style={styles.View_I457_253_442_1043}>
            <Text style={styles.Text_I457_253_442_1043}>Book Appointment</Text>
          </View>
        </View>
        <View style={styles.View_446_1} />
        <View style={styles.View_446_2}>
          <Text style={styles.Text_446_2}>Book an appointment</Text>
        </View>
        <View style={styles.View_446_3}>
          <View style={styles.View_I446_3_424_1} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2638/787c/18bde873448a4bea108f349b14c64062"
            }}
            style={styles.ImageBackground_I446_3_424_89}
          />
          <View style={styles.View_I446_3_424_48}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9011/dc9c/913447049b4d2678100b9ada4ac01db2"
              }}
              style={styles.ImageBackground_I446_3_424_50}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a8/f8af/bba021ba5f8b94bb4bb50c9e1568f912"
              }}
              style={styles.ImageBackground_I446_3_424_51}
            />
          </View>
          <View style={styles.View_I446_3_424_53}>
            <Text style={styles.Text_I446_3_424_53}>
              Prescription will be given if needed
            </Text>
          </View>
          <View style={styles.View_I446_3_424_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9011/dc9c/913447049b4d2678100b9ada4ac01db2"
              }}
              style={styles.ImageBackground_I446_3_424_62}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a8/f8af/bba021ba5f8b94bb4bb50c9e1568f912"
              }}
              style={styles.ImageBackground_I446_3_424_63}
            />
          </View>
          <View style={styles.View_I446_3_424_65}>
            <Text style={styles.Text_I446_3_424_65}>
              Healthcare insurance approved
            </Text>
          </View>
          <View style={styles.View_I446_3_424_3}>
            <Text style={styles.Text_I446_3_424_3}>
              30 minutes consultation
            </Text>
          </View>
          <View style={styles.View_I446_3_424_4}>
            <Text style={styles.Text_I446_3_424_4}>
              Through this 30 minutes consultation, Dr Gabriel will help you
              with general, seasonal and chronic health issues. He will be
              working with you in determining the root of the issue and will
              advice you on how to move ahead.
            </Text>
          </View>
          <View style={styles.View_I446_3_424_5}>
            <Text style={styles.Text_I446_3_424_5}>$30</Text>
          </View>
          <View style={styles.View_I446_3_424_54}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b5/dc4d/c99ef6a4cb95d13def97abc2c8311bdd"
              }}
              style={styles.ImageBackground_I446_3_424_55}
            />
          </View>
          <View style={styles.View_I446_3_424_56}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23d5/6c84/f4d54cc4d8ba069030d34a922808b83b"
              }}
              style={styles.ImageBackground_I446_3_424_57}
            />
          </View>
          <View style={styles.View_I446_3_424_58}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d67a/53bc/64e56e8bee052c7a4c752399c13cd25c"
              }}
              style={styles.ImageBackground_I446_3_424_59}
            />
          </View>
        </View>
        <View style={styles.View_446_4}>
          <View style={styles.View_I446_4_426_3}>
            <Text style={styles.Text_I446_4_426_3}>
              Preferred Communication
            </Text>
          </View>
        </View>
        <View style={styles.View_446_5}>
          <View style={styles.View_I446_5_426_3}>
            <Text style={styles.Text_I446_5_426_3}>Payment</Text>
          </View>
        </View>
        <View style={styles.View_446_6}>
          <View style={styles.View_I446_6_426_3}>
            <Text style={styles.Text_I446_6_426_3}>
              Reason for Consultation
            </Text>
          </View>
        </View>
        <View style={styles.View_446_7}>
          <View style={styles.View_I446_7_426_3}>
            <Text style={styles.Text_I446_7_426_3}>Time Slot</Text>
          </View>
        </View>
        <View style={styles.View_446_8}>
          <View style={styles.View_I446_8_425_970} />
          <View style={styles.View_I446_8_425_982}>
            <Text style={styles.Text_I446_8_425_982}>
              5 minutes consultation
            </Text>
          </View>
          <View style={styles.View_I446_8_425_983}>
            <Text style={styles.Text_I446_8_425_983}>
              Through this 5 minutes consultation, Dr Gabriel will answer any
              health related questions.
            </Text>
          </View>
          <View style={styles.View_I446_8_425_985}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b5/dc4d/c99ef6a4cb95d13def97abc2c8311bdd"
              }}
              style={styles.ImageBackground_I446_8_425_986}
            />
          </View>
          <View style={styles.View_I446_8_425_984}>
            <Text style={styles.Text_I446_8_425_984}>Free</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_8_426_1}
          />
        </View>
        <View style={styles.View_446_9}>
          <View style={styles.View_I446_9_442_1032} />
          <View style={styles.View_I446_9_442_1033}>
            <Text style={styles.Text_I446_9_442_1033}>Debit/Credit Card</Text>
          </View>
          <View style={styles.View_I446_9_442_1039}>
            <Text style={styles.Text_I446_9_442_1039}>Ending 0918</Text>
          </View>
          <View style={styles.View_I446_9_442_1040}>
            <Text style={styles.Text_I446_9_442_1040}>Sarah Kowalski</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_9_442_1038}
          />
        </View>
        <View style={styles.View_446_10}>
          <View style={styles.View_I446_10_426_13}>
            <Text style={styles.Text_I446_10_426_13}>Text Messaging</Text>
          </View>
          <View style={styles.View_I446_10_426_4}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a09c/8ce4/4af25b0414bebb3696cd075fcc8f1532"
              }}
              style={styles.ImageBackground_I446_10_426_5}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_10_426_10}
          />
        </View>
        <View style={styles.View_446_11}>
          <View style={styles.View_I446_11_426_13}>
            <Text style={styles.Text_I446_11_426_13}>Video Call</Text>
          </View>
          <View style={styles.View_I446_11_426_4}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6a6/494f/d50b514e12b1429c5e1c2f6d32c30252"
              }}
              style={styles.ImageBackground_I446_11_426_5}
            />
          </View>
        </View>
        <View style={styles.View_446_12}>
          <View style={styles.View_I446_12_426_13}>
            <Text style={styles.Text_I446_12_426_13}>Phone Call</Text>
          </View>
          <View style={styles.View_I446_12_426_4}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56c8/335b/a741cd2d1f7c00904f604b7fef643365"
              }}
              style={styles.ImageBackground_I446_12_426_5}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_12_426_10}
          />
        </View>
        <View style={styles.View_446_13}>
          <View style={styles.View_I446_13_438_2}>
            <Text style={styles.Text_I446_13_438_2}>7:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_13_438_3}
          />
        </View>
        <View style={styles.View_446_14}>
          <View style={styles.View_I446_14_438_2}>
            <Text style={styles.Text_I446_14_438_2}>7:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_14_438_3}
          />
        </View>
        <View style={styles.View_446_15}>
          <View style={styles.View_I446_15_438_2}>
            <Text style={styles.Text_I446_15_438_2}>8:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_15_438_3}
          />
        </View>
        <View style={styles.View_446_16}>
          <View style={styles.View_I446_16_438_2}>
            <Text style={styles.Text_I446_16_438_2}>10:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_16_438_3}
          />
        </View>
        <View style={styles.View_446_17}>
          <View style={styles.View_I446_17_438_2}>
            <Text style={styles.Text_I446_17_438_2}>12:00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_17_438_3}
          />
        </View>
        <View style={styles.View_446_18}>
          <View style={styles.View_I446_18_438_2}>
            <Text style={styles.Text_I446_18_438_2}>14:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_18_438_3}
          />
        </View>
        <View style={styles.View_446_19}>
          <View style={styles.View_I446_19_438_2}>
            <Text style={styles.Text_I446_19_438_2}>16:00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_19_438_3}
          />
        </View>
        <View style={styles.View_446_20}>
          <View style={styles.View_I446_20_438_2}>
            <Text style={styles.Text_I446_20_438_2}>7:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_20_438_3}
          />
        </View>
        <View style={styles.View_446_21}>
          <View style={styles.View_I446_21_438_2}>
            <Text style={styles.Text_I446_21_438_2}>14:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_21_438_3}
          />
        </View>
        <View style={styles.View_446_22}>
          <View style={styles.View_I446_22_438_2}>
            <Text style={styles.Text_I446_22_438_2}>9:00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_22_438_3}
          />
        </View>
        <View style={styles.View_446_23}>
          <View style={styles.View_I446_23_438_2}>
            <Text style={styles.Text_I446_23_438_2}>11:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_23_438_3}
          />
        </View>
        <View style={styles.View_446_24}>
          <View style={styles.View_I446_24_438_2}>
            <Text style={styles.Text_I446_24_438_2}>16:10</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_24_438_3}
          />
        </View>
        <View style={styles.View_446_25}>
          <View style={styles.View_I446_25_438_2}>
            <Text style={styles.Text_I446_25_438_2}>22:00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_25_438_3}
          />
        </View>
        <View style={styles.View_446_26}>
          <View style={styles.View_I446_26_438_2}>
            <Text style={styles.Text_I446_26_438_2}>9:00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_26_438_3}
          />
        </View>
        <View style={styles.View_446_27}>
          <View style={styles.View_I446_27_438_2}>
            <Text style={styles.Text_I446_27_438_2}>11:50</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_27_438_3}
          />
        </View>
        <View style={styles.View_446_28}>
          <View style={styles.View_I446_28_438_2}>
            <Text style={styles.Text_I446_28_438_2}>15:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_28_438_3}
          />
        </View>
        <View style={styles.View_446_29}>
          <View style={styles.View_I446_29_438_2}>
            <Text style={styles.Text_I446_29_438_2}>17:20</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_29_438_3}
          />
        </View>
        <View style={styles.View_446_30}>
          <View style={styles.View_I446_30_438_2}>
            <Text style={styles.Text_I446_30_438_2}>7:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_30_438_3}
          />
        </View>
        <View style={styles.View_446_31}>
          <View style={styles.View_I446_31_438_2}>
            <Text style={styles.Text_I446_31_438_2}>15:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_31_438_3}
          />
        </View>
        <View style={styles.View_446_32}>
          <View style={styles.View_I446_32_438_2}>
            <Text style={styles.Text_I446_32_438_2}>16:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I446_32_438_3}
          />
        </View>
        <View style={styles.View_446_33}>
          <View style={styles.View_446_34} />
          <View style={styles.View_446_35}>
            <Text style={styles.Text_446_35}>Monday, 14 June 2021</Text>
          </View>
        </View>
        <View style={styles.View_446_36}>
          <View style={styles.View_446_37} />
          <View style={styles.View_446_38}>
            <Text style={styles.Text_446_38}>Wednesday, 16 June 2021</Text>
          </View>
        </View>
        <View style={styles.View_446_39}>
          <View style={styles.View_446_40} />
          <View style={styles.View_446_41}>
            <Text style={styles.Text_446_41}>Thursday, 17 June 2021</Text>
          </View>
        </View>
        <View style={styles.View_446_42}>
          <View style={styles.View_446_43} />
          <View style={styles.View_446_44}>
            <Text style={styles.Text_446_44}>Friday, 18 June 2021</Text>
          </View>
        </View>
        <View style={styles.View_446_45}>
          <View style={styles.View_446_46} />
          <View style={styles.View_446_47}>
            <Text style={styles.Text_446_47}>Tuesday, 15 June 2021</Text>
          </View>
        </View>
        <View style={styles.View_446_48}>
          <View style={styles.View_I446_48_440_56}>
            <View style={styles.View_I446_48_440_58}>
              <Text style={styles.Text_I446_48_440_58}>Brief description</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4485/ea18/b6a812bd5ad345667b4dcb49a97bde97"
            }}
            style={styles.ImageBackground_I446_48_440_61}
          />
        </View>
        <View style={styles.View_446_49}>
          <View style={styles.View_I446_49_440_163} />
          <View style={styles.View_I446_49_440_164}>
            <Text style={styles.Text_I446_49_440_164}>
              Happy Health Insurance
            </Text>
          </View>
          <View style={styles.View_I446_49_442_1021}>
            <Text style={styles.Text_I446_49_442_1021}>Sarah Kowalski</Text>
          </View>
          <View style={styles.View_I446_49_440_170}>
            <Text style={styles.Text_I446_49_440_170}>ID #077189</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2638/787c/18bde873448a4bea108f349b14c64062"
            }}
            style={styles.ImageBackground_I446_49_441_1020}
          />
        </View>
        <View style={styles.View_446_50}>
          <View style={styles.View_I446_50_442_1044} />
          <View style={styles.View_I446_50_442_1043}>
            <Text style={styles.Text_I446_50_442_1043}>Book Appointment</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9913/96a9/f389f8a84bd9e0bafab79993482f7d3c"
          }}
          style={styles.ImageBackground_448_1}
        />
      </View>
      <View style={styles.View_527_829}>
        <View style={styles.View_I527_829_199_344}>
          <View style={styles.View_I527_829_199_344_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5979/5b08/877131cfaf519bff9199829a08dfeb63"
          }}
          style={styles.ImageBackground_I527_829_199_345}
        />
        <View style={styles.View_I527_829_199_346}>
          <View style={styles.View_I527_829_199_347}>
            <View style={styles.View_I527_829_199_349}>
              <Text style={styles.Text_I527_829_199_349}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I527_829_199_350}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I527_829_199_351}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I527_829_199_352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/171b/ad41/cca1fc9a4c61a69f2073888e1559d679"
          }}
          style={styles.ImageBackground_I527_829_199_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/85c9/7f4f5815b12675432f7bce135fb62d6e"
          }}
          style={styles.ImageBackground_I527_829_199_354}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("338%") },
  View_527_496: {
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
  View_I527_496_261_1: {
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
  View_I527_496_261_1_4_227: {
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
  View_I527_496_261_0: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%")
  },
  View_I527_496_248_4: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I527_496_248_4: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I527_496_254_0: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I527_496_320_8: {
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
  View_I527_496_320_8_263_54: {
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
  ImageBackground_I527_496_320_8_263_55: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%")
  },
  View_I527_496_320_8_263_56: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I527_496_320_8_263_56: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_496_320_9: {
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
  View_I527_496_320_9_280_56: {
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
  ImageBackground_I527_496_320_9_280_57: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%")
  },
  View_I527_496_320_9_280_58: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I527_496_320_9_280_58: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_496_320_10: {
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
  View_I527_496_320_10_280_61: {
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
  ImageBackground_I527_496_320_10_280_62: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%")
  },
  View_I527_496_320_10_280_63: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I527_496_320_10_280_63: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_496_320_11: {
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
  View_I527_496_320_11_264_60: {
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
  ImageBackground_I527_496_320_11_264_58: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%")
  },
  View_I527_496_320_11_264_59: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I527_496_320_11_264_59: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_496_320_11_267_1: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I527_496_320_11_267_1: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_496_320_11_268_51: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_I527_496_320_11_268_51: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_496_320_11_268_52: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_I527_496_320_11_268_52: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_496_320_11_268_53: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_I527_496_320_11_268_53: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I527_496_320_11_268_56: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("12%")
  },
  ImageBackground_I527_496_320_11_271_1: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("20%")
  },
  ImageBackground_I527_496_320_11_271_6: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("27%")
  },
  ImageBackground_I527_496_320_11_271_8: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("34%")
  },
  View_I527_496_320_11_320_0: {
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
  View_I527_496_320_11_320_0_278_7: {
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
  View_I527_496_320_11_320_0_278_9: {
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
  Text_I527_496_320_11_320_0_278_9: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_527_497: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I527_497_280_66: {
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
  View_I527_497_280_66_4_227: {
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
  ImageBackground_I527_497_280_70: {
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
  View_I527_497_280_71: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I527_497_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_497_280_72: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I527_497_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_497_288_12: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I527_497_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_497_285_3: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I527_497_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_497_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_497_285_2: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I527_497_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_497_288_10: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I527_497_288_8: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I527_497_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_497_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_497_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I527_497_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_527_498: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I527_498_280_66: {
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
  View_I527_498_280_66_4_227: {
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
  ImageBackground_I527_498_280_70: {
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
  View_I527_498_280_71: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I527_498_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_498_280_72: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I527_498_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_498_288_12: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I527_498_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_498_285_3: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I527_498_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_498_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_498_285_2: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I527_498_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_498_288_10: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I527_498_288_8: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I527_498_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_498_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_498_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I527_498_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_527_499: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I527_499_280_66: {
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
  View_I527_499_280_66_4_227: {
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
  ImageBackground_I527_499_280_70: {
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
  View_I527_499_280_71: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I527_499_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_499_280_72: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I527_499_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_499_288_12: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I527_499_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_499_285_3: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I527_499_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_499_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_499_285_2: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I527_499_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_499_288_10: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I527_499_288_8: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I527_499_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_499_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_499_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I527_499_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_527_500: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I527_500_280_66: {
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
  View_I527_500_280_66_4_227: {
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
  ImageBackground_I527_500_280_70: {
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
  View_I527_500_280_71: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I527_500_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_500_280_72: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I527_500_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_500_288_12: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I527_500_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_500_285_3: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I527_500_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_500_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_500_285_2: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I527_500_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_500_288_10: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I527_500_288_8: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I527_500_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_500_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_500_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I527_500_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_527_501: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("110%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I527_501_280_66: {
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
  View_I527_501_280_66_4_227: {
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
  ImageBackground_I527_501_280_70: {
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
  View_I527_501_280_71: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I527_501_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_501_280_72: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I527_501_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_501_288_12: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I527_501_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_501_285_3: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I527_501_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_501_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_501_285_2: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I527_501_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_501_288_10: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I527_501_288_8: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I527_501_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_501_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_501_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I527_501_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_527_502: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("110%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I527_502_280_66: {
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
  View_I527_502_280_66_4_227: {
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
  ImageBackground_I527_502_280_70: {
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
  View_I527_502_280_71: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I527_502_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_502_280_72: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I527_502_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_502_288_12: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I527_502_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_502_285_3: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I527_502_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_502_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_502_285_2: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I527_502_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_502_288_10: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I527_502_288_8: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I527_502_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_502_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_502_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I527_502_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_527_503: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("324%"),
    minHeight: hp("324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(168, 168, 168, 1)",
    opacity: 0.15000000596046448
  },
  View_457_254: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("303%"),
    minHeight: hp("303%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_457_245: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I457_245_424_1: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(249, 249, 249, 1)"
  },
  ImageBackground_I457_245_424_89: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("18%")
  },
  View_I457_245_424_48: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I457_245_424_50: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I457_245_424_51: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I457_245_424_53: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_I457_245_424_53: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I457_245_424_61: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I457_245_424_62: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I457_245_424_63: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I457_245_424_65: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_I457_245_424_65: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I457_245_424_3: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I457_245_424_3: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I457_245_424_4: {
    flexGrow: 1,
    width: wp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I457_245_424_4: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I457_245_424_5: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I457_245_424_5: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I457_245_424_54: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I457_245_424_55: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I457_245_424_56: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I457_245_424_57: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I457_245_424_58: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I457_245_424_59: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_457_246: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("87%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I457_246_426_3: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I457_246_426_3: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_457_247: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("61%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I457_247_425_970: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I457_247_425_982: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I457_247_425_982: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I457_247_425_983: {
    flexGrow: 1,
    width: wp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I457_247_425_983: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I457_247_425_985: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I457_247_425_986: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I457_247_425_984: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I457_247_425_984: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I457_247_426_1: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("8%")
  },
  View_457_248: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("264%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I457_248_442_1032: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I457_248_442_1033: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I457_248_442_1033: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I457_248_442_1039: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I457_248_442_1039: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I457_248_442_1040: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I457_248_442_1040: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I457_248_442_1038: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("8%")
  },
  View_457_249: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("95%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I457_249_426_13: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I457_249_426_13: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I457_249_426_4: {
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
  ImageBackground_I457_249_426_5: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I457_249_426_10: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_457_250: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("124%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I457_250_438_2: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I457_250_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I457_250_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_457_251: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("212%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I457_251_440_56: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I457_251_440_58: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I457_251_440_58: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I457_251_440_61: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("14%")
  },
  View_457_252: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("244%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I457_252_440_163: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I457_252_440_164: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I457_252_440_164: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I457_252_442_1021: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I457_252_442_1021: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I457_252_440_170: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I457_252_440_170: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I457_252_441_1020: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("6%")
  },
  View_457_253: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("290%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I457_253_442_1044: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I457_253_442_1043: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I457_253_442_1043: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_446_1: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("303%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_446_2: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_446_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_446_3: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_3_424_1: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(249, 249, 249, 1)"
  },
  ImageBackground_I446_3_424_89: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("18%")
  },
  View_I446_3_424_48: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I446_3_424_50: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I446_3_424_51: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I446_3_424_53: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_I446_3_424_53: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I446_3_424_61: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I446_3_424_62: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I446_3_424_63: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I446_3_424_65: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_I446_3_424_65: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I446_3_424_3: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I446_3_424_3: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I446_3_424_4: {
    flexGrow: 1,
    width: wp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I446_3_424_4: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I446_3_424_5: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I446_3_424_5: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I446_3_424_54: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I446_3_424_55: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I446_3_424_56: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I446_3_424_57: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I446_3_424_58: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I446_3_424_59: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_446_4: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("87%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_4_426_3: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_4_426_3: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_446_5: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("236%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_5_426_3: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_5_426_3: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_446_6: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("203%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_6_426_3: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_6_426_3: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_446_7: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("106%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_7_426_3: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_7_426_3: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_446_8: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("61%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_8_425_970: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I446_8_425_982: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I446_8_425_982: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I446_8_425_983: {
    flexGrow: 1,
    width: wp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I446_8_425_983: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I446_8_425_985: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I446_8_425_986: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I446_8_425_984: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I446_8_425_984: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_8_426_1: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("8%")
  },
  View_446_9: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("264%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_9_442_1032: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I446_9_442_1033: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I446_9_442_1033: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I446_9_442_1039: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I446_9_442_1039: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I446_9_442_1040: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I446_9_442_1040: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_9_442_1038: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("8%")
  },
  View_446_10: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("95%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_10_426_13: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I446_10_426_13: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I446_10_426_4: {
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
  ImageBackground_I446_10_426_5: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I446_10_426_10: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_446_11: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("95%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_11_426_13: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I446_11_426_13: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I446_11_426_4: {
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
  ImageBackground_I446_11_426_5: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_446_12: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("95%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_12_426_13: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I446_12_426_13: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I446_12_426_4: {
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
  ImageBackground_I446_12_426_5: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I446_12_426_10: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_446_13: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("124%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_13_438_2: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_13_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_13_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_446_14: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("193%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_14_438_2: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_14_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_14_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_446_15: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("193%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_15_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_15_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_15_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_446_16: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("193%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_16_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_16_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_16_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_446_17: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("193%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_17_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_17_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_17_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_446_18: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("193%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_18_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_18_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_18_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_446_19: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("193%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_19_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_19_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_19_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_446_20: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("159%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_20_438_2: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_20_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_20_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_446_21: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("159%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_21_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_21_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_21_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_446_22: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("141%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_22_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_22_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_22_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_446_23: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("141%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_23_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_23_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_23_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_446_24: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("141%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_24_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_24_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_24_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_446_25: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("141%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_25_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_25_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_25_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_446_26: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("124%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_26_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_26_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_26_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_446_27: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("124%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_27_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_27_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_27_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_446_28: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("124%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_28_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_28_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_28_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_446_29: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("124%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_29_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_29_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_29_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_446_30: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("176%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_30_438_2: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_30_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_30_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_446_31: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("176%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_31_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_31_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_31_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_446_32: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("176%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_32_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I446_32_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_32_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_446_33: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("115%")
  },
  View_446_34: {
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
  View_446_35: {
    width: wp("13%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_446_35: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_446_36: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("149%")
  },
  View_446_37: {
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
  View_446_38: {
    width: wp("15%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_446_38: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_446_39: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("166%")
  },
  View_446_40: {
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
  View_446_41: {
    width: wp("13%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_446_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_446_42: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("183%")
  },
  View_446_43: {
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
  View_446_44: {
    width: wp("11%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_446_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_446_45: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("132%")
  },
  View_446_46: {
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
  View_446_47: {
    width: wp("13%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_446_47: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_446_48: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("212%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I446_48_440_56: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_48_440_58: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I446_48_440_58: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I446_48_440_61: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("14%")
  },
  View_446_49: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("244%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_49_440_163: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I446_49_440_164: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I446_49_440_164: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I446_49_442_1021: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I446_49_442_1021: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I446_49_440_170: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I446_49_440_170: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I446_49_441_1020: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("6%")
  },
  View_446_50: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("290%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I446_50_442_1044: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I446_50_442_1043: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I446_50_442_1043: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_448_1: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("95%")
  },
  View_527_829: {
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
  View_I527_829_199_344: {
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
  View_I527_829_199_344_4_227: {
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
  ImageBackground_I527_829_199_345: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("3%")
  },
  View_I527_829_199_346: {
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
  View_I527_829_199_347: {
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
  View_I527_829_199_349: {
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
  Text_I527_829_199_349: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_829_199_350: {
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
  ImageBackground_I527_829_199_351: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I527_829_199_352: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I527_829_199_353: {
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
  ImageBackground_I527_829_199_354: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("4%"),
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
