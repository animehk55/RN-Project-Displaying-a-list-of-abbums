import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './src/components/Header';


const App = () => {
  const { headerStyle } = styles;
    return (
      <View>
        <Header />
      </View>
    );
  };

const styles = StyleSheet.create({
  headerStyle: {
    color: 'red'
  }
});

export default App;
