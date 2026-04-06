// ============================================================
//   ATIVIDADE 08 – Estruturas de Controle (Switch / Case)
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// ============================================================

let lerDados = require('readline-sync')
// ------------------------------------------------------------
// EXERCÍCIO 1 – Switch simples com número
// ------------------------------------------------------------
// a) Declare "planeta" com valor 3.
// b) Usando switch/case, exiba o nome do planeta do Sistema Solar
//    correspondente ao número (1 = Mercúrio, 2 = Vênus,
//    3 = Terra, 4 = Marte, 5 = Júpiter, 6 = Saturno,
//    7 = Urano, 8 = Netuno).
// c) No default, exiba: "Planeta não encontrado."

// → Seu código aqui:
// A)
let planeta = 3
// B)
switch(planeta) {
case 1: 
    console.log("Mercurio");
    break;
case 2: 
    console.log("Vênus");
    break;
case 3:
    console.log("Terra");
    break;
case 4:
    console.log('Marte');
    break;
case 5:
    console.log('Jupiter');
    break;
case 6:
    console.log('saturno');
    break;
case 7:
    console.log('Urano');
    break;
case 8:
    console.log('Netuno');
    break;
    default:
    console.log("Numero invalido! Escolha um numero de 1 a 8")
};

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Switch com string
// ------------------------------------------------------------
// a) Declare "direcao" com valor "norte".
// b) Usando switch/case, exiba a mensagem correspondente:
//    - "norte"  → "Seguindo para o Norte ↑"
//    - "sul"    → "Seguindo para o Sul ↓"
//    - "leste"  → "Seguindo para o Leste →"
//    - "oeste"  → "Seguindo para o Oeste ←"
//    - default  → "Direção desconhecida."

