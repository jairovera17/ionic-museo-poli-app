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
      new Pregunta('¿Cuál de ellos frecuenta ríos?','Tapir','Piraña','Hoatzín','Medusa','B',100),
      new Pregunta('¿Cuál de ellos digestión es por Fermentación?','Hoatzín','Tortugas','Sapos','Piraña','A',100),
      new Pregunta('¿Cuál de ellos tiene veneno hemotóxico?','Anaconda','Pulpo','Colibrí','Equis','D',100),
      new Pregunta('¿Comó se llama el museo','Poli-Museo','Museo-EPN','Gustavo Orces V.','No se bro disculpa','C',100)
    ];
    return items;
  }


}
