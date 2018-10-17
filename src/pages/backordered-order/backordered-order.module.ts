import { BackorderedOrderPage } from './backordered-order';
import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    BackorderedOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(BackorderedOrderPage),
  ],
})
export class BackorderedOrderPageModule {}
