import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SandwichPage } from './sandwich';
import { TaillePage } from '../taille/taille';
import { PanierPage } from '../panier/panier';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    SandwichPage,
  ],
  imports: [
    IonicPageModule.forChild(SandwichPage),
  ],
})
export class SandwichPageModule {}
