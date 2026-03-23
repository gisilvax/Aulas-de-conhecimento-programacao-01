// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

let baixarDados = require('readline-sync');
// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
//
// Pares de valores:
//   1) 10 e 10
let number1 = 10
let number2 = 10
//   2) 10 e "10"
let number3 = 10
let string10 = "10"
//   3) 0 e false
let number0 = 0
let boolean = false
//   4) null e undefined
let semNumber = null
let naoDefinido = undefined
//   5) "JS" e "JS"
let jS = 'JS'
let javaScript = 'JS'

// → Seu código aqui:
// 1)
console.log(`10 == 10 -> ${number1 == number2}`);
console.log(`10 === 10 -> ${number1 === number2}`);
// 2)
console.log(`10 == "10" -> ${number3 == string10}`);
console.log(`10 === "10" -> ${number3 === string10}`);
// 3)
console.log(`0 == false -> ${number0 == boolean}`);
console.log(`0 === false -> ${number0 === boolean}`);
// 4)
console.log(`null == undefined -> ${semNumber == naoDefinido}`);
console.log(`null === undefined -> ${semNumber === naoDefinido}`);
// 5)
console.log(`null == undefined -> ${jS == javaScript}`);
console.log(`null === undefined -> ${jS === javaScript}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Comparando com != e !==
// ------------------------------------------------------------
// Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
//
// Pares de valores:
//   1) 5 e 5
//   2) 5 e "5"
//   3) 7 e 3
//   4) true e 1

// → Seu código aqui:
// A)
console.log(5 != 5)
console.log(5 != '5')
console.log(7!= 3)
console.log(true != 1)
// B)
console.log(5 !== 5)
console.log(5 !== '5')
console.log(7!== 3)
console.log(true !== 1)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
// ------------------------------------------------------------
// a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
// c) Exiba cada resultado com template literal e verificação ternária no formato:
//    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// → Seu código aqui:
// A)
let salarioA = 3500
let salarioB = 4200
// B)
let resul1 = salarioA > salarioB
let resul2 = salarioA < salarioB
let resul3 = salarioA >= salarioB
let resul4 = salarioA <= salarioB
let resul5 = salarioA === salarioB
// C)
console.log(`Salário A (R$3.500) > Salário B (R$4.200): ${resul1}`)
console.log(`Salário A (R$3.500) < Salário B (R$4.200): ${resul2}`)
console.log(`Salário A (R$3.500) >= Salário B (R$4.200): ${resul3}`)
console.log(`Salário A (R$3.500) <= Salário B (R$4.200): ${resul4}`)
console.log(`Salário A (R$3.500) === Salário B (R$4.200): ${resul5}`)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
// b) Armazene em "temEstoque" o resultado de: estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// d) Declare "temperatura" com valor 36.5.
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
// f) Exiba cada variável usando template literal.

// → Seu código aqui:
// A)
let estoque = 0
// B)
let temEstoque = estoque > 0
// C)
let estoqueZerado = estoque === 0
// D)
let temperatura = 36.5
// E)
let febre = temperatura >= 37.6
// F)
console.log(estoque)
console.log(temEstoque)
console.log(estoqueZerado)
console.log(temperatura)
console.log(febre)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
// c) Exiba cada resultado com template literal.

// → Seu código aqui:
// A)
let num1 = baixarDados.questionInt('Digite um numero: ')
let num2 = baixarDados.questionInt('Digite outro numero: ')
// B)
let apr1 = num1 > num2
let apr2 = num1 < num2
let apr3 = num1 === num2
let apr4 = num1 >= num2
// C)
console.log(`
1º resultado: ${apr1}
2º resultado: ${apr2}
3º resultado: ${apr3}
4º resultado: ${apr4}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
// b) Defina uma constante "precoMaximo" com valor 100.
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"

// → Seu código aqui:
// A)
let precoProduto = baixarDados.questionInt("Preco do produto: ")
// B)
const precoMaximo = 100
// C)
let estaDentroDoOrcamento = precoProduto <= precoMaximo
// D)
let esteItemEhCaro = precoProduto > precoMaximo
// E)
console.log(`
Preço informado: R$ ${precoProduto}
Dentro do orçamento R$${precoMaximo}: ${estaDentroDoOrcamento ? "Sim" : "Não"}
Item caro R$${precoMaximo}: ${esteItemEhCaro ? "Sim" : "Não"} `)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
//    - idadePessoa1 === idadePessoa2
//    - idadePessoa1 >= 18 (maior de idade)
//    - idadePessoa2 >= 18 (maior de idade)
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// → Seu código aqui:
// A)
let pessoa1 = {
    nomePessoa1: baixarDados.question('Nome: '),
    idadePessoa1: baixarDados.questionInt('Idade: ')
    }
let pessoa2 = {
    nomePessoa2: baixarDados.question('Nome: '),
    idadePessoa2: baixarDados.questionInt('Idade: ')
    }
let cadastro = [pessoa1, pessoa2]
// B)
let resulCadastro = cadastro[0].idadePessoa1 > cadastro[1].idadePessoa2
let resulCadastro2 = cadastro[0].idadePessoa1 === cadastro[1].idadePessoa2
let resulCadastro3 = cadastro[0].idadePessoa1 >= 18
let resulCadastro4 = cadastro[1].idadePessoa2 >= 18
// C)
console.log(`
Idade da ${cadastro[0].nomePessoa1} é ${cadastro[0].idadePessoa1} ela é ${resulCadastro3 ? "Maior de idade" : "Menor de idade"}
Idade da ${cadastro[1].nomePessoa2} é ${cadastro[1].idadePessoa2} ela é ${resulCadastro4 ? "Maior de idade" : "Menor de idade"}`)
// D)
console.log(`Quem é maior de idade, ${cadastro[0].nomePessoa1} ou ${cadastro[1].nomePessoa2}: ${cadastro[0].idadePessoa1 >= cadastro[1].idadePessoa2 ? `${cadastro[0].nomePessoa1}` : `${cadastro[1].nomePessoa2}`}`)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`

// → Seu código aqui:
// A)
let notas = [
    aluno1 = {
        nomeAluno: baixarDados.question('Nome do aluno: '),
        notas1: baixarDados.questionInt('1ª nota do aluno: '),
        notas2: baixarDados.questionInt('2ª nota do aluno: '),
        notas3: baixarDados.questionInt('3ª nota do aluno: '),
    },
    aluno2 = {
        nomeAluno: baixarDados.question('Nome do aluno: '),
        notas1: baixarDados.questionInt('1ª nota do aluno: '),
        notas2: baixarDados.questionInt('2ª nota do aluno: '),
        notas3: baixarDados.questionInt('3ª nota do aluno: '),
    },
];
// B)
let mediaAluno1 = notas[0].notas1 + notas[0].notas2 + notas[0].notas3
let mediaAluno2 = notas[1].notas1 + notas[1].notas2 + notas[1].notas3
// C)
console.log(`Aluno que obteve a maior média: ${mediaAluno1 >= mediaAluno2 ? `${notas[0].nomeAluno}` : `${notas[1].nomeAluno}`}`)
// D)
console.log(`Aluno com primeira maior nota: ${notas[0].notas1 > notas[1].notas1 ? `${notas[0].nomeAluno}` : `${notas[1].nomeAluno}`}`)
console.log(`Aluno com segunda maior nota: ${notas[0].notas2 > notas[1].notas2 ? `${notas[0].nomeAluno}` : `${notas[1].nomeAluno}`}`)
console.log(`Aluno com terceira maior nota: ${notas[0].notas3 > notas[1].notas3 ? `${notas[0].nomeAluno}` : `${notas[1].nomeAluno}`}`)

console.log("_______________________________");