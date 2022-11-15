import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pokemonListFromApi?:any;

  constructor(
    private pokedexService: HomeService
  ) { }

  ngOnInit(): void {
    this.getPokemonList()
  }

  public async getPokemonList(): Promise<void> {
    console.log('getting list')
    this.pokemonListFromApi = await this.pokedexService.getPokeList();
    console.log(this.pokemonListFromApi)
  }

}
