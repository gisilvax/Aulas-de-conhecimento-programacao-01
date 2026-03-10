// ============================================================
//   ATIVIDADE 03 – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================

let lerTeclado = require('readline-sync');
// ------------------------------------------------------------
// EXERCÍCIO 1 – Explorando os métodos do console
// ------------------------------------------------------------
// a) Use console.log() para exibir a mensagem: "Iniciando o programa..."
// b) Use console.info() para exibir uma mensagem informando sobre o que é a atividade atual.
// c) Use console.warn() para exibir um aviso de que o usuário sempre precisa iniciar o programa com node e o nome do arquivo.
// d) Use console.error() para exibir uma mensagem de erro aleatória de sua escolha.

// → Seu código aqui:
console.log('Iniciando o Programa...');
console.info('Atividade sobre imput e output');
console.warn('Sempre iniciar o programa com node e o nome do arquivo');
console.error('Erro ao exibir as informações');

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Saudação personalizada
// ------------------------------------------------------------
// a) Peça ao usuário que digite seu nome usando question().
// b) Peça ao usuário que digite sua idade usando questionInt().
// c) Exiba no console uma saudação usando template literal, no formato:
//    "Olá, <nome>! Você tem <idade> anos."

// → Seu código aqui:
const nomeUsuario = lerTeclado.question('Digite seu nome: ');
const idadeUsuario = lerTeclado.questionInt('Digite sua idade: ');
let apresentacao = (`Olá, ${nomeUsuario}! Você tem ${idadeUsuario} anos. `);
console.log(apresentacao);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Ficha pessoal
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados: nome, idade e cidade.
// b) Crie um objeto chamado "ficha" com as propriedades: nome, idade e cidade.
// c) Exiba o objeto com console.table().

// → Seu código aqui:
// a)
const usuarioNome = lerTeclado.question('Digite seu nome: ');
const usuarioIdade = lerTeclado.questionInt('Digite sua idade: ');
const cidadeUsuario = lerTeclado.question('Digite sua cidade: ');
// b)
const ficha = {
    nome: usuarioNome,
    idade: usuarioIdade,
    cidade: cidadeUsuario
};
// c)
console.table(ficha);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.

// → Seu código aqui:
let gostaDeCozinhar = lerTeclado.keyInYN('Gosta de cozinhar?');
let viajariaPeloMundo = lerTeclado.keyInYN('Voce viajaria pelo mundo?');
let perguntas = (`${gostaDeCozinhar}, ${viajariaPeloMundo}`);
console.log(perguntas);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().

// → Seu código aqui:
let comidaFavI = lerTeclado.question('Cite sua primeira comida favorita: ');
let comidaFavII = lerTeclado.question('Cite sua segunda comida favorita: ');
let comidaFavIII = lerTeclado.question('Cite sua terceira comida favorita: ');

let comidasFavoritas = [comidaFavI, comidaFavII, comidaFavIII];

console.table(comidasFavoritas);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Apresentação completa
// ------------------------------------------------------------
// a) Peça ao usuário: nome, profissão e cidade.
// b) Armazene estes dados em um objeto 'cadastroPessoal'
// c) Exiba no console uma frase completa com os dados, usando template literal:
//    "Me chamo <nome>. Profissão: <profissão> e moro na cidade de: <cidade>."
// d) Exiba a mesma informação com console.table().

// → Seu código aqui:
let usuarioNomee = lerTeclado.question('Digite seu nome: ');
let usuarioProfissao = lerTeclado.question('Digite sua profissão: ');
let usuarioCidade = lerTeclado.question('Digite sua cidade: ');

let cadastroPessoal = {
    Nome: usuarioNomee,
    Profissao: usuarioProfissao,
    Cidade: usuarioCidade
};

let meApresentando = (`Me chamo ${usuarioNomee}. Profissão: ${usuarioProfissao} e moro na cidade de: ${usuarioCidade}`);
console.table(meApresentando);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Lista de objetos
// ------------------------------------------------------------
// a) Através do terminal, capture o dado de 3 usuários fictícios, cada um com as seguintes propriedades:
//    nome(string), idade(number) e endereço(objeto).
//    objeto endereço deve conter as propriedades: cidade(string), rua(string) e numero(number)
// b) Armazene cada usuário em um objeto.
// c) Armazee os objetos em um array 'listaDeUsuarios'
// d) Exiba o array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:
let usuario1 = {
    nome: lerTeclado.question('Digite seu nome: '),
    idade: lerTeclado.questionInt('Digite sua idade: '),
    endereco: {
        cidade: lerTeclado.question('Digite a cidade: '),
        rua: lerTeclado.question('Digite a rua: '),
        numero: lerTeclado.questionInt('Digite o numero da casa: ')
    }
};
console.log("________________________________________");

let usuario2 = {
    nome: lerTeclado.question('Digite seu nome: '),
    idade: lerTeclado.questionInt('Digite sua idade: '),
    endereco: {
        cidade: lerTeclado.question('Digite a cidade: '),
        rua: lerTeclado.question('Digite a rua: '),
        numero: lerTeclado.questionInt('Digite o numero da casa: ')
    }
};
console.log("________________________________________");

