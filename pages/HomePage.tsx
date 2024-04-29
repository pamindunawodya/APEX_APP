import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';




const HomePage = () => {

  const handleButtonPress = (buttonName: string) => {
    console.log(`Button ${buttonName} pressed`);
    // Add your logic for each button here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>APEX</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('1')}>
          <Image source={require('../AwesomeProject/images/send.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('2')}>
        <Image source={require('../AwesomeProject/images/recevied.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Received</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('3')}>
        <Image source={require('../AwesomeProject/images/setting.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Setting</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={require('../AwesomeProject/images/sltLogo.png')} style={styles.logoImage} />
      </View>
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
    fontSize: 40,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 20,
    color: 'black',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 100,
  },
  button: {
    width: 300,
    height: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    borderRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    marginLeft: 10,
  },
  buttonImage: {
    width: 90,
    height: 90,
    marginRight:100,
  },
  logoContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  logoImage: {
    width: 150,
    height: 50,
  },
});
export default HomePage;
