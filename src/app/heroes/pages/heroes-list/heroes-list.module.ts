import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './heroes-list.component';
import { HeroesService } from '../../services/heroes.service';
import { FilterPipe } from '../../pipe/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FavoritesComponent } from './components/favourites/favorites.component';
import { ViewMoreComponent } from './components/view-more/view-more.component';

import {MatExpansionModule} from '@angular/material/expansion';


const routes: Routes = [
  { path: "", component: HeroesListComponent },
]


@NgModule({
  declarations: [
    HeroesListComponent,
    FilterPipe,
    FavoritesComponent,
    ViewMoreComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    MatExpansionModule,
    RouterModule.forChild(routes)
  ],
  providers: [ HeroesService ],
  entryComponents: [ ViewMoreComponent ]
})
export class HeroesListModule { }
