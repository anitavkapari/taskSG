import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity, ScrollView, StyleSheet, ToastAndroid, Platform } from 'react-native';

import FoundationService from '../../../service/FoundationService.js'
import PrefixForm from '../../../form/foundation/PrefixForm.js'

export default class VerificationAdmin extends Component {
    constructor(props)
    {
    super(props);

    this.state = 
    {
    date: ''
       }
    }

componentDidMount()
    {
         var that = this;
var hours = new Date().getHours(); //Current Hours
var min = new Date().getMinutes(); //Current Minutes
that.setState({
//Setting the value of the date time
date:
hours + ':' + min ,
});
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Founadation/Verification of Registration Admin</Text>
                <ScrollView>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-around', marginTop: 10
                    }}>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={{ fontWeight: 'bold' }}>Request</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={{ fontWeight: 'bold' }}>Verified</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-around', marginTop: 10
                    }}>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={{ fontWeight: 'bold' }}>Today</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={{ fontWeight: 'bold' }}>Yesterday</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={{ fontWeight: 'bold' }}>Calender</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'column', marginTop: 10,padding:10,backfaceVisibility:'visible',backgroundColor:'#ccffe6'}}>
                    <Text style={{ fontWeight: 'bold',marginLeft:120 }}>{this.state.date}</Text>
                    <Text style={{ fontWeight: 'bold' }}>adad1111</Text>
                    <Text style={{ fontWeight: 'bold' }}>Name of Founadation</Text>
                    <Text style={{ fontWeight: 'bold' }}>Mobile no.999999999</Text>
                    </View>
                   
                    <View style={{flexDirection: 'column', marginTop: 10,padding:10,backfaceVisibility:'visible',backgroundColor:'#ccffe6'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 5}}>
                    <Text style={{ fontWeight: 'bold' }}>adad1111</Text>
                    <TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', }}>View</Text>
                    </TouchableOpacity>
                    </View>
                    <Text style={{ fontWeight: 'bold' }}>Name of Admin</Text>
                    <Text style={{ fontWeight: 'bold' }}>Current Address</Text>
                    </View>

                </ScrollView>
            </View>

        );
    }



}

const styles = StyleSheet.create(
    {
        welcome: {
            fontSize: 20,
            borderColor: '#ffffff',
            color: 'black', marginLeft: 10,
            borderWidth: 1.0,
            width: 300,
            backgroundColor: '#e6ac00', marginLeft: 30,
            textAlign: 'center', marginBottom: 30,
            height: 60, marginTop: 10,
        },
        buttonContainer: {
            height: 40,
            backgroundColor: "#ffbf00",
            borderWidth: 1.0, width: 100,
            borderColor: '#cc6600',
            borderRadius: 5,
            color: 'black', justifyContent: 'center',
            alignItems: 'center', fontWeight: 'bold', fontSize: 14, padding: 10
        },
        container:
        {
            flex: 1,
            backgroundColor: '#99ffff',
            paddingTop: (Platform.OS === 'ios') ? 20 : 0
        },

    });
