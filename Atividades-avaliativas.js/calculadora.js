// =====================================================
// CALCULADORA SIMPLES EM JAVASCRIPT
// =====================================================

const ler = require("readline-sync");


let continuar = true;

while (continuar) {

    console.log("\n==== CALCULADORA ====");
    console.log("1 - Soma");
    console.log("2 - Subtração");
    console.log("3 - Multiplicação");
    console.log("4 - Divisão");
    console.log("5 - Resto da divisão");
    console.log("0 - Sair");


    let opcao = ler.questionInt("\nEscolha uma opcao: ");


    if (opcao === 0) {
        console.log("\nPrograma encerrado!");
        continuar = false;
        break;
    }

    let num1 = ler.questionFloat("Digite o primeiro numero: ");
    let num2 = ler.questionFloat("Digite o segundo numero: ");

    let resultado;


    switch (opcao) {

        case 1:
            resultado = num1 + num2;
            console.log("\nResultado da soma:", resultado);
            break;

        case 2:
            resultado = num1 - num2;
            console.log("\nResultado da subtracao:", resultado);
            break;

        case 3:
            resultado = num1 * num2;
            console.log("\nResultado da multiplicacao:", resultado);
            break;

        case 4:

            if (num2 === 0) {
                console.log("\nNao existe divisao por zero!");
            } else {
                resultado = num1 / num2;
                console.log("\nResultado da divisao:", resultado);
            }

            break;

        case 5:
            resultado = num1 % num2;
            console.log("\nResto da divisao:", resultado);
            break;

        default:
            console.log("\nOpcao invalida!");
    }
}



// ================================================================================== //
// segunda versão com matrizes e vetor
// ================================================================================== //

// =====================================================
// CALCULADORA AVANÇADA (INICIANTE)
// UTILIZANDO MATRIZ
// =====================================================

const ler = require("readline-sync");

let historico = [];

let sistema = true;

// =====================================================

while (sistema) {

    console.log("\n=================================");
    console.log("        CALCULADORA");
    console.log("=================================");
    console.log("1 - Soma");
    console.log("2 - Subtracao");
    console.log("3 - Multiplicacao");
    console.log("4 - Divisao");
    console.log("5 - Potencia");
    console.log("6 - Resto da divisao");
    console.log("7 - Mostrar historico");
    console.log("8 - Limpar historico");
    console.log("0 - Sair");
    console.log("=================================");

    if (opcao === 0) {

        console.log("\nEncerrando sistema...");
        sistema = false;
        break;

    }

    if (opcao === 7) {

        console.log("\n======= HISTORICO =======");

        if (historico.length === 0) {

            console.log("Nenhuma operacao registrada!");

        } else {

            
            for (let i = 0; i < historico.length; i++) {

                console.log(
                    "Operacao", i + 1,
                    "| Numero 1:", historico[i][0],
                    "| Numero 2:", historico[i][1],
                    "| Resultado:", historico[i][2]
                );

            }

        }

        continue;

    }

    if (opcao === 8) {

        historico = [];

        console.log("\nHistorico apagado!");

        continue;

    }

    let num1 = ler.questionFloat("\nDigite o primeiro numero: ");
    let num2 = ler.questionFloat("Digite o segundo numero: ");

    let resultado;

    switch (opcao) {

        // SOMA
        case 1:

            resultado = num1 + num2;

            console.log("\nResultado:", resultado);

            break;

        // SUBTRAÇÃO
        case 2:

            resultado = num1 - num2;

            console.log("\nResultado:", resultado);

            break;

        // MULTIPLICAÇÃO
        case 3:

            resultado = num1 * num2;

            console.log("\nResultado:", resultado);

            break;

        // DIVISÃO
        case 4:

            if (num2 === 0) {

                console.log("\nErro! Divisao por zero.");
                continue;

            }

            resultado = num1 / num2;

            console.log("\nResultado:", resultado);

            break;

        // POTÊNCIA
        case 5:

            resultado = num1 ** num2;

            console.log("\nResultado:", resultado);

            break;

        // RESTO
        case 6:

            resultado = num1 % num2;

            console.log("\nResultado:", resultado);

            break;

        // OPÇÃO INVÁLIDA
        default:

            console.log("\nOpcao invalida!");
            continue;

    }

    historico.push([num1, num2, resultado]);
}