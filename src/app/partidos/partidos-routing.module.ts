import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartidosPage } from './partidos.page';

const routes: Routes = [
  {
    path: '',
    component: PartidosPage
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartidosPageRoutingModule {}
