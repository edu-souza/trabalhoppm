import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Atividade4Page } from './atividade4.page';

const routes: Routes = [
  {
    path: '',
    component: Atividade4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Atividade4PageRoutingModule {}
