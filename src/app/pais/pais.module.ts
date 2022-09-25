import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaisModule { }
