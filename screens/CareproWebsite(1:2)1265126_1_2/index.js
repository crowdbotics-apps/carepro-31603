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
      <View style={styles.View_3_74}>
        <View style={styles.View_3_75}>
          <View style={styles.View_3_76}>
            <View style={styles.View_3_77}>
              <Text style={styles.Text_3_77}>Company</Text>
            </View>
            <View style={styles.View_3_78}>
              <View style={styles.View_3_79}>
                <Text style={styles.Text_3_79}>About Us</Text>
              </View>
              <View style={styles.View_3_80}>
                <Text style={styles.Text_3_80}>Blog</Text>
              </View>
              <View style={styles.View_3_81}>
                <Text style={styles.Text_3_81}>Careers</Text>
              </View>
              <View style={styles.View_3_82}>
                <Text style={styles.Text_3_82}>Contact Us</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3_83}>
            <View style={styles.View_3_84}>
              <Text style={styles.Text_3_84}>Support</Text>
            </View>
            <View style={styles.View_3_85}>
              <View style={styles.View_3_86}>
                <Text style={styles.Text_3_86}>Help Center</Text>
              </View>
              <View style={styles.View_3_87}>
                <Text style={styles.Text_3_87}>Safety Center</Text>
              </View>
              <View style={styles.View_3_88}>
                <Text style={styles.Text_3_88}>Community Guidelines</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3_89}>
            <View style={styles.View_3_90}>
              <Text style={styles.Text_3_90}>Legal</Text>
            </View>
            <View style={styles.View_3_91}>
              <View style={styles.View_3_92}>
                <Text style={styles.Text_3_92}>Cookies Policy</Text>
              </View>
              <View style={styles.View_3_93}>
                <Text style={styles.Text_3_93}>Privacy Policy</Text>
              </View>
              <View style={styles.View_3_94}>
                <Text style={styles.Text_3_94}>Terms of Service</Text>
              </View>
              <View style={styles.View_3_95}>
                <Text style={styles.Text_3_95}>Law Enforcement</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3_96}>
            <View style={styles.View_3_97}>
              <Text style={styles.Text_3_97}>Install App</Text>
            </View>
            <View style={styles.View_3_98}>
              <View style={styles.View_3_215}>
                <View style={styles.View_3_216}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e116/28fc/844aea5e35ace57dd79018d2328b6345"
                    }}
                    style={styles.ImageBackground_3_217}
                  />
                </View>
              </View>
              <View style={styles.View_3_182}>
                <View style={styles.View_3_183}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97fb/1535/1fe84d375c9dd6549ffe4fbeb8e4f5ec"
                    }}
                    style={styles.ImageBackground_3_184}
                  />
                  <View style={styles.View_3_187}>
                    <View style={styles.View_3_188}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b78/630d/edadce2432b696d996c2a7c051e0c827"
                        }}
                        style={styles.ImageBackground_3_189}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/935b/d449/fe40acff1b7c0d9bac9c27985a92f3f6"
                      }}
                      style={styles.ImageBackground_3_192}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09e8/b9c6/d26d039e0df850706df5cfd900e60a0d"
                      }}
                      style={styles.ImageBackground_3_201}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c84/8f2b/628c089e6539e7d7b3f5748016ede731"
          }}
          style={styles.ImageBackground_3_101}
        />
        <View style={styles.View_3_102}>
          <View style={styles.View_3_103}>
            <Text style={styles.Text_3_103}>
              © 2021 CarePro. All rights reserved
            </Text>
          </View>
          <View style={styles.View_3_104}>
            <View style={styles.View_3_105}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/276f/649e/3d1afd0dae42f8451baa2d6cf4b528d1"
                }}
                style={styles.ImageBackground_3_179}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a80/2b7b/d39359e4d47528b706e3edf715c0e995"
                }}
                style={styles.ImageBackground_3_176}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaf1/c946/312e1fd53a309ef9c861e2fe82b71318"
                }}
                style={styles.ImageBackground_3_173}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f53/086f/520693c76ef1f7751bb185f337abb484"
                }}
                style={styles.ImageBackground_3_170}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_5_96}>
        <View style={styles.View_5_97}>
          <View style={styles.View_5_98} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbee/cd78/43a4a57915bcc94a8907255f7b612608"
            }}
            style={styles.ImageBackground_5_99}
          />
        </View>
        <View style={styles.View_5_521}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2202/54df/3f9c3c125dfac9fa86fc130b23701367"
            }}
            style={styles.ImageBackground_5_522}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ebb/f86e/bdd7cc3bf62134afa9f4b373044ac822"
            }}
            style={styles.ImageBackground_5_523}
          />
        </View>
        <View style={styles.View_5_101} />
        <View style={styles.View_5_102}>
          <View style={styles.View_5_103}>
            <Text style={styles.Text_5_103}>
              Your Loving Companion For Life.
            </Text>
          </View>
          <View style={styles.View_5_519}>
            <View style={styles.View_5_520}>
              <Text style={styles.Text_5_520}>Launch</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_5_262}>
          <View style={styles.View_5_263} />
          <View style={styles.View_5_264}>
            <View style={styles.View_5_343}>
              <View style={styles.View_5_344}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73a7/e200/430c0eb592015d357982a16c917ad71d"
                  }}
                  style={styles.ImageBackground_5_345}
                />
              </View>
            </View>
            <View style={styles.View_5_364}>
              <View style={styles.View_5_365}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1866/5674/71ff971f5059c275003ac667d974e5d2"
                  }}
                  style={styles.ImageBackground_5_366}
                />
                <View style={styles.View_5_369}>
                  <View style={styles.View_5_370}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e7f/cff6/743f0b3b405fc4834e2166814e8a195e"
                      }}
                      style={styles.ImageBackground_5_371}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8817/d97a/4fe161fa2d5f7692b84ae2a9a2f126b1"
                    }}
                    style={styles.ImageBackground_5_374}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56bd/85c2/20ea524fa85dce26f7d47e33c66e9494"
                    }}
                    style={styles.ImageBackground_5_383}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_267}>
            <ImageBackground style={styles.ImageBackground_5_397} />
            <View style={styles.View_5_269}>
              <View style={styles.View_5_411}>
                <View style={styles.View_5_412}>
                  <Text style={styles.Text_5_412}>Services</Text>
                </View>
              </View>
              <View style={styles.View_5_413}>
                <View style={styles.View_5_414}>
                  <Text style={styles.Text_5_414}>Emergency Mode</Text>
                </View>
              </View>
              <View style={styles.View_5_415}>
                <View style={styles.View_5_416}>
                  <Text style={styles.Text_5_416}>Our Vision</Text>
                </View>
              </View>
              <View style={styles.View_5_417}>
                <View style={styles.View_5_418}>
                  <Text style={styles.Text_5_418}>Pricing</Text>
                </View>
              </View>
              <View style={styles.View_5_419}>
                <View style={styles.View_5_420}>
                  <Text style={styles.Text_5_420}>Specialists</Text>
                </View>
              </View>
              <View style={styles.View_5_421}>
                <View style={styles.View_5_422}>
                  <Text style={styles.Text_5_422}>More</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f480/3368/2e555b9f1d0c1ebba62c7b728177c401"
                  }}
                  style={styles.ImageBackground_5_425}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_10_137}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a06/4925/d80d9210c920fbeef267a695413b3dda"
          }}
          style={styles.ImageBackground_10_138}
        />
        <View style={styles.View_10_212}>
          <View style={styles.View_10_216}>
            <View style={styles.View_10_217}>
              <Text style={styles.Text_10_217}>Trying is Believing</Text>
            </View>
          </View>
          <View style={styles.View_10_214}>
            <Text style={styles.Text_10_214}>
              See what people are saying about our unique and effective
              formulas.
            </Text>
          </View>
        </View>
        <View style={styles.View_10_141}>
          <View style={styles.View_10_201}>
            <View style={styles.View_10_202}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d0a/1c20/95fd025bc57efe6eef588ae73ab31f03"
                }}
                style={styles.ImageBackground_10_203}
              />
              <View style={styles.View_10_204} />
              <View style={styles.View_10_205}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e6f/6173/cf52ec8f5f98b51621ea1a7ab5cd6379"
                  }}
                  style={styles.ImageBackground_10_206}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ef3/aa79/7e7ca074bdb4953528ee4838a05bce72"
                  }}
                  style={styles.ImageBackground_10_207}
                />
              </View>
            </View>
            <View style={styles.View_10_209}>
              <View style={styles.View_10_210}>
                <Text style={styles.Text_10_210}>Review by Michelle Hyatt</Text>
              </View>
              <View style={styles.View_10_211}>
                <Text style={styles.Text_10_211}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Risus, sit imperdiet risus, venenatis at.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_10_190}>
            <View style={styles.View_10_191}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd79/d4a5/d9ce6c91b1275c7e7cb77e422b7ae477"
                }}
                style={styles.ImageBackground_10_192}
              />
              <View style={styles.View_10_193} />
              <View style={styles.View_10_194}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e6f/6173/cf52ec8f5f98b51621ea1a7ab5cd6379"
                  }}
                  style={styles.ImageBackground_10_195}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ef3/aa79/7e7ca074bdb4953528ee4838a05bce72"
                  }}
                  style={styles.ImageBackground_10_196}
                />
              </View>
            </View>
            <View style={styles.View_10_198}>
              <View style={styles.View_10_199}>
                <Text style={styles.Text_10_199}>
                  Review by Angie Bellemare
                </Text>
              </View>
              <View style={styles.View_10_200}>
                <Text style={styles.Text_10_200}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Risus, sit imperdiet risus, venenatis at.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_10_179}>
            <View style={styles.View_10_180}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/719d/3c29/3c692ae5fc4c82c09a01d8a0640718cb"
                }}
                style={styles.ImageBackground_10_181}
              />
              <View style={styles.View_10_182} />
              <View style={styles.View_10_183}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e6f/6173/cf52ec8f5f98b51621ea1a7ab5cd6379"
                  }}
                  style={styles.ImageBackground_10_184}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ef3/aa79/7e7ca074bdb4953528ee4838a05bce72"
                  }}
                  style={styles.ImageBackground_10_185}
                />
              </View>
            </View>
            <View style={styles.View_10_187}>
              <View style={styles.View_10_188}>
                <Text style={styles.Text_10_188}>
                  Review by Brittany Nichole
                </Text>
              </View>
              <View style={styles.View_10_189}>
                <Text style={styles.Text_10_189}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Risus, sit imperdiet risus, venenatis at.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_10_250}>
        <View style={styles.View_10_251} />
        <View style={styles.View_10_252}>
          <View style={styles.View_10_384}>
            <View style={styles.View_10_394}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ff/f702/8537685c57e89b4582a68557c89ca6bb"
                }}
                style={styles.ImageBackground_10_399}
              />
            </View>
            <View style={styles.View_10_403}>
              <View style={styles.View_10_404}>
                <View style={styles.View_10_405}>
                  <Text style={styles.Text_10_405}>1M+</Text>
                </View>
                <View style={styles.View_10_406}>
                  <Text style={styles.Text_10_406}>Happy Users</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_10_358}>
            <View style={styles.View_10_369}>
              <View style={styles.View_10_375}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70a7/b315/b0195dbf0755e4e2d0f6718d6576d722"
                  }}
                  style={styles.ImageBackground_10_376}
                />
              </View>
            </View>
            <View style={styles.View_10_380}>
              <View style={styles.View_10_381}>
                <View style={styles.View_10_382}>
                  <Text style={styles.Text_10_382}>5,000+</Text>
                </View>
                <View style={styles.View_10_383}>
                  <Text style={styles.Text_10_383}>Licensed Specialists</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_10_332}>
            <View style={styles.View_10_343}>
              <View style={styles.View_10_349}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c67b/ce91/f1d7bf49adb1ff97c69c48bd6909e6a5"
                  }}
                  style={styles.ImageBackground_10_350}
                />
              </View>
            </View>
            <View style={styles.View_10_354}>
              <View style={styles.View_10_355}>
                <View style={styles.View_10_356}>
                  <Text style={styles.Text_10_356}>24/7</Text>
                </View>
                <View style={styles.View_10_357}>
                  <Text style={styles.Text_10_357}>Live Customer Service</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_10_306}>
            <View style={styles.View_10_317}>
              <View style={styles.View_10_323}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e0e/032f/4282615240392b78f8e694740805c7bc"
                  }}
                  style={styles.ImageBackground_10_324}
                />
              </View>
            </View>
            <View style={styles.View_10_328}>
              <View style={styles.View_10_329}>
                <View style={styles.View_10_330}>
                  <Text style={styles.Text_10_330}>99%</Text>
                </View>
                <View style={styles.View_10_331}>
                  <Text style={styles.Text_10_331}>Positive Reviews</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_10_457}>
        <View style={styles.View_10_458}>
          <Text style={styles.Text_10_458}>App Features</Text>
        </View>
        <View style={styles.View_10_459}>
          <View style={styles.View_10_460}>
            <View style={styles.View_10_589}>
              <View style={styles.View_10_598}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ff/f702/8537685c57e89b4582a68557c89ca6bb"
                  }}
                  style={styles.ImageBackground_10_603}
                />
              </View>
              <View style={styles.View_10_591}>
                <View style={styles.View_10_592}>
                  <Text style={styles.Text_10_592}>Emergency Mode</Text>
                </View>
                <View style={styles.View_10_593}>
                  <Text style={styles.Text_10_593}>
                    Connect with an emergency specialist in less than 3 minutes.
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_10_568}>
              <View style={styles.View_10_578}>
                <View style={styles.View_10_584}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70a7/b315/b0195dbf0755e4e2d0f6718d6576d722"
                    }}
                    style={styles.ImageBackground_10_585}
                  />
                </View>
              </View>
              <View style={styles.View_10_570}>
                <View style={styles.View_10_571}>
                  <Text style={styles.Text_10_571}>Friends Area</Text>
                </View>
                <View style={styles.View_10_572}>
                  <Text style={styles.Text_10_572}>
                    Connect with people dealing with the same issues as you or
                    connect with caregivers who will help you.
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_10_547}>
              <View style={styles.View_10_557}>
                <View style={styles.View_10_563}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7c6/359d/c20a190cacdb7debc6b093fa1cac108d"
                    }}
                    style={styles.ImageBackground_10_564}
                  />
                </View>
              </View>
              <View style={styles.View_10_549}>
                <View style={styles.View_10_550}>
                  <Text style={styles.Text_10_550}>Drug Taking Reminder</Text>
                </View>
                <View style={styles.View_10_551}>
                  <Text style={styles.Text_10_551}>
                    Your specialist will set up your drug taking schedule on the
                    platform and you shall be reminded everytime.
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_10_517}>
              <View style={styles.View_10_530}>
                <View style={styles.View_10_539}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d91/70a2/dbb99aec9e12861a3d7aa4662b69cf96"
                    }}
                    style={styles.ImageBackground_10_540}
                  />
                </View>
              </View>
              <View style={styles.View_10_519}>
                <View style={styles.View_10_520}>
                  <Text style={styles.Text_10_520}>Drug Abuse Help</Text>
                </View>
                <View style={styles.View_10_521}>
                  <Text style={styles.Text_10_521}>
                    Get private help for your drug abuse issues and let us guide
                    you towards a better and happier life.
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_10_465}>
            <View style={styles.View_10_514}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81c6/fb5e/496486a5d237dc0b762efaba014de427"
                }}
                style={styles.ImageBackground_10_515}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ad/668b/9a40ae13d92ed2d24dfb170184ed1de9"
                }}
                style={styles.ImageBackground_10_516}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_10_624}>
        <View style={styles.View_10_625}>
          <View style={styles.View_10_626}>
            <View style={styles.View_10_627} />
            <View style={styles.View_10_628} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08fd/17c8/559e7371714f57cbecd00a71c41d647b"
              }}
              style={styles.ImageBackground_10_629}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b56/b70e/c2bca05afcb72b680d82c93a98a503fd"
              }}
              style={styles.ImageBackground_10_630}
            />
          </View>
          <View style={styles.View_10_631}>
            <View style={styles.View_10_632}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e83f/2454/64a1e3814aa8e49e3326479d3a57e25f"
                }}
                style={styles.ImageBackground_10_633}
              />
            </View>
            <View style={styles.View_10_639}>
              <View style={styles.View_10_640}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f2f/73c0/4e65d02b9894e1e0e55d4298a0363bf8"
                  }}
                  style={styles.ImageBackground_10_641}
                />
                <View style={styles.View_10_642} />
                <View style={styles.View_10_643}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d238/2095/ecba8685b7145889fb65192a83da2c7f"
                    }}
                    style={styles.ImageBackground_10_644}
                  />
                  <View style={styles.View_10_645}>
                    <View style={styles.View_10_646} />
                    <View style={styles.View_10_647} />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fb1/cd3c/362dd413993653c972b912e78ec9af45"
                  }}
                  style={styles.ImageBackground_10_648}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d32c/26e0/47f092ad0b2d2a6974b2da15a10e4166"
                  }}
                  style={styles.ImageBackground_10_650}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7ac/6984/6386eeacb9203a9d4961ccb93bef7525"
                  }}
                  style={styles.ImageBackground_10_651}
                />
              </View>
            </View>
            <View style={styles.View_10_652}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e83f/2454/64a1e3814aa8e49e3326479d3a57e25f"
                }}
                style={styles.ImageBackground_10_653}
              />
            </View>
            <View style={styles.View_10_659}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c65b/c48e/bc6917cee0b00993f3388fc8c3f59890"
                }}
                style={styles.ImageBackground_10_660}
              />
              <View style={styles.View_10_663}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/580c/a95b/7e45a7593cbad3c70991a426a9deeafd"
                  }}
                  style={styles.ImageBackground_10_664}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7572/c9ef/3080a20048c76e742f31e203fca15822"
                  }}
                  style={styles.ImageBackground_10_674}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_10_666}>
            <View style={styles.View_10_667}>
              <Text style={styles.Text_10_667}>
                Subscribe for goodies on launching
              </Text>
            </View>
            <View style={styles.View_10_668}>
              <View style={styles.View_10_669}>
                <View style={styles.View_10_670}>
                  <Text style={styles.Text_10_670}>Your email address</Text>
                </View>
              </View>
              <View style={styles.View_10_671}>
                <View style={styles.View_10_672}>
                  <Text style={styles.Text_10_672}>Subscribe</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_14_30}>
        <View style={styles.View_14_170}>
          <View style={styles.View_14_171}>
            <Text style={styles.Text_14_171}>Discover our key features</Text>
          </View>
        </View>
        <View style={styles.View_14_32}>
          <View style={styles.View_14_136}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1858/3ff5/d14b459999484e1e0ea1a30159e21215"
              }}
              style={styles.ImageBackground_14_148}
            />
            <View style={styles.View_14_138}>
              <View style={styles.View_14_139}>
                <Text style={styles.Text_14_139}>Time Saving</Text>
              </View>
              <View style={styles.View_14_140}>
                <Text style={styles.Text_14_140}>
                  Skip the long waiting periods and get help anytime, anywhere.
                  We have specialists ready to help 24/7
                </Text>
              </View>
            </View>
            <View style={styles.View_14_152}>
              <View style={styles.View_14_153}>
                <Text style={styles.Text_14_153}>Know more</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94d3/8251/10a81e2fc0319bf91bd5bb06c13bfee1"
                }}
                style={styles.ImageBackground_14_156}
              />
            </View>
          </View>
          <View style={styles.View_14_112}>
            <View style={styles.View_14_125}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb05/65f9/8e35129ac859ca1a94c9ecebfdf2022d"
                }}
                style={styles.ImageBackground_14_126}
              />
            </View>
            <View style={styles.View_14_114}>
              <View style={styles.View_14_115}>
                <Text style={styles.Text_14_115}>Emergency Friendly</Text>
              </View>
              <View style={styles.View_14_116}>
                <Text style={styles.Text_14_116}>
                  Our dedicated team ready to tackle any emergency and offer
                  help accordingly. It takes less than 3 minutes to reach out to
                  a specialist
                </Text>
              </View>
            </View>
            <View style={styles.View_14_130}>
              <View style={styles.View_14_131}>
                <Text style={styles.Text_14_131}>Know more</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94d3/8251/10a81e2fc0319bf91bd5bb06c13bfee1"
                }}
                style={styles.ImageBackground_14_134}
              />
            </View>
          </View>
          <View style={styles.View_14_82}>
            <View style={styles.View_14_98}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd1b/5b20/6c172df0621e32dfe1c645831712e7da"
                }}
                style={styles.ImageBackground_14_99}
              />
            </View>
            <View style={styles.View_14_84}>
              <View style={styles.View_14_85}>
                <Text style={styles.Text_14_85}>More Affordable</Text>
              </View>
              <View style={styles.View_14_86}>
                <Text style={styles.Text_14_86}>
                  We have a large selection of budget-friendly specialists as
                  well as discounts on certain pharmacies, helping you save more
                </Text>
              </View>
            </View>
            <View style={styles.View_14_106}>
              <View style={styles.View_14_107}>
                <Text style={styles.Text_14_107}>Know more</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94d3/8251/10a81e2fc0319bf91bd5bb06c13bfee1"
                }}
                style={styles.ImageBackground_14_110}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_23_11}>
        <View style={styles.View_23_12}>
          <View style={styles.View_23_13}>
            <Text style={styles.Text_23_13}>Our Services</Text>
          </View>
          <View style={styles.View_23_83}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a34d/e21c/7a0aac20a096478b3cfdf90e3b46ba31"
              }}
              style={styles.ImageBackground_23_84}
            />
            <View style={styles.View_23_85}>
              <View style={styles.View_23_86}>
                <Text style={styles.Text_23_86}>General Health</Text>
              </View>
              <View style={styles.View_23_87}>
                <Text style={styles.Text_23_87}>
                  Book a convenient consultation with a licensed specialist,
                  skip the long waiting hours/days and feel better faster. After
                  your consultation, should medication be required, we can send
                  them right to your doorstep as well (only in selected areas).
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_23_78}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0d5/b14c/092eadb43ff2be966535ba8473bb681f"
              }}
              style={styles.ImageBackground_23_79}
            />
            <View style={styles.View_23_80}>
              <View style={styles.View_23_81}>
                <Text style={styles.Text_23_81}>Natural Health</Text>
              </View>
              <View style={styles.View_23_82}>
                <Text style={styles.Text_23_82}>
                  Our dedicated area for natural health is for those who prefer
                  the more traditional method of feeling better. Meet our
                  qualified natural practitioners today and explore this ancient
                  way.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_23_17}>
          <View style={styles.View_23_68}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9ff/87fd/3f8f3c01eab207933e4926f9530b8c57"
              }}
              style={styles.ImageBackground_23_69}
            />
            <View style={styles.View_23_70}>
              <View style={styles.View_23_71}>
                <Text style={styles.Text_23_71}>Mental Health</Text>
              </View>
              <View style={styles.View_23_72}>
                <Text style={styles.Text_23_72}>
                  Getting help for mental health can be quite a challenge and we
                  know how it feels to deal with these issues. Get private help
                  from qualified and caring specialists who will be your
                  companion on this journey towards feeling better inside and
                  out.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_23_63}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d436/e376/99f7fd57065a64ef6ccc91e008331695"
              }}
              style={styles.ImageBackground_23_64}
            />
            <View style={styles.View_23_65}>
              <View style={styles.View_23_66}>
                <Text style={styles.Text_23_66}>Wellness &amp; Wellness</Text>
              </View>
              <View style={styles.View_23_67}>
                <Text style={styles.Text_23_67}>
                  Skilled and qualified fitness practitioners and trainers to
                  assist you on your journey of feeling good and living a better
                  life. Completely tailored and individual assistance just when
                  you need it.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_23_50}>
            <View style={styles.View_23_51}>
              <Text style={styles.Text_23_51}>Launch App</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a17/3510/a01cc9f1440c3a05e88a90f1b53b848d"
              }}
              style={styles.ImageBackground_23_54}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("837%") },
  View_3_74: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("783%"),
    backgroundColor: "rgba(11, 13, 23, 1)"
  },
  View_3_75: {
    flexGrow: 1,
    width: wp("77%"),
    height: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3_76: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3_77: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_77: {
    color: "rgba(244, 245, 247, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_78: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3_79: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_79: {
    color: "rgba(238, 239, 244, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_80: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_3_80: {
    color: "rgba(238, 239, 244, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_81: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_3_81: {
    color: "rgba(238, 239, 244, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_82: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_3_82: {
    color: "rgba(238, 239, 244, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_83: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3_84: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_84: {
    color: "rgba(244, 245, 247, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_85: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3_86: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_86: {
    color: "rgba(238, 239, 244, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_87: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_3_87: {
    color: "rgba(238, 239, 244, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_88: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_3_88: {
    color: "rgba(238, 239, 244, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_89: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3_90: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_90: {
    color: "rgba(244, 245, 247, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_91: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3_92: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_92: {
    color: "rgba(238, 239, 244, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_93: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_3_93: {
    color: "rgba(238, 239, 244, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_94: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_3_94: {
    color: "rgba(238, 239, 244, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_95: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_3_95: {
    color: "rgba(238, 239, 244, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_96: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3_97: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_97: {
    color: "rgba(244, 245, 247, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_98: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3_215: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3_216: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_217: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_182: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3_183: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_184: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_187: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_3_188: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_189: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_192: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_3_201: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_3_101: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%")
  },
  View_3_102: {
    flexGrow: 1,
    width: wp("75%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3_103: {
    width: wp("38%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_103: {
    color: "rgba(217, 219, 225, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_104: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3_105: {
    width: wp("14%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_3_179: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_176: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_3_173: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_3_170: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_5_96: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("118%"),
    minHeight: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_5_97: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("94%")
  },
  View_5_98: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_5_99: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_521: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("73%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_522: {
    width: wp("17%"),
    height: hp("72%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    resizeMode: "cover"
  },
  ImageBackground_5_523: {
    width: wp("19%"),
    height: hp("77%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_5_101: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("118%"),
    backgroundColor: "rgba(244, 245, 247, 1)"
  },
  View_5_102: {
    flexGrow: 1,
    width: wp("77%"),
    height: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_5_103: {
    width: wp("77%"),
    minWidth: wp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_103: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 58,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_519: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_520: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_5_520: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_262: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_263: {
    width: wp("100%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_5_264: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_5_343: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_5_344: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_345: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_364: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_5_365: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_366: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_369: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_5_370: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_371: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_374: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_5_383: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_5_267: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_5_397: {
    width: wp("7%"),
    minWidth: wp("7%"),
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
  View_5_269: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_5_411: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_412: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_412: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_413: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_414: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_414: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_415: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_416: {
    width: wp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_416: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_417: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_418: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_418: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_419: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_420: {
    width: wp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_420: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_421: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_5_422: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_422: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_425: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_10_137: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("641%"),
    backgroundColor: "rgba(130, 233, 255, 1)"
  },
  ImageBackground_10_138: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("7%")
  },
  View_10_212: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_216: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_217: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_217: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 38,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_214: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_10_214: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_141: {
    flexGrow: 1,
    width: wp("77%"),
    height: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_201: {
    width: wp("24%"),
    height: hp("41%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_202: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_10_203: {
    width: wp("24%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_10_204: {
    width: wp("24%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(11, 13, 23, 1)"
  },
  View_10_205: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_10_206: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_207: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_10_209: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_210: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_210: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_211: {
    width: wp("24%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_211: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_190: {
    width: wp("24%"),
    height: hp("41%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_191: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_10_192: {
    width: wp("24%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_10_193: {
    width: wp("24%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(11, 13, 23, 1)"
  },
  View_10_194: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_10_195: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_196: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_10_198: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_199: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_199: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_200: {
    width: wp("24%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_200: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_179: {
    width: wp("24%"),
    height: hp("41%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_180: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_10_181: {
    width: wp("24%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_10_182: {
    width: wp("24%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(11, 13, 23, 1)"
  },
  View_10_183: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_10_184: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_185: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_10_187: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_188: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_188: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_189: {
    width: wp("24%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_189: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_250: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("118%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_10_251: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 200, 238, 1)"
  },
  View_10_252: {
    flexGrow: 1,
    width: wp("77%"),
    height: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("11%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_10_384: {
    width: wp("18%"),
    height: hp("24%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_394: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(244, 245, 247, 1)"
  },
  ImageBackground_10_399: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_10_403: {
    width: wp("18%"),
    height: hp("13%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_404: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_405: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_405: {
    color: "rgba(28, 200, 238, 1)",
    fontSize: 38,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_406: {
    width: wp("18%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_406: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_358: {
    width: wp("18%"),
    height: hp("24%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_369: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(244, 245, 247, 1)"
  },
  View_10_375: {
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_376: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_380: {
    width: wp("18%"),
    height: hp("13%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_381: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_382: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_382: {
    color: "rgba(28, 200, 238, 1)",
    fontSize: 38,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_383: {
    width: wp("18%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_383: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_332: {
    width: wp("18%"),
    height: hp("24%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_343: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(244, 245, 247, 1)"
  },
  View_10_349: {
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_350: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_354: {
    width: wp("18%"),
    height: hp("13%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_355: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_356: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_356: {
    color: "rgba(28, 200, 238, 1)",
    fontSize: 38,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_357: {
    width: wp("18%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_357: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_306: {
    width: wp("18%"),
    height: hp("24%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_317: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(244, 245, 247, 1)"
  },
  View_10_323: {
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_324: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_328: {
    width: wp("18%"),
    height: hp("13%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_329: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_330: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_330: {
    color: "rgba(28, 200, 238, 1)",
    fontSize: 38,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_331: {
    width: wp("18%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_331: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_457: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("131%"),
    minHeight: hp("131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("510%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_10_458: {
    flexGrow: 1,
    width: wp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_10_458: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 38,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_459: {
    flexGrow: 1,
    width: wp("77%"),
    height: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_460: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_589: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_598: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 245, 247, 1)"
  },
  ImageBackground_10_603: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_10_591: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_592: {
    width: wp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_592: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_593: {
    width: wp("30%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_593: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_568: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_578: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 245, 247, 1)"
  },
  View_10_584: {
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_585: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_570: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_571: {
    width: wp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_571: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_572: {
    width: wp("30%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_572: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_547: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_557: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 245, 247, 1)"
  },
  View_10_563: {
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_564: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_549: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_550: {
    width: wp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_550: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_551: {
    width: wp("30%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_551: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_517: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_530: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 245, 247, 1)"
  },
  View_10_539: {
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_540: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_519: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_520: {
    width: wp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_520: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_521: {
    width: wp("30%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_521: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_465: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("98%"),
    minHeight: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_514: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("98%"),
    minHeight: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10_515: {
    width: wp("22%"),
    height: hp("93%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    resizeMode: "cover"
  },
  ImageBackground_10_516: {
    width: wp("25%"),
    height: hp("98%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_10_624: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("726%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_10_625: {
    flexGrow: 1,
    width: wp("77%"),
    height: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("9%")
  },
  View_10_626: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10_627: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_10_628: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 200, 238, 1)"
  },
  ImageBackground_10_629: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("-23%")
  },
  ImageBackground_10_630: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("75%"),
    minHeight: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("-27%")
  },
  View_10_631: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("9%")
  },
  View_10_632: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_633: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_639: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_640: {
    width: wp("8%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_641: {
    width: wp("8%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_642: {
    width: wp("6%"),
    height: hp("14%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_10_643: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_644: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_645: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_10_646: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(46, 197, 206, 1)"
  },
  View_10_647: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(46, 197, 206, 1)"
  },
  ImageBackground_10_648: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_650: {
    width: wp("3%"),
    height: hp("10%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_651: {
    width: wp("3%"),
    height: hp("10%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_10_652: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_653: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_659: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("13%")
  },
  ImageBackground_10_660: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_10_663: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_10_664: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_10_674: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_666: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_667: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_667: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_668: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_669: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 245, 247, 1)",
    overflow: "hidden"
  },
  View_10_670: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_10_670: {
    color: "rgba(71, 74, 87, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_671: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(24, 25, 31, 1)",
    overflow: "hidden"
  },
  View_10_672: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_10_672: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_30: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("172%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_14_170: {
    flexGrow: 1,
    width: wp("51%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_14_171: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_14_171: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 38,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_32: {
    flexGrow: 1,
    width: wp("77%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_14_136: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_14_148: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_14_138: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_14_139: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_14_139: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_140: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_14_140: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_152: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_14_153: {
    width: wp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_14_153: {
    color: "rgba(28, 200, 238, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_14_156: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_14_112: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_14_125: {
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
  ImageBackground_14_126: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_14_114: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_14_115: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_14_115: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_116: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_14_116: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_130: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_14_131: {
    width: wp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_14_131: {
    color: "rgba(28, 200, 238, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_14_134: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_14_82: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_14_98: {
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
  ImageBackground_14_99: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_14_84: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_14_85: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_14_85: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_86: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_14_86: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_106: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_14_107: {
    width: wp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_14_107: {
    color: "rgba(28, 200, 238, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_14_110: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_23_11: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("275%"),
    minHeight: hp("275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("235%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_23_12: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_23_13: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_13: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 38,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_83: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_84: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_23_85: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("85%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_23_86: {
    width: wp("35%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_86: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_87: {
    width: wp("35%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_87: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_78: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("109%"),
    minHeight: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("144%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_79: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_23_80: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("85%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_23_81: {
    width: wp("35%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_81: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_82: {
    width: wp("35%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_82: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_17: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_23_68: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_69: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_23_70: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("85%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_23_71: {
    width: wp("35%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_71: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_72: {
    width: wp("35%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_72: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_63: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("109%"),
    minHeight: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("125%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_64: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_23_65: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("85%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_23_66: {
    width: wp("35%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_66: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_67: {
    width: wp("35%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_67: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_50: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("245%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_51: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_51: {
    color: "rgba(28, 200, 238, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_54: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
