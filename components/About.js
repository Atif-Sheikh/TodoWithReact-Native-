import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class About extends React.Component {
    render (){
        return (
            <View style={styles.footer}>
                <Text> {this.props.name} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        // flex: 1,
        // flexDirection: 'end',
        width: '100%', 
        height: '5%'
    }
})