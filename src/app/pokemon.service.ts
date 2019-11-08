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

  constructor(private messageService: MessageService) { }
}
