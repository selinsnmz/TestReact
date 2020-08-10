// import React from 'react';
// import { Text, View } from 'react-native';

// const HelloWorldApp = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//       }}>
//       <Text>Hello, world!</Text>
//     </View>
//   )
// }
// export default HelloWorldApp;
const data =[1,2,3,4,5];

console.log(...data); //output: 1 2 3 4 5

console.log(data); // output: [1,2,3,4,5]

const newData = [0, ...data];

console.log(...newData);
console.log(newData);

const obj = {
    name: 'selin',
    surname: 'SÖNMEZ'
}
const newObj = {
    age: 25,
    ...obj
};
// console.log(...newObj);
console.log(newObj);