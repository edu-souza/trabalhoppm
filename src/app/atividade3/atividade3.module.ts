import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Atividade3PageRoutingModule } from './atividade3-routing.module';

import { Atividade3Page } from './atividade3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Atividade3PageRoutingModule
  ],
  exports:[Atividade3Page],
  declarations: [Atividade3Page]
})
export class Atividade3PageModule {}
