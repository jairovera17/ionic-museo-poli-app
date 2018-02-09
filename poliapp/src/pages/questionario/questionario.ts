import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JuegoPage } from '../juego/juego';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { PuntuacionPage } from '../puntuacion/puntuacion';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.salir = true;
  }


  ionViewWillEnter(){

    this.puntuacion = 0;
    this.all_preguntas=[];
    this.all_preguntas.push(new Pregunta('Cuantos años tienes?','Nose bro disculpa','Tigre dientes de sable','Elefantes sobre agua','alais chupa sangre','A',100));
    this.all_preguntas.push(new Pregunta('Cuantos años tienes?','12','13','14','15','B',75));
    this.all_preguntas.push(new Pregunta('Cuantos años tienes?','12','13','14','15','C',50));
    this.all_preguntas.push(new Pregunta('Cuantos años tienes?','12','13','14','15','D',25));
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

class Pregunta{
  constructor(public pregunta:string,
  public optionA:string,
  public optionB:string,
  public optionC:string,
  public optionD:string,
  public respuesta:string,
  public puntos:number,
  public selected?:string){
  }
}
