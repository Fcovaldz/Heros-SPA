import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
  ]
})
export class HeroCardComponent implements OnInit {
   
  //Recibir informacion de un componente padre
  @Input() PadreHero: any = {};
  @Input() Index: number;
  //Mandar información del hijo al padre
  @Output() selectedHero: EventEmitter<number>;

  constructor(private _aRouter: Router) {
    //console.log(this.PadreHero);
    this.selectedHero = new EventEmitter();
   }

  ngOnInit(): void {
  }

  Navegar() {
    this._aRouter.navigate(['/hero', this.Index]);

  }

}
