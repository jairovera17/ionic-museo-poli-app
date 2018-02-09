import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JuegoPage } from '../juego/juego';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { PuntuacionPage } from '../puntuacion/puntuacion';
import { QuestProvider } from '../../providers/quest/quest';
import { Pregunta } from '../../misClasses/Pregunta';

/**
 * Generated class for the QuestionarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questionario',
  templateUrl: 'questionario.html',
})
export class QuestionarioPage {
  @ViewChild(Slides) slides: Slides;


  puntuacion: number;
  all_preguntas: Pregunta[]=[];
  salir: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: QuestProvider) {
  ///  this.all_preguntas = this.items.query();
  }

  ionViewDidLoad() {
    this.salir = true;
  }


  ionViewWillEnter(){

    this.puntuacion = 0;
    this.all_preguntas=[];
    this.all_preguntas=this.items.query();
  }


  fin_juego(){
    this.puntuacion=0;
    for (let item of this.all_preguntas){
      if (item.selected === item.respuesta)
        this.puntuacion+=item.puntos;
    }
    this.salir = false;
    this.navCtrl.setRoot(PuntuacionPage,{
      score : this.puntuacion
    });
  }

  cambiar_slide(){
    this.slides.slideNext();

  }

  return_to_pregunta(i:number){
    this.slides.slideTo(i,500);
  }

  ionViewDidLeave(){
    if(this.salir){
      this.navCtrl.setRoot(JuegoPage);
    }
  }
}
