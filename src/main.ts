import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

declare let window: any;
declare let web3: any;
declare let Web3: any;
declare var require: any

window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  /*if (typeof window.web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    console.log('No web3? You should consider trying MetaMask!')
  }
  web3.eth.defaultAccount = web3.eth.accounts[0];*/

  //window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  //window.web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
  window.web3 = new Web3(window.web3.currentProvider || new Web3.providers.HttpProvider('http://localhost:8545') || new Web3.providers.HttpProvider("https://mainnet.infura.io/kMogkVTqBa2OEdnAip8D"));

  // || Web3.givenProvider
  //console.log(Web3);

  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
});
