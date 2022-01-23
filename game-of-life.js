/* eslint-disable lines-between-class-members */
class Tablero {
  rejilla;
  filas;
  columnas;

  constructor() {
    this.rejilla = [];
    this.filas = 10;
    this.columnas = 10;
  }

  mostrarRejilla() {
    let cadena = "";
    for (let fila = 0; fila < this.filas; fila++) {
      for (let columna = 0; columna < this.columnas; columna++) {
        cadena += this.rejilla[fila][columna];
      }
      console.log(fila, cadena);
      cadena = "";
    }
  }

  generarRejillaLogicaVacia() {
    let rejillaAuxiliar = [];
    for (let fila = 0; fila < this.filas; fila++) {
      for (let columna = 0; columna < this.columnas; columna++) {
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

  /* cumpleRegla1() {
    return true;
  } */
}

const tabl1 = new Tablero();

tabl1.generarRejillaLogicaVacia();
tabl1.mostrarRejilla();
