import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SandwichPage } from '../sandwich/sandwich';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  //template: `<ion-nav [root]="HomePage"></ion-nav>`
})

export class HomePage {

  constructor(public navCtrl: NavController) {
	   

  }
}

export class MyApp {
  root = HomePage;

  constructor(){
  }

}


