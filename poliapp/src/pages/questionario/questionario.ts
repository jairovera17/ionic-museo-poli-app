import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

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

  puntuacion: number;
  all_preguntas: Pregunta[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionarioPage');
  }

  ionViewWillEnter(){

    this.puntuacion = 0;
    this.all_preguntas=[];
    this.all_preguntas.push(new Pregunta('Cuantos años tienes?','Nose bro disculpa','Tigre dientes de sable','Elefantes sobre agua','alais chupa sangre','A',100));
    this.all_preguntas.push(new Pregunta('Cuantos años tienes?','12','13','14','15','B',75));
    this.all_preguntas.push(new Pregunta('Cuantos años tienes?','12','13','14','15','C',50));
    this.all_preguntas.push(new Pregunta('Cuantos años tienes?','12','13','14','15','D',25));
  }


  get_score(){
    this.puntuacion=0;
    for (let item of this.all_preguntas){
      if (item.selected === item.respuesta)
        this.puntuacion+=item.puntos;
    }
    this.navCtrl.setRoot(HomePage);
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
