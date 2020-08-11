import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import NewsItem from './NewsItem';
import NewsForm from './NewsForm';

class News extends Component{
    // static propTypes = {
    //     news: PropTypes.array,  // .isRequired kullanımı: doldurulması zorunlu
        
    // };

    static defaultProps = {
        name: "Ahmet"
    };


    render(){
        let a = 2+2;
        
        // const title = "react js";
        // const description = "react description";
        const elements = this.props.news.map(news => 
        <NewsItem 
            key={news.id}
            title={news.title}  
            description={news.description}/>
            );

        return(
            <View>
                <Text></Text>
                <Text>{a}</Text>
                <Text>{3+3}</Text>
                {/* <NewsItem title={news[0].title}  description={news[0].description}/>
                <NewsItem title={news[1].title}  description={news[1].description}/>
                <NewsItem title={news[2].title}  description={news[2].description}/> */}
                <Text>{this.props.name}</Text>
                {elements}
                <NewsForm/>
                
            </View>
        );
    }
}
export default News;