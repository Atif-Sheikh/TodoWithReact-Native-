import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View>
                {/* <Text> { this.props.name } </Text> */}
                <TextInput placeHolder='Enter Todo to Add!' style={styles.todoInput} value={this.props.currentName} onChangeText={this.props._onChange} />
                <Button title='Add Todo' onPress={ this.props._onPress} />   
            </View>
        );
    }
}

const styles = StyleSheet.create({
    todoInput: {
        width: 270,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        backgroundColor: 'black',
        height: 30,
        // borderColor: "blue",
        margin: 2, 
        // padding: 10, 
        color: 'white',
      }
})