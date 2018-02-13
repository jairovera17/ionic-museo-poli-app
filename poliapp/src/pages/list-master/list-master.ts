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
  
  //Esta pagina despliega todo el contenido del provider ProvItems en una lista
  constructor(public navCtrl: NavController, public navParams: NavParams,public items: ProvItemsProvider) {
    this.currentItems = this.items.query();
  }

  //Abre una pagina que muestra la informacion del item seleccionado enviandole a dicha pagina los datos necesarios
  openItem(item: Item){
    this.navCtrl.push('ItemDetailPage',{
      item: item
    });
  }

}
