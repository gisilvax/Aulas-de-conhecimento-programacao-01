// ============================================================
//   ATIVIDADE 02-2 – Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:
// a) 
let aluno = {
    Nome: "Giovanna",
    Idade: 19,
    Curso: "Desenvolvimento de sistemas"
};
// b)
console.log(aluno.Nome);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

// → Seu código aqui:
// a)
aluno.endereço = {
    Cidade: "Jaraguá do Sul",
    Rua: " Rua Angelo Menel"

}
// b)
console.log(aluno.endereço.Cidade);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:
// a)
aluno.habilidades = ["organizar", "cozinhar", "jogar volei", "escrever poemas"];
console.log(aluno.habilidades);
// b)
console.log(aluno.habilidades[0]);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:
// a)
aluno.notas = [7.1, 8.1, 10.0, 6.5];
// b)
console.log(`Nome do aluno: ${aluno.Nome}
Nota do Aluno: ${aluno.notas}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:
// a)
aluno.responsavel = {
    parentesco: 'mãe',
    Nome: 'Maria'
};
// b)
console.log(aluno.responsavel.Nome);
// c)
aluno.responsavel.Nome = 'Ana'
console.log(aluno.responsavel.Nome);
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" e adicione o objeto "aluno".
// b) Crie outros dois objetos com dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// c) Exiba o nome do segundo aluno da lista.

// → Seu código aqui:
// a) 
let listaDeAlunos = [aluno];
// b)
let alunoI = {
    nome: "Aline",
    idade: 25,
    curso: "Administração"
}
let alunoII = {
    nome: "Rodrigo",
    idade: 28,
    curso: "Gastronomia"
}
// c)
listaDeAlunos.push(alunoI);
listaDeAlunos.push(alunoII);
// D)
console.log(listaDeAlunos[1]);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Objetos e Arrays
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" que contenha 3 alunos. Cada aluno deve ser um objeto (não uma variável que contem um objeto).
// b) Cada objeto aluno deve conter nome(string), idade(number) e notas(array de numbers).
// c) Exiba o nome e as notas de cada aluno.


// → Seu código aqui:
let listaDeAlunosI = [
    {
        nome: "Luiza",
        idade: 19,
        notas: [8.1, 7.3, 6.5]
    },
    {
        nome: "Yasmin",
        idade: 20,
        notas: [5.0, 6.1, 10.0]
    },
    {
        nome: "João",
        idade: 21,
        notas: [7.1, 2.4, 9.5]
    }
];
console.log(listaDeAlunosI);

console.log("_______________________________");
