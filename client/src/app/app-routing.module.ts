import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MarketListComponent } from './markets/market-list/market-list.component';
import { MarketDetailComponent } from './markets/market-detail/market-detail.component';
import { ListsComponent } from './lists/lists.component';
import { PredictionsComponent } from './predictions/predictions.component';
import { authGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
  {path: 'markets', component: MarketListComponent},
  {path: 'markets/:id', component: MarketDetailComponent},
  {path: 'lists', component: ListsComponent},
  {path: 'predictions', component: PredictionsComponent},

    ]
  }, 
  {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
