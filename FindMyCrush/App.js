/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, TouchableOpacity, StyleSheet, Text, View, Image, AppRegistry, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
const FBSDK = require('react-native-fbsdk');
const { LoginManager } = FBSDK;
import AppIntroSlider from 'react-native-app-intro-slider';

//HOMESCREEN MAIN LOGIN PAGE ->>

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this._fbAuth = this._fbAuth.bind(this);
  }

  static navigationOptions = {
    title: 'Welcome',
    header: false
  };

  _fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile'])
      .then(result => {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          this.props.navigation.navigate('MarkingCrush');
        }
      })
      .catch(error => {
        alert('Login fail with error: ' + error);
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    let bgImag = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/heart_bg@3x.png'
    };

    let theHeart = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/Login_gfx@3x.png'
    };

    let fbBtnMain = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/Group Login2@3x.png'
    };
    return (
      <View style={{ flex: 3 }}>
        <Image source={bgImag} style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }} />
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <Animatable.Image
            animation="pulse"
            easing="ease-out"
            iterationCount={4}
            source={theHeart}
            style={{ height: 195, width: 265, marginTop: 150 }}
          />

          <Text
            style={{
              textAlign: 'center',
              backgroundColor: 'transparent',
              fontSize: 25,
              color: '#FCFCFC',
              paddingTop: 20,
              fontFamily: 'NunitoSans-Bold'
            }}
          >
            Welcome To{'\n '}
            <Text
              style={{
                textAlign: 'center',
                backgroundColor: 'transparent',
                fontSize: 35,
                color: '#FCFCFC',
                fontFamily: 'Norican-Regular'
              }}
            >
              Find My Crush
            </Text>
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={this._fbAuth}>
            <Image source={fbBtnMain} style={{ height: 59, width: 306, marginTop: 0, borderRadius: 25 }} />
          </TouchableOpacity>

          <Animatable.Text
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            style={{
              textAlign: 'center',
              marginTop: 25,
              backgroundColor: 'transparent',
              color: '#FCFCFC',
              fontFamily: 'NunitoSans-Bold'
            }}
          >
            To Continue using the app you{'\n '} will have to log in with {'\n '} facebook
          </Animatable.Text>
        </View>
      </View>
    );
  }
}
//MAIN PAGE ENDS HERE <--
//random comment
//MarkCrushesh UI Starts from here -->

class MarkCrushes extends React.Component {
  static navigationOptions = {
    title: 'MarkCrush',
    header: false
  };
  render() {
    const { navigate } = this.props.navigation;
    let bgImag = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/Rectangle@3x.png'
    };

