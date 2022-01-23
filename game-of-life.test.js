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

const rejillaCanvas = document.querySelector(".rejillaCanvas");
const ctx = rejillaCanvas.getContext("2d");

const tabl1 = new Tablero();

tabl1.generarRejillaLogicaVacia();
tabl1.mostrarRejilla();

describe("Given a generarRejillaLogicaVacia function", () => {
  describe("When it is invoked", () => {
    test("Then it should create an array 2x2 with 0's", () => {
      const rejillaEsperada = [
        [0, 0],
        [0, 0],
      ];

      tabl1.generarRejillaLogicaVacia();
      const rejillaDevuelta = tabl1.rejilla;

      expect(rejillaDevuelta).toBe(rejillaEsperada); // no funciona porque no es un valor primitivo
    });
  });
});
