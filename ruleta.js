
listaTablero = new ListaDoblementeLigadaCircular(); //  crea un objeto de la clase LDLC para el tablero

const ganadores = new Ganador(); // crea un objeto de la clase ganador 
let numeroGanadorDeRondaActual; // es el número aleatorio que arroja 
let opcionesGanadorasDeRondaActual; // es un vector de los numeros ganadores. 
const banco = new Banco();// se crea un objeto de la clase banco
const monedas = [50, 25, 10, 5, 1]; // vector de denominación de monedas 
let ronda = 0; // variable que indica el inicio del juego con las demás rondas
let arregloApostar = ['apostarJ1', 'apostarJ2', 'apostarJ3', 'apostarJ4']; // arreglo que contiene los ids del botón apostar



let arregloIdBotonApostar = ['apostarJ1', 'apostarJ2', 'apostarJ3', 'apostarJ4']

let arregloidDiv = ['listaApuestasJ1', 'listaApuestasJ2', 'listaApuestasJ3', 'listaApuestasJ4'];
let arregloidJugador = ['dineroJ1', 'dineroJ2', 'dineroJ3', 'dineroJ4'];
let arregloJugador = [0, 0, 0, 0];
let arregloidConfirma = ['confirmaJ1', 'confirmaJ2', 'confirmaJ3', 'confirmaJ4'];
let arregloidElimina = ['eliminaJ1', 'eliminarJ2', 'eliminarJ3', 'eliminarJ4'];

// Cantidad de dinero que tiene cada jugador
let inicialJ1 = 0; 
let inicialJ2 = 0;
let inicialJ3 = 0;
let inicialJ4 = 0;

var cantidadJugadores = 0; // variable que indica la cantidad de jugadores que van a estar en el juego.

const listaApuestasJ1 = new ListaDoblementeLigadaCircular();// se crean 1 listas ligada por cada jugador.
const listaApuestasJ2 = new ListaDoblementeLigadaCircular();
const listaApuestasJ3 = new ListaDoblementeLigadaCircular();
const listaApuestasJ4 = new ListaDoblementeLigadaCircular();



function recibeApuesta(dineroInicialJugador) { // esta funcion se invoca desde la función principal y retorna valorApostado


  let valorApostado = 0; // Acá se va guardad la suma de todas las monedas que desea apostar
  for (let i = 0; i < monedas.length; i++) { // pregunta la cantidad de monedas por cada denominación
    var valor = prompt("cantidad de monedas de " + monedas[i], "escriba numero de monedas que va apostar");// se abre un cuadro de dialogo para pedir el numero de monedas que desea apostar

    while (parseFloat(valor) != valor) {  // con esto verificamos que el usuario solo acepte números
      valor = prompt('solo se aceptan números, vuelva a escribir la cantidad de monedas de ' + monedas[i], '', '');
    }
    apuestaValor = parseInt(valor); // se pasa el texto a numero 
    apuestaValor = apuestaValor * monedas[i]; // multiplica la cantidad entrada por la denominación de la moneda
    valorApostado = valorApostado + apuestaValor; // en valor apostado va a guardar la suma total
  }

  if (valorApostado < 2) { // controla que la apuesta realizada sea mayor a 2->(2000)
    alert("el valor de la apuesta minima es 2");// en caso de no ser asi, muestra en el tablero y retorna 0
    valorApostado = 0;
    return valorApostado;
  }

  if (dineroInicialJugador - valorApostado >= 0) {// Controla que el jugador si tenga dinero
    banco.verifica(); // El objeto banco llama al metodo verifica. 
    banco.agregaMonedasAlBanco(0, valorApostado);// cambia valor a monedas del casino para sumarlas al banco.
    return valorApostado;
  }
  else { // sino cumple la condición es porque no tiene dinero suficiente.
    alert("usted no tiene dinero suficiente para realizar esa apuesta");
    valorApostado = 0;
    return valorApostado;
  }

}

