import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})
export class PipesComponent implements OnInit {
   bandera = true;
   Nombre: string = 'Francisco Bañuelos Valadez';
   NombreAlterno = 'FrAnCiScO BaÑuElOs VaLaDeZ';
   videoURL = 'https://www.youtube.com/embed/hrQLPy9q3UM';
   ArrayPrueba = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K'];
   PI = Math.PI;
   Fecha = new Date();
   Precio = 199.99;
  constructor() { }

  ngOnInit(): void {
  }

}
