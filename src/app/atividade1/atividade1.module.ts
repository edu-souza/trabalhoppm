import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Atividade1PageRoutingModule } from './atividade1-routing.module';

import { Atividade1Page } from './atividade1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Atividade1PageRoutingModule
  ],
  exports:[Atividade1Page],
  declarations: [Atividade1Page]
})
export class Atividade1PageModule {}