function dineroInicial(ide, inicia) { // es la primera función que se ejecuta cuando se le da a el botón anadir.

  var dinero = prompt("Escriba cantidad inicial con la que entra al juego, debe ser mayor a 2");// se abre un cuadro de dialogo para pedir el valor que se desea apostar
  while (parseFloat(dinero) != dinero) {
    dinero = prompt('solo se aceptan números', '', '');
  }
  let dineroIni = parseInt(dinero); // se pasa el string a número
  if (dineroIni >= 2) {
    //se verifica que jugador esta ingresando el dinero para mandar los parametro al metodo principal 
    if (inicia === 1) {

      inicialJ1 = dineroIni;
      principal(inicia, ide);
    }
    if (inicia === 2) {
      inicialJ2 = dineroIni;
      principal(inicia, ide);
    }
    if (inicia === 3) {
      inicialJ3 = dineroIni;
      principal(inicia, ide);
    }
    if (inicia === 4) {
      inicialJ4 = dineroIni;
      principal(inicia, ide);

    }
  }
  else {
    dineroInicial(ide, inicia);
  }

}






function principal(tipo, ide) {
  // Nuestro tablero esta internamente identificado por numeros del 0-48.
  // del 0-36 estan los números normal.
  // del 37-39  estan las filas , siendo 37 la fila 3.
  // del 40-42 las docenas, siendo 40 la primera docena.
  // las casillas 43 y 48, indica los números del 1-18 y del 19-36.
  // las casillas 44 y 47, indica los números pares e impares.
  // las casillas 45 y 46, indica si es color negro o rojo
  if (tipo === 1) {
    dinero = inicialJ1;
    if (document.getElementById(arregloidConfirma[0]).disabled === true) {
      document.getElementById(arregloidConfirma[0]).disabled = false;
      document.getElementById(arregloidElimina[0]).disabled = false;
    }
    console.log(inicialJ1);
  }
  if (tipo === 2) {
    dinero = inicialJ2;
    if (document.getElementById(arregloidConfirma[1]).disabled === true) {
      document.getElementById(arregloidConfirma[1]).disabled = false;
      document.getElementById(arregloidElimina[1]).disabled = false;
    }

  }
  if (tipo === 3) {
    dinero = inicialJ3;
    if (document.getElementById(arregloidConfirma[2]).disabled === true) {
      document.getElementById(arregloidConfirma[2]).disabled = false;
      document.getElementById(arregloidElimina[2]).disabled = false;
    }
  }
  if (tipo === 4) {
    dinero = inicialJ4;
    if (document.getElementById(arregloidConfirma[3]).disabled === true) {
      document.getElementById(arregloidConfirma[3]).disabled = false;
      document.getElementById(arregloidElimina[3]).disabled = false;
    }
  }


  document.getElementById(ide).innerHTML = dinero; // En este espacio del html actualiza el dinero con el que cuanta el jugador
  var iniciaApuestas = confirm(" De click en aceptar si desea realizar apuesta o cancelar si no va jugar esta ronda ");// se le da la opción al jugador de pasar
  if (iniciaApuestas == true) {

    alert("Elige la casilla a la que quieres apostar");

    for (var i = 0; i <= 36; i++) {  // crea la lista ligada tablero con un nodo tablero inicializandoel campo numero en 0
      let nuevoNodo = new NodoTablero(i, 36, 0);// y del 0 al 36 todos los numeros se multiplican por 3 y el tipo es 0 o sea es un numero
      listaTablero.add(nuevoNodo);// agrega el nodo a la lista tablero
    }
    for (var i = 37; i <= 42; i++) { // crea la lista tablero para las filas y las decenas, poniendo el valor a multiplicar por 3 y 1 porque es un string
      let nuevoNodo = new NodoTablero(i, 3, 1);
      listaTablero.add(nuevoNodo);
    }
    for (var i = 43; i <= 48; i++) { // crea el resto del tablero que se debe multiplicar por 2 como lo es color, si es par o impar,
      let nuevoNodo = new NodoTablero(i, 2, 1);// si esta del 1-18 o del 19-36 y tiene un 1 porque es un string
      listaTablero.add(nuevoNodo);
    }

    document.addEventListener('click', crearListaApuestas); // Activa el escuchador de eventos


  }

  else { // En caso de que el jugador decida pasar se muestra este mensaje.
    alert("Esperamos que participes en la proxima ronda, por favor de click en confirmar");

  }

}


