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


// Declaramos un arreglo de números que contendrán todos los números
// posibles que se van a encontrar en nuestras tarjetas
let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

// Desordenaremos los números de nuestro arreglo con sort de acuerdo a una una función determinada
numeros = numeros.sort(() => { return Math.random() - 0.5 });
console.log(numeros);

//Método para recargar juego
refresh.addEventListener('click', _ => {
    location.reload();
})

//Función para contar tiempo
function contarTiempo() {
    tiempoRegresivo = setInterval(() => {
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if (timer == 0) {
            clearInterval(tiempoRegresivo);
            bloquearTarjetas();
        }
    }, 1000);
}

//Función para bloquear tarjetas cuando se haya terminado el tiempo
function bloquearTarjetas() {
    for (let i = 0; i <= 15; i++) {
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = `<img src="/static/images/${numeros[i]}.png" alt="">`;
        tarjetaBloqueada.disabled = true;
    }
    loseAudio.play();
    window.alert("Lo sentimos haz perdido")
}

//Función principal
function destapar(id) {

    if (temporizador == false) {
        contarTiempo();
        temporizador = true;
    }

    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);

    if (tarjetasDestapadas == 1) {
        //mostrar el primer número
        tarjeta1 = document.getElementById(id);
        /*con esto logramos que los 16 botones se asocien a los 
        16 elementos del arreglo desordenado*/
        primerResultado = numeros[id];

        clicAudio.play();

        //imprimir valor correspondiente al arreglo desordenado que estará en la variable primerResultado
        tarjeta1.innerHTML = `<img src="/static/images/${primerResultado}.png" alt="">`;

        //Deshabilitar el primer botón
        tarjeta1.disabled = true;
        } else if (tarjetasDestapadas == 2) {
        //mostrar segundo número
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        clicAudio.play();
        tarjeta2.innerHTML = `<img src="/static/images/${segundoResultado}.png" alt="">`;

        //Deshabilitar el segundo botón
        tarjeta2.diabled = true;

        //incrementar movimientos
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        //Comprobar si las tarjetas reveladas son iguales
        if (primerResultado == segundoResultado) {
            //Encerar el contador de tarjetas destapadas
            tarjetasDestapadas = 0;
           
            //Aumentar aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            //Verificar si los aciertos son iguales a 8 y mostrar mensajes finales
            if (aciertos == 8) {
                clearInterval(tiempoRegresivo);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} &#128513;`;
                mostrarTiempo.innerHTML = `Asombroso &#128077; solo demoráste ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} &#128513;`;
                winAudio.play();
            }

        } else {
            //mostrar momentaneamente valores y volver a tapar en caso de ser resultados diferentes
            setTimeout(() => {
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            }, 800)
        }

    }
}