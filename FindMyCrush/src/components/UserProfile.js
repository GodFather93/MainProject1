// This is UserProfile Settings etc..!
import React, { Component } from 'react';
import { Platform, TouchableOpacity, StyleSheet, Text, View, Image, AppRegistry, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
const FBSDK = require('react-native-fbsdk');
const { LoginManager, AccessToken, GraphRequest, GraphRequestManager } = FBSDK;

class MainUserProfile extends React.Component {
  static navigationOptions = {
    title: 'MainProfile',
    header: false
  };

  //Create response callback.
  _responseInfoCallback = (error, result) => {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      this.setState({ name: result.name, pic: result.picture.data.url });
    }
  };

  componentWillMount() {
    // Create a graph request asking for user information with a callback to handle the response.

    const infoRequest = new GraphRequest(
      '/me?fields=name,picture.width(150).height(150)',
      null,
      this._responseInfoCallback
    );
    // Start the graph request.

    new GraphRequestManager().addRequest(infoRequest).start();
  }

  constructor() {
    super();
    this.state = {
      name: '',
      pic: ''
    };
  }

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
      uri: this.state.pic
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

        <View style={{ flex: 3, alignItems: 'center' }}>
          <View style={{ flex: 2, paddingTop: 25, overflow: 'hidden' }}>
            <Image
              source={ProfilePic}
              style={{
                height: 150,
                width: 150,
                margin: 20
              }}
              resizeMode={'contain'}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                backgroundColor: 'transparent',
                fontSize: 20,
                color: '#FCFCFC',
                textAlign: 'center',
                fontFamily: 'NunitoSans-Bold',
                marginTop: 5
              }}
            >
              {this.state.name}
            </Text>
            <Animatable.Text
              animation="pulse"
              easing="ease-out"
              iterationCount="infinite"
              style={{
                textAlign: 'center',
                fontSize: 15,
                marginTop: 10,
                backgroundColor: 'transparent',
                color: '#FCFCFC',
                fontFamily: 'NunitoSans-Bold'
              }}
            >
              INTERESTED IN
            </Animatable.Text>
          </View>
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
        </View>
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

export default MainUserProfile;
