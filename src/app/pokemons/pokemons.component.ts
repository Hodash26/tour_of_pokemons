import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[];

  selectedPokemon: Pokemon;

  onSelect(pokemon: Pokemon): void {
  this.selectedPokemon = pokemon;
}

  constructor(private pokemonService: PokemonService) { }

  getPokemons(): void {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons);
  }

  ngOnInit() {
    this.getPokemons();
  }

}
