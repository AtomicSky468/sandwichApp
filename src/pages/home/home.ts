import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SandwichPage } from '../sandwich/sandwich';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
	  

	  

  }
  
  	  YourFancyButton(){
this.navController.setRoot(SandwichPage);
}

}
