import { Injectable } from '@angular/core';
import { SuperHero } from '../Models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor() { }

  public getSuperHeroes ():SuperHero[]{
let hero =new SuperHero(); 
hero.firstName= "mahmoud " ;
hero.lastName= "Negm "; 
hero.id= 1; 
hero.place = "Dubai - Emirates "; 
 return [hero];  


  }
}