let usuario3 = {
    nome: lerTeclado.question('Digite seu nome: '),
    idade: lerTeclado.questionInt('Digite sua idade: '),
    endereco: {
        cidade: lerTeclado.question('Digite a cidade: '),
        rua: lerTeclado.question('Digite a rua: '),
        numero: lerTeclado.questionInt('Digite o numero da casa: ')
    }
};
console.log("________________________________________");

let listaDeUsuario = [usuario1, usuario2, usuario3];
console.table(listaDeUsuario);

console.log(listaDeUsuario[1].nome, 
    listaDeUsuario[1].idade);
console.log(listaDeUsuario[2].endereco);
console.log(listaDeUsuario[0].nome, 
    listaDeUsuario[0].endereco.rua);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Exiba o array 'turma' com console.table().
// e) Exiba o nome e a 1ª nota do 2º aluno.
// f) Exiba o nome e a 2ª nota do 3º aluno.
// g) Exiba o nome e a 3ª nota do 1º aluno.

// → Seu código aqui:
let aluno1 = {
    nome: lerTeclado.question('Digite seu nome: '),
    notas: {
        nota1: lerTeclado.questionInt('Digite sua primeira notas: '),
        nota2: lerTeclado.questionInt('Digite sua segunda notas: '),
        nota3: lerTeclado.questionInt('Digite sua terceira notas: ')
    }
};
console.log("_______________________________");

let aluno2 = {
    nome: lerTeclado.question('Digite seu nome: '),
    notas: {
        nota1: lerTeclado.questionInt('Digite sua primeira notas: '),
        nota2: lerTeclado.questionInt('Digite sua segunda notas: '),
        nota3: lerTeclado.questionInt('Digite sua terceira notas: ')
    }
};
console.log("_______________________________");
   
let aluno3 = {
    nome: lerTeclado.question('Digite seu nome: '),
    notas: {
        nota1: lerTeclado.questionInt('Digite sua primeira notas: '),
        nota2: lerTeclado.questionInt('Digite sua segunda notas: '),
        nota3: lerTeclado.questionInt('Digite sua terceira notas: ')
    }
};
console.log("_______________________________");

let turma = [aluno1, aluno2, aluno3];
console.table(turma);

console.log(turma[1].nome,
    turma[1].nota1);
console.log(turma[2].nome,
    turma[2].nota2);
    console.log(turma[0].nome,
        turma[0].nota3);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Cadastro de produto
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de um produto:
//    - nome (string)
//    - categoria (string)
//    - preço (float)
//    - quantidade em estoque (inteiro)
//    - está disponível para venda? (sim/não, usando keyInYN())
// b) Crie um objeto 'produto' com todas essas propriedades.
//    A propriedade de disponibilidade deve se chamar 'disponivel' e ser boolean (true/false).
// c) Exiba o objeto completo com console.table().
// d) Exiba no console uma frase resumo usando template literal:
//    "Produto: <nome> | Categoria: <categoria> | Estoque: <quantidade> un".

// → Seu código aqui:
let produto = {
    nome: lerTeclado.question("Digite o nome do produto: "),
    categoria: lerTeclado.question("Informe a categoria do produto: "),
    preçoProduto: lerTeclado.questionFloat('Digite o preço do produto: '),
    estoqueProduto: lerTeclado.questionInt("Digite a quatidade de estoque do produto: "),
    disponivelProduto: lerTeclado.keyInYN('Esta disponivel para a venda? ')
};
console.table(produto);

console.log(`produto: ${produto.nome} | Categoria: ${produto.categoria} | Estoque: ${produto.estoque} un`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Farmacia
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de dois medicamento com as seguintes propriedades:
//    - nome (string)
//    - preco (float)
//    - emEstoque (boolean) - (sim/não, usando keyInYN())
// b) Crie uma lista "estoqueFarmacia" e insira os objetos criados com push().
// c) Exiba a lista com console.table().
// d) Exiba somente o nome e preço do 2 medicamento.
// e) Exiba somente o nome e se está em estoque o 1 medicamento.

// Seu código aqui:
let medicamento1 = {
    nome: lerTeclado.question('Digite o nome do medicamento: '),
    preco: lerTeclado.questionFloat('Digite o preço do medicamneto: '),
    emEstoque: lerTeclado.keyInYN('Tem estoque desse medicamento? ')
};

console.log("____________________________________");

let medicamento2 = {
    nome: lerTeclado.question('Digite o nome do medicamento: '),
    preco: lerTeclado.questionFloat('Digite o preço do medicamneto: '),
    emEstoque: lerTeclado.keyInYN('Tem estoque desse medicamento? ')
};

console.log("____________________________________");

let estoqueFarmacia = [medicamento1, medicamento2];
console.table(estoqueFarmacia);
console.log("____________________________________");

console.log(estoqueFarmacia[1].nome, 
    estoqueFarmacia[1].preco);

    console.log(estoqueFarmacia[0].nome, 
        estoqueFarmacia[0].emEstoque);