function crearListaApuestas() { // reconoce a que numero de le dio click y lo busca en lista tablero


  // se verifica que jugador es para ponder actualizar las variables del dinero con el dato ingresado por el jugador

  if (arregloJugador[0] === 0) {
    dinero = inicialJ1;
    listaApuestas = listaApuestasJ1;
    inicia = 1;
    ide = arregloidJugador[0];
    ideDiv = arregloidDiv[0];
  }
  if ((arregloJugador[1] === 0) && (arregloJugador[0] === 1)) {
    dinero = inicialJ2;
    listaApuestas = listaApuestasJ2;
    inicia = 2;
    ide = arregloidJugador[1];
    ideDiv = arregloidDiv[1];
  }
  if ((arregloJugador[2] === 0) && (arregloJugador[1] === 1) && (arregloJugador[0] === 1)) {
    dinero = inicialJ3;
    listaApuestas = listaApuestasJ3;
    inicia = 3;
    ide = arregloidJugador[2];
    ideDiv = arregloidDiv[2];
  }
  if ((arregloJugador[3] === 0) && (arregloJugador[2] === 1) && (arregloJugador[1] === 1) && (arregloJugador[0] === 1)) {
    dinero = inicialJ4;
    listaApuestas = listaApuestasJ4;
    inicia = 4;
    ide = arregloidJugador[3];
    ideDiv = arregloidDiv[3];
  }


  var botonDeApuesta = event.target; //el target se refiere cuando se clickea el elemento
  if (!botonDeApuesta.matches('.apuesta')) return; // matches, descarta los demas clicks de la pagina
  event.preventDefault(); // se centra solo en la parte en la que dio click 

  if (dinero <= 1) {// En caso de que el dinero sea menor ó igual a 1, se muestra un mensaje al jugador diciendo que ya no tiene dinero suficiente para apostar
    alert("Usted ya no tiene dinero suficiente para apostar por favor de click en confirmar");



  }

  else {
    let vApuesta = recibeApuesta(dinero); // se llama al metodo recibe apuesta para obtener el valor de la apuesta 
    if (vApuesta !== 0) { // si el valor de la apuesta es diferente de de cero 
      var confirmacion = confirma();// llama a la funcion confirmacion y guarda lo que retorna en una variable
      if (confirmacion === true) {  // si retorna verdero es porque desea incluir la casilla
        dinero = dinero - vApuesta; // le resta a el dinero que tenia el jugador el valor de la apuesta que realiazo
        document.getElementById(ide).innerHTML = dinero; // Muestra en ese espcio del html la variable actualizada
        let indiceDeOpcion = parseInt(botonDeApuesta.id) // como el id era un string lo pasa a numero para poder llamar al metodo get 
        let nodoTableroEncontrado = new NodoTablero(); // crea  un nodo tablero
        nodoTableroEncontrado = listaTablero.get(indiceDeOpcion); // en nodo tablero va a guardar lo que retorna el metodo get por medio del indice que es el id 
        if (nodoTableroEncontrado !== undefined) { // si encuentra el indice en la lista tablero con esos datos llena la lista apuesta y agrega el valor que se quiere apostar
          let nuevoNodoApuesta = new NodoApuesta(nodoTableroEncontrado.numero, nodoTableroEncontrado.valorAMultiplicar, nodoTableroEncontrado.tipo, vApuesta);
          listaApuestas.add(nuevoNodoApuesta);// agrega el nuevo nodo de apuestas
        }
        muestraLista(listaApuestas, ideDiv) // se llama a la que  funcion muestra la lista de apuesta en un div del html
      }
    }
    // se actualiza el dinero del jugador
    if (inicia === 1) {
      inicialJ1 = dinero;
    }
    if (inicia === 2) {
      inicialJ2 = dinero;
    }
    if (inicia === 3) {
      inicialJ3 = dinero;
    }
    if (inicia === 4) {
      inicialJ4 = dinero;
    }
    alert("si desea realizar otra apuesta elija la casilla"); // muestra mensaje de como realizar otra apuesta.}
  }
}

