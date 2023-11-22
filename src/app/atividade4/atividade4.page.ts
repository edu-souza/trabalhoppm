import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade4',
  templateUrl: './atividade4.page.html',
  styleUrls: ['./atividade4.page.scss'],
})
export class Atividade4Page {
  novaTarefa: string = '';
  tarefas: { nome: string; concluida: boolean }[] = [];

  adicionarTarefa() {
    if (this.novaTarefa.trim() !== '') {
      this.tarefas.push({ nome: this.novaTarefa, concluida: false });
      this.novaTarefa = '';
    }
  }

  removerTarefa(tarefa: { nome: string; concluida: boolean }) {
    this.tarefas = this.tarefas.filter((t) => t !== tarefa);
  }

  //Nao consegui fazer funcionar o line-through
  concluirTarefa(tarefa: { nome: string; concluida: boolean }) {
    tarefa.concluida = !tarefa.concluida;
  }

}
