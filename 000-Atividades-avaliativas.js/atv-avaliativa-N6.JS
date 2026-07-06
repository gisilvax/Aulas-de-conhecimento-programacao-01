// =============== CALCULADORA ===============
let lerDados = require("readline-sync");

let continuar;

do {
    console.log("\n========= CALCULADORA =========");
    
    console.log("\n==== OPERAÇÕES====");
    console.log("1 – Soma");
    console.log("2 – Subtração");
    console.log("3 – Multiplicação");
    console.log("4 – Divisão");
    console.log("5 – Resto");

    let operacao0 = lerDados.questionInt("Escolha a opcao desejada de acordo com a tabela acima: ");

    let num0 = lerDados.questionInt("Digite o primeiro numero: ");
    let num1 = lerDados.questionInt("Digite o segundo numero: ");

    let resultado;
    let simbolo;

    switch(operacao0){
        case 1:
            resultado = num0 + num1
            simbolo = "+"
            break
        case 2:
            resultado = num0 - num1
            simbolo = "-"
            break
        case 3:
            resultado = num0 * num1
            simbolo = "*"
            break
        case 4:
            if (num1 === 0){
                simbolo = "/"
                resultado = "Erro: divisão por zero não é permitida."
                continue
        }
            resultado = num0 / num1
            simbolo = "/"
            break
        case 5:
            resultado = num0 % num1
            simbolo = "%"
            break
        default:
            console.log("Operação inválida.");
            continue
}
    console.log(`\n ${num0} ${simbolo} ${num1} = ${resultado}`);
    continuar = lerDados.keyInYN("Deseja continuar? (s/n): ");

        if(continuar === "n"){
            console.log(`\nCalculadora encerrada!`)
            break
        }
} while (continuar);
