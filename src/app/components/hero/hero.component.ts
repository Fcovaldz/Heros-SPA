import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/Hero.services';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  // Variable que almacena la respuesta del método getHero que se encuentra en Hero Service
  hero:any = {};
  flag = true;

  constructor( private _aRoute: ActivatedRoute, private _heroService: HeroService) {
    
    this._aRoute.params.subscribe(params => {
      console.log(params);
      this.hero = this._heroService.getHero(params['id']);
      console.log(this.hero);
      if(this.hero.casa == 'Marvel'){
        this.flag = false;
      }
    })
   }

  ngOnInit(): void {
  }

}
