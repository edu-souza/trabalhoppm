import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Atividade2Page } from './atividade2.page';

const routes: Routes = [
  {
    path: '',
    component: Atividade2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Atividade2PageRoutingModule {}
