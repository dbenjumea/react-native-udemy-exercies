import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [password, setName] = useState('');

    return (
        <View>
            <Text>Enter Password: </Text>
            <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password} // The parent TextScreen gives the value to the child
            onChangeText = {(newValue) => setName(newValue)} // but is the child who changes that value and the parent just listen
            />
            { password.length < 4 ? <Text>Password must be 4 characteres</Text> : null }  {/* // turnary expression */}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
}); // by convention is good to have it although is not used immediately

export default TextScreen;
