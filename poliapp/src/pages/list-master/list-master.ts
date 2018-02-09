import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item'
import { ProvItemsProvider } from '../../providers/prov-items/prov-items';

/**
 * Generated class for the ListMasterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html',
})
export class ListMasterPage {

  currentItems: Item[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public items: ProvItemsProvider) {
    this.currentItems = this.items.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListMasterPage');
  }

  deleteItem(item){
  
  }

  openItem(item: Item){
    this.navCtrl.push('ItemDetailPage',{
      item: item
    });
  }

}
