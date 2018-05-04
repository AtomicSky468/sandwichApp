import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { Location } from '@angular/common';
import { TaillePage } from '../taille/taille';
import { PanierPage } from '../panier/panier';
 
 
 
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
  panier = PanierPage
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

presentConfirm() {
  let alert = this.alertCtrl.create({
    title: 'Confirmation de commande',
    message: 'Voulez-vous commander ce sandwich?',
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
    console.log('ionViewDidLoad SandwichPage');
  }
  
  
 
}
 