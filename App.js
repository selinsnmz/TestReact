import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import News from './News';
import Counter from './Counter';
// import NewsItem from './NewsItem';


export default class App extends Component {
 
  // constructor(){
  //   super();
  //   this.state = {  // before react version 16
  //     name: "Selin"
  //   }
  // }

  // state = {
  //   name: 'Selin' // with react version 16
  // };
  
  // changeName(){
  //   this.setState({
  //     name: 'Zeynep'
  //   });
  //   console.log(this.state);
  // }

  render(){
  //   const news = [{
  //     id:1,
  //     title: "title 1",
  //     description: "description 1"
  // },
  // {
  //   id:2,
  //   title: "title 2",
  //   description: "description 2"
  // },
  // {
  //   id:3,
  //   title: "title 3",
  //   description: "description 3"
  // }];
    return (
      <View >
        {/* <Text>{this.state.name}</Text> 
        <Button title="Change The Name" onPress={this.changeName.bind(this)}></Button> */}
        {/* <News news={news} /> */}

        <Counter/>
      </View>
    );
  }
}