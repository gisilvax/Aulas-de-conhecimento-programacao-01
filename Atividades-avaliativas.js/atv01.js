const ler = require("readline-sync");

let tabuleiro = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
];

let jogador = "X";
let jogadas = 0;

while (true) {

    console.log("\n===== TABULEIRO =====");

    for (let i = 0; i < 3; i++) {

        console.log(
            tabuleiro[i][0] + " | " +
            tabuleiro[i][1] + " | " +
            tabuleiro[i][2]
        );

    }

    console.log("\nJogador:", jogador);

    let linha = ler.questionInt("Digite a linha (0 a 2): ");
    let coluna = ler.questionInt("Digite a coluna (0 a 2): ");

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

    tabuleiro[linha][coluna] = jogador;

    jogadas++;

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

    if (jogador === "X") {

        jogador = "O";

    } else {

        jogador = "X";

    }

}