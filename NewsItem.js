// import React from 'react';

// class NewsItem extends React.Component{

// }

// OR //
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class NewsItem extends Component{

    constructor(){
        super();
        console.log("hi");
    }

    render(){
        // console.log(this.props);
        const {title, description } = this.props; //2. kullanım şekli
        return(
            <View>
                <Text style={styles.title}>Hello React</Text>
                <Text style={styles.title}>BIKTIM SENDEN</Text>

                <Text>{title}</Text>
                <Text>{description}</Text>
                
                 
            </View>
        );
    }
}

export default NewsItem;
const styles = StyleSheet.create({
    title:{
        fontSize: 28,
        color: 'red'
    }
 })