// =============== TO DO LIST =======================
let lerDados = require("readline-sync");

// 0.1 Estrutura de dados

let tarefas = [];

// 0.2 Função: Adicionar tarefas

function adicionarTarefas() {
    let titulo = lerDados.question("\nTitulo da tarefa: ");
    let texto = lerDados.question("Texto/Descricao da tarefa: ");

    if (titulo.trim() === "" || texto.trim() === "") {
        console.log("\nErro: preencha todos os campos!");
        return;
    };

    let dataHora = new Date();

    let novaTarefa = {
        titulo: titulo,
        texto: texto,
        data: dataHora.toLocaleDateString("pt-BR"),
        hora: dataHora.toLocaleTimeString("pt-BR"),
        concluido: false
    };

    tarefas.push(novaTarefa);
    console.log("\nTarefa adicionada com sucesso!");
};

// 0.3 Função: Visualizar tarefas

function visualizarTarefas() {
    if (tarefas.length === 0) {

        console.log("\nNenhuma tarefa cadastrada!\n");
        return;
    };

    console.log(" ====== TO DO LIST ======");

    tarefas.forEach((tarefa, indices) => {

        let status = tarefa.concluido
            ? "concluida!"
            : "Pendente";

        console.log(`\n${indices} - ${tarefa.titulo} [${status}]`);

    });
    console.log("");
};

// Função: Visualizar tarefa especifica

function visualizarItem() {
    visualizarTarefas();

    let indice = lerDados.questionInt("Digite o numero da tarefa: ");

    if (indice < 0 || indice >= tarefas.length) {
        console.log("\nTarefa inexistente!");
        return;
    };

    console.log("\n===== Detalhes da tarefa =====");
    console.log(`
    Titulo: ${tarefas[indice].titulo}
    Descricao: ${tarefas[indice].texto}
    Data: ${tarefas[indice].data}
    Hora: ${tarefas[indice].hora}
    Status: ${tarefas[indice].concluida ? "concluida!" : "Pendente!"}`);

    console.log("");
};

// Função: Editar tarefa

function editarTarefa() {
    visualizarTarefas();

    let indice = lerDados.questionInt("Digite o numero da tarefa para editar: ");

    if (indice < 0 || indice >= tarefas.length) {
        console.log("\nTarefa inexistente");
        return;
    };

    let novoTitulo = lerDados.question("Novo titulo: ")
    let novaDescricao = lerDados.question("Nova Descricao: ")

    if (novoTitulo.trim() !== "") {
        tarefas[indice].titulo = novoTitulo
    };

    if (novaDescricao.trim() !== "") {
        tarefas[indice].texto = novaDescricao
    };

    console.log("\nTarefa editada com sucesso!");
};

// Função: Excluir tarefa

function excluirTarefa() {
    visualizarTarefas();

    let indice = lerDados.questionInt("Digite o numero da tarefa para excluir: ");

    if (indice < 0 || indice >= tarefas.length) {
        console.log("\nTarefa inexistente!");
        return;
    };
    tarefas.splice(indice, 1);

    console.log("\nTarefa excluida com sucesso!");
};

// Funçao: Filtrar tarefa

function filtrarTarefa() {
    let busca = lerDados.question("Digite o titulo para buscar: ");

    let resultado = tarefas.filter((tarefa) => {
        return tarefa.titulo.toLowerCase().includes(busca.toLowerCase());
    });

    if (resultado.length === 0) {
        console.log("\nNenhuma tarefa encontrada! ");
        return;
    };

    console.log("\n===== RESULTADO =====");

    resultado.forEach((tarefa) => {
        console.log("Titulo: ", tarefa.titulo);
        console.log("Descricao: ", tarefa.texto);
        console.log("Data: ", tarefa.data);
        console.log("Hora: ", tarefa.hora);
        console.log("Status: ", tarefa.concluida ? "Concluida!" : "Pendente!");
        console.log("------------------------------------------------------------");
    });
};

// Função: Marcar como concluida

function concluirTarefas() {
    visualizarTarefas();

    let indice = lerDados.questionInt("Digite o numero da tarefa concluida: ");

    if (indice < 0 || indice >= tarefas.length) {
        console.log("\nTarefa inexistente!");
        return;
    };

    tarefas[indice].concluida = true;
    console.log("\nTarefa marcada como concluida!");
};

// Menu principal

let opcao;

do {
    console.log(`
    ===================================
                TO DO LIST
    ===================================
    
    1 - Adicionar tarefa
    2 - Visualizar tarefa
    3 - Visualizar Item
    4 - Editar tarefa
    5 - exluir tarefa
    6 - Filtrar tarefa
    7 - Marcar como concluida 
    0 - Sair`);

    opcao = lerDados.questionInt("Digite o numero da opcao desejada: ");

    if (opcao < 0 || opcao > 7) {
        console.log("Opcao invalida!");
        continue
    };

    switch (opcao) {
        case 1:
            adicionarTarefas();
            break;

        case 2:
            visualizarTarefas();
            break

        case 3:
            visualizarItem();
            break

        case 4:
            editarTarefa();
            break

        case 5:
            excluirTarefa();
            break

        case 6:
            filtrarTarefa();
            break

        case 7:
            concluirTarefas();
            break

        case 0:
            console.log("\nPrograma encerrado!\n");
            break
    };

} while (opcao !== 0);