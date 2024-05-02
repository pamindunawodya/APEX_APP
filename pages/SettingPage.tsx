import { ScrollView,Image,Button, StyleSheet, Text, TouchableHighlight, View, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight,faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const logo= require("./images/slt-logo.png")




const Settings = () => {

 

  return (
    <View style={{alignItems:'center',flex:1}}>

        <View style={styles.header}>
          <FontAwesomeIcon icon={faArrowLeft} style={styles.backIcon} />
          <Text style={styles.title}>Send Messages</Text>
        </View>


        <View style={{marginTop:80,width:350}}>
       
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={{fontSize:22,color:"black",fontWeight:500}}>Code List</Text>
            <FontAwesomeIcon icon={faArrowRight}style={styles.rightarrow} />
          </TouchableOpacity>


         
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={{fontSize:22,color:"black",fontWeight:500}}>ID List</Text>
            <FontAwesomeIcon icon={faArrowRight} style={styles.rightarrow}/>
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
  rightarrow:{
    paddingRight:38
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical:19,
    paddingHorizontal:100
    
  },header:{
    
    flexDirection:'row',
  },
  backIcon:{
    fontSize: 30,
    color: '#000000',
    marginVertical:25
   
  }

  
});
export default Settings;