import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Atividade3Page } from './atividade3.page';

const routes: Routes = [
  {
    path: '',
    component: Atividade3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Atividade3PageRoutingModule {}
