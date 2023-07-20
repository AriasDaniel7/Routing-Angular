import { NgModule } from '@angular/core';
import { RutaHija1Component } from './pages/ruta-hija1/ruta-hija1.component';
import { RutaHija2Component } from './pages/ruta-hija2/ruta-hija2.component';
import { RutasHijas2RoutingModule } from './rutasHijas2-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    RutasHijas2RoutingModule,
    CommonModule
  ],
  exports: [],
  declarations: [
    RutaHija1Component,
    RutaHija2Component
  ],
  providers: [],
})
export class RutasHijas2Module { }
