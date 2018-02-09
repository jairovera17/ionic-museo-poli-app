import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JuegoPage } from '../juego/juego';

/**
 * Generated class for the PuntuacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-puntuacion',
  templateUrl: 'puntuacion.html',
})
export class PuntuacionPage {

  puntuacion: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.puntuacion = navParams.get("score");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PuntuacionPage');
  }

  ionViewDidLeave(){
    this.navCtrl.setRoot(JuegoPage);
  }

  salir(){
    this.navCtrl.setRoot(JuegoPage);
  }

}
