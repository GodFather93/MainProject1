import React, { Component } from 'react';
import { Platform, TouchableOpacity, StyleSheet, Text, View, Image, AppRegistry, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
const FBSDK = require('react-native-fbsdk');
const { LoginManager, AccessToken, GraphRequest, GraphRequestManager } = FBSDK;

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

export default CrushMatchInfo;
