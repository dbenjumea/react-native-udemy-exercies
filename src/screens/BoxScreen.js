import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.textStyle}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth : 3,
        borderColor : 'black',
        //alignItems: 'center'
        flexDirection: 'row', // column as well
        height: 200,
        alignItems: 'center'
    },
    textStyle: {
        borderWidth : 3, // works different in Android and iOS - iOS border increases to outside while in Android increases to inside, so in Android if you hve text aligned to left or right will get mixed with the border if it is thick, in Android has to be played with the padding, etc.
        borderColor : 'red',
    }
}); // by convention is good to have it although is not used immediately

export default BoxScreen;
