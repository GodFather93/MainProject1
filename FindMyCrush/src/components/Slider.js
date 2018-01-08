import React, { Component } from 'react';
import { Platform, TouchableOpacity, StyleSheet, Text, View, Image, AppRegistry, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
const FBSDK = require('react-native-fbsdk');
const { LoginManager, AccessToken, GraphRequest, GraphRequestManager } = FBSDK;
import AppIntroSlider from 'react-native-app-intro-slider';

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
      <View style={{ flex: 1, height: '100%', width: '100%', backgroundColor: '#ECF0F1' }}>
        <View style={{ height: '18%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <Text
            style={{
              color: '#FA8072',

              textAlign: 'justify',
              fontSize: 30,
              fontFamily: 'Norican-Regular',
              paddingTop: 15
            }}
          >
            Find My{'\n'} Crush
          </Text>
        </View>

        <View
          style={{
            height: '72%',

            alignItems: 'center',

            overflow: 'hidden'
          }}
        >
          <ImageBackground
            source={intro1}
            style={{ height: '100%', width: '100%', borderRadius: 10 }}
            resizeMode={'contain'}
          >
            <View
              style={{
                height: '40%',
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 15,
                marginTop: 15
              }}
            >
              <Image source={introFb} style={{ height: 72, width: 72 }} />
            </View>
            <View style={{ height: '60%', backgroundColor: 'transparent', marginRight: 15 }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 40,
                  color: 'white',
                  fontFamily: 'Norican-Regular',
                  lineHeight: 45,
                  marginTop: 15
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
      <View style={{ flex: 1, height: '100%', width: '100%', backgroundColor: '#ECF0F1' }}>
        <View style={{ height: '18%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <Text
            style={{
              color: '#FA8072',

              textAlign: 'justify',
              fontSize: 30,
              fontFamily: 'Norican-Regular',
              paddingTop: 15
            }}
          >
            Find My{'\n'} Crush
          </Text>
        </View>

        <View
          style={{
            height: '72%',

            alignItems: 'center',

            overflow: 'hidden'
          }}
        >
          <ImageBackground
            source={intro2}
            style={{ height: '100%', width: '100%', borderRadius: 10 }}
            resizeMode={'contain'}
          >
            <View
              style={{
                height: '40%',
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 35
              }}
            >
              <Image source={introHeart} style={{ height: 150, width: 150 }} />
            </View>
            <View style={{ height: '60%', backgroundColor: 'transparent' }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 40,
                  color: 'white',
                  fontFamily: 'Norican-Regular',
                  lineHeight: 45
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
      <View style={{ flex: 1, height: '100%', width: '100%', backgroundColor: '#ECF0F1' }}>
        <View style={{ height: '18%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <Text
            style={{
              color: '#FA8072',

              textAlign: 'justify',
              fontSize: 30,
              fontFamily: 'Norican-Regular',
              paddingTop: 15
            }}
          >
            Find My{'\n'} Crush
          </Text>
        </View>

        <View
          style={{
            height: '72%',

            alignItems: 'center',

            overflow: 'hidden'
          }}
        >
          <ImageBackground
            source={intro3}
            style={{ height: '100%', width: '100%', borderRadius: 10 }}
            resizeMode={'contain'}
          >
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
export default Walkthrough;
///WalkthroughEnds HERE