// → Seu código aqui:
// A)
let direcao = "Norte"
// B)
switch(direcao){
    case "Norte":
        console.log("Seguindo para o Norte ↑")
        break;
    case "Sul":
        console.log("Seguindo para o Sul ↓");
        break;
    case "Leste":
        console.log("Seguindo para o Leste →");
        break;
    case "Oeste":
        console.log("Seguindo para o Oeste ←");
        break
            default:
            console.log("Direção desconhecida.");  
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Fall-through(cascata) intencional
// ------------------------------------------------------------
// a) Declare "tipoVeiculo" com valor "moto".
// b) Usando fall-through (cases sem break), classifique:
//    - "bicicleta" ou "moto" ou "carro"  → "Veículo leve"
//    - "caminhao" ou "onibus"             → "Veículo pesado"
//    - default                            → "Tipo desconhecido."
// c) Exiba a categoria com template literal.

// → Seu código aqui:
// A)
let tipoVeiculo = "Moto"
// B)
switch(tipoVeiculo){
    case "Bicicleta":
    case "Moto":
    case "Carro":
        console.log("Veículo leve");
        break
    case "Caminhão":
    case "onibus":
        console.log("Veículo pesado");
        break
            default:
            console.log("Tipo desconhecido.");
}
// C)
console.log(`Categoria: ${tipoVeiculo}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Switch com input (número)
// ------------------------------------------------------------
// a) Exiba o menu de turnos para o usuário:
//    1 – Manhã | 2 – Tarde | 3 – Noite
// b) Peça ao usuário que escolha um turno (questionInt()).
// c) Com switch/case, exiba a saudação correspondente:
//    - 1 → "Bom dia! Turno da manhã."
//    - 2 → "Boa tarde! Turno da tarde."
//    - 3 → "Boa noite! Turno da noite."
//    - default → "Opção inválida."

// → Seu código aqui:
// A)
console.log("\nTurnos");
console.log('1 - Manhã');
console.log('2 - Tarde');
console.log('3 - Noite');
// B)
let escolha = lerDados.questionInt("Escolha o turno digitando de acordo com o numero na tabela acima: ");
// C)
switch(escolha) {
    case 1:
        console.log("Bom dia! Turno da manhã.");
        break;
    case 2:
        console.log("Boa tarde! Turno da tarde.");
        break;
    case 3:
        console.log("Boa noite! Turno da noite.");
        break;
            default:
            console.log("Opção inválida.");
}
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Switch com input (string)
// ------------------------------------------------------------
// a) Pergunte ao usuário qual é a estação do ano favorita dele
//    (question()): "verao", "outono", "inverno" ou "primavera".
// b) Com switch/case, exiba uma descrição curta da estação:
//    - "verao"     → "Dias quentes e férias!"
//    - "outono"    → "Folhas caindo e temperaturas amenas."
//    - "inverno"   → "Frio, cobertores e chocolate quente."
//    - "primavera" → "Flores, calor e renovação."
//    - default     → "Estação não reconhecida."

// → Seu código aqui:
// A)
let estacao = lerDados.question("Sua estação fav: ")
// B)
switch(estacao) {
    case "Verao":
        console.log("Dias quentes e férias!");
        break;
    case "Outuno":
        console.log("Folhas caindo e temperaturas amenas.");
        break;
    case "Inverno":
        console.log("Frio, cobertores e chocolate quente.");
        break;
    case "Primavera":
        console.log("Flores, calor e renovação.");
        break;
        default:
        console.log("Estação não reconhecida.");
}
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Dias da semana com fall-through
// ------------------------------------------------------------
// a) Pergunte ao usuário um número de 1 a 7 (questionInt()).
// b) Usando fall-through intencional:
//    - 1 a 5  → exiba: "Dia útil"
//    - 6 ou 7 → exiba: "Final de semana"
//    - default → "Número inválido"

// → Seu código aqui:
// A)
let numeros = lerDados.questionInt("Escolha um número de 1 a 7: ");
// B)
switch(numeros) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Dia útil");
    case 6:
    case 7:
        console.log("Final de semana")
    default:
    console.log("Número inválido");
};

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Switch com objeto
// ------------------------------------------------------------
// a) Crie um objeto "produto" com as propriedades, perguntando ao usuário:
//    - nome
//    - categoria: número de 1 a 4 | 1 – Eletrônico | 2 – Vestuário | 3 – Alimento | 4 – Livro
//    - preco
// b) Com switch/case na categoria:
//    - 1 → adicione ao objeto: descricaoCategoria: "Eletrônico" e garantia: "12 meses"
//    - 2 → adicione ao objeto: descricaoCategoria: "Vestuário" e garantia: "Troca em 30 dias"
//    - 3 → adicione ao objeto: descricaoCategoria: "Alimento" e garantia: "Ver validade"
//    - 4 → adicione ao objeto: descricaoCategoria: "Livro" e garantia: "Sem garantia"
//    - default → adicione ao objeto: descricaoCategoria: "Categoria invalida" e garantia: "Sem garantia". Também exiba no console: "Categoria inválida."
// c) Exiba o objeto com console.table().

// → Seu código aqui:
// A)
let produto = {
    nome: lerDados.question("Nome do produto: "),
    categoria: lerDados.questionInt("Escolha um número de 1 a 4:  1 – Eletrônico  2 – Vestuário  3 – Alimento  4 – Livro: "),
    preco: lerDados.questionFloat("Preço do produto: ")
};
// B)
switch(produto.categoria){
    case 1:
        produto.descricaoCategoria = "Eletrônico"
        produto.garantia = "12 meses"
        break
    case 2:
        produto.descricaoCategoria = "Vestuário"
        produto.garantia = "Troca em 30 dias"
        break
    case 3:
        produto.descricaoCategoria = "Alimento"
        produto.garantia = "Ver validade"
        break
    case 4:
        produto.descricaoCategoria = "Livro"
        produto.garantia = "Sem garantia"
        break
    default:
        produto.descricaoCategoria = "Categoria invalida"
        produto.garantia = "Sem garantia."
}
// C)
console.table(produto)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Conversor de nota para conceito e cor
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome
//    - Nota de 0 a 10 (questionInt()).
// b) Descubra o conceito de acordo com a nota, utilizando switch/case e adicione ao objeto o conceito e a mensagem correspondente.
//    - 10 ou 9  → conceito: "A", mensagem: "Excelente!"
//    - 8 ou 7   → conceito: "B", mensagem: "Muito bom!"
//    - 6 ou 5   → conceito: "C", mensagem: "Suficiente."
//    - 4 ou 3   → conceito: "D", mensagem: "Em recuperação."
//    - 2, 1 ou 0 → conceito: "F", mensagem: "Reprovado."
//    - default  → "Nota inválida."
// c) Exiba: "<nome> – Nota: <nota> | Conceito: <conceito> | <mensagem>"

// → Seu código aqui:
// A)
let usuario = {
    nome0: lerDados.question('Nome: '),
    nota: lerDados.questionInt("Nota de 0 a 10: "),
}
// B)
switch(usuario.nota) {
    case 10:
    case 9:
        usuario.conceito = "A"
        usuario.mensagem = "Excelente!"
        break
    case 8:
    case 7:
        usuario.conceito = "B"
        usuario.mensagem = "Muito bom!"
        break
    case 6:
    case 5:
        usuario.conceito = "C"
        usuario.mensagem = "Suficiente."
        break
    case 4:
    case 3:
        usuario.conceito = "D"
        usuario.mensagem = "Em recuperação."
        break
    case 2:
    case 1:
    case 0:
        usuario.conceito = "F"
        usuario.mensagem = "Reprovado."
        break
    default:
        console.log("Nota inválida.");
}
// C)
console.log(`${usuario.nome0} – Nota: ${usuario.nota} | Conceito: ${usuario.conceito} | ${usuario.mensagem}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Calculadora com switch
// ------------------------------------------------------------
// a) Pergunte ao usuário dois números (questionFloat()).
// b) Exiba o menu de operações:
//    1 – Soma | 2 – Subtração | 3 – Multiplicação | 4 – Divisão | 5 – Resto
// c) Peça ao usuário que escolha uma operação (questionInt()).
// d) Com switch/case, calcule e exiba o resultado no formato:
//    "<numeroA> <símbolo> <numeroB> = <resultado>"
//    Se a operação for 4 (divisão) e o divisor for 0, exiba:
//    "Erro: divisão por zero não é permitida."
//    No default, exiba: "Operação inválida."

// → Seu código aqui:
// A)
let num0 = lerDados.questionInt("Digite o primeiro numero: ")
let num1 = lerDados.questionInt("Digite o segundo numero: ")
// B)
console.log("\n==== OPERAÇÕES====")
console.log("1 – Soma");
console.log("2 – Subtração");
console.log("3 – Multiplicação");
console.log("4 – Divisão");
console.log("5 – Resto");
// C)
let operacao0 = lerDados.questionInt("Escolha a opcao desejada de acordo com a tabela acima: ")
// D)
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
            break
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
};

console.log(`${num0} ${simbolo} ${num1} = ${resultado}`)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Menu de loja completo
// ------------------------------------------------------------
// a) Crie um objeto "loja" com:
//    - nome: "TechShop"
//    - saldo: 0
// b) Exiba o menu:
//    1 – Ver produtos | 2 – Comprar | 3 – Ver carrinho | 4 – Sair
// c) Peça ao usuário uma opção (questionInt()).
// d) Com switch/case:
//    - 1 → exiba uma lista fixa de 3 produtos com preços usando console.table()
//          (ex: [{ produto: "Mouse", preco: 89.90 }, ...])
//    - 2 → pergunte qual produto e o preço (question + questionFloat),
//          adicione ao saldo e exiba: "Produto adicionado ao carrinho."
//    - 3 → exiba: "Total no carrinho: R$ <saldo>"
//    - 4 → exiba: "Obrigado por visitar a TechShop!"
//    - default → exiba: "Opção inválida."

// → Seu código aqui:
// A)
let loja = {
    nome: "TechShop",
    saldo: 0
}
// B)
console.log("\n=== MENU ===");
console.log("1 = Ver produtos");
console.log("2 = Comprar");
console.log("3 = Ver carrinho");
console.log("4 = Sair");
// c)
let opcao0 = lerDados.questionInt("Escolha uma opcao: ")
// D)
switch(opcao){
    case 1:
        console.table([{ produto: "Mouse", preco: 89.90 }, {produto2: "Teclado", preco2: 65.99}, {produto3: "Cabo USB", preco3: 54.99}])
        break
    case 2:
    

}
console.log("_______________________________");