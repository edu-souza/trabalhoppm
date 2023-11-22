import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { Atividade1PageModule } from '../atividade1/atividade1.module';
import { Atividade2PageModule } from '../atividade2/atividade2.module';
import { Atividade3PageModule } from '../atividade3/atividade3.module';
import { Atividade4PageModule } from '../atividade4/atividade4.module';
import { Atividade5PageModule } from '../atividade5/atividade5.module';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    Atividade1PageModule,
    Atividade2PageModule,
    Atividade3PageModule,
    Atividade4PageModule,
    Atividade5PageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
