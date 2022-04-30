import React, { Component } from 'react';
import { StyleSheet,Text, TextInput, View,TouchableOpacity } from 'react-native';

export default class Bevitel extends Component {
  constructor(props) {
    super(props);
    this.state = {

        recept_tipus_id: '',
        elkeszites:"",
        recept_hozzavalok:"",
        etel_nev:"",
        //etel_tipus_nev:""
    };
  }

felvitel=async ()=>{
    //alert("megnyomva a gomb")

    
    let bemenet={
      bevitel1:this.state.recept_tipus_id,
      bevitel2:this.state.elkeszites,
      bevitel3:this.state.recept_hozzavalok,
      bevitel4:this.state.etel_nev,
     // bevitel5:this.state.etel_tipus_nev

    
    }

    fetch('http://localhost:8080/recept_felvitel',{
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
       
    )
    .then((response) => response.text())
    .then((szoveg) => {

    alert("A felvitel sikeresen megtörtént!")
     this.props.frissit() 

})
    
}


  render() {
    return (
    <View style = {{backgroundColor:'darkgrey',width:'80%',borderRadius:20,alignSelf:'center',borderColor:'black'}}>
      <View style={{padding: 10}}>
          <Text style={{padding: 10, fontSize: 22,color:'white',textAlign:'center'}}>
          Recept típus azonosító:
          </Text>
        <TextInput
          placeholderTextColor="white"
          style={{height: 40,width:'50%',alignSelf:'center',backgroundColor:'black',borderColor:'black',color:"white",textAlign:'center'}}
          placeholder=""
          onChangeText={(recept_tipus_id) => this.setState({recept_tipus_id})}
          value={this.state.recept_tipus_id}
        />

<Text style={{padding: 10, fontSize: 22,color:'white',textAlign:'center'}}>
               Elkészítés:
          </Text>
        <TextInput
          placeholderTextColor="white"
          style={{height: 40,width:'50%',alignSelf:'center',backgroundColor:'black',borderColor:'black',color:"white",textAlign:'center'}}
          placeholder=""
          onChangeText={(elkeszites) => this.setState({elkeszites})}
          value={this.state.elkeszites}
        />

<Text style={{padding: 10, fontSize: 22,color:'white',textAlign:'center'}}>
              Hozzávalók:
          </Text>
        <TextInput
          placeholderTextColor="white"
          style={{height: 40,width:'50%',alignSelf:'center',backgroundColor:'black',borderColor:'black',color:"white",textAlign:'center'}}
          placeholder=""
          onChangeText={(recept_hozzavalok) => this.setState({recept_hozzavalok})}
          value={this.state.recept_hozzavalok}
        />

<Text style={{padding: 10, fontSize: 22,color:'white',textAlign:'center'}}>
              Étel neve:
          </Text>
        <TextInput
          placeholderTextColor="white"
          style={{height: 40,width:'50%',alignSelf:'center',backgroundColor:'black',borderColor:'black',color:"white",textAlign:'center'}}
          placeholder=""
          onChangeText={(etel_nev) => this.setState({etel_nev})}
          value={this.state.etel_nev}
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