import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(HeroesService);
  });

  it('should be created', () => {
    const service: HeroesService = TestBed.get(HeroesService);
    expect(service).toBeTruthy();
  });
  

});
