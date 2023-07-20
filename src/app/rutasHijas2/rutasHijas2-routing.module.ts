import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaHija1Component } from './pages/ruta-hija1/ruta-hija1.component';
import { RutaHija2Component } from './pages/ruta-hija2/ruta-hija2.component';
import { RutaPadre2Component } from '../rutasPadre/pages/ruta-Padre2/ruta-Padre2.component';

const routes: Routes = [
  {
    path: 'rutaHija1',
    component: RutaHija1Component
  },
  {
    path: 'rutaHija2',
    component: RutaHija2Component
  },
  {
    path: '',
    component: RutaPadre2Component,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RutasHijas2RoutingModule { }
