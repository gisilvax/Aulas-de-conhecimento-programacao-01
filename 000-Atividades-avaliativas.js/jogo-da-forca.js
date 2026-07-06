// ============================= JOGO DA FORCA =============================

let dados = require("readline-sync");

// ==========================================================

const palavras = [
    'abacaxi', 
    'janela',
    'elefante',
    'computador',
    'pipoca',
    'girassol', 
    'mochila',
    'astronauta',
    'borboleta',
    'relâmpago',
    'chocolate', 
    'travesseiro', 
    'dinossauro', 
    'telefone', 
    'cachoeira', 
    'camiseta', 
    'helicóptero', 
    'melancia', 
    'esquilo', 
    'universidade'
];

function sortearPalavra(vetor){
    let indice = Math.floor(Math.random() * vetor.length);
    return vetor[indice];
};

function criarMascara(palavra){
    let mascara = [];
    
    for(let i = 0; i < palavra.length; i++){
        mascara.push("_");
    };
    return mascara;
};

// ==========================================================

function verificarLetra(palavra, mascara, letra){
    let encontrou = false;
    
    for(let i = 0; i < palavra.length; i++){
        if(palavra[i] === letra){
            mascara[i] = letra;
            encontrou = true;
        };
    };
    return encontrou;
};

// ==========================================================

function verificarVitoria(mascara){
    for(let i = 0; i < mascara.length; i++){
        if(mascara[i] === "_"){
            return false;
        };
    };
    return true;
};

// ==========================================================

let palavra = sortearPalavra(palavras);

let mascara = criarMascara(palavra);
let letrasTentadas = [];

let erros = 0;
const limiteErros = 6;

while (erros < limiteErros && !verificarVitoria(mascara)) {
    console.log(`\nPalavra: ${mascara.join(" ")}`);
    console.log(`Letras usadas: ${letrasTentadas.join(" , ")}`);
    console.log(`Erros: ${erros} / ${limiteErros}`);
    
    let letra = dados.question("Digite uma letra: ").toLowerCase();
    
    if(letrasTentadas.includes(letra)){
        console.log("Voce ja tentou essa letra!");
        continue
    }
    letrasTentadas.push(letra);

    let acertou  = verificarLetra(
        palavra,
        mascara,
        letra
    );

    if(acertou){
        console.log("Acertou!");
    } else {
        console.log("Errou!");
        erros++
    }
};

if(verificarVitoria(mascara)){
    console.log("\nParabens! Voce venceu!");
} else {
    console.log("Voce perdeu!");
}

console.log("A palavra era: ", palavra);
