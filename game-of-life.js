/* eslint-disable lines-between-class-members */
class Tablero {
  rejilla;
  numeroFilas;
  numeroColumnas;

  constructor() {
    this.rejilla = [];
    this.numeroFilas = 4;
    this.numeroColumnas = 4;
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

  /* generarRejillaLogicaVacia() {
    
  } */

  vaciarRejillaLogica() {
    this.rejilla = [];
    let rejillaAuxiliar = [];
    for (let fila = 0; fila < this.numeroFilas; fila++) {
      for (let columna = 0; columna < this.numeroColumnas; columna++) {
        rejillaAuxiliar.push(0);
      }
      this.rejilla.push(rejillaAuxiliar);
      rejillaAuxiliar = [];
    }
    // this.generarRejillaLogicaVacia();
  }

  obtenerValorCelda(coordenadas) {
    return this.rejilla[coordenadas[0]][coordenadas[1]];
  }

  actualizarCelda(coordenadas, valorNuevo) {
    this.rejilla[coordenadas[0]][coordenadas[1]] = valorNuevo;
    debugger;
  }
}

const rejillaCanvas = document.querySelector(".rejillaCanvas");
const ctx = rejillaCanvas.getContext("2d");
const tabl1 = new Tablero();
tabl1.generarRejillaLogicaVacia();
tabl1.mostrarRejilla();

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
  numeroMaximoColumnas,
  rejilla
) {
  const anchoCanvas = rejilla.width;
  const altoCanvas = rejilla.height;
  const anchoCelda = anchoCanvas / numeroMaximoColumnas;
  const altoCelda = altoCanvas / numeroMaximoFilas;
  const coordenadas = [0, 0];

  coordenadas[0] = Math.trunc(posicionX / anchoCelda); // fila
  coordenadas[1] = Math.trunc(posicionY / altoCelda); // columna

  return coordenadas;
}

rejillaCanvas.addEventListener(
  "click",
  (evt) => {
    const mousePos = getMousePos(rejillaCanvas, evt);
    const coordenadas = obtenerCoordenadas(
      mousePos.x,
      mousePos.y,
      tabl1.numeroFilas,
      tabl1.numeroColumnas,
      rejillaCanvas
    );
    const antiguoValorDeCelda = tabl1.obtenerValorCelda(coordenadas);
    const nuevoValorCelda = antiguoValorDeCelda ? 0 : 1;
    tabl1.actualizarCelda(coordenadas, nuevoValorCelda);
  },
  false
);
