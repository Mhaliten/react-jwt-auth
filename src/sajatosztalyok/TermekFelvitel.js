import React, { Component } from 'react';
import { StyleSheet,Text, TextInput, View,TouchableOpacity } from 'react-native';

export default class Bevitel extends Component {
  constructor(props) {
    super(props);
    this.state = {

        termektipus_id: '',
        termek_nev:"",
        termek_ar_HUF:"",
        termek_mertekegyseg:""
    };
  }

felvitel=async ()=>{
    //alert("megnyomva a gomb")

    
    let bemenet={
      bevitel1:this.state.nev
    
    }

    fetch('http://localhost:8080/termek_felvitel',{
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
       
    )
    .then((response) => response.text())
    .then((szoveg) => {

    alert(szoveg)
     this.props.frissit() 

})
    
}


  render() {
    return (
    <View style = {{backgroundColor:'darkgrey',width:'80%',borderRadius:20,alignSelf:'center',borderColor:'black'}}>
      <View style={{padding: 10}}>
          <Text style={{padding: 10, fontSize: 22,color:'white',textAlign:'center'}}>
          (termektipus_id)
          </Text>
        <TextInput
          placeholderTextColor="white"
          style={{height: 40,width:'50%',alignSelf:'center',backgroundColor:'black',borderColor:'black',color:"white",textAlign:'center'}}
          placeholder=""
          onChangeText={(termektipus_id) => this.setState({termektipus_id})}
          value={this.state.termektipus_id}
        />

<Text style={{padding: 10, fontSize: 22,color:'white',textAlign:'center'}}>
               (termek_nev)
          </Text>
        <TextInput
          placeholderTextColor="white"
          style={{height: 40,width:'50%',alignSelf:'center',backgroundColor:'black',borderColor:'black',color:"white",textAlign:'center'}}
          placeholder=""
          onChangeText={(termek_nev) => this.setState({termek_nev})}
          value={this.state.termek_nev}
        />

<Text style={{padding: 10, fontSize: 22,color:'white',textAlign:'center'}}>
              (termek_ar_HUF)
          </Text>
        <TextInput
          placeholderTextColor="white"
          style={{height: 40,width:'50%',alignSelf:'center',backgroundColor:'black',borderColor:'black',color:"white",textAlign:'center'}}
          placeholder=""
          onChangeText={(termek_ar_HUF) => this.setState({termek_ar_HUF})}
          value={this.state.termek_ar_HUF}
        />

<Text style={{padding: 10, fontSize: 22,color:'white',textAlign:'center'}}>
              (termek_mertekegyseg)
          </Text>
        <TextInput
          placeholderTextColor="white"
          style={{height: 40,width:'50%',alignSelf:'center',backgroundColor:'black',borderColor:'black',color:"white",textAlign:'center'}}
          placeholder=""
          onChangeText={(termek_mertekegyseg) => this.setState({termek_mertekegyseg})}
          value={this.state.termek_mertekegyseg}
        />

        <Text style={{paddingTop: 10, fontSize: 22,color:'white',textAlign:'center'}}></Text>
        
         <TouchableOpacity
          onPress={async ()=>this.felvitel()}>
          <View style={styles.gomb}>
            <Text style={styles.gombSzoveg}>Felvitel</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    </View>
    
    );
  }
}

const styles = StyleSheet.create({
    gombSzoveg:{
            textAlign:'center',
            color:'white',
            marginTop:'auto',
            marginBottom:'auto',
            fontSize:25
    },
    gomb:{
            height:45,
            backgroundColor:'black',
            width:'45%',
            alignSelf:'center',
            borderRadius:10
    },
});