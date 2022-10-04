import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
      margin-top: 5px;
    }
  `
  ]
})
export class PorRegionComponent {
  hayError: boolean = false;
  paises: Country[] = [];
  regiones: string []  = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC']
  regionActiva: string = ''

  constructor(private paisService: PaisService) { }

  getClaseCss(region: string) {
    return (region === this.regionActiva)
            ? 'btn btn-primary'
            : 'btn btn-outline-primary';
  }

  activaRegion(region: string) {
    if(region === this.regionActiva) {return;}
    this.hayError = false;
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region)
      .subscribe({
        next: (paises => {
          console.log(paises)
          this.paises = paises
        }),
        error: (error) => {
          this.hayError = true;
          this.paises = [];
        }
      })
    console.log(this.regionActiva)
    //TODO: hacer el llamado a los servicios
  }

}
