//Can store multiple values

//CRIANDO UM ARRAY VAZIO - create an empty array
const arr = Array();
console.log(arr) // []

//USING SQUARE BRACKTES []
const arr2= []
console.log(arr2)

//CRIANDO UM ARRAY COM VALORES - create an array with values
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

//OBTENDO O TAMANHO DE UM ARRAY - print the array and its lenght
console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)


//ARRAY COM DIFERENTES TIPOS DE DADOS
//array can have items of diferent data types

const arr3 = [
    "Anne Karoline",
    28,
    true,
    { country: "Brasil", city: "Belo Horizonte"},
    { skills: ["HTML", "CSS", "JS", "REACT", "PYTHON"]}
]
console.log(arr3);