    let profiles = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/Group@3x.png'
    };

    let Myprofile = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/ProfileMain@3x.png'
    };

    let HeartBtn = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/heart_Button@3x.png'
    };

    let Crushes = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/Crushes@3x.png'
    };

    let SkipCrushes = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/heart_break@3x.png'
    };
    return (
      <View style={{ flex: 1 }}>
        <Image source={bgImag} style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }} />
        <View Style={{ flex: 1, flexDirection: 'column' }}>
          <Animatable.Text
            animation="bounceIn"
            iterationCount={1}
            delay={350}
            style={{
              textAlign: 'center',
              marginTop: 45,
              backgroundColor: 'transparent',
              color: '#FCFCFC',
              padding: 20,
              fontSize: 30,
              fontFamily: 'Norican-Regular'
            }}
          >
            Find My {'\n'} Crush
          </Animatable.Text>
        </View>
        <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={profiles} style={{ height: 310, width: 353, marginTop: 10 }} />

          <Text
            style={{
              textAlign: 'center',
              backgroundColor: 'transparent',
              fontSize: 25,
              color: '#FCFCFC',
              paddingTop: 5,
              fontFamily: 'NunitoSans-Bold'
            }}
          >
            Myrtie Bell
          </Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <TouchableOpacity onPress={() => navigate('Profile')}>
              <Image source={Myprofile} style={{ height: 80, width: 80, marginTop: 10, right: -0 }} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity onPress={this._onPressButton}>
              <Image source={SkipCrushes} style={{ height: 63, width: 70 }} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity onPress={this._onPressButton}>
              <Animatable.Image
                animation="pulse"
                easing="ease-in-out-expo"
                iterationCount="infinite"
                source={HeartBtn}
                style={{ height: 100, width: 126 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={() => navigate('CrushMatches')}>
              <Image source={Crushes} style={{ height: 80, width: 80 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
//MarkCrushes Ends here.. <--

// This is UserProfile Settings etc..!

class MainUserProfile extends React.Component {
  static navigationOptions = {
    title: 'MainProfile',
    header: false
  };
  render() {
    const { navigate } = this.props.navigation;
    let bgImag = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/Rectangle@3x.png'
    };
    let backBtn = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/OvalNext@3x.png'
    };
    let logOutBtn = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/GroupLogOut@3x.png'
    };
    let ProfilePic = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/cf4ccd8643a85b1c099896262c10a691.tracy@3x.png'
    };
    let FemalePrefOptBtn = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/venus@3x.png'
    };

    let MalePrefOptBtn = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/mars@3x.png'
    };
    let buyNowBtn = { uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/BuyNow@3x.png' };
    return (
      <View style={{ flex: 1 }}>
        <Image source={bgImag} style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }} />

        <View style={{ flex: 2, alignItems: 'center' }}>
          <Image source={ProfilePic} style={{ height: 160, width: 160, marginTop: 50 }} />
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 20,
              color: '#FCFCFC',
              textAlign: 'center',
              fontFamily: 'NunitoSans-Bold'
            }}
          >
            kevin Warren
          </Text>
          <Animatable.Text
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            style={{
              textAlign: 'center',
              fontSize: 15,
              marginTop: 15,
              backgroundColor: 'transparent',
              color: '#FCFCFC',
              fontFamily: 'NunitoSans-Bold'
            }}
          >
            INTERESTED IN
          </Animatable.Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center'
          }}
        >
          <TouchableOpacity onPress={this._onPressButton}>
            <Image source={FemalePrefOptBtn} style={{ alignItems: 'center', height: 100, width: 75 }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onPressButton}>
            <Image source={MalePrefOptBtn} style={{ alignItems: 'center', height: 100, width: 75 }} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',

            justifyContent: 'center'
          }}
        >
          <Text
            style={{
              fontSize: 15,
              backgroundColor: 'transparent',
              color: '#FCFCFC',
              textAlign: 'center',
              fontFamily: 'NunitoSans-Bold'
            }}
          >
            Credits In Account {'\n'}
          </Text>
          <Text
            style={{
              fontSize: 20,
              backgroundColor: 'transparent',
              color: '#FCFCFC',
              textAlign: 'center',
              fontFamily: 'NunitoSans-Bold'
            }}
          >
            30
          </Text>
          <View style={{ alignItems: 'center', marginTop: 5 }}>
            <TouchableOpacity onPress={this._onPressButton}>
              <Animatable.Image
                animation="pulse"
                easing="ease-in"
                iterationCount={5}
                source={buyNowBtn}
                style={{ height: 48, width: 200 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1 }} />
          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigate('Home')}>
              <Image source={logOutBtn} style={{ height: 42, width: 84 }} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={() => navigate('MarkingCrush')}>
              <Image source={backBtn} style={{ height: 80, width: 80, marginTop: 21 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

//Navigation Stuffs..

class CrushMatchInfo extends React.Component {
  static navigationOptions = {
    title: 'CrushFound',
    header: false
  };
  render() {
    const { navigate } = this.props.navigation;

    let bgImag = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/Rectangle@3x.png'
    };
    let SkipCrushes = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/heart_break@3x.png'
    };
    let backBtn = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/OvalBack@3x.png'
    };

    return (
      <View style={{ flex: 1 }}>
        <Image source={bgImag} style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }} />

        <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Image source={SkipCrushes} style={{ height: 63, width: 70 }} />
          <Text
            style={{
              textAlign: 'center',
              backgroundColor: 'transparent',
              color: '#FCFCFC',
              marginTop: 30,
              fontFamily: 'NunitoSans-Bold'
            }}
          >
            You do not have any match yet, {'\n'}explore more.
          </Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={() => navigate('MarkingCrush')}>
              <Image source={backBtn} style={{ height: 80, width: 80 }} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
            <Text
              style={{
                fontSize: 10,
                textAlign: 'center',
                backgroundColor: 'transparent',
                color: '#FCFCFC',
                marginBottom: 10,
                fontFamily: 'NunitoSans-Bold'
              }}
            >
              (c) 2017, Mellifera{'\n'}Labs
            </Text>
          </View>
          <View style={{ flex: 1 }} />
        </View>
      </View>
    );
  }
}

//CrushMatchInfo endss here....

