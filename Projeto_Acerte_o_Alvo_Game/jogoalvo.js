
let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);
let raio = 10
let xaleatorio;
let yaleatorio;

function desenhacirculo(x, y, raio, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpatela() {
    pincel.clearRect(0, 0, 600, 400);
}

function desenhaalvo(x, y) {
    desenhacirculo(x, y, raio + 20, "red");
    desenhacirculo(x, y, raio + 10, "white");
    desenhacirculo(x, y, raio, "red");
}

function sorteiaposicao(maximo) {
    return Math.floor(Math.random() * maximo);
}

function atualizatela() {
    limpatela();
    xaleatorio = sorteiaposicao(600);
    yaleatorio = sorteiaposicao(400);
    desenhaalvo(xaleatorio, yaleatorio);
}

setInterval(atualizatela, 500);

function dispara(evento) {
    let x = evento.pageX - tela.offsetLeft;
    let y = evento.pageY - tela.offsetTop;

    if ((x > xaleatorio - raio) && (x < xaleatorio + raio) && (y > yaleatorio - raio) && (y < yaleatorio + raio)) {
        alert("Você acertou!")
    }
}

tela.onclick = dispara;