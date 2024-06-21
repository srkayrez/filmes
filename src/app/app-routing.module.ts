import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemasComponent } from './cinemas/cinemas.component';
import { AppComponent } from './app.component';
import { FilmesComponent } from './filmes/filmes.component';
import { SecoesComponent } from './secoes/secoes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Cinemas', component: CinemasComponent},
  {path: 'Filmes', component: FilmesComponent},
  {path: 'Secoes', component: SecoesComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

