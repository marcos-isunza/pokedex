import { Pokemon } from './pokemon';
import { Injectable } from '@angular/core';
import { HttpModule, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class PokemonService {
  private url_jerry = 'http://pokeapi.salestock.net/api/v2/';
  private all_pkm = 'http://pokeapi.salestock.net/api/v2/pokemon/';

  constructor(private http: Http) {
  }

  getPokemons() {
    return this.http.get(this.all_pkm)
      .map(res => res.json());
  }

  getPokemonInfo(pokemonId) {
    return this.http.get(this.url_jerry + 'pokemon/' + pokemonId)
      .map(res => res.json());
  }

  getPokemonForm(pokemonId) {
    return this.http.get(this.url_jerry + 'pokemon-form/' + pokemonId)
      .map(res => res.json());
  }

  private handleError(err: HttpErrorResponse){
  console.log(err.message);
  return Observable.throw(err.message);
  }
}
