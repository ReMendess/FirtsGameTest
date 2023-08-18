// váriaveis da bolinha.

let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;

// 
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;
let raio = diametro / 2;

// váriaveis da raquete.
let xRaquete = 5;
let yRaquete = 150;
let raqueteComp = 10;
let raqueteAlt = 90;


// váriaveis do oponente.
let xRaqueteOponente = 585;
let yRaqueteOponente = 160;
let velocidadeYOponente;

//
let colidiu = false;

// várival erro do oponente.
let chanceDeErrar = 0;

// placar do jogo.
let meusPontos = 0;
let pontosDoOponente =0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  colisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente()
  incluirPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
   
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function colisaoBorda(){
    if (xBolinha + raio > width ||
     xBolinha - raio < 0) {
    velocidadexBolinha *= -1;
    
  }
  
   if (yBolinha + raio > height ||
     yBolinha - raio < 0) {
    velocidadeyBolinha *= -1;
  }
  
}

function mostraRaquete(x, y){
  rect(x, y, raqueteComp, raqueteAlt);
}


function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
    
}

function verificaColisaoRaquete2(){
  if (xBolinha - raio < xRaquete + raqueteComp && yBolinha - raio < yRaquete + raqueteAlt && yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1;
    
  }  
}

function verificaColisaoRaquete(x, y){
 colidiu =  
collideRectCircle(x, y, raqueteComp, raqueteAlt, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadexBolinha *= -1;
    raquetada.play();
  }
}



function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComp /2 -30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar;
  calculaChanceDeErrar();
  
}

function incluirPlacar(){
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(meusPontos, 170,26);
  text(pontosDoOponente, 470, 26);
  
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos +=1
    ponto.play();
  }
  if (xBolinha < 10){
    pontosDoOponente += 1
    ponto.play();
  }
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}


function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}