/** Con esta función nos aseguraremos que una vez confirmada la apuesta del jugador no pueda modificar la apuesta */
function confirmarApuesta(idElimi, tipo, idAñadir) {




  document.removeEventListener('click', crearListaApuestas); // elimina el escuchador de eventos
  if (document.getElementById(idElimi).disabled === false) {
    document.getElementById(idElimi).disabled = true; // desactiva el boton de eliminar apuesta.
  }


  if (tipo === 1) {

    if (cantidadJugadores === 1) {
      document.getElementById("numeroAle").disabled = false;
      alert("Ya puede poner la ruleta a jugar");
      if (ronda === 0) {
        ronda = 1;
      }
    }
    else {
      arregloJugador[0] = 1;
      if (ronda === 0) {
        document.getElementById(idAñadir).disabled = false;
      }
      else {
        document.getElementById(arregloApostar[1]).disabled = false;
      }

    }

  }
  if (tipo === 2) {

    if (cantidadJugadores === 2) {
      document.getElementById("numeroAle").disabled = false;
      alert("Ya puede poner la ruleta a jugar");
      for (let j = 0; j < tipo; j++) {
        arregloJugador[j] = 0;
      }
      if (ronda === 0) {
        ronda = 1;
      }
    }
    else {
      arregloJugador[1] = 1;
      if (ronda === 0) {
        document.getElementById(idAñadir).disabled = false;
      }
      else {
        document.getElementById(arregloApostar[2]).disabled = false;
      }

    }

  }



  if (tipo === 3) {
    if (cantidadJugadores === 3) {
      document.getElementById("numeroAle").disabled = false;
      alert("Ya puede poner la ruleta a jugar");
      for (let j = 0; j < tipo; j++) {
        arregloJugador[j] = 0;
      }
      if (ronda === 0) {
        ronda = 1;
      }
    }
    else {

      arregloJugador[2] = 1;
      if (ronda === 0) {
        document.getElementById(idAñadir).disabled = false;
      }
      else {
        document.getElementById(arregloApostar[3]).disabled = false;
      }

    }




  }


  if (tipo === 4) {
    for (let i = 0; i < 4; i++) {
      arregloJugador[i] = 0;
    }
    if (ronda === 0) {
      ronda = 1;
    }
    document.getElementById("numeroAle").disabled = false; // activa el botón jugar
    alert("Ya puede poner la ruleta a jugar");
  }




}

function jugar() { // se activa cuando se le da click al boton que dice jugar.

  numeroGanadorDeRondaActual = ganadores.generarNumeroAleatorio(36); // se llama al metodo de la clase ganador que genera un numero aleatorio del 0 al 36.
  opcionesGanadorasDeRondaActual = ganadores.obtenerOpcionesGanadoras(numeroGanadorDeRondaActual); //se llena el vector de opciones ganadas con base al numero aleatorio
  document.getElementById("numeroGanador").innerHTML = "El número ganador es: " + numeroGanadorDeRondaActual; // en el html muestra el número ganador
  document.getElementById("numeroAle").disabled = true;// se descativa el boton jugar.
  let size=[0,0,0,0]


  size[0] = listaApuestasJ1.getsize();
  size[1] = listaApuestasJ2.getsize();
  size[2] = listaApuestasJ3.getsize();
  size[3] = listaApuestasJ4.getsize();

  if (size[0] !== 0) {
    document.getElementById("devolver").disabled = false;

  }
  if (size[1] !== 0) {
    document.getElementById('devolverJ2').disabled = false;

  }
  if (size[2]!== 0) {

    document.getElementById('devolverJ3').disabled = false;
  }
  if (size[3] !== 0) {

    document.getElementById('devolverJ4').disabled = false;
  }

  document.getElementById('nuevaRonda').disabled = false;
  alert("De click en el botón reclamar premio si se encuentra habilitado, de lo contrario de click en nueva ronda ")
}

function buscaValorADevolver(listaApuestas, ideValor) {//  Busa el valor a devolver con el metodo que se creo en la clase ganador y con el vector de opciones ganadoras.
  // se pasa como parametro la lista de apuesta en donde se va a buscar y el espacio del html donde se va actualizar el valor ganado.

  let valorAbanco = 0; // se inicializa la variable que arroja el valor a banco
  for (let i = 0; i < opcionesGanadorasDeRondaActual.length; i++) { //recorre el vector de opciones ganadoras
    let total = listaApuestas.buscaGanador(opcionesGanadorasDeRondaActual[i]);// busca en la lista apuesta si esta el numero en la posicion i y guarda el valor a banco
    valorAbanco = valorAbanco + total; // guarda el valor a banco encontrado
  }
  if (valorAbanco === 0) { // si no actualiza la variable valorAbanco es porque no tenia apuestas ganadoras
    document.getElementById(ideValor).innerHTML = "El jugador no tiene ninguna apuesta ganadora";
  }
  else {
    document.getElementById(ideValor).innerHTML = "El valor total ganado por el jugador es: " + valorAbanco; // muestra el total a banco de todas las pauestas ganadoras.

  }

  return valorAbanco; // retorna el valor que ganó el jugador.
}


