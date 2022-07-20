import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  @Input() favHeroes : any [] = [];
  constructor() { }

  ngOnInit(): void {
  }

  deleteFavComic(removeItem = []) {
    const index = this.favHeroes.indexOf(removeItem);
    this.favHeroes.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(this.favHeroes))
    // localStorage.removeItem('data')
    // this.favHeroes = JSON.parse(localStorage.getItem('data')!);
  }

}
