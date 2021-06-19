import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableNativeFeedback, TouchableHighlight } from 'react-native';

export default function App() {

  const handlePress = () => {
    console.log("Text pressed");
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native
      </Text>
      <TouchableHighlight onPress={() => console.log('Image tapped')}>
      <Image
        source={{
        width: 200,
        height: 300,
        uri: 'https://picsum.photos/200/300'}}/>
      </TouchableHighlight>
      
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
