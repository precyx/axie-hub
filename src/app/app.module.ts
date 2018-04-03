import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }  from './app-routing.module';

import {HeadbarComponent} from './headbar/headbar.component';
import {FooterComponent} from './footer/footer.component';

import {ContractService} from './services/contract.service';
import {VersionService} from './services/version.service';

import { AppComponent } from './app.component';
import { AxieAuctionObserverComponent } from './axie-auction-observer/axie-auction-observer.component';


@NgModule({
  declarations: [
    AppComponent,
    AxieAuctionObserverComponent,
    HeadbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ContractService,
    VersionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
