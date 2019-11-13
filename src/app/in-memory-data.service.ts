import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const pokemons = [
      { id: 2, name: "Bulbizarre", type: "Plante / Poison", numb: "N°001" },
      { id: 2, name: "Herbizarre", type: "Plante / Poison", numb: "N°002" },
      { id: 3, name: "Florizarre", type: "Plante / Poison", numb: "N°003" },
      { id: 4, name: "Salamèche", type: "Feu", numb: "N°004" },
      { id: 5, name: "Reptincel", type: "Feu", numb: "N°005" },
      { id: 6, name: "Dracaufeu", type: "Feu / Vol", numb: "N°006" },
      { id: 7, name: "Carapuce", type: "Eau", numb: "N°007" },
      { id: 8, name: "Carabaffe", type: "Eau", numb: "N°008" },
      { id: 9, name: "Tortank", type: "Eau", numb: "N°009" },
      { id: 10, name: "Chenipan", type: "Insecte", numb: "N°010" },
      { id: 11, name: "Chrysacier", type: "Insecte", numb: "N°011" },
      { id: 12, name: "Papylusion", type: "Insete / Vol", numb: "N°012" },
      { id: 13, name: "Aspicot", type: "Insete / Poison", numb: "N°013" },
      { id: 14, name: "Coconfort", type: "Insete / Poison", numb: "N°014" },
      { id: 15, name: "Dardagnan", type: "Insete / Poison", numb: "N°015" },
      { id: 16, name: "Roucool", type: "Normal / Vol", numb: "N°016" },
      { id: 17, name: "Roucoups", type: "Normal / Vol", numb: "N°017" },
      { id: 18, name: "Roucarnage", type: "Normal / Vol", numb: "N°018" },
      { id: 19, name: "Rattata", type: "Normal ", numb: "N°019" },
      { id: 20, name: "Rattatac", type: "Normal ", numb: "N°020" },
      { id: 21, name: "Piafabec", type: "Normal / Vol", numb: "N°21" },
    ];
    return {pokemons};
  }

  genId(pokemons: Pokemon[]): number {
    return pokemons.length > 0 ? Math.max(...pokemons.map(pokemon => pokemon.id)) + 1 : 11;
  }

  constructor() { }
}