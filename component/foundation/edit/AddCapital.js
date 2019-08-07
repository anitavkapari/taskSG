import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity, ScrollView, StyleSheet, ToastAndroid, Platform } from 'react-native';

import FoundationService from '../../../service/FoundationService.js'
import PrefixForm from '../../../form/foundation/PrefixForm.js'

class RadioButton extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onClick} activeOpacity={0.8} style={styles.radioButton}>
                <View style={[styles.radioButtonHolder, { height: this.props.button.size, width: this.props.button.size, borderColor: this.props.button.color }]}>
                    {
                        (this.props.button.selected)
                            ?
                            (<View style={[styles.radioIcon, { height: this.props.button.size / 2, width: this.props.button.size / 2, backgroundColor: this.props.button.color }]}></View>)
                            :
                            null
                    }
                </View>
                <Text style={[styles.label, { color: this.props.button.color }]}>{this.props.button.label}</Text>
            </TouchableOpacity>
        );
    }
}

export default class AddCapital extends Component<{}>
{
    constructor(props) {
        super(props);

        this.state = {
            role: 'Foundation'
            , shortName: ''
            , radioItems:
                [
                    {
                        label: 'For Foundation',
                        size: 20,
                        color: '#636c72',
                        selected: false
                    },

                    {
                        label: 'For Admin',
                        color: '#636c72',
                        size: 20,
                        selected: true,
                    },


                ], category: 1,
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

    componentDidMount() {
        this.state.radioItems.map((item) => {
            if (item.selected == true) {
                //this.setState({ selectedItem: item.label });
            }
        });
    }

    setShortName(name) {
        this.setState({ shortName: name });
    }

    changeActiveRadioButton(index) {
        this.state.radioItems.map((item) => {
            item.selected = false;
        });

        this.state.radioItems[index].selected = true;

        this.setState({ radioItems: this.state.radioItems }, () => {
            this.setState({ category: (index == 0 ? 2 : 1) });
        });
    }

    render() {
        return (
            <View style={styles.container1}>
                <Text style={styles.welcome1}>Founadation/Add Capital</Text>
                <ScrollView>

                    <View style={styles.container}>
                        {
                            this.state.radioItems.map((item, key) =>
                                (
                                    <RadioButton key={key} button={item} onClick={this.changeActiveRadioButton.bind(this, key)} />
                                ))
                        }


                    </View>
                    <View>
                        {
                            this.state.names.map((item, index) => (
                                <TouchableOpacity
                                    key={item.id}
                                    style={styles.container2}
                                    onPress={() => this.alertItemName(item)}>
                                    <Text style={styles.text}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            ))
                        }
                        <TextInput style={styles.inputtxt} placeholder='New capital..'
                            maxLength={4} size="4"
                            onChangeText={shortName => this.setShortName(shortName)} />

                    </View>
                    <TouchableOpacity style={styles.buttonContainer}
                        onPress={this.save}><Text style={{ fontWeight: 'bold', color: '#ffffff' }}>Next</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

        );
    }

    save = () => {
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

const styles = StyleSheet.create(
    {
        container:
        {
            flexDirection: 'row',
            marginLeft: 10, justifyContent: 'space-between'
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
            color: 'black'
        },
        welcome1: {
            fontSize: 20,
            borderColor: '#ffffff',
            color: 'black', marginLeft: 10,
            borderWidth: 1.0, width: 300,
            backgroundColor: '#e6ac00', marginLeft: 30,
            textAlign: 'center', marginBottom: 30,
            height: 40, marginTop: 40,
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
