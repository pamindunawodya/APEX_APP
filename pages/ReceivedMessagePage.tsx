import { ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button, TextInput } from "react-native-paper";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";




const EditCode = () => {

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
    { id: 'xxx-xxx-xxx', key: '13' }

  ]);



return(
 <View style={{alignItems:'center'}}>
  <View style={styles.header}>
  <FontAwesomeIcon icon={faArrowLeft} style={styles.backIcon} />
  <Text style={styles.title}>Received Message</Text>
</View>



<View style={{}}>
        <ScrollView style={styles.section}>
          {
            Id.map(item => (
              <TouchableHighlight
                key={item.key}
                onPress={() => handlePress(item)} // handlePress function to handle touch events
                underlayColor="transparent" // Customize the color when touched
              >
                <View style={styles.itemContainer}>
                  <Text style={styles.item}>{item.id}</Text>
                  <FontAwesomeIcon icon={faArrowLeft} style={styles.icon} />
                </View>
              </TouchableHighlight>
            ))
          }
        </ScrollView>
      </View>


</View>

)
}
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical:19,
    alignSelf:'center',
    marginHorizontal:100

    
  },header:{
    
    flexDirection:'row',
  },
  backIcon:{
    fontSize: 30,
    color: '#000000',
    marginVertical:25,
  },
  searchfield:{
   
    width:320,
    height:35,
    borderRadius:20
    
  },

  buttonContainer:{
    marginTop:10,
    flexDirection:'row',
    gap:10,
   alignSelf:'flex-end',
   marginRight:50,
   
  },
  item: {
    marginTop: 5,
    padding: 10,
    color: 'black',
    fontSize: 20,
  },
  section: {
    width:320,
   
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
    color: 'red',
  },
  container: {
    flex: 1,
  },
  // Style for the custom scroll bar
  scrollBar: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust opacity and color as needed
    borderRadius: 5,
    width: 6,
    right: 5,
    top: 5,
    bottom: 5,
  },


  
});

export default EditCode;