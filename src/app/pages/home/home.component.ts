import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pokemonListFromApi?: Array<any>;
  public previousButtonUrl?: string;
  public nextButtonUrl?: string;
  public slicedUrl?: string;


  constructor(
    private pokedexService: HomeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPokemonList()
  }

  public async getPokemonList(treatedUrl?:string): Promise<void> {
    try {
      const data = await this.pokedexService.getPokeList(treatedUrl);
      this.pokemonListFromApi = data.results;
      console.log(data)

      this.previousButtonUrl = data.previous;
      this.nextButtonUrl = data.next;
    } catch (e: any) {
      alert(e?.error?.error || "Erro ao carregar a lista de pokemons");
    }

  }

  public linkToSeeSpecificPokemon(pokemonName: string): void {
    this.router.navigateByUrl(`pokedex/${pokemonName}`);
  }

  public buttonClickNextPage(): void {
    this.slicedUrl = this.sliceTheUrlForApiCall(this.nextButtonUrl)
    this.getPokemonList(this.slicedUrl);
  }

  public buttonClickPreviousPage(): void {
    this.slicedUrl = this.sliceTheUrlForApiCall(this.previousButtonUrl)
    this.getPokemonList(this.slicedUrl);
  }


  public sliceTheUrlForApiCall(fullUrl: string | any): string {
    return fullUrl.slice(26);
  }
}
