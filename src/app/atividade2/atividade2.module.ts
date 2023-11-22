import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Atividade2PageRoutingModule } from './atividade2-routing.module';

import { Atividade2Page } from './atividade2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Atividade2PageRoutingModule
  ],
  exports:[Atividade2Page],
  declarations: [Atividade2Page]
})
export class Atividade2PageModule {}
