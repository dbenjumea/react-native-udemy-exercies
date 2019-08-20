import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ onIncrease, onDecrease, color }) => {
    return (
        <View>
            <Button title={`Increase ${color}`} onPress={()=> onIncrease()} />
            <Button title={`Descrease ${color}`} onPress={()=> onDecrease()} />
        </View>
    );
};

const styles = StyleSheet.create({}); // by convention is good to have it although is not used immediately

export default ColorCounter;