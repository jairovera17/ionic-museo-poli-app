import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProvItemsProvider } from '../../providers/prov-items/prov-items';
/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public items:ProvItemsProvider) {
    this.item = navParams.get('item') || items.defaultItem;
  }
}
