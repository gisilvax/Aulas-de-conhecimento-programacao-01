// ============================================================
//   ATIVIDADE 07 – Estruturas de Controle (If / Else)
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-07.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================
let baixarInfo = require('readline-sync')

// ------------------------------------------------------------
// EXERCÍCIO 1 – If simples
// ------------------------------------------------------------
// a) Declare "pontos" com valor 120.
// b) Se "pontos" for maior que 100, exiba: "Nível alcançado!".
//    Mas se "pontos" for maior que 200, exiba somente: "Nível máximo alcançado!"

 //→ Seu código aqui:
// A)
let pontos = 120
// B)
if(pontos > 100){
    console.log("Nível alcançado!")
}

if(pontos > 200){
    console.log('Nível máximo alcançado!')
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – If / Else
// ------------------------------------------------------------
// a) Declare "hora" com o valor 14 (representando 14h).
// b) Se hora for menor que 12, exiba: "Bom dia!".
// c) Se hora for menor que 18, exiba: "Boa tarde!".
// d) Senão, exiba: "Boa noite!"

// → Seu código aqui:
// A)
let hora = 14
// B)
if (hora < 12) {
    console.log("Bom dia!");
  }
if (hora < 18) {
    console.log("Boa tarde! ");
  } else {
    console.log("Boa noite!"); 
  }
//console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – If / Else com input
// ------------------------------------------------------------
// a) Pergunte ao usuário sua idade usando questionInt().
// b) Se a idade for maior ou igual a 18, exiba: "Adulto".
//    Se a idade for menor que 12, exiba: "Criança".
//    Senão, exiba: "Jovem".

// → Seu código aqui:
// A)
let idade = baixarInfo.questionInt('Idade: ')
// B)
if (idade >= 18) {
    console.log("Adulto");
  } else if (idade <= 12) {
    console.log("Criança");
  } else {
    console.log("Jovem");
  }
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – If / Else If / Else
// ------------------------------------------------------------
// a) Declare "notaAluno" com valor 6.8.
// b) Em uma variável "status", usando if/else if/else, armazene:
//    - nota >= 9     → "Aprovado com mérito"
//    - nota >= 7     → "Aprovado"
//    - nota >= 5     → "Recuperação"
//    - abaixo de 5   → "Reprovado"
// c) AO final, exiba a nota e a situação com template literal.

// → Seu código aqui:
// A)
let notaAluno = 6.8
// B)
let status;

if(notaAluno >= 9){
    status = "Aprovado com mérito"
} else if(notaAluno >= 7){
    status = "Aprovado"
} else if(notaAluno >= 5){
    status = "Recuperação"
} else{
    status = "Reprovado"
};
// C)
console.log(`
Nota: ${notaAluno}
Situação: ${status}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – If / Else If / Else com input
// ------------------------------------------------------------
// a) Pergunte ao usuário a temperatura atual (questionFloat()).
// b) Classifique e exiba usando if/else if/else:
//    - temperatura < 10           → "Muito frio"
//    - temperatura >= 10 e < 18   → "Frio"
//    - temperatura >= 18 e <= 25  → "Agradável"
//    - temperatura > 25 e <= 35   → "Quente"
//    - temperatura > 35           → "Muito quente"

// → Seu código aqui:
// A)
let temperatura = baixarInfo.questionFloat('Temperatura atual: ')
// B)
let temperaturaAtual;
if(temperatura < 10){
    temperaturaAtual = "Muito frio"
} else if(temperatura >= 10 && temperatura < 18){
    temperaturaAtual = "Frio"
  } else if(temperatura >= 18 && temperatura <= 25){
    temperaturaAtual = "Agradavel"
} else if(temperatura > 25 && temperatura <= 35){
    temperaturaAtual = "Quente"
  } else {
    temperaturaAtual = "Muito quente"
}
console.log(temperaturaAtual);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – If aninhado
// ------------------------------------------------------------
// a) Pergunte ao usuário e armazene as informações em um objeto:
//    - Nome (question()).
//    - Se possui ingresso (keyInYN()).
//    - Sua idade (questionInt()).
// b) Se NÃO possui ingresso → exiba: "<Nome>, dirija-se à bilheteria."
//    Se possui ingresso:
//      - idade < 18  → "Meia-entrada: menor de idade."
//      - idade >= 60 → "Meia-entrada: melhor idade."
//      - caso contrário → "Entrada inteira."

// → Seu código aqui:
// A)
let usuario = {
    nome: baixarInfo.question("Nome: "),
    ingresso: baixarInfo.keyInYN("Possui ingrasso: "),
    idade: baixarInfo.questionInt("Idade: "),
};
// B)
if(!usuario.ingresso){
    console.log(`${usuario.nome}, dirija-se à bilheteria.`)
    } else {
    if(usuario.idade < 18){
        console.log("Meia-entrada: menor de idade.")
    }else if (usuario.idade >= 60){
        console.log("Meia-entrada: melhor idade")
    } else {
        console.log("Entrada inteira.")
    }
}
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – If com operadores lógicos (&&)
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome (question()).
//    - Idade (questionInt()).
//    - Se possui habilitação (keyInYN()).
// b) Armazene os dados em um objeto chamado "motorista".
// c) Para alugar um carro, o motorista precisa ter 21 anos ou mais E possuir habilitação.
//    - Se pode alugar → exiba: "<nome>, você pode alugar o veículo."
//    - Senão          → exiba: "<nome>, você não atende aos requisitos."

// → Seu código aqui:
// A)
let motorista ={
    nome: baixarInfo.question('Nome: '),
    idade: baixarInfo.questionInt("Idade: "),
    cnh: baixarInfo.keyInYN("Possui habilitação: "),
}
// C)
if(motorista.idade > 20 && motorista.cnh){
    console.log(`${motorista.nome}, você pode alugar o veículo.`)
} else {
    console.log(`${motorista.nome}, você não atende aos requisitos.`)
}
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – If com operadores lógicos (||)
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Se é estudante.
//    - Se é idoso, com 60 anos ou mais.
// b) Se é estudante OU idoso → exiba: "Desconto de 50% aplicado!"
//    Senão → exiba: "Sem desconto. Preço cheio."

// → Seu código aqui:
// A)
let estudante = baixarInfo.keyInYN("É estudante: ")
let idoso = baixarInfo.keyInYN("Tem 60 ou é +60: ")
// B)
if(estudante || idoso){
    console.log('Desconto de 50% aplicado!')
} else {
    console.log("Sem desconto. Preço cheio.")
}
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Sistema de notas completo
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome do aluno.
//    - Nota da prova 1.
//    - Nota da prova 2.
// b) Armazene os dados em um objeto "aluno" e calcule a média
//    (média = (prova1 + prova2) / 2). Adicione a média ao objeto.
// c) Classifique e exiba com if/else if/else:
//    - média >= 7  → "Aprovado"
//    - média >= 5  → "Em recuperação"
//    - abaixo de 5 → "Reprovado"
// d) Exiba o objeto "aluno" com console.table().
// e) Exiba uma mensagem final: "<nome>: <situação> (média: <média>)"

// → Seu código aqui:
// A)
let aluno = {
    nome: baixarInfo.question("Nome do aluno: "),
    nota1: baixarInfo.questionInt("Nota da prova 1: "),
    nota2: baixarInfo.questionInt("Nota da prova 2: ")
}
// B)
let media = (aluno.nota1 + aluno.nota2) / 2
aluno.media = media
// C)
let notaFinal;
if(media >= 7){
    notaFinal = "Aprovado"
} else if(media >= 5 ){
    notaFinal = "Em recuperação"
} else {
    notaFinal = "Reprovado"
}
// D)
console.table(aluno)
// E)
console.log(`${aluno.nome}: ${notaFinal} ( Média: ${media})`)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Calculadora interativa
// ------------------------------------------------------------
// a) Peça ao usuário dois números usando questionFloat().
// b) Peça ao usuário que escolha uma operação digitando um número:
//    1 – Soma | 2 – Subtração | 3 – Multiplicação | 4 – Divisão
//    Use questionInt() para capturar a escolha.
// c) Armazene os dois números, o número referente à escolha e o símbolo referente à escolha
//    em um objeto 'calculo' com as propriedades:
//    numeroA, numeroB, operacao, simbolo.
// d) Com base na escolha, calcule o resultado usando if/else if, else.
//    Dica: se a operação for divisão e o segundo número for 0, exiba um aviso de erro.
// e) Exiba no console o resultado no formato:
//    "<numeroA> <símbolo> <numeroB> = <resultado>"
//    Exemplo: "10 + 3 = 13"
// f) Realize testes para verificar se a calculadora está funcionando corretamente.
// g) Chame o professor para realizar alguns testes 🫡

// → Seu código aqui:
// A)
let num1 = baixarInfo.questionFloat("Digite o primeiro numero escolhido: ")
let num2 = baixarInfo.questionFloat("Digite o segundo numero escolhido: ")
// B)
console.log("Escolha o numero da operacao")
console.log("1 – Soma")
console.log('2 – Subtração')
console.log('3 – Multiplicação')
console.log('4 – Divisão')

let operacao = baixarInfo.questionInt('Digite a opcao desejada: ')
// C)
let calculo = {
    num1,
    num2,
    operacao,
    simbolo: ""
}
// D)
let resultado;
if (operacao === 1){
    resultado = num1 + num2
    calculo.simbolo = "+"
} else if(operacao === 2){
    resultado = num1 - num2
    calculo.simbolo = "-"
} else if(operacao === 3){
    resultado = num1 * num2
    calculo.simbolo = "*"
} else if(operacao === 4){
    resultado = num1 / num2
    calculo.simbolo = "/"
}else{
    resultado = num2 / 0
    console.log("Erro ao exibir o resultado da divisão")
}
// E)
console.log(`${num1} ${calculo.simbolo} ${num2} = ${resultado}`)

console.log("_______________________________");