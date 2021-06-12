import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FaceBook from './Screens/fb';
import Instagram from './Screens/in';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    )
  }
}
const TabNavigator=createBottomTabNavigator({
  Facebook:{screen:FaceBook},
  Instagram:{screen:Instagram},
})

const AppContainer=createAppContainer(TabNavigator);
