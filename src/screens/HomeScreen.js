import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

// props inside the parentesis means that props is being received from another component which calls this one
// const HomeScreen = props => { // to make reference to the general object, but if we want a specific attribute..
const HomeScreen = ({ navigation }) => { // we use this one

  return ( 
          <View>
            <Text style={styles.text}>Hello World</Text>
            <Button 
              title="Go to Components Demo" 
              onPress={ () => navigation.navigate('Components')}
              // onPress={ () => props.navigation.navigate('Components')}
              />
              <Button 
              title="Go to List Demo" 
              onPress={ () => navigation.navigate('List')}
              // onPress={ () => props.navigation.navigate('List')}
              />

              <Button 
              title="Go to Image Demo" 
              onPress={ () => navigation.navigate('Image')}
              // onPress={ () => props.navigation.navigate('List')}
              />
            {/* <TouchableOpacity onPress={ () => props.navigation.navigate('List')}>
              <Text>Go to List Demo</Text>
            </TouchableOpacity> */}
          </View>);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
