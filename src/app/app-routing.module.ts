import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    loadChildren:() => import('./heroes/pages/heroes-list/heroes-list.module').then(m => m.HeroesListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