//Walkthrough screens customization..
//to be build here..!!

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'transparent',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const slides = [
  {
    key: '1'
  },
  {
    key: '2'
  },
  {
    key: '3'
  }
];
let intro1 = { uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/Group 5@3x.png' };

let introFb = { uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/Fill 11@3x.png' };

let heartNxtbtn = {
  uri:
    '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/001443-3d-transparent-glass-icon-media-a-media32-forward.png'
};
let heartDonebtn = {
  uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/31857-img-icons_accountable.png'
};
let intro2 = {
  uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/Group2@3x.png'
};

let introHeart = { uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/tut_2_image@3x.png' };

let intro3 = { uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/Group3@3x.png' };

let introHeart3 = { uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/Group3Intro@3x.png' };

class Walkthrough extends React.Component {
  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }
  static navigationOptions = {
    title: 'CrushFound',
    header: false
  };
  _onDone = () => {
    // User finished the introduction. Show "real" app
  };

  _slide1() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ECF0F1', justifyContent: 'center' }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text
            style={{
              color: '#FA8072',
              marginTop: 30,
              textAlign: 'center',
              fontSize: 30,
              fontFamily: 'Norican-Regular'
            }}
          >
            Find My{'\n'} Crush
          </Text>
        </View>

        <View style={{ flex: 5, alignItems: 'flex-end', marginRight: 15 }}>
          <ImageBackground source={intro1} style={{ height: 447, width: 322, marginTop: 10, borderRadius: 10 }}>
            <View
              style={{
                flex: 2.5,
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 15,
                marginTop: 15
              }}
            >
              <Image source={introFb} style={{ height: 72, width: 72 }} />
            </View>
            <View style={{ flex: 3, backgroundColor: 'transparent', marginRight: 15 }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 40,
                  color: 'white',
                  fontFamily: 'Norican-Regular',
                  lineHeight: 45
                }}
              >
                Find My{'\n'} Crush
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 15,
                  color: 'white',
                  fontFamily: 'NunitoSans-Bold',
                  marginTop: 10,
                  lineHeight: 16
                }}
              >
                {'\n'}Log In to the app with your{'\n'}facebook account.
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }

  _slide2() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ECF0F1', justifyContent: 'center' }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text
            style={{
              color: '#FA8072',
              marginTop: 30,
              textAlign: 'center',
              fontSize: 30,
              fontFamily: 'Norican-Regular'
            }}
          >
            Find My{'\n'} Crush
          </Text>
        </View>

        <View style={{ flex: 5, alignItems: 'flex-end', marginRight: 15 }}>
          <ImageBackground source={intro2} style={{ height: 447, width: 332, marginTop: 10, borderRadius: 10 }}>
            <View
              style={{
                flex: 2.5,
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 40
              }}
            >
              <Image source={introHeart} style={{ height: 150, width: 150 }} />
            </View>
            <View style={{ flex: 3.5, backgroundColor: 'transparent' }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 40,
                  color: 'white',
                  fontFamily: 'Norican-Regular',
                  lineHeight: 45,
                  marginTop: 10
                }}
              >
                Show your{'\n'} Love
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 15,
                  color: 'white',
                  fontFamily: 'NunitoSans-Bold',
                  lineHeight: 16,
                  marginTop: 10
                }}
              >
                Mark your Facebook friend as{'\n'}your crush.{'\n'} Don{"'"}t worry we won{"'"}t let them{'\n'} know
                this unless they mark you{'\n'}back as your crush.
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }

  _slide3() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ECF0F1', justifyContent: 'center' }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text
            style={{
              color: '#FA8072',
              marginTop: 30,
              textAlign: 'center',
              fontSize: 30,
              fontFamily: 'Norican-Regular'
            }}
          >
            Find My{'\n'} Crush
          </Text>
        </View>

        <View style={{ flex: 5, alignItems: 'flex-end', marginRight: 30 }}>
          <ImageBackground source={intro3} style={{ height: 447, width: 326, marginTop: 10, borderRadius: 10 }}>
            <View
              style={{
                flex: 2.5,
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 15,
                marginTop: 15
              }}
            >
              <Image source={introHeart3} style={{ height: 150, width: 150, marginTop: 25 }} />
            </View>
            <View style={{ flex: 3, backgroundColor: 'transparent', marginLeft: 15 }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 40,
                  color: 'white',
                  fontFamily: 'Norican-Regular',
                  lineHeight: 45,
                  marginTop: 10
                }}
              >
                It{"'"}s a {'\n'} Match !!
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 15,
                  color: 'white',
                  fontFamily: 'NunitoSans-Bold',
                  marginTop: 10,
                  lineHeight: 16
                }}
              >
                We will let you know if your friend{'\n'}has also marked you as your{'\n'} crush.
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Image source={heartNxtbtn} style={{ height: 40, width: 40 }} />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Image source={heartDonebtn} style={{ height: 35, width: 35 }} />
      </View>
    );
  };
  _renderItem(item, index) {
    if (item.key == '1') {
      return this._slide1();
    } else if (item.key == '2') {
      return this._slide2();
    } else if (item.key == '3') {
      return this._slide3();
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <AppIntroSlider
        slides={slides}
        onDone={() => navigate('Home')}
        renderItem={this._renderItem}
        renderNextButton={this._renderNextButton}
        renderDoneButton={this._renderDoneButton}
      />
    );
  }
}

///WalkthroughEnds HERE

//Navigation screens paths...
//Home,MarkingCrush and other pagess...

const NavigationApp = StackNavigator(
  {
    WalkthroughScreen: { screen: Walkthrough },
    Home: { screen: HomeScreen },
    MarkingCrush: { screen: MarkCrushes },
    Profile: { screen: MainUserProfile },
    CrushMatches: { screen: CrushMatchInfo }
  },
  {
    headerMode: 'screen'
  }
);

export default class App extends Component {
  render() {
    return <NavigationApp />;
  }
}
