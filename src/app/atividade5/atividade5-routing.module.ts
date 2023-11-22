import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Atividade5Page } from './atividade5.page';

const routes: Routes = [
  {
    path: '',
    component: Atividade5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Atividade5PageRoutingModule {}
