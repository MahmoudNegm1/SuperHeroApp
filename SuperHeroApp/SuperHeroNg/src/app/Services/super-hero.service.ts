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
return this ._httpClient.get<SuperHero[]>(`${environment.apiUrl}/${this.url}/getAllSuperHeros`);

  }
}
