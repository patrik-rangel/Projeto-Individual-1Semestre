// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}


// menu

function pageQuiz(){
    window.location = "quiz.html";
}

function pageRanking(){
    window.location = "ranking.html";
}


// home

var musica_random = 0
var contadorPlays = 0
var musicas = ['assets/musics/Sabotage - Um Bom Lugar (Clipe Oficial).mp3', 'assets/musics/2 . Djonga - JUNHO DE 94.mp3', 'assets/musics/Da ponte pra cá - Nada Como Um Dia Após O Outro Dia (Ri Depois).mp3', 'assets/musics/LEALL “Faça Dinheiro, Se Mantenha Vivo”.mp3', 'assets/musics/FBC-Frank-Tikãoft.Chris.mp3', 'assets/musics/capitulo4-versiculo3.mp3', 'assets/musics/Kyan - O Menino Que Virou Deus.mp3', 'assets/musics/faccao-central-castelo-triste.mp3', 'assets/musics/Favela Vive 2 (Cypher) audio – ADL, BK, Funkero e MV Bill (Prod. Índio).mp3']
var img_musicas = ['.img_main', 'img_main2', 'img_main3', 'img_main4', 'img_main5', 'img_main6', 'img_main7', 'img_main8', 'img_main9']
var audio = new Audio(musicas[musica_random])
function musicPlay() {
    if (contadorPlays % 2 == 0) {
        audio.play()
        spn_play.style.display = 'none'
        spn_pause.style.display = 'block'
    } else {
        audio.pause()
        spn_play.style.display = 'block'
        spn_pause.style.display = 'none'
    }
    contadorPlays++
}

function skipMusic2() {
    audio.pause()
    spn_play.style.display = 'block'
    spn_pause.style.display = 'none'
    clearMusic()
    musica_random = parseInt(Math.random() * 9)
    img_musicas[musica_random]
    div_player.classList.add(img_musicas[musica_random])
    audio = new Audio(musicas[musica_random])
}
function clearMusic(){
    div_player.classList.remove(img_musicas[musica_random])
    }


// quiz

function aparecer_prgt(){
    box_btn.style.display = 'none'
    div_all_conteudo.style.display = 'flex'
    comecar()
}

