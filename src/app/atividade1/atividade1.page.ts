import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atividade1',
  templateUrl: './atividade1.page.html',
  styleUrls: ['./atividade1.page.scss'],
})
export class Atividade1Page {

  distancia: number = 0;
  litros: number = 0;
  resultado: number = 0;
  classificacao: string = '';

  calcularKmPorLitro() {
    this.resultado = this.distancia / this.litros;
    this.classificar();
  }

  classificar() {
    if (this.resultado > 13) {
      this.classificacao = 'Econômico';
    } else if (this.resultado >= 10 && this.resultado <= 13) {
      this.classificacao = 'Normal';
    } else {
      this.classificacao = 'Gastador';
    }
  }

}
