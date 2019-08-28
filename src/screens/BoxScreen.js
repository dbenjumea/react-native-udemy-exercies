import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textthreeStyle}>Child #3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth : 3,
        borderColor : 'black',
        //alignItems: 'center'
        //flexDirection: 'row', // column as well
        height: 200,
    },
    textOneStyle: {
        borderWidth : 3, // works different in Android and iOS - iOS border increases to outside while in Android increases to inside, so in Android if you hve text aligned to left or right will get mixed with the border if it is thick, in Android has to be played with the padding, etc.
        borderColor : 'red',
    },
    textTwoStyle: {
        borderWidth : 3, // works different in Android and iOS - iOS border increases to outside while in Android increases to inside, so in Android if you hve text aligned to left or right will get mixed with the border if it is thick, in Android has to be played with the padding, etc.
        borderColor : 'red',
        //flex: 1 // 1 unit of space , if child 1 has 4, child 2 has 4 and child 3 has 2 = 4+4+2=10 units, so child 1 and 2 take 40% each and child 3 20%
    },
    textthreeStyle: {
        borderWidth : 3, // works different in Android and iOS - iOS border increases to outside while in Android increases to inside, so in Android if you hve text aligned to left or right will get mixed with the border if it is thick, in Android has to be played with the padding, etc.
        borderColor : 'red',
    }
}); // by convention is good to have it although is not used immediately

export default BoxScreen;
