// ============================================================
//   ATIVIDADE 09 – Estruturas de Controle (Repetição - For)
// ============================================================

let readline = require("readline-sync")
// ------------------------------------------------------------
// EXERCÍCIO 1 – Contagem simples
// ------------------------------------------------------------
// a) Usando um for, exiba no console os números de 5 a 12, um por linha.
//    O número exibido deve ser o mesmo utilizado para o contador do 'for' ( i )
// b) Ao final, exiba: "Contagem concluída!"

// → Seu código aqui:
// A)
for(let i = 5; i <= 12; i++){
    console.log(i);
}
// B)
console.log("Contagem concluída!");

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Contagem decrescente
// ------------------------------------------------------------
// a) Usando um for, exiba os números de 10 até 3 em ordem decrescente.
//    O número exibido deve ser o mesmo utilizado para o contador do 'for' ( i )
// b) Ao final, exiba: "Lançamento! 🚀"

// → Seu código aqui:
// A)
for(let i = 10; i >= 3; i--){
    console.log(i);
}
// B)
console.log("Lançamento! 🚀");

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Números pares
// ------------------------------------------------------------
// a) Usando um for com passo 2, exiba todos os números pares de 0 a 30.
// b) Ao final, exiba quantos números pares foram exibidos.

0// → Seu código aqui:
let soma = 0

for(let i = 0; i <= 30; i += 2){
    console.log("Valor: ", i);
    soma++
}

