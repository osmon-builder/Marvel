import { AfterViewInit, Component,  ComponentRef, OnInit, ViewChild, ViewContainerRef  } from '@angular/core';
import { forkJoin, from } from 'rxjs';
import { mergeMap, filter } from 'rxjs/operators';
import { HeroesService } from '../../services/heroes.service';
import { ViewMoreComponent } from './components/view-more/view-more.component';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit, AfterViewInit {

  // @ViewChild("viewMore", { read: ViewContainerRef }) viewMoreContainer: ViewContainerRef
  
  public hero = [] ;
  public page: number = 1;
  public comicsData = []
  public favHeroes  : any = [] = [];
  // public viewMore: ComponentRef<ViewMoreComponent> = null;
  public isLoading = true; 
  public loader=  '../../../../../../assets/img/icons/giphy.gif';
  public simpleViewMore!: ComponentRef<ViewMoreComponent> ;
  filter = '';

  @ViewChild("viewMore", { read: ViewContainerRef })
viewMoreContainer!: ViewContainerRef;



  constructor(
    private herosServ: HeroesService,  
  ) { }

  ngOnInit(): void {
    this.page
    this.favHeroes = JSON.parse(localStorage.getItem('comics')!);
    if (!this.favHeroes){
      this.favHeroes = []
    }

    this.herosServ.getHeroes('characters').subscribe(
      res => {
        let { data } = res;
        this.hero = data.results.map(({ ...hero }) => ({
          items: hero['comics']?.items,
          ...hero
        }));
        this.hero.forEach((element: { items: any; }) => {
          this.comicsData = this.comicsData.concat(element.items)
        });
        console.log(this.hero)
        console.log(this.comicsData)
      });
      this.ramdonComics();
  }

  ngAfterViewInit():void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);

    this.simpleViewMore = this.viewMoreContainer.createComponent(ViewMoreComponent);
    this.simpleViewMore.instance.closeDialog.pipe(
      filter((comic) => !!comic),
    ).subscribe(comic => {
      this.setComics(comic);
    })
}

  setComics(comic: { id: string; }) {
    const index = this.favHeroes.findIndex((x: { id: string; }) => x.id === comic.id);
    if (index < 0) {
      this.favHeroes.push(comic)
      localStorage.setItem('comics', JSON.stringify(this.favHeroes))
    }
  }



ramdonComics() {
  let randomComics =
    [...this.comicsData].sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, 3);
  const obs = from(randomComics)
  obs.pipe(
    mergeMap((comic : any ) => forkJoin({
      comic: (this.herosServ.getComicData(comic.resourceURI))
    })
    )
  ).subscribe(res =>
    this.setComics(res.comic.data.results[0])
  )
}

public async openViewMore(comic: { resourceURI: string; }) {
  this.herosServ.getComicData(comic.resourceURI).subscribe(async res => {
    this.simpleViewMore.instance.toggleModal();
    this.simpleViewMore.instance.comic = await res.data.results[0];
  })
}



}
   


