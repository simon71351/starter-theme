import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { CategoryCRUDPageComponent } from '../index';
import { AppService } from '../../services/app.service';
/**
 * Generated class for the Tab1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  templateUrl: './categories-page.component.html'
})
export class CategoriesPageComponent {

    // public config: Config;
    public columns: any;
    public categories: any;
    constructor(
      public navCtrl: NavController,
      private http: HttpClient,
      private appService: AppService) {
    }

    ionViewDidLoad(): void {
      this.fetchCategories();
    }

    public fetchCategories() {
      this.appService.setModel('categories');
      this.appService.getAll().subscribe(res => {
        console.log(res);
        this.categories = res['categories'];
      })
    }

    public openCategory(category) {
      this.navCtrl.push(CategoryCRUDPageComponent, {
          'category': category
      });
    }

    public addCategory() {
      this.navCtrl.push(CategoryCRUDPageComponent, {});
    }
}
