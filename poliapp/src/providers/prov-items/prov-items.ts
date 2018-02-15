import { Injectable } from '@angular/core';
import { Item } from '../../models/item'; 


@Injectable()
export class ProvItemsProvider {

  items: Item[]=[];             //Contiene los animales



  defaultItem: any ={
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear."
  };

  constructor() {

            //Cada item debe tener nombre(name) imagen(profilePic) y informacion(about)

    let items = [
      /*{
        "name": "Burt Bear",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Burt is a Bear."
      },
      {
        "name": "Charlie Cheetah",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Charlie is a Cheetah."
      },
      {
        "name": "Donald Duck",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Donald is a Duck."
      },
      {
        "name": "Eva Eagle",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "name": "Ellie Elephant",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Ellie is an Elephant."
      },
      {
        "name": "Molly Mouse",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Molly is a Mouse."
      },
      {
        "name": "Paul Puppy",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Paul is a Puppy."
      },*/
      {
        "name": "Colibri",
        "profilePic": "assets/museo-resource/colibri.png",
        "about": "Oreotrochilus chimborazo, conocido como: “estrella ecuatoriana”, se alimenta del néctar de las flores de la chuquiragua; a cambio, esta ave contribuye con la polinización, llevando adherido al pico el polen que se desprenderá al visitar la siguiente flor."
      },
      {
        "name": "Tortuga Galápagos",
        "profilePic": "assets/museo-resource/tortuga-galapagos.png",
        "about": "Es endémica de Galápagos, se alimenta de hierbas rastreras, frutas, hojas y cactus, ocasionalmente de carroña. Las especies domésticas introducidas por el hombre son plagas para las tortugas y ponen en riesgo su existencia."
      },
      {
        "name": "Hoatzín",
        "profilePic": "assets/museo-resource/hoatzin.png",
        "about": "Llamado también pava hedionda. Son aves extrañas, los pichones tienen dos garras en cada ala, que le ayudan a sujetarse de las ramas. Se alimentan de gran cantidad de hojas y frutos y su digestión es por fermentación bacteriana. "
      },
      {
        "name": "Tapir",
        "profilePic": "assets/museo-resource/danta.png",
        "about": "Tapirus terrestris es el mamífero terrestre más grande que aún habita en las selvas cercanas a ríos grandes y lagunas de la Amazonía. Mide unos 2 m de longitud y 1.30 m de alto, pesa unos 270 Kg. El período de gestación dura de 13 meses; nace una sola cría y en raras ocasiones dos. Las dantas jóvenes, tienen unas rayas blancas horizontales en todo su cuerpo, que les permite confundirse entre la vegetación."
      },
      {
        "name": "Medusa",
        "profilePic": "assets/museo-resource/medusa.png",
        "about": "Esta especie es considerada peligrosa para los bañistas porque al ser tocada desprende aguijones urticantes. El incremento de la temperatura en los mares y de sustancias como el Nitrógeno y Fósforo provenientes de los núcleos urbanos, acelera su ciclo vital llegando cada año miles de ellas hasta la línea costera."
      },
      {
        "name": "Pulpo",
        "profilePic": "assets/museo-resource/pulpo.png",
        "about": "Prefiere la zona marítima costera hasta 40 m de profundidad, son comunes en agujeros, bajo las piedras y entre las algas marinas."
      },
      {
        "name": "Piraña",
        "profilePic": "assets/museo-resource/pirana.png",
        "about": "Frecuenta los ríos, lagunas y quebradas, se alimenta de peces y frutos, constituye la presa de otros peces y los pescadores le capturan como alimento."
      },
      {
        "name": "Anaconda",
        "profilePic": "assets/museo-resource/anaconda.png",
        "about": "Es endémica de Sudamérica, habita en la selva oriental, pueden llegar a medir más de 8 m, son acuáticas, terrestres y nocturnas, para alimentarse atrapan capibaras, tapires, pecaríes, caimanes, aves, roedores. La destrucción del hábitat y la caza amenazan su existencia."
      },
      {
        "name": "Equis",
        "profilePic": "assets/museo-resource/equis.png",
        "about": "Habita en la selva tropical muy húmeda oriental, es terrestre, se oculta cerca al agua o entre la hojarasca; se alimenta de roedores y otros animales pequeños. El veneno es hemotóxico."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }


  //Regresa los items si no hay parametros 
  //Si los hay regresa el que coincida
  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  //Anade mas elementos al arreglo
  add(item: Item) {
    this.items.push(item);
  }

  //Borra elementos del arreglo
  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  

}
