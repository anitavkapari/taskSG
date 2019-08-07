import React, {Component} from 'react';
import {Platform,
	 StyleSheet, Text, View,  TextInput,Image,
  TouchableOpacity,ActivityIndicator, SafeAreaView,ImageBackground} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import OctIcon from 'react-native-vector-icons/Octicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';


//import Icon from 'react-native-vector-icons/EvilIcons';

import { createMaterialTopTabNavigator,createAppContainer,createStackNavigator } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation'

//import AllocateAdminTask from '.AllocateAdminTask.js';
//import AllocationAdminTaskEditList from './AllocationAdminTaskEditList.js';
//import ProfAndEmpTask from './ProfAndEmpTask.js';
//import SchoolFoundation from './SchoolFoundation.js';
//import FoundationList from './FoundationList.js';
//import AddNewAdmin from './AddNewAdmin.js';
//import FoundationsInfo from './FoundationsInfo.js';
//import Dashboardscreen from './TopTab/Dashboardscreen.js';
import Home from './Home.js';
import EditFoundation from './top_tab/EditTab.js';
import NewFoundation from './top_tab/NewTab.js';
import SaveFoundation from './top_tab/SaveTab.js';
import LogHistory from './top_tab/LogHistoryTab.js';
import Work from './top_tab/WorkTab.js';
import InCharge from './top_tab/InChargeTab.js';
import Allocate from './top_tab/AllocateTab.js';
import CustomHeader from './dashboard/CustomHeader.js';
import EditCollection from './SchoolCollection/EditCollection.js';



let iconWidth = 160;
let iconLeftPadding = 55;
const styles = StyleSheet.create({
  updateTab: {
    backgroundColor: '#f57552',
     justifyContent: 'center',
	  alignItems: 'center',
	     position: 'absolute',
		
    		width: iconWidth,
	  paddingLeft: iconLeftPadding 
    	//	height: iconWidth,
 
  },
  saveTab: {
    backgroundColor: '#ff5733',
     justifyContent: 'center',
	  alignItems: 'center',
	     position: 'absolute',
    		width: iconWidth,
	  paddingLeft: iconLeftPadding 
  },
  recentTab: {
    backgroundColor: '#ffff66',
     justifyContent: 'center',
	  alignItems: 'center',
	     position: 'absolute',
    		width: iconWidth,
	  paddingLeft: iconLeftPadding 
  },
  workTab: {
    backgroundColor: '#7fffd4',
     justifyContent: 'center',
	  alignItems: 'center',
	     position: 'absolute',
    		width: iconWidth,
	  paddingLeft: iconLeftPadding 
  },
  editTab: {
    backgroundColor: '#c9f6f7',
     justifyContent: 'center',
	  alignItems: 'center',
	     position: 'absolute',
    		width: iconWidth,
	  paddingLeft:  iconLeftPadding 
  },
  staffTab: {
    backgroundColor: '#7da6ee',
     justifyContent: 'center',
	  alignItems: 'center',
	     position: 'absolute',
    		width: iconWidth,
	  paddingLeft:  iconLeftPadding 
  },
  settingsTab: {
    backgroundColor: '#f4c1f6',
     justifyContent: 'center',
	  alignItems: 'center',
	     position: 'absolute',
    		width: iconWidth,
	  paddingLeft:  iconLeftPadding 
  }
});

let iconSize = 48;
//export default 
	FoundationTabNav  
	//Tab 
= 
createMaterialTopTabNavigator(


{
	//FoundationStackNavigator : FoundationStackNavigator ,
   Update: 
	{
	screen:NewFoundation,
	navigationOptions:
		{
		//tabBarIcon:() => ( <Icon name="./image/moreicon" size={24} />)
		tabBarIcon:() => ( <Icon name="update" 
					size={iconSize} 
					style={styles.updateTab} 
				/>)
		},
	},
   Save: 
	{
	screen:SaveFoundation,
	navigationOptions:
		{
		//tabBarIcon:() => ( <Icon name="./image/moreicon" size={24} />)
		tabBarIcon:() => ( <FontAwesome5 name="save" size={iconSize} style={styles.saveTab} />)
		},
	},
   Recent: 
	{
	screen:LogHistory,
	navigationOptions:
		{
		//tabBarIcon:() => ( <Icon name="./image/moreicon" size={24} />)
		tabBarIcon:() => ( <FontAwesome5 name="history" size={iconSize} style={styles.recentTab} />)
		},
	},
   Work: 
	{
	screen:Work,
	navigationOptions:
		{
		//tabBarIcon:() => ( <Icon name="./image/moreicon" size={24} />)
		tabBarIcon:() => ( <MaterialIcon name="work" size={iconSize} style={styles.workTab} />)
		},
	},
		
   Edit: 
	{
	screen:EditFoundation,
	navigationOptions:
		{
		//tabBarIcon:() => ( <Icon name="./image/moreicon" size={24} />)
		tabBarIcon:() => ( <FontAwesome5 name="edit" size={iconSize} style={styles.editTab} />)
		},
	},
	Staff:
	{
	screen:InCharge,
	navigationOptions:
		{
		//tabBarIcon:() => ( <Icon name="./image/moreicon" size={24} />)
		tabBarIcon:() => ( <OctIcon name="person" size={iconSize} style={styles.staffTab} />)
		},
	},
	Settings:
	{
	screen:Allocate,
	navigationOptions:
		{
		//tabBarIcon:() => ( <Icon name="./image/moreicon" size={24} />)
		tabBarIcon:() => ( <Icon name="settings" size={iconSize} style={styles.settingsTab} />)
		},
	},
},
{
  tabBarPosition: 'top',
  tabBarOptions: 
	{
	scrollEnabled: true,
	showLabel: false,
	showIcon: true,
	style:
		{
		backgroundColor: 'white',
		},
	tabStyle: {
    		//width: 100,
		//height: 40,
    		//backgroundColor: '#f57552',
  		},
	 iconStyle: {
//            width: 60,
 //           height: 60
        },
	},

},
	//headerMode: 'None',
);


