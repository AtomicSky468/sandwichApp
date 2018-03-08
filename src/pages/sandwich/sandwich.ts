import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaillePage} from '../taille/taille';

/**
 * Generated class for the SandwichPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sandwich',
  templateUrl: 'sandwich.html',
})
export class SandwichPage {

	taille = TaillePage
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SandwichPage');
  }

}
