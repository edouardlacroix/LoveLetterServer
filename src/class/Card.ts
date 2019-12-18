import CardsDescription from "enums/cardsDescription";

export default class Card{
    private id:string;
    private rank:number;
    private description:string;
    private name:string;

    constructor( id:string,type:CardsDescription){
        this.id=id;
        this.rank=type.rank;
        this.description=type.description;
        this.name=type.name;
    }
}