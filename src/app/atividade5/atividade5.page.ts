import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atividade5',
  templateUrl: './atividade5.page.html',
  styleUrls: ['./atividade5.page.scss'],
})
export class Atividade5Page {

  n1: number = 0;
  n2: number = 0;
  operacao: string = 'soma';
  resultado: number = 0;

  constructor() {}

  ngOnInit() {}

  calcular() {
    switch (this.operacao) {
      case 'soma':
        this.resultado = this.n1 + this.n2;
        break;
      case 'subtracao':
        this.resultado = this.n1 - this.n2;
        break;
      case 'divisao':
        if (this.n2 === 0) {
          alert('Não é possível realizar divisão por zero!');
          this.resultado = 0;
          break;
        }
        this.resultado = this.n1 / this.n2;
        break;
      case 'multiplicacao':
        this.resultado = this.n1 * this.n2;
        break;
    }
  }

}
