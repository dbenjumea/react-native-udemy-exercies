import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewStyleOne} />
            <View style={styles.viewStyleTwo} />
            <View style={styles.viewStyleThree} />
        </View>
    );
};

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth : 3,
        borderColor : 'black',
        //height: 200,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewStyleOne: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewStyleTwo: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        //marginTop: 50
        alignSelf: 'flex-end'
    },
    viewStyleThree: {
        height: 50,
        width: 50,
        backgroundColor: 'blue'
    }
}); // by convention is good to have it although is not used immediately

export default BoxScreen;
