import React from 'react';                          // How different components work together, by importing 'React' we are saying to import the whole react library
import {Text, StyleSheet, View} from 'react-native';      // Take information from those components and use them to actually show content on the mobile device

const ComponentsScreen = () => {
    //const greeting = 'Bye there!';
    const name = 'Dani';
    //const greeting = { color: 'red' } // It will not work, JS objects cannot be shown in a HTML element, only strings, digits and arrays.

    return( 
        <View>
            <Text style={styles.textStyle}>Getting started with react native!</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}!</Text>
        </View>);
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;