import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonDetailComponent }  from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [{ path: 'pokemons', component: PokemonsComponent },
{ path: '', redirectTo: '/dashboard', pathMatch: 'full'},
{ path: 'dashboard', component: DashboardComponent},
{ path: 'detail/:id', component: PokemonDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
