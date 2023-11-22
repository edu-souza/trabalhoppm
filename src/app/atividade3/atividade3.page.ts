import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atividade3',
  templateUrl: './atividade3.page.html',
  styleUrls: ['./atividade3.page.scss'],
})
export class Atividade3Page {
  altura: number = 0;
  peso: number = 0;
  imc: number = 0;

  calcularIMC() {
    this.imc = this.peso / (this.altura * this.altura / 10000);
  }
}
