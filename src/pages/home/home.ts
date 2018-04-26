import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SandwichPage } from '../sandwich/sandwich';
import { PanierPage } from '../panier/panier';
import { CroquePage } from '../croque/croque';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  //template: `<ion-nav [root]="HomePage"></ion-nav>`
})

export class HomePage {

	sandwich = SandwichPage
	croque = CroquePage
  constructor(public navCtrl: NavController) {
  }
}





