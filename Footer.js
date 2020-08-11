// STATELESS COMPONENT EXAMPLE //

import React, {Component} from 'react';
import { View, Text } from 'react-native';

// class Footer extends Component{
//     render(){
//         return(
//             <View>
//                 <Text>{`\n\n`}</Text>
//                 <Text>footer.</Text>
//             </View>
//         )
//     }
// }

// const Footer = () => {
//     return(
//             <View>
//                 <Text>{`\n\n`}</Text>
//                 <Text>footer.</Text>
//             </View>
//     )
// };

const Footer = () => 
    <View>
        <Text>{`\n\n`}</Text>
        <Text>footer.</Text>
    </View>;  // stateless kullanımında en tezmiz hali

export default Footer;