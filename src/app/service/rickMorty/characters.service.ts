import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private _http: HttpClient,) { }

  
  AppiUrl =  "https://rickandmortyapi.com/api/character";




  getAllCharacters(){
    return this._http.get(`${this.AppiUrl}`)
  }

}
