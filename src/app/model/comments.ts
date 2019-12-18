//classe responsável por puxar os atributos de comments do JSON Playceholder
export class comments{
    constructor(
    public postId:number,
    public id:number,
    public name:string,
    public email:string,
    public body:string,
    ){}
}
