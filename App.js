import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, 
  TouchableOpacity, TouchableNativeFeedback, TouchableHighlight, Button } from 'react-native';

export default function App() {

  const handlePress = () => {
    console.log("Text pressed");
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Button color="orange" title="Click me" onPress={() => console.log('Button tapped')}></Button>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
