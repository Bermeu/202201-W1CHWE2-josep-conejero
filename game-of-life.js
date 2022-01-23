/* eslint-disable lines-between-class-members */
class Tablero {
  rejilla;
  numeroFilas;
  numeroColumnas;

  constructor() {
    this.rejilla = [];
    this.numeroFilas = 2;
    this.numeroColumnas = 2;
  }

  mostrarRejilla() {
    let cadena = "";
    for (let fila = 0; fila < this.numeroFilas; fila++) {
      for (let columna = 0; columna < this.numeroColumnas; columna++) {
        cadena += this.rejilla[fila][columna];
      }
      console.log(fila, cadena);
      cadena = "";
    }
  }

  generarRejillaLogicaVacia() {
    let rejillaAuxiliar = [];
    for (let fila = 0; fila < this.numeroFilas; fila++) {
      for (let columna = 0; columna < this.numeroColumnas; columna++) {
        rejillaAuxiliar.push(0);
      }
      this.rejilla.push(rejillaAuxiliar);
      rejillaAuxiliar = [];
    }
  }

  vaciarRejillaLogica() {
    this.rejilla = [];
    this.generarRejillaLogicaVacia();
  }
}

const tabl1 = new Tablero();

tabl1.generarRejillaLogicaVacia();
tabl1.mostrarRejilla();
