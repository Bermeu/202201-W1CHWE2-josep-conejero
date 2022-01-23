/* eslint-disable max-classes-per-file */
/* eslint-disable lines-between-class-members */
class Tablero {
  rejilla;
  numeroFilas;
  numeroColumnas;

  constructor(numeroTotalFilas, numeroTotalColumnas) {
    this.rejilla = [];
    this.numeroFilas = numeroTotalFilas;
    this.numeroColumnas = numeroTotalColumnas;
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
    this.rejilla = [];
    let rejillaAuxiliar = [];
    for (let fila = 0; fila < this.numeroFilas; fila++) {
      for (let columna = 0; columna < this.numeroColumnas; columna++) {
        rejillaAuxiliar.push(0);
      }
      this.rejilla.push(rejillaAuxiliar);
      rejillaAuxiliar = [];
    }
  }

  obtenerValorCelda(coordenadas) {
    return this.rejilla[coordenadas[0]][coordenadas[1]];
  }

  actualizarCelda(coordenadas, valorNuevo) {
    this.rejilla[coordenadas[0]][coordenadas[1]] = valorNuevo;
  }
}

class NuevoCanvas {
  nuevaRejilla;
  ctx;
  filasRejilla;
  columnasRejilla;
  anchoCelda;
  altoCelda;
  anchoCanvas;
  altoCanvas;

  constructor(nuevaRejillaCanvas, filasRejilla, columnasRejilla) {
    this.nuevaRejilla = nuevaRejillaCanvas;
    this.filasRejilla = filasRejilla;
    this.columnasRejilla = columnasRejilla;
    this.ctx = this.nuevaRejilla.getContext("2d");
    this.anchoCanvas = this.nuevaRejilla.width;
    this.altoCanvas = this.nuevaRejilla.height;
    this.anchoCelda = this.anchoCanvas / this.columnasRejilla;
    this.altoCelda = this.altoCanvas / this.filasRejilla;
  }

  dibujarRejilla() {
    for (let i = 0; i < this.columnasRejilla; i++) {
      this.ctx.strokeStyle = "rgb(117, 117, 113)";
      this.ctx.beginPath();
      this.ctx.moveTo(this.anchoCelda * i, 0);
      this.ctx.lineTo(this.anchoCelda * i, this.altoCanvas);
      this.ctx.closePath();
      this.ctx.stroke();
    }
    for (let j = 0; j < this.filasRejilla; j++) {
      this.ctx.strokeStyle = "rgb(117, 117, 113)";
      this.ctx.beginPath();
      this.ctx.moveTo(0, this.altoCelda * j);
      this.ctx.lineTo(this.anchoCanvas, this.altoCelda * j);
      this.ctx.closePath();
      this.ctx.stroke();
    }
  }

  dibujarCelda(coordenadas, valor) {
    this.ctx.fillStyle = valor ? "#000" : "#fff";
    const posicionX = coordenadas[0] * this.anchoCelda;
    const posicionY = coordenadas[1] * this.altoCelda;
    this.ctx.fillRect(posicionX, posicionY, this.anchoCelda, this.altoCelda);
    this.dibujarRejilla();
  }

  borrarRejilla() {}
}

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

const rejillaCanvas = document.querySelector(".rejillaCanvas");
const filasRejilla = 10;
const columnasRejilla = 10;
const elementoTablero = new Tablero(filasRejilla, columnasRejilla);
const nuevoCanvas = new NuevoCanvas(
  rejillaCanvas,
  filasRejilla,
  columnasRejilla
);
let temporizador;
const buttonPlay = document.querySelector(".button--play");
const buttonStop = document.querySelector(".button--stop");
const buttonRestart = document.querySelector(".button--restart");

rejillaCanvas.addEventListener(
  "click",
  (evt) => {
    const mousePos = getMousePos(rejillaCanvas, evt);
    const coordenadas = obtenerCoordenadas(
      mousePos.x,
      mousePos.y,
      elementoTablero.numeroFilas,
      elementoTablero.numeroColumnas,
      rejillaCanvas
    );
    const antiguoValorDeCelda = elementoTablero.obtenerValorCelda(coordenadas);
    const nuevoValorCelda = antiguoValorDeCelda ? 0 : 1;
    elementoTablero.actualizarCelda(coordenadas, nuevoValorCelda);
    nuevoCanvas.dibujarCelda([coordenadas[0], coordenadas[1]], nuevoValorCelda);
  },
  false
);

function activarTemporizador() {
  // aquí se pintará la rejilla (que tendrá en cuenta el recálculo)
}

function activarTimer() {
  temporizador = setInterval(activarTemporizador, 500);
}

function interrumpirTemporizador() {
  clearInterval(temporizador);
}

function empezarJuego() {
  activarTimer();
}

function reiniciarRejilla() {
  interrumpirTemporizador();
  nuevoCanvas.borrarRejilla();
  elementoTablero.generarRejillaLogicaVacia();
}

elementoTablero.generarRejillaLogicaVacia();
elementoTablero.mostrarRejilla();
nuevoCanvas.dibujarRejilla();
nuevoCanvas.dibujarCelda([3, 1]);

buttonPlay.addEventListener("click", empezarJuego);
buttonStop.addEventListener("click", interrumpirTemporizador);
buttonRestart.addEventListener("click", reiniciarRejilla);
