import { Injectable } from '@angular/core';
import { PokedexService } from 'src/app/shared/services/pokedex.service';

@Injectable({
  providedIn: 'root'
})
export class OnePokemonService extends PokedexService{

  public getOnePokemon(pokemonName: string): Promise<any> {
    return this.get(`pokemon/${pokemonName}`)
  }

}
