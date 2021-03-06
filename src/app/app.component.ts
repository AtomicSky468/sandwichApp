//importer les pages ici
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { SandwichPage } from '../pages/sandwich/sandwich';
import { TaillePage } from '../pages/taille/taille';
import { PanierPage } from '../pages/panier/panier';
import { CroquePage } from '../pages/croque/croque';


declare var x;
@Component({
  templateUrl: 'app.html'
})



export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

