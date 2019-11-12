import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemons";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: "root"
})
export class PokemonService {

  getPokemons(): Observable<Pokemon[]> {
    this.messageService.add('PokemonService: fetched pokemons');
    return of(POKEMONS);
  }

  getPokemon(id: number): Observable<Pokemon> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`PokemonService: fetched pokemon id=${id}`);
    return of(POKEMONS.find(pokemon => pokemon.id === id));
  }

  constructor(private messageService: MessageService) { }
}
