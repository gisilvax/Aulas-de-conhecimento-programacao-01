// ============================================================
//   DESAFIOS (para quem já terminou a atividade 09) – For
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================

let lerTeclado = require("readline-sync")
// ------------------------------------------------------------
// DESAFIO 1 – Progressão de saldo bancário
// ------------------------------------------------------------
// Um investimento rende juros compostos mensais.
//
// a) Pergunte ao usuário:
//    - Saldo inicial (questionFloat())
//    - Taxa de juros mensal em % (questionFloat()) — ex: 1.5
//    - Número de meses
// b) Usando um for, calcule e exiba mês a mês:
//    "Mês 1:  R$ <saldo>"
//    "Mês 2:  R$ <saldo>"
//    ...
//    A fórmula de juros compostos é:
//    saldo = saldo * (1 + taxa / 100)
// c) Ao final, exiba o saldo total e o lucro obtido (saldo final - saldo inicial).
// d) Armazene cada mês como objeto { mes, saldo } em um array e exiba com console.table().

// → Seu código aqui:
let saldo = lerTeclado.questionFloat("Saldo inicial: ")
let taxa = lerTeclado.questionFloat('Taxa de juros mensal: ')
let meses = lerTeclado.questionInt("Numero de meses: ")

let saldoInicial = saldo
let historico = []

for(let mes = 0; mes <= meses; mes++){
    saldo = saldo * (1 + taxa / 100)
    console.log(`Mês ${mes}: R$ ${saldo.toFixed(2)}`);
        historico.push({
            saldo: saldo.toFixed(2),
            mes: mes
        }
    )
};

let lucro = saldo - saldoInicial
console.log(`\nSaldo total: ${saldo.toFixed(2)} e lucro obtido: ${lucro.toFixed(2)}`);
console.table(historico);


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Cadastro e relatório de alunos
// ------------------------------------------------------------
// a) Pergunte ao usuário quantos alunos serão cadastrados.
// b) Usando um for, colete de cada aluno:
//    - Nome (question())
//    - Nota 1, Nota 2 e Nota 3 (questionFloat() para cada)
// c) Calcule a média de cada aluno e armazene como objeto:
//    { nome, notas, media, situacao }
//    A situação deve ser:
//      "Aprovado"    → média >= 7
//      "Recuperação" → média >= 5 e < 7
//      "Reprovado"   → média < 5
// d) Após coletar todos, percorra o array e exiba o relatório:
//    "<nome> | Média: <media> | <situacao>"
// e) Exiba:
//    - Média geral da turma
//    - Nome do aluno com maior média
//    - Nome do aluno com menor média
//    - Quantidade de aprovados, em recuperação e reprovados
// f) Exiba o array com console.table().

// → Seu código aqui:
let quantidade = lerTeclado.questionInt("Quantos alunos serão cadastrados?");


let alunos = [];


for (let i = 0; i < quantidade; i++) {
  let nome = lerTeclado.question(`Digite o nome do aluno: `);
  
  let nota1 = lerTeclado.questionInt("Digite a Nota 1: ");
  let nota2 = lerTeclado.questionInt("Digite a Nota 2: ");
  let nota3 = lerTeclado.questionInt("Digite a Nota 3: ");

  let media = (nota1 + nota2 + nota3) / 3;

  let situacao = "";

    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5 && media < 7) {
         situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

        alunos.push({nome: nome, notas: [nota1, nota2, nota3], media: media, situacao: situacao});
}


console.log("RELATÓRIO:");
for (let i = 0; i < alunos.length; i++) {
  console.log(`${alunos[i].nome} | Média: ${alunos[i].media.toFixed(2)} | ${alunos[i].situacao}`);
}


let somaMedias = 0;
let maior = alunos[0];
let menor = alunos[0];

let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;

for (let i = 0; i < alunos.length; i++) {
  somaMedias += alunos[i].media;

  if (alunos[i].media > maior.media) {
        maior = alunos[i];
  } if (alunos[i].media < menor.media) {
        menor = alunos[i];
  } if (alunos[i].situacao === "Aprovado") {
        aprovados++;
  } else if (alunos[i].situacao === "Recuperação") {
        recuperacao++;
  } else {
        reprovados++;
  }
}

let mediaGeral = somaMedias / alunos.length;

console.log(`\n==== ESTATÍSTICAS ====
Média geral da turma: ${mediaGeral.toFixed(2)}
Maior média: ${maior.nome} (${maior.media.toFixed(2)})
Menor média: ${menor.nome} (${menor.media.toFixed(2)})
Aprovados: ${aprovados}
Recuperação: ${recuperacao}
Reprovados: ${reprovados}`);

