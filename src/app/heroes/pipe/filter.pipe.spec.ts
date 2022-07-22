import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {


   TestBed.configureTestingModule({
    declarations: [ FilterPipe ],
    providers: []
  })
  .compileComponents();


  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return a list of heroes', () => {
    const pipe = new FilterPipe();
    expect(pipe.transform([{name: 'test'}], 'test')).toEqual([{name: 'test'}]);
  })

});