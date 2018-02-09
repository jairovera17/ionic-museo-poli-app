export class Pregunta{
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