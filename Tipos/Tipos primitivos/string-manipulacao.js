//MANIPULAR STRINGS DE TEXTOS
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

//ALTERAR MAISCULAS PARA MINUSCULAS
const cidade1 = "belo horizonte";
const input1 = "Belo Horizonte";

const inputMinusculo = input1.toLowerCase();

console.log(cidade1 === inputMinusculo); // true
//CONTAR QUANTAS LETRAS TEM UMA PALAVRA
//qualquer inserção de texto que exija uma quantidade mínima de caracteres, como uma senha ou um nome. A propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém:
const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres

//RETIRAR ESPAÇOS

//JUNTAR DUAS STRINGS