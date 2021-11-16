import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';


export default function GithubScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../logotipo-de-github.png')} />    
      <Text style={styles.paragraph}> @Felipe-Perez21</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#a3b363',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 200,
    width: 200,
  }

});