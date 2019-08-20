import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

// state (different than the component state) --> {red: number, green: number, blue: number }
// action (howToChangeStateObject) 
//          --> increasing or decreasing the color
//          --> { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
const reducer = (state, action) => {
    switch(action.colorToChange) {
        case 'red':
            // never going to do state.red = state.red - 15 (change value directly)
            // return { ...state, red: state.red + action.amount } // return a new object with the new state object
            // in previous line:
            //  --> '{' create new object
            //  --> '...state' copy all values from state in new object
            //  --> 'red:' property red will be set with state.red + action.amount
            return (state.red + action.amount > 255 || state.red + action.amount < 0)
            ? state
            : { ...state, red: state.red + action.amount }
        case 'green':
                return (state.green + action.amount > 255 || state.green + action.amount < 0)
            ? state
            : { ...state, green: state.green + action.amount }
        case 'blue':
                return (state.blue + action.amount > 255 || state.blue + action.amount < 0)
            ? state
            : { ...state, blue: state.blue + action.amount }
        default:    
            return state;
    }
};

const SquareScreen = () => {
    // state is the current state and every time the reducer is called is like to call setState
    // dispatch is like a 'runMyReducer', it is run and it is pass in an argument to be used as an action object
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0 });
    // console.log(state); // red: 0, green: 0, blue: 0 
    const { red, green, blue } = state; // using destructiring where red = state.red, green = state.green, blue = state.blue

    return (
        <View>
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT }) } 
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT }) }
                color="Red" />
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT }) } 
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT }) }
                color="Green" />
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT }) } 
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT }) }
                color="Blue" />

            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
        </View>
    );
};

const styles = StyleSheet.create({}); // by convention is good to have it although is not used immediately

export default SquareScreen;