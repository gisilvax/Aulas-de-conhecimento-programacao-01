
// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:
let meuNome = "Giovanna";
let minhaIdade = 19;
let meuHobby = "ler, jogar e assistir";
let apresentação = `Olá, me chamo ${meuNome}, tenho ${minhaIdade} anos, no meu tempo livre gosto de ${meuHobby}.`

console.log(meuNome);
console.log(minhaIdade);
console.log(meuHobby);
console.log(apresentação);
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:
let lugar = "Jaraguá do Sul";
let temperatura = 26;
let temperaturaCidade = `Hoje em ${lugar} está fazendo ${temperatura}°C, perfeito para passear com familiares`;

console.log(lugar);
console.log(temperatura);
console.log(temperaturaCidade);
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui:
let palavra = "texto";
let numerologia = 300;
let verdadeiroFalso = true;
let valorTipo;
let valor = null
let frase1 = `o valor é ${palavra} e o tipo é ${typeof palavra}.`
let frase2 = `o valor é ${numerologia} e o tipo é ${typeof numerologia}.`
let frase3 = `o valor é ${verdadeiroFalso} e o tipo é ${typeof verdadeiroFalso}.`
let frase4 = `o valor é ${valorTipo} e o tipo é ${typeof valorTipo}.`
let frase5 = `o valor é ${valor} e o tipo é ${valor}.`

console.log(frase1);
console.log(frase2);
console.log(frase3);
console.log(frase4);
console.log(frase5);
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:
let personagem = "Zoe";
let idadeePersonagemm = 24;
let Missãoo = "Orlando";
let missão = "encontrar o item valioso";
let historia = `${personagem} é uma garota de ${idadeePersonagemm} anos, ela tem uma missão na cidade de ${Missãoo}, sua missão é ${missão}, para ajuda-la a chegar na sua terra natal.`

console.log(historia);
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:
let meChamo = "Giovanna";
let objetivo = "conhecimento e propesridade";
let fraseMotivacional = `Eu, ${meChamo}, tenho um objetivo esse ano para adquirir ${objetivo}, e sempre acredite no seu potencial.`

console.log(fraseMotivacional);
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

// → Seu código aqui:
console.log("==================================")
console.log("       SISTEMA DO USUÁRIO")
console.log("==================================")
console.log("1 - Ver Perfil")
console.log("2 - Editar Perfil")
console.log("3 - Configurações")
console.log("4 - Notificações")
console.log("5 - Relatórios")
console.log("6 - Ajuda")
console.log("7 - Sobre o Sistema")
console.log("0 - Sair")
console.log("==================================")
console.log("Digite o número da opcão desejada")
console.log("==================================")
console.log("_______________________________");