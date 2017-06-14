import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageUpload from './src/ImageUpload';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageUpload />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
