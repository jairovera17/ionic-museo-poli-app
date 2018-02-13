//Clase pregunta
export class Pregunta{
    constructor(public pregunta:string,         //La pregunta
    public optionA:string,                      //Alternativa A
    public optionB:string,                      //Alternativa B
    public optionC:string,                      //Alternativa C
    public optionD:string,                      //Alternativa D
    public respuesta:string,                    //Respuesta de la pregunta debe ser  'A' 'B' 'C' o 'D'
    public puntos:number,                       //Puntaje de la pregunta
    public selected?:string){                   //Respuesta seleccionada - (Es usuado por el usuario)
    }
}