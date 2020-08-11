import React, {Component} from 'react';
import { View, Button } from 'react-native';

class NewsForm extends Component{
    addButton(){
        console.log('hello');
    };

    render(){
        return(
            <View>
                <Button title="add" onPress={this.addButton} >Add</Button>
            </View>
        )
    }
}

export default NewsForm;