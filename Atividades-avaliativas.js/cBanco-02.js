let rl = require("readline-sync")

// ==========================
// VARIÁVEIS GLOBAIS
// ==========================

let usuarios = []

let taxas = {
    ted: 10,
    doc: 15,
    investimentoVariavel: 0.02
}

// ==========================
// CRIAR USUÁRIO
// ==========================

function criarUsuario(){

    let usuario = {
        nome: rl.question("Nome: "),
        cpf: rl.question("CPF: "),
        saldo: 0,
        bonus: 0,
        limite: 1000,
        logado: false,
        tipo: "Conta Corrente",

        investimentos: [],

        historico: []
    }

    usuarios.push(usuario)

    console.log("Conta criada com sucesso!")
}

// ==========================
// LOGIN
// ==========================

function acessarConta(){

    let cpf = rl.question("CPF: ")

    for(let i = 0; i < usuarios.length; i++){

        if(usuarios[i].cpf == cpf){

            usuarios[i].logado = true

            console.log("Login realizado!")

            return usuarios[i]
        }
    }

    console.log("Conta nao encontrada.")
    return null
}

// ==========================
// REGISTRAR EXTRATO
// ==========================

function registrarExtrato(usuario, operacao, valor){

    let agora = new Date()

    usuario.historico.push({
        operacao: operacao,
        valor: valor,
        data: agora.toLocaleDateString(),
        hora: agora.toLocaleTimeString()
    })
}

// ==========================
// DEPÓSITO
// ==========================

function deposito(usuario){

    let valor = rl.questionFloat("Valor: ")

    usuario.saldo += valor

    registrarExtrato(usuario,"Deposito",valor)

    console.log("Deposito realizado!")
}

// ==========================
// SAQUE
// ==========================

function saque(usuario){

    let valor = rl.questionFloat("Valor: ")

    if(valor > usuario.saldo){

        console.log("Saldo insuficiente.")
        return
    }

    usuario.saldo -= valor

    registrarExtrato(usuario,"Saque",valor)

    console.log("Saque realizado!")
}

// ==========================
// TRANSFERÊNCIA
// ==========================

function transferencia(usuario){

    let cpfDestino = rl.question("CPF destino: ")

    let destino = null

    for(let i = 0; i < usuarios.length; i++){

        if(usuarios[i].cpf == cpfDestino){
            destino = usuarios[i]
        }
    }

    if(destino == null){

        console.log("Conta nao encontrada.")
        return
    }

    console.log(`
1 - PIX
2 - TED
3 - DOC
`)

    let tipo = rl.questionInt("Opcao: ")

    let valor = rl.questionFloat("Valor: ")

    let taxa = 0

    if(tipo == 2){
        taxa = taxas.ted
    }

    if(tipo == 3){
        taxa = taxas.doc
    }

    if(usuario.saldo < valor + taxa){

        console.log("Saldo insuficiente.")
        return
    }

    usuario.saldo -= valor + taxa
    destino.saldo += valor

    registrarExtrato(usuario,"Transferencia",valor)
    registrarExtrato(destino,"Recebimento",valor)

    console.log("Transferencia realizada!")
}

// ==========================
// EMPRÉSTIMO
// ==========================

function emprestimo(usuario){

    let valor = rl.questionFloat("Valor do emprestimo: ")

    usuario.saldo += valor

    registrarExtrato(usuario,"Emprestimo",valor)

    console.log("Emprestimo aprovado!")
}

// ==========================
// INVESTIMENTO RENDA FIXA
// ==========================

function rendaFixa(usuario){

    let valor = rl.questionFloat("Valor: ")

    if(valor > usuario.saldo){

        console.log("Saldo insuficiente.")
        return
    }

    usuario.saldo -= valor

    usuario.investimentos.push({
        tipo: "Renda Fixa",
        valor: valor
    })

    registrarExtrato(usuario,"Investimento RF",valor)
}

// ==========================
// INVESTIMENTO VARIÁVEL
// ==========================

function rendaVariavel(usuario){

    let valor = rl.questionFloat("Valor: ")

    if(valor > usuario.saldo){

        console.log("Saldo insuficiente.")
        return
    }

    usuario.saldo -= valor

    usuario.investimentos.push({
        tipo: "Renda Variavel",
        valor: valor
    })

    registrarExtrato(usuario,"Investimento RV",valor)
}

// ==========================
// CASHBACK
// ==========================

function cashback(usuario){

    let valor = 20

    usuario.saldo += valor

    registrarExtrato(usuario,"Cashback",valor)

    console.log("Cashback recebido!")
}

// ==========================
// RECARGA
// ==========================

function recargaCelular(usuario){

    let valor = rl.questionFloat("Valor da recarga: ")

    if(valor > usuario.saldo){

        console.log("Saldo insuficiente.")
        return
    }

    usuario.saldo -= valor

    registrarExtrato(usuario,"Recarga Celular",valor)
}

// ==========================
// EXTRATO
// ==========================

function exibirExtrato(usuario){

    console.log("\n===== EXTRATO =====")

    for(let i = 0; i < usuario.historico.length; i++){

        console.log(`
Operacao: ${usuario.historico[i].operacao}
Valor: R$ ${usuario.historico[i].valor}
Data: ${usuario.historico[i].data}
Hora: ${usuario.historico[i].hora}
--------------------
`)
    }

    console.log(`Saldo Atual: R$ ${usuario.saldo}`)
}

// ==========================
// EXCLUIR CONTA
// ==========================

function excluirConta(usuario){

    let indice = usuarios.indexOf(usuario)

    usuarios.splice(indice,1)

    console.log("Conta excluida.")
}

// ==========================
// ATUALIZAR CONTA
// ==========================

function atualizarConta(usuario){

    usuario.nome = rl.question("Novo nome: ")

    console.log("Dados atualizados!")
}

// ==========================
// AJUDA
// ==========================

function ajuda(){

    console.log(`
Deposito -> adiciona saldo
Saque -> remove saldo
Transferencia -> envia dinheiro
Investimento -> aplica dinheiro
Extrato -> mostra historico
`)
}

// ==========================
// MENU PRINCIPAL
// ==========================

function menu(usuario){

    let opcao

    do{

        console.log(`
1 - Deposito
2 - Saque
3 - Transferencia
4 - Emprestimo
5 - Investimento RF
6 - Investimento RV
7 - Cashback
8 - Recarga Celular
9 - Extrato
10 - Atualizar Conta
11 - Excluir Conta
12 - Ajuda
0 - Sair
`)

        opcao = rl.questionInt("Opcao: ")

        switch(opcao){

            case 1: deposito(usuario); break
            case 2: saque(usuario); break
            case 3: transferencia(usuario); break
            case 4: emprestimo(usuario); break
            case 5: rendaFixa(usuario); break
            case 6: rendaVariavel(usuario); break
            case 7: cashback(usuario); break
            case 8: recargaCelular(usuario); break
            case 9: exibirExtrato(usuario); break
            case 10: atualizarConta(usuario); break
            case 11: excluirConta(usuario); break
            case 12: ajuda(); break
        }

    }while(opcao != 0)
}