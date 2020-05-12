class Ganador {
  constructor() {
    this.casillasNegras = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35] // vector que tiene los números de color negro
  }

  generarNumeroAleatorio(maximo) { // genera un numero aleatorio el parametro maximo dice hasta que número en este caso es hasta 36
    let numeroAleatorio = Math.round(Math.random() * maximo); // número aleatorio entero del 0-36  
    return numeroAleatorio; // retorna el número aleatorio
  }
  // cada que se tiene un número ganador pueden existir diferentes formas de ganar 
  // este metodo retornará un vector con las 6 posibles opciones con las que se puede encontrar un ganador
  // excepto el cero que solo va arrojar dos opciones, la dek número y par.
  // En la primera posición encontramos el número aleatorio o sea el número ganador, el cual estara entre el 0 y el 36
  // En la segunda posición estará el número que hace referencia a que  fila pertenece el número.
  // En la tercera posición estará el número que hace referencia que docena pertene
  // En la cuarta posición estará el número que hace referencia a que color pertenece.
  // En la quinta posición estará el número que hace referencia a si es impar o par.
  // En sexta posición estará el número que hace referencia a si esta entre el 1-18 ó el 19-36.
  obtenerOpcionesGanadoras(numeroEnLaRuleta) {
    let listaDeOpcionesGanadoras = [];// crea el vector.
    listaDeOpcionesGanadoras[0] = numeroEnLaRuleta; // pone en la primera posición el número aleatorio.

    if (numeroEnLaRuleta === 0) { // si es cero, pone en la segunda posición que es par y retorna el vector.
      listaDeOpcionesGanadoras.push(44);// el número que hace referencia a par
      return listaDeOpcionesGanadoras;
    }
    for (let i = 3; i <= 36; i = i + 3) { // hace parte de la primera fila, la primera fila esta del 3 al 36 y va aumentando de a 3
      if (numeroEnLaRuleta === i) {  // evalua si algun i es igual al número aleatorio
        listaDeOpcionesGanadoras.push(39);// 39 número que indica que hace parte de la primera fila
      }
    }
    for (let i = 2; i <= 35; i = i + 3) { // la segunda fila comienza del 2 al 35 y aumenta de a 3 
      if (numeroEnLaRuleta === i) { // evalua si algun i es igual al número aleatorio
        listaDeOpcionesGanadoras.push(38); // 38 indica que hace parte de la seguna fila
      }
    }
    for (let i = 1; i <= 34; i = i + 3) { // la tercera fila comienza del 1 al 34
      if (numeroEnLaRuleta === i) { // evalua si algun i es igual al número aleatorio
        listaDeOpcionesGanadoras.push(37); // 37 indica que hace parte de la tercera fila.
      }
    }
    if (numeroEnLaRuleta <= 12) { //  si es mejor o igual a 12 hace parte de la primera docena.
      listaDeOpcionesGanadoras.push(40); // 40 hace referencia a primera docena.
    }
    else if ((numeroEnLaRuleta > 12) && (numeroEnLaRuleta <= 24)) { // si es mayor que 12 hace parte de la segunda docena
      listaDeOpcionesGanadoras.push(41); // 41 hace referencia a la segunda docena.
    }
    else { // si es mayor a 24 hace parte de la tercera docena 
      listaDeOpcionesGanadoras.push(42); // 42 hace referencia a la tercer docena.
    }
    let esDeColorNegro = false; // variable para controlar color
    for (let i = 0; i < 18; i++) { // evalua en el vector de casillas negras 
      if (numeroEnLaRuleta === this.casillasNegras[i]) { // si el numero aleatorio es igual a uno de los números del vector
        listaDeOpcionesGanadoras.push(45); // significa que el número e de los negro
        esDeColorNegro = true; // vuelve verdadera la variable
      }
    }
    if (!esDeColorNegro) { //  si la variable no es verdadera significa que es de color rojo
      listaDeOpcionesGanadoras.push(46); // 46 número de color rojo
    }
    if (numeroEnLaRuleta % 2 === 0) {  // un número es par si modulo 2 es 0 
      listaDeOpcionesGanadoras.push(44);// 44 hace referencia a número par
    }
    else {
      listaDeOpcionesGanadoras.push(47); // si módulo 2 es diferente de cero, el número no es par-
    }
    if (numeroEnLaRuleta <= 18) { // si el número es menor o igual a 18 
      listaDeOpcionesGanadoras.push(43); // 43 indica que el número ganador esta entre el 1-18
    }
    else {
      listaDeOpcionesGanadoras.push(48); // el númeor es mayor que 18 
    }
    return listaDeOpcionesGanadoras; // retorna vector con todas las posibles formas de ganar.
  }
}
