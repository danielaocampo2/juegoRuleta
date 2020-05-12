let monedasBanco = [200, 200, 200, 200, 200]; // cantida de monedas que tiene el banco por cada denominación


class Banco {

    constructor() {
        this.monedas = [50, 25, 10, 5, 1]; // Denominaciones de cada moneda
        this.termina = false; // variable que indicca cuando encuentra respuesta
        this.cambio = 0; // variable que va ir incrementando hasta ser igual a valor a devolver
        this.canti = [0, 0, 0, 0, 0]; // vector que arroja la cantida de monedas por cada denominación que se va a devolver.

    }

    devolver(i, valorADevolver) {  // metodo realizado bajo la técnica de backtraking, va retornar la cantidad minima de monedas por cada denominación que se necesitan para ajustar una devuelta
        if ((i < this.monedas.length) && (this.termina === false)) { // evalua si no ha encontrado solución y y si ya ha evaluado todos los campos 
            while ((this.cambio + this.monedas[i] <= valorADevolver) && (monedasBanco[i] > 0)) { // mientras la variable cambio + la denominación de monedas sea menor que el valor a devolver
                this.cambio = this.cambio + this.monedas[i];// se actualizan variables como: cambio con la suma de la moneda
                this.canti[i] = this.canti[i] + 1;// y la cantidad de monedas que se necesita de esa denominación
                monedasBanco[i] = monedasBanco[i] - 1;// se le disminuye esa moneda al banco.
            }
            if (this.cambio == valorADevolver) { // en caso de encontrar la solución 
                this.termina = true; // actualiza la variable 
                return this.canti; // retorna el vector cantidad de monedas necesarias.
            }
            this.canti = this.devolver((i = i + 1), valorADevolver); // en caso de no ser asi se hace la primer llamada recursiva para ensayar con la siguiente moneda
            if (this.termina === false) {  // si aún no ha encontrado solución y ya evaluó todas las denominaciones, comienza a devolverse
                while (this.canti[i] > 0) { // mientras se tengan monedas de determinada denominacion
                    this.canti[i] = this.canti[i] - 1;// se saca una moneda
                    monedasBanco[i] = monedasBanco[i] + 1;// se suma la moneda que se le recreso al banco
                    this.cambio = this.cambio - this.monedas[i];// resta la moneda a cambio
                    this.canti = this.devolver((i = i + 1), valorADevolver); // y sigue ensayando otras opciones.
                }
            }
        }

        return this.canti; //entrega el vector cantidad.

    }

    verifica() { // verifica que los atributos este como se difinieron en el constructor

        if (this.cambio !== 0) {
            this.cambio = 0;
            this.termina = false;
            for (var k = 0; k < this.canti.length; k++) {
                this.canti[k] = 0;
            }

        }

    }

    agregaMonedasAlBanco(i, valorApuesta) { // este metodo es similar al de las monedas solo que acá le suma monedas al banco cada que un jugador realiza una apuesta
        if ((i < this.monedas.length) && (this.termina === false)) {

            while ((this.cambio + this.monedas[i] <= valorApuesta)) {
                this.cambio = this.cambio + this.monedas[i];
                this.canti[i] = this.canti[i] + 1;
            }

            if (this.cambio == valorApuesta) {
                this.termina = true;
                for (let j = 0; j < this.monedas.length; j++) {
                    if (this.canti[j] !== 0) {
                        monedasBanco[j] = monedasBanco[j] + this.canti[j];
                    }
                }
                return this.canti;
            }
            this.canti = this.agregaMonedasAlBanco((i = i + 1), valorApuesta);
            if (this.termina === false) {
                while (this.canti[i] > 0) {

                    this.canti[i] = this.canti[i] - 1;
                    this.cambio = this.cambio - this.monedas[i];
                    this.canti = this.agregaMonedasAlBanco((i = i + 1), valorApuesta);


                }


            }

        }

        return this.canti;


    }

    sumaDineroBanco() { // este método suma las monedas que tiene el banco y lo múltiplica por el valor para saber la cifra exacta de dinero que tiene para devolver. 
        let dineroBanco = 0;
        for (let j = 0; j < monedasBanco.length; j++) {
            dineroBanco = dineroBanco + (monedasBanco[j] * this.monedas[j])
        }
        return dineroBanco;
    }
}









