import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/Hero.services';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor( private _aRoute: ActivatedRoute, private _heroSerivce: HeroService) { }
  
  resultados: any = [];
  str:string = '';

  ngOnInit(): void {
    // Obtener parametros de la ruta
    this._aRoute.params.subscribe(params =>{
      console.log(params['termino']);
      this.str = params['termino'];
      this.resultados = this._heroSerivce.searchHeros(params['termino']);
      console.log(this.resultados);
      //this._heroSerivce.searchHeros(params['termino']);


    });
  }

}
