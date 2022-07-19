import { Component, OnInit  } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  
  public hero = [] ;
  public page: number = 1;
  public comicsData = []
  public favHeroes  = [];
  filter = '';



  constructor(
    private herosServ: HeroesService,
  ) { }

  ngOnInit(): void {
    this.page
    this.favHeroes = JSON.parse(localStorage.getItem('data')!);
    if (!this.favHeroes){
      this.favHeroes = []
    }

    this.herosServ.getHeroes('characters').subscribe(
      res => {
        let { data } = res;
        this.hero = data.results;
        console.log(this.hero)
      //   this.hero = data.results.map(({ ...hero }) => ({
      //     items: hero.comics?.items,
      //     ...hero
      //   }));
      //   this.hero.forEach(element => {
      //     this.comicsData = this.comicsData.concat(element.items)
      //   });
      // });
  });


}
}
//   setComics(comic) {
//     const index = this.favHeroes.findIndex(a => a.id === comic.id);
//     if (index < 0) {
//       this.favHeroes.push(comic)
//       localStorage.setItem('comics', JSON.stringify(this.favHeroes))
//     }
//   }
   
//   setFavorites () {
//     let randomComics =
//     [...this.comicsData].sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, 3);
//   const obs = from(randomComics)
//   obs.pipe(
//     mergeMap(comic => forkJoin({
//       comic: (this.herosServ.getComicData(comic.resourceURI))
//     })
//     )
//   ).subscribe(res =>
//     this.setComics(res.comic.data.results[0])
//   )
// }