function confirma() // confirma si desea incluir la casilla y retorna un boolean
{
  var confirmacion = confirm("Desea incluir esta casilla a sus apuestas?");
  return confirmacion; // si da aceptar la incluye de lo contrario deja la lista apuesta igual.
}

function muestraLista(listaApuestas, ideDiv) { // muestra la lista del jugador en un div del html
  var vectorlistaApuesta = []; // crea un vector donde va ir guardando el objeto data de la lista Apuesta
  let k = 0;// la variable k va ir llenando el vector de la lista de apuesta.
  for (const casilla of listaApuestas.values()) { // for para imprimir los elementos que hay en lista apuesta 

    vectorlistaApuesta[k] = casilla; // vector en la posición k, va poner el objeto data que encontro en la lista apuesta
    k = k + 1; // incrementa k para seguir en la otra posición del vector
  }
  var resul = recorrerObjeto(vectorlistaApuesta); // se llama la funición que recorre el vector y recorre el objeto que esta dentro de cada posición del vector.
  document.getElementById(ideDiv).innerHTML = resul; // se manda la variable para que lo imprima en la posición definida en el html
}


function recorrerObjeto(objeto) { // recorre el vetor de la lista apuestas con objetos
  var numeroApuesta = 0;
  var respuesta = "<br>";
  for (let j = 0; j < objeto.length; j++) { // recorre el vector
    var obj = objeto[j];
    numeroApuesta = numeroApuesta + 1; // identificar el numero de la apuesta
    respuesta += "<br>" + " Apuesta Número: " + numeroApuesta;
    for (var i in obj) { // recorre los objetos
      respuesta += "<br>" + i + ": " + obj[i];
    }
  }
  return respuesta //retorna toda la lista ligada con cada campo del objeto
}



function devolver(tipo, ideDevuelta, ideValor, ideDinero) {
 // identifica que numero de jugador es

  let valorAbanco = 0;
  if (tipo === 1) {
    valorAbanco = buscaValorADevolver(listaApuestasJ1, ideValor);
    inicialJ1 = inicialJ1 + valorAbanco;
    document.getElementById(ideDinero).innerHTML = inicialJ1;
  }
  if (tipo === 2) {
    valorAbanco = buscaValorADevolver(listaApuestasJ2, ideValor);
    inicialJ2 = inicialJ2 + valorAbanco;
    document.getElementById(ideDinero).innerHTML = inicialJ2;
  }
  if (tipo === 3) {
    valorAbanco = buscaValorADevolver(listaApuestasJ3, ideValor);
    inicialJ3 = inicialJ3 + valorAbanco;
    document.getElementById(ideDinero).innerHTML = inicialJ3;
  }
  if (tipo === 4) {
    valorAbanco = buscaValorADevolver(listaApuestasJ4, ideValor); // valor a banco es el dinero que le tienen que devolver al jugador 
    inicialJ4 = inicialJ4 + valorAbanco;
    document.getElementById(ideDinero).innerHTML = inicialJ4;

  }

  if (valorAbanco > 0) {
    let dineroTotalBanco = banco.sumaDineroBanco(); // suma el dinero que hay en el banco
    if (dineroTotalBanco >= valorAbanco) { // verifica que el valor a devolver sea menor que que el dinero que tiene el banc+o
      banco.verifica(); // verifica que las variables del banco esten en 0
      let monedasAdevolver = banco.devolver(0, valorAbanco); // invoca el metodo devolver junto con el dinero a devolver 
      document.getElementById(ideDevuelta).innerHTML = "El jugador ganó: "; // imprime el resultado
      for (let i = 0; i < monedasAdevolver.length; i++) {
        if (monedasAdevolver[i] != 0) {
          document.getElementById(ideDevuelta).innerHTML += "  " + monedasAdevolver[i] + "  moneda(s) de:  " + monedas[i] + ".";
        }
      }
    }
    else {
      alert("Cierre el juego, el banco no tiene dinero para devolver"); // si el cantidad de dinero que tiene el bamco es inferior a la cantidad a devolver 
      return;
    }
  } else { // si la cantidad a devolver es menos o igual a cero no tiene que devolver nada 
    document.getElementById(ideDevuelta).innerHTML = "";
  }

  
}


