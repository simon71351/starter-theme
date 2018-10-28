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
    private currentPage = 1;
    private itemsPerPage = 20;
    constructor(
      public navCtrl: NavController,
      private http: HttpClient,
      private appService: AppService) {
    }

    ionViewDidLoad(): void {
      this.fetchCategories();
    }

    public fetchCategories() {
      this.appService.setModel('vendors/11/categories');
      this.appService.getByQueryString('group_by_level=true&page=' + this.currentPage + '&items_per_page=' + this.itemsPerPage).subscribe(res => {
        // console.log(res);
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

    public getStatus(status) {
      let result;
      switch(status) {
        case 'A': result = 'Active'; break;
        case 'D': result = 'Deleted'; break;
        case 'H': result = 'Hidden'; break;
        default: result = 'Active';
      }
      return result;
    }

    public getParent(categoryPath) {
      const categoryAry = categoryPath.split('/');
      if (categoryAry.length > 1) {
        categoryAry.pop();
        return categoryAry.pop() + ', ';
      } else {
        return '';
      }
    }

    public doInfinite(infiniteScroll) {
        this.currentPage++;

        this.appService.setModel('vendors/11/categories');
        this.appService.getByQueryString('group_by_level=true&page=' + this.currentPage + '&items_per_page=' + this.itemsPerPage).subscribe(res => {
          // console.log(res);
          this.categories = this.categories.concat(res['categories']);
          infiniteScroll.complete();
          if(res['categories'].length == 0) {
            infiniteScroll.enable(false);
          }
        })
    }
}
