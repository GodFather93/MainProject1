//MarkCrushesh UI Starts from here -->
import React, { Component } from 'react';
import { Platform, TouchableOpacity, StyleSheet, Text, View, Image, AppRegistry, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
const FBSDK = require('react-native-fbsdk');
const { LoginManager, AccessToken, GraphRequest, GraphRequestManager } = FBSDK;

class MarkCrushes extends React.Component {
  static navigationOptions = {
    title: 'MarkCrush',
    header: false
  };
  //Create response callback.
  _responseInfoCallback = (error, result) => {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      const fbData = result.data;
      let size = fbData.length;
      let index = 0;
      let counter = fbData[index];
      let fname = counter.name;
      let fimage = counter.picture.data.url;

      this.setState({ name: fname, pic: fimage, count: index, dataSize: size });
    }
  };

  _Yup = () => {
    const infoRequest = new GraphRequest(
      '/me/friends?fields=name,picture.height(250).width(250)',
      null,
      (_responseInfoCallback = (error, result) => {
        if (error) {
          alert('Error fetching data: ' + error.toString());
        } else {
          const fbData = result.data;
          let index = this.state.count + 1;

          let counter = fbData[index];
          let fname = counter.name;
          let fimage = counter.picture.data.url;

          this.setState({ name: fname, pic: fimage, count: index });
        }
      })
    );
    // Start the graph request.

    new GraphRequestManager().addRequest(infoRequest).start();
  };
  _Nope = () => {
    const infoRequest = new GraphRequest(
      '/me/friends?fields=name,picture.height(250).width(250)',
      null,
      (_responseInfoCallback = (error, result) => {
        if (error) {
          alert('Error fetching data: ' + error.toString());
        } else {
          const fbData = result.data;
          let index = this.state.count + 1;
          if (fbData.length > index) {
            let counter = fbData[index];
            let fname = counter.name;
            let fimage = counter.picture.data.url;

            this.setState({ name: fname, pic: fimage, count: index });
          }
        }
      })
    );
    // Start the graph request.

    new GraphRequestManager().addRequest(infoRequest).start();
  };

  componentWillMount() {
    // Create a graph request asking for user information with a callback to handle the response.

    const infoRequest = new GraphRequest(
      '/me/friends?fields=name,picture.height(250).width(250)',
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
      pic: '',
      count: '',
      dataSize: ''
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    let bgImag = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/Rectangle@3x.png'
    };

    let profiles = {
      uri: this.state.pic
    };

    let Myprofile = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/ProfileMain@3x.png'
    };

    let HeartBtn = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/heart_Basdasddnal@3x.png'
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
        <View Style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
          <Animatable.Text
            animation="bounceIn"
            iterationCount={1}
            delay={350}
            style={{
              textAlign: 'center',
              backgroundColor: 'transparent',
              color: '#FCFCFC',
              paddingTop: 35,
              fontSize: 30,
              fontFamily: 'Norican-Regular',
              lineHeight: 32
            }}
          >
            Find My {'\n'} Crush
          </Animatable.Text>
        </View>

        <View style={{ flex: 3, flexDirection: 'column', alignItems: 'center' }}>
          <View Style={{ flex: 2.5, justifyContent: 'flex-end', overflow: 'hidden' }}>
            <Image
              source={profiles}
              style={{
                flex: 0.85,
                height: 310,
                width: 353,
                marginTop: 20,
                borderRadius: 8
              }}
              resizeMode={'contain'}
            />
          </View>
          <View Style={{ flex: 0.5, justifyContent: 'flex-start' }}>
            <Text
              style={{
                flex: 0.25,
                textAlign: 'center',
                backgroundColor: 'transparent',
                fontSize: 20,
                color: '#FCFCFC',

                fontFamily: 'NunitoSans-Bold'
              }}
            >
              {this.state.name}
            </Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ width: '25%', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
            <TouchableOpacity onPress={() => navigate('Profile')}>
              <Image source={Myprofile} style={{ height: 80, width: 80 }} />
            </TouchableOpacity>
          </View>
          <View style={{ width: '25%', alignItems: 'flex-start' }}>
            <TouchableOpacity onPress={this._Nope}>
              <Image source={SkipCrushes} style={{ height: 63, width: 70 }} />
            </TouchableOpacity>
          </View>
          <View style={{ width: '25%', alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={this._Yup}>
              <Animatable.Image
                animation="pulse"
                easing="ease-in-out-expo"
                iterationCount="infinite"
                source={HeartBtn}
                style={{ height: 70, width: 70, marginTop: -5 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ width: '25%', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
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
export default MarkCrushes;
