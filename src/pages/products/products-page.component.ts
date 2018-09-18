import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

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
    public rows: any;

    constructor(public navCtrl: NavController, private _HTTP: HttpClient) {
      // Define the columns for the data table
      // (based off the names of the keys in the JSON file)
      // this.columns = [
      //   { name: 'Name' },
      //   { name: 'SKU' },
      //   { name: 'Created' },
      //   { name: 'Retail Price (USD)', prop: 'retail_price' },
      //   { name: 'Sale Price (USD)', prop: 'sale_price' },
      //   { name: 'Visible' },
      //   { name: 'Active' }
      // ]
      this.columns = [
        { name: 'Name', key: 'name', width: '250', cellClass: 'align-left' },
        { name: 'SKU', key: 'sku', width: '250', cellClass: 'align-left' },
        { name: 'Created', key: 'created', width: '100', cellClass: 'align-left' },
        { name: 'Retail Price (USD)', key: 'retail_price', width: '150', cellClass: 'align-right' },
        { name: 'Sale Price (USD)', key: 'sale_price', width: '150', cellClass: 'align-right' },
        { name: 'Visible', key: 'visible', width: '100', cellClass: 'align-left' },
        { name: 'Active', key: 'active', width: '100', cellClass: 'align-left' }
      ]
    }

    ionViewDidLoad(): void {
      this._HTTP.get<Config>('../../assets/data/products.json')
      .subscribe((data) => {
        this.rows = data.products;
      })
    }

}
