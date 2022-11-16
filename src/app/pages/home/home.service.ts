import { Injectable } from '@angular/core';
import { PokedexService } from 'src/app/shared/services/pokedex.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends PokedexService {

  public getPokeList(url?: string): Promise<any> {
    if (url) {
      return this.get(url);
    }
    return this.get('pokemon');
  }


}
