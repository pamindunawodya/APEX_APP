import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';




const App = () => {


  return (

    <View style={styles.container}>
      <Text style={styles.title}>New Message</Text>

      <Text style={styles.Subtext}>Id : xxx-xxx-xxx</Text>
      <TextInput style={styles.input} placeholder="Enter task" />

      <TouchableOpacity
        style={styles.addButton} >
        <Text style={styles.addButtonText}></Text>
      </TouchableOpacity>


    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    marginTop: 10,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
    textAlign: "center"
  },

  Subtext: {
    padding: 10,
    marginBottom: 10,
    fontSize: 20,
    color: "black"
  },
  input: {
    borderWidth: 3,
    borderColor: "black",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
    color: 'black'
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    color: 'black'
  },
  addButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,


  },
  addButtonText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    color: 'white'

  },
});
export default App;
