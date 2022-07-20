import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(
    private http: HttpClient
  ) { }

  getHeroes(entity: string): Observable<any> {
    return this.http.get(`${environment.BaseURL}/${entity}?ts=1&apikey=460de6e72f3cb814412474285975f5eb&hash=25b2258c3ca2b7da9896db0b7b1e3d94`);
  }

  getComicData (comicUrl: string): Observable<any> {
    return this.http.get(`${comicUrl}?ts=1&apikey=460de6e72f3cb814412474285975f5eb&hash=25b2258c3ca2b7da9896db0b7b1e3d94`)
  }

}
