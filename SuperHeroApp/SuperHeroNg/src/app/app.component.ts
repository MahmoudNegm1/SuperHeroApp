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
   constructor(private superHeroService: SuperHeroService ){


   }
   ngOnInit():void{

    this.heros= this.superHeroService.getSuperHeroes(); 
     console.log(this.heros);   
   }
}
