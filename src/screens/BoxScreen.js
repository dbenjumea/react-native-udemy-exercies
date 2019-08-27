import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth : 3,
        borderColor : 'black',
    },
    textStyle: {
        flex : 1,
        justifyContent : 'center',
        borderWidth : 10,
        borderColor : 'red',
        margin: 20,
        padding: 20,
    }
}); // by convention is good to have it although is not used immediately

export default BoxScreen;
