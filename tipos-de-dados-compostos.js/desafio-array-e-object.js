// ============================================================
//   DESAFIOS (para quem já terminou as atividades 02 e 02-2) – Arrays e Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Acessar e alterar elementos de array
// ------------------------------------------------------------
const frutas = ['maçã', 'banana', 'laranja', 'uva'];
// a) Acesse o primeiro e o terceiro elemento e exiba com console.log().
// b) Substitua o segundo elemento por 'abacaxi' usando atribuição direta.

// → Seu código aqui:
// A)
console.log(frutas[0], frutas[2])
// B)
frutas[1] = 'Abacaxi'
console.log(frutas)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Criar novos arrays por seleção
// ------------------------------------------------------------
const letras1 = ['a', 'b', 'c', 'd', 'e', 'f'];
// a) Crie um novo array contendo apenas o primeiro, o terceiro e o sexto elementos.
// b) Crie outro array que contenha os dois últimos elementos.
// Observação: Utilize o valor de um array dentro de outro, exemplo: array2[array1[3], array[5]]

// → Seu código aqui:
// A)
const array1 = [letras1[0], letras1[2], letras1[5]]
// B)
const array2 = [array1[1], array1[2]]
// C)
console.log(`
    ${letras1}
    ${array1}
    ${array2}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Batata?
// ------------------------------------------------------------
const letras2 = ['a', 'b', 'c', 'd', 'e', 't'];
// a) Crie um novo array que retorne a palavra "batata" ao ser exibido no console.
let batata = ['batata']
console.log(batata)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Objetos: acessar e adicionar propriedades
// ------------------------------------------------------------
const pessoa = { 
  nome: 'Junin',
  idade: 22,
  endereco: {
    cidade: 'Porto Alegre',
    rua: 'Avenida Brasil'
  } 
};
// a) Acesse e exiba a propriedade 'nome' e 'cidade' do objeto 'pessoa'.
// b) Adicione uma nova propriedade 'curso' com valor 'Programação' ao objeto 'pessoa'.
// → Seu código aqui:
// A)
console.log(`
    Nome: ${pessoa.nome} 
    Cidade: ${pessoa.endereco.cidade}`)
// B)
pessoa.curso = 'Programação'
console.log(pessoa)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e arrays dentro de objetos
// ------------------------------------------------------------
const perfil = {
  usuario: 'ana123',
  dados: { 
    nome: 'Ana',
    idade: 19,
    interesses: ['música', 'fotografia', 'viagens']
  }
};
// a) Exiba o nome da pessoa cadastrada em 'perfil'.
// b) Exiba o segundo interesse da pessoa.
// c) Altere o primeiro interesse para 'arte' por atribuição direta.
// d) Exiba o nome, a idade e a lista de interesse da pessoa.

// → Seu código aqui:
// A)
console.log(`Nome: ${perfil.dados.nome}`)
// B)
console.log(`Segundo interesse: ${perfil.dados.interesses[1]}`)
// C)
perfil.dados.interesses[0] = 'Arte'
// D)
console.log(`
    Nome: ${perfil.dados.nome}
    Interesses: ${perfil.dados.interesses}`)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Criar um catálogo (array de objetos e objeto indexado)
// ------------------------------------------------------------
// Crie um array 'produtos' contendo 3 produtos, onde cada produto é um objeto contendo:
//    id(number), nomeDoProduto(string) e preço(number).
// Crie um objeto 'catalogo' onde as chaves são os ids dos produtos (1, 2, 3)
//    e os valores são o nome dos produtos correspondentes.

// → Seu código aqui:
// A)
let produtos = [
    produto1 = {
        id: 123456,
        nomeDoProduto: 'Miojo',
        preco: 2.90,
    },
    produto2 = {
        id:789101,
        nomeDoProduto: 'Batata',
        preco: 1.90
    },
    produto3 = {
        id:112131,
        nomeDoProduto: 'tomate',
        preco: 1.50,
    },
];

let catalogo = {
    chave1: produtos[0].id,
    valores1: produtos[0].nomeDoProduto,
    chave2: produtos[1].id,
    valores2: produtos[1].nomeDoProduto,
    chave3: produtos[2].id,
    valores3: produtos[2].nomeDoProduto,
};

console.log(catalogo)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Estrutura composta: tarefas simples
// ------------------------------------------------------------
// Defina um array de tarefas com 3 objetos: { id, titulo, concluida(boolean) }.
// a) Marque a tarefa de id 2 como concluída por atribuição direta.
// b) Crie um novo array contendo apenas as tarefas que não estão concluídas
// c) Exiba o título de todas as tarefas do objeto.
// d) Exiba o título de todas as tarefas do array.

// → Seu código aqui:
let tarefas = [
    matematica = {
        id: 123,
        titulo: 'Matematica',
        feita: false,
    },
    historia = {
        id: 456,
        titulo: 'Historia',
        feita: false,
    },
    biologia = {
        id: 789,
        titulo: 'Biologia',
        feita: false,
    },
];
// A)
tarefas[1].feita = true
// B)
let tarefasNaoConcluida = [ tarefas[0], tarefas[2]]
// C)
console.log(`
    ${tarefas[0]}
    ${tarefas[1]}
    ${tarefas[2]}`)
// D)
console.log('_______________________________')
console.log("_______________________________");