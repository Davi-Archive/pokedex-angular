import { Injectable } from '@angular/core';
import { PokedexService } from 'src/app/shared/services/pokedex.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends PokedexService {

  public getPokeList():Promise<any>{
    return this.get('pokemon');
  }

}
