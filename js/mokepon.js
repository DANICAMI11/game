//Pendiente acomodar cuando son muchos ataeues


/* Declaring variables and setting their values. */

const botonMascota = document.getElementById("boton-mascota"),
buttonReiniciar = document.getElementById("button-reiniciar"),
spanAtaqueTuyo = document.getElementById("spanAtaqueTuyo"),
spanAtaqueEnemigo = document.getElementById("spanAtaqueEnemigo"),
secctionMascotas = document.getElementById("secction-mascotas"),
secctionAtaque = document.getElementById("secction-ataque"),
secctionMensaje = document.getElementById("secction-mensaje"),
divmessage = document.getElementById("div-mensaje"),
secctionfinal = document.getElementById("secction-final"),
divtarjetas = document.getElementById("div-tarjetas"),
divatataque = document.getElementById("div-ataque"),
divataquesE = document.getElementById("div-ataqueE"),
divAtaques = document.getElementById("div-ataques"),
divCoronaE = document.getElementById("div-coronaE"),
divCorona = document.getElementById("div-corona"),
imgagenMacota = document.getElementById("imagen-mimascota"), 
imgagenMacotaE = document.getElementById("imagen-lamascota"),
secctionCanvas = document.getElementById("secction-canvas"),
mapa = document.getElementById("mapa");




let ataquejugador = "",
ataqueEnemigo = "",
mimascota = "",
mascotaAleatoria = "",
victorias = 0,
victoriasEnemigo = 0,
mokepones = [],
buttonWather,
buttonEarth,
buttonFire,
buttonAtaques,
combinacionAtaques = [],
combinacionAtaquesEnemigos = [],
mascotaEnemigo = [],
lienzo = mapa.getContext("2d"),
fondo = new Image;
fondo.src = "./img/mokemap.png",
anchodelMapa = window.innerWidth - 40 ,
alturaQueBuscamos = anchodelMapa * 400 / 600

if (anchodelMapa > 800 ){
    anchodelMapa = 800
}
if (alturaQueBuscamos > 600){
    alturaQueBuscamos = 600
}

mapa.width = anchodelMapa
mapa.height = alturaQueBuscamos






secctionAtaque.style.display = 'none'
secctionfinal.style.display = 'none'
secctionMensaje.style.display = 'none'
secctionCanvas.style.display = 'none'

