import { Component } from '@angular/core';
import { SuperHero } from './Models/super-hero';
import { SuperHeroService } from './Services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SuperHeroNg';
   heros:SuperHero[]= [ ]; 
   heroToEdit?:SuperHero;
   constructor(private superHeroService: SuperHeroService ){


   }
   ngOnInit():void{

  this.superHeroService
  .getSuperHeroes()
  .subscribe((result :SuperHero[]) =>this.heros= result); 
   }
   updateHeroList(heroes: SuperHero[]){
this.heros=heroes; 
   }
   initNewHero(){
    this.heroToEdit= new SuperHero(); 
   }
   editHero(hero :SuperHero){
    this.heroToEdit=hero;
   }

}
