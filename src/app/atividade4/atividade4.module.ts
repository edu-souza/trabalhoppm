import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Atividade4PageRoutingModule } from './atividade4-routing.module';

import { Atividade4Page } from './atividade4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Atividade4PageRoutingModule
  ],
  exports:[Atividade4Page],
  declarations: [Atividade4Page]
})
export class Atividade4PageModule {}
