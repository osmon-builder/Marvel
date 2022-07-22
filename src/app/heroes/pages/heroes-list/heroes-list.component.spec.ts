import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { HeroesListComponent } from './heroes-list.component';
import { FilterPipe } from '../../pipe/filter.pipe';

describe('HeroesListComponent', () => {
  let component: HeroesListComponent;
  let fixture: ComponentFixture<HeroesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [ HeroesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesListComponent);
    component = fixture.componentInstance;
  });
 
});
