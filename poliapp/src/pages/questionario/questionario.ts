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


  puntuacion: number;               //Puntuacion total 
  all_preguntas: Pregunta[]=[];     //Preguntas de la ronda
  salir: boolean = true;            //Flag para saber si el usuario termina el juego o abandona

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: QuestProvider) {
  }


  ionViewDidLoad() {
    this.salir = true;
  }


  //Se obtiene las preguntas de proveedor QuestProvider
  ionViewWillEnter(){

    this.puntuacion = 0;
    this.all_preguntas=[];
    this.all_preguntas=this.items.query();
  }


  //Se calcula la puntuacion total y se navega a la pagina que muestra los resultados
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

  //Al seleccionar una respuesta, automaticamente se sigue a la siguiente pregunta(slide)
  cambiar_slide(){
    this.slides.slideNext();
  }
//Regresa a un slide especifico
  return_to_pregunta(i:number){
    this.slides.slideTo(i,500);
  }

  //Si el usuario abandona el juego, se regresa al menu de actividades-juegos  
  ionViewDidLeave(){
    if(this.salir){
      this.navCtrl.setRoot(JuegoPage);
    }
  }
}
