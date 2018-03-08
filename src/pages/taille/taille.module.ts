import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaillePage } from './taille';

@NgModule({
  declarations: [
    TaillePage,
  ],
  imports: [
    IonicPageModule.forChild(TaillePage),
  ],
})
export class TaillePageModule {}
