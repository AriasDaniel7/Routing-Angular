import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaPadre1Component } from './rutasPadre/pages/ruta-Padre1/ruta-Padre1.component';
import { HomeComponent } from './rutasPadre/pages/home/home.component';
import { RutaPadre2Component } from './rutasPadre/pages/ruta-Padre2/ruta-Padre2.component';

const routes: Routes = [
  {
    path: 'rutaPadre1',
    loadChildren: () => import('./rutasHijas1/rutasHijas.module').then(m => m.RutasHijasModule)
  },
  {
    path: 'rutaPadre2',
    loadChildren: () => import('./rutasHijas2/rutasHijas2.module').then(m => m.RutasHijas2Module)
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
