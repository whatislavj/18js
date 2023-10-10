
// task1
for (let i = 0; i <= 10; i++) {
    console.log(i)
}
console.log(" ")

let wh = 0;
while (wh <= 10) {
    console.log(wh)
    wh++
}
console.log(" ")

let dwh = 0;
do {
    console.log(dwh)
    dwh++
} while (dwh <= 10)
console.log(" ")

// task2
for (let i = 5; i--; ) {
    console.log(i)
}
console.log(" ")

// task3 
const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
} 
console.log(" ")

// task4
const str = "Azi e marti";

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
console.log(" ")

// task5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.map(num => num * 2));

console.log(numbers.filter(num => num % 2 === 0));

console.log(numbers.indexOf(7));

console.log(numbers.findIndex(num => num >= 5));

console.log(numbers.every(num => num < 20));

console.log(numbers.some(num => num > 8));

const altArray = [[1, 2], [3, 4], [5, 6]];
console.log(altArray.flat());

numbers.forEach(num => {
    console.log(num);
});

console.log(numbers.find(num => num > 5));

const moreNumbers = [11, 12, 13];
console.log([...numbers, ...moreNumbers]);

console.log(numbers.includes(3));
