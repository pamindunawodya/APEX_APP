import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { useState } from 'react';




const App = () => {

  const handleButtonPress = (buttonName: string) => {
    console.log(`Button ${buttonName} pressed`);
    // Add your logic for each button here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Messages</Text>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    color: 'black',
  },

});
export default App;