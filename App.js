import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import News from './News';
// import NewsItem from './NewsItem';

console.log("AŞSDFLSDKF")
export default class App extends Component {
  render(){
    const news = [{
      id:1,
      title: "title 1",
      description: "description 1"
  },
  {
    id:2,
    title: "title 2",
    description: "description 2"
  },
  {
    id:3,
    title: "title 3",
    description: "description 3"
  }];
    return (
      <View >
        <Text> APPXCKVÇXÖCVMDKDKDKKDKQQQQQQQ </Text>
        
        <News news={news}/>
      </View>
    );
  }
}