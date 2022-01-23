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
const anchoCanvas = rejillaCanvas.width;
alert(anchoCanvas);
const tabl1 = new Tablero();

function getMousePos(rejillaCanvasElement, evt) {
  const rect = rejillaCanvasElement.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  };
}

function obtenerCoordenadas(
  posicionX,
  posicionY,
  numeroMaximoFilas,
  numeroMaximoColumnas
) {
  const posicion = [];
  if ((posicionY < 540) & (posicionX > 110) & (posicionX < 670)) {
    if (posicionX > 110 && posicionX < 190) {
      columna = 0;
    }
    if (posicionX > 190 && posicionX < 270) {
      columna = 1;
    }
    if (posicionX > 270 && posicionX < 350) {
      columna = 2;
    }
    if (posicionX > 350 && posicionX < 430) {
      columna = 3;
    }
    if (posicionX > 430 && posicionX < 510) {
      columna = 4;
    }
    if (posicionX > 510 && posicionX < 590) {
      columna = 5;
    }
    if (posicionX > 590 && posicionX < 670) {
      columna = 6;
    }
  } else {
    columna = -1;
  }
  return posicion;
}

rejillaCanvas.addEventListener(
  "click",
  (evt) => {
    const mousePos = getMousePos(rejillaCanvas, evt);
    const coordenadas = obtenerCoordenadas(
      mousePos.x,
      mousePos.y,
      tabl1.numeroFilas,
      tabl1.numeroColumnas
    );
    // const valorCeldaNuevo =
    // actualizarCelda(coordenadas, valorCeldaNuevo){}
  },
  false
);

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
