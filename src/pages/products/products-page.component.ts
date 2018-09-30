import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { ProductCRUDPageComponent } from '../index';

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
  templateUrl: './products-page.component.html'
})
export class ProductsPageComponent {

    public config: Config;
    public columns: any;
    public products: any;
    constructor(public navCtrl: NavController, private http: HttpClient) {
    }

    ionViewDidLoad(): void {
      this.fetchProducts();
    }

    public fetchProducts() {
      this.http.get<Config>('../../assets/data/products.json')
      .subscribe((data) => {
        this.products = data.products;
      })
    }

    public openProduct(product) {
      this.navCtrl.push(ProductCRUDPageComponent, {
          'product': product
      });
    }
}
