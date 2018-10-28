import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { OrderDetailPage } from './order-detail';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    OrderDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderDetailPage),
    SuperTabsModule
  ],
})
export class OrderDetailPageModule {}
