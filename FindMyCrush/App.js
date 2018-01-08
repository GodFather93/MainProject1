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

const { LoginManager, AccessToken, GraphRequest, GraphRequestManager } = FBSDK;

import AppIntroSlider from 'react-native-app-intro-slider';

import HomeScreen from './src/components/Home.js';

import MarkCrushes from './src/components/MarkProfiles.js';

import CrushMatchInfo from './src/components/Match.js';

import MainUserProfile from './src/components/UserProfile.js';

import Walkthrough from './src/components/Slider.js';

import DummyCrush from './src/components/DummyViewMark.js';
//HOMESCREEN MAIN LOGIN PAGE ->>

//random comment

const NavigationApp = StackNavigator(
  {
    WalkthroughScreen: { screen: Walkthrough },
    Home: { screen: HomeScreen },
    MarkingCrush: { screen: MarkCrushes },
    Profile: { screen: MainUserProfile },
    CrushMatches: { screen: CrushMatchInfo },
    DummyCrushView: { screen: DummyCrush }
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
