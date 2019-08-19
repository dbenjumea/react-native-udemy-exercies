import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList } from 'react-native';

// const ImageDetail = (props) => {
const ColorScreen = ({imageSource, title, score}) => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button title="Add a Color"
            onPress={() => {
                // setColors([...colors, randomRgb()]); where '...colors' is an array that is set to the new one, and randomRgb will add a new element to the array
                // in real is a way to re-write an array by state because array.push is like counter++, React is not able to detect the changes of the object.
                setColors([...colors, randomRgb()]);
            }}/>
            {/* we add the style like this instead of as StyleSheet because we are going to generate it dinamically*/}
            <FlatList 
            data={colors}
            keyExtractor={ (item) => item}
            renderItem={ ({ item }) => {
                return <View style={{ height: 100, width: 100, backgroundColor: item}} />
            }}/>
        </View>
    );
};
const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    // the `` are used to return template strings
    // the ${} are used to inject/interpolate the const inside.
    return `rgb(${red}, ${green}, ${blue})`; // the `` are used to return template strings
};
const styles = StyleSheet.create({}); // by convention is good to have it although is not used immediately

export default ColorScreen;