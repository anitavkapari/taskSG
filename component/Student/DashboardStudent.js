import React, {Component} from 'react';
import { Platform,
	 StyleSheet,  View,Text,ListView,SectionList, ScrollView,Button,   UIManager, LayoutAnimation,
 TextInput,Image,TouchableOpacity,
  TouchableHighlight,ImageBackground} from 'react-native';
  
import CustomHeader from './CustomHeader.js';  

export default class DashboardStudent extends Component {
	
static navigationOptions = {
	header: null
}	
    componentDidMount(){}
	constructor(props) {
    super(props);
this.state = {
	  toggle:true
    };
	}
	showTab( currentClass )
	{
//	alert(tabIndex);
	this.props.navigation.navigate('FoundationTab', {currentClass: {currentClass}});
   	}
   _onPress(){
	  const newState =!this.state.toggle;
	  this.setState({toggle:newState})
  }
	 /* ShowHideComponent = () => {
       this.setState({ show: !this.state.show });
  };*/
    render() {
		const{toggle} =this.state;
		const textValue = toggle?"See":"SeeAll";
		const buttonBg = toggle?"red":'white'
    return (	
	   
	    <ImageBackground source={require('../../component/image/login.png')}
                        style={style.container}>
		<ScrollView>

	    <CustomHeader />
		  
		<View style={{alignItems: 'flex-end'}}>
		 <View style={{flexDirection: 'row'}}>
		<View>
		<Image style={{width: 50, height: 50}}source={require('../../component/image/arrow.png')}/>	
		</View>
		<View>
		<Image style={{width: 50, height: 50}}source={require('../../component/image/menutype.png')}/>	
			</View>
       		</View>
			</View>
			<Text style={style.text}>Quick</Text>
			<TouchableHighlight>
			<Text style={style.separator} >First Aid</Text>
			</TouchableHighlight>
						<Text style={style.separator} >Drinking Water</Text>
			<Text style={style.separator} >Bus</Text>

<TouchableHighlight>
			<Text style={style.separator}>Parking</Text>
			</TouchableHighlight>
			<Text style={style.separator} >Foundation</Text>
			<Text style={style.separator} >School</Text>
			<Text style={style.separator} >Lab</Text>
			<Text style={style.separator} >Hostel</Text>
			<Text style={style.separator} >Toilet</Text>
			<Text style={style.separator} >Ground</Text>

<TouchableHighlight onPress={()=>this._onPress()}>
          			<Text style={style.seeAll}>{textValue}</Text>
</TouchableHighlight>

			<Text style={style.text}>Live</Text>
			<Text style={style.separator}>Camera</Text>
			<Text style={style.separator}>Photo</Text>
			<Text style={style.separator}>Video</Text>
			<Text style={style.separator}>Bell</Text>

         
<TouchableHighlight onPress={()=>this._onPress()}>
          			<Text style={style.seeAll}>{textValue}</Text>
</TouchableHighlight>

			<Text style={style.text}>Personal</Text>
			<Text style={style.separator}>Photo</Text>
			<Text style={style.separator}>Video</Text>
						<Text style={style.separator}>Fee</Text>

						<Text style={style.separator}>Document</Text>
			<Text style={style.separator}>Certificate</Text>
			<Text style={style.separator}>TimeTable</Text>
			<Text style={style.separator}>Classes</Text>

<TouchableHighlight onPress={()=>this._onPress()}>
          			<Text style={style.seeAll}>{textValue}</Text>
</TouchableHighlight>
			<Text style={style.text}>Professional</Text>
			<Text style={{textAlign:'center'}}>School</Text>
			<Text style={style.separator}>Gate/Door Lock</Text>
			<Text style={style.separator}>Notice</Text>
			
			<Text style={{textAlign:'center'}}>Enterprices</Text>
			<Text style={style.separator}>Books</Text>
			<Text style={style.separator}>Note Books</Text>
			<Text style={style.separator}>Stationary</Text>
			
	<Text style={{textAlign:'center'}}>Company</Text>
			<Text style={style.separator}>Plan</Text>
			
		
<TouchableHighlight onPress={()=>this._onPress()}>
          			<Text style={style.seeAll}>{textValue}</Text>
</TouchableHighlight>
			<Text style={style.text}>Informations</Text>
			<Text style={style.separator}>Foundation</Text>
		<Text style={style.separator}>School</Text>
<Text style={style.separator}>Professor/Employee</Text>
		<Text style={style.separator}>Bus</Text>
<Text style={style.separator}onPress={() => this.showTab(3)}>Lab</Text>
		<Text style={style.separator}>Hostel</Text>
<Text style={style.separator}>Holidays</Text>
		
		<Text style={style.separator}>15 August</Text>
<Text style={style.separator}>26 janubary</Text>
		<Text style={style.separator}>Anniversary</Text>
<Text style={style.separator}>Festivals</Text>
<Text style={style.separator}>Actvity</Text>



<TouchableHighlight onPress={()=>this._onPress()}>
          			<Text style={style.seeAll}>{textValue}</Text>
</TouchableHighlight>
			<Text style={style.text}>Visit</Text>
			<Text style={style.separator}>Teacher</Text>
<Text style={style.separator}>Gest</Text>

<TouchableHighlight onPress={()=>this._onPress()}>
          			<Text style={style.seeAll}>{textValue}</Text>
</TouchableHighlight>
			<Text style={style.text}>Settings</Text>
			<Text style={style.separator}>Theme</Text>
			<Text style={style.separator}>Recycle</Text>
<Text style={style.separator}>TermsConditions</Text>

<TouchableHighlight onPress={()=>this._onPress()}>
          			<Text style={style.seeAll}>{textValue}</Text>
</TouchableHighlight>			
	</ScrollView>


	    </ImageBackground> 

    );
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
		marginLeft:40,
		   
	},
	 ImageStyle: {
    padding: 10,
    margin: 10,
    height: 80,
    width: 80,
    resizeMode: 'stretch',
	
  },
  
	inputBox:{
	width:250,
      fontSize:18,
    color:'#ffffff',
	 borderWidth: 0.5,
    marginVertical: 10
	},
	  SectionStyle: {
	  width:310,
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
	marginLeft:250,
    justifyContent: 'flex-end',
    alignItems: 'center',
    tintColor: '#fff'

  },
 separator: {  
       padding:20,
		marginTop:15,
        fontSize: 18,  
		height: 80,
		    borderWidth: 1.0,
        fontWeight: 'bold',  
		 borderColor: '#ffffff',
        color: "black",textAlign:'center',  
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
    button:{width: 110,height: 60,padding:10},
buttontxt:{
	color:'black',fontWeight: 'bold',fontSize:14,padding:5,textAlign:'center'
},
seeAll:{marginLeft:250,color:'skyblue',fontWeight: 'bold',fontSize:14},
seeAll1:{marginLeft:250,color:'gray',fontWeight: 'bold',fontSize:14},

text:{borderWidth: 1.0, borderColor: 'black',backgroundColor:'#ffffff',marginTop:5,color:'black',fontWeight:'bold',fontSize:14,padding: 10},
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
	fontWeight:'bold',
    fontSize: 18,
    padding: 10
  },

  category_View: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'orange',
	height: 80,
	borderWidth: 1.0, borderColor: '#ffffff'
  },

  Btn: {
    padding: 10,
    backgroundColor: '#FF6F00'
  }
});
