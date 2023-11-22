import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'atividade1',
    loadChildren: () => import('./atividade1/atividade1.module').then( m => m.Atividade1PageModule)
  },
  {
    path: 'atividade2',
    loadChildren: () => import('./atividade2/atividade2.module').then( m => m.Atividade2PageModule)
  },
  {
    path: 'atividade3',
    loadChildren: () => import('./atividade3/atividade3.module').then( m => m.Atividade3PageModule)
  },
  {
    path: 'atividade4',
    loadChildren: () => import('./atividade4/atividade4.module').then( m => m.Atividade4PageModule)
  },
  {
    path: 'atividade5',
    loadChildren: () => import('./atividade5/atividade5.module').then( m => m.Atividade5PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
