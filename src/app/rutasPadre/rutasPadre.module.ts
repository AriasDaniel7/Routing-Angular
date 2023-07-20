import { NgModule } from '@angular/core';
import { RutaPadre1Component } from './pages/ruta-Padre1/ruta-Padre1.component';
import { RutaPadre2Component } from './pages/ruta-Padre2/ruta-Padre2.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  imports: [
    RouterModule
  ],
  exports: [

  ],
  declarations: [
    RutaPadre1Component,
    RutaPadre2Component,
    HomeComponent
  ],
  providers: [],
})
export class RutasPadreModule { }
