// ============================================================
//   ATIVIDADE 12 – Estruturas de Dados: Vetor (Array)
// ============================================================
let lerDados = require("readline-sync");
// Dica: Faça os exercícios utilizando funções de array,
//       mas também tente resolver os desafios sem essas funções

// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo e exibindo um vetor
// ------------------------------------------------------------
// a) Declare um vetor com 5 cidades de sua escolha.
// b) Exiba a lista de cidades utilizando for().
// c) Exiba a primeira e a última cidade; a última utilizando .length.
// d) Exiba a quantidade total de cidades.

// → Seu código aqui:
// a)
let cidades = ["Gramado", "Fernando de Noronha", "São Francisco", "Cutitiba", "São Paulo"];
// b)
console.log("Exibindo a lista:\n");

for (let i = 0; i < cidades.length; i++) {
    console.log(`Índice ${i}: ${cidades[i]}`);
  }
// c)
console.log(`\nPrimeira cidade: ${cidades[0]}`);
console.log(`Ultima cidade: ${cidades[cidades.length -1]}\n`);
// d)
console.log(`Quantidade total de cidades: ${cidades.length}`);



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Soma e média
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const numeros = [12, 7, 25, 3, 18, 9, 31, 14];
// b) Calcule a SOMA de todos os números.
// c) Calcule a MÉDIA (soma / quantidade).
// d) Exiba: "Soma: <soma> | Média: <média>" (use toFixed(2) na média).

// → Seu código aqui:
// b)
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

// c)
let media = soma / numeros.length;

// d)
console.log(`Soma: ${soma} | Média: ${media.toFixed(2)}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const temperaturas = [22.5, 19.0, 27.3, 18.7, 30.1, 25.4, 21.8];
// b) Encontre a MAIOR e a MENOR temperatura.
// c) Exiba: "Maior: <maior>°C | Menor: <menor>°C"

// → Seu código aqui:

// b)
let maior = Math.max(...temperaturas);
let menor = Math.min(...temperaturas);

// c)
console.log(`Maior: ${maior}°C  |  Menor: ${menor}°C`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Pares e ímpares
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const listaNumeros = [4, 7, 10, 13, 16, 19, 22, 25, 28];
// b) Conte quantos números são pares e quantos são ímpares.
// c) Crie dois vetores: paresVetor[] e imparesVetor[], e adicione os números em cada um.
// d) Exiba:
//    "Pares (<qtd>): <paresVetor>"
//    "Ímpares (<qtd>): <imparesVetor>"

// → Seu código aqui:
// b)
let paresVetor = [];
let imparesVetor = [];

let qtdPares = 0;
let qtdImpares = 0;

for(let i = 0; i < listaNumeros.length; i++){
    if(listaNumeros[i] % 2 === 0){
        paresVetor.push(listaNumeros[i]);
        qtdPares++
    } else {
        imparesVetor.push(listaNumeros[i]);
        qtdImpares++
    }
};

console.log(`Pares ${qtdPares}: ${paresVetor}`);
console.log(`Ímpares ${qtdImpares}: ${imparesVetor}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Inversão de vetor
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const vetorOriginal = ["A", "B", "C", "D", "E"];
// b) Usando for(), crie um novo vetor 'vetorInvertido' com os elementos em ordem reversa.
// c) Exiba ambos os vetores:
//    "Original:  <original>"
//    "Invertido: <invertido>"
// d) Inverta o vetorOriginal, mas utilizando função de array,
//    salve o resultado em vetorInvertido2 e exiba o resultado.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Cadastro dinâmico
// ------------------------------------------------------------
// a) Crie um vetor vazio para produtos;
// b) Pergunte ao usuário quantos produtos deseja cadastrar.
// c) Usando for(), peça o nome de cada produto e adicione ao vetor.
// d) Ao final, também utilizando for() exiba o vetor completo e a mensagem:
//    "<qtd> produtos cadastrados."

// → Seu código aqui:
let produtos = [];
let nome = ''

let perg = lerDados.questionInt("Digite a quantidades de produtos que deseja cadastrar: ")

for(let i = 0; i < perg; i++){
    nome = lerDados.question("Digite o nome do produto: ");
    produtos.push(nome);
};

for(let i = 0; i < produtos.length; i++){
    console.table(produtos);
}

console.log(`${perg} produtos cadastrados!`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Busca em vetor
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const alunos = ["Ana", "Bruno", "Carla", "Diego", "Eva"];
// b) Pergunte ao usuário o nome de um aluno.
// c) Usando for e break, verifique se o nome existe na lista.
//    - Se existir: "<nome> está matriculado(a) (índice <i>)."
//    - Se não:     "<nome> não foi encontrado(a)."

// → Seu código aqui:
let nomeAluno = lerDados.question("Digite um nome de uma aluno: ");
let achado = -1

for (let i = 0; i < alunos.length; i++) {
    if (alunos[i] === nomeAluno) {
      achado = i;
      break;
    }
  }
  
  if (achado === -1) {
    console.log(`"${nomeAluno}" não está na lista.`);
  } else {
    console.log(`"${nomeAluno}" está no índice ${achado}.`);
  }


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Vetor de objetos
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const livros = [
        { titulo: "Dom Casmurro",       paginas: 256 },
        { titulo: "O Cortiço",          paginas: 304 },
        { titulo: "Memórias Póstumas",  paginas: 208 },
        { titulo: "Capitães da Areia",  paginas: 280 },
      ];
// b) Exiba a lista com console.table().
// c) Usando for, calcule:
//    - Total de páginas de todos os livros.
//    - Média de páginas por livro.
// d) Exiba o título do livro com MAIS páginas.

// → Seu código aqui:
console.table(livros);

let totalDePag = 0

for(let i = 0; i < livros.length; i++){
    totalDePag += livros[i].paginas
}

let mediaDePag = totalDePag / livros.length

let maiorLivro = livros[0];

for(let i =1; i < livros.length; i++){
    if(livros[i].paginas > maiorLivro.paginas){
        maiorLivro = livros[i]
    }
};

console.log(maiorLivro);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Filtro com push
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const idades = [12, 17, 21, 15, 30, 45, 9, 67, 19, 8];
// b) Usando for, separe o vetor acima em dois vetores:
//    - menores[]: pessoas com idade < 18
//    - adultos[]: pessoas com idade >= 18
// c) Exiba:
//    "Menores (<qtd>): <menores>"
//    "Adultos (<qtd>): <adultos>"

// → Seu código aqui:
let menores = [];
let maiores = [];

let qtdMenores = 0;
let qtdMaiores = 0;

for(let i = 0; i < idades.length; i++){
    if(idades[i] > 18 ){
        maiores.push(idades[i]);
        qtdMaiores++
    } else {
        menores.push(idades[i]);
        qtdMenores++
    }
};

console.log(`Menores ${qtdMenores}: ${menores}`);
console.log(`Maiores ${qtdMaiores}: ${maiores}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Menu de notas
// ------------------------------------------------------------
// a) Crie um vetor vazio para notas;
// b) Usando do...while e switch, exiba o menu:
//    1 - Adicionar nota
//    2 - Listar notas
//    3 - Estatísticas
//    4 - Remover última
//    5 - Limpar todas
//    0 - Sair
// c) Realize as funções escolhidas até o usuário escolher 0.
// d) Ao sair: "Encerrando. Total de notas registradas: <qtd>"

// → Seu código aqui:


console.log("_______________________________");