import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../../services/Hero.services';
import { Router } from '@angular/router';

//decorador

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor(private _heroService: HeroService, private _aRouter: Router) { 

  }
  ArrayHeros: object[] = [];

  // Se ejecuta en cuanto se termina de renderizar el componente
  ngOnInit(): void {
    this.ArrayHeros = this._heroService.getHeros();
  }
  Navegar(index) {
    console.log(index);
    this._aRouter.navigate(['/hero',index]);
  }

}