console.table(alunos);
console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Jogo de adivinhar o número
// ------------------------------------------------------------
// O programa sorteia um número de 1 a 100 e o usuário tem no máximo 7 tentativas para adivinhar.
//
// a) Gere um número aleatório
//    Para gerar um número aleatório, utilize a função Math.random()
// b) Usando um for:
//    - Peça ao usuário um palpite.
//    - Se errar: exiba "Muito alto!" ou "Muito baixo!" conforme o caso.
//    - Informe quantas tentativas restam: "Tentativas restantes: <restantes>"
//    - Se acertar: exiba "Parabéns! Acertou em <i> tentativa(s)!"
// c) Se o usuário esgotar as tentativas sem acertar, exiba:
//    "Game over! O número era <secreto>."
// d) Ao final, exiba um resumo:
//    - Número secreto
//    - Número de tentativas usadas
//    - Resultado: "Vitória" ou "Derrota"

// → Seu código aqui:

let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativasMax = 7;
let acertou = false;
let contadorTentativas = 0;


for (let i = 1; i <= tentativasMax; i++) {
  let tentativa = lerTeclado.questionInt(`Tentativa ${i}: Digite um número de 1 a 100: `);

    contadorTentativas++

  if (tentativa > numeroSecreto) {
    console.log("Muito alto!");
  } else if (tentativa < numeroSecreto) {
    console.log("Muito baixo!");
  } else {
    console.log(`Parabéns! Acertou em ${contadorTentativas} tentativa(s)!`);
    acertou = true;
    break;
  }

  let restantes = tentativasMax - i;
  console.log(`Tentativas restantes: ${restantes}`);
}


if (!acertou) {
  console.log(`Game over! O número era ${numeroSecreto}.`);
}


console.log("\nRESUMO:");
console.log(`Número secreto: ${numeroSecreto}`);

if (acertou) {
  console.log(`Número de tentativas usadas: ${contadorTentativas}`);
  console.log("Resultado: Vitória");
} else {
  console.log(`Número de tentativas usadas: ${tentativasMax}`);
  console.log("Resultado: Derrota");
}

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Análise de vendas mensais
// ------------------------------------------------------------
// a) Declare o array de vendas mensais (Jan a Dez):
//    const vendas = [12500, 9800, 15200, 11000, 13750, 8900,
//                    17300, 14600, 10200, 16800, 19500, 22000];
// b) Usando fors, calcule e exiba:
//    - Total de vendas no ano
//    - Média mensal
//    - Mês com maior venda (nome do mês e valor)
//    - Mês com menor venda (nome do mês e valor)
//    - Quantos meses ficaram acima da média
//    - Quantos meses ficaram abaixo da média
// c) Exiba um relatório mês a mês indicando se ficou acima ou abaixo da média:
//    "Janeiro:   R$ 12.500,00 – Abaixo da média"
//    "Fevereiro: R$  9.800,00 – Abaixo da média"
//    ...
//    Dica: use um array com os nomes dos meses para exibir o nome correto.
// d) Exiba o array de objetos { mes, venda, situacao } com console.table().

// → Seu código aqui:

const vendas = [12500, 9800, 15200, 11000, 13750, 8900, 17300, 14600, 10200, 16800, 19500, 22000];

const meses0 = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho","Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

let total = 0;

for (let i = 0; i < vendas.length; i++) {
  total += vendas[i];
}

let media = total / vendas.length;

let maiorValor = vendas[0];
let menorValor = vendas[0];
let mesMaior = meses0[0];
let mesMenor = meses0[0];

for (let i = 0; i < vendas.length; i++) {
  if (vendas[i] > maiorValor) {
        maiorValor = vendas[i];
        mesMaior = meses0[i];
  } if (vendas[i] < menorValor) {
        menorValor = vendas[i];
        mesMenor = meses0[i];
  }
}
let acimaMedia = 0;
let abaixoMedia = 0;

let relatorio = [];

console.log("RELATÓRIO MENSAL:");

for (let i = 0; i < vendas.length; i++) {
  let situacaoo = "";
if (vendas[i] >= media) {
    situacaoo = "Acima da média";
    acimaMedia++;
  } else {
        situacaoo = "Abaixo da média";
        abaixoMedia++;
  }

  console.log(`${meses0[i]}: R$ ${vendas[i].toFixed(2)} - ${situacaoo}`);

  relatorio.push({mes: meses0[i], venda: vendas[i], situacao: situacaoo});
}


console.log("\nRESUMO:");
console.log(`Total de vendas no ano: R$ ${total.toFixed(2)}`);
console.log(`Média mensal: R$ ${media.toFixed(2)}`);
console.log(`Maior venda: ${mesMaior} (R$ ${maiorValor.toFixed(2)})`);
console.log(`Menor venda: ${mesMenor} (R$ ${menorValor.toFixed(2)})`);
console.log(`Meses acima da média: ${acimaMedia}`);
console.log(`Meses abaixo da média: ${abaixoMedia}`);

console.table(relatorio);

console.log("_______________________________");