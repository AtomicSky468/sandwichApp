import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PanierPage } from '../panier/panier';

/**
 * Generated class for the TaillePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-taille',
  templateUrl: 'taille.html',
})
export class TaillePage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController ) {
  }

   showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Commander?',
      message: 'Voulez-vous vraiment mettre ce sandwich dans le panier?',
      buttons: [
        {
          text: 'Non',
          handler: () => {
            console.log('Disagree clicked');
          }
        }
		,
        {
          text: 'Oui',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
	  
    });
    confirm.present();
  }
}

  

	
