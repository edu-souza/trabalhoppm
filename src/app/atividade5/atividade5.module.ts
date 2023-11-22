import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Atividade5PageRoutingModule } from './atividade5-routing.module';

import { Atividade5Page } from './atividade5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Atividade5PageRoutingModule
  ],
  exports:[Atividade5Page],
  declarations: [Atividade5Page]
})
export class Atividade5PageModule {}
