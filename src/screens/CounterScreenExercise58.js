import React, {useReducer} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {...state, count: state.count + action.payload}
        case 'decrement':
            return {...state, count: state.count - action.payload}
        default:
            state;
    }
}

const CounterScreenExercise58 = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0}); 
    
    return (
        <View>
            <Button title="Increase" onPress={() => {
                dispatch({ type: 'increment', payload: COUNTER_INCREMENT });
            }} />
            <Button title="Decrease" onPress={() => {
                // counter--; 
                dispatch({ type: 'decrement', payload: COUNTER_INCREMENT });
            }}/>
            <Text>Current Count: {state.count} </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreenExercise58;