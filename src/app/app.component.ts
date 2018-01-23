import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [PokemonService]
})
export class AppComponent implements OnInit  {
  pageTitle = 'Pokedex';
  private pokemon = { nombre: null, imagen: null };
  private allPokemonList = {nombre: null};
  pokemonId: number;

  constructor(private pokemonService: PokemonService) {
    this.pokemonId;
  }

getPokemonInfo(){
  console.log(this.pokemonId);
   const pokemonInfo = this.pokemonService.getPokemonInfo(this.pokemonId);
    const pokemonForm = this.pokemonService.getPokemonForm(this.pokemonId);

     Observable.forkJoin([pokemonInfo, pokemonForm])
      .subscribe(results => {
        this.pokemon.nombre = results[0].name;
        this.pokemon.imagen = results[1].sprites.front_default;
      });
}

  ngOnInit(): void {
    const allPokemon = this.pokemonService.getPokemons();


  }
}
