import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade4',
  templateUrl: './atividade4.page.html',
  styleUrls: ['./atividade4.page.scss'],
})
export class Atividade4Page {
  novaTarefa: string = '';
  tarefas: { nome: string; concluida: boolean; estilo: string }[] = [];

  adicionarTarefa() {
    if (this.novaTarefa.trim() !== '') {
      this.tarefas.push({ nome: this.novaTarefa, concluida: false, estilo: 'tarefa-pendente' });
      this.novaTarefa = '';
    }
  }

  removerTarefa(tarefa: { nome: string; concluida: boolean; estilo: string }) {
    this.tarefas = this.tarefas.filter((t) => t !== tarefa);
  }

  concluirTarefa(tarefa: { nome: string; concluida: boolean; estilo: string }) {
    tarefa.concluida = !tarefa.concluida;
    tarefa.estilo = tarefa.concluida ? 'tarefa-concluida' : 'tarefa-pendente';
  }
}
