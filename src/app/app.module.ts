import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HerosComponent } from './components/heros/heros/heros.component';
import { NavbarComponent } from 'src/app/components/shared/navbar/navbar.component';
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/about/about/about.component';

import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CapitalizadoPipe } from './pipes/capitalizado/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro/domseguro.pipe';
import { PasswordPipe } from './pipes/password/password.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    HeroComponent,
    HeroCardComponent,
    BuscadorComponent,
    NotfoundComponent,
    PipesComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    PasswordPipe,
    FooterComponent

  ],

imports: [
  BrowserModule,
  RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'heros', component: HerosComponent},
    {path: 'about', component: AboutComponent},
    {path: 'pipes', component: PipesComponent},
    {path: 'hero/:id', component: HeroComponent},
    {path: 'reults/:termino', component: BuscadorComponent},
    {path: '**', pathMatch: 'full', component: NotfoundComponent}
  ])
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



