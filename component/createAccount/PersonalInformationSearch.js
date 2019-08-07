import React, { Component } from 'react';
import {
    Platform,
    StyleSheet, Text, View, ScrollView, TextInput, Image, ImageBackground,
    TouchableOpacity, ActivityIndicator, Picker, CheckBox
} from 'react-native';
class RadioButton extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.onClick} activeOpacity={0.8} style={style.radioButton}>
                <View style={[style.radioButtonHolder, { height: this.props.button.size, width: this.props.button.size, borderColor: this.props.button.color }]}>
                    {
                        (this.props.button.selected)
                            ?
                            (<View style={[style.radioIcon, { height: this.props.button.size / 2, width: this.props.button.size / 2, backgroundColor: this.props.button.color }]}></View>)
                            :
                            null
                    }
                </View>
                <Text style={[style.label, { color: this.props.button.color }]}>{this.props.button.label}</Text>
            </TouchableOpacity>
        );
    }
}

export default class PersonalInformationSearch extends Component {

    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            // userID:this.props.navigation.state.params.NameOBJ,	 
            EfName: '',
            EmNmae: '',
            ElNmae: '',
            MfName: '',
            MmNmae: '',
            MlNmae: '',
            Id: '',
            checked: false,
            radioItems:
                [

                    {
                        label: 'Male',
                        size: 20,
                        color: '#636c72',
                        selected: false
                    },

                    {
                        label: 'Female',
                        color: '#636c72',
                        size: 20,
                        selected: true,
                    },


                ],
        }
    }
    componentDidMount() {
        this.state.radioItems.map((item) => {
            if (item.selected == true) {
                this.setState({ selectedItem: item.label });
            }
        });
    }
    changeActiveRadioButton(index) {
        this.state.radioItems.map((item) => {
            item.selected = false;
        });

        this.state.radioItems[index].selected = true;

        this.setState({ radioItems: this.state.radioItems }, () => {
            this.setState({ selectedItem: this.state.radioItems[index].label });
        });
    }
    render() {
        return (
            <ImageBackground source={require('../../component/image/loginimage.jpg')} style={style.container}>

                <Text style={style.welcome1}>Personal Information</Text>

                <View style={{ alignItems: 'flex-end' }}>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <CheckBox style={{ width: 40, height: 40 }} value={this.state.checked} onValueChange={() =>
                            this.setState({ checked: !this.state.checked })} />

                        <Image style={{ width: 40, height: 50 }}
                            source={require('../../component/image/backup.png')} />
                    </View>
                </View>
                <ScrollView>

                    <Text style={style.label1}>Gender</Text>

                    <View style={style.row}>
                        {

                            this.state.radioItems.map((item, key) =>
                                (

                                    <RadioButton key={key} button={item} onClick={this.changeActiveRadioButton.bind(this, key)} />
                                ))
                        }
                    </View>
                    <Text style={style.label1}>Full Name (English)</Text>
                    <View style={style.row}>
                        <TextInput style={[style.inputtxt, style.inputtxt1]}
                            onChangeText={EfName => this.setState({ EfName })}
                            placeholder="First Name"
                        />
                        <TextInput style={[style.inputtxt, style.inputtxt1]}
                            onChangeText={EmName => this.setState({ EmName })}
                            placeholder="Middle Name"
                        />
                        <TextInput style={[style.inputtxt, style.inputtxt1]}
                            onChangeText={ElName => this.setState({ ElName })}
                            placeholder="Last Name"
                        />
                    </View>

                    <Text style={style.label1}>Name of Admin-MotherTongue</Text>
                    <View style={style.row}>
                        <TextInput style={[style.inputtxt, style.inputtxt1]}
                            onChangeText={MfName => this.setState({ MfName })}
                            placeholder="First Name"
                        />
                        <TextInput style={[style.inputtxt, style.inputtxt1]}
                            onChangeText={MmName => this.setState({ MmName })}
                            placeholder="Middle Name"
                        />
                        <TextInput style={[style.inputtxt, style.inputtxt1]}
                            onChangeText={MlName => this.setState({ MlName })}
                            placeholder="Last Name"
                        />
                    </View>

                    <View style={style.row}>
                        <Text style={style.label1}>
                            If You Know Your id no.</Text>
                        <TextInput style={[style.inputtxt, style.inputtxt1]}
                            onChangeText={Id => this.setState({ Id })}
                            placeholder="Id....."
                        />
                    </View>
                    <TouchableOpacity style={style.buttonContainer}>
                        <Text style={style.text}>Search</Text>
                    </TouchableOpacity>

                    <Text style={style.separator}>Searching.....</Text>
                    <Text style={style.label1}>Searching Result</Text>
                    <Text style={style.label1}>2 name found mach Profile</Text>
                    <View style={{ flexDirection: 'row', borderWidth: 1.0, borderColor: '#ffffff', backgroundColor: 'rgba(255,200,25,.30)', justifyContent: 'space-around' }}>
                        <Text style={style.label1}>asdf</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row', borderWidth: 1.0, marginTop: 10, borderColor: '#ffffff',
                        backgroundColor: 'rgba(255,200,25,.30)', justifyContent: 'space-around'
                    }}>
                        <Text style={style.label1}>asdf</Text>
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        <TouchableOpacity style={style.buttonContainer}
                            onPress={() => this.props.navigation.navigate('PersonalInformationDisplayUpdate')}>
                            <Text style={style.text}>Yes</Text>
                            <Text style={style.text}>There is me</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flexDirection: 'column', borderWidth: 1.0, marginTop: 10, borderColor: '#ffffff',
                        backgroundColor: 'rgba(255,200,25,.30)'
                    }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('PersonNotAvailable')}>
                            <Text style={style.text}>No</Text>
                            <Text style={style.text}>There is not my name</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>

            </ImageBackground>

        );
    }

}
const style = StyleSheet.create({
    container: {
        flex: 1, padding: 10,
        paddingTop: (Platform.OS === 'ios') ? 20 : 0

    },
    text: {
        fontWeight: 'bold', fontSize: 16, color: '#ffffff',
        textAlign: 'center'
    },
    inputtxt: {
        color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 14, backgroundColor: '#ffffff',
        width: 100, height: 40, borderWidth: 1.0, borderColor: '#ffffff',
    },
    label1: { fontWeight: 'bold', fontSize: 15, marginTop: 10, color: 'black' },

    row: {
        flexDirection: 'row', marginTop: 10
    },
    inputtxt1: { marginLeft: 5 },


    buttonContainer: {
        height: 45,
        backgroundColor: 'orange',
        borderWidth: 1.0,
        borderColor: 'black', width: 130,
        borderRadius: 10, marginLeft: 110, marginTop: 50,
    },
    separator: {
        padding: 20,
        marginTop: 25,
        fontSize: 18,
        borderWidth: 1.0,
        fontWeight: 'bold',
        borderColor: '#ffffff',
        color: "black",
        backgroundColor: 'rgba(255,200,25,.30)',
    },

    welcome1: {
        fontSize: 18,
        borderColor: '#ffffff',
        color: '#ffffff', marginTop: 20,
        borderWidth: 1.0, fontWeight: 'bold', width: 200,
        backgroundColor: 'rgba(80,80,110,.170)',
        textAlign: 'center',
        height: 40
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
