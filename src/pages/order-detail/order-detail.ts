import { Component, ViewChild } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { SuperTabs } from 'ionic2-super-tabs';
import { SuperTabsController } from 'ionic2-super-tabs';

@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  public orderId = '';
  public productsInfo = [];
  public companyId;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
    private superTabsCtrl: SuperTabsController, private http: Http) {
      this.superTabsCtrl.showToolbar(false);
      let orderID = this.navParams.get('orderID');
      console.log('orderID: ' + orderID);
      this.orderId = orderID;

      this.loadProductsInfo();
  }

  public loadProductsInfo() {

    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    this.companyId = '5'; // '12' 

    this.http.get('http://www.yesss.com.mm/api.php?_d=orders/'+ this.orderId, { headers }).subscribe(result1 => {
          const tempOrderObj = {};
          console.log('Order Details in product details');
          console.log(JSON.parse(result1['_body']));

          let parsedOrderObj = JSON.parse(result1['_body']);
          let productsInfoInOrder = JSON.parse(result1['_body'])['product_groups'];

          productsInfoInOrder.forEach(productsInfoInOrderObj => {
            for (let key in productsInfoInOrderObj.products) {
              const productInfo = {};
              // productsInfoInOrderObj.products[key]['main_pair']['detailed']['http_image_path'];
              
              // if (productsInfoInOrderObj.products[key]['main_pair']['detailed']['http_image_path'].indexOf('http://www.yesss.com.mm') >= 0) {

                // this.ordersInfo.push(tempOrderObj);
                productInfo['productCode'] = productsInfoInOrderObj.products[key].product_code;
                productInfo['productPrice'] = parseFloat(productsInfoInOrderObj.products[key].price);
                productInfo['productName'] = productsInfoInOrderObj.products[key].product;
                productInfo['amount'] = parseInt(productsInfoInOrderObj.products[key].amount);
                // productInfo['subtotal'] = productsInfoInOrderObj.products[key].subtotal;
                productInfo['imagePath'] = productsInfoInOrderObj.products[key]['main_pair']['detailed']['http_image_path'];

                this.productsInfo.push(productInfo);
                console.log(productsInfoInOrderObj.products[key]['main_pair']['detailed']['http_image_path']);
              // }
            }
            
          });

        });
  }

  public createAuthorizationHeader(headers: Headers) {
    headers.append("authorization", "Basic aGFud2luc3RlckBnbWFpbC5jb206M2VnWTRoUzcwODlPMVY4Nm5hZDM3MjRLNG0xQjA0TDU=");
    headers.append("cache-control", "no-cache");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  ionViewWillLeave() {
    this.superTabsCtrl.showToolbar(true);
  }

  // try to fetch data from that ID
  
}
