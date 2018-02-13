import { Injectable } from '@angular/core';
import { Pregunta } from '../../misClasses/Pregunta';

/*
  Generated class for the QuestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestProvider {


  //Proveedor de preguntas
  constructor() {
  }

  //regresa las preguntas del arreglo - Ver clase Pregunta deben ser 4 preguntas
  query(params?:any){
    let items:Pregunta[] = [
      new Pregunta('Cuantos años tienes?','Nose bro disculpa','Tigre dientes de sable','Elefantes sobre agua','alais chupa sangre','A',100),
      new Pregunta('Cuantos años tienes?','12','13','14','15','B',75),
      new Pregunta('Cuantos años tienes?','12','13','14','15','C',50),
      new Pregunta('Cuantos años tienes?','12','13','14','15','D',25)
    ];
    return items;
  }


}