class Mokepones {
    constructor(nombre,imagen, x = 10 , y =10){
        this.nombre = nombre
        this.imagen = imagen
        this.ataques = []
        this.x = x
        this.y = y
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = imagen
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let chikorita = new Mokepones("chikorita","./img/chikorita.png")
let square = new Mokepones("square","./img/square.png")
let sharizar = new Mokepones("sharizard","./img/sharizar.png")
let chikoritaEnemigo = new Mokepones("chikorita","./img/chikorita.png",aleatorio(0,anchodelMapa- 80),aleatorio(0,alturaQueBuscamos - 80))
let squareEnemigo = new Mokepones("square","./img/square.png",aleatorio(0,anchodelMapa- 80),aleatorio(0,alturaQueBuscamos - 80))
let sharizarEnemigo = new Mokepones("sharizard","./img/sharizar.png",aleatorio(0,anchodelMapa- 80),aleatorio(0,alturaQueBuscamos - 80))

chikorita.ataques.push(
    {nombre:"🔥",id:"button-fire"},
    {nombre:"💧",id:"button-wather"},
    {nombre:"🌴",id:"button-earth"},
    {nombre:"🌴",id:"button-earth"},
    {nombre:"🌴",id:"button-earth"},
)
square.ataques.push(
    {nombre:"🔥",id:"button-fire"},
    {nombre:"💧",id:"button-wather"},
    {nombre:"💧",id:"button-wather"},
    {nombre:"💧",id:"button-wather"},
    {nombre:"🌴",id:"button-earth"},
)
sharizar.ataques.push(
    {nombre:"🔥",id:"button-fire"},
    {nombre:"🔥",id:"button-fire"},
    {nombre:"💧",id:"button-wather"},
    {nombre:"🌴",id:"button-earth"},
    {nombre:"🔥",id:"button-fire"},
)
chikoritaEnemigo.ataques.push(
    {nombre:"🔥",id:"button-fire"},
    {nombre:"💧",id:"button-wather"},
    {nombre:"🌴",id:"button-earth"},
    {nombre:"🌴",id:"button-earth"},
    {nombre:"🌴",id:"button-earth"},
)
squareEnemigo.ataques.push(
    {nombre:"🔥",id:"button-fire"},
    {nombre:"💧",id:"button-wather"},
    {nombre:"💧",id:"button-wather"},
    {nombre:"💧",id:"button-wather"},
    {nombre:"🌴",id:"button-earth"},
)
sharizarEnemigo.ataques.push(
    {nombre:"🔥",id:"button-fire"},
    {nombre:"🔥",id:"button-fire"},
    {nombre:"💧",id:"button-wather"},
    {nombre:"🌴",id:"button-earth"},
    {nombre:"🔥",id:"button-fire"},
)

mokepones.push(chikorita,square,sharizar)

mokepones.forEach((mokepon) => {
    let objHtmlTarjeta = `<input type="radio" name="mascotas" id="${mokepon.nombre}" value="${mokepon.nombre}" />
        <label class = "tarjeta-mokepon" for="${mokepon.nombre}">
        <p>${mokepon.nombre}</p>
        <img src=${mokepon.imagen} alt="${mokepon.nombre}">
        </label>`
    divtarjetas.innerHTML += objHtmlTarjeta
})

/**
 * It generates a random number between the min and max values.
 * @param min - The minimum number (integer) to generate.
 * @param max - The maximum number to be returned.
 * @returns A random number between min and max.
 */

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * The function ataqueEnemigoA() generates a random number between 1 and 3, and then assigns the value
 * of ataqueEnemigo to either "Tierra", "Agua", or "Fuego" depending on the value of the random number.
 */
function ataqueEnemigoA(){
    console.log(mascotaEnemigo.ataques.length)
    if (mascotaEnemigo.ataques.length > 0){
        let posicion = aleatorio(0,mascotaEnemigo.ataques.length-1);
        combinacionAtaquesEnemigos.push(mascotaEnemigo.ataques[posicion].nombre);
        mascotaEnemigo.ataques.splice(posicion, 1);
        if  (mascotaEnemigo.ataques.length == "0"){
            combate()
        }
    }

     
}


/**
 * "selecionarMascotaEnemigo" is a function that selects a random pet from the "mokepones" array and
 * displays it in the "imagen-lamascota" element.
 */
function selecionarMascotaEnemigo (enemigo) { 
    //let posicion = aleatorio(0,mokepones.length-1)
    document.getElementById("imagen-lamascota").src=enemigo.imagen;
    mascotaAleatoria = enemigo.nombre
    mascotaEnemigo = enemigo

}

/**
 * If the player's attack is equal to the enemy's attack, it's a tie. If the player's attack is fire
 * and the enemy's attack is earth, the enemy loses a life. If the player's attack is water and the
 * enemy's attack is fire, the enemy loses a life. If the player's attack is earth and the enemy's
 * attack is water, the enemy loses a life. Otherwise, the player loses a life.
 */
function combate(){

    for (let i = 0; i < combinacionAtaquesEnemigos.length; i++) {
        let ataqueEnemigo = combinacionAtaquesEnemigos[i];
        let ataquejugador = combinacionAtaques[i]
        if (ataquejugador === ataqueEnemigo){
            createMessage("Empate",ataquejugador,ataqueEnemigo)
        }else if ( ataquejugador == "🔥" && ataqueEnemigo =="🌴"){
            createMessage("Ganaste",ataquejugador,ataqueEnemigo)
            victorias ++
        }else if ( ataquejugador == "💧" && ataqueEnemigo =="🔥"){
            createMessage("Ganaste",ataquejugador,ataqueEnemigo)
            victorias ++
        }else if (ataquejugador == "🌴" && ataqueEnemigo =="💧"){
            createMessage("Ganaste",ataquejugador,ataqueEnemigo)
            victorias ++
        }else{
            createMessage("Perdiste",ataquejugador,ataqueEnemigo)
            victoriasEnemigo ++
    
        }
        
    }
    console.log("Termino el for")
    revisarVictorias()

    
    
}


/**
 * It creates a paragraph element, sets its innerHTML to a string, and then appends it to the div with
 * the id "divmessage".
 * @param resultado - is the result of the fight, it can be "win", "lose" or "draw"
 */
function createMessage(resultado, ataquejugadorIndex, ataqueEnemigoIndex){
    secctionMensaje.style.display = 'flex'
    let span = document.createElement('span')
    let span2 = document.createElement('span')
    let img = document.createElement('img')
    img.src = "./img/corona.png"
    img.className = "imagen-corona";

    if (resultado == "Ganaste"){
        span.innerHTML = ataqueEnemigoIndex+"❎"
        span2.innerHTML = "✅"+ataquejugadorIndex
        divCorona.appendChild(img)


    }else if (resultado === "Perdiste"){
        span.innerHTML = ataqueEnemigoIndex+"✅"
        span2.innerHTML = "❎"+ataquejugadorIndex
        divCoronaE.appendChild(img)

    }else{
        span.innerHTML = ataqueEnemigoIndex+"🈯"
        span2.innerHTML = "🈯"+ataquejugadorIndex
    }


    divataquesE.appendChild(span)
    divAtaques.appendChild(span2)
}

/**
 * It creates a new h2 element, sets its innerHTML to the value of the resultado parameter, appends the
 * new h2 element to the secctionMensaje element, disables the three buttons, and sets the display
 * style of the secctionfinal element to block.
 * @param resultado - The result of the game.
 */
function createMessageFinal(resultado,estado){
    parrafo = document.createElement('h2');
    parrafo.innerHTML = resultado;
    secctionMensaje.appendChild(parrafo);
    if (estado === "gano"){
        cambiarImagenFinal(imgagenMacota,estado)
        cambiarImagenFinal(imgagenMacotaE,"perdio") 
    }else if (estado === "perdio"){
        cambiarImagenFinal(imgagenMacotaE,"gano") 
        cambiarImagenFinal(imgagenMacota,estado)

    }
    
    
    

    secctionfinal.style.display = 'block'
}

function cambiarImagenFinal(elemento,estado){
    src = elemento.src
    src = src.split("/")
    let name = src[src.length - 1]

    if (name === 'square.png' && estado === "gano"){
        elemento.src = "./img/squareGanador.png"
        elemento.style.width = "180px"
        elemento.style.height = "180px"
    }else if(name === 'square.png' && estado === "perdio"){
        elemento.src = "./img/squarePerdedor.png"
    }else if(name === 'chikorita.png' && estado === "gano"){
        elemento.src = "./img/chikoritaGanador.png"
        elemento.style.width = "140px"
        elemento.style.height = "140px"
    }else if(name === 'chikorita.png' && estado === "perdio"){
        elemento.src = "./img/chikoritaPerdedor.png"
    }else if(name === 'sharizar.png' && estado === "gano"){
        elemento.src = "./img/sharizardGanador.png"
        elemento.style.width = "180px"
        elemento.style.height = "180px"
    }else if (name === 'sharizar.png' && estado === "perdio"){
        elemento.src = "./img/sharizardPerdedor.png"

    }
}

/**
 * If the number of lives is 2, then change the image to the one with 2 lives. If the number of lives
 * is 1, then change the image to the one with 1 life. If the number of lives is 0, then change the
 * image to the one with no lives.
 */
function revisarVictorias(){
    console.log("entroi a revisar victorias")
    if (victorias === victoriasEnemigo){
        createMessageFinal("BUENA SOCIO EMPATARON  :)","empate")
    }else if (victorias > victoriasEnemigo){
        createMessageFinal("Buena socio gano  :D","gano")
    }else{
        createMessageFinal("Huy socio perdio","perdio")
    }
}

/**
 * It takes a string as an argument, loops through an array of objects, and if the string matches a
 * property of one of the objects, it assigns the value of another property of that object to a
 * variable, then calls another function with that variable as an argument.
 * @param nombre - name of the pokemon
 */
function extraerPosicion(nombre){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (nombre == mokepones[i].nombre){
            ataques = mokepones[i].ataques
            mimascota = mokepones[i]
            break;
        }  
    }
    cargarataques(ataques)
        
}

/**
 * It creates a button for each attack in the array, and then assigns the buttons to variables.
 * @param ataques - is an array of objects that contains the name of the attack and the id of the
 * attack.
 */
function cargarataques(ataques){
    ataques.forEach((mokepon) => {
        let objHtmlAtaques = `<button id= ${mokepon.id} class="button-ataque BAtaques" >${mokepon.nombre}</button>`
        divatataque.innerHTML += objHtmlAtaques
    })

    buttonEarth = document.getElementById("button-earth")
    buttonFire = document.getElementById("button-fire")
    buttonWather = document.getElementById("button-wather")
    buttonAtaques = document.querySelectorAll(".BAtaques")
    generarAtaque()

}

/**
 * When a button is clicked, the player's attack is set to the button's text content, the enemy's
 * attack is set to a random attack, and the combat function is called.
 */
function generarAtaque(){
    buttonAtaques.forEach((button) =>{
        button.addEventListener("click", (e) =>{
            if (e.target.textContent == "🔥"){
                ataquejugador = "🔥"
                combinacionAtaques.push("🔥")
                button.disabled = true
                button.style.backgroundColor = "#989898";

            } else if (e.target.textContent == "💧"){
                ataquejugador = "💧"
                combinacionAtaques.push("💧")
                button.disabled = true
                button.style.backgroundColor = "#989898";
            }else{
                ataquejugador = "🌴"
                combinacionAtaques.push("🌴")
                button.disabled = true
                button.style.backgroundColor = "#989898";
            }
            ataqueEnemigoA()
            console.log(combinacionAtaques)
            console.log(combinacionAtaquesEnemigos)
        })
    })
}






//FUNCION PARA SELECCIONAR MASCOTAS  CTR + .  ---  alt 96

/* Listening for a click event on the button with the id of botonMascota. When the button is clicked,
it will check to see if a radio button is selected. If a radio button is selected, it will set the
value of the variable mimascota to the value of the selected radio button. It will then hide the
section with the id of secctionMascotas and show the section with the id of secctionAtaque. It will
then check to see which radio button was selected and set the src of the image with the id of
imagen-m */

botonMascota.addEventListener("click", () => {
    let checkRadio = document.querySelector('input[name="mascotas"]:checked');
    let url  = document.querySelector('input[name="mascotas"]:checked~label img')
    if (checkRadio != null) {
        mimascota = checkRadio.value
        //secctionAtaque.style.display = 'flex'
        secctionCanvas.style.display = 'flex'
        secctionMascotas.style.display = 'none'
        imgagenMacota.src=url.src;
        extraerPosicion(checkRadio.value)
        iniciarMapa()

        
    }
    else {
        alert("Por favor seleccione una mokepon")
    }

});



// FUNCION PARA REINICIAR JUEGO
/* Listening for a click event on the button with the id of buttonReiniciar. When the button is
clicked, it will reload the page. */
buttonReiniciar.addEventListener("click", () => {
    location.reload()
})

function pintarMapa(){
    mimascota.x = mimascota.x + mimascota.velocidadX
    mimascota.y = mimascota.y + mimascota.velocidadY
    lienzo.clearRect(0,0, mapa.width, mapa.height)
    lienzo.drawImage(
        fondo,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mimascota.pintarMokepon()
    chikoritaEnemigo.pintarMokepon()
    squareEnemigo.pintarMokepon()
    sharizarEnemigo.pintarMokepon()
    if (mimascota.velocidadX !== 0 || mimascota.velocidadY !== 0){
        revisarColiciones(chikoritaEnemigo)
        revisarColiciones(squareEnemigo)
        revisarColiciones(sharizarEnemigo)

    }
    


}
function moverIsquierda(){
    mimascota.velocidadX = - 5
    
}
function moverDerecha(){
    mimascota.velocidadX = + 5
    
}
function moverArriba(){
    mimascota.velocidadY = - 5
    
}
function moverAbajo(){
    mimascota.velocidadY = + 5
    
}
function detenerMovimiento(){
    mimascota.velocidadY = 0
    mimascota.velocidadX = 0
}
function presionarTecla(event){
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break;
        case "ArrowDown":
            moverAbajo()
            break;
        case "ArrowRight":
            moverDerecha()
            break;
        case "ArrowLeft":
            moverIsquierda()
            break;
    }


}
function iniciarMapa(){
    setInterval(pintarMapa,50)
    window.addEventListener("keydown",presionarTecla)
    window.addEventListener("keyup",detenerMovimiento)
}

function revisarColiciones(enemigo){
    var arribaMascota = mimascota.y + 25,
    abajoMascota = mimascota.y + mimascota.alto - 25,
    isquierdaMascota = mimascota.x + 25,
    derechaMascota = mimascota.x + mimascota.ancho - 25;
    
    var arribaEnemigo = enemigo.y,
    abajoEnemigo = enemigo.y + enemigo.alto,
    isquierdaEnemigo = enemigo.x,
    derechaEnemigo = enemigo.x + enemigo.ancho;
    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < isquierdaEnemigo ||
        isquierdaMascota > derechaEnemigo
    ){
        return
    }
    secctionAtaque.style.display = 'flex'
    secctionCanvas.style.display = 'none'
    detenerMovimiento()
    selecionarMascotaEnemigo(enemigo)


}


