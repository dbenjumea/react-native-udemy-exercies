import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const [redColor, setRedColor] = useState(0);
    const [greenColor, setGreenColor] = useState(0);
    const [blueColor, setBlueColor] = useState(0);

    const setColor = (color, change) => {
        // color === 'red', 'green', 'blue'
        // change === +15, -15
        switch(color) {
            case 'redColor':
                    console.log("in red color");
                (redColor + change > 255 || redColor + change < 0) ? null : setRedColor(redColor + change);
                return;
            case 'greenColor':
                (greenColor + change > 255 || greenColor + change < 0) ? null : setGreenColor(greenColor + change);
                return;
            case 'blueColor':
                (blueColor + change > 255 || blueColor + change < 0) ? null : setBlueColor(blueColor + change);
                return;
            default:
                return;
        }
    };
    console.log(redColor);
    return (
        <View>
            <ColorCounter 
                onIncrease={() => setColor('redColor', COLOR_INCREMENT)} 
                onDecrease={() => setColor('redColor', -1 * COLOR_INCREMENT )}
                color="Red" />
            <ColorCounter 
                onIncrease={() => setColor('greenColor', COLOR_INCREMENT)} 
                onDecrease={() => setColor('greenColor', -1 * COLOR_INCREMENT)}
                color="Green" />
            <ColorCounter 
                onIncrease={() => setColor('blueColor', COLOR_INCREMENT)} 
                onDecrease={() => setColor('blueColor', -1 * COLOR_INCREMENT)}
                color="Blue" />

            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${redColor}, ${greenColor}, ${blueColor})`}}/>
        </View>
    );
};

const styles = StyleSheet.create({}); // by convention is good to have it although is not used immediately

export default SquareScreen;