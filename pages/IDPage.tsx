import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { useState } from 'react';
import { Appbar, FAB, Searchbar } from "react-native-paper";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faChevronRight, faCoffee, faMagnifyingGlass, faPen, faTruckArrowRight } from '@fortawesome/free-solid-svg-icons';


const IdPage = () => {

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

  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <SafeAreaProvider>
      <View style={styles.container}>

        <View style={styles.header}>
          <FontAwesomeIcon icon={faArrowLeft} style={styles.backIcon} />
          <Text style={styles.title}>ID</Text>
        </View>

        <Searchbar style={styles.searchbar}
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}

        />



        <View style={styles.section}>
          <ScrollView >
            {
              Id.map(item => (
                <TouchableHighlight
                  key={item.key}
                  onPress={() => handlePress(item)}
                  underlayColor="transparent"
                >
                  <View style={styles.itemContainer}>
                    <Text style={styles.item}>{item.id}</Text>
                    <FontAwesomeIcon icon={faPen} size={15} color="black" />
                  </View>
                </TouchableHighlight>
              ))
            }
           
          </ScrollView>
          <FAB
              label="+"
              style={styles.fab}
              onPress={() => console.log('Pressed')}
            />
             <Text style={{ color: 'black', fontSize: 24 }}>+</Text>
        </View>
      </View>

    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
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
    marginLeft: 170,
    marginBottom: 10


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
    marginTop: 20
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
  searchbar: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#f5f5f5'
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom:50,
    backgroundColor: '#FFFFFF',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 1,
}
});
export default IdPage;
