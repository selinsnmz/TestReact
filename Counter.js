import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';


class Counter extends Component{
    state = {
        number: 0
    };

    decrement = () =>{
        this.setState ({
            number: --this.state.number
        })
    };

    increment = () =>{
        this.setState ({
            number: ++this.state.number
        })   
    };

    render(){
        return(
            <View>
                <Text >{this.state.number}</Text>
                <Button title="-" onPress={this.decrement.bind(this)}></Button>
                <Button title="+" onPress={this.increment.bind(this)}></Button>
            </View>
               
        )
    }
}

export default Counter;