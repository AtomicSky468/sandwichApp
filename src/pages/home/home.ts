import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SandwichPage } from '../sandwich/sandwich';
import { PanierPage } from '../panier/panier';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  //template: `<ion-nav [root]="HomePage"></ion-nav>`
})

export class HomePage {

	sandwich = SandwichPage
	panier = PanierPage
  constructor(public navCtrl: NavController) {
  }
}





