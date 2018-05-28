//importer les pages et modules ici
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SandwichPage } from '../pages/sandwich/sandwich';
import { TaillePage } from '../pages/taille/taille';
import { PanierPage } from '../pages/panier/panier';
import { CroquePage } from '../pages/croque/croque';



@NgModule({
  declarations: [
	//rajouter les pages ici
    MyApp,
    HomePage,
	SandwichPage,
	TaillePage,
	PanierPage,
	CroquePage
	
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
	//rajouter les pages ici
    MyApp,
    HomePage,
	SandwichPage,
	TaillePage,
	PanierPage,
	CroquePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
})
export class AppModule {}
