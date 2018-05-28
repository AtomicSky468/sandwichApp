import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { Location } from '@angular/common';
import { PanierPage } from '../panier/panier';

/**
 * Generated class for the CroquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-croque',
  templateUrl: 'croque.html',
})
export class CroquePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
  
  
  confirmcroque() {
	
  let alert = this.alertCtrl.create({
	  
    title: 'Confirmation de commande',
	
    message: 'Voulez-vous vraiment commander un croque-monsieur?',

    buttons: [
      {
        text: 'Non',
        role: 'cancel',
        handler: () => {
          console.log('No clicked');
        }
      },
      {
		  text: 'Oui',			
        handler: () => {
        console.log('Yes clicked'),	
		this.navCtrl.push(PanierPage);
  }

     
        }
      
    ]
  });
  alert.present();
}

confirmpanini() {
	
  let alert = this.alertCtrl.create({
	  
    title: 'Confirmation de commande',
	
    message: 'Voulez-vous vraiment commander un panini?',

    buttons: [
      {
        text: 'Non',
        role: 'cancel',
        handler: () => {
          console.log('No clicked');
        }
      },
      {
		  text: 'Oui',			
        handler: () => {
        console.log('Yes clicked'),	
		this.navCtrl.push(PanierPage);
  }

     
        }
      
    ]
  });
  alert.present();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CroquePage');
  }

}
