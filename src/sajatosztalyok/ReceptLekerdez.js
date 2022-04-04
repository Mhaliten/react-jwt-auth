import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity } from 'react-native';
export default class AppTermek extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,

      akttema:1,

      dataSource:[],
      dataSource2:[]

    }
	
	
  }

  


  componentDidMount(){
    // alert("hello")
    return fetch('http://localhost:8080/etkez')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });
    


      })
      .catch((error) =>{
        console.error(error);
      });
  }

  kivalaszt=async (szam)=>{
   // alert(szam)
    
    this.setState({akttema:szam})

    let bemenet={
      bevitel1:szam
    }
    return fetch('http://localhost:8080/recept_lekerdez_receptek',{
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
       
    )
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource2: responseJson,
      }, function(){

    
      });

    })
    .catch((error) =>{
      console.error(error);
    });

  }


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20,backgroundColor:'black'}}>
{/*--------------------------------------------------------------------------témák */}        
<View style={{alignItems:"center"}}>
       <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

 
         <TouchableOpacity
        style={{backgroundColor:"grey",width:150,margin:10,borderRadius:10}}
        onPress={async ()=>this.kivalaszt(item.etel_id)}
      >
        <Text style={{color:"white",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{item.eteltipus} </Text>
         
      </TouchableOpacity>
   
       
        
        }
    
          keyExtractor={({etel_id}, index) => etel_id}
        />
           </View>
   


<FlatList
          data={this.state.dataSource2}
          renderItem={({item}) => 

          <View style={{borderWidth:1,margin:20,backgroundColor:"#367588",paddingLeft:10,paddingRight:10,borderRadius:10}}>

         
<Text style={{color:"white",fontSize:20,marginBottom:35}}   >
           {item.etel_nev}
           
          </Text>
          <Text style={{color:"white",fontSize:15}}>
            Hozzávalók:
          </Text>
          
        <Text style={{color:"#00ffcc",fontSize:20,marginTop:15,marginBottom:25,fontFamily:"bold"}}   >
          {item.recept_hozzavalok} </Text>    

          <Text style={{color:"white",fontSize:15}}>
            Elkészítés:
          </Text>

          <Text style={{color:"#00ffcc",fontSize:20,marginTop:15,marginBottom:25,fontFamily:"bold"}}   >
          {item.elkeszites} </Text>     
     
   
          </View>
        
        }
    
          keyExtractor={({recept_id}, index) => recept_id}
        />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  kekgomb: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    width:300,
    marginLeft:"auto",
    marginRight:"auto",
  }
});