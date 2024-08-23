import { Component,EventEmitter, Input, Output } from '@angular/core';
import { SuperHero } from '../../Models/super-hero';
import { SuperHeroService } from '../../Services/super-hero.service';

@Component({
  selector: 'app-edit-super-hero',
  templateUrl: './edit-super-hero.component.html',
  styleUrl: './edit-super-hero.component.scss'
})
export class EditSuperHeroComponent {
  @Input() hero?:SuperHero; 
  @Output() herosUpdated= new EventEmitter<SuperHero[]>();

   constructor( private superHeroService:SuperHeroService){

   }

   ngOnInit():void{


   }
   updateHero(hero:SuperHero){
    this.superHeroService.updateHero(hero)
    .subscribe((heroes:SuperHero[]) => this.herosUpdated.emit(heroes));
   }
      deleteHero(hero:SuperHero){
        this.superHeroService.deleteHero(hero)
        .subscribe((heroes:SuperHero[]) => this.herosUpdated.emit(heroes));
   }  
    createHero(hero:SuperHero){  this.superHeroService.createHero(hero)
      .subscribe((heroes:SuperHero[]) => this.herosUpdated.emit(heroes));
    
   } 
}
