//                              JOGO DA VELHA X/O

//  1 - Como funciona o jogo?

    //  ° O jogo tem 9 posições a serem ocupadas.
    //  ° Se todas essas posições forem ocupadas, dara velha = sem vencedor ou empate.
    //  ° Para ganhar a rodada é preciso ocupar uma das posições: diagonal, vertival ou horizontal.
    //  ° Ao final da rodada vencedora o jogo será encerrado.


const ler = require("readline-sync");

// Criado variaveis para guardar os valores e criar o jogo da velha
let tabuleiro = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
];

let jogador = "X";
let jogadas = 0;

// Iniciando a estrutura com while
while (true) {

    console.log("\n===== TABULEIRO =====");

    for (let i = 0; i < 3; i++) {

// exibindo o tabuleiro
        console.log(
            tabuleiro[i][0] + " | " +
            tabuleiro[i][1] + " | " +
            tabuleiro[i][2]
        );

    }

    console.log("\nJogador:", jogador);

// variaveis criada para guardar o X e o O nas posições do tabuleiro
    let linha = ler.questionInt("Digite a linha (0 a 2): ");
    let coluna = ler.questionInt("Digite a coluna (0 a 2): ");

// Em caso de posição ja ocupada ou invalida, usei if aninhado para verificar o mesmo e  assim retornar como "Posicao invalida!"
    if (
        linha < 0 || linha > 2 ||
        coluna < 0 || coluna > 2
    ) {

        console.log("\nPosicao invalida!");
        continue;

    }

    if (tabuleiro[linha][coluna] !== "-") {

        console.log("\nPosicao ocupada!");
        continue;

    }

// guardando o valor na linha e coluna da matriz e contando as rodadas
    tabuleiro[linha][coluna] = jogador;

    jogadas++;

// IF abaixo: usado para acessar as posições de cada jogador para verificar um vencedor

    if (
        (
            tabuleiro[0][0] === jogador &&
            tabuleiro[0][1] === jogador &&
            tabuleiro[0][2] === jogador
        ) ||

        (
            tabuleiro[1][0] === jogador &&
            tabuleiro[1][1] === jogador &&
            tabuleiro[1][2] === jogador
        ) ||

        (
            tabuleiro[2][0] === jogador &&
            tabuleiro[2][1] === jogador &&
            tabuleiro[2][2] === jogador
        ) ||

        (
            tabuleiro[0][0] === jogador &&
            tabuleiro[1][0] === jogador &&
            tabuleiro[2][0] === jogador
        ) ||

        (
            tabuleiro[0][1] === jogador &&
            tabuleiro[1][1] === jogador &&
            tabuleiro[2][1] === jogador
        ) ||

        (
            tabuleiro[0][2] === jogador &&
            tabuleiro[1][2] === jogador &&
            tabuleiro[2][2] === jogador
        ) ||

        (
            tabuleiro[0][0] === jogador &&
            tabuleiro[1][1] === jogador &&
            tabuleiro[2][2] === jogador
        ) ||

        (
            tabuleiro[0][2] === jogador &&
            tabuleiro[1][1] === jogador &&
            tabuleiro[2][0] === jogador
        )
    ) {

// FOr para verificação do vencedor e exibir 
        console.log("\n===== TABULEIRO FINAL =====");

        for (let i = 0; i < 3; i++) {

            console.log(
                tabuleiro[i][0] + " | " +
                tabuleiro[i][1] + " | " +
                tabuleiro[i][2]
            );

        }

        console.log("\nJogador", jogador, "venceu!");

        break;

    }

// IF usado para verificar o empate e exibir 
    if (jogadas === 9) {

        console.log("\n===== TABULEIRO FINAL =====");

        for (let i = 0; i < 3; i++) {

            console.log(
                tabuleiro[i][0] + " | " +
                tabuleiro[i][1] + " | " +
                tabuleiro[i][2]
            );

        }

        console.log("\nEMPATE!");

        break;

    }

// abaixo codigo para alternar os jogadores (X / O)
    if (jogador === "X") {

        jogador = "O";

    } else {

        jogador = "X";

    };

};