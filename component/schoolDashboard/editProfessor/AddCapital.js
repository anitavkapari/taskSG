import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
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

                <Text style={style.welcome1}>Professor/Employee/Add Capital</Text>
                <Text style={style.txt}>For Professor</Text>


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
                    maxLength={4} size="4"
                    onChangeText={shortName => this.setShortName(shortName)}
                />

                <TouchableOpacity style={style.buttonContainer}>
                    <Text style={{ fontWeight: 'bold', color: '#ffffff' }}
                        onPress={() => this.save()}>
                        Save</Text>
                </TouchableOpacity>
            </View>

        );
    }

    save() {
        this.props.controller({
            isFoundation: true
            , shortName: this.state.shortName
        });
    }
}

const style = StyleSheet.create(
    {
        txt:
        {
            height: 30, width: 100, padding: 5, marginLeft: 120, marginTop: 10,
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
            backgroundColor: "#ffbf00",
            borderWidth: 1.0, width: 120,
            borderColor: 'black',
            borderRadius: 5, marginLeft: 120, marginTop: 50,
            color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 14, padding: 5
        },
        container1:
        {
            flex: 1,
            backgroundColor: '#99ffff',
            paddingTop: (Platform.OS === 'ios') ? 20 : 0
        },
    });
