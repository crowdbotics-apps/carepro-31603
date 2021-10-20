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
      <View style={styles.View_527_1998}>
        <View style={styles.View_I527_1998_261_1}>
          <View style={styles.View_I527_1998_261_1_4_227} />
        </View>
        <View style={styles.View_I527_1998_261_0}>
          <View style={styles.View_I527_1998_248_4}>
            <Text style={styles.Text_I527_1998_248_4}>Filter</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1450/3248/79bc9b7e047ca44a6dc8abe9a178ed03"
            }}
            style={styles.ImageBackground_I527_1998_254_0}
          />
        </View>
        <View style={styles.View_I527_1998_320_8}>
          <View style={styles.View_I527_1998_320_8_263_54} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5238/1d56/d8c93f05c5bfb93d65d57e1fc6879df0"
            }}
            style={styles.ImageBackground_I527_1998_320_8_263_55}
          />
          <View style={styles.View_I527_1998_320_8_263_56}>
            <Text style={styles.Text_I527_1998_320_8_263_56}>Availability</Text>
          </View>
        </View>
        <View style={styles.View_I527_1998_320_9}>
          <View style={styles.View_I527_1998_320_9_280_56} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5238/1d56/d8c93f05c5bfb93d65d57e1fc6879df0"
            }}
            style={styles.ImageBackground_I527_1998_320_9_280_57}
          />
          <View style={styles.View_I527_1998_320_9_280_58}>
            <Text style={styles.Text_I527_1998_320_9_280_58}>
              Communication
            </Text>
          </View>
        </View>
        <View style={styles.View_I527_1998_320_10}>
          <View style={styles.View_I527_1998_320_10_280_61} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5238/1d56/d8c93f05c5bfb93d65d57e1fc6879df0"
            }}
            style={styles.ImageBackground_I527_1998_320_10_280_62}
          />
          <View style={styles.View_I527_1998_320_10_280_63}>
            <Text style={styles.Text_I527_1998_320_10_280_63}>Reviews</Text>
          </View>
        </View>
        <View style={styles.View_I527_1998_320_11}>
          <View style={styles.View_I527_1998_320_11_264_60} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6699/7d63/45e52ad3f3577d97efb85700409075d5"
            }}
            style={styles.ImageBackground_I527_1998_320_11_264_58}
          />
          <View style={styles.View_I527_1998_320_11_264_59}>
            <Text style={styles.Text_I527_1998_320_11_264_59}>Location</Text>
          </View>
          <View style={styles.View_I527_1998_320_11_267_1}>
            <Text style={styles.Text_I527_1998_320_11_267_1}>
              United States
            </Text>
          </View>
          <View style={styles.View_I527_1998_320_11_268_51}>
            <Text style={styles.Text_I527_1998_320_11_268_51}>
              United Kingdom
            </Text>
          </View>
          <View style={styles.View_I527_1998_320_11_268_52}>
            <Text style={styles.Text_I527_1998_320_11_268_52}>Canada</Text>
          </View>
          <View style={styles.View_I527_1998_320_11_268_53}>
            <Text style={styles.Text_I527_1998_320_11_268_53}>India</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/541b/d632/192b6718dafd98253cff821dbaa3bd85"
            }}
            style={styles.ImageBackground_I527_1998_320_11_268_56}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc02/a947/bfc953014fda6ef712fc5bb7f60a0c63"
            }}
            style={styles.ImageBackground_I527_1998_320_11_271_1}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc02/a947/bfc953014fda6ef712fc5bb7f60a0c63"
            }}
            style={styles.ImageBackground_I527_1998_320_11_271_6}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc02/a947/bfc953014fda6ef712fc5bb7f60a0c63"
            }}
            style={styles.ImageBackground_I527_1998_320_11_271_8}
          />
          <View style={styles.View_I527_1998_320_11_320_0}>
            <View style={styles.View_I527_1998_320_11_320_0_278_7}>
              <View style={styles.View_I527_1998_320_11_320_0_278_9}>
                <Text style={styles.Text_I527_1998_320_11_320_0_278_9}>
                  Search Location
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_527_1999}>
        <View style={styles.View_I527_1999_280_66}>
          <View style={styles.View_I527_1999_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de92/0382/36aaad11d472f2b1c708776c054884a7"
          }}
          style={styles.ImageBackground_I527_1999_280_70}
        />
        <View style={styles.View_I527_1999_280_71}>
          <Text style={styles.Text_I527_1999_280_71}>Dr Gabriel Bruce</Text>
        </View>
        <View style={styles.View_I527_1999_280_72}>
          <Text style={styles.Text_I527_1999_280_72}>
            Primary Care Physician
          </Text>
        </View>
        <View style={styles.View_I527_1999_288_12}>
          <Text style={styles.Text_I527_1999_288_12}>Michigan, US</Text>
        </View>
        <View style={styles.View_I527_1999_285_3}>
          <View style={styles.View_I527_1999_285_1}>
            <Text style={styles.Text_I527_1999_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I527_1999_285_2}>
            <Text style={styles.Text_I527_1999_285_2}>14:00</Text>
          </View>
        </View>
        <View style={styles.View_I527_1999_288_10}>
          <View style={styles.View_I527_1999_288_8}>
            <Text style={styles.Text_I527_1999_288_8}>(238 reviews)</Text>
          </View>
          <View style={styles.View_I527_1999_288_9}>
            <Text style={styles.Text_I527_1999_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f97e/4d62/e88bd06710107fc0a334f39ddfd4af74"
          }}
          style={styles.ImageBackground_I527_1999_288_11}
        />
      </View>
      <View style={styles.View_527_2000}>
        <View style={styles.View_I527_2000_280_66}>
          <View style={styles.View_I527_2000_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d7a/66bc/25912571a0cf7faff8348148f0ec196d"
          }}
          style={styles.ImageBackground_I527_2000_280_70}
        />
        <View style={styles.View_I527_2000_280_71}>
          <Text style={styles.Text_I527_2000_280_71}>Dr Yola Baut</Text>
        </View>
        <View style={styles.View_I527_2000_280_72}>
          <Text style={styles.Text_I527_2000_280_72}>Psychotherapist</Text>
        </View>
        <View style={styles.View_I527_2000_288_12}>
          <Text style={styles.Text_I527_2000_288_12}>Birmingham, UK</Text>
        </View>
        <View style={styles.View_I527_2000_285_3}>
          <View style={styles.View_I527_2000_285_1}>
            <Text style={styles.Text_I527_2000_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I527_2000_285_2}>
            <Text style={styles.Text_I527_2000_285_2}>Mon 10:00</Text>
          </View>
        </View>
        <View style={styles.View_I527_2000_288_10}>
          <View style={styles.View_I527_2000_288_8}>
            <Text style={styles.Text_I527_2000_288_8}>(88 reviews)</Text>
          </View>
          <View style={styles.View_I527_2000_288_9}>
            <Text style={styles.Text_I527_2000_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd6f/cb0c/27ae9635d38ded8aec706c5114145910"
          }}
          style={styles.ImageBackground_I527_2000_288_11}
        />
      </View>
      <View style={styles.View_527_2001}>
        <View style={styles.View_I527_2001_280_66}>
          <View style={styles.View_I527_2001_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac03/c1b1/dd8774d98f71f2af79a567781b540c58"
          }}
          style={styles.ImageBackground_I527_2001_280_70}
        />
        <View style={styles.View_I527_2001_280_71}>
          <Text style={styles.Text_I527_2001_280_71}>Dr Stephan Wolf</Text>
        </View>
        <View style={styles.View_I527_2001_280_72}>
          <Text style={styles.Text_I527_2001_280_72}>
            Primary Care Physician
          </Text>
        </View>
        <View style={styles.View_I527_2001_288_12}>
          <Text style={styles.Text_I527_2001_288_12}>Toronto, Canada</Text>
        </View>
        <View style={styles.View_I527_2001_285_3}>
          <View style={styles.View_I527_2001_285_1}>
            <Text style={styles.Text_I527_2001_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I527_2001_285_2}>
            <Text style={styles.Text_I527_2001_285_2}>Mon 12:00</Text>
          </View>
        </View>
        <View style={styles.View_I527_2001_288_10}>
          <View style={styles.View_I527_2001_288_8}>
            <Text style={styles.Text_I527_2001_288_8}>(1238 reviews)</Text>
          </View>
          <View style={styles.View_I527_2001_288_9}>
            <Text style={styles.Text_I527_2001_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f97e/4d62/e88bd06710107fc0a334f39ddfd4af74"
          }}
          style={styles.ImageBackground_I527_2001_288_11}
        />
      </View>
      <View style={styles.View_527_2002}>
        <View style={styles.View_I527_2002_280_66}>
          <View style={styles.View_I527_2002_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00a8/7990/d8c7600daf7b8ff8195f435660e39ec9"
          }}
          style={styles.ImageBackground_I527_2002_280_70}
        />
        <View style={styles.View_I527_2002_280_71}>
          <Text style={styles.Text_I527_2002_280_71}>Dr Elizabeth Wenny</Text>
        </View>
        <View style={styles.View_I527_2002_280_72}>
          <Text style={styles.Text_I527_2002_280_72}>Psychotherapist</Text>
        </View>
        <View style={styles.View_I527_2002_288_12}>
          <Text style={styles.Text_I527_2002_288_12}>Bali, Indonesia</Text>
        </View>
        <View style={styles.View_I527_2002_285_3}>
          <View style={styles.View_I527_2002_285_1}>
            <Text style={styles.Text_I527_2002_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I527_2002_285_2}>
            <Text style={styles.Text_I527_2002_285_2}>Mon 13:30</Text>
          </View>
        </View>
        <View style={styles.View_I527_2002_288_10}>
          <View style={styles.View_I527_2002_288_8}>
            <Text style={styles.Text_I527_2002_288_8}>(5 reviews)</Text>
          </View>
          <View style={styles.View_I527_2002_288_9}>
            <Text style={styles.Text_I527_2002_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd6f/cb0c/27ae9635d38ded8aec706c5114145910"
          }}
          style={styles.ImageBackground_I527_2002_288_11}
        />
      </View>
      <View style={styles.View_527_2003}>
        <View style={styles.View_I527_2003_280_66}>
          <View style={styles.View_I527_2003_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc1c/ad79/e3447490cf16183cfbcb353f681708f3"
          }}
          style={styles.ImageBackground_I527_2003_280_70}
        />
        <View style={styles.View_I527_2003_280_71}>
          <Text style={styles.Text_I527_2003_280_71}>Dr Cindy Bliep</Text>
        </View>
        <View style={styles.View_I527_2003_280_72}>
          <Text style={styles.Text_I527_2003_280_72}>
            Primary Care Physician
          </Text>
        </View>
        <View style={styles.View_I527_2003_288_12}>
          <Text style={styles.Text_I527_2003_288_12}>
            Cape Town, South Africa
          </Text>
        </View>
        <View style={styles.View_I527_2003_285_3}>
          <View style={styles.View_I527_2003_285_1}>
            <Text style={styles.Text_I527_2003_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I527_2003_285_2}>
            <Text style={styles.Text_I527_2003_285_2}>Tue 9:00</Text>
          </View>
        </View>
        <View style={styles.View_I527_2003_288_10}>
          <View style={styles.View_I527_2003_288_8}>
            <Text style={styles.Text_I527_2003_288_8}>(23 reviews)</Text>
          </View>
          <View style={styles.View_I527_2003_288_9}>
            <Text style={styles.Text_I527_2003_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f97e/4d62/e88bd06710107fc0a334f39ddfd4af74"
          }}
          style={styles.ImageBackground_I527_2003_288_11}
        />
      </View>
      <View style={styles.View_527_2004}>
        <View style={styles.View_I527_2004_280_66}>
          <View style={styles.View_I527_2004_280_66_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5950/8fda/9c55c2caeb7e8ce1380f01a45ac46e83"
          }}
          style={styles.ImageBackground_I527_2004_280_70}
        />
        <View style={styles.View_I527_2004_280_71}>
          <Text style={styles.Text_I527_2004_280_71}>Dr Yash Verma</Text>
        </View>
        <View style={styles.View_I527_2004_280_72}>
          <Text style={styles.Text_I527_2004_280_72}>Psychotherapist</Text>
        </View>
        <View style={styles.View_I527_2004_288_12}>
          <Text style={styles.Text_I527_2004_288_12}>Mumbai, India</Text>
        </View>
        <View style={styles.View_I527_2004_285_3}>
          <View style={styles.View_I527_2004_285_1}>
            <Text style={styles.Text_I527_2004_285_1}>Next Availability</Text>
          </View>
          <View style={styles.View_I527_2004_285_2}>
            <Text style={styles.Text_I527_2004_285_2}>Tue 10:30</Text>
          </View>
        </View>
        <View style={styles.View_I527_2004_288_10}>
          <View style={styles.View_I527_2004_288_8}>
            <Text style={styles.Text_I527_2004_288_8}>(788 reviews)</Text>
          </View>
          <View style={styles.View_I527_2004_288_9}>
            <Text style={styles.Text_I527_2004_288_9}>4.36 stars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd6f/cb0c/27ae9635d38ded8aec706c5114145910"
          }}
          style={styles.ImageBackground_I527_2004_288_11}
        />
      </View>
      <View style={styles.View_527_2005} />
      <View style={styles.View_527_2006}>
        <View style={styles.View_I527_2006_199_344}>
          <View style={styles.View_I527_2006_199_344_4_227} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5979/5b08/877131cfaf519bff9199829a08dfeb63"
          }}
          style={styles.ImageBackground_I527_2006_199_345}
        />
        <View style={styles.View_I527_2006_199_346}>
          <View style={styles.View_I527_2006_199_347}>
            <View style={styles.View_I527_2006_199_349}>
              <Text style={styles.Text_I527_2006_199_349}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I527_2006_199_350}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/1045/6561447145945d88f819dab692870a5f"
              }}
              style={styles.ImageBackground_I527_2006_199_351}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1e/ccd5/7ac32747a5820e1970ec2bf60acb9896"
          }}
          style={styles.ImageBackground_I527_2006_199_352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/171b/ad41/cca1fc9a4c61a69f2073888e1559d679"
          }}
          style={styles.ImageBackground_I527_2006_199_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bb7/85c9/7f4f5815b12675432f7bce135fb62d6e"
          }}
          style={styles.ImageBackground_I527_2006_199_354}
        />
      </View>
      <View style={styles.View_457_178}>
        <View style={styles.View_449_1613} />
        <View style={styles.View_449_1614}>
          <Text style={styles.Text_449_1614}>Book an appointment</Text>
        </View>
        <View style={styles.View_449_1615}>
          <View style={styles.View_I449_1615_424_1} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2638/787c/18bde873448a4bea108f349b14c64062"
            }}
            style={styles.ImageBackground_I449_1615_424_89}
          />
          <View style={styles.View_I449_1615_424_48}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9011/dc9c/913447049b4d2678100b9ada4ac01db2"
              }}
              style={styles.ImageBackground_I449_1615_424_50}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a8/f8af/bba021ba5f8b94bb4bb50c9e1568f912"
              }}
              style={styles.ImageBackground_I449_1615_424_51}
            />
          </View>
          <View style={styles.View_I449_1615_424_53}>
            <Text style={styles.Text_I449_1615_424_53}>
              Prescription will be given if needed
            </Text>
          </View>
          <View style={styles.View_I449_1615_424_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9011/dc9c/913447049b4d2678100b9ada4ac01db2"
              }}
              style={styles.ImageBackground_I449_1615_424_62}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a8/f8af/bba021ba5f8b94bb4bb50c9e1568f912"
              }}
              style={styles.ImageBackground_I449_1615_424_63}
            />
          </View>
          <View style={styles.View_I449_1615_424_65}>
            <Text style={styles.Text_I449_1615_424_65}>
              Healthcare insurance approved
            </Text>
          </View>
          <View style={styles.View_I449_1615_424_3}>
            <Text style={styles.Text_I449_1615_424_3}>
              30 minutes consultation
            </Text>
          </View>
          <View style={styles.View_I449_1615_424_4}>
            <Text style={styles.Text_I449_1615_424_4}>
              Through this 30 minutes consultation, Dr Gabriel will help you
              with general, seasonal and chronic health issues. He will be
              working with you in determining the root of the issue and will
              advice you on how to move ahead.
            </Text>
          </View>
          <View style={styles.View_I449_1615_424_5}>
            <Text style={styles.Text_I449_1615_424_5}>$30</Text>
          </View>
          <View style={styles.View_I449_1615_424_54}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b5/dc4d/c99ef6a4cb95d13def97abc2c8311bdd"
              }}
              style={styles.ImageBackground_I449_1615_424_55}
            />
          </View>
          <View style={styles.View_I449_1615_424_56}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23d5/6c84/f4d54cc4d8ba069030d34a922808b83b"
              }}
              style={styles.ImageBackground_I449_1615_424_57}
            />
          </View>
          <View style={styles.View_I449_1615_424_58}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d67a/53bc/64e56e8bee052c7a4c752399c13cd25c"
              }}
              style={styles.ImageBackground_I449_1615_424_59}
            />
          </View>
        </View>
        <View style={styles.View_449_1616}>
          <View style={styles.View_I449_1616_426_3}>
            <Text style={styles.Text_I449_1616_426_3}>
              Preferred Communication
            </Text>
          </View>
        </View>
        <View style={styles.View_449_1617}>
          <View style={styles.View_I449_1617_426_3}>
            <Text style={styles.Text_I449_1617_426_3}>Payment</Text>
          </View>
        </View>
        <View style={styles.View_449_1618}>
          <View style={styles.View_I449_1618_426_3}>
            <Text style={styles.Text_I449_1618_426_3}>
              Reason for Consultation
            </Text>
          </View>
        </View>
        <View style={styles.View_449_1619}>
          <View style={styles.View_I449_1619_426_3}>
            <Text style={styles.Text_I449_1619_426_3}>Time Slot</Text>
          </View>
        </View>
        <View style={styles.View_449_1620}>
          <View style={styles.View_I449_1620_425_970} />
          <View style={styles.View_I449_1620_425_982}>
            <Text style={styles.Text_I449_1620_425_982}>
              5 minutes consultation
            </Text>
          </View>
          <View style={styles.View_I449_1620_425_983}>
            <Text style={styles.Text_I449_1620_425_983}>
              Through this 5 minutes consultation, Dr Gabriel will answer any
              health related questions.
            </Text>
          </View>
          <View style={styles.View_I449_1620_425_985}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b5/dc4d/c99ef6a4cb95d13def97abc2c8311bdd"
              }}
              style={styles.ImageBackground_I449_1620_425_986}
            />
          </View>
          <View style={styles.View_I449_1620_425_984}>
            <Text style={styles.Text_I449_1620_425_984}>Free</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1620_426_1}
          />
        </View>
        <View style={styles.View_449_1621}>
          <View style={styles.View_I449_1621_442_1032} />
          <View style={styles.View_I449_1621_442_1033}>
            <Text style={styles.Text_I449_1621_442_1033}>
              Debit/Credit Card
            </Text>
          </View>
          <View style={styles.View_I449_1621_442_1039}>
            <Text style={styles.Text_I449_1621_442_1039}>Ending 0918</Text>
          </View>
          <View style={styles.View_I449_1621_442_1040}>
            <Text style={styles.Text_I449_1621_442_1040}>Sarah Kowalski</Text>
          </View>
        </View>
        <View style={styles.View_449_1622}>
          <View style={styles.View_I449_1622_426_13}>
            <Text style={styles.Text_I449_1622_426_13}>Text Messaging</Text>
          </View>
          <View style={styles.View_I449_1622_426_4}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a09c/8ce4/4af25b0414bebb3696cd075fcc8f1532"
              }}
              style={styles.ImageBackground_I449_1622_426_5}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1622_426_10}
          />
        </View>
        <View style={styles.View_449_1623}>
          <View style={styles.View_I449_1623_426_13}>
            <Text style={styles.Text_I449_1623_426_13}>Video Call</Text>
          </View>
          <View style={styles.View_I449_1623_426_4}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6a6/494f/d50b514e12b1429c5e1c2f6d32c30252"
              }}
              style={styles.ImageBackground_I449_1623_426_5}
            />
          </View>
        </View>
        <View style={styles.View_449_1624}>
          <View style={styles.View_I449_1624_426_13}>
            <Text style={styles.Text_I449_1624_426_13}>Phone Call</Text>
          </View>
          <View style={styles.View_I449_1624_426_4}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56c8/335b/a741cd2d1f7c00904f604b7fef643365"
              }}
              style={styles.ImageBackground_I449_1624_426_5}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1624_426_10}
          />
        </View>
        <View style={styles.View_449_1625}>
          <View style={styles.View_I449_1625_438_2}>
            <Text style={styles.Text_I449_1625_438_2}>7:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1625_438_3}
          />
        </View>
        <View style={styles.View_449_1626}>
          <View style={styles.View_I449_1626_438_2}>
            <Text style={styles.Text_I449_1626_438_2}>7:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1626_438_3}
          />
        </View>
        <View style={styles.View_449_1627}>
          <View style={styles.View_I449_1627_438_2}>
            <Text style={styles.Text_I449_1627_438_2}>8:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1627_438_3}
          />
        </View>
        <View style={styles.View_449_1628}>
          <View style={styles.View_I449_1628_438_2}>
            <Text style={styles.Text_I449_1628_438_2}>10:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1628_438_3}
          />
        </View>
        <View style={styles.View_449_1629}>
          <View style={styles.View_I449_1629_438_2}>
            <Text style={styles.Text_I449_1629_438_2}>12:00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1629_438_3}
          />
        </View>
        <View style={styles.View_449_1630}>
          <View style={styles.View_I449_1630_438_2}>
            <Text style={styles.Text_I449_1630_438_2}>14:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1630_438_3}
          />
        </View>
        <View style={styles.View_449_1631}>
          <View style={styles.View_I449_1631_438_2}>
            <Text style={styles.Text_I449_1631_438_2}>16:00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1631_438_3}
          />
        </View>
        <View style={styles.View_449_1632}>
          <View style={styles.View_I449_1632_438_2}>
            <Text style={styles.Text_I449_1632_438_2}>7:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1632_438_3}
          />
        </View>
        <View style={styles.View_449_1633}>
          <View style={styles.View_I449_1633_438_2}>
            <Text style={styles.Text_I449_1633_438_2}>14:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1633_438_3}
          />
        </View>
        <View style={styles.View_449_1634}>
          <View style={styles.View_I449_1634_438_2}>
            <Text style={styles.Text_I449_1634_438_2}>9:00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1634_438_3}
          />
        </View>
        <View style={styles.View_449_1635}>
          <View style={styles.View_I449_1635_438_2}>
            <Text style={styles.Text_I449_1635_438_2}>11:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1635_438_3}
          />
        </View>
        <View style={styles.View_449_1636}>
          <View style={styles.View_I449_1636_438_2}>
            <Text style={styles.Text_I449_1636_438_2}>16:10</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1636_438_3}
          />
        </View>
        <View style={styles.View_449_1637}>
          <View style={styles.View_I449_1637_438_2}>
            <Text style={styles.Text_I449_1637_438_2}>22:00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1637_438_3}
          />
        </View>
        <View style={styles.View_449_1638}>
          <View style={styles.View_I449_1638_438_2}>
            <Text style={styles.Text_I449_1638_438_2}>9:00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1638_438_3}
          />
        </View>
        <View style={styles.View_449_1639}>
          <View style={styles.View_I449_1639_438_2}>
            <Text style={styles.Text_I449_1639_438_2}>11:50</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1639_438_3}
          />
        </View>
        <View style={styles.View_449_1640}>
          <View style={styles.View_I449_1640_438_2}>
            <Text style={styles.Text_I449_1640_438_2}>15:45</Text>
          </View>
        </View>
        <View style={styles.View_449_1641}>
          <View style={styles.View_I449_1641_438_2}>
            <Text style={styles.Text_I449_1641_438_2}>17:20</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1641_438_3}
          />
        </View>
        <View style={styles.View_449_1642}>
          <View style={styles.View_I449_1642_438_2}>
            <Text style={styles.Text_I449_1642_438_2}>7:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1642_438_3}
          />
        </View>
        <View style={styles.View_449_1643}>
          <View style={styles.View_I449_1643_438_2}>
            <Text style={styles.Text_I449_1643_438_2}>15:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1643_438_3}
          />
        </View>
        <View style={styles.View_449_1644}>
          <View style={styles.View_I449_1644_438_2}>
            <Text style={styles.Text_I449_1644_438_2}>16:30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/c2a4/9d42eb59d95e3ea5808f9489c2917aca"
            }}
            style={styles.ImageBackground_I449_1644_438_3}
          />
        </View>
        <View style={styles.View_449_1645}>
          <View style={styles.View_449_1646} />
          <View style={styles.View_449_1647}>
            <Text style={styles.Text_449_1647}>Monday, 14 June 2021</Text>
          </View>
        </View>
        <View style={styles.View_449_1648}>
          <View style={styles.View_449_1649} />
          <View style={styles.View_449_1650}>
            <Text style={styles.Text_449_1650}>Wednesday, 16 June 2021</Text>
          </View>
        </View>
        <View style={styles.View_449_1651}>
          <View style={styles.View_449_1652} />
          <View style={styles.View_449_1653}>
            <Text style={styles.Text_449_1653}>Thursday, 17 June 2021</Text>
          </View>
        </View>
        <View style={styles.View_449_1654}>
          <View style={styles.View_449_1655} />
          <View style={styles.View_449_1656}>
            <Text style={styles.Text_449_1656}>Friday, 18 June 2021</Text>
          </View>
        </View>
        <View style={styles.View_449_1657}>
          <View style={styles.View_449_1658} />
          <View style={styles.View_449_1659}>
            <Text style={styles.Text_449_1659}>Tuesday, 15 June 2021</Text>
          </View>
        </View>
        <View style={styles.View_449_1660}>
          <View style={styles.View_I449_1660_440_56}>
            <View style={styles.View_I449_1660_440_58}>
              <Text style={styles.Text_I449_1660_440_58}>
                Hello, I’ve been having a slight fever that keeps coming and
                going away on its own since last week.
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4485/ea18/b6a812bd5ad345667b4dcb49a97bde97"
            }}
            style={styles.ImageBackground_I449_1660_440_61}
          />
        </View>
        <View style={styles.View_449_1661}>
          <View style={styles.View_I449_1661_440_163} />
          <View style={styles.View_I449_1661_440_164}>
            <Text style={styles.Text_I449_1661_440_164}>
              Happy Health Insurance
            </Text>
          </View>
          <View style={styles.View_I449_1661_442_1021}>
            <Text style={styles.Text_I449_1661_442_1021}>Sarah Kowalski</Text>
          </View>
          <View style={styles.View_I449_1661_440_170}>
            <Text style={styles.Text_I449_1661_440_170}>ID #077189</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2638/787c/18bde873448a4bea108f349b14c64062"
            }}
            style={styles.ImageBackground_I449_1661_441_1020}
          />
        </View>
        <View style={styles.View_449_1662}>
          <View style={styles.View_I449_1662_442_1044} />
          <View style={styles.View_I449_1662_442_1043}>
            <Text style={styles.Text_I449_1662_442_1043}>Book Appointment</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9913/96a9/f389f8a84bd9e0bafab79993482f7d3c"
          }}
          style={styles.ImageBackground_449_1663}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9913/96a9/f389f8a84bd9e0bafab79993482f7d3c"
          }}
          style={styles.ImageBackground_449_1664}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9913/96a9/f389f8a84bd9e0bafab79993482f7d3c"
          }}
          style={styles.ImageBackground_449_1774}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("338%") },
  View_527_1998: {
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
  View_I527_1998_261_1: {
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
  View_I527_1998_261_1_4_227: {
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
  View_I527_1998_261_0: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%")
  },
  View_I527_1998_248_4: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I527_1998_248_4: {
    color: "rgba(3, 54, 65, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I527_1998_254_0: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I527_1998_320_8: {
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
  View_I527_1998_320_8_263_54: {
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
  ImageBackground_I527_1998_320_8_263_55: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%")
  },
  View_I527_1998_320_8_263_56: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I527_1998_320_8_263_56: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_1998_320_9: {
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
  View_I527_1998_320_9_280_56: {
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
  ImageBackground_I527_1998_320_9_280_57: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%")
  },
  View_I527_1998_320_9_280_58: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I527_1998_320_9_280_58: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_1998_320_10: {
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
  View_I527_1998_320_10_280_61: {
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
  ImageBackground_I527_1998_320_10_280_62: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%")
  },
  View_I527_1998_320_10_280_63: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I527_1998_320_10_280_63: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_1998_320_11: {
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
  View_I527_1998_320_11_264_60: {
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
  ImageBackground_I527_1998_320_11_264_58: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%")
  },
  View_I527_1998_320_11_264_59: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I527_1998_320_11_264_59: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_1998_320_11_267_1: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I527_1998_320_11_267_1: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_1998_320_11_268_51: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_I527_1998_320_11_268_51: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_1998_320_11_268_52: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_I527_1998_320_11_268_52: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_1998_320_11_268_53: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_I527_1998_320_11_268_53: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I527_1998_320_11_268_56: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("12%")
  },
  ImageBackground_I527_1998_320_11_271_1: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("20%")
  },
  ImageBackground_I527_1998_320_11_271_6: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("27%")
  },
  ImageBackground_I527_1998_320_11_271_8: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("34%")
  },
  View_I527_1998_320_11_320_0: {
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
  View_I527_1998_320_11_320_0_278_7: {
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
  View_I527_1998_320_11_320_0_278_9: {
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
  Text_I527_1998_320_11_320_0_278_9: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_527_1999: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I527_1999_280_66: {
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
  View_I527_1999_280_66_4_227: {
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
  ImageBackground_I527_1999_280_70: {
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
  View_I527_1999_280_71: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I527_1999_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_1999_280_72: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I527_1999_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_1999_288_12: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I527_1999_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_1999_285_3: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I527_1999_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_1999_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_1999_285_2: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I527_1999_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_1999_288_10: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I527_1999_288_8: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I527_1999_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_1999_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_1999_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I527_1999_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_527_2000: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I527_2000_280_66: {
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
  View_I527_2000_280_66_4_227: {
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
  ImageBackground_I527_2000_280_70: {
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
  View_I527_2000_280_71: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I527_2000_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2000_280_72: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I527_2000_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2000_288_12: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I527_2000_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2000_285_3: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I527_2000_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2000_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2000_285_2: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I527_2000_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2000_288_10: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I527_2000_288_8: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I527_2000_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2000_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2000_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I527_2000_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_527_2001: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I527_2001_280_66: {
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
  View_I527_2001_280_66_4_227: {
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
  ImageBackground_I527_2001_280_70: {
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
  View_I527_2001_280_71: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I527_2001_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2001_280_72: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I527_2001_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2001_288_12: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I527_2001_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2001_285_3: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I527_2001_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2001_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2001_285_2: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I527_2001_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2001_288_10: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I527_2001_288_8: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I527_2001_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2001_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2001_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I527_2001_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_527_2002: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I527_2002_280_66: {
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
  View_I527_2002_280_66_4_227: {
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
  ImageBackground_I527_2002_280_70: {
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
  View_I527_2002_280_71: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I527_2002_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2002_280_72: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I527_2002_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2002_288_12: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I527_2002_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2002_285_3: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I527_2002_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2002_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2002_285_2: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I527_2002_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2002_288_10: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I527_2002_288_8: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I527_2002_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2002_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2002_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I527_2002_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_527_2003: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("110%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I527_2003_280_66: {
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
  View_I527_2003_280_66_4_227: {
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
  ImageBackground_I527_2003_280_70: {
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
  View_I527_2003_280_71: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I527_2003_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2003_280_72: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I527_2003_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2003_288_12: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I527_2003_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2003_285_3: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I527_2003_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2003_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2003_285_2: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I527_2003_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2003_288_10: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I527_2003_288_8: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I527_2003_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2003_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2003_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I527_2003_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_527_2004: {
    width: wp("33%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("110%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I527_2004_280_66: {
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
  View_I527_2004_280_66_4_227: {
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
  ImageBackground_I527_2004_280_70: {
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
  View_I527_2004_280_71: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I527_2004_280_71: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2004_280_72: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I527_2004_280_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2004_288_12: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_I527_2004_288_12: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2004_285_3: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%")
  },
  View_I527_2004_285_1: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2004_285_1: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2004_285_2: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_I527_2004_285_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2004_288_10: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%")
  },
  View_I527_2004_288_8: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I527_2004_288_8: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I527_2004_288_9: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I527_2004_288_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_I527_2004_288_11: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  View_527_2005: {
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
  View_527_2006: {
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
  View_I527_2006_199_344: {
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
  View_I527_2006_199_344_4_227: {
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
  ImageBackground_I527_2006_199_345: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("3%")
  },
  View_I527_2006_199_346: {
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
  View_I527_2006_199_347: {
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
  View_I527_2006_199_349: {
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
  Text_I527_2006_199_349: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I527_2006_199_350: {
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
  ImageBackground_I527_2006_199_351: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I527_2006_199_352: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I527_2006_199_353: {
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
  ImageBackground_I527_2006_199_354: {
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
  View_457_178: {
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
  View_449_1613: {
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
  View_449_1614: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_449_1614: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_449_1615: {
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
  View_I449_1615_424_1: {
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
  ImageBackground_I449_1615_424_89: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("18%")
  },
  View_I449_1615_424_48: {
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
  ImageBackground_I449_1615_424_50: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I449_1615_424_51: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I449_1615_424_53: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_I449_1615_424_53: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I449_1615_424_61: {
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
  ImageBackground_I449_1615_424_62: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I449_1615_424_63: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I449_1615_424_65: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_I449_1615_424_65: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I449_1615_424_3: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I449_1615_424_3: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I449_1615_424_4: {
    flexGrow: 1,
    width: wp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I449_1615_424_4: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I449_1615_424_5: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I449_1615_424_5: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I449_1615_424_54: {
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
  ImageBackground_I449_1615_424_55: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I449_1615_424_56: {
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
  ImageBackground_I449_1615_424_57: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I449_1615_424_58: {
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
  ImageBackground_I449_1615_424_59: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_449_1616: {
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
  View_I449_1616_426_3: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1616_426_3: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_449_1617: {
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
  View_I449_1617_426_3: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1617_426_3: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_449_1618: {
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
  View_I449_1618_426_3: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1618_426_3: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_449_1619: {
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
  View_I449_1619_426_3: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1619_426_3: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_449_1620: {
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
  View_I449_1620_425_970: {
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
  View_I449_1620_425_982: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I449_1620_425_982: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I449_1620_425_983: {
    flexGrow: 1,
    width: wp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I449_1620_425_983: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I449_1620_425_985: {
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
  ImageBackground_I449_1620_425_986: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I449_1620_425_984: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I449_1620_425_984: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I449_1620_426_1: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("8%")
  },
  View_449_1621: {
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
  View_I449_1621_442_1032: {
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
  View_I449_1621_442_1033: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I449_1621_442_1033: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I449_1621_442_1039: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I449_1621_442_1039: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I449_1621_442_1040: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I449_1621_442_1040: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_449_1622: {
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
  View_I449_1622_426_13: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I449_1622_426_13: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I449_1622_426_4: {
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
  ImageBackground_I449_1622_426_5: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I449_1622_426_10: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_449_1623: {
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
  View_I449_1623_426_13: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I449_1623_426_13: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I449_1623_426_4: {
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
  ImageBackground_I449_1623_426_5: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_449_1624: {
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
  View_I449_1624_426_13: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I449_1624_426_13: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I449_1624_426_4: {
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
  ImageBackground_I449_1624_426_5: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I449_1624_426_10: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_449_1625: {
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
  View_I449_1625_438_2: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1625_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I449_1625_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_449_1626: {
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
  View_I449_1626_438_2: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1626_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I449_1626_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_449_1627: {
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
  View_I449_1627_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1627_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I449_1627_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_449_1628: {
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
  View_I449_1628_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1628_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I449_1628_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_449_1629: {
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
  View_I449_1629_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1629_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I449_1629_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_449_1630: {
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
  View_I449_1630_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1630_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I449_1630_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_449_1631: {
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
  View_I449_1631_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1631_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I449_1631_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_449_1632: {
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
  View_I449_1632_438_2: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1632_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I449_1632_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_449_1633: {
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
  View_I449_1633_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1633_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I449_1633_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_449_1634: {
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
  View_I449_1634_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1634_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I449_1634_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_449_1635: {
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
  View_I449_1635_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1635_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I449_1635_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_449_1636: {
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
  View_I449_1636_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1636_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I449_1636_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_449_1637: {
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
  View_I449_1637_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1637_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I449_1637_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_449_1638: {
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
  View_I449_1638_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1638_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I449_1638_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_449_1639: {
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
  View_I449_1639_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1639_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I449_1639_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_449_1640: {
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
  View_I449_1640_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1640_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_449_1641: {
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
  View_I449_1641_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1641_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I449_1641_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_449_1642: {
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
  View_I449_1642_438_2: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1642_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I449_1642_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_449_1643: {
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
  View_I449_1643_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1643_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I449_1643_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_449_1644: {
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
  View_I449_1644_438_2: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I449_1644_438_2: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I449_1644_438_3: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_449_1645: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("115%")
  },
  View_449_1646: {
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
  View_449_1647: {
    width: wp("13%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_449_1647: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_449_1648: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("149%")
  },
  View_449_1649: {
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
  View_449_1650: {
    width: wp("15%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_449_1650: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_449_1651: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("166%")
  },
  View_449_1652: {
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
  View_449_1653: {
    width: wp("13%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_449_1653: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_449_1654: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("183%")
  },
  View_449_1655: {
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
  View_449_1656: {
    width: wp("11%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_449_1656: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_449_1657: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("132%")
  },
  View_449_1658: {
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
  View_449_1659: {
    width: wp("13%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_449_1659: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_449_1660: {
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
  View_I449_1660_440_56: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I449_1660_440_58: {
    width: wp("60%"),
    minWidth: wp("60%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I449_1660_440_58: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I449_1660_440_61: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("14%")
  },
  View_449_1661: {
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
  View_I449_1661_440_163: {
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
  View_I449_1661_440_164: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I449_1661_440_164: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I449_1661_442_1021: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I449_1661_442_1021: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I449_1661_440_170: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I449_1661_440_170: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I449_1661_441_1020: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("6%")
  },
  View_449_1662: {
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
  View_I449_1662_442_1044: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I449_1662_442_1043: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I449_1662_442_1043: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_449_1663: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("95%")
  },
  ImageBackground_449_1664: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("124%")
  },
  ImageBackground_449_1774: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("272%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
