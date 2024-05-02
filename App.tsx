import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { useState } from 'react';
import { Appbar } from "react-native-paper";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faChevronRight, faTruckArrowRight } from '@fortawesome/free-solid-svg-icons';


const App = () => {

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
          <Text style={styles.title}>Send Messages</Text>
        </View>


      </View>
      <View style={styles.section}>
        <ScrollView >
          {
            Id.map(item => (
              <TouchableHighlight
                key={item.key}
                onPress={() => handlePress(item)} // handlePress function to handle touch events
                underlayColor="transparent" // Customize the color when touched
              >
                <View style={styles.itemContainer}>
                  <Text style={styles.item}>{item.id}</Text>
                  <FontAwesomeIcon icon={faArrowRight} style={styles.icon} />
                </View>
              </TouchableHighlight>
            ))
          }
        </ScrollView>
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
  header:{
    
    flexDirection:'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginLeft: 120,
    

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
  backIcon:{
    fontSize: 30,
    color: '#000000',
    marginLeft:10,
    marginTop:5
  }
});
export default App;