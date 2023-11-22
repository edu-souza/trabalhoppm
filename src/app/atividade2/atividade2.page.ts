import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atividade2',
  templateUrl: './atividade2.page.html',
  styleUrls: ['./atividade2.page.scss'],
})
export class Atividade2Page {
  anoNascimento: number | null = null;
  idade: number | null = null;
  classificacao: string | null = null;

  calcularIdade() {
    if (this.anoNascimento !== null) {
      const anoAtual = new Date().getFullYear();
      this.idade = anoAtual - this.anoNascimento;
      this.definirClassificacao();
    }
  }

  definirClassificacao() {
    if (this.idade !== null) {
      if (this.idade <= 12) {
        this.classificacao = 'Criança';
      } else if (this.idade <= 17) {
        this.classificacao = 'Adolescente';
      } else if (this.idade <= 59) {
        this.classificacao = 'Adulto';
      } else {
        this.classificacao = 'Idoso';
      }
    }
  }

  limparCampos() {
    this.anoNascimento = null;
    this.idade = null;
    this.classificacao = null;
  }
}
