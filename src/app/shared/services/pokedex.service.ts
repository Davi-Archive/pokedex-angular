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
    console.log(url)
    return new Promise((resolve, reject) => {
      this.http.get(this.getUrl(url)).subscribe({
        next: (v) => resolve(v),
        error: (v) => reject(v)
      })
    });
  }


  private getUrl(url: string): string {
    return `${this.pokedexUrlApi}${url}`
  }
}
