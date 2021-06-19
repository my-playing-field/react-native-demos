import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, 
  TouchableOpacity, TouchableNativeFeedback, TouchableHighlight, Button, Alert } from 'react-native';

export default function App() {

  const handlePress = () => {
    console.log("Text pressed");
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Button color="orange" title="Click me" onPress={() => Alert.alert("My title","My message",[
        {text: "Yes", onPress : () => console.log('Yes')},
        {text: "No", onPress : () => console.log('No')}
      ])}></Button>
      
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
