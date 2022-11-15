import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  providers: [{
    provide: 'POKEDEX_URL_API',
    useValue: environment.pokedexApiUrl
  }],
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
