console.log(`Задание 1 `)

let mounth=3; // prompt(`Введите число от 1 до 12`)
console.log(mounth);
let mounths = [ `Январь`, `февраль`, `март`, `Апрель`, `май`, `июнь`,`июль`, `август`, `сентябрь`, `октябрь`, `ноябрь` ,`декабрь`];

console.log(mounths[mounth-1]);


console.log(`Задание 2`)
let dostavka = 1050

let tovar1 = [15000, `Процессор`, dostavka ];
let tovar2 = [25000, `Видеокарта`, dostavka ];
let tovar3 = [5000, `Блок питания`, dostavka ];

let sum = tovar1[2]+tovar2[2]+tovar3[2]+tovar1[0]+tovar2[0]+tovar3[0]
console.log(`Общая сумма товара равна ${sum}`);


console.log(`Задание 3`)

let arr = [25, 30, 6, 9, 8]

console.log(`Максимальное число из массива [25, 30, 6, 9, 8] равно ${Math.max(...arr)}`)
console.log(`Минимальное число из массива [25, 30, 6, 9, 8] равно ${Math.min(...arr)}`)


console.log(`Задание 4`)

arr = [
Math.floor(Math.random()*10),
Math.floor(Math.random()*10),
Math.floor(Math.random()*10),
Math.floor(Math.random()*10),
Math.floor(Math.random()*10),
]

console.log(arr)
console.log(arr.sort())
console.log(arr.sort())


console.log(`Задание 5`)
arr = ["Hi", "Hello", "Bonjour"];
console.log(arr)
arr.push(`Hola`)
console.log(arr)


console.log(`Задание 6 `)
let a = [`a`, `b`, `c`];
let b = [1, 2, 3];
console.log (`Массив a = ${a}`)
console.log (`Массив b = ${b}`)
console.log(a.concat(b))


console.log(`Задание 7`)

arr = [1, 2, 3]
console.log(arr)
console.log(arr.reverse())


console.log(`Задание 8`)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
console.log(fruits.includes(`Banana`))



console.log(`Задание 9`)
const array = [2, 9];
console.log(array)






