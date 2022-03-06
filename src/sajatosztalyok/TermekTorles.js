import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity } from 'react-native-web';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  kitorles=(szam)=>{
    alert(szam)
    var bemenet={
      bevitel1:szam
    }

  fetch("http://localhost:8080/termektorles", {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
  
  )
  .then(x => x.text())
  .then(y => alert(y));

  }


  componentDidMount(){
    return fetch('http://localhost:8080/termekek_lekerdezes')
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



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View >
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{item.termek_nev} </Text>
          
          <TouchableOpacity
        style={styles.kekgomb}
        onPress={async ()=>this.kitorles(item.termek_id)}  // Eredetileg: tipus_id
      >
        <Text style={{color:"white",fontWeight:"bold",fontSize:15}}  >Törlés</Text>
      </TouchableOpacity>
          </View>
        
        }

        
          keyExtractor={({termek_id}, index) => termek_id} // Eredetileg: tipus_id
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  kekgomb: {
    alignItems: "center",
    backgroundColor: "grey",
    padding: 15,
    width:300,
    marginLeft:"auto",
    marginRight:"auto",
    marginBottom:"10px",
    borderWidth:5,
    borderColor:'black',
    borderRadius:50,
    
   
       
  }
});

