import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { ProductsPageComponent } from '../index';

/**
 * Generated class for the Tab1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

export interface Config {
  products: string;
}

@Component({
  templateUrl: './product-crud-page.component.html'
})
export class ProductCRUDPageComponent {

    public config: Config;
    public product;
    constructor(public navCtrl: NavController,
      private http: HttpClient,
      public navParams: NavParams) {
      this.product = this.navParams.get('product');
      console.log(this.product);
    }

    ionViewDidLoad(): void {
    }

    public saveProduct() {
      console.log(this.product);
      this.navCtrl.pop(ProductsPageComponent);
    }

    public deleteProduct() {
    }

    public cancel() {
      this.navCtrl.pop(ProductsPageComponent);
    }
}