function comecar() {
    if (cont == 0) {
        div_pergunta.innerHTML = perguntas[cont]
        div_alter1.innerHTML = respostas[cont]
        div_alter2.innerHTML = alternativas1[cont]
        div_alter3.innerHTML = alternativas2[cont]
    }
    if (cont == 1) {
        div_pergunta.innerHTML = perguntas[cont]
        div_alter1.innerHTML = respostas[cont]
        div_alter2.innerHTML = alternativas1[cont]
        div_alter3.innerHTML = alternativas2[cont]
    }
    if (cont == 2) {
        document.getElementById('box_alter1').setAttribute('onclick', 'errado()');
        document.getElementById('box_alter2').setAttribute('onclick', 'certo()');
        div_pergunta.innerHTML = perguntas[cont]
        div_alter1.innerHTML = alternativas1[cont]
        div_alter2.innerHTML = respostas[cont]
        div_alter3.innerHTML = alternativas2[cont]
    }
    if (cont == 3) {
        document.getElementById('box_alter2').setAttribute('onclick', 'errado()');
        document.getElementById('box_alter3').setAttribute('onclick', 'certo()');
        div_pergunta.innerHTML = perguntas[cont]
        div_alter1.innerHTML = alternativas2[cont]
        div_alter2.innerHTML = alternativas1[cont]
        div_alter3.innerHTML = respostas[cont]
    }
    if (cont == 4) {
        document.getElementById('box_alter3').setAttribute('onclick', 'errado()');
        document.getElementById('box_alter1').setAttribute('onclick', 'certo()');
        div_pergunta.innerHTML = perguntas[cont]
        div_alter1.innerHTML = respostas[cont]
        div_alter2.innerHTML = alternativas1[cont]
        div_alter3.innerHTML = alternativas2[cont]
    }
    if (cont == 5) {
        document.getElementById('box_alter1').setAttribute('onclick', 'errado()');
        document.getElementById('box_alter2').setAttribute('onclick', 'certo()');
        div_pergunta.innerHTML = perguntas[cont]
        div_alter1.innerHTML = alternativas1[cont]
        div_alter2.innerHTML = respostas[cont]
        div_alter3.innerHTML = alternativas2[cont]
    }
    if (cont == 6) {
        document.getElementById('box_alter2').setAttribute('onclick', 'errado()');
        document.getElementById('box_alter3').setAttribute('onclick', 'certo()');
        div_pergunta.innerHTML = perguntas[cont]
        div_alter1.innerHTML = alternativas1[cont]
        div_alter2.innerHTML = alternativas2[cont]
        div_alter3.innerHTML = respostas[cont]
    }
    if (cont == 7) {
        document.getElementById('box_alter3').setAttribute('onclick', 'errado()');
        document.getElementById('box_alter1').setAttribute('onclick', 'certo()');
        div_pergunta.innerHTML = perguntas[cont]
        div_alter1.innerHTML = respostas[cont]
        div_alter2.innerHTML = alternativas2[cont]
        div_alter3.innerHTML = alternativas1[cont]
    }
    if (cont == 8) {
        document.getElementById('box_alter1').setAttribute('onclick', 'errado()');
        document.getElementById('box_alter3').setAttribute('onclick', 'certo()');
        div_pergunta.innerHTML = perguntas[cont]
        div_alter1.innerHTML = alternativas1[cont]
        div_alter2.innerHTML = alternativas2[cont]
        div_alter3.innerHTML = respostas[cont]
    }
    if (cont == 9) {
        document.getElementById('box_alter3').setAttribute('onclick', 'errado()');
        document.getElementById('box_alter2').setAttribute('onclick', 'certo()');
        div_pergunta.innerHTML = perguntas[cont]
        div_alter1.innerHTML = alternativas1[cont]
        div_alter2.innerHTML = respostas[cont]
        div_alter3.innerHTML = alternativas2[cont]
    }
    if (cont == 10) {
        div_all_conteudo.classList.remove('all_conteudo')
        div_all_conteudo.classList.add('all_conteudo2')
        aguardar()
        setTimeout(function () {
            finalizarAguardar()
        }, 3050)
        setTimeout(function () {
            div_resultado.style.display = 'flex'
            qtd_acertos.innerHTML = `${cont_acertos}`
            qtd_erros.innerHTML = `${cont_erros}`
        }, 3500)
        eviarQuizBanco()
    }
}

function eviarQuizBanco() {
    fetch("/medidas/enviarQuiz", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/medidas.js
            idUsuarioServer: idUsuario,
            nomeUsuarioServer: nomeUsuario,
            acertosServer: cont_acertos
        })
    }).then(function (resposta) {
        if (!Response.ok) throw new Error('Erro na requisição')
        console.log('erro no fetch')
        console.log("resposta: ", resposta);

    }
    ).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    }).catch(function (error) {
        console.error(error.message)
    });

}

function clearQuiz() {
    box_alter1.style.backgroundColor = 'white'
    box_alter2.style.backgroundColor = 'white'
    box_alter3.style.backgroundColor = 'white'
}

function certo() {
    var value1 = document.getElementById('box_alter1').getAttribute('onclick')
    var value2 = document.getElementById('box_alter2').getAttribute('onclick')
    var value3 = document.getElementById('box_alter3').getAttribute('onclick')
    if (value1 == 'certo()') {
        box_alter1.style.backgroundColor = 'green'
    }
    if (value2 == 'certo()') {
        box_alter2.style.backgroundColor = 'green'
    }
    if (value3 == 'certo()') {
        box_alter3.style.backgroundColor = 'green'
    }
    cont++
    cont_acertos++
    setTimeout(function () {
        clearQuiz()
    }, 900)
    setTimeout(function () {
        comecar()
    }, 1000)
}


function errado() {
    var value1 = document.getElementById('box_alter1').getAttribute('onclick')
    var value2 = document.getElementById('box_alter2').getAttribute('onclick')
    var value3 = document.getElementById('box_alter3').getAttribute('onclick')
    if (value1 == 'errado()') {
        box_alter1.style.backgroundColor = 'red'
    }
    if (value2 == 'errado()') {
        box_alter2.style.backgroundColor = 'red'
    }
    if (value3 == 'errado()') {
        box_alter3.style.backgroundColor = 'red'
    }
    cont++
    cont_erros++
    setTimeout(function () {
        clearQuiz()
    }, 900)
    setTimeout(function () {
        comecar()
    }, 1000)
}


function ranking() {
    window.location.href = 'ranking.html'
}
