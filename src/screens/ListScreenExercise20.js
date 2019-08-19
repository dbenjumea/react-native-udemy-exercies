import React from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';

const ListScreenExercise20 = () => {

    const friends = [
        { name: '1', age: 20},
        { name: '2', age: 45},
        { name: '3', age: 32},
        { name: '4', age: 27},
        { name: '5', age: 53},
        { name: '7', age: 30}
    ]

    return (
        <FlatList 
            keyExtractor = { friends => friends.name }
            data = { friends }
            renderItem = { ({ item }) => 
                <Text style={styles.textStyle}>Friend {item.name} - Age {item.age}</Text>
            }
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreenExercise20;