import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    // this is not the correct way because react does not watch a variable automatically
    // so although the value of the counter is changing, React does not show
    // anything on the screen. If you want attach an track to the variable you need to
    // work with 'useState'
    //let counter = 0; 
    const [counter, setCounter] = useState(0); // correct way to track a value to be rendered
    // The second time that react rerenders, knows that the value should not be 0, this is only for the first rendering.
    // Every child components will be rerendered also when React detects that the value has changed.
    // [counter, setCounter] = useState(0); follows the functionality of ES6 of
    // const array = [red, green]
    // [colorOne, colorTwo] = array THEN colorOne will be 'red' and colorTwo wil be 'green'
    // useState in a functional component replaces the value
    // this.setState of a class component, merges the updated fields into the object
    
    // state sometimes will be sent to the child, so it will become in a props
    // A (Parent) has B, C, D children. A send state to B, C, D. So B, C, D will have its own pieces of state.
    
    return (
        <View>
            <Button title="Increase" onPress={() => {
                // counter++; // Do not do this, React do not detect magically that we change the variable, we dont modify a state variable directly
                setCounter(counter+1);
            }} />
            <Button title="Decrease" onPress={() => {
                // counter--; 
                setCounter(counter-1); // setCounter does not updates the value rightaway, it does it in short time inside the method
                // every time setCounter is executed, React will automatically re-run the whole function component
            }}/>
            <Text>Current Count: {counter} </Text>
        </View>
    );

};

const styles = StyleSheet.create({});

export default CounterScreen;