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
  technologies: string;
}

@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

    public config: Config;
    public columns: any;
    public rows: any;

    constructor(public navCtrl: NavController, private _HTTP: HttpClient) {
      // Define the columns for the data table
      // (based off the names of the keys in the JSON file)
      this.columns = [
        { prop: 'name' },
        { name: 'Summary' },
        { name: 'Company' }
      ]
    }

    ionViewDidLoad(): void {
      this._HTTP.get<Config>('../../assets/data/technologies.json')
      .subscribe((data) => {
        this.rows = data.technologies;
      })
    }

}
