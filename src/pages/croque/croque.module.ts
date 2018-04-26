import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CroquePage } from './croque';

@NgModule({
  declarations: [
    CroquePage,
  ],
  imports: [
    IonicPageModule.forChild(CroquePage),
  ],
})
export class CroquePageModule {}
