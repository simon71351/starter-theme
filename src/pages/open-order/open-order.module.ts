import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { OpenOrderPage } from './open-order';

@NgModule({
  declarations: [
    OpenOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenOrderPage),
  ],
})
export class OpenOrderPageModule {}
