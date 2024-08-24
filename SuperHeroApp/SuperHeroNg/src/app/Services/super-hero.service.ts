import { EnvironmentInjector, Injectable } from '@angular/core';
import { SuperHero } from '../Models/super-hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
 private url ="SuperHero"; 

  constructor( private _httpClient :HttpClient) { }


public getSuperHeroes ():Observable<SuperHero[]>{
    return this ._httpClient.get<SuperHero[]>
    (`${environment.apiUrl}/${this.url}/getAllSuperHeros`);
      } 
      
public updateHero (hero :SuperHero):Observable<SuperHero[]>{
        return this ._httpClient.put<SuperHero[]>
        (`${environment.apiUrl}/${this.url}`,hero);
          }  
         
public createHero (hero :SuperHero):Observable<SuperHero[]>{
            return this ._httpClient.post<SuperHero[]>
            (`${environment.apiUrl}/${this.url}`,hero);
            
              }
              
public deleteHero (hero :SuperHero):Observable<SuperHero[]>{
                return this ._httpClient.delete<SuperHero[]>
                (`${environment.apiUrl}/${this.url}/${hero.id}`);
                
                  }
}
