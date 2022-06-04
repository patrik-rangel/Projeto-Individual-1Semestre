var database = require("../database/config");



function buscarUltimasMedidas(idAquario, limite_linhas) {
    /* const limite_linhas = 7; */

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        CONVERT(varchar, momento, 108) as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select regiao, count(regiao) as qtd_regiao from usuario group by regiao;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    console.log(`Recuperando medidas em tempo real`);

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select regiao, count(regiao) as qtd_regiao from usuario group by regiao;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function respostas_quiz(idUsuario, nomeUsuario, acertos) {
    // let idUsuario = sessionStorage.ID_USUARIO
     /* var usuario = sessionStorage.ID_USUARIO;  */
     /* var data = sessionStorage.getItem('chave'); */
    /* var nome = sessionStorage.NOME_USUARIO; */
    /* sessionStorage.ID_USUARIO = json.idUsuario; */
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function respostas_quiz():",idUsuario, nomeUsuario ,acertos);


    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into quiz values (${idUsuario}, '${nomeUsuario}' ,${acertos});` /* `insert into zonas(fkUsuario,nomeZona, votos) values (1,${regiao}, 1);` */;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarDadosQuiz(idAquario, limite_linhas) {
    /* const limite_linhas = 7; */

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        CONVERT(varchar, momento, 108) as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select nomeUsuario, qtdAcertos as acertos from quiz group by fkUsuario order by qtdAcertos;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    respostas_quiz,
    buscarDadosQuiz
}
