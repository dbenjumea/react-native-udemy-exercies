import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
// One way to create a key (statically) - value row
// const friends = [
//     { name: 'Friend #1', key: '1' },
//     { name: 'Friend #2', key: '2' },
//     { name: 'Friend #3', key: '3' },
//     { name: 'Friend #4', key: '4' },
//     { name: 'Friend #5', key: '5' },
//     { name: 'Friend #6', key: '6' },
//     { name: 'Friend #7', key: '7' },
//     { name: 'Friend #8', key: '8' },   
//     { name: 'Friend #9', key: '9' }
// ]
const friends = [
    { name: 'Friend #1' },
    { name: 'Friend #2' },
    { name: 'Friend #3' },
    { name: 'Friend #4' },
    { name: 'Friend #5' },
    { name: 'Friend #6' },
    { name: 'Friend #7' },
    { name: 'Friend #8' },   
    { name: 'Friend #9' }
]

    return (
        <FlatList 
            horizontal={true} // to define that the scrolling should be horizontal instead of vertical
            showsHorizontalScrollIndicator={false} // To show or hide the scrollbar in the phone 
            keyExtractor={ (friend) => friend.name} // dynamically a key is created, the must used way
            data={friends} 
            // renderItem={(elements) => {
            //     // element === { item: { name: 'Friend #1' }, index: 0}
            // }} 
            renderItem={({ item }) => {
                // item: { name: 'Friend #1' }
                return <Text style={styles.textStyle}>{item.name}</Text>;
            }} 
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;