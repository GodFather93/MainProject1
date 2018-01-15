//MarkCrushesh UI Starts from here -->
import React, { Component } from 'react';
import { Platform, TouchableOpacity, StyleSheet, Text, View, Image, AppRegistry, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
const FBSDK = require('react-native-fbsdk');
const { LoginManager, AccessToken, GraphRequest, GraphRequestManager } = FBSDK;
import { connect } from 'react-redux';
import * as actions from '../actions/actDataSize';

class MarkCrushes extends React.Component {
  static navigationOptions = {
    title: 'MarkCrush',
    header: false
  };

  constructor(props) {
    super(props);
    this.props.setDataSize(0);

    this.state = {
      name: '',
      pic: '',
      count: '',
      dataSize: ''
    };
  }
  _responseInfoCallback = (error, result) => {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      const fbData = result.data;
      let size = fbData.length;
      this.props.setDataSize(size);
      let index = 0;
      if (this.props.theSize > this.props.theIndex) {
        let counter = fbData[this.props.theIndex];

        let fname = counter.name;

        let fimage = counter.picture.data.url;

        this.setState({ name: fname, pic: fimage, count: this.props.theIndex, dataSize: size });
      } else {
        this.setState({ count: this.props.theIndex });
      }
    }
  };

  _Yup = () => {
    const infoRequest = new GraphRequest(
      '/me/friends?fields=name,picture.height(250).width(250)',
      null,
      (_responseCallback = (error, result) => {
        if (error) {
          alert('Error fetching data: ' + error.toString());
        } else {
          const fbData = result.data;
          let index = this.props.theIndex + 1;
          this.props.setCounterSize(index);
          this.props.Yupp(5);
          if (this.props.theSize > this.props.theIndex) {
            let counter = fbData[this.props.theIndex];
            let fname = counter.name;
            let fimage = counter.picture.data.url;

            this.setState({ name: fname, pic: fimage, count: this.props.theIndex });
          } else {
            this.setState({ count: this.props.theIndex });
          }
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
      (_responseCallback = (error, result) => {
        if (error) {
          alert('Error fetching data: ' + error.toString());
        } else {
          const fbData = result.data;
          let index = this.props.theIndex + 1;
          this.props.setCounterSize(index);
          if (this.props.theSize > this.props.theIndex) {
            let counter = fbData[this.props.theIndex];
            let fname = counter.name;
            let fimage = counter.picture.data.url;

            this.setState({ name: fname, pic: fimage, count: this.props.theIndex });
          } else {
            this.setState({ count: this.props.theIndex });
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

  _renderProfile() {
    while (this.props.theSize >= this.props.theIndex) {
      if (this.props.theSize <= this.props.theIndex) {
        {
          return (
            <View style={{ flex: 3, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Text
                style={{
                  backgroundColor: 'transparent',
                  fontSize: 20,
                  color: '#FCFCFC',
                  textAlign: 'center',
                  fontFamily: 'NunitoSans-Bold'
                }}
              >
                No More Profiles
              </Text>

              <TouchableOpacity onPress={this._onPressButton}>
                <Animatable.Text
                  animation="pulse"
                  easing="ease-out"
                  iterationCount="infinite"
                  style={{
                    textAlign: 'center',
                    fontSize: 15,
                    marginTop: 25,
                    backgroundColor: 'transparent',
                    color: '#FCFCFC',
                    fontFamily: 'NunitoSans-Bold',
                    borderRadius: 9,
                    borderColor: 'white',
                    borderWidth: 0.5,
                    padding: 5
                  }}
                >
                  Want Free Credits?
                </Animatable.Text>
              </TouchableOpacity>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 15,
                  marginTop: 10,
                  backgroundColor: 'transparent',
                  color: '#FCFCFC',
                  fontFamily: 'NunitoSans-Bold'
                }}
              >
                Invite Your friends by clicking the above button {'\n'} & Earn free credits !!
              </Text>
            </View>
          );
        }
      } else {
        return (
          <View style={{ flex: 3, alignItems: 'center' }}>
            <View Style={{ flex: 3, justifyContent: 'flex-end', overflow: 'hidden' }}>
              <Image
                source={{ uri: this.state.pic }}
                style={{
                  flex: 0.85,
                  height: 310,
                  width: 353,
                  marginTop: 20,
                  borderRadius: 8
                }}
                resizeMode={'contain'}
              />
              <Text
                style={{
                  flex: 0.25,
                  textAlign: 'center',
                  backgroundColor: 'transparent',
                  fontSize: 20,
                  color: '#FCFCFC',
                  marginTop: 10,
                  fontFamily: 'NunitoSans-Bold'
                }}
              >
                {this.state.name}
              </Text>
            </View>
          </View>
        );
      }
    }
  }

  _DisableBtnNope() {
    while (this.props.theSize >= this.props.theIndex) {
      if (this.props.theSize <= this.props.theIndex) {
        {
          return <View style={{ width: '25%', alignItems: 'flex-start' }} />;
        }
      } else {
        return (
          <View style={{ width: '25%', alignItems: 'flex-start' }}>
            <TouchableOpacity onPress={this._Nope}>
              <Image
                source={{ uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/heart_break@3x.png' }}
                style={{ height: 63, width: 70 }}
              />
            </TouchableOpacity>
          </View>
        );
      }
    }
  }
  _DisableBtnYup() {
    while (this.props.theSize >= this.props.theIndex) {
      if (this.props.theSize <= this.props.theIndex) {
        {
          return <View style={{ width: '25%', alignItems: 'flex-start' }} />;
        }
      } else {
        return (
          <View style={{ width: '25%', alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={this._Yup}>
              <Animatable.Image
                animation="pulse"
                easing="ease-in-out-expo"
                iterationCount="infinite"
                source={{ uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/heart_Basdasddnal@3x.png' }}
                style={{ height: 70, width: 70, marginTop: -5 }}
              />
            </TouchableOpacity>
          </View>
        );
      }
    }
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

    let Crushes = {
      uri: '/Users/melliferalabs/Desktop/project/FindMyCrush/src/images/Crushes@3x.png'
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

        {this._renderProfile()}

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ width: '25%', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
            <TouchableOpacity onPress={() => navigate('Profile')}>
              <Image source={Myprofile} style={{ height: 80, width: 80 }} />
            </TouchableOpacity>
          </View>
          {this._DisableBtnNope()}
          {this._DisableBtnYup()}
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

const mapStateToProps = state => {
  return {
    theCounter: state.CreditCount,
    theSize: state.SizeOfData,
    theIndex: state.IndexCounter
  };
};
//MarkCrushes Ends here.. <--
export default connect(mapStateToProps, actions)(MarkCrushes);
