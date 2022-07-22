import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  @Input() favHeroes : any [] = [];
  constructor() { }

  ngOnInit(): void {
  }

  deleteFavComic(removeItem = []) {
    const index = this.favHeroes.indexOf(removeItem);
    this.favHeroes.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(this.favHeroes));
  }

}
