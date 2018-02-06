import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  puntuacion: number;
  all_preguntas: Pregunta[]=[];



  constructor(public navCtrl: NavController) {
    
  }

  ionViewWillEnter(){

    this.puntuacion = 0;

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