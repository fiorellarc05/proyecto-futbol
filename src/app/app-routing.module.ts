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
    path: 'partidos',
    children:[
      {
        path: '',
        loadChildren: './partidos/partidos.module#PartidosPageModule'
      },
      {
        path: 'add',
        loadChildren: './partidos/add/add.module#AddPageModule' 
      },
      {
        path: ':partidoId',
        loadChildren: './partidos/detail/detail.module#DetailPageModule'
      },
      {
        path: "edit/:partidoId",
        loadChildren: "./partidos/edit/edit.module#EditPageModule",
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
