class CardsDescription{

    static readonly SPY= new CardsDescription(0,'ESPIONNE','#RUSSIE');
    static readonly GUARD= new CardsDescription(1,'GARDE','Le joueur désigne un adversaire et nomme une carte (sauf Garde). Si c\'est la carte que l\'adversaire a en main, alors l\'adversaire est éliminé de la manche.');
    static readonly PRIEST= new CardsDescription(2,'PRETRE','Le joueur regarde la carte qu\'un adversaire de son choix a en main.');
    static readonly BARON= new CardsDescription(3,'BARON',' Le joueur choisit un adversaire. Les deux se montrent leur carte : celui dont la valeur de la carte est la plus faible est éliminé de la manche. Si leurs valeurs sont égales, alors personne n\'est éliminé.');
    static readonly HANDMAID= new CardsDescription(4,'SERVANTE','Quand un joueur joue la Servante, il ne peut pas subir l\'effet d\'autres cartes pendant un tour, jusqu\'à ce qu\'il joue de nouveau.');
    static readonly PRINCE= new CardsDescription(5,'PRINCE','Le joueur choisit un joueur (lui compris) qui défausse sa carte et en pioche une autre immédiatement.');
    static readonly CHANCELLOR = new CardsDescription(6,'CHANCELIER','regarde 3 cartes');
    static readonly KING= new CardsDescription(7,'ROI','Le joueur échange sa carte avec celle d\'un autre joueur de son choix.');
    static readonly COUNTESS= new CardsDescription(8,'COMTESSE','Elle n\'a pas de pouvoir en soi, mais doit obligatoirement être jouée si le joueur qui la possède a aussi en main un Prince ou un Roi.');
    static readonly PRINCESS= new CardsDescription(9,'PRINCESSE','Elle n\'a pas de pouvoir en soi, mais doit obligatoirement être jouée si le joueur qui la possède a aussi en main un Prince ou un Roi.');

    private constructor(public readonly rank:number, public readonly name:string, public readonly description:string){

    }
}
export default CardsDescription;