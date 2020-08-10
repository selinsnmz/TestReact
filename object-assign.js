// const data  = {
//     name: 'Selin'
// };

// const data2 = {
//     surname: 'SÖNMEZ',
//     age: '21'
// };

// const data3 = {
//     city: 'Adana',
//     age: '25' // Aynı değişkenlerde en son gelen bi öncekinin yerine geçer ama sıra değişmez
// }

// const result = Object.assign(data, data2, data3);

// console.log(result);

// const data = { name: 'mehmet'};
// // const data2 = data;

// const data2 = Object.assign({}, data); // ilk data değeri değişmez
// data2.name = 'Ahmet'; // ilk data değeride değişir

// console.log('data:', data); 
// console.log('data2', data2); // output: Ahmet

const info = {
    name: 'selin',
    city: {
        name: 'İstanbul',
        country: 'TUrkey'
    }
};
// const info2 = Object.assign({}, info);
// info2.city.name = 'ADANA'; // ikiside değişir iç içe objelerde çalışmaz

const info2 = JSON.parse(JSON.stringify(info));
info2.city.name = 'ADANA'; // info aynı kalır

console.log('data:', info); 
console.log('data2', info2);