import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

// state (different than the component state) --> {red: number, green: number, blue: number }
// action (howToChangeStateObject) 
//          --> increasing or decreasing the color
//          --> { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }
const reducer = (state, action) => {
    switch(action.type) {
        case 'change_red':
            // never going to do state.red = state.red - 15 (change value directly)
            // return { ...state, red: state.red + action.amount } // return a new object with the new state object
            // in previous line:
            //  --> '{' create new object
            //  --> '...state' copy all values from state in new object
            //  --> 'red:' property red will be set with state.red + action.amount
            return (state.red + action.payload > 255 || state.red + action.payload < 0)
            ? state
            : { ...state, red: state.red + action.payload }
        case 'change_green':
            return (state.green + action.payload > 255 || state.green + action.payload < 0)
            ? state
            : { ...state, green: state.green + action.payload }
        case 'change_blue':
            return (state.blue + action.payload > 255 || state.blue + action.payload < 0)
            ? state
            : { ...state, blue: state.blue + action.payload }
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
                onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT }) } 
                onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT }) }
                color="Red" />
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT }) } 
                onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT }) }
                color="Green" />
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT }) } 
                onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT }) }
                color="Blue" />

            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
        </View>
    );
};

const styles = StyleSheet.create({}); // by convention is good to have it although is not used immediately

export default SquareScreen;