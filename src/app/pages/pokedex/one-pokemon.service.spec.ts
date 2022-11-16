import { TestBed } from '@angular/core/testing';

import { OnePokemonService } from './one-pokemon.service';

describe('OnePokemonService', () => {
  let service: OnePokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnePokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
