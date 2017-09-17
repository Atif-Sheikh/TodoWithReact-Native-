import React from 'react';
import { li, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { Container, Header, Content, Footer, Text } from 'native-base';
import Home from './components/Home';
import About from './components/About';

export default class App extends React.Component {
  constructor (){
    super();
    this.state = {
      currentName : '',   
      names: [{name:'Atif'}, {name:'Kashif'}]
    }
  }
  _onChange = (e) => {
    this.setState({
      currentName :  e
    })
  }

  _onDelete = (index) => {
    let names = this.state.names;
    names.splice(index, 1);
    this.setState({
      names
    })
  }

  _onPress = (e) => {
    e.preventDefault();
    let name  = this.state.names;
    let currentName = this.state.currentName;
    if(currentName){
      name.push({name: currentName}); 
      this.setState({
        names: name,
        currentName: ''
      })
    }
    else{
      alert('Please Enter Todo First!')
    }    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20}}>Todo App with Raect-Native!</Text>
        <Home _onPress={this._onPress} currentName={this.state.currentName} 
        _onChange={this._onChange} />
        {
            this.state.names.map((name, index) => {
              return <RenderItem name={name.name} index={index} key={index} _onDelete={this._onDelete} />
            })
          }
        <About name='My About Component!' />
      </View>
    )
  }
}
class RenderItem extends React.Component { 
  render(){
    return (
      <View style={styles._View}>
      <Button style={styles._Button} title='Delete' onPress={(e) => {this.props._onDelete(this.props.index)}} />

      <Container>
        <Header />
        <Content padder>
          <Text>
          { this.props.name }
          </Text>
        </Content>
        <Footer />
      </Container>

      </View>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%'
  },
  _View: {
    flex: 0, 
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  _Text: {
    width: 40,
    height: 20, 
    margin: 5
  },
  _Button: {
    width: 20,
    height: 5,
    margin: 15,
    marginTop: 10
  }
});




// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Platform,
//   TextInput,
//   View,
//   TouchableNativeFeedback,
//   Text
// } from 'react-native';
// export default class fbAuthPhoneTry extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "",
//       todos: ['hello', 'world']
//     };
//   }
//   press = () => { this.setState(prev => ({ todos: prev.todos.concat(prev.text), text: '' })) }
//   delete = (i) => { this.setState(prev => ({ todos: prev.todos.filter((a, ind) => i !== ind) })) }
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.row}>
//           <View style={styles.col8}>
//             <TextInput onChangeText={a => this.setState({ text: a })} value={this.state.text} />
//           </View>
//           <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#fff')} onPress={this.press} style={[styles.col4]}><View style={styles.btn}><Text style={{ color: '#fff' }}>Add</Text></View></TouchableNativeFeedback>
//         </View>
//         {
//           this.state.todos.map((el, i) => (
//             <TouchableNativeFeedback key={i} background={TouchableNativeFeedback.Ripple('#aaa')}>
//               <View style={[styles.row, { backgroundColor: '#eee' }]}>
//                 <View style={styles.col8}>
//                   <Text>{el}</Text>
//                 </View>
//                 <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#fff')} onPress={this.delete.bind(null, i)} style={[styles.col4]}><View style={styles.btnDenger}><Text style={{ color: '#fff' }}>Delete</Text></View></TouchableNativeFeedback>
//               </View>
//             </TouchableNativeFeedback>
//           ))
//         }
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     marginTop: 25,
//     flex: 1,
//     padding: 20
//   },
//   row: {
//     flexDirection: 'row'
//   },
//   col4: {
//     flex: 4,
//     height: 50,
//     // alignItems: 'center',
//     margin: 10,
//     justifyContent: 'center'
//   },
//   col8: {
//     flex: 8,
//     margin: 10,
//     height: 50,
//     // alignItems: 'center',
//     justifyContent: 'center'
//   },
//   btn: {
//     // height: "100%",
//     margin: 10,
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: 'indigo',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   btnDenger: {
//     margin: 10,
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: '#CF1020',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });
// AppRegistry.registerComponent('fbAuthPhoneTry', () => fbAuthPhoneTry);
