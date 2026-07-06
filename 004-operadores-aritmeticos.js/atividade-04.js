// ============================================================
//   ATIVIDADE 04 – Operadores Aritméticos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-04.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Operações básicas
// ------------------------------------------------------------
// Declare duas variáveis: "num1" com valor 18 e "num2" com valor 5.
// Calcule e exiba no console, usando template literal, o cálculo e o resultado:
//    Exemplo: console.log(`Cálculo: ${num1} + ${num2} = ${num1 + num2}`);
// a) A soma dos dois números.
// b) A subtração (num1 - num2).
// c) A multiplicação.
// d) A divisão (use toFixed() para limitar o resultado a 2 casas decimais).
// e) O resto da divisão (módulo %).
// f) num1 elevado a num2 (potência).

// → Seu código aqui:
let num1 = 18
let num2 = 5

console.log(`Calculo: ${num1} + ${num2} = ${num1 + num2}`);

// A)
console.log(`Resultado da soma: ${num1} + ${num2} = ${num1 + num2} `);
// B)
console.log(`Resultado da subtracao: ${num1} - ${num2} = ${num1 - num2}`);
// c)
console.log(`Resultado da multiplicação: ${num1} * ${num2} = ${num1 * num2}`);
// D)
let resultadoDivisao = 18 / 5
console.log(resultadoDivisao.toFixed(2));
// E)
console.log(`Resto da divisão: ${num1} % ${num2} = ${num1 % num2}`);
// F)
console.log(`Resultado da potência: ${num1} ** ${num2} = ${num1 ** num2}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Área e perímetro
// ------------------------------------------------------------
// a) Declare as variáveis "largura" (valor 8) e "altura" (valor 5).
// b) Calcule a área do retângulo (largura * altura) e armazene em "area".
// c) Calcule o perímetro (2 * largura + 2 * altura) e armazene em "perimetro".
// d) Exiba no console usando template literal:
//    "Retângulo | Largura: <largura> | Altura: <altura> | Área: <area> | Perímetro: <perimetro>"

// → Seu código aqui:
// A)
let largura = 8
let altura = 5
// B)
console.log(`Area do retangulo: ${largura * altura}`);
let area = 40
// C)
console.log(`Resultado do perimetro: ${2 * largura + 2 * altura}`);
let perimetro = 26
// D)
console.log(`Retângulo | Largura: ${largura} | Altura: ${altura} | Área: ${area} | Perímetro: ${perimetro}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Calculando desconto
// ------------------------------------------------------------
// a) Declare a variável "precoOriginal" com o valor 250.
// b) Declare a variável "percentualDesconto" com o valor 15 (representa 15%).
// c) Calcule o valor do desconto e armazene em "valorDesconto".
//    Dica: valorDesconto = precoOriginal * (percentualDesconto / 100)
// d) Calcule o preço final (precoOriginal - valorDesconto) e armazene em "precoFinal".
// e) Exiba no console usando template literal:
//    "Preço original: R$ <precoOriginal> | Desconto: R$ <valorDesconto> | Preço final: R$ <precoFinal>"
//    Use toFixed(2) nos valores em reais.

// → Seu código aqui:
// A)
let precoOriginal = 250
// B)
let porcentualDesconto = 15
// C)
let valorDesconto = precoOriginal * (porcentualDesconto / 100)
// D)
let precoFinal = precoOriginal - valorDesconto
// E)
console.log(`Preço original: R$ ${precoOriginal.toFixed(2)} | Desconto: R$ ${valorDesconto.toFixed(2)} | Preço final: R$ ${precoFinal.toFixed(2)}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Operadores de atribuição composta
// ------------------------------------------------------------
// a) Declare uma variável "pontos" com o valor 100.
// b) Some 50 pontos usando +=. Exiba o resultado.
// c) Subtraia 30 pontos usando -=. Exiba o resultado.
// d) Multiplique por 2 usando *=. Exiba o resultado.
// e) Divida por 4 usando /=. Exiba o resultado.
// f) Para cada operação, use template literal:
//    "Pontos após <tipo da operação>: <valor>"

// → Seu código aqui:
// A)
let pontos = 100
// B)
pontos += 50
console.log(pontos);
console.log(`Pontos após soma: ${pontos}`);
// C)
pontos -= 30
console.log(pontos);
console.log(`Pontos após subtração: ${pontos}`);
// D)
pontos *= 2
console.log(pontos);
console.log(`Pontos após multiplicação: ${pontos}`);
// E)
pontos /= 4
console.log(pontos);
console.log(`Pontos após divisão: ${pontos}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Incremento e decremento
// ------------------------------------------------------------
// a) Declare uma variável "vidas" com valor 3.
// b) Exiba o valor atual com console.log().
// c) Use ++ para incrementar "vidas" duas vezes, exibindo após cada incremento.
// d) Use -- para decrementar "vidas" uma vez, exibindo o resultado.
// e) Declare uma variável "nivel" com valor 1.
// f) Incremente "nivel" três vezes usando ++nivel (prefixo) e exiba cada resultado.

// → Seu código aqui:
// A)
let vidas = 3
// B)
console.log(vidas);
// C)
vidas++
console.log(vidas);
vidas++
console.log(vidas);
// D)
vidas--
console.log(vidas);
vidas--
console.log(vidas);
// E)
let nivel = 1
// F)
++nivel
console.log(nivel);
++nivel
console.log(nivel);
++nivel
console.log(nivel);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Funções matemáticas (Math)
// ------------------------------------------------------------
// a) Declare "nota" com o valor 7.3.
// b) Exiba o resultado de Math.round(nota), Math.floor(nota) e Math.ceil(nota).
//    Use template literal para identificar cada um.
// c) Declare "temperatura" com o valor -12.5.
// d) Exiba o valor absoluto usando Math.abs(temperatura).
// e) Use Math.max() para encontrar o maior entre: 42, 17, 89, 5, 63. Exiba o resultado.
// f) Use Math.min() para encontrar o menor entre 42, 17, 89, 5, 63. Exiba o resultado.

// → Seu código aqui:
// A)
let nota = 7.3
// B)
console.log("7.3 Math.round()", Math.round(nota));
console.log("7.3 Math.floor()", Math.floor(nota));
console.log("7.3 Math.ceil()", Math.ceil(nota));
// C)
let temperatura = -12.5
// D)
console.log(Math.abs(temperatura));
// E)
console.log(Math.max(42, 17, 89, 5, 63));
// F)
console.log(Math.min(42, 17, 89, 5, 63));

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Média de notas
// ------------------------------------------------------------
// a) Peça ao usuário 3 notas (use questionFloat()).
// b) Calcule a média aritmética das 3 notas.
// c) Exiba no console:
//    "Nota 1: <n1> | Nota 2: <n2> | Nota 3: <n3>"
//    "Média: <media>" (com 2 casas decimais usando toFixed(2))

let informacoesUsuario = require('readline-sync');
// → Seu código aqui:
// A)
let notass = [
  informacoesUsuario.questionFloat("Primeira nota: "),
  informacoesUsuario.questionFloat("Segunda nota: "),
  informacoesUsuario.questionFloat("Terceira nota: ")
]
// B)
const media = (notass[0] + notass[1] + notass[2]) / notass.length
// C)
console.log(`Nota 1: ${notass[0]} | Nota 2: ${notass[1]} | Nota 3: ${notass[2]}`);
console.log(`Média: ${media.toFixed(2)}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Calculadora de troco
// ------------------------------------------------------------
// a) Peça ao usuário o valor total da compra (questionFloat()).
// b) Peça ao usuário o valor entregue pelo cliente (informando que deve ser maior que o valor da compra) (questionFloat()).
// c) Calcule o troco (valorEntregue - totalCompra).
// d) Exiba no console:
//    "Total da compra:  R$ <total>"
//    "Valor entregue:   R$ <entregue>"
//    "Troco:            R$ <troco>"
//    Use toFixed(2) em todos os valores.

// → Seu código aqui:
// A)
let totalCompra = informacoesUsuario.questionFloat("Valor total da compra: ");
// B)
let valorEntregue = informacoesUsuario.questionFloat("Valor entregue pelo clinte: ");
// C)
let troco = valorEntregue - totalCompra
console.log(`Troco ao receber: ${valorEntregue - totalCompra}`);
// D)
console.log(`=================================`)
console.log(`
Total da compra:  R$ ${totalCompra.toFixed(2)}
Valor entregue:   R$ ${valorEntregue.toFixed(2)}
Troco:            R$ ${troco.toFixed(2)}
`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Valor total de listas
// ------------------------------------------------------------
// a) Dada uma lista de preços, calcule e exiba o total.
let precos = [29.90, 49.99, 15.75, 99.90];
// b) Dada uma lista de notas, calcule e exiba a média.
let notas = [7.5, 8.2, 6.5, 9.0];
// c) Dada uma lista de idades, exiba a maior e a menor idade utilizando das funções Math().
let idades = [15, 22, 30, 18, 25];

// → Seu código aqui:
// A)
let totalPrecos = (precos[0] + precos[1] + precos[2] + precos[3])
console.log(`Total:   R$ ${totalPrecos.toFixed(2)}`);
// B)
let totalNotas = (notas[0] + notas[1] + notas[2] + notas[3])
console.log(`Média:  ${totalNotas.toFixed(2)}`);
// C)
console.log("Maior idade:", Math.max(15, 22, 30, 18, 25));
console.log("Menor idade:", Math.min(15, 22, 30, 18, 25));
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Trabalhando com objetos
// ------------------------------------------------------------
// Dado o objeto turma:
let turma = {
  aluno1: {
    nome: "João",
    notas: []
  },
  aluno2: {
    nome: "Maria",
    notas: []
  },
  aluno3: {
    nome: "Pedro",
    notas: []
  }
}
// a) Sem alterar o objeto (utilize somente push), peça para o usuário 3 notas para cada aluno, indicando a quem pertencerá cada nota
// b) Calcule a média de notas de cada aluno e exiba no console, indicando a quem pertence cada média
// c) Exiba a média geral da turma
// d) Exiba a nota mais alta e a mais baixa de cada aluno
// e) Exiba a nota mais alta e a mais baixa da turma

// → Seu código aqui:
// a)
let joao1 = informacoesUsuario.questionInt("Primeira nota do aluno Joao: ");
let joao2 = informacoesUsuario.questionInt("Segunda nota do aluno Joao: ");
let joao3 = informacoesUsuario.questionInt("Terceira nota do aluno Joao: ");
turma.aluno1.notas.push(joao1, joao2, joao3);

let maria1 = informacoesUsuario.questionInt("Primeira nota do aluno Maria: ");
let maria2 = informacoesUsuario.questionInt("Segunda nota do aluno Maria: ");
let maria3 = informacoesUsuario.questionInt("Terceira nota do aluno Maria: ");
turma.aluno2.notas.push(maria1, maria2, maria3);

let pedro1 = informacoesUsuario.questionInt("Primeira nota do aluno Pedro: ");
let pedro2 = informacoesUsuario.questionInt("Segunda nota do aluno Pedro: ");
let pedro3 = informacoesUsuario.questionInt("Terceira nota do aluno pedro: ");
turma.aluno3.notas.push(pedro1, pedro2, pedro3);
// B)
const alunoJoao = (turma.aluno1.notas[0] + turma.aluno1.notas[1] + turma.aluno1.notas[2]) / turma.aluno1.notas.length
console.log(`Média de notas do Joao: ${alunoJoao.toFixed(2)}`);

const alunoMaria = (turma.aluno2.notas[0] + turma.aluno2.notas[1] + turma.aluno2.notas[2]) / turma.aluno2.notas.length
console.log(`Média de notas do Maria: ${alunoMaria.toFixed(2)}`);

const alunoPedro = (turma.aluno3.notas[0] + turma.aluno3.notas[1] + turma.aluno3.notas[2]) / turma.aluno3.notas.length
console.log(`Média de notas do Joao: ${alunoPedro.toFixed(2)}`);
// C)
let mediaGeral = (alunoJoao + alunoMaria + alunoPedro) / 3
console.log(mediaGeral.toFixed(2));
// D)
console.log("Nota mais alta do Joao: ", Math.max(joao1, joao2, joao3));
console.log("Nota mais alta do Maria: ", Math.max(maria1, maria2, maria3));
console.log("Nota mais alta do Pedro: ", Math.max(pedro1, pedro2, pedro3));
// E)
console.log("Nota mais alta da turma: ", Math.max(alunoJoao, alunoMaria, alunoPedro));
console.log("Nota mais alta da turma: ", Math.min(alunoJoao, alunoMaria, alunoPedro));
console.log("_______________________________");