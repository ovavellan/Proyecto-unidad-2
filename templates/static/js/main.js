/****Inicialización de variables****/

//Variable para contar tarjetas destapadas
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 40;
let timerInicial = 40;
let tiempoRegresivo = null;

//Variables que contendrán archivos de audio
let clicAudio = new Audio('/static/sounds/sound.wav');
let loseAudio = new Audio('/static/sounds/lose.wav');
let winAudio = new Audio('/static/sounds/win.wav');


/****Apuntando a documento HTML****/
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');
let refresh = document.getElementById('refresh');

