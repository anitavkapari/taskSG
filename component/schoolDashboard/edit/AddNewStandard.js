import React, {Component} from 'react';
import {Platform,
	 StyleSheet, Text, View,  ScrollView, TextInput,ListView,Image,ImageBackground,
  TouchableOpacity,ActivityIndicator,Picker} from 'react-native';
export default class AddNewStandard extends Component {

	static navigationOptions = {
	header: null
}
 componentDidMount(){}
	constructor(props){
    super(props);
	    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state={
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      text: '',

		 error: false
    }
    }
	GetItem (student_name) {
 
Alert.alert(student_name);
 
}
	state = {  
        choosenIndex: 0  
    };
	

ListViewItemSeparator = () => {
  return (
    <View
      style={{
 
        height: .9,
        width: "100%",
        backgroundColor: "black",
 
      }}
    />
  );
}
  SearchFilterFunction(text){
     
     const newData = this.arrayholder.filter(function(item){
         const itemData = item.fruit_name.toUpperCase()
         const textData = text.toUpperCase()
         return itemData.indexOf(textData) > -1
     })
     this.setState({
         dataSource: this.state.dataSource.cloneWithRows(newData),
         text: text
     })
 }
    render() {
    return (
	 		   <View style={style.container}>	
         <Text style={style.welcome}>School/Add New Standard</Text>
		      <ScrollView>
	  <View style={{marginTop:10}}>
		<Text style={style.txt}>Select School</Text>
		</View>
		<ListView style={{marginTop: 10,   marginBottom:10,     backgroundColor: "#dbd5d0",}}
  dataSource={this.state.dataSource}
          renderSeparator= {this.ListViewItemSeparator}

        renderRow={(rowData) => 
       <View style={{flex:1, flexDirection: 'column'}} >
         <TouchableOpacity>
         <Text style={style.txt} >fffdd</Text>
         <Text style={style.txt} >1111</Text>
         <Text style={style.txt} >Short name of school english</Text>
         <Text style={style.txt} >Short name of school MotherTongue</Text>
         </TouchableOpacity>
       </View>
        }
      />
		<Text style={style.txt}>Already Standard</Text>
		<ListView style={{marginTop: 10, backgroundColor: "#dbd5d0",}}
  dataSource={this.state.dataSource}
            renderSeparator= {this.ListViewItemSeparator}

        renderRow={(rowData) => 
       <View style={{flex:1, flexDirection: 'column'}} >
         <TouchableOpacity>
         <Text style={style.txt} >stda5555</Text>
         <Text style={style.txt} >V</Text>
         <Text style={style.txt} >5th</Text>
		 
         </TouchableOpacity>
		 
       </View>
        }
      />
	  <View style={{margin:10}}>
		<Text style={style.txt}>Select Standard</Text>
					  </View>

			  <View style={{marginLeft:100}}>
		 <View style = { style.SectionStyle }>
<TextInput style={style.TextInputStyleClass}
       value={this.state.text}
       underlineColorAndroid='transparent'
       placeholder="Search Here"/>
<Image source={require('../../../component/image/search.png')}style={style.ImageStyle}/>
			  </View>
			   </View>

<ListView style={{marginTop: 10,marginBottom:10,backgroundColor: "#dbd5d0",}}
  dataSource={this.state.dataSource}
            renderSeparator= {this.ListViewItemSeparator}

        renderRow={(rowData) => 
       <View style={{flex:1, flexDirection: 'column'}} >
         <TouchableOpacity>
         <Text style={style.txt} >stda5555</Text>
         <Text style={style.txt} >V</Text>
         <Text style={style.txt} >6th</Text>
         </TouchableOpacity>
       </View>
        }
      />
     </ScrollView>

       <TouchableOpacity 
			  onPress={()=>this.Save()}>
             <Text style={style.button}>Save</Text>
           </TouchableOpacity>
	  </View>

    );
      }
  
		Save  =() =>
 		{

			
 		}
}
const style = StyleSheet.create({
	 container:
  {
    flex: 1,
	backgroundColor: '#99ffff',
  },
   TextInputStyleClass:{
   textAlign: 'center',
   height: 37,
   
   borderRadius: 7 ,width:150,
   backgroundColor : "#FFFFFF"
        
   },
    ImageStyle: {
    resizeMode: 'stretch',
    alignItems: 'center',    borderRadius: 7,
	width: 35, height: 35
  },
	SectionStyle: {
    flexDirection: 'row',
    backgroundColor: '#fff',borderWidth: 1,
   borderColor: '#009688',
    height: 40,width:200,
    borderRadius: 7,
  },
txt:{color:'black', textAlign:'center',fontWeight: 'bold', fontSize:14},

	textViewContainer: {
 
 textAlignVertical:'center', 
 padding:10,
 fontSize: 20,
 color: '#fff',
 
},
	 button: {
    fontSize:20,
    color:'#ffffff',
    textAlign:'center',
	 height:50,padding:5,
	 marginLeft:110,
	 fontWeight: 'bold',  
    width:130, height: 40,
	marginTop:15,
		marginBottom:5,
	backgroundColor:'#cc0000',
    borderRadius:30,
  },
 
   welcome: {
    fontSize: 20,
	borderColor: '#ffffff',
	    color: 'black',
		 borderWidth: 1.0,
backgroundColor:'#e6ac00',
    textAlign: 'center',
			marginTop:30,
  },
    
     
 	
});
