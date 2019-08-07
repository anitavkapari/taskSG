import React, { Component } from 'react';
import {
  Platform,
  StyleSheet, View, ToastAndroid, Text, ListView, Modal, SectionList, ScrollView, Button, UIManager, LayoutAnimation,
  TextInput, Image, TouchableOpacity,
  TouchableHighlight, ImageBackground
} from 'react-native';

import CustomHeader from './CustomHeader.js';

export default class DashboardParent extends Component {

  static navigationOptions = {
    header: null
  }

  componentDidMount() { }

  constructor(props) {
    super(props);
    this.state = {
      Alert_Visibility: false,

      sections: [{}]
      , parentSections: ([
        { title: 'Quick', data: ['First Aid', 'Drinking Water', 'Bus', 'Parking', 'Foundation', 'School', 'Lab', 'Hostal', 'Ground'] },
        { title: 'Live', data: ['Camera', 'Photo', 'Video', 'Bell'] },
        { title: 'Personal', data: ['Photo', 'Video', 'Document', 'Certificate', 'Timetable',] },
        { title: 'Professional/School/Enterprices/Company', data: ['Gate/ClassRoom', 'Notice', 'Book', 'NoteBook', 'Plan', 'Collection'] },
        { title: 'Information', data: ['Foundation', 'School', 'Professor/employee', 'Bus', 'Lab', 'Hostal', 'Holidays', '15 August', '26 Janubary', 'Anniversary', 'festiva', 'Activity'] },
        { title: 'Visit', data: ['Teacher', 'Guest'] },
        { title: 'Setting', data: ['Theam', 'Recycle', 'Terms & Condition'] },
      ])
      , studentSections: ([
        { title: 'Quick', data: ['First Aid', 'Drinking Water', 'Bus', 'Parking', 'Foundation', 'School', 'Lab', 'Hostal', 'Ground'] },
        { title: 'Live', data: ['Camera', 'Photo', 'Video', 'Bell'] },
        { title: 'Personal', data: ['Photo', 'Video', 'Document', 'Certificate', 'Timetable',] },
        { title: 'Professional/School', data: ['Gate/ClassRoom', 'Clenning', 'Drinking Water', 'Pick Up', 'Droup', 'Bell', 'Attaindancy', 'Home Work', 'Syllabus', 'Extra Class', 'Notice', 'Exam', 'Result', 'Sport', 'Camp', 'Trip', 'Gathering', 'Get Togather', 'Send Up'] },
        { title: 'Professional/Academy', data: ['General Knowledge', 'E-Learning', 'Online Exam', 'English Speaking', 'Grammar', 'Sports', 'Career Guidance', 'History', 'Science', 'Geography', 'Animals', 'Birds', 'Trees', 'Inspirational Quotes', 'Health Tips', 'Scholarship Exam Tips', 'Government Exam Tips', 'CET Exam Tips', 'Wold/Country'] },
        { title: 'Professional/Enterprices', data: ['Gate/ClassRoom', 'Notice', 'Book', 'NoteBook', 'Stationary'] },
        { title: 'Professional/Company', data: ['Plan'] },

        { title: 'Information', data: ['Foundation', 'School', 'Uniform', 'SchoolBag', 'Launch', 'Professor/employee', 'TimeTable', 'Bus', 'Lab', 'Hostel', 'Account', 'Document', 'Certificate', 'Holidays', '15 August', '26 Janubary', 'Anniversary', 'festiva', 'Activity'] },
        { title: 'Visit', data: ['Teacher', 'Guest'] },
        { title: 'Setting', data: ['Theam', 'Recycle', 'Terms & Condition'] },
      ])
    };

    this.state.sections = this.state.parentSections;

  }

  showTab(currentClass) {
    //	alert(tabIndex);
    this.props.navigation.navigate('FoundationTab', { currentClass: { currentClass } });
  }


  /* ShowHideComponent = () => {
      this.setState({ show: !this.state.show });
 };*/
  render() {

    return (

      <ImageBackground source={require('../../component/image/login.png')}
        style={style.container}>
        <ScrollView>

          <CustomHeader
            studentClickHandler={this.onChildClick}
            parentClickHandler={this.onParentClick}
          />
          <Modal

            visible={this.state.Alert_Visibility}

            transparent={true}
            animationType={"slide"}

            onRequestClose={() => { this.onChildClick(!this.state.Alert_Visibility) }} >

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


              <View style={style.Alert_Main_View}>



                <Text style={style.Alert_Message}> Switch Account to Student  </Text>


                <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }} />