console.log(`Total de numeros pares: ${soma}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Tabuada
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro (questionInt()).
// b) Exiba a tabuada desse número de 1 a 10 no formato:
//    "<número> x <i> = <resultado>"

// → Seu código aqui:
// A)
let number = readline.questionInt("Digite um numero inteiro: ")

// B)
for(let i = 1; i <= 10; i++){
    let resultado = number * i;
    console.log(`${number} x ${i} = ${resultado}`);
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Soma acumulada
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro positivo N (questionInt()).
// b) Usando um for, calcule a soma de todos os inteiros de 1 até N.
// c) Exiba: "A soma de 1 até <N> é <soma>"

// → Seu código aqui:
// A)
let numberInt = readline.questionInt('Digite um numero inteiro positivo N: ')
let somaa = 0
// B)
for(let i = 1; i <= numberInt; i++){
    somaa += i
}
// C)
console.log(`A soma de 1 até ${numberInt} é ${somaa}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Fatorial
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro de 1 a 10 (questionInt()).
// b) Calcule o fatorial desse número usando um for.
//    Fatorial de N (N!) = 1 × 2 × 3 × ... × N
//    Exemplo: 5! = 1 × 2 × 3 × 4 × 5 = 120
// c) Exiba: "<N>! = <resultado>"

// → Seu código aqui:
// A)
let numInt = readline.questionInt('Digite um numero inteiro de 1 a 10: ')
let fatorial = 1
// B)
for(let i = 1; i <= numInt; i++){
    fatorial *= i
}
// C)
console.log(`${numInt}! = ${fatorial}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Percorrendo um array
// ------------------------------------------------------------
// a) Utilizando o array:
    const cidades = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Fortaleza"];
// b) Utilizando de um for, exiba cada cidade com seu índice no formato:
//    "[<indice>] - <Cidade>"
// c) Ao final, exiba: "Total de cidades: <quantidade>"

// → Seu código aqui:
let quantidade = 0
for(let i = 0; i < cidades.length; i++){
    console.log(`${i} - ${cidades[i]}`);
    quantidade++
}

console.log(`Total de cidades: ${quantidade}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Maior e menor valor
// ------------------------------------------------------------
// a) Declare o array:
//    const temperaturas = [28, 15, 32, 9, 21, 37, 14, 25];
// b) Usando um for, encontre o maior e o menor valor do array.
// c) Exiba:
//    "Maior temperatura: <maior>°C"
//    "Menor temperatura: <menor>°C"

// → Seu código aqui:
const temperaturas = [28, 15, 32, 9, 21, 37, 14, 25];
let maior = temperaturas[0]
let menor = temperaturas[0]
//
for (let i = 1; i < temperaturas.length; i++){
    if (temperaturas[i] > maior){
      maior = temperaturas[i];
}    for(let i = 1; i < temperaturas.length; i++){
        if (temperaturas[i] < menor){
        menor = temperaturas[i];
        }
    }
}
//
console.log(`
Maior temperatura: ${maior}°C
Manor temperatura: ${menor}°C
`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Contando com condição
// ------------------------------------------------------------
// a) Utilizando do array:
    const idades = [12, 25, 17, 34, 15, 42, 16, 29, 8, 19];
// b) Usando um for, conte:
//    - Quantas pessoas são menores de idade (< 18)
//    - Quantas são maiores de idade (>= 18)
// c) Exiba os dois totais.

// → Seu código aqui:
let maiores = 0
let menores = 0
for (let i = 0; i < idades.length; i++){
    if(idades[i] < 18){
        menores++
    } else {
        maiores++
    }     
}
//
console.log(`
Total de pessoas maiores de idade: ${maiores}
total de pessoas menores de idade: ${menores}
`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Média com array
// ------------------------------------------------------------
// a) Utilizando do array:
    const salarios = [1800, 3200, 950, 4500, 2100, 1500, 7800, 2900];
// b) Usando um for, calcule a média salarial.
// c) Exiba a média no formato: "Média salarial: R$ <media>"
// d) Usando outro for, exiba cada salário e se está acima ou abaixo da média:
//    "R$ 1800,00 – Abaixo da média"
//    "R$ 3200,00 – Acima da média"

// → Seu código aqui:

let soma0 = 0
for(let i = 0; i < salarios.length; i++){
    soma0 += salarios[i]
}
let resultado = soma0 / salarios.length
console.log(`Média salarial: R$ ${resultado.toFixed(2)}`);

//
let acima = 0
let abaixo = 0
for (let i = 0; i < salarios.length; i++){
    if(salarios[i] >= resultado){
        acima++
        console.log(`R$ ${salarios[i]} - Abaixo da media`);
    } else {
        abaixo++
        console.log(`R$ ${salarios[i]} - Acima da media`);
    }     
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 11 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Calcule a média das notas da turma e armazene em uma variável 'media'.
// e) Percorra o array e para cada aluno exiba no console:
//    "<nome>: <nota> – <situação>"
//    A situação deve ser:
//      "Aprovado"    → nota >= 7
//      "Recuperação" → nota >= 5 e < 7
//      "Reprovado"   → nota < 5
// f) Ao final, exiba a média da turma no formato:
//    "Média da turma: <media>"
// g) Exiba o array 'turma' com console.table().

// → Seu código aqui:
let turma = []
let somaNota = 0;

for(let i = 0; i < 3; i++){
    let nomeAluno = readline.question(`\nDigite o nome do aluno: `)
    let notaAluno = readline.questionInt(`Nota do aluno ${nomeAluno}: `)
    somaNota += notaAluno;
        turma.push(
            {
            nome: nomeAluno,
            nota: notaAluno
        }
    );
};

const media = somaNota / 3

for(let i = 0; i < turma.length; i++){
    let situacao;
    if(turma[i].notaAluno >= 7) {
        situacao = "Aprovado"
    } else if (turma[i].notaAluno >= 5 && turma[i].notaAluno < 7) {
        situacao = "Recuperação"
    } else { turma[i].notaAluno < 5
        situacao = "Reprovado"
    }
    console.log(`\n${turma[i].nome}: ${turma[i].nome} – ${situacao}`);
};

console.log(`\nMédia da turma: ${media.toFixed(2)}`);
console.table(turma);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 12 – Coletando dados com for e input
// ------------------------------------------------------------
// a) Pergunte ao usuário quantos produtos quer cadastrar (questionInt()).
// b) Usando um for, colete de cada produto:
//    - nome (question())
//    - preco (questionFloat())
// c) Armazene cada produto como objeto em um array 'estoque'.
// d) Após o cadastro, percorra o array e exiba cada produto no formato:
//    "<nome>: R$ <preco>"
// e) Exiba o produto mais caro e o mais barato.
// f) Exiba o array com console.table().

// → Seu código aqui:
// A), B) e C)
let qtdProdutos = readline.questionInt('Quantos produtos deseja cadastrar? ')
let estoque = []

for(let i = 0; i < qtdProdutos; i++){
    let nomeProduto = readline.question("Nome do produto: ")
    let precoProduto = readline.questionFloat(`Preco do produto ${nomeProduto}: `)
    estoque.push({
        nome: nomeProduto,
        preco: precoProduto
        }
    )
    console.log(`${estoque[i].nome}: R$ ${estoque[i].preco}`);
}

let maiorPreco = estoque[0]
let menorPreco = estoque[0]
//
for (let i = 1; i < estoque.length; i++){
    if (estoque[i].preco > maiorPreco.preco){
      maiorPreco = estoque[i];
}    for(let i = 1; i < estoque.length; i++){
        if (estoque[i].preco < menorPreco.preco){
        menorPreco = estoque[i];
        }
    }
}

console.log(`
Maior preco: ${maiorPreco.preco}
Manor preco: ${menorPreco.preco}`)