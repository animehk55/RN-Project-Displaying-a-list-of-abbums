import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  const { headerStyle, textStyle } = styles;

  return <View style={headerStyle}><Text style={textStyle}>Albums</Text></View>;
};

const styles = StyleSheet.create({
  headerStyle: {
    // display: 'flex',
    
    justifyContent: 'center',  //checkout why not working
    alignItems: 'center',  //checkout why not working
    backgroundColor: '#D5D8DC',
    padding: 10,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    color: 'red', 
    fontSize: 30,
  }
});

export default Header;