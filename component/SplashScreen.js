/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import {Platform,ImageBackground, StyleSheet, StatusBar, ProgressBarAndroid, Text, View} from 'react-native';

import Login from './Login.js';
import Registration from './Registration.js';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class SplashScreen extends Component<Props> {
static navigationOptions = {
	header: null
}
	componentDidMount()
		{
			setTimeout(() => this.props.navigation.navigate('Login'),2000);
		}

  render() {
    return (
		<View style={styles.container}>  
			<Text>Welcome</Text>
			<StatusBar
	backgroundColor="lightblue"
	/>
	        </View>

    );
  }
}

const mainNavigator = createStackNavigator
	({
		Splash:
		{
		screen:SplashScreen
		},
		Registration:
		{
		screen:Registration
		},
		Login: 
		{
		screen: Login
		}
		,
		

	});
const app = createAppContainer( mainNavigator );
export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'lightblue',
  },
  
});
