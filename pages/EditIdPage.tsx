import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import { Appbar, Button } from "react-native-paper";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faChevronRight, faTruckArrowRight } from '@fortawesome/free-solid-svg-icons';


const EditIdPage = () => {

  const handlePress = (item: { id: string; key: string; }) => {
    // Do something when the item is pressed
    console.log("Item pressed:", item);
  };


  const [Id, setIds] = useState([
    { id: 'xxx-xxx-xxx', key: '1' },
    { id: 'xxx-xxx-xxx', key: '2' },
    { id: 'xxx-xxx-xxx', key: '3' },
    { id: 'xxx-xxx-xxx', key: '4' },
    { id: 'xxx-xxx-xxx', key: '5' },
    { id: 'xxx-xxx-xxx', key: '6' },
    { id: 'xxx-xxx-xxx', key: '7' },
    { id: 'xxx-xxx-xxx', key: '8' },
    { id: 'xxx-xxx-xxx', key: '9' },
    { id: 'xxx-xxx-xxx', key: '10' },
    { id: 'xxx-xxx-xxx', key: '11' },
    { id: 'xxx-xxx-xxx', key: '12' },

  ]);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>

        <View style={styles.header}>
          <FontAwesomeIcon icon={faArrowLeft} style={styles.backIcon} />
          <Text style={styles.title}>Edit ID</Text>
        </View>


      </View>
      <View style={styles.section}>
        <View style={styles.imageContainer}>
          <Image source={require('../AwesomeProject/images/editId.png')} style={styles.buttonImage} />
        </View>
        <TextInput style={styles.input}
          placeholder=" "

        />
        <Button 
          style={styles. editButton}
        >
          <Text style={styles.addButtonText}>Edit</Text>
        </Button >

        <Button 
          style={styles.cancleButton}
        >
          <Text style={styles.addButtonText}>Cancle </Text>
        </Button >
      </View>

    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
  },
  header: {

    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginLeft: 150,


  },
  item: {
    marginTop: 5,
    padding: 10,
    color: 'black',
    fontSize: 20,
  },
  section: {
    flex: 9,
    backgroundColor: '#ffffff',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },

  icon: {
    fontSize: 30,
    color: '#1B8301',
  },
  backIcon: {
    fontSize: 30,
    color: '#000000',
    marginLeft: 10,
    marginTop: 5
  },
  buttonImage: {
    width: 200,
    height: 200,
  },
  imageContainer: {
    alignItems: 'center', // Center horizontally
  },
  input: {
    borderWidth: 3,
    borderColor: "black",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
    color: 'black',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10
  },
  editButton: {
    width: 100,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    position: 'absolute',
    margin: 16,
    right: 120,
    top: 250,
    marginTop: 30
  },
  addButtonText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    color: 'white'
  },
  cancleButton: {
    width: 100,
  backgroundColor: 'black',
  padding: 10,
  borderRadius: 5,
  marginBottom: 10,
  position: 'absolute',
  margin: 16,
  right: 0,
  top: 250,
  marginTop: 30, 
   
  }
});
export default EditIdPage;