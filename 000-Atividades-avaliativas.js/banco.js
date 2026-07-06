// ======================  Desenvolvimento de um Banco em JavaScript  =================================

// Integrantes: Isabella Amorim e Giovanna Silva


const lerDados = require("readline-sync");

let banco = {
    usuarios: []
};


// ================= CADASTRO =================

function cadastro() {
    let nome = lerDados.question("Nome: ");
    let senha = lerDados.questionInt("Senha: ");

    let conta = {
        numero: Math.floor(Math.random() * 99999),
        nome: nome,
        senha: senha,
        saldo: 0,
        extrato: [],
        investimentos: 0,
        cashback: 0
    };

    banco.usuarios.push(conta);

    console.log("\nConta criada com sucesso!");
    console.log("Numero da conta:", conta.numero);
}


// ================= LOGIN =================

function login() {

    let numero = lerDados.questionInt("Numero da conta: ");
    let senha = lerDados.questionInt("Senha: ");

    let usuario = banco.usuarios.find(                                      // Serve para achar um elemento
        conta => conta.numero === numero && conta.senha === senha
    );


    if(usuario){
        menu(usuario);
    } else {
        console.log("Numero da conta ou senha invalida!");
    }
}


// ================= SAQUE =================

function saque(conta){

    let valor = lerDados.questionFloat("Valor do saque: ");

    if(valor > 0 && valor <= conta.saldo){

        conta.saldo -= valor;

        conta.extrato.push({
            tipo:"Saque",
            valor:valor,
            data:new Date()
        });

        console.log("Saque realizado!");

    }else{
        console.log("Saldo insuficiente!");

}
}


// ================= DEPOSITO =================

function deposito(conta){

    let valor = lerDados.questionFloat("Valor deposito: ");

    if(valor > 0){

    conta.saldo += valor;

    conta.extrato.push({
        tipo:"Deposito",
        valor:valor,
        data:new Date()
    });

    console.log("Deposito realizado!");

}else{

    console.log("Valor invalido!");

}
}


// ================= EXTRATO =================

function extrato(conta){

    console.log("\n===== EXTRATO =====");

    if(conta.extrato.length === 0){
        console.log("Nenhuma movimentacao.");
    }

    for(let i = 0; i < conta.extrato.length; i++){ // Esse loop percorre todas as movimentações

        console.log(
            conta.extrato[i].tipo,                      // usado para pegar o tipo da movimnetação
            "- R$",
            conta.extrato[i].valor,
            conta.extrato[i].data.toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
            conta.extrato[i].data.toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' })
            // Formatar a exibição o horario e a data brasileiro
        );

    }

    console.log("Saldo atual:", conta.saldo);
}



// ================= TRANSFERENCIA =================

function transferencia(conta){

    let destino = lerDados.questionInt("Conta destino: ");
    let valor = lerDados.questionFloat("Valor: ");

    let outraConta;

    for (let usuario of banco.usuarios) {       // Quando não precisamos de um indice o for...of pode ser utilizado (percorrendo apenas os valores)
        if (usuario.numero === destino) {
            outraConta = usuario;
            break;
        }
    }

    if (outraConta && valor > 0 && valor <= conta.saldo) {

        conta.saldo -= valor;
        outraConta.saldo += valor;

        conta.extrato.push({
            tipo: "Transferencia enviada",
            valor: valor,
            data: new Date()
        });

        outraConta.extrato.push({
            tipo: "Transferencia recebida",
            valor: valor,
            data: new Date()
        });

        console.log("Transferencia feita!");

    } else {
        console.log("Conta inexistente, saldo insuficiente ou valor invalido.");
    }
}



// ================= EMPRESTIMO =================

function emprestimo(conta){

    let valor = lerDados.questionFloat("Valor emprestimo: ");


    if(valor > 0){

    conta.saldo += valor;

    conta.extrato.push({
        tipo:"Emprestimo",
        valor:valor,
        data:new Date()
    });

    console.log("Emprestimo aprovado!");

}else{

    console.log("Valor invalido!");

}
}


// ================= INVESTIMENTO =================

function investimento(conta){

    let valor = lerDados.questionFloat("Investir quanto? ");


    if(valor > 0 && valor <= conta.saldo){

    conta.saldo -= valor;
    conta.investimentos += valor;

    conta.extrato.push({
        tipo:"Investimento",
        valor:valor,
        data:new Date()
    });

    console.log("Investimento realizado!");

}else{

    console.log("Saldo insuficiente ou valor invalido!");

}

}



// ================= CASHBACK =================

function cashback(conta){

    conta.cashback += 10;

    conta.extrato.push({
        tipo:"Cashback",
        valor:10,
        data:new Date()
    });

    console.log("Voce recebeu R$10 de cashback");

}



// ================= RECARGA =================

function recarga(conta){

    let valor = lerDados.questionFloat("Valor recarga: ");

    if(valor > 0 && valor <= conta.saldo){

        conta.saldo -= valor;

        conta.extrato.push({
            tipo:"Recarga celular",
            valor:valor,
            data:new Date()
        });

        console.log("Celular recarregado!");

    }else{

        console.log("Saldo insuficiente ou valor invalido!");

    }

}



// ================= INFORMACOES =================

function infos(conta){

    console.log(`
    ===== CONTA =====

    Nome: ${conta.nome}
    Numero: ${conta.numero}
    Saldo: R$${conta.saldo}
    Investimentos: R$${conta.investimentos}
    Cashback: R$${conta.cashback}

    `);

}



// ================= MENU =================

function menu(conta){

let opcao;


do{

console.log(`
====================
BANCO DIGITAL

1 - Deposito
2 - Saque
3 - Extrato
4 - Transferencia
5 - Emprestimo
6 - Investimentos
7 - Cashback
8 - Recarga celular
9 - Gerar infos
0 - Sair

====================
`);


opcao = lerDados.questionInt("Opcao: ");


switch(opcao){

case 1:
deposito(conta);
break;


case 2:
saque(conta);
break;


case 3:
extrato(conta);
break;


case 4:
transferencia(conta);
break;


case 5:
emprestimo(conta);
break;


case 6:
investimento(conta);
break;


case 7:
cashback(conta);
break;


case 8:
recarga(conta);
break;


case 9:
infos(conta);
break;


case 0:
console.log("Saindo...");
break;


default:
console.log("Opcao invalida");

}


}while(opcao !== 0);


}



// ================= INICIO =================


let inicio;


do{

console.log(`
1 - Criar conta
2 - Entrar
0 - Sair
`);

inicio = lerDados.questionInt("Escolha: ");


if(inicio === 1){
    cadastro();
}

if(inicio === 2){
    login();
}


}while(inicio !== 0);