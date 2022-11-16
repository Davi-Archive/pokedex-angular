import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnePokemonService } from './one-pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  public pokemonFrontImage?: string
  public pokemonTypes?: any;
  public pokemonStats?: any;
  public pokemonFullData?: any;

  constructor(
    private actualRouteService: ActivatedRoute,
    private onePokemonService: OnePokemonService
  ) {

  }

  ngOnInit(): void {
    this.actualRouteService.params.subscribe(params => {
      console.log(params['pokemonName'])
      this.getSpecificPokemonImage(params['pokemonName']);
    })
  }

  public async getSpecificPokemonImage(pokemonName: string): Promise<void> {
    const data = await this.onePokemonService.getOnePokemon(pokemonName)
    this.pokemonFrontImage = data?.sprites?.front_default;
    this.pokemonTypes = data?.types;
    this.pokemonStats = data?.stats;
    this.pokemonFullData = data;
    console.log(data)
  }
}