                <View style={{ flexDirection: 'row', height: '30%' }}>

                  <TouchableOpacity
                    style={style.buttonStyle}
                    onPress={this.yes_Button}
                    activeOpacity={0.7}
                  >

                    <Text style={style.TextStyle}> Yes </Text>

                  </TouchableOpacity>
                  <View style={{ width: 1, height: '100%', backgroundColor: 'gray' }} />


                  <TouchableOpacity
                    style={style.buttonStyle}
                    onPress={() => { this.no_Button() }}
                    activeOpacity={0.7}
                  >

                    <Text style={style.TextStyle}> No </Text>

                  </TouchableOpacity>

                </View>

              </View>

            </View>


          </Modal>


          <SectionList sections={this.state.sections}

            renderItem={({ item }) => <Text style={style.separator} onPress={() => this.showTab(3)}>{item}</Text>}
            renderSectionHeader={({ section }) => <Text style={style.text}>{section.title}</Text>}

            keyExtractor={(item, index) => index}
          />

        </ScrollView>


      </ImageBackground>

    );
  }


  yes_Button = (sections) => {
    //alert( this.state.studentSections);
    this.setState({ sections: this.state.studentSections });
    this.setState({ Alert_Visibility: false });
    ToastAndroid.show("Change Account", ToastAndroid.LONG);

  }
  no_Button = () => {

    this.setState({ Alert_Visibility: false });
    ToastAndroid.show("can't Change Account", ToastAndroid.LONG);

  }
  onChildClick = (visible) => {
    this.setState({ Alert_Visibility: visible });
  }

  onParentClick = (visible) => {


    //alert('parent click');

    this.setState({ sections: this.state.parentSections });
    ToastAndroid.show("Change Account", ToastAndroid.LONG);

    // this.setState({Alert_Visibility: visible});

  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,

  },
  ImageStyle: {
    padding: 10,
    margin: 10,
    height: 80,
    width: 80,
    resizeMode: 'stretch',

  },

  inputBox: {
    width: 250,
    fontSize: 18,
    color: '#ffffff',
    borderWidth: 0.5,
    marginVertical: 10
  },
  SectionStyle: {
    width: 310,
    flexDirection: 'row',
    backgroundColor: 'black',
    borderColor: '#000',
    height: 100,
    borderRadius: 5,
    margin: 10,
  },
  iconStyle: {

    width: 15,
    height: 15,
    marginLeft: 250,
    justifyContent: 'flex-end',
    alignItems: 'center',
    tintColor: '#fff'

  },
  separator: {
    padding: 20,
    marginTop: 15,
    fontSize: 18,
    height: 80,
    borderWidth: 1.0,
    fontWeight: 'bold',
    borderColor: '#ffffff',
    color: "black", textAlign: 'center',
    backgroundColor: 'rgba(255,200,25,.45)',
  },
  visibilityBtn:
  {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5
  },
  btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },
  button: { width: 110, height: 60, padding: 10 },
  buttontxt: {
    color: 'black', fontWeight: 'bold', fontSize: 14, padding: 5, textAlign: 'center'
  },
  seeAll: { marginLeft: 250, color: 'skyblue', fontWeight: 'bold', fontSize: 14 },
  seeAll1: { marginLeft: 250, color: 'gray', fontWeight: 'bold', fontSize: 14 },

  text: { borderWidth: 1.0, borderColor: 'black', backgroundColor: '#ffffff', marginTop: 5, color: 'black', fontWeight: 'bold', fontSize: 14, padding: 10 },
  iconStyle: {

    width: 20,
    height: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
    tintColor: '#fff'

  },

  sub_Category_Text: {
    fontSize: 18,
    color: '#000',
    padding: 10
  },

  category_Text: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10
  },

  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 22,
    fontWeight: 'bold',
    color: "#fff",
    backgroundColor: '#8fb1aa',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  Alert_Main_View: {

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffffff",
    height: 150,
    width: '90%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 7,

  },

  Alert_Title: {

    fontSize: 25,
    color: "#0000",
    textAlign: 'center',
    padding: 3,
    height: '28%'

  },

  Alert_Message: {

    fontSize: 22,
    color: "gray",
    textAlign: 'center',
    padding: 3,
    height: '40%'

  },

  buttonStyle: {

    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'

  },

  TextStyle: {
    color: '#009933',
    textAlign: 'center',
    fontSize: 20,
    marginTop: -5,

  }
});
