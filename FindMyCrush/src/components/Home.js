import React, { Component } from 'react';
import { Platform, TouchableOpacity, StyleSheet, Text, View, Image, AppRegistry, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
const FBSDK = require('react-native-fbsdk');
const { LoginManager, AccessToken, GraphRequest, GraphRequestManager } = FBSDK;

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this._fbAuth = this._fbAuth.bind(this);
  }

  static navigationOptions = {
    title: 'Welcome',
    header: false
  };
  //facebook integration
  _fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile', 'user_friends'])
      .then(result => {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            this.props.navigation.navigate('MarkingCrush');
          });
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
      <View style={{ flex: 1 }}>
        <Image source={bgImag} style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }} />
        <View style={{ height: '46.66666%', justifyContent: 'flex-end', alignItems: 'center', overflow: 'hidden' }}>
          <Animatable.Image
            animation="pulse"
            easing="ease-out"
            iterationCount={4}
            source={theHeart}
            style={{ height: 195, width: 265 }}
          />
        </View>
        <View style={{ height: '20%', justifyContent: 'center', alignItems: 'center' }}>
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
        <View style={{ height: '33.33333%', justifyContent: 'center', alignItems: 'center' }}>
          <View Style={{ height: '15%', paddingRight: 20, paddingLeft: 20 }}>
            <TouchableOpacity onPress={this._fbAuth}>
              <Image source={fbBtnMain} style={{ height: 59, width: 306, borderRadius: 25 }} />
            </TouchableOpacity>
          </View>

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

export default HomeScreen;
