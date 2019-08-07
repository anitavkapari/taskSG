import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity, ToastAndroid, StyleSheet, Platform } from 'react-native';

import FoundationService from '../../../service/FoundationService.js'
import PrefixForm from '../../../form/foundation/PrefixForm.js'

export default class AddCapital extends Component<{}>
{
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);

        this.state = {
            role: 'Foundation'
            , shortName: '',
            selectedItem: '',
            names: [
                {
                    id: 0,
                    name: 'FDIS',
                },
                {
                    id: 1,
                    name: 'FDIS',
                },
                {
                    id: 2,
                    name: 'FDIS',
                },


            ]
        }
        alertItemName = (item) => {
            alert(item.name)
        }
    }
    setShortName(name) {
        this.setState({ shortName: name });
    }
    componentDidMount() {
    }
    render() {
        return (
            <View style={style.container1}>
                <Text style={style.welcome1}>School/Collection/Add Capital</Text>
                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-around' }}>
                    <Text style={style.txt}>For Board</Text>
                    <Text style={style.txt}>For Medium</Text>
                    <Text style={style.txt}>For Standard</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-around' }}>
                    <Text style={style.txt}>For Division</Text>
                    <Text style={style.txt}>For Subject</Text>
                </View>
                <View>
                    {
                        this.state.names.map((item, index) => (
                            <TouchableOpacity
                                key={item.id}
                                style={style.container2}
                                onPress={() => this.alertItemName(item)}>
                                <Text style={style.text}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        ))
                    }
                    <TextInput style={style.inputtxt} placeholder='New capital..'
                        onChangeText={shortName => this.setShortName(shortName)} />



                </View>
                <TouchableOpacity style={style.buttonContainer}>
                    <Text style={{ fontWeight: 'bold' }}
                        onPress={() => this.save()}>
                        Save</Text>
                </TouchableOpacity>

            </View>

        );
    }

    save() {
        const { shortName } = this.state;

        if (shortName == '') {
            ToastAndroid.show('Empty field...please enter Prefix ShortName 4 Letters', ToastAndroid.SHORT);
        }
        else if (shortName.length < 4) {
            ToastAndroid.show('Prefix ShortName be at least  4 Letters', ToastAndroid.SHORT);
        }
        else {
            this.props.controller({

                category: this.state.category

                , shortName: this.state.shortName
            });
        }
    }

}

const style = StyleSheet.create(
    {
        txt:
        {
            height: 30, width: 100, padding: 5,
            borderRadius: 5, color: 'black', backgroundColor: '#e6ac00', textAlign: 'center',

        },
        inputtxt: {
            color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 14,
            backgroundColor: '#ffffff', marginTop: 30, padding: 10,
            height: 40, textAlign: 'center'
        },
        container2: {
            padding: 10,
            marginTop: 5,
            backgroundColor: 'gray',
            alignItems: 'center',
        },
        text: {
            color: 'black',
        },
        welcome1: {
            fontSize: 20,
            borderColor: '#ffffff',
            color: 'black',
            backgroundColor: '#e6ac00',
            textAlign: 'center',
            height: 40, marginTop: 20,
        },
        buttonContainer: {
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "red",
            borderWidth: 1.0, width: 120,
            borderColor: 'black',
            borderRadius: 30, marginLeft: 120, marginTop: 50,
            color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 14, padding: 5
        },
        container1:
        {
            flex: 1,
            backgroundColor: '#99ffff',
            paddingTop: (Platform.OS === 'ios') ? 20 : 0
        },
        radioButton:
        {
            flexDirection: 'row',
            margin: 10,
            alignItems: 'center',
            justifyContent: 'center'
        },

        radioButtonHolder:
        {
            borderRadius: 50,
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center'
        },

        radioIcon:
        {
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center'
        },

        label:
        {
            marginLeft: 10,
            fontSize: 20
        },

        selectedTextHolder:
        {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            padding: 15,
            backgroundColor: 'rgba(0,0,0,0.6)',
            justifyContent: 'center',
            alignItems: 'center'
        },

        selectedText:
        {
            fontSize: 18,
            color: 'white'
        }
    });
