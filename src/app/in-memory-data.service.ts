import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const pokemons = [
      { id: 1, name: "Bulbizarre", type: "Plante / Poison", numb: "N°001", img: "https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/250px-Bulbizarre-RFVF.png"},
      { id: 2, name: "Herbizarre", type: "Plante / Poison", numb: "N°002", img: "https://www.pokepedia.fr/images/thumb/4/44/Herbizarre-RFVF.png/250px-Herbizarre-RFVF.png"},
      { id: 3, name: "Florizarre", type: "Plante / Poison", numb: "N°003", img: "https://www.pokepedia.fr/images/thumb/4/42/Florizarre-RFVF.png/250px-Florizarre-RFVF.png" },
      { id: 4, name: "Salamèche", type: "Feu", numb: "N°004", img:"https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/250px-Salam%C3%A8che-RFVF.png" },
      { id: 5, name: "Reptincel", type: "Feu", numb: "N°005", img:"https://www.pokepedia.fr/images/thumb/6/64/Reptincel-RFVF.png/250px-Reptincel-RFVF.png" },
      { id: 6, name: "Dracaufeu", type: "Feu / Vol", numb: "N°006", img:"https://www.pokepedia.fr/images/thumb/1/17/Dracaufeu-RFVF.png/250px-Dracaufeu-RFVF.png" },
      { id: 7, name: "Carapuce", type: "Eau", numb: "N°007", img:"https://www.pokepedia.fr/images/thumb/c/cc/Carapuce-RFVF.png/250px-Carapuce-RFVF.png" },
      { id: 8, name: "Carabaffe", type: "Eau", numb: "N°008", img:"https://www.pokepedia.fr/images/thumb/2/2a/Carabaffe-RFVF.png/250px-Carabaffe-RFVF.png" },
      { id: 9, name: "Tortank", type: "Eau", numb: "N°009", img:"https://www.pokepedia.fr/images/thumb/2/24/Tortank-RFVF.png/250px-Tortank-RFVF.png" },
      { id: 10, name: "Chenipan", type: "Insecte", numb: "N°010", img:"https://www.pokepedia.fr/images/thumb/c/c7/Chenipan-RFVF.png/250px-Chenipan-RFVF.png" },
      { id: 11, name: "Chrysacier", type: "Insecte", numb: "N°011", img:"https://www.pokepedia.fr/images/thumb/6/6c/Chrysacier-RFVF.png/250px-Chrysacier-RFVF.png" },
      { id: 12, name: "Papylusion", type: "Insete / Vol", numb: "N°012", img:"https://www.pokepedia.fr/images/thumb/8/83/Papilusion-RFVF.png/250px-Papilusion-RFVF.png" },
      { id: 13, name: "Aspicot", type: "Insete / Poison", numb: "N°013", img:"https://www.pokepedia.fr/images/thumb/9/9b/Aspicot-RFVF.png/250px-Aspicot-RFVF.png" },
      { id: 14, name: "Coconfort", type: "Insete / Poison", numb: "N°014", img:"https://www.pokepedia.fr/images/thumb/b/b6/Coconfort-RFVF.png/250px-Coconfort-RFVF.png" },
      { id: 15, name: "Dardagnan", type: "Insete / Poison", numb: "N°015", img:"https://www.pokepedia.fr/images/thumb/e/ee/Dardargnan-RFVF.png/250px-Dardargnan-RFVF.png" },
      { id: 16, name: "Roucool", type: "Normal / Vol", numb: "N°016", img:"https://www.pokepedia.fr/images/thumb/9/94/Roucool-RFVF.png/250px-Roucool-RFVF.png" },
      { id: 17, name: "Roucoups", type: "Normal / Vol", numb: "N°017", img:"https://www.pokepedia.fr/images/thumb/d/dc/Roucoups-RFVF.png/250px-Roucoups-RFVF.png" },
      { id: 18, name: "Roucarnage", type: "Normal / Vol", numb: "N°018", img:"https://www.pokepedia.fr/images/thumb/d/d8/Roucarnage-RFVF.png/250px-Roucarnage-RFVF.png" },
      { id: 19, name: "Rattata", type: "Normal ", numb: "N°019", img:"https://www.pokepedia.fr/images/thumb/9/9e/Rattata-RFVF.png/250px-Rattata-RFVF.png" },
      { id: 20, name: "Rattatac", type: "Normal ", numb: "N°020", img:"https://www.pokepedia.fr/images/thumb/9/98/Rattatac-RFVF.png/250px-Rattatac-RFVF.png" },
      { id: 21, name: "Piafabec", type: "Normal / Vol", numb: "N°21", img:"https://www.pokepedia.fr/images/thumb/7/7d/Piafabec-RFVF.png/250px-Piafabec-RFVF.png" },
    ];
    return {pokemons};
  }

  genId(pokemons: Pokemon[]): number {
    return pokemons.length > 0 ? Math.max(...pokemons.map(pokemon => pokemon.id)) + 1 : 11;
  }

  constructor() { }
}
