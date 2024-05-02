import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
const logo= require("./images/oops.png")




const Network = () => {


  return (
    <View style={{alignItems:'center', flex:1,justifyContent:'center'}}>
      <Image style={{width:300,height:200}}
        source={logo}
      />
      <Text style={{fontSize:28,elevation:1}}>Oops,your connection seems </Text>
      <Text style={{fontSize:28}}>off...</Text>
      <Text style={{fontSize:18,alignSelf:'center'}}>Keep calm,light a fire and pull to refresh to try </Text>
      <Text style={{fontSize:18}}>again</Text>
    </View>
  );
};

export default Network;