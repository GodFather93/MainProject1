/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, TouchableOpacity, StyleSheet, Text, View, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
const FBSDK = require('react-native-fbsdk');
const { LoginManager } = FBSDK;

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
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/FbBtn 2@3x.png'
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
              paddingTop: 20
            }}
          >
            Welcome To{'\n '}
            <Text
              style={{
                textAlign: 'center',
                backgroundColor: 'transparent',
                fontSize: 35,
                color: '#FCFCFC'
              }}
            >
              Find My Crush
            </Text>
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={this._fbAuth}>
            <Image source={fbBtnMain} style={{ height: 50, width: 265, marginTop: 0 }} />
          </TouchableOpacity>

          <Animatable.Text
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            style={{ textAlign: 'center', marginTop: 25, backgroundColor: 'transparent', color: '#FCFCFC' }}
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
              fontSize: 30
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
              paddingTop: 5
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
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/LogOut_Profile@3x.png'
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
    return (
      <View style={{ flex: 1 }}>
        <Image source={bgImag} style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }} />

        <View style={{ flex: 2, alignItems: 'center' }}>
          <Image source={ProfilePic} style={{ height: 160, width: 160, marginTop: 50 }} />
          <Text style={{ backgroundColor: 'transparent', fontSize: 20, color: '#FCFCFC', textAlign: 'center' }}>
            kevin Warren
          </Text>
          <Animatable.Text
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            style={{
              textAlign: 'center',
              fontSize: 20,
              marginTop: 15,
              backgroundColor: 'transparent',
              color: '#FCFCFC'
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
          <Text style={{ fontSize: 15, backgroundColor: 'transparent', color: '#FCFCFC', textAlign: 'center' }}>
            Credits In Account {'\n'}
          </Text>
          <Text style={{ fontSize: 20, backgroundColor: 'transparent', color: '#FCFCFC', textAlign: 'center' }}>
            30
          </Text>

          <TouchableOpacity onPress={this.onPress}>
            <Animatable.Text
              animation="rubberBand"
              easing="ease-out"
              iterationCount="infinite"
              style={{
                fontSize: 25,
                textAlign: 'center',
                marginTop: 10,
                backgroundColor: 'transparent',
                color: '#FCFCFC'
              }}
            >
              Buy More
            </Animatable.Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1 }} />
          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigate('Home')}>
              <Image source={logOutBtn} style={{ height: 48, width: 96 }} />
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
          <Text style={{ textAlign: 'center', backgroundColor: 'transparent', color: '#FCFCFC', marginTop: 30 }}>
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
                marginBottom: 10
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

const NavigationApp = StackNavigator(
  {
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
