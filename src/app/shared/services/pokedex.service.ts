import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(
    protected http: HttpClient,
    @Inject('POKEDEX_URL_API') private pokedexUrlApi: string
  ) { }

  public get(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.getUrl(url)).subscribe({
        next: (v) => resolve(v),
        error: (v) => reject(v)
      })
    });
  }

  

  private getUrl(url: string): string {
    console.log(`Making a requisition to API: ${this.pokedexUrlApi}${url}`)
    return `${this.pokedexUrlApi}${url}`
  }
}

// Lista de Pokemons
//https://pokeapi.co/api/v2/pokemon/


// Pokemon por nome
//https://pokeapi.co/api/v2/pokemon/ditto