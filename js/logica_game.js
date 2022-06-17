// Captura de tamanho da tela útil
var altura = 0
var largura = 0
var vida = 1
var tempo = 40
var dificuldade = 1500
var nivel = window.location.search
nivel = nivel.replace("?", "")


// Controle dificuldade
if (nivel === "normal") {
    dificuldade
} else if (nivel === "dificil") {
    dificuldade = 1000
} else if (nivel === "impossivel") {
    dificuldade = 700
}

// Captura tamanho de tela
function ajustaTamanho() {
    altura = window.innerHeight
    largura = window.innerWidth
}
ajustaTamanho()

// Controle de tempo
var cronometro = setInterval(function () {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = "youwin.html"
    } else {
        document.getElementById("cronometro").innerHTML = tempo
    }
}, 1000)

function posicaoAleatoria() {
    //remover o elemento anterior(caso exista)
    if (document.getElementById("mosquito")) {
        document.getElementById("mosquito").remove()

        //controle de vida
        if (vida > 3) {
            window.location.href = "gameover.html"
        } else {
            document.getElementById("v" + vida).src = "img/coracao_vazio.png"

            vida++
        }
    }
    // Definição de posição aleatória, limitada ao tamanho útil
    var posicaoX = Math.floor(Math.random() * largura) - 150
    var posicaoY = Math.floor(Math.random() * altura) - 150

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    // Criação do elemento no html e css
    var mosquito = document.createElement("img")
    mosquito.src = "img/mosca.png"
    mosquito.className = tamanhoAleatorio() + " " + orientacaoAleatoria()
    mosquito.style.left = posicaoX + "px"
    mosquito.style.top = posicaoY + "px"
    mosquito.style.position = "absolute"
    // controle de cliques
    mosquito.id = "mosquito"
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

// Definição dos tamanhos dos elementos
function tamanhoAleatorio() {
    var tamanho = Math.floor(Math.random() * 3)
    switch (tamanho) {
        case 0:
            return "mosquito1"
        case 1:
            return "mosquito2"
        case 2:
            return "mosquito3"
    }
}

// Definição orientação dos elementos
function orientacaoAleatoria() {
    var orientacao = Math.floor(Math.random() * 2)
    switch (orientacao) {
        case 0:
            return "ladoA"
        case 1:
            return "ladoB"
    }
}

// Start do jogo
function iniciarJogo() {
    var nivel = document.getElementById("nivel").value
    if (nivel === "") {
        return false
    }
    window.location.href = "jogo.html?" + nivel
}