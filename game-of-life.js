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

  generarPanelVacio() {
    let rejillaAuxiliar = [];
    for (let fila = 0; fila < this.filas; fila++) {
      for (let columna = 0; columna < this.columnas; columna++) {
        rejillaAuxiliar.push(0);
      }
      this.panel.push(rejillaAuxiliar);
      rejillaAuxiliar = [];
    }
  }
}
