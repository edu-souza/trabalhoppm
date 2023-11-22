import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Atividade1Page } from './atividade1.page';

const routes: Routes = [
  {
    path: '',
    component: Atividade1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Atividade1PageRoutingModule {}
