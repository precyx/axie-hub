import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';
import { AxieAuctionObserverComponent } from './axie-auction-observer/axie-auction-observer.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full' },
  {path: '', component: AxieAuctionObserverComponent}
];

@NgModule({
  imports : [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
