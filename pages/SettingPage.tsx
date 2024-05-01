import { ScrollView,Image,Button, StyleSheet, Text, TouchableHighlight, View, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const logo= require("./images/slt-logo.png")




const Settings = () => {

 

  return (
    <View style={{alignItems:'center'}}>

        <Text style={{fontSize:30,fontWeight:'bold',marginVertical:20,elevation:15,}}>Settings</Text>

        <View style={{marginTop:80,width:350}}>
       
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={{fontSize:22,color:"black",fontWeight:500}}>Code List</Text>
            <FontAwesomeIcon icon={faArrowRight} />
          </TouchableOpacity>


         
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={{fontSize:22,color:"black",fontWeight:500}}>ID List</Text>
            <FontAwesomeIcon icon={faArrowRight} style={{}}/>
          </TouchableOpacity>
       

       

          
        </View>
        <Image style={{width:150,height:120,marginTop:450}} source={logo}/>
        
    </View>
  );
}
const styles = StyleSheet.create({

  buttonContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop:20,
    height:40,
    paddingLeft:15,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
  },
  
  
});
export default Settings;