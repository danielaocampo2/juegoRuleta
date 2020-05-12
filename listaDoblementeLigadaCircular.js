const head = Symbol("head");

class ListaDoblementeLigadaCircular {
  constructor() {
    this[head] = null;
  }

  add(dato) { // agrega datos a la lista doblemente ligada circular
    const newNode = new Nodo(dato); // cra un nuevo nodo 
    if (this[head] === null) { // si la lista esta vacia
      this[head] = newNode; // hace ese nuevo nodo la cabeza
      newNode.next = newNode; // conecta ligas 
      newNode.previous = newNode;
    } else { // sino lo agrega al final
      const tail = this[head].previous; // se crea una cola temporal que sera el anterior de la cabeza o sea el dato que esta en la última posición
      tail.next = newNode;  // se pone el nodo en la ultima posición
      newNode.previous = tail; // se actualiza la cola
      newNode.next = this[head];// y se actualiza la cabeza
      this[head].previous = newNode;// y la liga izquierda de la cabeza va apuntar hacia el último nodo
    }
  }

  get(index) { // se toma el index de la lista y retorna el dato 
    if ((index > -1) && (this[head] !== null)) { // controla que el index sea mayor a -1 y que la lista no este vacia
      let current = this[head]; // variable con la que va recorrer la lista hasta encontrar el nodo.
      let i = 0;
      do {
        if (i === index) { // si la variable i es igual al index significa que encontro el nodo
          return current.dato; // retorna el objeto dato 
        }
        current = current.next; // si no lo encuentra actualiza nodo actual con el campo de liga derecha
        i++; 
      } while ((current !== this[head]) && (i <= index)); // busca hasta que el dato actual vuelva hacer la cabeza y la variable y sea menor o igual que el index que se esta buscando-
    }
    return undefined; // en caso de no encontrar el dato, retorna indefinido
  }


  getsize() { // metodo que retorna el número de nodos que contiene la lista
    if (this[head] === null) {// la lista es vacia
      return 0;
    }
    let current = this[head];  //
    let count = 0; // variable para contar el numero de nodos
    do {
      count++;
      current = current.next;
    } while (current !== this[head]); // le va sumar uno al contador hasta que vuelva a llegar a la cabeza
    return count;
  }

  [Symbol.iterator]() { // especifica al iterador por defecto de un objeto
    return this.values();
  }

  *values() {  // metodo que imprime la todos los elementos de la lista 
    if (this[head] !== null) { // si la lista no esta vacia
      if (this[head].next === this[head]) { // si solo hay un elemento en la lista 
        yield this[head].dato; // yield --- retorna un objeto iterable
      } else {
        let current = this[head]; 
        do {
          yield current.dato;
          current = current.next;
        } while (current !== this[head]); // recorre toda la lista
      }
    }
  }

  remove(index) { // elimina por el index y retorna el campo del valor a postado que contiene el objeto dato

    
    if ((this[head] === null) || (index < 0)) { // si la lista esta vacia o el index es menor que 0 retorna falso
        return false;
    }

    let current = this[head];

    if (index === 0) { 

        if (current.next === this[head]) {// verifica si solo hay un nodo 
            
            this[head] = null;
        } else { // si hay mas de un nodo 

            const tail = this[head].previous; // crea una cola temporar que es el anterio a la cabeza


            tail.next = current.next;   // desconecta y el primer nodo y se conecta el segundo con el último
            current.next.previous = tail; 
            
  
            this[head] = tail.next;// se actualiza la nueva cabeza
        }
        
        return current.dato.valorApostado; // retorna el valor apostado
    }

    let i = 0;

    do { // encuentra el nodo a eliminar

        current = current.next;

        i++;

    } while ((current !== this[head]) && (i < index));  

    if (current !== this[head]) { // cuando encuentra el nodo veridica que no sea igual a la cabeza

        current.previous.next = current.next; // desconecta y conecta nodos 
        current.next.previous = current.previous;

        return current.dato.valorApostado;
    }

    return false; // si no lo encuentra retorna falso 

}

buscaGanador(dato) { //  busca si alguna de las opciones ganadoras se encuetra en la lista del jugador
  
let valorApagar=0; // si encuentra alguna opción ganadora retorna el valor ganado sino retorna cero. 
  if (this[head] === null) { // si la lista es vacia retorna cero
    return valorApagar;
  }

  let current = this[head];

  do {

    if (current.dato.numero === dato) { // si encuentra el dato en el campo numero del nodo apuestas 
       valorApagar= valorApagar+(current.dato.valorApostado*current.dato.valorAMultiplicar); // llena la variable, con el valor apostado * el numero a multiplicar 
    }

    current = current.next; // continua con el siguiente nodo

    

  } while (current !== this[head]); // busca en todos los elementos de la lista


  return valorApagar; // retorna el total que gano con todas las apuestas 
}

limpiaLista(){  // elimina todos los elementos de la lista. 
  this[head] = null;

}


}