function eliminarApuesta(lista, iden, ideDiv) { // elimina Apuesta
  // actuliza lista apuesta según el jugador
  if (lista === 1) {
    listaApuestas = listaApuestasJ1;
  }
  if (lista === 2) {
    listaApuestas = listaApuestasJ2;
  }
  if (lista === 3) {
    listaApuestas = listaApuestasJ3;
  }
  if (lista === 4) {
    listaApuestas = listaApuestasJ4;
  }

  var apuesta = prompt("Digite el número de la apuesta que desea eliminar"); // Se debe escribir el número de la apuesta con el que aparece identificada cada apuesta en el div

  while (parseFloat(apuesta) != apuesta) {
    apuesta = prompt('solo se aceptan números', '', '');
  }
  let apuestaElimina = parseInt(apuesta);
  apuestaElimina = apuestaElimina - 1; // se le resta uno ya que el metodo de la lista ligada comienza almacenar desde la posición  0 y esto sera lo que se envie como parametro
  var existe = listaApuestas.remove(apuestaElimina); // llama al metodo eliminar de la lista ligada, el cual elimina segun el indice enviado como parametro.
  if (existe != false) { // va retornar el valor apostado de la apuesta que se elimino, en caso de ser encontrado el indice.
    muestraLista(listaApuestas, ideDiv); // se actualiza la el div con las apuestas en el html

    // se le vuelve a sumar el valor de la apuesta que se elimino al dinero del jugador. 
    if (lista === 1) {
      inicialJ1 = inicialJ1 + existe;
      document.getElementById(iden).innerHTML = inicialJ1;
    }
    if (lista == 2) {
      inicialJ2 = inicialJ2 + existe;
      document.getElementById(iden).innerHTML = inicialJ2;
    }
    if (lista === 3) {
      inicialJ3 = inicialJ3 + existe;
      document.getElementById(iden).innerHTML = inicialJ3;
    }
    if (lista === 4) {
      inicialJ4 = inicialJ4 + existe;
      document.getElementById(iden).innerHTML = inicialJ4;
    }

    alert("La apuesta fue eliminada exitosamente");// se muestra mensaje de la realización de la tarea

  }
  else {
    alert("la lista esta vacia o el número de la apuesta no se encontro"); // si existe es false es porque no encontro el indice en la lista de apuestas 

  }

}


 
function limpiarlistas() { // limpia las listas de apuestas y activa el boton reclamar premio
  listaApuestasJ1.limpiaLista();
  muestraLista(listaApuestasJ1, arregloidDiv[0]);
  listaApuestasJ2.limpiaLista();
  muestraLista(listaApuestasJ2, arregloidDiv[1]);
  listaApuestasJ3.limpiaLista();
  muestraLista(listaApuestasJ3, arregloidDiv[2]);
  listaApuestasJ4.limpiaLista();
  muestraLista(listaApuestasJ4, arregloidDiv[3]);

  document.getElementById(arregloIdBotonApostar[0]).disabled = false;

  document.getElementById('numeroGanador').innerHTML = "Número ganador";

}


function numeroJugadores() { // pregunta el números de jugadores que van a participar en el juego

  var cantiJugadores = prompt('Bienvenido al juego de la ruleta, dígite la cantidad de jugadores participantes, minimo 1 máximo 4', '', '');

  while (parseFloat(cantiJugadores) != cantiJugadores) {  // con esto verificamos que el usuario solo acepte números
    cantiJugadores = prompt('solo se aceptan números', '', '');
  }
  if (cantiJugadores <= 0 || cantiJugadores > 4) {
    numeroJugadores();
  }
  cantidadJugadores = parseInt(cantiJugadores); // Acatualiza la variable cantidad de jugadores 

}

numeroJugadores(); // este es el primer metodo que se ejecuta