//export default FoundationTabView;

/*
export default Tab;

export //default  
FoundationTabContainer;

*/
const FoundationTabContainer = createAppContainer( FoundationTabNav );

export default class FoundationTabView extends Component 
	{

	state = 
		{
		showHeader: false
		};

	constructor(props)
		{
		super(props);
		var param = this.props.navigation.getParam( 'tabIndex', '-1' );
		var msg = JSON.stringify( param );
		//alert( param.tabIndex );
		///this.props.navigation.setParams( { showHeader: true })
		}

	
	componentDidMount()
		{
		/*
		setTimeout(()=> {
		this.props.navigation.setParams( { showHeader: false })
		this.setState( { showHeader: false });
		}
				,3000);
				*/
		}


	static parent = this;
  	static navigationOptions = ({navigation}) =>( 
		{
			/*
		header: ( ( navigation.state.params ) 
		  		&& ( navigation.state.params.showHeader ) ) 
			?
			( props => <CustomHeader {...props} /> )
			:  ( null )
			*/
		header:null 
			//	
		,headerStyle: {
    backgroundColor: "transparent"
  },
  headerTitleStyle: {
    fontWeight: "bold",
    color: "#fff",
  },
  headerTintColor: "#fff",
  animationEnabled: true
		})
    

    	render() 
		{
    		return (
			<View style={{ flex: 1 }}>
			<View style={{ flex: 14 }}>
			<FoundationTabContainer 
						navigation={this.props.navigation} 
			>
			</FoundationTabContainer>
			</View>

			<View style={{ flex: 1}}>
			<BottomTabContainer 
			/> 
			</View>


			</View>
			//<FoundationTabNav>
			//</FoundationTabNav>
	        	//<Text>Tab View</Text>
			);
      		}

  	}

class BlankComponent  extends Component 
	{

	constructor(props)
		{
		super(props);
		}

	
  	static navigationOptions = 
		{
		header: null
		}
    
    	render() 
		{
    		return (
			<View style={{ flex: 0 }}>
			</View>
			);
      		}

  	}

    const BottomTabs = createBottomTabNavigator ({
      Message:{
        screen: BlankComponent  ,
        navigationOptions:{
          tabBarIcon: ({ focused, tintcolor }) => (
            <Icon name="send" size={24}  />
          )
        }
      },
      Report:{screen:BlankComponent  ,
        navigationOptions:{
          tabBarIcon: ({ tintcolor }) => (
            <MaterialIcon name="report" size={24} />
          )
        }
      },
      Background:{screen:BlankComponent  ,
        navigationOptions:{
          tabBarIcon: ({ tintcolor }) => (
            <FoundationIcon name="mountains" size={24} />
          )
        }
      },
      Audio:{screen:BlankComponent  ,
        navigationOptions:{
        tabBarIcon: ({ tintcolor }) => (
          <Icon name="speaker" size={24} />
        )
      }
      },
      Watch:{screen:BlankComponent  ,
        navigationOptions:{
          tabBarIcon: ({ tintcolor }) => (
            <Icon name="eye" size={24} />
          )
        }
      },
      Incharge:{screen:BlankComponent  ,
        navigationOptions:{
          tabBarIcon: ({ tintcolor }) => (
            <FontAwesome5 name="hand-holding" size={24} />
          )
        }
      },
      Delete:{screen:BlankComponent  ,
        navigationOptions:{
          tabBarIcon: ({ tintcolor }) => (
            <Icon name="delete" size={24} />
          )
        }
      },
      Info:{screen:BlankComponent  ,
        navigationOptions:{
          tabBarIcon: ({ tintcolor }) => (
            <FontAwesome5 name="info" size={24} />
          )
        }
      },
      Help:{screen:BlankComponent  ,
        navigationOptions:{
          tabBarIcon: ({ tintcolor }) => (
            <FontAwesome5 name="hands-helping" size={24} />
          )
        }
      }

    }
	    
,
{
  tabBarOptions: 
	{
    	scrollEnabled: true,

	//scrollEnabled: true,
	showLabel: false,
	inactiveBackgroundColor: 'darkorange'

	,tabStyle:{
              width: 160,
          }
	},
}

    );

const BottomTabContainer = createAppContainer( BottomTabs );

	FoundationTabView.router = FoundationTabNav.router ; 

