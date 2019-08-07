import React, {Component} from 'react';
import {Platform,
	 StyleSheet, Text, View,   ScrollView, TextInput,Image,ImageBackground,
  TouchableOpacity,ActivityIndicator,ListView,Picker} from 'react-native';
export default class AllocateStudent extends Component {

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
         <Text style={style.welcome}>School/Allocate Student</Text>
		      <ScrollView>

		<View style={{marginTop:10}}>
		<Text style={style.txt}>Select School</Text>
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

<ListView style={{marginTop: 10,backgroundColor: "#dbd5d0",}}
  dataSource={this.state.dataSource}
            renderSeparator= {this.ListViewItemSeparator}

        renderRow={(rowData) => 
       <View style={{flex:1, flexDirection: 'column'}} >
         <TouchableOpacity>
         <Text style={style.txt} >asda5555</Text>
         <Text style={style.txt} >name of school</Text>
         <Text style={style.txt} >2nd language</Text>
         </TouchableOpacity>
       </View>
        }
      />
	  <View style={{marginTop:10}}>
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

<ListView style={{marginTop: 10,backgroundColor: "#dbd5d0",}}
  dataSource={this.state.dataSource}
            renderSeparator= {this.ListViewItemSeparator}

        renderRow={(rowData) => 
       <View style={{flex:1, flexDirection: 'column'}} >
         <TouchableOpacity>
         <Text style={style.txt} >stda5555</Text>
         <Text style={style.txt} >V</Text>
         <Text style={style.txt} >5</Text>
         </TouchableOpacity>
       </View>
        }
      />
	   <View style={{marginTop:10}}>
		<Text style={style.txt}>Select Division</Text>
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

<ListView style={{marginTop: 10,backgroundColor: "#dbd5d0",}}
  dataSource={this.state.dataSource}
            renderSeparator= {this.ListViewItemSeparator}

        renderRow={(rowData) => 
       <View style={{flex:1, flexDirection: 'column'}} >
         <TouchableOpacity>
         <Text style={style.txt} >stda5555</Text>
         <Text style={style.txt} >A</Text>
         <Text style={style.txt} >A</Text>
         </TouchableOpacity>
       </View>
        }
      />
	   <View style={{marginTop:10}}>
		<Text style={style.txt}>Select Educational</Text>
					   </View>
					   <View style={{marginTop: 10,backgroundColor: "#dbd5d0",}}>
<View style={{flexDirection: 'row',justifyContent: 'space-around'}}> 
		<Text style={style.txt}>History</Text>
		<Text style={style.txt}>Current</Text>
		<Text style={style.txt}>Featurs</Text>
</View>
<View style={{flexDirection: 'column',backgroundColor:'rgba(80,80,110,.170)', }}> 
		<Text style={style.txt}>2018 - 2019</Text>
</View>
</View>

			  <View style={{marginTop:10}}>
		<Text style={style.txt}>Already Student</Text>
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

<ListView style={{marginTop: 10,backgroundColor: "#dbd5d0",}}
  dataSource={this.state.dataSource}
            renderSeparator= {this.ListViewItemSeparator}

        renderRow={(rowData) => 
       <View style={{flex:1, flexDirection: 'column'}} >
         <TouchableOpacity>
         <Text style={style.txt} >stda5555</Text>
         <Text style={style.txt} >Ravi</Text>
         <Text style={style.txt} >Hindi</Text>
         </TouchableOpacity>
       </View>
        }
      />
	  <View style={{marginTop:10}}>
		<Text style={style.txt}>Add new Student</Text>
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
		<Text style={style.txt}>List</Text>
 <View style={{marginTop: 10,backgroundColor: "#dbd5d0",}}>
<View style={{flexDirection: 'row',justifyContent: 'space-around'}}> 
		<Text style={style.txt}>History</Text>
		<Text style={style.txt}>Current</Text>
		<Text style={style.txt}>Featurs</Text>
</View>
<View style={{flexDirection: 'column',backgroundColor:'rgba(80,80,110,.170)', }}> 
		<Text style={style.txt}>2018 - 2019</Text>
</View>
</View>
<ListView style={{marginTop: 10,backgroundColor: "#dbd5d0",}}
  dataSource={this.state.dataSource}
            renderSeparator= {this.ListViewItemSeparator}

        renderRow={(rowData) => 
       <View style={{flex:1, flexDirection: 'column'}} >
         <TouchableOpacity>
         <Text style={style.txt} >stda5555</Text>
         <Text style={style.txt} >Ravi</Text>
         <Text style={style.txt} >Hindi</Text>
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

txt:{color:'black',textAlign:'center',fontWeight: 'bold', fontSize:14},

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
	backgroundColor:'orange',
    borderRadius:5,
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
