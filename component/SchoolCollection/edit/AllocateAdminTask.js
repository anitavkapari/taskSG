import React, { Component } from 'react';
import {
  Platform,
  StyleSheet, Text, View, ScrollView, TextInput, Image, ImageBackground,
  TouchableOpacity, ActivityIndicator, CheckBox, UIManager, LayoutAnimation
} from 'react-native';
class Expandable_ListView extends Component {

  constructor() {

    super();

    this.state = {
      isSelected: true,
      checked: false,
      layout_Height: 0

    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item.expanded) {
      this.setState(() => {
        return {
          layout_Height: null
        }
      });
    }
    else {
      this.setState(() => {
        return {
          layout_Height: 0
        }
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layout_Height !== nextState.layout_Height) {
      return true;
    }
    return false;
  }
  manageVisibility = (nextProps, nextState) => {
    this.setState({ isSelected: !this.state.isSelected });

  }
  show_Selected_Category = (item) => {

    // Write your code here which you want to execute on sub category selection.
    alert(item);

  }

  render() {
    return (
      <View style={style.Panel_Holder}>

        <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction}
          style={style.category_View}>

          <Text style={style.category_Text}>{this.props.item.category_Name} </Text>
          <TouchableOpacity activeOpacity={0.8}
            style={style.visibilityBtn}
            onPress={this.manageVisibility}>
            <Image source={(this.state.isSelected)
              ? require('../../image/up.png') :
              require('../../image/down.png')} style={style.iconStyle} />
          </TouchableOpacity>

        </TouchableOpacity>

        <View style={{ height: this.state.layout_Height, overflow: 'hidden' }}>

          {
            this.props.item.sub_Category.map((item, key) => (

              <TouchableOpacity key={key} style={style.sub_Category_Text}
                onPress={this.show_Selected_Category.bind(this, item.name)}>
                <View style={style.chechbox}>
                  <Text> {item.name} </Text>

                  <CheckBox style={{ justifyContent: 'flex-end' }} checked={this.state.checked} onCheckBoxPressed={() => this.setState({ checked: !this.state.checked })} />

                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />

              </TouchableOpacity>

            ))
          }

        </View>

      </View>

    );
  }
}
export default class AllocateAdminTask extends Component {
  static navigationOptions = {
    header: null
  }
  componentDidMount() { }

  constructor(props) {
    super(props);
    if (Platform.OS === 'android') {

      UIManager.setLayoutAnimationEnabledExperimental(true)

    }
    const array = [

      {
        expanded: false, category_Name: "Information", sub_Category: [{ id: 1, name: 'School' },
        { id: 2, name: 'Foundation' }, { id: 3, name: 'Pro/Emp' }, { id: 4, name: 'Bus' }
          , { id: 4, name: 'Lab' }, { id: 4, name: 'Hostal' }, { id: 4, name: 'Account' }
          , { id: 4, name: 'Document' }, { id: 4, name: 'Certificate' }]
      }];
    this.state = {
      checked1: true,
      checked2: true,
      AccordionData: [...array],
      toggle: true
    }
  }

  update_Layout = (index) => {

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const array = [...this.state.AccordionData];

    array[index]['expanded'] = !array[index]['expanded'];

    this.setState(() => {
      return {
        AccordionData: array
      }
    });
  }
  render() {
    return (
      <View style={style.container}>
        <Text style={style.welcome1}>Founadation/Allocate Admin Task</Text>
        <ScrollView>

          <View style={{ flexDirection: 'row', marginTop: 10 }} >
            <Text style={style.text}>App Name</Text>
            <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', marginLeft: 50 }}>Id</Text>

          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }} >
            <Text style={style.text}>Admin Name</Text>
            <Text style={style.text}>Id</Text>
            <CheckBox
              value={this.state.checked1}
              onValueChange={() => this.setState({ checked1: !this.state.checked1 })} />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }} >
            <Text style={style.text}>Admin Name</Text>
            <Text style={style.text}>Id</Text>
            <CheckBox
              value={this.state.checked2}
              onValueChange={() => this.setState({ checked2: !this.state.checked2 })} />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }} >
            <Text style={style.text}>Profile</Text>

            <TouchableOpacity onPress={() => this.props.controller(7)}
              style={{
                justifyContent: 'center', backgroundColor: '#e65c00',
                width: 90, height: 40, borderRadius: 5, marginTop: 10
              }}>
              <Text style={{
                justifyContent: 'center', textAlign: 'center', fontWeight: 'bold',
                color: 'black', fontSize: 14
              }}>Task</Text>

            </TouchableOpacity></View>
          <Text style={style.separator}>Quik</Text>
          <Text style={style.separator}>Online</Text>
          <Text style={style.separator}>Professional</Text>

          <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
            {
              this.state.AccordionData.map((item, key) =>
                (
                  <Expandable_ListView key={item.category_Name}
                    onClickFunction={this.update_Layout.bind(this, key)} item={item} />
                ))
            }
          </ScrollView>


          <Text style={style.separator}>Perent/Student</Text>
          <Text style={style.separator}>Settings</Text>
        </ScrollView>

      </View>



    );
  }

}
const style = StyleSheet.create({
  container:
  {
    flex: 1,
    padding: 5,
    backgroundColor: '#99ffff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,

  },
  chechbox: { justifyContent: 'space-between', flexDirection: 'row', },

  visibilityBtn:
  {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5
  },
  separator: {
    marginTop: 15,
    marginLeft: 10,
    fontSize: 18,
    height: 40, width: 300,
    fontWeight: 'bold',
    color: "red",
    backgroundColor: '#ccffe6',
  },
  separator1: {
    marginTop: 15,
    marginLeft: 10,
    fontSize: 18,
    height: 40, width: 300,
    fontWeight: 'bold',
    color: "black",
    backgroundColor: '#b3ffff',
  },
  welcome1: {
    fontSize: 20,
    borderColor: '#ffffff',
    color: 'black',
    borderWidth: 1.0, width: 310,
    backgroundColor: '#e6ac00',
    textAlign: 'center',
    height: 50, marginTop: 30,
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  iconStyle: {

    width: 30,
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',

  },

  sub_Category_Text: {
    fontSize: 18,
    color: '#000',
    padding: 10
  },

  category_Text: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10
  },

  category_View: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: "red",
    backgroundColor: '#ccffe6', height: 40, width: 300,
  },

  Btn: {
    padding: 10,
    backgroundColor: '#FF6F00'
  }
});
